/**
 * Asteroid Data
 *
 * Contains data for major asteroids and belt parameters.
 * Major asteroids are the 9 largest after Ceres (which is a dwarf planet).
 * These are rendered as individual objects, separate from the particle belt.
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

import { DISTANCE_SCALE, SIZE_SCALE } from './constants.js';

// Asteroid belt parameters
export const ASTEROID_BELT = {
  innerRadius: 2.2 * DISTANCE_SCALE,
  outerRadius: 3.2 * DISTANCE_SCALE,
  count: 3000,
  minSize: 0.02,
  maxSize: 0.08,
  color: 0x888888,
  verticalSpread: 0.5
};

// Alias for backwards compatibility
export const ASTEROID_BELT_DATA = ASTEROID_BELT;

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
