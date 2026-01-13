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

// Scale factors for visualization
/** @type {number} AU to scene units conversion factor */
const DISTANCE_SCALE = 10;
/** @type {number} Size multiplier for visibility */
const SIZE_SCALE = 0.8;

// Texture base URL from Solar System Scope (high quality textures)
const TEXTURE_BASE = 'https://www.solarsystemscope.com/textures/download';

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

// Earth's Moon
/** @type {import('../types/index.d.ts').MoonData} */
export const MOON_DATA = {
  name: 'Moon',
  parent: 'Earth',
  radius: 0.27 * SIZE_SCALE,
  distance: 2.5,
  orbitalPeriod: 0.0748,
  rotationPeriod: 27.3,
  axialTilt: 6.7,
  color: 0xaaaaaa,
  textureUrl: `${TEXTURE_BASE}/2k_moon.jpg`,
  facts: {
    type: 'Natural Satellite',
    diameter: '3,474 km',
    orbitalPeriod: '27.3 Earth days',
    distanceFromEarth: '384,400 km',
    temperature: '-173°C to 127°C',
    atmosphere: 'None (exosphere only)',
    gravity: '1.62 m/s²'
  }
};

// Additional moons data with Keplerian orbital elements
// semiMajorAxis in km (will be scaled), period in Earth days, inclination in degrees
/** @type {import('../types/index.d.ts').MoonDataMap} */
export const ADDITIONAL_MOONS = {
  // ==================== MARS MOONS ====================
  Phobos: {
    name: 'Phobos',
    parent: 'Mars',
    // Visual properties (scaled up for visibility - actual radius 11km)
    radius: 0.08 * SIZE_SCALE,
    distance: 1.2,  // Scene units from parent
    // Keplerian orbital elements
    semiMajorAxisKm: 9380,
    orbitalPeriod: 0.319,     // days
    eccentricity: 0.015,
    inclination: 1.1,
    realRadiusKm: 11,
    color: 0x8a7a6a,
    facts: {
      type: 'Natural Satellite',
      diameter: '22.2 km (irregular)',
      orbitalPeriod: '7.66 hours',
      distanceFromMars: '9,380 km',
      feature: 'Orbits faster than Mars rotates',
      discoveredBy: 'Asaph Hall, 1877'
    }
  },
  Deimos: {
    name: 'Deimos',
    parent: 'Mars',
    radius: 0.05 * SIZE_SCALE,
    distance: 2.0,
    semiMajorAxisKm: 23460,
    orbitalPeriod: 1.263,
    eccentricity: 0.0,
    inclination: 1.8,
    realRadiusKm: 6,
    color: 0x9a8a7a,
    facts: {
      type: 'Natural Satellite',
      diameter: '12.4 km (irregular)',
      orbitalPeriod: '30.3 hours',
      distanceFromMars: '23,460 km',
      feature: 'Smallest known moon in solar system',
      discoveredBy: 'Asaph Hall, 1877'
    }
  },

  // ==================== JUPITER'S GALILEAN MOONS ====================
  Io: {
    name: 'Io',
    parent: 'Jupiter',
    radius: 0.30 * SIZE_SCALE,
    distance: 3.5,
    semiMajorAxisKm: 421800,
    orbitalPeriod: 1.769,
    eccentricity: 0.004,
    inclination: 0.0,
    realRadiusKm: 1822,
    color: 0xffff44,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '3,643 km',
      orbitalPeriod: '1.77 days',
      distanceFromJupiter: '421,800 km',
      feature: 'Most volcanically active body in solar system',
      volcanism: '400+ active volcanoes',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },
  Europa: {
    name: 'Europa',
    parent: 'Jupiter',
    radius: 0.26 * SIZE_SCALE,
    distance: 5.0,
    semiMajorAxisKm: 671100,
    orbitalPeriod: 3.551,
    eccentricity: 0.009,
    inclination: 0.5,
    realRadiusKm: 1561,
    color: 0xccaa88,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '3,122 km',
      orbitalPeriod: '3.55 days',
      distanceFromJupiter: '671,100 km',
      feature: 'Subsurface ocean beneath ice shell',
      surface: 'Smoothest surface in solar system',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },
  Ganymede: {
    name: 'Ganymede',
    parent: 'Jupiter',
    radius: 0.42 * SIZE_SCALE,
    distance: 7.0,
    semiMajorAxisKm: 1070400,
    orbitalPeriod: 7.155,
    eccentricity: 0.001,
    inclination: 0.2,
    realRadiusKm: 2634,
    color: 0x888888,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '5,268 km',
      orbitalPeriod: '7.15 days',
      distanceFromJupiter: '1,070,400 km',
      feature: 'Largest moon in the solar system',
      size: 'Larger than Mercury',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },
  Callisto: {
    name: 'Callisto',
    parent: 'Jupiter',
    radius: 0.38 * SIZE_SCALE,
    distance: 10.0,
    semiMajorAxisKm: 1882700,
    orbitalPeriod: 16.689,
    eccentricity: 0.007,
    inclination: 0.3,
    realRadiusKm: 2410,
    color: 0x555555,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '4,821 km',
      orbitalPeriod: '16.69 days',
      distanceFromJupiter: '1,882,700 km',
      feature: 'Most heavily cratered object in solar system',
      surface: 'Ancient, geologically dead',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },

  // ==================== SATURN'S MAJOR MOONS ====================
  Mimas: {
    name: 'Mimas',
    parent: 'Saturn',
    radius: 0.08 * SIZE_SCALE,
    distance: 2.5,
    semiMajorAxisKm: 186000,
    orbitalPeriod: 0.942,
    eccentricity: 0.02,
    inclination: 1.6,
    realRadiusKm: 198,
    color: 0xcccccc,
    facts: {
      type: 'Natural Satellite',
      diameter: '396 km',
      orbitalPeriod: '22.6 hours',
      distanceFromSaturn: '186,000 km',
      feature: 'Death Star moon - large Herschel crater',
      discoveredBy: 'William Herschel, 1789'
    }
  },
  Enceladus: {
    name: 'Enceladus',
    parent: 'Saturn',
    radius: 0.10 * SIZE_SCALE,
    distance: 3.2,
    semiMajorAxisKm: 238400,
    orbitalPeriod: 1.370,
    eccentricity: 0.005,
    inclination: 0.0,
    realRadiusKm: 252,
    color: 0xffffff,
    facts: {
      type: 'Natural Satellite',
      diameter: '504 km',
      orbitalPeriod: '32.9 hours',
      distanceFromSaturn: '238,400 km',
      feature: 'Active water geysers at south pole',
      surface: 'Brightest object in solar system (albedo 1.0)',
      discoveredBy: 'William Herschel, 1789'
    }
  },
  Tethys: {
    name: 'Tethys',
    parent: 'Saturn',
    radius: 0.14 * SIZE_SCALE,
    distance: 4.0,
    semiMajorAxisKm: 295000,
    orbitalPeriod: 1.888,
    eccentricity: 0.001,
    inclination: 1.1,
    realRadiusKm: 533,
    color: 0xdddddd,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,066 km',
      orbitalPeriod: '1.89 days',
      distanceFromSaturn: '295,000 km',
      feature: 'Ithaca Chasma - 2000km long canyon',
      discoveredBy: 'Giovanni Cassini, 1684'
    }
  },
  Dione: {
    name: 'Dione',
    parent: 'Saturn',
    radius: 0.15 * SIZE_SCALE,
    distance: 5.0,
    semiMajorAxisKm: 377700,
    orbitalPeriod: 2.737,
    eccentricity: 0.002,
    inclination: 0.0,
    realRadiusKm: 562,
    color: 0xbbbbbb,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,123 km',
      orbitalPeriod: '2.74 days',
      distanceFromSaturn: '377,700 km',
      feature: 'Ice cliffs and bright wispy terrain',
      discoveredBy: 'Giovanni Cassini, 1684'
    }
  },
  Rhea: {
    name: 'Rhea',
    parent: 'Saturn',
    radius: 0.18 * SIZE_SCALE,
    distance: 6.5,
    semiMajorAxisKm: 527200,
    orbitalPeriod: 4.518,
    eccentricity: 0.001,
    inclination: 0.3,
    realRadiusKm: 764,
    color: 0xaaaaaa,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,528 km',
      orbitalPeriod: '4.52 days',
      distanceFromSaturn: '527,200 km',
      feature: 'Second largest Saturn moon',
      discoveredBy: 'Giovanni Cassini, 1672'
    }
  },
  Titan: {
    name: 'Titan',
    parent: 'Saturn',
    radius: 0.42 * SIZE_SCALE,
    distance: 9.0,
    semiMajorAxisKm: 1221900,
    orbitalPeriod: 15.945,
    eccentricity: 0.029,
    inclination: 0.3,
    realRadiusKm: 2575,
    color: 0xddaa66,
    atmosphere: {
      color: 0xffaa44,
      opacity: 0.5,
      scale: 1.1
    },
    facts: {
      type: 'Natural Satellite',
      diameter: '5,150 km',
      orbitalPeriod: '15.95 days',
      distanceFromSaturn: '1,221,900 km',
      feature: 'Only moon with dense atmosphere',
      atmosphere: '95% Nitrogen, 5% Methane',
      surface: 'Methane lakes and rivers',
      discoveredBy: 'Christiaan Huygens, 1655'
    }
  },
  Iapetus: {
    name: 'Iapetus',
    parent: 'Saturn',
    radius: 0.16 * SIZE_SCALE,
    distance: 14.0,
    semiMajorAxisKm: 3561700,
    orbitalPeriod: 79.33,
    eccentricity: 0.028,
    inclination: 7.6,
    realRadiusKm: 735,
    color: 0x666666,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,470 km',
      orbitalPeriod: '79.3 days',
      distanceFromSaturn: '3,561,700 km',
      feature: 'Two-tone coloring (black/white hemispheres)',
      surface: 'Equatorial ridge 20km high',
      discoveredBy: 'Giovanni Cassini, 1671'
    }
  },

  // ==================== URANUS MOONS ====================
  Miranda: {
    name: 'Miranda',
    parent: 'Uranus',
    radius: 0.10 * SIZE_SCALE,
    distance: 2.5,
    semiMajorAxisKm: 129800,
    orbitalPeriod: 1.413,
    eccentricity: 0.001,
    inclination: 4.4,
    realRadiusKm: 236,
    color: 0x888899,
    facts: {
      type: 'Natural Satellite',
      diameter: '472 km',
      orbitalPeriod: '1.41 days',
      distanceFromUranus: '129,800 km',
      feature: 'Verona Rupes - 20km tall cliff',
      surface: 'Most varied terrain of any moon',
      discoveredBy: 'Gerard Kuiper, 1948'
    }
  },
  Ariel: {
    name: 'Ariel',
    parent: 'Uranus',
    radius: 0.14 * SIZE_SCALE,
    distance: 3.5,
    semiMajorAxisKm: 190900,
    orbitalPeriod: 2.520,
    eccentricity: 0.001,
    inclination: 0.0,
    realRadiusKm: 579,
    color: 0x999999,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,158 km',
      orbitalPeriod: '2.52 days',
      distanceFromUranus: '190,900 km',
      feature: 'Brightest Uranian moon',
      surface: 'Extensive rift valleys',
      discoveredBy: 'William Lassell, 1851'
    }
  },
  Umbriel: {
    name: 'Umbriel',
    parent: 'Uranus',
    radius: 0.14 * SIZE_SCALE,
    distance: 4.5,
    semiMajorAxisKm: 266000,
    orbitalPeriod: 4.144,
    eccentricity: 0.004,
    inclination: 0.1,
    realRadiusKm: 585,
    color: 0x555555,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,170 km',
      orbitalPeriod: '4.14 days',
      distanceFromUranus: '266,000 km',
      feature: 'Darkest major Uranian moon',
      surface: 'Heavily cratered, ancient',
      discoveredBy: 'William Lassell, 1851'
    }
  },
  Titania: {
    name: 'Titania',
    parent: 'Uranus',
    radius: 0.18 * SIZE_SCALE,
    distance: 6.0,
    semiMajorAxisKm: 436300,
    orbitalPeriod: 8.706,
    eccentricity: 0.002,
    inclination: 0.1,
    realRadiusKm: 789,
    color: 0x888888,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,578 km',
      orbitalPeriod: '8.71 days',
      distanceFromUranus: '436,300 km',
      feature: 'Largest Uranian moon',
      surface: 'Messina Chasma - 1500km canyon',
      discoveredBy: 'William Herschel, 1787'
    }
  },
  Oberon: {
    name: 'Oberon',
    parent: 'Uranus',
    radius: 0.17 * SIZE_SCALE,
    distance: 8.0,
    semiMajorAxisKm: 583400,
    orbitalPeriod: 13.463,
    eccentricity: 0.002,
    inclination: 0.1,
    realRadiusKm: 761,
    color: 0x777777,
    facts: {
      type: 'Natural Satellite',
      diameter: '1,522 km',
      orbitalPeriod: '13.46 days',
      distanceFromUranus: '583,400 km',
      feature: 'Outermost major Uranian moon',
      surface: 'Dark floor craters with bright ejecta',
      discoveredBy: 'William Herschel, 1787'
    }
  },

  // ==================== NEPTUNE MOONS ====================
  Proteus: {
    name: 'Proteus',
    parent: 'Neptune',
    radius: 0.09 * SIZE_SCALE,
    distance: 2.5,
    semiMajorAxisKm: 117600,
    orbitalPeriod: 1.122,
    eccentricity: 0.0,
    inclination: 0.0,
    realRadiusKm: 210,
    color: 0x666677,
    facts: {
      type: 'Natural Satellite',
      diameter: '420 km (irregular)',
      orbitalPeriod: '26.9 hours',
      distanceFromNeptune: '117,600 km',
      feature: 'Largest irregular moon in solar system',
      discoveredBy: 'Voyager 2, 1989'
    }
  },
  Triton: {
    name: 'Triton',
    parent: 'Neptune',
    radius: 0.28 * SIZE_SCALE,
    distance: 5.0,
    semiMajorAxisKm: 354800,
    orbitalPeriod: 5.877,
    eccentricity: 0.0,
    inclination: 157.3,  // Retrograde orbit!
    realRadiusKm: 1353,
    color: 0xddaaaa,
    retrograde: true,  // Flag for retrograde motion
    facts: {
      type: 'Natural Satellite',
      diameter: '2,706 km',
      orbitalPeriod: '5.88 days (retrograde)',
      distanceFromNeptune: '354,800 km',
      feature: 'Only large moon with retrograde orbit',
      origin: 'Captured Kuiper Belt object',
      surface: 'Nitrogen geysers, -235°C',
      discoveredBy: 'William Lassell, 1846'
    }
  },
  Nereid: {
    name: 'Nereid',
    parent: 'Neptune',
    radius: 0.07 * SIZE_SCALE,
    distance: 12.0,
    semiMajorAxisKm: 5504000,
    orbitalPeriod: 360.13,
    eccentricity: 0.749,  // Highly elliptical!
    inclination: 5.8,
    realRadiusKm: 170,
    color: 0x888888,
    facts: {
      type: 'Natural Satellite',
      diameter: '340 km',
      orbitalPeriod: '360.1 days',
      distanceFromNeptune: '5,504,000 km (average)',
      feature: 'Most eccentric moon orbit (e=0.749)',
      orbit: 'Ranges from 1.4 to 9.6 million km',
      discoveredBy: 'Gerard Kuiper, 1949'
    }
  }
};

