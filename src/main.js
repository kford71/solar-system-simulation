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
import { AsteroidBelt } from './components/AsteroidBelt.js';
import { KuiperBelt } from './components/KuiperBelt.js';
import { Starfield } from './components/Starfield.js';
import { Comet } from './components/Comet.js';
import { Controls } from './components/Controls.js';
import { PLANET_DATA, DWARF_PLANETS, COMET_DATA } from './data/planetData.js';

// Application state
let scene, camera, renderer, composer;
let sun, planets, dwarfPlanets, asteroidBelt, kuiperBelt, starfield, comet, controls;
let clock;
let textureLoader;

/**
 * Initialize the application
 */
async function init() {
  clock = new THREE.Clock();
  textureLoader = new THREE.TextureLoader();

  setupScene();
  setupCamera();
  setupRenderer();

  await createSolarSystem();

  setupControls();
  hideLoading();
  animate();
}

/**
 * Setup Three.js scene
 */
function setupScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000008);
}

/**
 * Setup camera
 */
function setupCamera() {
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  );
  camera.position.set(30, 20, 50);
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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  // Setup postprocessing composer
  composer = new EffectComposer(renderer);

  // Render pass
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // Bloom pass for sun glow and atmospheres
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.6,    // Bloom strength
    0.5,    // Radius
    0.8     // Threshold
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
}

/**
 * Setup interactive controls
 */
function setupControls() {
  controls = new Controls(camera, renderer, scene, planets, sun, dwarfPlanets);
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
 * Animation loop
 */
function animate() {
  requestAnimationFrame(animate);

  const deltaTime = clock.getDelta();
  const elapsedTime = clock.getElapsedTime();
  const speedMultiplier = controls.getOrbitSpeed();

  // Update sun animation (always animate even when paused)
  sun.update(deltaTime, elapsedTime);

  // Update planet orbits and rotations
  planets.forEach(planet => {
    planet.update(deltaTime, speedMultiplier, elapsedTime);
  });

  // Update dwarf planets
  dwarfPlanets.forEach(dwarf => {
    dwarf.update(deltaTime, speedMultiplier, elapsedTime);
  });

  // Update asteroid belt
  asteroidBelt.update(deltaTime, speedMultiplier);

  // Update Kuiper Belt
  kuiperBelt.update(deltaTime, speedMultiplier);

  // Update comet
  comet.update(deltaTime, speedMultiplier);

  // Update starfield (subtle rotation)
  starfield.update(deltaTime);

  // Update controls (includes time display and minimap)
  controls.update(deltaTime);

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
  document.getElementById('loading').textContent =
    'Failed to load solar system. Please refresh the page.';
});
