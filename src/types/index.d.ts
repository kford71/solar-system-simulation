/**
 * TypeScript Type Definitions for Solar System Simulation
 *
 * These types provide IDE support (IntelliSense, type checking) without
 * converting the project to TypeScript.
 */

// ==================== ORBITAL MECHANICS ====================

/**
 * Keplerian orbital elements for a celestial body at J2000.0 epoch
 * with rates of change per Julian century
 */
export interface OrbitalElements {
  /** Semi-major axis in AU */
  a: number;
  /** Semi-major axis rate (AU per century) */
  a_rate: number;
  /** Orbital eccentricity (0 = circular, <1 = elliptical) */
  e: number;
  /** Eccentricity rate per century */
  e_rate: number;
  /** Orbital inclination in degrees */
  i: number;
  /** Inclination rate (degrees per century) */
  i_rate: number;
  /** Mean longitude in degrees */
  L: number;
  /** Mean longitude rate (degrees per century) */
  L_rate: number;
  /** Longitude of perihelion in degrees */
  wbar: number;
  /** Longitude of perihelion rate (degrees per century) */
  wbar_rate: number;
  /** Longitude of ascending node in degrees */
  omega: number;
  /** Longitude of ascending node rate (degrees per century) */
  omega_rate: number;
}

/**
 * Heliocentric position result from orbital calculations
 */
export interface HeliocentricPosition {
  /** X coordinate in AU (ecliptic) */
  x: number;
  /** Y coordinate in AU (ecliptic) */
  y: number;
  /** Z coordinate in AU (ecliptic) */
  z: number;
  /** Distance from Sun in AU */
  r: number;
  /** Orbital angle (theta) in radians */
  theta: number;
  /** True anomaly in radians */
  trueAnomaly?: number;
  /** Mean anomaly in radians */
  meanAnomaly?: number;
}

/**
 * Moon position relative to Earth
 */
export interface MoonPosition extends HeliocentricPosition {
  /** Moon phase (0 = new, 0.5 = full, 1 = new again) */
  phase: number;
}

// ==================== CELESTIAL BODY DATA ====================

/**
 * Facts displayed in the info panel for a celestial body
 */
export interface CelestialFacts {
  type: string;
  diameter?: string;
  mass?: string;
  temperature?: string;
  atmosphere?: string;
  gravity?: string;
  escapeVelocity?: string;
  dayLength?: string;
  yearLength?: string;
  orbitalPeriod?: string;
  moons?: number | string;
  rings?: string;
  composition?: string;
  age?: string;
  feature?: string;
  discovery?: string;
  [key: string]: string | number | undefined;
}

/**
 * Comparison ratios to Earth
 */
export interface EarthComparison {
  sizeRatio: number;
  gravityRatio: number;
  massRatio: number;
}

/**
 * Atmosphere visual configuration
 */
export interface AtmosphereConfig {
  /** Atmosphere color as hex number */
  color: number;
  /** Opacity (0-1) */
  opacity: number;
  /** Scale relative to planet radius */
  scale: number;
}

/**
 * Enhanced atmosphere configuration for Fresnel shader
 */
export interface FresnelAtmosphereConfig {
  /** RGB color array [r, g, b] normalized 0-1 */
  color: [number, number, number];
  /** Glow intensity multiplier */
  intensity: number;
  /** Fresnel power (higher = sharper edge) */
  power: number;
  /** Overall opacity (0-1) */
  opacity: number;
  /** Scale relative to planet radius */
  scale: number;
}

/**
 * Ring band configuration for gas giants
 */
export interface RingBand {
  /** Ring name (e.g., "Cassini Division") */
  name: string;
  /** Inner radius as multiple of planet radius */
  inner: number;
  /** Outer radius as multiple of planet radius */
  outer: number;
  /** Ring color as hex number */
  color: number;
  /** Ring opacity (0-1) */
  opacity: number;
}

// ==================== PLANET DATA ====================