// Dwarf planets (IAU recognized and candidates)
/** @type {import('../types/index.d.ts').DwarfPlanetData[]} */
export const DWARF_PLANETS = [
  // IAU Recognized Dwarf Planets
  {
    name: 'Ceres',
    radius: 0.15 * SIZE_SCALE,
    distance: 2.77 * DISTANCE_SCALE,
    orbitalPeriod: 4.6,
    rotationPeriod: 0.378,
    axialTilt: 4,
    color: 0x8a8a8a,
    textureUrl: `${TEXTURE_BASE}/2k_ceres_fictional.jpg`,
    isDwarfPlanet: true,
    classification: 'IAU Dwarf Planet',
    // Orbital elements for Keplerian mechanics
    semiMajorAxis: 2.77,
    eccentricity: 0.079,
    inclination: 10.6,
    longitudeOfAscendingNode: 80.3,
    argumentOfPerihelion: 73.6,
    meanAnomalyAtEpoch: 95.99,
    epoch: 2451545.0,  // J2000.0
    earthComparison: {
      sizeRatio: 0.074,
      gravityRatio: 0.028,
      massRatio: 0.00016
    },
    facts: {
      type: 'Dwarf Planet',
      diameter: '940 km',
      dayLength: '9.07 hours',
      yearLength: '4.6 Earth years',
      location: 'Asteroid Belt',
      feature: 'Largest object in asteroid belt',
      discoveredBy: 'Giuseppe Piazzi, 1801',
      gravity: '0.27 m/s²'
    }
  },
  {
    name: 'Pluto',
    radius: 0.18 * SIZE_SCALE,
    distance: 39.5 * DISTANCE_SCALE,
    orbitalPeriod: 248,
    rotationPeriod: -6.39,
    axialTilt: 122.5,
    color: 0xddccaa,
    textureUrl: `${TEXTURE_BASE}/2k_pluto.jpg`,
    isDwarfPlanet: true,
    classification: 'IAU Dwarf Planet',
    moons: ['Charon'],
    semiMajorAxis: 39.48,
    eccentricity: 0.2488,
    inclination: 17.16,
    longitudeOfAscendingNode: 110.30,
    argumentOfPerihelion: 113.76,
    meanAnomalyAtEpoch: 14.53,
    epoch: 2451545.0,
    earthComparison: {
      sizeRatio: 0.186,
      gravityRatio: 0.063,
      massRatio: 0.0022
    },
    facts: {
      type: 'Dwarf Planet',
      diameter: '2,377 km',
      dayLength: '6.39 Earth days',
      yearLength: '248 Earth years',
      moons: 5,
      temperature: '-230°C',
      location: 'Kuiper Belt',
      discoveredBy: 'Clyde Tombaugh, 1930',
      gravity: '0.62 m/s²'
    }
  },
  {
    name: 'Haumea',
    radius: 0.16 * SIZE_SCALE,
    distance: 43.22 * DISTANCE_SCALE,
    orbitalPeriod: 284.1,
    rotationPeriod: 0.163,  // 3.9 hours - fastest rotating
    axialTilt: 126,
    color: 0xcccccc,
    isDwarfPlanet: true,
    classification: 'IAU Dwarf Planet',
    semiMajorAxis: 43.22,
    eccentricity: 0.191,
    inclination: 28.2,
    longitudeOfAscendingNode: 122.1,
    argumentOfPerihelion: 239.1,
    meanAnomalyAtEpoch: 205.0,
    epoch: 2451545.0,
    earthComparison: {
      sizeRatio: 0.122,
      gravityRatio: 0.045,
      massRatio: 0.0007
    },
    facts: {
      type: 'Dwarf Planet',
      diameter: '1,560 km (elongated)',
      dayLength: '3.9 hours',
      yearLength: '284 Earth years',
      moons: 2,
      location: 'Kuiper Belt',
      feature: 'Elongated shape, has rings, fastest rotating',
      discoveredBy: 'Brown, Rabinowitz, Trujillo, 2004',
      surface: 'Crystalline water ice'
    }
  },
  {
    name: 'Makemake',
    radius: 0.15 * SIZE_SCALE,
    distance: 45.56 * DISTANCE_SCALE,
    orbitalPeriod: 307.5,
    rotationPeriod: 0.94,
    axialTilt: 29,
    color: 0xddaa88,
    isDwarfPlanet: true,
    classification: 'IAU Dwarf Planet',
    semiMajorAxis: 45.56,
    eccentricity: 0.158,
    inclination: 29.0,
    longitudeOfAscendingNode: 79.6,
    argumentOfPerihelion: 296.4,
    meanAnomalyAtEpoch: 142.0,
    epoch: 2451545.0,
    earthComparison: {
      sizeRatio: 0.112,
      gravityRatio: 0.042,
      massRatio: 0.0005
    },
    facts: {
      type: 'Dwarf Planet',
      diameter: '1,430 km',
      dayLength: '22.5 hours',
      yearLength: '308 Earth years',
      moons: 1,
      location: 'Kuiper Belt',
      feature: 'Extremely cold, reddish-brown surface',
      discoveredBy: 'Brown, Trujillo, Rabinowitz, 2005',
      surface: 'Methane, ethane, nitrogen ices'
    }
  },
  {
    name: 'Eris',
    radius: 0.19 * SIZE_SCALE,
    distance: 67.86 * DISTANCE_SCALE,
    orbitalPeriod: 559,
    rotationPeriod: 1.08,
    axialTilt: 78,
    color: 0xeeeeee,
    isDwarfPlanet: true,
    classification: 'IAU Dwarf Planet',
    semiMajorAxis: 67.86,
    eccentricity: 0.441,
    inclination: 44.0,
    longitudeOfAscendingNode: 35.9,
    argumentOfPerihelion: 151.5,
    meanAnomalyAtEpoch: 205.0,
    epoch: 2451545.0,
    earthComparison: {
      sizeRatio: 0.182,
      gravityRatio: 0.082,
      massRatio: 0.0028
    },
    facts: {
      type: 'Dwarf Planet',
      diameter: '2,326 km',
      dayLength: '25.9 hours',
      yearLength: '559 Earth years',
      moons: 1,
      location: 'Scattered Disc',
      feature: 'Most massive known dwarf planet',
      discoveredBy: 'Brown, Trujillo, Rabinowitz, 2005',
      surface: 'Methane ice, extremely bright'
    }
  },
  // Dwarf Planet Candidates (likely but not yet officially recognized)
  {
    name: 'Orcus',
    radius: 0.12 * SIZE_SCALE,
    distance: 39.40 * DISTANCE_SCALE,
    orbitalPeriod: 247.3,
    rotationPeriod: 0.44,
    axialTilt: 20,
    color: 0x999999,
    isDwarfPlanet: true,
    classification: 'Dwarf Planet Candidate',
    semiMajorAxis: 39.40,
    eccentricity: 0.220,
    inclination: 20.6,
    longitudeOfAscendingNode: 268.8,
    argumentOfPerihelion: 72.3,
    meanAnomalyAtEpoch: 167.0,
    epoch: 2451545.0,
    facts: {
      type: 'Dwarf Planet Candidate',
      diameter: '910 km',
      dayLength: '10.5 hours',
      yearLength: '247 Earth years',
      moons: 1,
      location: 'Kuiper Belt (Plutino)',
      feature: '"Anti-Pluto" - opposite orbital phase',
      discoveredBy: 'Brown, Trujillo, Rabinowitz, 2004'
    }
  },
  {
    name: 'Salacia',
    radius: 0.11 * SIZE_SCALE,
    distance: 42.18 * DISTANCE_SCALE,
    orbitalPeriod: 274.0,
    rotationPeriod: 0.27,
    axialTilt: 24,
    color: 0x7788aa,
    isDwarfPlanet: true,
    classification: 'Dwarf Planet Candidate',
    semiMajorAxis: 42.18,
    eccentricity: 0.106,
    inclination: 23.9,
    longitudeOfAscendingNode: 280.0,
    argumentOfPerihelion: 311.5,
    meanAnomalyAtEpoch: 120.0,
    epoch: 2451545.0,
    facts: {
      type: 'Dwarf Planet Candidate',
      diameter: '846 km',
      dayLength: '6.5 hours',
      yearLength: '274 Earth years',
      moons: 1,
      location: 'Kuiper Belt',
      feature: 'Dark surface, possibly differentiated',
      discoveredBy: 'Sheppard & Trujillo, 2004'
    }
  },
  {
    name: 'Quaoar',
    radius: 0.13 * SIZE_SCALE,
    distance: 43.69 * DISTANCE_SCALE,
    orbitalPeriod: 288.8,
    rotationPeriod: 0.74,
    axialTilt: 8,
    color: 0xbb8866,
    isDwarfPlanet: true,
    classification: 'Dwarf Planet Candidate',
    semiMajorAxis: 43.69,
    eccentricity: 0.040,
    inclination: 8.0,
    longitudeOfAscendingNode: 189.0,
    argumentOfPerihelion: 155.0,
    meanAnomalyAtEpoch: 280.0,
    epoch: 2451545.0,
    facts: {
      type: 'Dwarf Planet Candidate',
      diameter: '1,098 km',
      dayLength: '17.7 hours',
      yearLength: '289 Earth years',
      moons: 1,
      location: 'Kuiper Belt',
      feature: 'Has rings despite small size',
      discoveredBy: 'Brown & Trujillo, 2002',
      surface: 'Crystalline ice, ammonia hydrate'
    }
  },
  {
    name: 'Gonggong',
    radius: 0.14 * SIZE_SCALE,
    distance: 66.90 * DISTANCE_SCALE,
    orbitalPeriod: 554,
    rotationPeriod: 0.93,
    axialTilt: 31,
    color: 0xcc6666,
    isDwarfPlanet: true,
    classification: 'Dwarf Planet Candidate',
    semiMajorAxis: 66.90,
    eccentricity: 0.503,
    inclination: 30.7,
    longitudeOfAscendingNode: 336.8,
    argumentOfPerihelion: 207.2,
    meanAnomalyAtEpoch: 105.0,
    epoch: 2451545.0,
    facts: {
      type: 'Dwarf Planet Candidate',
      diameter: '1,230 km',
      dayLength: '22.4 hours',
      yearLength: '554 Earth years',
      moons: 1,
      location: 'Scattered Disc',
      feature: 'Very red, highly elliptical orbit',
      discoveredBy: 'Schwamb, Brown, Rabinowitz, 2007',
      surface: 'Methane ice, tholins'
    }
  },
  {
    name: 'Sedna',
    radius: 0.13 * SIZE_SCALE,
    distance: 506.8 * DISTANCE_SCALE,  // Semi-major axis
    orbitalPeriod: 11400,
    rotationPeriod: 0.43,
    axialTilt: 12,
    color: 0xdd4444,
    isDwarfPlanet: true,
    classification: 'Dwarf Planet Candidate',
    semiMajorAxis: 506.8,
    eccentricity: 0.855,
    inclination: 11.9,
    longitudeOfAscendingNode: 144.5,
    argumentOfPerihelion: 311.5,
    meanAnomalyAtEpoch: 358.0,
    epoch: 2451545.0,
    isExtreme: true,  // Flag for special handling
    perihelion: 76.2,   // AU
    aphelion: 937.4,    // AU
    facts: {
      type: 'Dwarf Planet Candidate',
      diameter: '~1,000 km',
      dayLength: '10.3 hours',
      yearLength: '11,400 Earth years',
      moons: 0,
      location: 'Inner Oort Cloud / Sednoid',
      feature: 'Most distant known orbit, extremely red',
      discoveredBy: 'Brown, Trujillo, Rabinowitz, 2003',
      surface: 'Methane, nitrogen, water ice, tholins',
      orbit: 'Perihelion 76 AU, Aphelion 937 AU'
    }
  }
];

