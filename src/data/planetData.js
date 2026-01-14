/**
 * Planet Data - Central Export Module
 *
 * This file re-exports all solar system data from individual modules
 * for backwards compatibility and convenient imports.
 *
 * Individual modules:
 * - constants.js: Scale factors and simulation config
 * - planets.js: Sun and planet data
 * - moons.js: Moon data for all planets
 * - dwarfPlanets.js: Dwarf planet data
 * - asteroids.js: Asteroid and belt data
 * - comets.js: Comet data
 * - atmosphere.js: Atmosphere visual configuration
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

// Constants
export {
  // Mathematical constants
  DEG_TO_RAD,
  RAD_TO_DEG,
  TWO_PI,
  // Scale factors
  DISTANCE_SCALE,
  SIZE_SCALE,
  TEXTURE_BASE,
  // Configuration objects
  CAMERA_CONFIG,
  RENDERER_CONFIG,
  BLOOM_CONFIG,
  STARFIELD_CONFIG,
  SOLVER_CONFIG,
  COMET_CONFIG,
  SCENE_CONFIG,
  SIMULATION_CONFIG,
  TIME_CONSTANTS
} from './constants.js';

// Planets and Sun
export {
  SUN_DATA,
  PLANET_DATA
} from './planets.js';

// Moons
export {
  MOON_DATA,
  ADDITIONAL_MOONS,
  CHARON_DATA,
  MOON_TEXTURES
} from './moons.js';

// Dwarf Planets
export {
  DWARF_PLANETS
} from './dwarfPlanets.js';

// Asteroids and Belts
export {
  ASTEROID_BELT,
  ASTEROID_BELT_DATA,
  KUIPER_BELT_DATA,
  MAJOR_ASTEROIDS
} from './asteroids.js';

// Comets
export {
  COMET_DATA
} from './comets.js';

// Atmosphere Configuration
export {
  ATMOSPHERE_CONFIG
} from './atmosphere.js';