/**
 * Complete planet data structure
 */
export interface PlanetData {
  /** Planet name */
  name: string;
  /** Visual radius in scene units */
  radius: number;
  /** Orbital distance in scene units */
  distance: number;
  /** Orbital period in Earth years */
  orbitalPeriod: number;
  /** Rotation period in Earth days (negative = retrograde) */
  rotationPeriod: number;
  /** Axial tilt in degrees */
  axialTilt: number;
  /** Base color as hex number */
  color: number;
  /** Bond albedo (reflectivity 0-1) */
  albedo?: number;
  /** URL to surface texture */
  textureUrl?: string;
  /** URL to normal map texture */
  normalMapUrl?: string;
  /** URL to specular map texture */
  specularMapUrl?: string;
  /** URL to night-side texture (Earth) */
  nightTextureUrl?: string;
  /** URL to cloud layer texture */
  cloudsUrl?: string;
  /** URL to atmosphere texture */
  atmosphereUrl?: string;
  /** Atmosphere configuration */
  atmosphere?: AtmosphereConfig | null;
  /** Whether planet has rings */
  hasRings?: boolean;
  /** Ring type identifier */
  ringType?: 'saturn' | 'uranus' | 'neptune' | 'jupiter';
  /** Ring band configurations */
  ringBands?: RingBand[];
  /** Names of moons orbiting this planet */
  moons: string[];
  /** Comparison to Earth */
  earthComparison?: EarthComparison;
  /** Facts for info panel */
  facts: CelestialFacts;
}

/**
 * Sun data structure
 */
export interface SunData {
  name: 'Sun';
  radius: number;
  color: number;
  emissiveColor: number;
  textureUrl?: string;
  facts: CelestialFacts;
}

// ==================== DWARF PLANET DATA ====================

/**
 * Dwarf planet data (extends planet with orbital elements)
 */
export interface DwarfPlanetData extends PlanetData {
  /** Flag indicating this is a dwarf planet */
  isDwarfPlanet: true;
  /** IAU classification */
  classification?: string;
  /** Semi-major axis in AU for Keplerian mechanics */
  semiMajorAxis?: number;
  /** Orbital eccentricity */
  eccentricity?: number;
  /** Orbital inclination in degrees */
  inclination?: number;
  /** Longitude of ascending node in degrees */
  longitudeOfAscendingNode?: number;
  /** Argument of perihelion in degrees */
  argumentOfPerihelion?: number;
  /** Mean anomaly at epoch in degrees */
  meanAnomalyAtEpoch?: number;
  /** Julian Date of orbital epoch */
  epoch?: number;
}

// ==================== MOON DATA ====================

/**
 * Basic moon data structure
 */
export interface MoonData {
  /** Moon name */
  name: string;
  /** Parent body name */
  parent: string;
  /** Visual radius in scene units */
  radius: number;
  /** Orbital distance in scene units */
  distance: number;
  /** Orbital period in Earth years */
  orbitalPeriod: number;
  /** Rotation period in Earth days */
  rotationPeriod?: number;
  /** Axial tilt in degrees */
  axialTilt?: number;
  /** Base color as hex number */
  color: number;
  /** URL to surface texture */
  textureUrl?: string;
  /** Facts for info panel */
  facts?: CelestialFacts;
}

/**
 * Extended moon data with Keplerian orbital elements
 */
export interface ExtendedMoonData extends MoonData {
  /** Semi-major axis in kilometers */
  semiMajorAxisKm?: number;
  /** Orbital eccentricity */
  eccentricity?: number;
  /** Orbital inclination in degrees */
  inclination?: number;
  /** Actual radius in kilometers */
  realRadiusKm?: number;
  /** Mean motion in degrees per day */
  meanMotion?: number;
}

/**
 * Moon texture configuration
 */
export interface MoonTextureConfig {
  /** Diffuse texture URL */
  diffuse?: string;
  /** Normal map texture URL */
  normal?: string;
}

