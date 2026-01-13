/**
 * AudioManager - Centralized audio control for the solar system simulation
 *
 * Architecture:
 * - Tone.js for generative planet sounds and UI synthesis
 * - Three.js PositionalAudio for spatial positioning (future)
 *
 * Features:
 * - Procedural UI sounds (no external files needed)
 * - Layered ambient soundscape (space drone + solar wind)
 * - Master bus with limiter for safe output
 * - Mobile-friendly initialization
 * - Visibility change handling (mute when tab hidden)
 */

import * as Tone from 'tone';
import { PlanetSoundGenerator } from './PlanetSounds.js';
import { MusicSystem } from './MusicSystem.js';
import { AppalachianMusic } from './AppalachianMusic.js';

class AudioManager {
  constructor() {
    if (AudioManager.instance) {
      return AudioManager.instance;
    }
    AudioManager.instance = this;

    this.initialized = false;
    this.muted = true;  // Start muted by default
    this.masterVolume = 0.5;
    this.ambientVolume = 0.3;
    this.uiVolume = 0.5;
    this.musicVolume = 0.3;
    this.musicEnabled = true;
    this.musicMode = 'off'; // 'generative', 'appalachian', 'off'

    // Audio nodes
    this.uiSynth = null;
    this.uiNoise = null;
    this.masterGain = null;
    this.masterLimiter = null;
    this.ambientLayers = null;
    this.planetSounds = null;
    this.musicSystem = null;
    this.appalachianMusic = null;

    // State
    this.currentZone = 'inner'; // 'inner', 'outer', 'interstellar'
    this.focusedPlanet = null;
    this.nearestPlanets = []; // Track nearest for voice limiting
    this.lastUpdateTime = 0;
    this.updateInterval = 100; // ms between proximity updates (performance)

    // Zone thresholds (in scene units)
    this.ZONE_THRESHOLDS = {
      innerOuter: 50,           // Roughly asteroid belt
      outerInterstellar: 200    // Beyond Neptune/Kuiper belt
    };

    // Planet proximity thresholds
    this.PROXIMITY = {
      farField: 30,    // Start hearing faintly
      orbital: 15,     // Clear audible
      close: 5,        // Full volume
      surface: 2       // Maximum intensity
    };
  }

  /**
   * Initialize audio system - must be called after user interaction
   */
  async init() {
    if (this.initialized) return;

    try {
      // Check if AudioContext is supported
      if (!window.AudioContext && !window.webkitAudioContext) {
        throw new Error('Web Audio API not supported in this browser');
      }

      // Start Tone.js (required for mobile)
      await Tone.start();

      // Verify audio context is running
      if (Tone.context.state !== 'running') {
        // Try to resume (needed for some browsers)
        await Tone.context.resume();
        if (Tone.context.state !== 'running') {
          throw new Error('Audio context failed to start. Please check browser permissions.');
        }
      }

      // Setup master bus with limiter to prevent clipping
      this.masterLimiter = new Tone.Limiter(-1).toDestination();
      this.masterGain = new Tone.Gain(this.masterVolume).connect(this.masterLimiter);

      // Load UI sounds (procedural synthesis)
      this.setupUISounds();

      // Setup ambient layers
      this.setupAmbientLayers();

      // Planet signature sounds disabled - noise generators cause unwanted hiss
      // this.planetSounds = new PlanetSoundGenerator(this.masterGain);
      // this.planetSounds.init();
      this.planetSounds = null;

      // Generative music system (disabled by default - can enable via settings)
      try {
        this.musicSystem = new MusicSystem(this.masterGain);
        this.musicSystem.init();
        this.musicSystem.setVolume(this.musicVolume);
      } catch (musicError) {
        console.warn('Music system initialization failed:', musicError);
        this.musicSystem = null;
        // Continue without music - not critical
      }
      // Don't auto-start - user selects music mode

      // Appalachian music player (disabled - external URLs blocked by CORS)
      // To enable: add local audio files to public/audio/ and update URLs
      this.appalachianMusic = null;

      // Apply initial mute state
      Tone.Destination.mute = this.muted;

      this.initialized = true;
      this.initError = null;
      console.log('AudioManager initialized');

      // Dispatch success event for UI updates
      window.dispatchEvent(new CustomEvent('audioInitialized', { detail: { success: true } }));

    } catch (error) {
      console.warn('AudioManager initialization failed:', error);
      this.initialized = false;
      this.initError = error.message || 'Audio initialization failed';

      // Dispatch error event for UI feedback
      window.dispatchEvent(new CustomEvent('audioInitialized', {
        detail: {
          success: false,
          error: this.initError
        }
      }));

      // Show user-friendly notification
      this.showAudioErrorNotification(this.initError);
    }
  }