// Pluto's moon Charon
/** @type {import('../types/index.d.ts').MoonData} */
export const CHARON_DATA = {
  name: 'Charon',
  parent: 'Pluto',
  radius: 0.09 * SIZE_SCALE,
  distance: 1.5,
  orbitalPeriod: 0.0175,  // 6.39 days (tidally locked with Pluto)
  rotationPeriod: 6.39,
  color: 0x999999,
  facts: {
    type: 'Natural Satellite',
    diameter: '1,212 km',
    orbitalPeriod: '6.39 days',
    feature: 'Tidally locked with Pluto (both face each other)',
    discoveredBy: 'James Christy, 1978'
  }
};

// Asteroid belt parameters
export const ASTEROID_BELT_DATA = {
  innerRadius: 2.2 * DISTANCE_SCALE,
  outerRadius: 3.2 * DISTANCE_SCALE,
  count: 3000,
  minSize: 0.02,
  maxSize: 0.08,
  color: 0x888888,
  verticalSpread: 0.5
};

// Major asteroids (10 largest, excluding Ceres which is a dwarf planet)
// These are rendered as individual objects, separate from the particle belt
/** @type {import('../types/index.d.ts').AsteroidData[]} */
export const MAJOR_ASTEROIDS = [
  {
    name: 'Vesta',
    semiMajorAxis: 2.362,
    eccentricity: 0.089,
    inclination: 7.14,
    longitudeOfAscendingNode: 103.9,
    argumentOfPerihelion: 150.7,
    meanAnomalyAtEpoch: 20.9,
    epoch: 2451545.0,
    orbitalPeriod: 3.63,
    rotationPeriod: 5.342,
    diameter: 525,
    radius: 0.06 * SIZE_SCALE,  // Visual radius scaled for visibility
    color: 0xddddcc,  // Very bright, albedo 0.42
    albedo: 0.423,
    type: 'V-type',
    facts: {
      type: 'Asteroid (V-type)',
      diameter: '525 km',
      orbitalPeriod: '3.63 Earth years',
      rotationPeriod: '5.34 hours',
      feature: 'Rheasilvia basin - 505km crater',
      surface: 'Basaltic, brightest asteroid',
      discoveredBy: 'Heinrich Olbers, 1807'
    }
  },
  {
    name: 'Pallas',
    semiMajorAxis: 2.773,
    eccentricity: 0.231,
    inclination: 34.84,  // Very high inclination!
    longitudeOfAscendingNode: 173.0,
    argumentOfPerihelion: 310.0,
    meanAnomalyAtEpoch: 96.1,
    epoch: 2451545.0,
    orbitalPeriod: 4.61,
    rotationPeriod: 7.81,
    diameter: 511,
    radius: 0.058 * SIZE_SCALE,
    color: 0x666677,  // B-type, bluish-grey
    albedo: 0.159,
    type: 'B-type',
    facts: {
      type: 'Asteroid (B-type)',
      diameter: '511 km',
      orbitalPeriod: '4.61 Earth years',
      rotationPeriod: '7.81 hours',
      feature: 'Highest inclination of major asteroids (34.8°)',
      orbit: 'Tilted 35° from ecliptic',
      discoveredBy: 'Heinrich Olbers, 1802'
    }
  },
  {
    name: 'Hygiea',
    semiMajorAxis: 3.139,
    eccentricity: 0.112,
    inclination: 3.83,
    longitudeOfAscendingNode: 283.2,
    argumentOfPerihelion: 312.3,
    meanAnomalyAtEpoch: 156.4,
    epoch: 2451545.0,
    orbitalPeriod: 5.56,
    rotationPeriod: 13.83,
    diameter: 433,
    radius: 0.05 * SIZE_SCALE,
    color: 0x444444,  // Very dark C-type
    albedo: 0.072,
    type: 'C-type',
    facts: {
      type: 'Asteroid (C-type)',
      diameter: '433 km',
      orbitalPeriod: '5.56 Earth years',
      rotationPeriod: '13.83 hours',
      feature: 'Nearly spherical from ancient impact',
      surface: 'Smoothest large asteroid, very dark',
      discoveredBy: 'Annibale de Gasparis, 1849'
    }
  },
  {
    name: 'Interamnia',
    semiMajorAxis: 3.062,
    eccentricity: 0.156,
    inclination: 17.31,
    longitudeOfAscendingNode: 280.3,
    argumentOfPerihelion: 95.9,
    meanAnomalyAtEpoch: 280.4,
    epoch: 2451545.0,
    orbitalPeriod: 5.35,
    rotationPeriod: 8.73,
    diameter: 332,
    radius: 0.04 * SIZE_SCALE,
    color: 0x3a3a3a,  // F-type, very dark
    albedo: 0.067,
    type: 'F-type',
    facts: {
      type: 'Asteroid (F-type)',
      diameter: '332 km',
      orbitalPeriod: '5.35 Earth years',
      rotationPeriod: '8.73 hours',
      feature: 'Primitive organic-rich material',
      discoveredBy: 'Vincenzo Cerulli, 1910'
    }
  },
  {
    name: '52 Europa',  // Asteroid 52 Europa, not Jupiter's moon
    displayName: 'Europa (Asteroid)',
    semiMajorAxis: 3.095,
    eccentricity: 0.110,
    inclination: 7.48,
    longitudeOfAscendingNode: 128.6,
    argumentOfPerihelion: 343.6,
    meanAnomalyAtEpoch: 224.6,
    epoch: 2451545.0,
    orbitalPeriod: 5.45,
    rotationPeriod: 5.63,
    diameter: 319,
    radius: 0.038 * SIZE_SCALE,
    color: 0x333333,  // Very dark
    albedo: 0.057,
    type: 'C-type',
    facts: {
      type: 'Asteroid (C-type)',
      diameter: '319 km',
      orbitalPeriod: '5.45 Earth years',
      rotationPeriod: '5.63 hours',
      feature: 'Rubble pile structure, very porous',
      note: 'Not to be confused with Jupiter\'s moon Europa',
      discoveredBy: 'Hermann Goldschmidt, 1858'
    }
  },
  {
    name: 'Davida',
    semiMajorAxis: 3.168,
    eccentricity: 0.188,
    inclination: 15.94,
    longitudeOfAscendingNode: 107.6,
    argumentOfPerihelion: 338.2,
    meanAnomalyAtEpoch: 48.4,
    epoch: 2451545.0,
    orbitalPeriod: 5.63,
    rotationPeriod: 5.13,
    diameter: 298,
    radius: 0.036 * SIZE_SCALE,
    color: 0x404040,
    albedo: 0.076,
    type: 'C-type',
    facts: {
      type: 'Asteroid (C-type)',
      diameter: '298 km',
      orbitalPeriod: '5.63 Earth years',
      rotationPeriod: '5.13 hours',
      feature: 'Angular potato shape',
      discoveredBy: 'Raymond Dugan, 1903'
    }
  },
  {
    name: 'Sylvia',
    semiMajorAxis: 3.485,  // Cybele group, beyond main belt
    eccentricity: 0.094,
    inclination: 10.88,
    longitudeOfAscendingNode: 73.1,
    argumentOfPerihelion: 266.2,
    meanAnomalyAtEpoch: 190.5,
    epoch: 2451545.0,
    orbitalPeriod: 6.49,
    rotationPeriod: 5.18,
    diameter: 271,
    radius: 0.034 * SIZE_SCALE,
    color: 0x2a2a2a,  // Very dark X-type
    albedo: 0.046,
    type: 'X-type',
    facts: {
      type: 'Asteroid (X-type)',
      diameter: '271 km',
      orbitalPeriod: '6.49 Earth years',
      rotationPeriod: '5.18 hours',
      feature: 'Triple system with 2 moons (Romulus & Remus)',
      discoveredBy: 'Norman Pogson, 1866'
    }
  },
  {
    name: 'Eunomia',
    semiMajorAxis: 2.643,
    eccentricity: 0.187,
    inclination: 11.75,
    longitudeOfAscendingNode: 293.2,
    argumentOfPerihelion: 97.9,
    meanAnomalyAtEpoch: 67.2,
    epoch: 2451545.0,
    orbitalPeriod: 4.30,
    rotationPeriod: 6.08,
    diameter: 270,
    radius: 0.034 * SIZE_SCALE,
    color: 0xaa8866,  // S-type, reddish-stony, bright
    albedo: 0.248,
    type: 'S-type',
    facts: {
      type: 'Asteroid (S-type)',
      diameter: '270 km',
      orbitalPeriod: '4.30 Earth years',
      rotationPeriod: '6.08 hours',
      feature: 'Largest S-type asteroid',
      surface: 'Reddish stony composition',
      discoveredBy: 'Annibale de Gasparis, 1851'
    }
  },
  {
    name: 'Euphrosyne',
    semiMajorAxis: 3.149,
    eccentricity: 0.221,
    inclination: 26.32,  // High inclination
    longitudeOfAscendingNode: 31.1,
    argumentOfPerihelion: 61.6,
    meanAnomalyAtEpoch: 312.1,
    epoch: 2451545.0,
    orbitalPeriod: 5.61,
    rotationPeriod: 5.53,
    diameter: 268,
    radius: 0.034 * SIZE_SCALE,
    color: 0x222222,  // Extremely dark
    albedo: 0.053,
    type: 'C-type',
    facts: {
      type: 'Asteroid (C-type)',
      diameter: '268 km',
      orbitalPeriod: '5.61 Earth years',
      rotationPeriod: '5.53 hours',
      feature: 'Has a small moon, very dark',
      orbit: 'High inclination (26.3°)',
      discoveredBy: 'James Ferguson, 1854'
    }
  }
];