// ==================== ASTEROID DATA ====================

/**
 * Asteroid orbital and physical data
 */
export interface AsteroidData {
  /** Asteroid name */
  name: string;
  /** Semi-major axis in AU */
  semiMajorAxis: number;
  /** Orbital eccentricity */
  eccentricity: number;
  /** Orbital inclination in degrees */
  inclination: number;
  /** Longitude of ascending node in degrees */
  longitudeOfAscendingNode: number;
  /** Argument of perihelion in degrees */
  argumentOfPerihelion: number;
  /** Mean anomaly at epoch in degrees */
  meanAnomalyAtEpoch: number;
  /** Julian Date of orbital epoch */
  epoch: number;
  /** Orbital period in Earth years */
  orbitalPeriod: number;
  /** Rotation period in hours */
  rotationPeriod?: number;
  /** Diameter in kilometers */
  diameter?: number;
  /** Visual radius in scene units */
  radius: number;
  /** Base color as hex number */
  color: number;
  /** Bond albedo */
  albedo?: number;
  /** Spectral type */
  type?: string;
  /** Facts for info panel */
  facts?: CelestialFacts;
}

// ==================== COMET DATA ====================

/**
 * Comet orbital and physical data
 */
export interface CometData {
  /** Comet name */
  name: string;
  /** Official designation */
  designation?: string;
  /** Semi-major axis in AU */
  semiMajorAxis: number;
  /** Orbital eccentricity (typically high, 0.9+) */
  eccentricity: number;
  /** Orbital inclination in degrees */
  inclination: number;
  /** Longitude of ascending node in degrees */
  longitudeOfAscendingNode: number;
  /** Argument of perihelion in degrees */
  argumentOfPerihelion: number;
  /** Mean anomaly at epoch in degrees */
  meanAnomalyAtEpoch: number;
  /** Julian Date of orbital epoch */
  epoch: number;
  /** Mean motion in degrees per day */
  meanMotion: number;
  /** Orbital period in years */
  orbitalPeriod: number;
  /** Perihelion distance in AU */
  perihelion: number;
  /** Aphelion distance in AU */
  aphelion: number;
  /** Last perihelion date */
  lastPerihelion?: Date;
  /** Next perihelion date */
  nextPerihelion?: Date;
  /** Facts for info panel */
  facts?: CelestialFacts;
}

// ==================== SPACECRAFT DATA ====================

/**
 * Spacecraft mission data
 */
export interface SpacecraftData {
  /** Spacecraft name */
  name: string;
  /** Launch date */
  launchDate: Date;
  /** Mission end date (if applicable) */
  endDate?: Date;
  /** Whether mission is still active */
  isActive?: boolean;
  /** Visual color as hex number */
  color: number;
  /** Trajectory waypoints */
  trajectory?: TrajectoryPoint[];
  /** Facts for info panel */
  facts?: CelestialFacts;
}

/**
 * Point on a spacecraft trajectory
 */
export interface TrajectoryPoint {
  /** Date at this point */
  date: Date;
  /** X coordinate in AU */
  x: number;
  /** Y coordinate in AU */
  y: number;
  /** Z coordinate in AU */
  z: number;
  /** Event description (e.g., "Jupiter Flyby") */
  event?: string;
}

// ==================== EXPORTS MAP ====================

/**
 * Dictionary of orbital elements keyed by body name
 */
export interface OrbitalElementsMap {
  [bodyName: string]: OrbitalElements;
}

/**
 * Dictionary of moon data keyed by moon name
 */
export interface MoonDataMap {
  [moonName: string]: ExtendedMoonData;
}

/**
 * Dictionary of atmosphere configs keyed by planet name
 */
export interface AtmosphereConfigMap {
  [planetName: string]: FresnelAtmosphereConfig;
}

/**
 * Dictionary of moon textures keyed by moon name
 */
export interface MoonTextureMap {
  [moonName: string]: MoonTextureConfig;
}
