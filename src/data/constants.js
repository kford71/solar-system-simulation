/**
 * Solar System Simulation Constants
 *
 * Scale factors and configuration values used across all data files.
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

// =============================================================================
// Mathematical Constants
// =============================================================================

/** Degrees to radians conversion factor */
export const DEG_TO_RAD = Math.PI / 180;

/** Radians to degrees conversion factor */
export const RAD_TO_DEG = 180 / Math.PI;

/** Two PI for full circle calculations */
export const TWO_PI = Math.PI * 2;

// =============================================================================
// Scale Factors
// =============================================================================

/** @type {number} AU to scene units conversion factor */
export const DISTANCE_SCALE = 10;

/** @type {number} Size multiplier for visibility */
export const SIZE_SCALE = 0.8;

// =============================================================================
// Texture Configuration
// =============================================================================

/** @type {string} Base URL for texture downloads from Solar System Scope */
export const TEXTURE_BASE = 'https://www.solarsystemscope.com/textures/download';

// =============================================================================
// Camera Configuration
// =============================================================================

export const CAMERA_CONFIG = {
  /** Field of view in degrees */
  fov: 60,
  /** Near clipping plane */
  near: 0.1,
  /** Far clipping plane */
  far: 3000,
  /** Initial camera position */
  initialPosition: { x: 30, y: 20, z: 50 }
};

// =============================================================================
// Renderer Configuration
// =============================================================================

export const RENDERER_CONFIG = {
  /** Maximum device pixel ratio (limits GPU load on high-DPI displays) */
  maxPixelRatio: 2,
  /** Tone mapping exposure value */
  toneMappingExposure: 1.1
};

// =============================================================================
// Post-Processing Configuration
// =============================================================================

export const BLOOM_CONFIG = {
  /** Bloom effect strength */
  strength: 0.6,
  /** Bloom radius */
  radius: 0.5,
  /** Luminosity threshold for bloom */
  threshold: 0.8
};

// =============================================================================
// Starfield Configuration
// =============================================================================

export const STARFIELD_CONFIG = {
  /** Default number of background stars */
  defaultStarCount: 8000,
  /** Default number of Milky Way stars */
  defaultMilkyWayCount: 6000,
  /** Starfield sphere radius */
  defaultRadius: 1000,
  /** Milky Way band width in radians */
  milkyWayBandWidth: 0.35,
  /** Milky Way tilt angle in radians */
  milkyWayBandTilt: Math.PI / 6,
  /** Number of nebula glow sprites */
  nebulaCount: 20
};

// =============================================================================
// Numerical Solver Configuration
// =============================================================================

export const SOLVER_CONFIG = {
  /** Kepler equation solver tolerance */
  keplerTolerance: 1e-10,
  /** Maximum iterations for Newton-Raphson */
  maxIterations: 30
};

// =============================================================================
// Comet Configuration
// =============================================================================

export const COMET_CONFIG = {
  /** Number of dust tail particles */
  dustTailCount: 250,
  /** Number of ion tail particles */
  ionTailCount: 150,
  /** Nucleus radius (Halley is ~11km x 8km, visually scaled) */
  nucleusRadius: 0.12,
  /** Hitbox radius for click detection */
  hitboxRadius: 2.5,
  /** Orbit line segments for smooth rendering */
  orbitSegments: 512
};

// =============================================================================
// Time Constants
// =============================================================================

export const SIMULATION_CONFIG = {
  earthYearInDays: 365.25,
  simulationStartDate: new Date('2024-01-01'),
  // Speed factor: 1 = real time, 86400 = 1 day per second
  defaultSpeedFactor: 86400 * 30  // ~1 month per second at speed 1
};

/** Alias for backwards compatibility */
export const TIME_CONSTANTS = SIMULATION_CONFIG;

// =============================================================================
// Scene Configuration
// =============================================================================

export const SCENE_CONFIG = {
  /** Background color (very dark blue-black for space) */
  backgroundColor: 0x000008
};
