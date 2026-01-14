/**
 * Planet Data
 *
 * Contains accurate relative data for all planets in the solar system.
 * Values are scaled for visibility while maintaining relative proportions.
 *
 * Orbital periods are relative to Earth (1 Earth year = 1)
 * Distances are in AU (Astronomical Units) - scaled for visualization
 * Sizes are relative to Earth radius - scaled for visibility
 * Axial tilts are in degrees
 * Rotation periods are in Earth days
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

import { DISTANCE_SCALE, SIZE_SCALE, TEXTURE_BASE } from './constants.js';

/** @type {import('../types/index.d.ts').SunData} */
export const SUN_DATA = {
  name: 'Sun',
  radius: 5 * SIZE_SCALE,
  color: 0xffff00,
  emissiveColor: 0xffaa00,
  textureUrl: `${TEXTURE_BASE}/2k_sun.jpg`,
  facts: {
    type: 'G-type Main-Sequence Star',
    diameter: '1,392,684 km',
    mass: '1.989 × 10³⁰ kg',
    temperature: '5,778 K (surface)',
    age: '4.6 billion years',
    composition: '73% Hydrogen, 25% Helium',
    gravity: '274 m/s²',
    escapeVelocity: '617.7 km/s'
  }
};

/** @type {import('../types/index.d.ts').PlanetData[]} */
export const PLANET_DATA = [
  {
    name: 'Mercury',
    radius: 0.38 * SIZE_SCALE,
    distance: 0.39 * DISTANCE_SCALE,
    orbitalPeriod: 0.24,
    rotationPeriod: 58.6,
    axialTilt: 0.03,
    color: 0x5A5A5A,      // Very dark, coal-like surface
    albedo: 0.068,        // Lowest albedo - darker than coal
    textureUrl: `${TEXTURE_BASE}/2k_mercury.jpg`,
    // Mercury has no significant atmosphere
    atmosphere: null,
    moons: [],
    // Comparison data for info panel
    earthComparison: {
      sizeRatio: 0.383,
      gravityRatio: 0.38,
      massRatio: 0.055
    },
    facts: {
      type: 'Terrestrial Planet',
      diameter: '4,879 km',
      dayLength: '176 Earth days',
      yearLength: '88 Earth days',
      moons: 0,
      temperature: '-180°C to 430°C',
      atmosphere: 'Minimal - trace amounts of oxygen, sodium, hydrogen',
      gravity: '3.7 m/s²',
      escapeVelocity: '4.3 km/s'
    }
  },
  {
    name: 'Venus',
    radius: 0.95 * SIZE_SCALE,
    distance: 0.72 * DISTANCE_SCALE,
    orbitalPeriod: 0.62,
    rotationPeriod: -243,
    axialTilt: 177.4,
    color: 0xFFF8DC,      // Brightest planet, yellowish-white
    albedo: 0.77,         // Highest albedo - extremely reflective clouds
    textureUrl: `${TEXTURE_BASE}/2k_venus_surface.jpg`,
    atmosphereUrl: `${TEXTURE_BASE}/2k_venus_atmosphere.jpg`,
    // Thick yellow-orange atmosphere
    atmosphere: {
      color: 0xffcc66,
      opacity: 0.6,
      scale: 1.08
    },
    moons: [],
    earthComparison: {
      sizeRatio: 0.949,
      gravityRatio: 0.91,
      massRatio: 0.815
    },
    facts: {
      type: 'Terrestrial Planet',
      diameter: '12,104 km',
      dayLength: '243 Earth days',
      yearLength: '225 Earth days',
      moons: 0,
      temperature: '465°C average',
      atmosphere: '96% Carbon Dioxide, 3.5% Nitrogen',
      gravity: '8.87 m/s²',
      escapeVelocity: '10.36 km/s'
    }
  },
  {
    name: 'Earth',
    radius: 1.0 * SIZE_SCALE,
    distance: 1.0 * DISTANCE_SCALE,
    orbitalPeriod: 1.0,
    rotationPeriod: 1,
    axialTilt: 23.4,
    color: 0x4169E1,      // Royal blue
    albedo: 0.30,         // Moderate reflectivity
    textureUrl: `${TEXTURE_BASE}/2k_earth_daymap.jpg`,
    nightTextureUrl: `${TEXTURE_BASE}/2k_earth_nightmap.jpg`,
    normalMapUrl: `${TEXTURE_BASE}/2k_earth_normal_map.jpg`,
    specularMapUrl: `${TEXTURE_BASE}/2k_earth_specular_map.jpg`,
    cloudsUrl: `${TEXTURE_BASE}/2k_earth_clouds.jpg`,
    // Blue atmosphere
    atmosphere: {
      color: 0x6699ff,
      opacity: 0.4,
      scale: 1.025
    },
    moons: ['Moon'],
    earthComparison: {
      sizeRatio: 1.0,
      gravityRatio: 1.0,
      massRatio: 1.0
    },
    facts: {
      type: 'Terrestrial Planet',
      diameter: '12,742 km',
      dayLength: '24 hours',
      yearLength: '365.25 days',
      moons: 1,
      temperature: '-88°C to 58°C',
      atmosphere: '78% Nitrogen, 21% Oxygen, 1% Other',
      gravity: '9.81 m/s²',
      escapeVelocity: '11.19 km/s'
    }
  },
  {
    name: 'Mars',
    radius: 0.53 * SIZE_SCALE,
    distance: 1.52 * DISTANCE_SCALE,
    orbitalPeriod: 1.88,
    rotationPeriod: 1.03,
    axialTilt: 25.2,
    color: 0xCD5C5C,      // Indian red - rust red-orange
    albedo: 0.25,         // Low reflectivity
    textureUrl: `${TEXTURE_BASE}/2k_mars.jpg`,
    normalMapUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mars_1k_normal.jpg',
    // Thin red-orange atmosphere
    atmosphere: {
      color: 0xff6644,
      opacity: 0.15,
      scale: 1.02
    },
    moons: ['Phobos', 'Deimos'],
    earthComparison: {
      sizeRatio: 0.532,
      gravityRatio: 0.38,
      massRatio: 0.107
    },
    facts: {
      type: 'Terrestrial Planet',
      diameter: '6,779 km',
      dayLength: '24.6 hours',
      yearLength: '687 Earth days',
      moons: 2,
      temperature: '-87°C to -5°C',
      atmosphere: '95% Carbon Dioxide, 2.7% Nitrogen',
      gravity: '3.71 m/s²',
      escapeVelocity: '5.03 km/s'
    }
  },
  {
    name: 'Jupiter',
    radius: 2.5 * SIZE_SCALE,
    distance: 5.2 * DISTANCE_SCALE,
    orbitalPeriod: 11.86,
    rotationPeriod: 0.41,
    axialTilt: 3.1,
    color: 0xD4A574,      // Tan/caramel - banded appearance
    albedo: 0.503,        // High reflectivity (revised upward)
    textureUrl: `${TEXTURE_BASE}/2k_jupiter.jpg`,
    // Subtle atmosphere glow
    atmosphere: {
      color: 0xffddaa,
      opacity: 0.2,
      scale: 1.02
    },
    moons: ['Io', 'Europa', 'Ganymede', 'Callisto'],
    // Jupiter's faint dusty rings (very low opacity, forward-scattering)
    hasRings: true,
    ringType: 'jupiter',
    ringBands: [
      { name: 'Halo', inner: 1.29, outer: 1.71, color: 0x8899aa, opacity: 0.04 },
      { name: 'Main Ring', inner: 1.71, outer: 1.80, color: 0xaa7766, opacity: 0.08 }
    ],
    earthComparison: {
      sizeRatio: 11.21,
      gravityRatio: 2.53,
      massRatio: 317.8
    },
    facts: {
      type: 'Gas Giant',
      diameter: '139,820 km',
      dayLength: '9.9 hours',
      yearLength: '11.9 Earth years',
      moons: 95,
      temperature: '-110°C (cloud tops)',
      atmosphere: '90% Hydrogen, 10% Helium',
      rings: 'Faint dusty rings (discovered 1979)',
      gravity: '24.79 m/s²',
      escapeVelocity: '59.5 km/s'
    }
  },
  {
    name: 'Saturn',
    radius: 2.2 * SIZE_SCALE,
    distance: 9.5 * DISTANCE_SCALE,
    orbitalPeriod: 29.46,
    rotationPeriod: 0.45,
    axialTilt: 26.7,
    color: 0xF4D58D,      // Pale golden, muted by haze
    albedo: 0.342,        // Moderate reflectivity
    textureUrl: `${TEXTURE_BASE}/2k_saturn.jpg`,
    // Saturn's prominent icy ring system with Cassini Division
    hasRings: true,
    ringType: 'saturn',
    ringBands: [
      { name: 'D Ring', inner: 1.11, outer: 1.24, color: 0xccccbb, opacity: 0.15 },
      { name: 'C Ring', inner: 1.24, outer: 1.53, color: 0xbbbbaa, opacity: 0.35 },
      { name: 'B Ring', inner: 1.53, outer: 1.95, color: 0xeeddcc, opacity: 0.85 },
      { name: 'Cassini Division', inner: 1.95, outer: 2.03, color: 0x222222, opacity: 0.05 },
      { name: 'A Ring', inner: 2.03, outer: 2.27, color: 0xddccbb, opacity: 0.70 },
      { name: 'F Ring', inner: 2.32, outer: 2.35, color: 0xccbbaa, opacity: 0.25 }
    ],
    // Subtle golden atmosphere
    atmosphere: {
      color: 0xffeecc,
      opacity: 0.15,
      scale: 1.02
    },
    moons: ['Mimas', 'Enceladus', 'Tethys', 'Dione', 'Rhea', 'Titan', 'Iapetus'],
    earthComparison: {
      sizeRatio: 9.45,
      gravityRatio: 1.07,
      massRatio: 95.16
    },
    facts: {
      type: 'Gas Giant',
      diameter: '116,460 km',
      dayLength: '10.7 hours',
      yearLength: '29.5 Earth years',
      moons: 146,
      temperature: '-140°C (cloud tops)',
      atmosphere: '96% Hydrogen, 3% Helium',
      rings: 'Made of ice and rock particles',
      gravity: '10.44 m/s²',
      escapeVelocity: '35.5 km/s'
    }
  },
  {
    name: 'Uranus',
    radius: 1.6 * SIZE_SCALE,
    distance: 19.2 * DISTANCE_SCALE,
    orbitalPeriod: 84.01,
    rotationPeriod: -0.72,
    axialTilt: 97.8,
    color: 0xAFDBF5,      // Pale greenish-blue
    albedo: 0.349,        // Similar to Neptune
    textureUrl: `${TEXTURE_BASE}/2k_uranus.jpg`,
    // Uranus's dark charcoal-colored rings (very low albedo ~2%)
    hasRings: true,
    ringType: 'uranus',
    ringBands: [
      { name: 'Inner Rings (6,5,4,α,β)', inner: 1.64, outer: 1.75, color: 0x333333, opacity: 0.20 },
      { name: 'Inner Rings (η,γ,δ)', inner: 1.75, outer: 1.89, color: 0x3a3a3a, opacity: 0.25 },
      { name: 'Epsilon Ring', inner: 1.98, outer: 2.02, color: 0x404040, opacity: 0.35 },
      { name: 'Mu Ring', inner: 3.75, outer: 3.90, color: 0x556688, opacity: 0.08 }
    ],
    // Cyan atmosphere
    atmosphere: {
      color: 0x99ddff,
      opacity: 0.25,
      scale: 1.03
    },
    moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'],
    earthComparison: {
      sizeRatio: 4.01,
      gravityRatio: 0.89,
      massRatio: 14.54
    },
    facts: {
      type: 'Ice Giant',
      diameter: '50,724 km',
      dayLength: '17.2 hours',
      yearLength: '84 Earth years',
      moons: 28,
      temperature: '-195°C',
      atmosphere: '83% Hydrogen, 15% Helium, 2% Methane',
      rings: 'Faint ring system (13 known rings)',
      gravity: '8.69 m/s²',
      escapeVelocity: '21.3 km/s'
    }
  },
  {
    name: 'Neptune',
    radius: 1.5 * SIZE_SCALE,
    distance: 30.1 * DISTANCE_SCALE,
    orbitalPeriod: 164.8,
    rotationPeriod: 0.67,
    axialTilt: 28.3,
    color: 0x7EC8E3,      // Pale blue, similar to Uranus (NOT deep azure)
    albedo: 0.290,        // Similar to Uranus
    textureUrl: `${TEXTURE_BASE}/2k_neptune.jpg`,
    // Neptune's faint dark reddish-brown rings
    hasRings: true,
    ringType: 'neptune',
    ringBands: [
      { name: 'Galle Ring', inner: 1.66, outer: 1.74, color: 0x554433, opacity: 0.06 },
      { name: 'Le Verrier Ring', inner: 2.13, outer: 2.17, color: 0x665544, opacity: 0.10 },
      { name: 'Adams Ring', inner: 2.52, outer: 2.56, color: 0x665544, opacity: 0.12 }
    ],
    // Blue atmosphere
    atmosphere: {
      color: 0x4466ff,
      opacity: 0.3,
      scale: 1.03
    },
    moons: ['Proteus', 'Triton', 'Nereid'],
    earthComparison: {
      sizeRatio: 3.88,
      gravityRatio: 1.14,
      massRatio: 17.15
    },
    facts: {
      type: 'Ice Giant',
      diameter: '49,244 km',
      dayLength: '16.1 hours',
      yearLength: '165 Earth years',
      moons: 16,
      temperature: '-200°C',
      atmosphere: '80% Hydrogen, 19% Helium, 1% Methane',
      gravity: '11.15 m/s²',
      escapeVelocity: '23.5 km/s'
    }
  }
];
