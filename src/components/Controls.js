/**
 * Controls Component
 *
 * Manages all user interaction:
 * - OrbitControls for camera navigation
 * - lil-gui for settings panel
 * - Click detection for planet selection
 * - Hover effects
 * - Planet labels
 * - Keyboard shortcuts
 * - Time display and timeline
 * - Distance indicators
 * - Mini-map
 * - Audio system with Web Audio API
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { TIME_CONSTANTS, DISTANCE_SCALE } from '../data/planetData.js';
import { ASTRONOMICAL_EVENTS, EVENT_COLORS } from '../data/astronomicalEvents.js';
import { AudioSystem } from './AudioSystem.js';
import { dateToJulianDate, julianDateToDate } from '../utils/OrbitalMechanics.js';

export class Controls {
  constructor(camera, renderer, scene, planets, sun, dwarfPlanets = [], comet = null) {
    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;
    this.planets = planets;
    this.dwarfPlanets = dwarfPlanets;
    this.sun = sun;
    this.comet = comet;

    // Settings
    this.settings = {
      orbitSpeed: 1,
      showLabels: true,
      showOrbits: true,
      showMinimap: true,
      paused: false,
      focusedPlanet: 'None',
      // Audio settings
      audioMuted: true,
      masterVolume: 0.5,
      ambientVolume: 0.3,
      uiVolume: 0.5
    };

    // Audio system
    this.audioSystem = new AudioSystem();

    // Time tracking
    this.simulatedTime = 0; // Days since start
    this.startDate = new Date(TIME_CONSTANTS.simulationStartDate);
    this.currentJulianDate = dateToJulianDate(this.startDate); // Julian Date for orbital calculations

    // State
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredObject = null;
    this.selectedObject = null;
    this.selectedPlanet = null;

    // Camera animation state
    this.isAnimating = false;
    this.animationStart = null;
    this.animationDuration = 1500;
    this.startPosition = new THREE.Vector3();
    this.startTarget = new THREE.Vector3();
    this.endPosition = new THREE.Vector3();
    this.endTarget = new THREE.Vector3();

    // Labels
    this.labels = [];

    // Outline effect
    this.outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.5
    });

    // Components
    this.orbitControls = null;
    this.gui = null;
    this.minimapCanvas = null;
    this.minimapCtx = null;

    // Event notification tracking
    this.shownEventNotifications = new Set();
    this.activeNotifications = [];

    // Event visual effects
    this.eventVisuals = {
      activeEvents: new Map(),      // Currently active event visuals
      conjunctionLines: [],         // Lines connecting planets
      planetGlows: new Map(),       // Glow sprites added to planets
      originalScales: new Map()     // Store original planet scales
    };

    this.init();
  }

  init() {
    this.setupOrbitControls();
    this.setupGUI();
    this.setupEventListeners();
    this.setupKeyboardShortcuts();
    this.createLabels();
    this.createTimeDisplay();
    this.createMinimap();
    this.createNotificationContainer();
  }

  setupOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
    this.orbitControls.enableDamping = true;
    this.orbitControls.dampingFactor = 0.05;
    this.orbitControls.screenSpacePanning = false;
    this.orbitControls.minDistance = 2;
    this.orbitControls.maxDistance = 800;
    this.orbitControls.maxPolarAngle = Math.PI;

    this.camera.position.set(30, 20, 50);
    this.orbitControls.target.set(0, 0, 0);
    this.orbitControls.update();
  }

  setupGUI() {
    this.gui = new GUI({ title: 'Solar System Controls' });

    // Simulation controls
    const simFolder = this.gui.addFolder('Simulation');
    simFolder.add(this.settings, 'orbitSpeed', 0, 5, 0.1).name('Orbit Speed');
    simFolder.add(this.settings, 'paused').name('Paused (Space)');

    // Display controls
    const displayFolder = this.gui.addFolder('Display');
    displayFolder.add(this.settings, 'showLabels').name('Show Labels')
      .onChange((value) => this.toggleLabels(value));
    displayFolder.add(this.settings, 'showOrbits').name('Show Orbits')
      .onChange((value) => this.toggleOrbits(value));
    displayFolder.add(this.settings, 'showMinimap').name('Show Mini-map')
      .onChange((value) => this.toggleMinimap(value));

    // Camera controls
    const cameraFolder = this.gui.addFolder('Camera');
    const allBodies = [
      'Sun',
      ...this.planets.map(p => p.data.name),
      ...this.dwarfPlanets.map(p => p.data.name),
      ...(this.comet ? ["Halley's Comet"] : [])
    ];

    cameraFolder.add(this.settings, 'focusedPlanet', ['None', ...allBodies])
      .name('Focus On')
      .onChange((value) => this.focusByName(value));

    // Audio controls
    const audioFolder = this.gui.addFolder('Audio');
    audioFolder.add(this.settings, 'audioMuted').name('Muted (M)')
      .onChange((value) => {
        if (value) {
          this.audioSystem.mute();
        } else {
          this.audioSystem.unmute();
        }
      });
    audioFolder.add(this.settings, 'masterVolume', 0, 1, 0.05).name('Master Volume')
      .onChange((value) => this.audioSystem.setMasterVolume(value));
    audioFolder.add(this.settings, 'ambientVolume', 0, 1, 0.05).name('Ambient Volume')
      .onChange((value) => this.audioSystem.setAmbientVolume(value));
    audioFolder.add(this.settings, 'uiVolume', 0, 1, 0.05).name('UI Sounds')
      .onChange((value) => this.audioSystem.setUIVolume(value));

    simFolder.open();
    displayFolder.open();
    cameraFolder.open();
    audioFolder.open();
  }

  setupEventListeners() {
    this.renderer.domElement.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.renderer.domElement.addEventListener('click', (e) => this.onClick(e));
    document.getElementById('close-panel').addEventListener('click', () => this.closeInfoPanel());
    window.addEventListener('resize', () => this.onWindowResize());
  }

  /**
   * Setup keyboard shortcuts
   */
  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (event) => {
      // Ignore if typing in an input
      if (event.target.tagName === 'INPUT') return;

      switch (event.key) {
        case '0':
          this.focusByName('Sun');
          break;
        case '1':
          this.focusByName('Mercury');
          break;
        case '2':
          this.focusByName('Venus');
          break;
        case '3':
          this.focusByName('Earth');
          break;
        case '4':
          this.focusByName('Mars');
          break;
        case '5':
          this.focusByName('Jupiter');
          break;
        case '6':
          this.focusByName('Saturn');
          break;
        case '7':
          this.focusByName('Uranus');
          break;
        case '8':
          this.focusByName('Neptune');
          break;
        case 'p':
        case 'P':
          this.focusByName('Pluto');
          break;
        case 'c':
        case 'C':
          this.focusByName('Ceres');
          break;
        case 'h':
        case 'H':
          this.focusByName("Halley's Comet");
          break;
        case ' ':
          event.preventDefault();
          this.settings.paused = !this.settings.paused;
          this.gui.controllersRecursive().find(c => c.property === 'paused')?.updateDisplay();
          break;
        case 'r':
        case 'R':
          this.resetCamera();
          break;
        case 'Escape':
          this.closeInfoPanel();
          break;
        case 'm':
        case 'M':
          this.settings.audioMuted = this.audioSystem.toggleMute();
          this.gui.controllersRecursive().find(c => c.property === 'audioMuted')?.updateDisplay();
          break;
      }
    });
  }

  /**
   * Focus on a celestial body by name
   */
  focusByName(name) {
    this.settings.focusedPlanet = name;
    this.gui.controllersRecursive().find(c => c.property === 'focusedPlanet')?.updateDisplay();

    if (name === 'None') {
      this.resetCamera();
      return;
    }

    // Play focus sound
    this.audioSystem.playFocusSound(name);

    if (name === 'Sun') {
      this.focusOnObject(this.sun.getMesh());
      this.showSunInfo();
      return;
    }

    // Check comet
    if (name === "Halley's Comet" && this.comet) {
      this.focusOnComet();
      this.showCometInfo();
      return;
    }

    // Check planets
    let target = this.planets.find(p => p.data.name === name);
    if (!target) {
      target = this.dwarfPlanets.find(p => p.data.name === name);
    }

    if (target) {
      this.focusOnPlanet(target);
      this.showPlanetInfo(target);
    }
  }

  /**
   * Create time display UI
   */
  createTimeDisplay() {
    const container = document.getElementById('app');

    const timeDisplay = document.createElement('div');
    timeDisplay.id = 'time-display';
    timeDisplay.innerHTML = `
      <div class="time-date" id="sim-date">January 1, 2024</div>
      <div class="time-controls">
        <div class="event-markers" id="event-markers"></div>
        <input type="range" id="time-slider" min="-36500" max="36500" value="0" step="1">
        <div class="time-labels">
          <span>-100 years</span>
          <span>Now</span>
          <span>+100 years</span>
        </div>
      </div>
      <div class="event-tooltip" id="event-tooltip"></div>
    `;
    container.appendChild(timeDisplay);

    // Timeline slider handler
    const slider = document.getElementById('time-slider');
    slider.addEventListener('input', (e) => {
      this.simulatedTime = parseFloat(e.target.value);
    });

    // Create event markers
    this.createEventMarkers();
  }

  /**
   * Create event markers on the timeline
   */
  createEventMarkers() {
    const markersContainer = document.getElementById('event-markers');
    const tooltip = document.getElementById('event-tooltip');

    // Timeline range: -36500 to 36500 days from start date (Jan 1, 2024)
    const minDays = -36500;
    const maxDays = 36500;
    const totalRange = maxDays - minDays;

    ASTRONOMICAL_EVENTS.forEach(event => {
      const eventDate = new Date(event.date);
      const daysDiff = Math.floor((eventDate - this.startDate) / (1000 * 60 * 60 * 24));

      // Skip events outside the timeline range
      if (daysDiff < minDays || daysDiff > maxDays) return;

      // Calculate position as percentage
      const position = ((daysDiff - minDays) / totalRange) * 100;

      // Create marker element
      const marker = document.createElement('div');
      marker.className = 'event-marker';
      marker.style.left = `${position}%`;
      marker.style.backgroundColor = EVENT_COLORS[event.type] || '#ffffff';
      marker.dataset.date = event.date;
      marker.dataset.name = event.name;
      marker.dataset.days = daysDiff;

      // Hover events
      marker.addEventListener('mouseenter', (e) => {
        const formattedDate = eventDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        tooltip.innerHTML = `<strong>${formattedDate}</strong><br>${event.name}`;
        tooltip.style.display = 'block';

        // Position tooltip above the marker
        const rect = marker.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const containerRect = markersContainer.getBoundingClientRect();

        // Center tooltip on marker, but keep within bounds
        let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        left = Math.max(containerRect.left, Math.min(left, containerRect.right - tooltipRect.width));

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${rect.top - tooltipRect.height - 8}px`;
      });

      marker.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });

      // Click to jump to date
      marker.addEventListener('click', () => {
        this.simulatedTime = daysDiff;
        const slider = document.getElementById('time-slider');
        if (slider) {
          slider.value = daysDiff;
        }
        // Play a sound effect
        this.audioSystem.playSelectSound('event');
      });

      markersContainer.appendChild(marker);
    });
  }

  /**
   * Create notification container for event proximity alerts
   */
  createNotificationContainer() {
    const container = document.getElementById('app');

    const notificationContainer = document.createElement('div');
    notificationContainer.id = 'event-notifications';
    container.appendChild(notificationContainer);
  }

  /**
   * Check if current date is near any astronomical events
   */
  checkEventProximity() {
    const proximityDays = 30;

    ASTRONOMICAL_EVENTS.forEach(event => {
      const eventDate = new Date(event.date);
      const daysDiff = Math.floor((eventDate - this.startDate) / (1000 * 60 * 60 * 24));

      // Check if we're within proximity of this event
      const daysFromEvent = Math.abs(this.simulatedTime - daysDiff);

      if (daysFromEvent <= proximityDays) {
        // Only show notification if we haven't shown it yet
        const eventKey = `${event.date}-${event.name}`;
        if (!this.shownEventNotifications.has(eventKey)) {
          this.shownEventNotifications.add(eventKey);
          this.showEventNotification(event, daysDiff);
        }
      }
    });
  }

  /**
   * Show a notification for an astronomical event
   */
  showEventNotification(event, eventDays) {
    const container = document.getElementById('event-notifications');
    if (!container) return;

    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Get color for event type
    const color = EVENT_COLORS[event.type] || '#88ccff';

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'event-notification';
    notification.innerHTML = `
      <div class="event-notification-icon" style="background-color: ${color};"></div>
      <div class="event-notification-content">
        <div class="event-notification-title">${event.name}</div>
        <div class="event-notification-date">${formattedDate}</div>
      </div>
      <div class="event-notification-actions">
        <button class="event-notification-jump">Jump to Date</button>
        <button class="event-notification-close">&times;</button>
      </div>
    `;

    // Add to container
    container.appendChild(notification);
    this.activeNotifications.push(notification);

    // Trigger animation after a frame
    requestAnimationFrame(() => {
      notification.classList.add('visible');
    });

    // Jump to date button
    const jumpBtn = notification.querySelector('.event-notification-jump');
    jumpBtn.addEventListener('click', () => {
      this.simulatedTime = eventDays;
      const slider = document.getElementById('time-slider');
      if (slider) {
        slider.value = eventDays;
      }
      this.audioSystem.playSelectSound('event');
      this.dismissNotification(notification);
    });

    // Close button
    const closeBtn = notification.querySelector('.event-notification-close');
    closeBtn.addEventListener('click', () => {
      this.dismissNotification(notification);
    });

    // Auto-dismiss after 6 seconds
    setTimeout(() => {
      this.dismissNotification(notification);
    }, 6000);
  }

  /**
   * Dismiss a notification with animation
   */
  dismissNotification(notification) {
    if (!notification || !notification.parentNode) return;

    notification.classList.remove('visible');
    notification.classList.add('hiding');

    // Remove after animation completes
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      const index = this.activeNotifications.indexOf(notification);
      if (index > -1) {
        this.activeNotifications.splice(index, 1);
      }
    }, 300);
  }

  /**
   * Update visual effects for nearby astronomical events
   */
  updateEventVisuals(elapsedTime) {
    const proximityDays = 30;
    const activeEventKeys = new Set();

    ASTRONOMICAL_EVENTS.forEach(event => {
      if (!event.planets || event.planets.length === 0) return;

      const eventDate = new Date(event.date);
      const daysDiff = Math.floor((eventDate - this.startDate) / (1000 * 60 * 60 * 24));
      const daysFromEvent = Math.abs(this.simulatedTime - daysDiff);

      if (daysFromEvent <= proximityDays) {
        const eventKey = `${event.date}-${event.name}`;
        activeEventKeys.add(eventKey);

        // Calculate intensity (1.0 on exact day, fading to 0 at ±30 days)
        const intensity = 1 - (daysFromEvent / proximityDays);

        // Create or update visuals for this event
        if (!this.eventVisuals.activeEvents.has(eventKey)) {
          this.createEventVisuals(event, eventKey);
        }

        // Update visuals with current intensity and time
        this.updateEventVisualIntensity(event, eventKey, intensity, elapsedTime);
      }
    });

    // Clean up visuals for events we've moved away from
    for (const [eventKey, visualData] of this.eventVisuals.activeEvents) {
      if (!activeEventKeys.has(eventKey)) {
        this.removeEventVisuals(eventKey);
      }
    }
  }

  /**
   * Create visual effects for an event
   */
  createEventVisuals(event, eventKey) {
    const visualData = {
      event: event,
      lines: [],
      glows: []
    };

    const eventColor = new THREE.Color(EVENT_COLORS[event.type] || '#ffffff');

    if (event.type === 'conjunction' || event.type === 'occultation') {
      // Create line connecting the two planets
      if (event.planets.length >= 2) {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: eventColor,
          transparent: true,
          opacity: 0,
          linewidth: 2,
          blending: THREE.AdditiveBlending
        });

        const lineGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6); // 2 points x 3 coords
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const line = new THREE.Line(lineGeometry, lineMaterial);
        line.frustumCulled = false;
        this.scene.add(line);
        visualData.lines.push(line);
      }

      // Create glow sprites for involved planets
      event.planets.forEach(planetName => {
        const glow = this.createPlanetEventGlow(planetName, eventColor);
        if (glow) {
          visualData.glows.push({ planetName, glow });
        }
      });

    } else if (event.type === 'approach') {
      // For close approaches (like Mars), create enhanced glow
      event.planets.forEach(planetName => {
        const glow = this.createPlanetEventGlow(planetName, eventColor, 2.0);
        if (glow) {
          visualData.glows.push({ planetName, glow });
        }

        // Store original scale for restoration
        const planet = this.getPlanetByName(planetName);
        if (planet && planet.planetMesh) {
          if (!this.eventVisuals.originalScales.has(planetName)) {
            this.eventVisuals.originalScales.set(planetName, planet.planetMesh.scale.clone());
          }
        }
      });

    } else if (event.type === 'alignment') {
      // Create connecting lines between all planets in alignment
      const planets = event.planets.map(name => this.getPlanetByName(name)).filter(p => p);

      for (let i = 0; i < planets.length - 1; i++) {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: eventColor,
          transparent: true,
          opacity: 0,
          linewidth: 1,
          blending: THREE.AdditiveBlending
        });

        const lineGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6);
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const line = new THREE.Line(lineGeometry, lineMaterial);
        line.frustumCulled = false;
        line.userData.planetIndices = [i, i + 1];
        line.userData.planetNames = [event.planets[i], event.planets[i + 1]];
        this.scene.add(line);
        visualData.lines.push(line);
      }

      // Subtle glow on all planets
      event.planets.forEach(planetName => {
        const glow = this.createPlanetEventGlow(planetName, eventColor, 0.6);
        if (glow) {
          visualData.glows.push({ planetName, glow });
        }
      });

    } else if (event.type === 'transit') {
      // Transit events - glow on the transiting planet
      event.planets.forEach(planetName => {
        const glow = this.createPlanetEventGlow(planetName, eventColor, 1.5);
        if (glow) {
          visualData.glows.push({ planetName, glow });
        }
      });
    }

    this.eventVisuals.activeEvents.set(eventKey, visualData);
  }

  /**
   * Create a glow sprite for a planet during an event
   */
  createPlanetEventGlow(planetName, color, intensityMultiplier = 1.0) {
    const planet = this.getPlanetByName(planetName);
    if (!planet || !planet.planetMesh) return null;

    // Create glow sprite
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const r = Math.floor(color.r * 255);
    const g = Math.floor(color.g * 255);
    const b = Math.floor(color.b * 255);

    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`);
    gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.4)`);
    gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.15)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const sprite = new THREE.Sprite(spriteMaterial);
    const baseSize = planet.data.radius * 4 * intensityMultiplier;
    sprite.scale.set(baseSize, baseSize, 1);
    sprite.userData.baseSize = baseSize;
    sprite.userData.intensityMultiplier = intensityMultiplier;

    planet.planetMesh.add(sprite);

    return sprite;
  }

  /**
   * Update visual intensity based on proximity to event date
   */
  updateEventVisualIntensity(event, eventKey, intensity, elapsedTime) {
    const visualData = this.eventVisuals.activeEvents.get(eventKey);
    if (!visualData) return;

    // Pulsing effect
    const pulse = 0.7 + 0.3 * Math.sin(elapsedTime * 3);
    const effectiveIntensity = intensity * pulse;

    // Update conjunction/occultation lines
    if ((event.type === 'conjunction' || event.type === 'occultation') && visualData.lines.length > 0) {
      const planet1 = this.getPlanetByName(event.planets[0]);
      const planet2 = this.getPlanetByName(event.planets[1]);

      if (planet1 && planet2) {
        const pos1 = planet1.getWorldPosition();
        const pos2 = planet2.getWorldPosition();

        const line = visualData.lines[0];
        const positions = line.geometry.attributes.position.array;
        positions[0] = pos1.x;
        positions[1] = pos1.y;
        positions[2] = pos1.z;
        positions[3] = pos2.x;
        positions[4] = pos2.y;
        positions[5] = pos2.z;
        line.geometry.attributes.position.needsUpdate = true;

        line.material.opacity = effectiveIntensity * 0.6;
      }
    }

    // Update alignment lines
    if (event.type === 'alignment') {
      visualData.lines.forEach(line => {
        const names = line.userData.planetNames;
        if (names && names.length === 2) {
          const planet1 = this.getPlanetByName(names[0]);
          const planet2 = this.getPlanetByName(names[1]);

          if (planet1 && planet2) {
            const pos1 = planet1.getWorldPosition();
            const pos2 = planet2.getWorldPosition();

            const positions = line.geometry.attributes.position.array;
            positions[0] = pos1.x;
            positions[1] = pos1.y;
            positions[2] = pos1.z;
            positions[3] = pos2.x;
            positions[4] = pos2.y;
            positions[5] = pos2.z;
            line.geometry.attributes.position.needsUpdate = true;

            line.material.opacity = effectiveIntensity * 0.3;
          }
        }
      });
    }

    // Update planet glows
    visualData.glows.forEach(({ planetName, glow }) => {
      if (glow && glow.material) {
        const glowIntensity = effectiveIntensity * (glow.userData.intensityMultiplier || 1.0);
        glow.material.opacity = glowIntensity * 0.8;

        // Pulsing scale
        const baseSize = glow.userData.baseSize || 1;
        const scaleMultiplier = 1 + 0.15 * Math.sin(elapsedTime * 4);
        glow.scale.set(baseSize * scaleMultiplier, baseSize * scaleMultiplier, 1);
      }
    });

    // Scale up planets for close approaches
    if (event.type === 'approach') {
      event.planets.forEach(planetName => {
        const planet = this.getPlanetByName(planetName);
        if (planet && planet.planetMesh) {
          const originalScale = this.eventVisuals.originalScales.get(planetName);
          if (originalScale) {
            const scaleBoost = 1 + (0.2 * intensity); // Up to 1.2x at peak
            planet.planetMesh.scale.copy(originalScale).multiplyScalar(scaleBoost);
          }
        }
      });
    }
  }

  /**
   * Remove visual effects for an event
   */
  removeEventVisuals(eventKey) {
    const visualData = this.eventVisuals.activeEvents.get(eventKey);
    if (!visualData) return;

    // Remove lines
    visualData.lines.forEach(line => {
      this.scene.remove(line);
      line.geometry.dispose();
      line.material.dispose();
    });

    // Remove glows
    visualData.glows.forEach(({ planetName, glow }) => {
      if (glow && glow.parent) {
        glow.parent.remove(glow);
        if (glow.material.map) {
          glow.material.map.dispose();
        }
        glow.material.dispose();
      }
    });

    // Restore original scales for approach events
    if (visualData.event.type === 'approach') {
      visualData.event.planets.forEach(planetName => {
        const planet = this.getPlanetByName(planetName);
        const originalScale = this.eventVisuals.originalScales.get(planetName);
        if (planet && planet.planetMesh && originalScale) {
          planet.planetMesh.scale.copy(originalScale);
        }
      });
    }

    this.eventVisuals.activeEvents.delete(eventKey);
  }

  /**
   * Get a planet object by name
   */
  getPlanetByName(name) {
    let planet = this.planets.find(p => p.data.name === name);
    if (!planet) {
      planet = this.dwarfPlanets.find(p => p.data.name === name);
    }
    return planet;
  }

  /**
   * Update time display and calculate Julian Date for orbital mechanics
   */
  updateTimeDisplay(deltaTime) {
    if (!this.settings.paused) {
      // Add simulated time based on speed
      this.simulatedTime += deltaTime * this.settings.orbitSpeed * 30; // ~30 days per second at speed 1
    }

    // Calculate display date
    const displayDate = new Date(this.startDate);
    displayDate.setDate(displayDate.getDate() + this.simulatedTime);

    // Calculate Julian Date for orbital mechanics
    this.currentJulianDate = dateToJulianDate(displayDate);

    const dateEl = document.getElementById('sim-date');
    if (dateEl) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      dateEl.textContent = displayDate.toLocaleDateString('en-US', options);
    }

    // Update slider position
    const slider = document.getElementById('time-slider');
    if (slider && !slider.matches(':active')) {
      slider.value = Math.max(-36500, Math.min(36500, this.simulatedTime));
    }

    // Check for nearby astronomical events
    this.checkEventProximity();
  }

  /**
   * Get current Julian Date for orbital calculations
   */
  getJulianDate() {
    return this.currentJulianDate;
  }

  /**
   * Create mini-map
   */
  createMinimap() {
    const container = document.getElementById('app');

    const minimapContainer = document.createElement('div');
    minimapContainer.id = 'minimap-container';
    minimapContainer.innerHTML = `
      <div class="minimap-title">Top View</div>
      <canvas id="minimap" width="200" height="200"></canvas>
    `;
    container.appendChild(minimapContainer);

    this.minimapCanvas = document.getElementById('minimap');
    this.minimapCtx = this.minimapCanvas.getContext('2d');
  }

  /**
   * Update mini-map
   */
  updateMinimap() {
    if (!this.settings.showMinimap || !this.minimapCtx) return;

    const ctx = this.minimapCtx;
    const width = this.minimapCanvas.width;
    const height = this.minimapCanvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Scale factor - show out to Neptune
    const maxDistance = 35 * DISTANCE_SCALE;
    const scale = (width / 2 - 10) / maxDistance;

    // Clear
    ctx.fillStyle = 'rgba(0, 0, 20, 0.9)';
    ctx.fillRect(0, 0, width, height);

    // Draw orbit circles
    ctx.strokeStyle = 'rgba(100, 100, 150, 0.3)';
    ctx.lineWidth = 0.5;
    this.planets.forEach(planet => {
      const radius = planet.data.distance * scale;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Draw Sun
    ctx.fillStyle = '#ffdd44';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
    ctx.fill();

    // Draw planets
    this.planets.forEach(planet => {
      const pos = planet.getWorldPosition();
      const x = centerX + pos.x * scale;
      const y = centerY + pos.z * scale;

      // Planet dot
      ctx.fillStyle = '#' + planet.data.color.toString(16).padStart(6, '0');
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();

      // Planet name (for inner planets only)
      if (planet.data.distance < 20) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '8px sans-serif';
        ctx.fillText(planet.data.name[0], x + 4, y + 3);
      }
    });

    // Draw dwarf planets
    this.dwarfPlanets.forEach(planet => {
      const pos = planet.getWorldPosition();
      const x = centerX + pos.x * scale;
      const y = centerY + pos.z * scale;

      ctx.fillStyle = 'rgba(150, 150, 150, 0.8)';
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw camera position indicator
    const camX = centerX + this.orbitControls.target.x * scale;
    const camY = centerY + this.orbitControls.target.z * scale;
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(camX, camY, 6, 0, Math.PI * 2);
    ctx.stroke();
  }

  toggleMinimap(visible) {
    const minimap = document.getElementById('minimap-container');
    if (minimap) {
      minimap.style.display = visible ? 'block' : 'none';
    }
  }

  createLabels() {
    const container = document.getElementById('app');

    // Sun label
    const sunLabel = this.createLabel('Sun');
    this.labels.push({ element: sunLabel, object: this.sun.getMesh(), offset: new THREE.Vector3(0, 3, 0) });
    container.appendChild(sunLabel);

    // Planet labels
    this.planets.forEach(planet => {
      const label = this.createLabel(planet.data.name);
      this.labels.push({
        element: label,
        planet: planet,
        offset: new THREE.Vector3(0, planet.data.radius + 0.5, 0)
      });
      container.appendChild(label);

      // Moon labels
      planet.moons.forEach(moon => {
        const moonLabel = this.createLabel(moon.data.name);
        this.labels.push({
          element: moonLabel,
          moonMesh: moon.mesh,
          offset: new THREE.Vector3(0, moon.data.radius + 0.2, 0)
        });
        container.appendChild(moonLabel);
      });
    });

    // Dwarf planet labels
    this.dwarfPlanets.forEach(planet => {
      const label = this.createLabel(planet.data.name);
      label.classList.add('dwarf-planet-label');
      this.labels.push({
        element: label,
        planet: planet,
        offset: new THREE.Vector3(0, planet.data.radius + 0.3, 0)
      });
      container.appendChild(label);
    });

    // Comet label
    if (this.comet) {
      const cometLabel = this.createLabel("Halley's Comet");
      cometLabel.style.cursor = 'pointer';
      cometLabel.addEventListener('click', () => {
        this.selectCometFromLabel();
      });
      this.labels.push({
        element: cometLabel,
        comet: this.comet,
        offset: new THREE.Vector3(0, 3, 0)  // Offset above the comet
      });
      container.appendChild(cometLabel);
    }
  }

  createLabel(text) {
    const label = document.createElement('div');
    label.className = 'planet-label';
    label.textContent = text;
    return label;
  }

  updateLabels() {
    if (!this.settings.showLabels) return;

    this.labels.forEach(labelData => {
      let position = new THREE.Vector3();

      if (labelData.planet) {
        position = labelData.planet.getWorldPosition();
        position.add(labelData.offset);
      } else if (labelData.moonMesh) {
        labelData.moonMesh.getWorldPosition(position);
        position.add(labelData.offset);
      } else if (labelData.comet) {
        position = labelData.comet.getWorldPosition();
        position.add(labelData.offset);
      } else if (labelData.object) {
        labelData.object.getWorldPosition(position);
        position.add(labelData.offset);
      }

      const screenPosition = position.clone().project(this.camera);

      if (screenPosition.z > 1) {
        labelData.element.style.display = 'none';
        return;
      }

      const x = (screenPosition.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-screenPosition.y * 0.5 + 0.5) * window.innerHeight;

      labelData.element.style.display = 'block';
      labelData.element.style.left = `${x}px`;
      labelData.element.style.top = `${y}px`;
    });
  }

  toggleLabels(visible) {
    this.labels.forEach(labelData => {
      labelData.element.style.display = visible ? 'block' : 'none';
    });
  }

  toggleOrbits(visible) {
    [...this.planets, ...this.dwarfPlanets].forEach(planet => {
      if (planet.orbitLine) {
        planet.orbitLine.visible = visible;
      }
    });
  }

  onMouseMove(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const clickables = this.getClickableObjects();
    const intersects = this.raycaster.intersectObjects(clickables);

    if (intersects.length > 0) {
      const object = intersects[0].object;

      if (this.hoveredObject !== object) {
        this.removeHighlight();
        this.hoveredObject = object;
        this.addHighlight(object);
        this.renderer.domElement.style.cursor = 'pointer';
        // Play hover sound
        this.audioSystem.playHoverSound();
      }
    } else {
      this.removeHighlight();
      this.hoveredObject = null;
      this.renderer.domElement.style.cursor = 'default';
    }
  }

  onClick(event) {
    if (this.isAnimating) return;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const clickables = this.getClickableObjects();
    const intersects = this.raycaster.intersectObjects(clickables);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      this.selectObject(object);
    }
  }

  getClickableObjects() {
    const objects = [this.sun.sunMesh];

    [...this.planets, ...this.dwarfPlanets].forEach(planet => {
      objects.push(...planet.getClickableObjects());
    });

    // Add comet clickable objects
    if (this.comet) {
      objects.push(...this.comet.getClickableObjects());
    }

    return objects;
  }

  addHighlight(object) {
    if (!object.userData.clickable) return;

    const outlineGeometry = object.geometry.clone();
    const outlineMesh = new THREE.Mesh(outlineGeometry, this.outlineMaterial);
    outlineMesh.scale.multiplyScalar(1.1);
    outlineMesh.name = 'highlight';

    object.add(outlineMesh);
  }

  removeHighlight() {
    if (this.hoveredObject) {
      const highlight = this.hoveredObject.getObjectByName('highlight');
      if (highlight) {
        this.hoveredObject.remove(highlight);
        highlight.geometry.dispose();
      }
    }
  }

  selectObject(object) {
    this.selectedObject = object;

    // Play select sound
    const bodyName = object.userData.name || 'default';
    this.audioSystem.playSelectSound(bodyName);

    // Find the planet/dwarf planet this belongs to
    let targetPlanet = null;

    if (object.userData.name === 'Sun') {
      this.showSunInfo();
      this.focusOnObject(this.sun.getMesh());
      this.audioSystem.playFocusSound('Sun');
      return;
    }

    // Check if it's a planet
    targetPlanet = [...this.planets, ...this.dwarfPlanets].find(p =>
      p.data.name === object.userData.name
    );

    if (targetPlanet) {
      this.showPlanetInfo(targetPlanet);
      this.focusOnPlanet(targetPlanet);
      this.audioSystem.playFocusSound(targetPlanet.data.name);
      return;
    }

    // Check if it's a moon
    for (const planet of [...this.planets, ...this.dwarfPlanets]) {
      const moon = planet.moons.find(m => m.data.name === object.userData.name);
      if (moon) {
        this.showMoonInfo(moon, planet);
        this.focusOnMoon(moon);
        this.audioSystem.playFocusSound(moon.data.name);
        return;
      }
    }

    // Check if it's the comet
    if (object.userData.isComet && this.comet) {
      this.showCometInfo();
      this.focusOnComet();
      this.audioSystem.playFocusSound("Halley's Comet");
      return;
    }
  }

  /**
   * Show Sun info panel
   */
  showSunInfo() {
    const panel = document.getElementById('info-panel');
    const nameEl = document.getElementById('planet-name');
    const factsEl = document.getElementById('planet-facts');

    nameEl.textContent = 'Sun';

    let html = '<div class="planet-icon sun-icon"></div>';
    const facts = this.sun.data.facts;
    for (const [key, value] of Object.entries(facts)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      html += `<p><strong>${label}:</strong> ${value}</p>`;
    }

    factsEl.innerHTML = html;
    panel.classList.remove('hidden');
  }

  /**
   * Show planet info with enhanced details
   */
  showPlanetInfo(planet) {
    this.selectedPlanet = planet;
    const panel = document.getElementById('info-panel');
    const nameEl = document.getElementById('planet-name');
    const factsEl = document.getElementById('planet-facts');

    nameEl.textContent = planet.data.name;

    let html = `<div class="planet-icon" style="background: #${planet.data.color.toString(16).padStart(6, '0')};"></div>`;

    // Distance indicator
    const distanceAU = planet.getDistanceFromSun();
    const distanceKm = (distanceAU * 149597870.7).toLocaleString();
    html += `<div class="distance-indicator">
      <p><strong>Distance from Sun:</strong></p>
      <p>${distanceAU.toFixed(2)} AU (${distanceKm} km)</p>
    </div>`;

    // Orbital position
    const orbitalPos = planet.getOrbitalPosition();
    html += `<p><strong>Orbital Position:</strong> ${orbitalPos.toFixed(1)}°</p>`;

    // Facts
    const facts = planet.data.facts;
    for (const [key, value] of Object.entries(facts)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      html += `<p><strong>${label}:</strong> ${value}</p>`;
    }

    // Earth comparison
    if (planet.data.earthComparison) {
      const comp = planet.data.earthComparison;
      html += `<div class="earth-comparison">
        <p><strong>Compared to Earth:</strong></p>
        <p>Size: ${comp.sizeRatio.toFixed(3)}x Earth</p>
        <p>Gravity: ${comp.gravityRatio.toFixed(2)}x Earth</p>
        <p>Mass: ${comp.massRatio.toFixed(4)}x Earth</p>
      </div>`;
    }

    factsEl.innerHTML = html;
    panel.classList.remove('hidden');
  }

  /**
   * Show moon info
   */
  showMoonInfo(moon, parentPlanet) {
    const panel = document.getElementById('info-panel');
    const nameEl = document.getElementById('planet-name');
    const factsEl = document.getElementById('planet-facts');

    nameEl.textContent = moon.data.name;

    let html = `<div class="planet-icon moon-icon"></div>`;
    html += `<p><strong>Orbits:</strong> ${parentPlanet.data.name}</p>`;

    const facts = moon.data.facts;
    for (const [key, value] of Object.entries(facts)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      html += `<p><strong>${label}:</strong> ${value}</p>`;
    }

    factsEl.innerHTML = html;
    panel.classList.remove('hidden');
  }

  /**
   * Show comet info panel
   */
  showCometInfo() {
    if (!this.comet) return;

    const panel = document.getElementById('info-panel');
    const nameEl = document.getElementById('planet-name');
    const factsEl = document.getElementById('planet-facts');

    nameEl.textContent = "Halley's Comet";

    let html = `<div class="planet-icon" style="background: radial-gradient(circle, #aaddff, #4466aa);"></div>`;
    html += `<p><strong>Designation:</strong> ${this.comet.data.designation}</p>`;

    // Orbital information
    html += `<div class="distance-indicator">
      <p><strong>Orbital Elements:</strong></p>
      <p>Period: ${this.comet.data.orbitalPeriod.toFixed(2)} years</p>
      <p>Perihelion: ${this.comet.data.perihelion.toFixed(3)} AU</p>
      <p>Aphelion: ${this.comet.data.aphelion.toFixed(2)} AU</p>
      <p>Eccentricity: ${this.comet.data.eccentricity.toFixed(4)}</p>
      <p>Inclination: ${this.comet.data.inclination.toFixed(2)}° (retrograde)</p>
    </div>`;

    // Perihelion dates
    html += `<p><strong>Last Perihelion:</strong> ${this.comet.data.lastPerihelion.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>`;
    html += `<p><strong>Next Perihelion:</strong> ${this.comet.data.nextPerihelion.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>`;

    // Facts
    const facts = this.comet.data.facts;
    if (facts) {
      for (const [key, value] of Object.entries(facts)) {
        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        html += `<p><strong>${label}:</strong> ${value}</p>`;
      }
    }

    factsEl.innerHTML = html;
    panel.classList.remove('hidden');
  }

  /**
   * Focus camera on the comet
   */
  focusOnComet() {
    if (!this.comet) return;
    const targetPosition = this.comet.getWorldPosition();
    this.animateCameraTo(targetPosition, 15);  // Distance of 15 units for good view of tail
  }

  /**
   * Handle clicking on comet label
   */
  selectCometFromLabel() {
    if (!this.comet) return;
    this.audioSystem.playSelectSound("Halley's Comet");
    this.showCometInfo();
    this.focusOnComet();
    this.audioSystem.playFocusSound("Halley's Comet");
  }

  closeInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
    this.selectedObject = null;
    this.selectedPlanet = null;
  }

  focusOnPlanet(planet) {
    const targetPosition = planet.getWorldPosition();
    const distance = planet.data.radius * 5 + 2;
    this.animateCameraTo(targetPosition, distance);
  }

  focusOnMoon(moon) {
    const targetPosition = new THREE.Vector3();
    moon.mesh.getWorldPosition(targetPosition);
    this.animateCameraTo(targetPosition, moon.data.radius * 8 + 1);
  }

  focusOnObject(object) {
    const targetPosition = new THREE.Vector3();
    object.getWorldPosition(targetPosition);

    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const distance = Math.max(size.x, size.y, size.z) * 3;

    this.animateCameraTo(targetPosition, distance);
  }

  animateCameraTo(target, distance) {
    this.isAnimating = true;
    this.animationStart = performance.now();

    this.startPosition.copy(this.camera.position);
    this.startTarget.copy(this.orbitControls.target);
    this.endTarget.copy(target);

    const direction = new THREE.Vector3()
      .subVectors(this.camera.position, this.orbitControls.target)
      .normalize();

    this.endPosition.copy(target).add(direction.multiplyScalar(distance));
  }

  resetCamera() {
    this.settings.focusedPlanet = 'None';
    this.gui.controllersRecursive().find(c => c.property === 'focusedPlanet')?.updateDisplay();
    this.closeInfoPanel();
    this.animateCameraTo(new THREE.Vector3(0, 0, 0), 60);
  }

  updateCameraAnimation() {
    if (!this.isAnimating) return;

    const elapsed = performance.now() - this.animationStart;
    const progress = Math.min(elapsed / this.animationDuration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    this.camera.position.lerpVectors(this.startPosition, this.endPosition, eased);
    this.orbitControls.target.lerpVectors(this.startTarget, this.endTarget, eased);

    if (progress >= 1) {
      this.isAnimating = false;
    }
  }

  /**
   * Update distance display for selected planet
   */
  updateDistanceDisplay() {
    if (!this.selectedPlanet) return;

    const distanceEl = document.querySelector('.distance-indicator p:last-child');
    if (distanceEl) {
      const distanceAU = this.selectedPlanet.getDistanceFromSun();
      const distanceKm = (distanceAU * 149597870.7).toLocaleString();
      distanceEl.textContent = `${distanceAU.toFixed(2)} AU (${distanceKm} km)`;
    }

    const orbitalEl = document.querySelector('#planet-facts p:nth-child(3)');
    if (orbitalEl && orbitalEl.textContent.includes('Orbital Position')) {
      const orbitalPos = this.selectedPlanet.getOrbitalPosition();
      orbitalEl.innerHTML = `<strong>Orbital Position:</strong> ${orbitalPos.toFixed(1)}°`;
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  getOrbitSpeed() {
    return this.settings.paused ? 0 : this.settings.orbitSpeed;
  }

  isPaused() {
    return this.settings.paused;
  }

  update(deltaTime, elapsedTime = 0) {
    this.orbitControls.update();
    this.updateCameraAnimation();
    this.updateLabels();
    this.updateTimeDisplay(deltaTime);
    this.updateMinimap();
    this.updateDistanceDisplay();
    this.updateEventVisuals(elapsedTime);
  }

  dispose() {
    this.orbitControls.dispose();
    this.gui.destroy();
    this.labels.forEach(labelData => labelData.element.remove());

    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) timeDisplay.remove();

    const minimap = document.getElementById('minimap-container');
    if (minimap) minimap.remove();

    // Dispose audio system
    if (this.audioSystem) {
      this.audioSystem.dispose();
    }
  }
}