// Kuiper Belt parameters
export const KUIPER_BELT_DATA = {
  innerRadius: 30 * DISTANCE_SCALE,   // Just beyond Neptune
  outerRadius: 50 * DISTANCE_SCALE,   // Extends far out
  count: 1500,                        // Reduced for less clutter
  minSize: 0.01,
  maxSize: 0.04,
  color: 0x4455aa,                    // Cooler blue
  verticalSpread: 2.0,                // More spread out than asteroid belt
  opacity: 0.3                        // More transparent
};

// Time constants for simulation
export const TIME_CONSTANTS = {
  earthYearInDays: 365.25,
  simulationStartDate: new Date('2024-01-01'),
  // Speed factor: 1 = real time, 86400 = 1 day per second
  defaultSpeedFactor: 86400 * 30  // ~1 month per second at speed 1
};

// Halley's Comet orbital elements (JPL data)
// Epoch: JD 2439907.5 (February 21, 1968)
/** @type {import('../types/index.d.ts').CometData} */
export const COMET_DATA = {
  name: "Halley's Comet",
  designation: '1P/Halley',
  // Keplerian orbital elements
  semiMajorAxis: 17.93,           // AU (not scaled - will be scaled in Comet.js)
  eccentricity: 0.9679,           // Highly elliptical
  inclination: 162.20,            // Degrees - RETROGRADE orbit (>90° means opposite direction)
  longitudeOfAscendingNode: 59.07, // Degrees (Ω)
  argumentOfPerihelion: 112.21,   // Degrees (ω)
  meanAnomalyAtEpoch: 274.81,     // Degrees (M₀ at epoch)
  epoch: 2439907.5,               // Julian Date (Feb 21, 1968)
  meanMotion: 0.012982,           // Degrees per day
  orbitalPeriod: 75.92,           // Years
  // Derived values
  perihelion: 0.586,              // AU - inside Venus orbit
  aphelion: 35.28,                // AU - past Neptune
  // Key dates
  lastPerihelion: new Date('1986-02-09'),
  nextPerihelion: new Date('2061-07-28'),
  facts: {
    type: 'Periodic Comet (Halley-type)',
    designation: '1P/Halley',
    orbitalPeriod: '75.92 Earth years',
    perihelion: '0.586 AU (inside Venus orbit)',
    aphelion: '35.28 AU (past Neptune)',
    lastPerihelion: 'February 9, 1986',
    nextPerihelion: 'July 28, 2061',
    inclination: '162.2° (retrograde orbit)',
    composition: 'Ice, dust, and rock ("dirty snowball")',
    nucleus: '~11 km × 8 km (potato-shaped)',
    discoveredBy: 'Known since ancient times, orbit computed by Edmond Halley (1705)',
    feature: 'Tail always points away from Sun due to solar wind'
  }
};

