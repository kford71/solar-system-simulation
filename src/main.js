/**
 * Solar System Simulation
 *
 * A 3D interactive solar system built with Three.js
 * Features:
 * - All 8 planets with realistic orbital mechanics and atmospheres
 * - Dwarf planets (Pluto, Ceres) with moons
 * - The Sun with corona/glow, solar flares, and lens flare
 * - Asteroid belt and Kuiper Belt
 * - Multiple moons (Galilean moons, Titan, Phobos, Deimos, Charon)
 * - Interactive camera controls with keyboard shortcuts
 * - Click to focus on planets with enhanced info panel
 * - Time display with timeline slider
 * - Top-down mini-map
 * - Configurable simulation speed
 *
 * Keyboard Shortcuts:
 * - 0: Focus on Sun
 * - 1-8: Focus on planets (Mercury-Neptune)
 * - P: Focus on Pluto
 * - C: Focus on Ceres
 * - Space: Pause/Resume
 * - R: Reset camera view
 * - Escape: Close info panel
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { Sun } from './components/Sun.js';
import { Planet } from './components/Planet.js';
import { Asteroid } from './components/Asteroid.js';
import { Spacecraft } from './components/Spacecraft.js';
import { AsteroidBelt } from './components/AsteroidBelt.js';
import { KuiperBelt } from './components/KuiperBelt.js';
import { Starfield } from './components/Starfield.js';
import { Comet } from './components/Comet.js';
import { Controls } from './components/Controls.js';
import { SpaceDust } from './components/SpaceDust.js';
import {
  PLANET_DATA,
  DWARF_PLANETS,
  MAJOR_ASTEROIDS,
  COMET_DATA,
  CAMERA_CONFIG,
  RENDERER_CONFIG,
  BLOOM_CONFIG,
  SCENE_CONFIG
} from './data/planetData.js';
import { SPACECRAFT_DATA } from './data/spacecraftData.js';
import { audioManager } from './audio/AudioManager.js';

// Application state
let scene, camera, renderer, composer;
let sun, planets, dwarfPlanets, majorAsteroids, spacecraft, asteroidBelt, kuiperBelt, starfield, comet, controls, spaceDust;
let clock;
let textureLoader;
let animationFrameId = null;

/**
 * Show user-friendly error message
 */
function showErrorMessage(title, message, isRecoverable = false) {
  const loadingEl = document.getElementById('loading');
  if (loadingEl) {
    loadingEl.innerHTML = `
      <div style="text-align: center; max-width: 500px; padding: 20px;">
        <div style="font-size: 48px; margin-bottom: 20px;">⚠️</div>
        <h2 style="color: #ff6b6b; margin-bottom: 16px;">${title}</h2>
        <p style="color: #ccc; margin-bottom: 24px; line-height: 1.6;">${message}</p>
        ${isRecoverable ? `
          <button onclick="location.reload()" style="
            background: #4a90d9;
            color: white;
            border: none;
            padding: 12px 32px;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.2s;
          " onmouseover="this.style.background='#5a9fe9'" onmouseout="this.style.background='#4a90d9'">
            Reload Page
          </button>
        ` : ''}
      </div>
    `;
    loadingEl.classList.remove('hidden');
    loadingEl.style.display = 'flex';
    loadingEl.style.alignItems = 'center';
    loadingEl.style.justifyContent = 'center';
  }
}

/**
 * Check WebGL support
 */
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      throw new Error('WebGL not available');
    }
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Global error handler for uncaught errors
 */
function setupGlobalErrorHandlers() {
  // Track if app has successfully initialized
  let appInitialized = false;

  // Mark app as initialized after first successful render
  const markInitialized = () => {
    appInitialized = true;
    window.removeEventListener('click', markInitialized);
  };
  // App is considered stable after user interaction
  window.addEventListener('click', markInitialized, { once: true });

  // Handle uncaught errors
  window.onerror = function(message, source, lineno, colno, error) {
    console.error('Uncaught error:', { message, source, lineno, colno, error });

    // Don't show UI error for minor issues that don't break the app
    if (message.includes('ResizeObserver') ||
        message.includes('Script error') ||
        message.includes('Loading chunk') ||
        message.includes('dynamically imported module')) {
      return false;
    }

    // Only show critical errors to users if app hasn't initialized
    if (renderer && scene && appInitialized) {
      // App is running, log but don't interrupt
      console.warn('Non-critical runtime error:', message);
      return false;
    }

    // Only show error UI if we're still in initialization phase
    if (!appInitialized) {
      showErrorMessage(
        'Something went wrong',
        'An unexpected error occurred while running the simulation.',
        true
      );
    }
    return false;
  };

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);

    // Check if it's a texture loading error (non-critical)
    const reason = event.reason?.message || String(event.reason);
    if (reason.includes('texture') ||
        reason.includes('Failed to load') ||
        reason.includes('fetch') ||
        reason.includes('network')) {
      console.warn('Asset loading error (non-critical):', reason);
      event.preventDefault();
      return;
    }

    // Only show critical errors during initialization
    if (!renderer || !scene || !appInitialized) {
      showErrorMessage(
        'Failed to Load',
        'Some resources could not be loaded. Please check your internet connection and try again.',
        true
      );
    }
  });
}

