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
 */

// Scale factors for visualization
const DISTANCE_SCALE = 10; // AU to scene units
const SIZE_SCALE = 0.8;    // Size multiplier for visibility (increased for better planet visibility)

// Texture base URL from Solar System Scope (high quality textures)
const TEXTURE_BASE = 'https://www.solarsystemscope.com/textures/download';

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
    ringTextureUrl: `${TEXTURE_BASE}/2k_saturn_ring_alpha.png`,
    hasRings: true,
    ringInnerRadius: 1.2,
    ringOuterRadius: 2.3,
    // Subtle golden atmosphere
    atmosphere: {
      color: 0xffeecc,
      opacity: 0.15,
      scale: 1.02
    },
    moons: ['Titan'],
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
    // Uranus has faint rings
    hasRings: true,
    ringInnerRadius: 1.6,
    ringOuterRadius: 2.0,
    ringColor: 0x6688aa,
    ringOpacity: 0.3,
    // Cyan atmosphere
    atmosphere: {
      color: 0x99ddff,
      opacity: 0.25,
      scale: 1.03
    },
    moons: [],
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
    // Blue atmosphere
    atmosphere: {
      color: 0x4466ff,
      opacity: 0.3,
      scale: 1.03
    },
    moons: [],
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

// Additional moons data
export const ADDITIONAL_MOONS = {
  // Mars moons
  Phobos: {
    name: 'Phobos',
    parent: 'Mars',
    radius: 0.05 * SIZE_SCALE,
    distance: 1.0,
    orbitalPeriod: 0.000876,  // 7.66 hours
    rotationPeriod: 0.319,
    color: 0x8b7355,
    facts: {
      type: 'Natural Satellite',
      diameter: '22.2 km',
      orbitalPeriod: '7.66 hours',
      discoveredBy: 'Asaph Hall, 1877'
    }
  },
  Deimos: {
    name: 'Deimos',
    parent: 'Mars',
    radius: 0.03 * SIZE_SCALE,
    distance: 1.8,
    orbitalPeriod: 0.00345,   // 30.3 hours
    rotationPeriod: 1.263,
    color: 0x8b8378,
    facts: {
      type: 'Natural Satellite',
      diameter: '12.4 km',
      orbitalPeriod: '30.3 hours',
      discoveredBy: 'Asaph Hall, 1877'
    }
  },
  // Jupiter's Galilean moons
  Io: {
    name: 'Io',
    parent: 'Jupiter',
    radius: 0.28 * SIZE_SCALE,
    distance: 3.5,
    orbitalPeriod: 0.00485,   // 1.77 days
    rotationPeriod: 1.77,
    color: 0xffff66,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '3,643 km',
      orbitalPeriod: '1.77 days',
      feature: 'Most volcanically active body in solar system',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },
  Europa: {
    name: 'Europa',
    parent: 'Jupiter',
    radius: 0.24 * SIZE_SCALE,
    distance: 5.0,
    orbitalPeriod: 0.00972,   // 3.55 days
    rotationPeriod: 3.55,
    color: 0xccccff,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '3,122 km',
      orbitalPeriod: '3.55 days',
      feature: 'Subsurface ocean beneath ice shell',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },
  Ganymede: {
    name: 'Ganymede',
    parent: 'Jupiter',
    radius: 0.41 * SIZE_SCALE,
    distance: 7.0,
    orbitalPeriod: 0.0196,    // 7.15 days
    rotationPeriod: 7.15,
    color: 0xaaaaaa,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '5,268 km',
      orbitalPeriod: '7.15 days',
      feature: 'Largest moon in the solar system',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },
  Callisto: {
    name: 'Callisto',
    parent: 'Jupiter',
    radius: 0.37 * SIZE_SCALE,
    distance: 10.0,
    orbitalPeriod: 0.0457,    // 16.69 days
    rotationPeriod: 16.69,
    color: 0x666666,
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg',
    facts: {
      type: 'Natural Satellite',
      diameter: '4,821 km',
      orbitalPeriod: '16.69 days',
      feature: 'Most heavily cratered object in solar system',
      discoveredBy: 'Galileo Galilei, 1610'
    }
  },
  // Saturn's moon
  Titan: {
    name: 'Titan',
    parent: 'Saturn',
    radius: 0.40 * SIZE_SCALE,
    distance: 6.0,
    orbitalPeriod: 0.0437,    // 15.95 days
    rotationPeriod: 15.95,
    color: 0xffcc88,
    atmosphere: {
      color: 0xffaa44,
      opacity: 0.5,
      scale: 1.1
    },
    facts: {
      type: 'Natural Satellite',
      diameter: '5,150 km',
      orbitalPeriod: '15.95 days',
      feature: 'Only moon with dense atmosphere',
      atmosphere: '95% Nitrogen, 5% Methane',
      discoveredBy: 'Christiaan Huygens, 1655'
    }
  }
};

// Dwarf planets
export const DWARF_PLANETS = [
  {
    name: 'Ceres',
    radius: 0.15 * SIZE_SCALE,
    distance: 2.77 * DISTANCE_SCALE,  // In asteroid belt
    orbitalPeriod: 4.6,
    rotationPeriod: 0.378,
    axialTilt: 4,
    color: 0x888888,
    textureUrl: `${TEXTURE_BASE}/2k_ceres_fictional.jpg`,
    isDwarfPlanet: true,
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
    distance: 39.5 * DISTANCE_SCALE,  // Beyond Neptune
    orbitalPeriod: 248,
    rotationPeriod: -6.39,  // Retrograde
    axialTilt: 122.5,
    color: 0xddccaa,
    textureUrl: `${TEXTURE_BASE}/2k_pluto.jpg`,
    isDwarfPlanet: true,
    moons: ['Charon'],
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
  }
];

// Pluto's moon Charon
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

export { DISTANCE_SCALE, SIZE_SCALE };