/**
 * Atmosphere Configuration
 *
 * Defines the visual properties of planetary atmospheres
 * for the Fresnel rim glow effect.
 *
 * Properties:
 * - color: RGB values (0-1) for atmosphere tint
 * - intensity: Overall brightness multiplier
 * - power: Fresnel exponent (higher = thinner rim)
 * - opacity: Maximum opacity at edges
 * - scale: Size relative to planet (1.02 = 2% larger)
 */
/** @type {import('../types/index.d.ts').AtmosphereConfigMap} */
export const ATMOSPHERE_CONFIG = {
  // Earth - Prominent blue atmosphere
  Earth: {
    color: [0.3, 0.6, 1.0],    // Blue
    intensity: 1.2,
    power: 4.0,
    opacity: 0.8,
    scale: 1.025               // 2.5% larger than planet
  },

  // Venus - Thick yellowish-white cloud layer
  Venus: {
    color: [1.0, 0.9, 0.7],    // Pale yellow-white
    intensity: 1.5,
    power: 2.5,
    opacity: 0.9,
    scale: 1.045               // Thick atmosphere
  },

  // Mars - Very thin dusty red-orange atmosphere
  Mars: {
    color: [1.0, 0.5, 0.3],    // Dusty red-orange
    intensity: 0.5,
    power: 5.0,
    opacity: 0.4,
    scale: 1.008               // Very thin
  },

  // Jupiter - Subtle pale tan glow
  Jupiter: {
    color: [0.9, 0.8, 0.7],    // Pale tan
    intensity: 0.3,
    power: 6.0,
    opacity: 0.3,
    scale: 1.008
  },

  // Saturn - Subtle pale gold glow
  Saturn: {
    color: [1.0, 0.95, 0.8],   // Pale gold
    intensity: 0.25,
    power: 6.0,
    opacity: 0.3,
    scale: 1.008
  },

  // Uranus - Cyan methane atmosphere
  Uranus: {
    color: [0.5, 0.8, 0.9],    // Cyan
    intensity: 0.5,
    power: 4.5,
    opacity: 0.5,
    scale: 1.012
  },

  // Neptune - Deep blue atmosphere
  Neptune: {
    color: [0.2, 0.4, 1.0],    // Deep blue
    intensity: 0.6,
    power: 4.0,
    opacity: 0.6,
    scale: 1.015
  },

  // Titan - Thick orange hazy atmosphere (most dramatic moon)
  Titan: {
    color: [1.0, 0.6, 0.2],    // Orange haze
    intensity: 1.0,
    power: 3.0,
    opacity: 0.85,
    scale: 1.035               // Thick hazy atmosphere
  },

  // Pluto - Extremely thin nitrogen atmosphere
  Pluto: {
    color: [0.7, 0.8, 1.0],    // Faint blue (nitrogen)
    intensity: 0.3,
    power: 6.0,
    opacity: 0.25,
    scale: 1.005               // Extremely thin
  },

  // Triton - Thin nitrogen atmosphere with geysers
  Triton: {
    color: [0.8, 0.85, 1.0],   // Pale blue (nitrogen geysers)
    intensity: 0.25,
    power: 6.0,
    opacity: 0.2,
    scale: 1.004
  }
};