/**
 * Initialize the application
 */
async function init() {
  // Setup global error handlers first
  setupGlobalErrorHandlers();

  // Check WebGL support
  if (!checkWebGLSupport()) {
    showErrorMessage(
      'WebGL Not Supported',
      'Your browser or device does not support WebGL, which is required to run this 3D simulation. Please try using a modern browser like Chrome, Firefox, Safari, or Edge.',
      false
    );
    return;
  }

  try {
    clock = new THREE.Clock();
    textureLoader = new THREE.TextureLoader();

    setupScene();
    setupCamera();
    setupRenderer();

    await createSolarSystem();

    setupControls();
    setupAudio();
    hideLoading();
    animate();
  } catch (error) {
    console.error('Initialization error:', error);
    throw error; // Re-throw to be caught by the outer handler
  }
}

/**
 * Setup Three.js scene
 */
function setupScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(SCENE_CONFIG.backgroundColor);
}

/**
 * Setup camera
 */
function setupCamera() {
  camera = new THREE.PerspectiveCamera(
    CAMERA_CONFIG.fov,
    window.innerWidth / window.innerHeight,
    CAMERA_CONFIG.near,
    CAMERA_CONFIG.far
  );
  const { x, y, z } = CAMERA_CONFIG.initialPosition;
  camera.position.set(x, y, z);
}

/**
 * Setup WebGL renderer with postprocessing
 */
function setupRenderer() {
  const canvas = document.getElementById('solar-system');

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, RENDERER_CONFIG.maxPixelRatio));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = RENDERER_CONFIG.toneMappingExposure;

  // Handle WebGL context loss (GPU crash, memory issues, etc.)
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    console.warn('WebGL context lost. Attempting to restore...');
    // Stop animation loop
    cancelAnimationFrame(animationFrameId);
  });

  canvas.addEventListener('webglcontextrestored', () => {
    console.log('WebGL context restored. Reinitializing...');
    // Reinitialize the scene
    setupRenderer();
    animate();
  });

  // Setup postprocessing composer
  composer = new EffectComposer(renderer);

  // Render pass
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // Bloom pass for sun glow and atmospheres
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    BLOOM_CONFIG.strength,
    BLOOM_CONFIG.radius,
    BLOOM_CONFIG.threshold
  );
  composer.addPass(bloomPass);

  // Output pass for correct color space
  const outputPass = new OutputPass();
  composer.addPass(outputPass);
}

/**
 * Create all solar system components
 */
async function createSolarSystem() {
  // Create starfield background
  starfield = new Starfield({ starCount: 20000, radius: 1200 });
  scene.add(starfield.getMesh());

  // Create the Sun with texture loader for lens flare
  sun = new Sun(textureLoader);
  scene.add(sun.getMesh());

  // Create all planets
  planets = [];
  for (const planetData of PLANET_DATA) {
    const planet = new Planet(planetData, textureLoader);
    planets.push(planet);
    scene.add(planet.getMesh());
    scene.add(planet.getOrbitLine());
  }

  // Create dwarf planets (Ceres and Pluto)
  dwarfPlanets = [];
  for (const dwarfData of DWARF_PLANETS) {
    const dwarf = new Planet(dwarfData, textureLoader);
    dwarfPlanets.push(dwarf);
    scene.add(dwarf.getMesh());
    scene.add(dwarf.getOrbitLine());
  }

  // Create major asteroids (9 largest after Ceres)
  majorAsteroids = [];
  for (const asteroidData of MAJOR_ASTEROIDS) {
    const asteroid = new Asteroid(asteroidData);
    majorAsteroids.push(asteroid);
    scene.add(asteroid.getMesh());
    scene.add(asteroid.getOrbitLine());
  }

  // Create spacecraft with historic trajectories
  spacecraft = [];
  for (const spacecraftData of SPACECRAFT_DATA) {
    const craft = new Spacecraft(spacecraftData);
    spacecraft.push(craft);
    scene.add(craft.getMesh());
    if (craft.getTrajectoryLine()) {
      scene.add(craft.getTrajectoryLine());
    }
  }

  // Wait for initial textures to start loading
  await new Promise(resolve => setTimeout(resolve, 200));

  // Create asteroid belt
  asteroidBelt = new AsteroidBelt();
  scene.add(asteroidBelt.getMesh());

  // Create Kuiper Belt
  kuiperBelt = new KuiperBelt();
  scene.add(kuiperBelt.getMesh());

  // Create comet
  comet = new Comet(COMET_DATA);
  scene.add(comet.getMesh());
  scene.add(comet.getOrbitLine());

  // Create ambient space dust for added depth
  spaceDust = new SpaceDust({ particleCount: 400, radius: 60 });
  scene.add(spaceDust.getMesh());
}

