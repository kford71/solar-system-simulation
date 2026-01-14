/**
 * Moon Data
 *
 * Contains data for all moons in the solar system, including Earth's Moon,
 * the Galilean moons of Jupiter, and moons of Saturn, Uranus, and Neptune.
 *
 * Additional moons data includes Keplerian orbital elements:
 * - semiMajorAxis in km (will be scaled)
 * - period in Earth days
 * - inclination in degrees
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

import { SIZE_SCALE, TEXTURE_BASE } from './constants.js';

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