/**
 * Moon Textures Configuration
 *
 * High-quality textures for major moons that benefit from detailed surfaces.
 * Earth's Moon and Jupiter's Galilean moons get the most visual attention.
 * @type {import('../types/index.d.ts').MoonTextureMap}
 */
export const MOON_TEXTURES = {
  // Earth's Moon - detailed surface with craters
  Moon: {
    diffuse: `${TEXTURE_BASE}/2k_moon.jpg`,
    // Normal map makes craters pop with realistic shadows
    normal: null  // Solar System Scope doesn't have moon normal map
  },

  // Jupiter's Galilean Moons
  Io: {
    diffuse: `${TEXTURE_BASE}/2k_io.jpg`
    // Io has volcanic sulfur surface, normal map less useful
  },
  Europa: {
    diffuse: `${TEXTURE_BASE}/2k_europa.jpg`
    // Europa has smooth ice surface
  },
  Ganymede: {
    diffuse: `${TEXTURE_BASE}/2k_ganymede.jpg`
  },
  Callisto: {
    diffuse: `${TEXTURE_BASE}/2k_callisto.jpg`
  },

  // Saturn's Titan (thick atmosphere obscures surface)
  Titan: {
    diffuse: null  // Orange haze, surface not visible
  }
};

export { DISTANCE_SCALE, SIZE_SCALE };