/**
 * Setup interactive controls
 */
function setupControls() {
  controls = new Controls(camera, renderer, scene, planets, sun, dwarfPlanets, majorAsteroids, spacecraft, comet, asteroidBelt, kuiperBelt);
}

/**
 * Hide loading screen
 */
function hideLoading() {
  const loadingEl = document.getElementById('loading');
  loadingEl.classList.add('hidden');

  setTimeout(() => {
    loadingEl.style.display = 'none';
  }, 500);
}

/**
 * Initialize audio system on first user interaction
 */
function setupAudio() {
  const initAudio = async () => {
    await audioManager.init();
    // Pass audioManager to controls for UI sounds
    if (controls) {
      controls.setAudioManager(audioManager);
    }
  };

  // Initialize on first click/touch (required for mobile)
  document.addEventListener('click', initAudio, { once: true });
  document.addEventListener('touchstart', initAudio, { once: true });

  // Handle tab visibility changes (mute when hidden)
  document.addEventListener('visibilitychange', () => {
    audioManager.onVisibilityChange(document.hidden);
  });
}

/**
 * Animation loop
 */
function animate() {
  animationFrameId = requestAnimationFrame(animate);

  const deltaTime = clock.getDelta();
  const elapsedTime = clock.getElapsedTime();
  const speedMultiplier = controls.getOrbitSpeed();
  const julianDate = controls.getJulianDate();

  // Update sun animation (always animate even when paused)
  sun.update(deltaTime, elapsedTime);

  // Update planet orbits and rotations with accurate orbital mechanics
  planets.forEach(planet => {
    planet.update(deltaTime, speedMultiplier, elapsedTime, julianDate);
  });

  // Update dwarf planets with accurate orbital mechanics
  dwarfPlanets.forEach(dwarf => {
    dwarf.update(deltaTime, speedMultiplier, elapsedTime, julianDate);
  });

  // Update major asteroids with accurate orbital mechanics
  majorAsteroids.forEach(asteroid => {
    asteroid.update(deltaTime, speedMultiplier, elapsedTime, julianDate);
  });

  // Update spacecraft trajectories (need simulation date)
  const simulationDate = controls.getSimulationDate();
  spacecraft.forEach(craft => {
    craft.update(deltaTime, speedMultiplier, elapsedTime, julianDate, simulationDate);
  });

  // Update asteroid belt
  asteroidBelt.update(deltaTime, speedMultiplier);

  // Update Kuiper Belt
  kuiperBelt.update(deltaTime, speedMultiplier);

  // Update comet
  comet.update(deltaTime, speedMultiplier, elapsedTime, julianDate);

  // Update starfield (subtle rotation)
  starfield.update(deltaTime);

  // Update space dust (follows camera)
  if (spaceDust) {
    spaceDust.update(deltaTime, camera);
  }

  // Update controls (includes time display, minimap, and event visuals)
  controls.update(deltaTime, elapsedTime);

  // Update audio system (proximity-based sounds)
  audioManager.update(camera, planets, sun, dwarfPlanets, deltaTime);

  // Render with postprocessing
  composer.render();
}

/**
 * Handle window resize
 */
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize application
init().catch(error => {
  console.error('Failed to initialize solar system:', error);

  // Determine error type and show appropriate message
  let title = 'Failed to Load';
  let message = 'The solar system simulation could not be initialized. Please try refreshing the page.';

  if (error.message) {
    if (error.message.includes('WebGL')) {
      title = 'Graphics Error';
      message = 'There was a problem initializing 3D graphics. Please ensure your browser supports WebGL and try again.';
    } else if (error.message.includes('texture') || error.message.includes('load')) {
      title = 'Asset Loading Error';
      message = 'Some textures or assets could not be loaded. Please check your internet connection and try again.';
    } else if (error.message.includes('memory')) {
      title = 'Memory Error';
      message = 'The application ran out of memory. Please close other browser tabs and try again.';
    }
  }

  showErrorMessage(title, message, true);
});
