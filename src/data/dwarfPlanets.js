/**
 * Dwarf Planet Data
 *
 * Contains data for IAU recognized dwarf planets and candidates.
 * Includes Keplerian orbital elements for accurate positioning.
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

import { DISTANCE_SCALE, SIZE_SCALE, TEXTURE_BASE } from './constants.js';

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