  /**
   * Show a user-friendly notification when audio fails
   */
  showAudioErrorNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('audio-error-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.id = 'audio-error-notification';
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(80, 40, 40, 0.9);
        color: #ffcccc;
        padding: 12px 24px;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        z-index: 10000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 100, 100, 0.3);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      `;
      document.body.appendChild(notification);
    }

    notification.textContent = `🔇 Audio unavailable: ${message}`;
    notification.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (notification) {
        notification.style.display = 'none';
      }
    }, 5000);
  }

  /**
   * Check if audio is available
   */
  isAudioAvailable() {
    return this.initialized && !this.initError;
  }

  /**
   * Get initialization error message
   */
  getInitError() {
    return this.initError;
  }

  /**
   * Setup procedural UI sounds using synthesis
   */
  setupUISounds() {
    // Polyphonic synth for melodic UI sounds
    this.uiSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.1,
        release: 0.3
      }
    }).connect(this.masterGain);
    this.uiSynth.volume.value = -10;

    // Noise synth for hover/glitch sounds
    this.uiNoise = new Tone.NoiseSynth({
      noise: { type: 'white' },
      envelope: {
        attack: 0.001,
        decay: 0.05,
        sustain: 0,
        release: 0.01
      }
    }).connect(this.masterGain);
    this.uiNoise.volume.value = -25;

    // Membrane synth for deeper UI sounds
    this.uiMembrane = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 4,
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0,
        release: 0.2
      }
    }).connect(this.masterGain);
    this.uiMembrane.volume.value = -15;
  }

  /**
   * Setup layered ambient soundscape
   * Note: Noise-based layers disabled to prevent unwanted hissing
   */
  setupAmbientLayers() {
    this.ambientLayers = {};
    // Noise layers disabled - music system provides ambient atmosphere instead
  }

  /**
   * Create deep space drone layer
   */
  createSpaceDrone() {
    const noise = new Tone.Noise('brown');
    const filter = new Tone.Filter(60, 'lowpass');
    const gain = new Tone.Gain(0.15 * this.ambientVolume);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    // Start the noise
    noise.start();

    return { noise, filter, gain };
  }

  /**
   * Create solar wind layer with auto-filter modulation
   */
  createSolarWind() {
    const noise = new Tone.Noise('pink');
    const filter = new Tone.AutoFilter({
      frequency: 0.1,
      baseFrequency: 200,
      octaves: 3
    });
    const gain = new Tone.Gain(0.08 * this.ambientVolume);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    // Start both noise and filter LFO
    noise.start();
    filter.start();

    return { noise, filter, gain };
  }

  /**
   * Create interstellar hiss layer - ethereal high-frequency whisper
   * Only audible in deep interstellar space
   */
  createInterstellarHiss() {
    const noise = new Tone.Noise('pink'); // Pink noise is less harsh than white

    // High-pass filter to create thin, ethereal quality
    const highpass = new Tone.Filter(3000, 'highpass');

    // Bandpass to focus on specific frequency range - higher and narrower
    const bandpass = new Tone.Filter({
      frequency: 6000,
      type: 'bandpass',
      Q: 1.5
    });

    // Slow LFO for subtle volume modulation
    const tremolo = new Tone.Tremolo({
      frequency: 0.03,
      depth: 0.4
    });

    // Start SILENT - only audible in interstellar zone
    const gain = new Tone.Gain(0);

    // Connect chain
    noise.connect(highpass);
    highpass.connect(bandpass);
    bandpass.connect(tremolo);
    tremolo.connect(gain);
    gain.connect(this.masterGain);

    // Start
    noise.start();
    tremolo.start();

    return { noise, highpass, bandpass, tremolo, gain };
  }

  // ==================== UI SOUNDS ====================

  /**
   * Play hover sound - quick noise burst
   */
  playHover() {
    if (this.muted || !this.initialized) return;
    try {
      this.uiNoise.triggerAttackRelease('16n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play select/click sound - harmonious ping
   */
  playSelect(objectName = null) {
    if (this.muted || !this.initialized) return;
    try {
      // Random note from C major for variety
      const notes = ['C5', 'E5', 'G5'];
      const note = notes[Math.floor(Math.random() * notes.length)];
      this.uiSynth.triggerAttackRelease(note, '16n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play focus sound - rising chord
   */
  playFocus(objectName = null) {
    if (this.muted || !this.initialized) return;
    try {
      // C major chord for positive feedback
      this.uiSynth.triggerAttackRelease(['C4', 'E4', 'G4'], '8n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play back/cancel sound - lower tone
   */
  playBack() {
    if (this.muted || !this.initialized) return;
    try {
      this.uiSynth.triggerAttackRelease('G3', '8n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play timeline movement sound - quick tick
   */
  playTimelineMove() {
    if (this.muted || !this.initialized) return;
    try {
      this.uiNoise.triggerAttackRelease('32n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play event notification - ascending alert
   */
  playEventNotification() {
    if (this.muted || !this.initialized) return;
    try {
      const now = Tone.now();
      this.uiSynth.triggerAttackRelease('E4', '16n', now);
      this.uiSynth.triggerAttackRelease('G4', '16n', now + 0.1);
      this.uiSynth.triggerAttackRelease('B4', '16n', now + 0.2);
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play speed change sound - pitch reflects speed
   */
  playSpeedChange(speed) {
    if (this.muted || !this.initialized) return;
    try {
      // Map speed to pitch
      const baseNote = 60; // Middle C
      const pitchOffset = Math.log2(Math.max(0.1, speed)) * 4;
      const midiNote = Math.round(baseNote + pitchOffset);
      const freq = Tone.Frequency(midiNote, 'midi').toFrequency();
      this.uiMembrane.triggerAttackRelease(freq, '16n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play pause/resume sound
   */
  playPauseToggle(isPaused) {
    if (this.muted || !this.initialized) return;
    try {
      if (isPaused) {
        // Descending for pause
        this.uiSynth.triggerAttackRelease('E4', '16n');
      } else {
        // Ascending for resume
        const now = Tone.now();
        this.uiSynth.triggerAttackRelease('C4', '16n', now);
        this.uiSynth.triggerAttackRelease('E4', '16n', now + 0.05);
      }
    } catch (e) {
      // Ignore audio errors
    }
  }

  // ==================== VOLUME CONTROLS ====================

  /**
   * Set master volume (0-1)
   */
  setMasterVolume(value) {
    this.masterVolume = Math.max(0, Math.min(1, value));
    if (this.masterGain) {
      this.masterGain.gain.rampTo(this.masterVolume, 0.1);
    }
  }

  /**
   * Set ambient volume (0-1)
   * Note: Noise layers disabled, this now controls planet sound base volume
   */
  setAmbientVolume(value) {
    this.ambientVolume = Math.max(0, Math.min(1, value));
  }

  /**
   * Set UI sound volume (0-1)
   */
  setUIVolume(value) {
    this.uiVolume = Math.max(0, Math.min(1, value));
    if (this.uiSynth) {
      this.uiSynth.volume.value = Tone.gainToDb(value);
    }
  }

  /**
   * Set music volume (0-1)
   */
  setMusicVolume(value) {
    this.musicVolume = Math.max(0, Math.min(1, value));
    if (this.musicSystem) {
      this.musicSystem.setVolume(value);
    }
    if (this.appalachianMusic) {
      this.appalachianMusic.setVolume(value);
    }
  }

  /**
   * Set music mode: 'generative', 'appalachian', or 'off'
   */
  setMusicMode(mode) {
    // Stop current music
    if (this.musicMode === 'generative' && this.musicSystem) {
      this.musicSystem.stop();
    }
    if (this.musicMode === 'appalachian' && this.appalachianMusic) {
      this.appalachianMusic.stop();
    }

    this.musicMode = mode;

    // Start new mode
    switch (mode) {
      case 'generative':
        if (this.musicSystem && !this.muted) {
          this.musicSystem.start();
          this.musicSystem.setIntensity(0.3);
        }
        break;
      case 'appalachian':
        if (this.appalachianMusic && !this.muted) {
          this.appalachianMusic.play();
        } else {
          console.warn('Appalachian music not available - external audio URLs blocked by CORS');
        }
        break;
      case 'off':
        // Both stopped already
        break;
    }
  }

  /**
   * Get current music mode
   */
  getMusicMode() {
    return this.musicMode;
  }

  /**
   * Appalachian player: next track
   */
  appalachianNext() {
    if (this.appalachianMusic) {
      this.appalachianMusic.next();
    }
  }

  /**
   * Appalachian player: previous track
   */
  appalachianPrevious() {
    if (this.appalachianMusic) {
      this.appalachianMusic.previous();
    }
  }

  /**
   * Appalachian player: toggle play/pause
   */
  appalachianToggle() {
    if (this.appalachianMusic) {
      this.appalachianMusic.toggle();
    }
  }

  /**
   * Get current appalachian track info
   */
  getAppalachianTrack() {
    if (this.appalachianMusic) {
      return this.appalachianMusic.getCurrentTrack();
    }
    return null;
  }

  /**
   * Set muted state
   */
  setMuted(muted) {
    this.muted = muted;
    if (Tone.Destination) {
      Tone.Destination.mute = muted;
    }
    if (this.musicSystem) {
      this.musicSystem.setMuted(muted);
    }
    if (this.appalachianMusic) {
      if (muted) {
        this.appalachianMusic.pause();
      } else if (this.musicMode === 'appalachian') {
        this.appalachianMusic.play();
      }
    }
  }

  /**
   * Toggle mute state
   */
  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  /**
   * Get current mute state
   */
  isMuted() {
    return this.muted;
  }

  // ==================== PLANET SOUNDS ====================

  /**
   * Set the currently focused planet (triggers sound fade in/out)
   * @param {string|null} planetName - Name of the planet to focus, or null to unfocus
   */
  setFocusedPlanet(planetName) {
    if (!this.initialized || !this.planetSounds) return;
    if (this.focusedPlanet === planetName) return;

    // Fade out previous planet sound
    if (this.focusedPlanet) {
      this.planetSounds.fadeOut(this.focusedPlanet, 1);
    }

    // Update focused planet
    this.focusedPlanet = planetName;

    // Fade in new planet sound
    if (planetName && this.planetSounds.hasSound(planetName)) {
      this.planetSounds.fadeIn(planetName, 1.5);
    }

    // Update music system intensity and trigger discovery
    if (this.musicSystem) {
      if (planetName) {
        this.musicSystem.setIntensity(0.7); // Increase intensity when focused
        this.musicSystem.triggerDiscovery();
      } else {
        this.musicSystem.setIntensity(0.3); // Return to ambient
      }
    }
  }

  /**
   * Get list of planets with sounds
   */
  getPlanetsWithSounds() {
    return ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  }

  // ==================== LIFECYCLE ====================

  /**
   * Called every frame - update proximity-based audio
   * @param {THREE.Camera} camera - The scene camera
   * @param {Array} planets - Array of planet objects
   * @param {Object} sun - The sun object
   * @param {Array} dwarfPlanets - Array of dwarf planet objects
   * @param {number} deltaTime - Time since last frame
   */
  update(camera, planets, sun, dwarfPlanets, deltaTime) {
    if (!this.initialized || this.muted) return;

    const now = performance.now();

    // Throttle proximity updates for performance
    if (now - this.lastUpdateTime >= this.updateInterval) {
      this.lastUpdateTime = now;

      const cameraPos = camera.position;

      // Update zone-based ambient sounds (for music system)
      const distFromSun = cameraPos.length();
      this.updateAmbientZone(distFromSun);

      // Proximity-based planet sounds disabled - only play when focused
      // this.updateProximityVolumes(cameraPos, planets, sun, dwarfPlanets);
    }

    // Update planet sounds (for random triggers like Mars metallic sounds)
    if (this.planetSounds) {
      this.planetSounds.update(deltaTime);
    }
  }

  /**
   * Update ambient zone based on distance from sun
   * @param {number} distance - Distance from sun
   */
  updateAmbientZone(distance) {
    let newZone = 'inner';

    if (distance > this.ZONE_THRESHOLDS.outerInterstellar) {
      newZone = 'interstellar';
    } else if (distance > this.ZONE_THRESHOLDS.innerOuter) {
      newZone = 'outer';
    }

    if (newZone !== this.currentZone) {
      this.transitionZone(this.currentZone, newZone);
      this.currentZone = newZone;

      // Sync music system zone
      if (this.musicSystem) {
        this.musicSystem.setZone(newZone);
      }
    }

    // Smooth crossfade based on position within zones
    this.updateAmbientCrossfade(distance);
  }

  /**
   * Handle zone transition audio changes
   * @param {string} fromZone - Previous zone
   * @param {string} toZone - New zone
   */
  transitionZone(fromZone, toZone) {
    // Ambient noise layers disabled - zone transitions handled by music system
  }

  /**
   * Smooth ambient crossfade based on exact distance
   * @param {number} distance - Distance from sun
   */
  updateAmbientCrossfade(distance) {
    // Ambient noise layers disabled - handled by music system
  }

  /**
   * Update proximity-based volumes for all celestial bodies
   * @param {THREE.Vector3} cameraPos - Camera position
   * @param {Array} planets - Planet objects
   * @param {Object} sun - Sun object
   * @param {Array} dwarfPlanets - Dwarf planet objects
   */
  updateProximityVolumes(cameraPos, planets, sun, dwarfPlanets) {
    if (!this.planetSounds) return;

    // Build array of all bodies with their distances
    const bodies = [];

    // Add sun
    if (sun && sun.getMesh) {
      const sunPos = sun.getMesh().position;
      const dist = cameraPos.distanceTo(sunPos);
      bodies.push({ name: 'Sun', distance: dist, scale: 5 }); // Sun has larger presence
    }

    // Add planets
    if (planets) {
      planets.forEach(planet => {
        if (planet.getMesh) {
          const pos = planet.getMesh().position;
          const dist = cameraPos.distanceTo(pos);
          bodies.push({ name: planet.data.name, distance: dist, scale: 1 });
        }
      });
    }

    // Add dwarf planets
    if (dwarfPlanets) {
      dwarfPlanets.forEach(dwarf => {
        if (dwarf.getMesh) {
          const pos = dwarf.getMesh().position;
          const dist = cameraPos.distanceTo(pos);
          bodies.push({ name: dwarf.data.name, distance: dist, scale: 0.5 }); // Smaller presence
        }
      });
    }

    // Sort by distance (nearest first)
    bodies.sort((a, b) => a.distance - b.distance);

    // Voice limiting: only nearest 3 bodies play
    const maxVoices = 3;
    this.nearestPlanets = bodies.slice(0, maxVoices);

    // Update volumes for all bodies
    bodies.forEach((body, index) => {
      if (this.planetSounds.hasSound(body.name)) {
        if (index < maxVoices) {
          // Active voice - calculate proximity volume
          const volume = this.calculateProximityVolume(body.distance, body.scale);
          this.planetSounds.setPlanetVolume(body.name, volume);
        } else {
          // Voice stolen - silent
          this.planetSounds.setPlanetVolume(body.name, 0);
        }
      }
    });
  }

  /**
   * Calculate volume based on distance with exponential falloff
   * @param {number} distance - Distance to body
   * @param {number} scale - Size scale factor
   * @returns {number} Volume 0-1
   */
  calculateProximityVolume(distance, scale = 1) {
    const { farField, orbital, close, surface } = this.PROXIMITY;

    // Apply scale to thresholds (larger bodies audible from farther)
    const scaledFar = farField * scale;
    const scaledOrbital = orbital * scale;
    const scaledClose = close * scale;
    const scaledSurface = surface * scale;

    if (distance > scaledFar) {
      return 0; // Too far to hear
    } else if (distance > scaledOrbital) {
      // Far field: very quiet
      const t = (scaledFar - distance) / (scaledFar - scaledOrbital);
      return t * t * 0.15; // Exponential ramp, max 15%
    } else if (distance > scaledClose) {
      // Orbital range: moderate
      const t = (scaledOrbital - distance) / (scaledOrbital - scaledClose);
      return 0.15 + t * t * 0.45; // 15% to 60%
    } else if (distance > scaledSurface) {
      // Close range: loud
      const t = (scaledClose - distance) / (scaledClose - scaledSurface);
      return 0.6 + t * 0.3; // 60% to 90%
    } else {
      // Surface: maximum
      return 1.0;
    }
  }

  /**
   * Handle page visibility changes - mute when tab hidden
   */
  onVisibilityChange(hidden) {
    if (hidden) {
      // Store previous state and mute
      this._wasMutedBeforeHide = this.muted;
      if (Tone.Destination) {
        Tone.Destination.mute = true;
      }
    } else if (!this._wasMutedBeforeHide) {
      // Restore previous state
      if (Tone.Destination) {
        Tone.Destination.mute = this.muted;
      }
    }
  }

  /**
   * Cleanup all audio resources
   */
  dispose() {
    // Dispose music system
    if (this.musicSystem) {
      this.musicSystem.dispose();
      this.musicSystem = null;
    }

    // Dispose appalachian music
    if (this.appalachianMusic) {
      this.appalachianMusic.dispose();
      this.appalachianMusic = null;
    }

    // Dispose planet sounds
    if (this.planetSounds) {
      this.planetSounds.dispose();
      this.planetSounds = null;
    }

    // Dispose ambient layers
    if (this.ambientLayers) {
      Object.values(this.ambientLayers).forEach(layer => {
        if (layer.noise) {
          layer.noise.stop();
          layer.noise.dispose();
        }
        if (layer.filter) layer.filter.dispose();
        if (layer.highpass) layer.highpass.dispose();
        if (layer.bandpass) layer.bandpass.dispose();
        if (layer.tremolo) {
          layer.tremolo.stop();
          layer.tremolo.dispose();
        }
        if (layer.gain) layer.gain.dispose();
      });
    }

    // Dispose UI sounds
    if (this.uiSynth) this.uiSynth.dispose();
    if (this.uiNoise) this.uiNoise.dispose();
    if (this.uiMembrane) this.uiMembrane.dispose();

    // Dispose master bus
    if (this.masterGain) this.masterGain.dispose();
    if (this.masterLimiter) this.masterLimiter.dispose();

    this.initialized = false;
    this.focusedPlanet = null;
    AudioManager.instance = null;
  }
}

// Export singleton instance
export const audioManager = new AudioManager();
export default audioManager;
