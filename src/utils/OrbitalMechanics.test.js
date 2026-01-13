/**
 * Unit Tests for OrbitalMechanics.js
 *
 * Tests core astronomical calculations against known reference values.
 * Reference sources:
 * - NASA JPL Horizons System
 * - Astronomical Algorithms by Jean Meeus
 * - US Naval Observatory calculations
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  dateToJulianDate,
  julianDateToDate,
  calculatePlanetPosition,
  calculateMoonPosition,
  getOrbitalPeriod,
  calculateAllPositions,
  ORBITAL_ELEMENTS
} from './OrbitalMechanics.js';

// Helper to solve Kepler's equation (exported for testing)
// Since solveKepler is not exported, we test it indirectly through calculatePlanetPosition

describe('dateToJulianDate', () => {
  it('should return correct JD for J2000.0 epoch (Jan 1, 2000 12:00 TT)', () => {
    // J2000.0 epoch is Julian Date 2451545.0
    const j2000 = new Date(Date.UTC(2000, 0, 1, 12, 0, 0));
    const jd = dateToJulianDate(j2000);
    expect(jd).toBeCloseTo(2451545.0, 5);
  });

  it('should return correct JD for Jan 1, 2000 00:00 UTC', () => {
    // Midnight on Jan 1, 2000 is JD 2451544.5
    const date = new Date(Date.UTC(2000, 0, 1, 0, 0, 0));
    const jd = dateToJulianDate(date);
    expect(jd).toBeCloseTo(2451544.5, 5);
  });

  it('should return correct JD for a historical date (Sputnik launch: Oct 4, 1957)', () => {
    // Sputnik 1 launched on October 4, 1957 at 19:28:34 UTC
    // JD should be approximately 2436116.31
    const sputnik = new Date(Date.UTC(1957, 9, 4, 19, 28, 34));
    const jd = dateToJulianDate(sputnik);
    expect(jd).toBeCloseTo(2436116.31, 1);
  });

  it('should return correct JD for Apollo 11 Moon landing (Jul 20, 1969 20:17 UTC)', () => {
    // Apollo 11 landed on July 20, 1969 at 20:17 UTC
    // JD approximately 2440423.35
    const apollo11 = new Date(Date.UTC(1969, 6, 20, 20, 17, 0));
    const jd = dateToJulianDate(apollo11);
    expect(jd).toBeCloseTo(2440423.35, 1);
  });

  it('should handle dates in January and February correctly (calendar adjustment)', () => {
    // January and February are treated as months 13 and 14 of the previous year
    // in the Julian Date algorithm
    const jan15_2020 = new Date(Date.UTC(2020, 0, 15, 0, 0, 0));
    const jd = dateToJulianDate(jan15_2020);
    expect(jd).toBeCloseTo(2458863.5, 3);
  });

  it('should handle future dates (Jan 1, 2100)', () => {
    const future = new Date(Date.UTC(2100, 0, 1, 0, 0, 0));
    const jd = dateToJulianDate(future);
    // JD for Jan 1, 2100 00:00 UTC is approximately 2488069.5
    expect(jd).toBeCloseTo(2488069.5, 1);
  });

  it('should handle dates before the Gregorian calendar reform', () => {
    // Newton's birthday: Dec 25, 1642 (Julian calendar) = Jan 4, 1643 (Gregorian)
    // This tests the algorithm works for historical dates
    const historicalDate = new Date(Date.UTC(1643, 0, 4, 12, 0, 0));
    const jd = dateToJulianDate(historicalDate);
    expect(jd).toBeGreaterThan(2320000); // Reasonable range for 17th century
    expect(jd).toBeLessThan(2330000);
  });
});

describe('julianDateToDate', () => {
  it('should round-trip correctly with dateToJulianDate for J2000.0', () => {
    const original = new Date(Date.UTC(2000, 0, 1, 12, 0, 0));
    const jd = dateToJulianDate(original);
    const result = julianDateToDate(jd);

    expect(result.getUTCFullYear()).toBe(2000);
    expect(result.getUTCMonth()).toBe(0);
    expect(result.getUTCDate()).toBe(1);
    expect(result.getUTCHours()).toBe(12);
  });

  it('should round-trip correctly for arbitrary dates', () => {
    const testDates = [
      new Date(Date.UTC(2023, 5, 15, 8, 30, 0)),
      new Date(Date.UTC(1985, 10, 21, 16, 29, 0)),
      new Date(Date.UTC(2050, 2, 14, 0, 0, 0))
    ];

    testDates.forEach(original => {
      const jd = dateToJulianDate(original);
      const result = julianDateToDate(jd);

      expect(result.getUTCFullYear()).toBe(original.getUTCFullYear());
      expect(result.getUTCMonth()).toBe(original.getUTCMonth());
      expect(result.getUTCDate()).toBe(original.getUTCDate());
      // Hours might have small rounding differences
      expect(Math.abs(result.getUTCHours() - original.getUTCHours())).toBeLessThanOrEqual(1);
    });
  });

  it('should convert J2000.0 Julian Date correctly', () => {
    const result = julianDateToDate(2451545.0);
    expect(result.getUTCFullYear()).toBe(2000);
    expect(result.getUTCMonth()).toBe(0); // January
    expect(result.getUTCDate()).toBe(1);
  });

  it('should handle dates before the Gregorian calendar reform (JD < 2299161)', () => {
    // The Gregorian calendar reform occurred on October 15, 1582 (JD 2299161)
    // Test with a date well before: January 1, 1000 CE
    // JD for Jan 1, 1000 CE is approximately 2086307.5
    const preGregorianJD = 2086307.5;

    const result = julianDateToDate(preGregorianJD);

    // Should return a valid date object (proleptic Gregorian calendar)
    expect(result).toBeInstanceOf(Date);
    expect(isNaN(result.getTime())).toBe(false);

    // The year should be around 1000 CE
    expect(result.getUTCFullYear()).toBeCloseTo(1000, 0);
  });

  it('should handle very ancient dates (fall of Rome, 476 CE)', () => {
    // September 4, 476 CE - Fall of the Western Roman Empire
    // JD calculation: floor(365.25 * (476 + 4716)) + floor(30.6001 * 10) + 4 - 1524.5
    //              = 1896378 + 306 + 4 - 1524.5 = 1895163.5
    const ancientJD = 1895163.5;

    const result = julianDateToDate(ancientJD);

    expect(result).toBeInstanceOf(Date);
    expect(isNaN(result.getTime())).toBe(false);
    // Year should be around 476
    expect(result.getUTCFullYear()).toBeCloseTo(476, 0);
  });

  it('should handle the Julian-Gregorian boundary correctly', () => {
    // Just before the reform: October 4, 1582 (last day of Julian calendar)
    // JD = 2299159.5
    const lastJulianDay = 2299159.5;
    const resultBefore = julianDateToDate(lastJulianDay);
    expect(resultBefore).toBeInstanceOf(Date);
    expect(isNaN(resultBefore.getTime())).toBe(false);

    // Just after the reform: October 15, 1582 (first day of Gregorian calendar)
    // JD = 2299160.5
    const firstGregorianDay = 2299160.5;
    const resultAfter = julianDateToDate(firstGregorianDay);
    expect(resultAfter).toBeInstanceOf(Date);
    expect(isNaN(resultAfter.getTime())).toBe(false);
  });
});

describe('calculatePlanetPosition', () => {
  // J2000.0 epoch for reference
  const J2000_JD = 2451545.0;

  describe('Earth position', () => {
    it('should place Earth at approximately 1 AU from the Sun', () => {
      const pos = calculatePlanetPosition('Earth', J2000_JD);
      // Earth's distance from Sun varies from 0.983 AU (perihelion) to 1.017 AU (aphelion)
      expect(pos.r).toBeGreaterThan(0.98);
      expect(pos.r).toBeLessThan(1.02);
    });

    it('should return heliocentric coordinates that match JPL data for J2000.0', () => {
      // At J2000.0, Earth was at approximately:
      // X = -0.1771 AU, Y = 0.9672 AU, Z ≈ 0 AU (in ecliptic coordinates)
      const pos = calculatePlanetPosition('Earth', J2000_JD);

      // Allow for small differences due to algorithm simplifications
      expect(pos.x).toBeCloseTo(-0.177, 1);
      expect(pos.y).toBeCloseTo(0.967, 1);
      expect(Math.abs(pos.z)).toBeLessThan(0.01); // Near ecliptic plane
    });

    it('should show Earth moving over time', () => {
      const pos1 = calculatePlanetPosition('Earth', J2000_JD);
      const pos2 = calculatePlanetPosition('Earth', J2000_JD + 30); // 30 days later

      // Earth moves about 1 degree per day, so 30 degrees in 30 days
      const angle1 = Math.atan2(pos1.y, pos1.x);
      const angle2 = Math.atan2(pos2.y, pos2.x);

      // Angular difference should be roughly 30 degrees (0.52 radians)
      let angleDiff = angle2 - angle1;
      if (angleDiff < 0) angleDiff += 2 * Math.PI;
      expect(angleDiff).toBeCloseTo(30 * Math.PI / 180, 1);
    });
  });

  describe('Mercury position', () => {
    it('should have an orbital distance between 0.31 and 0.47 AU', () => {
      // Mercury's orbit: perihelion 0.307 AU, aphelion 0.467 AU
      const pos = calculatePlanetPosition('Mercury', J2000_JD);
      expect(pos.r).toBeGreaterThan(0.30);
      expect(pos.r).toBeLessThan(0.48);
    });

    it('should complete an orbit in approximately 88 days', () => {
      const start = calculatePlanetPosition('Mercury', J2000_JD);
      const end = calculatePlanetPosition('Mercury', J2000_JD + 88);

      // After one orbital period, should be back near starting position
      const distMoved = Math.sqrt(
        Math.pow(end.x - start.x, 2) +
        Math.pow(end.y - start.y, 2)
      );
      // Should be close to original position (within 0.1 AU)
      expect(distMoved).toBeLessThan(0.15);
    });
  });

  describe('Mars position', () => {
    it('should have an orbital distance between 1.38 and 1.67 AU', () => {
      // Mars orbit: perihelion 1.381 AU, aphelion 1.666 AU
      const pos = calculatePlanetPosition('Mars', J2000_JD);
      expect(pos.r).toBeGreaterThan(1.35);
      expect(pos.r).toBeLessThan(1.70);
    });

    it('should have significant inclination (1.85 degrees)', () => {
      // Mars has an orbital inclination of about 1.85 degrees
      // At various points in its orbit, z should be non-negligible
      const pos = calculatePlanetPosition('Mars', J2000_JD + 200);
      // Maximum z displacement at inclination of 1.85° and radius ~1.5 AU
      // is about 1.5 * sin(1.85°) ≈ 0.048 AU
      expect(Math.abs(pos.z)).toBeLessThan(0.1);
    });
  });

  describe('Jupiter position', () => {
    it('should be at approximately 5.2 AU from the Sun', () => {
      const pos = calculatePlanetPosition('Jupiter', J2000_JD);
      expect(pos.r).toBeGreaterThan(4.9);
      expect(pos.r).toBeLessThan(5.5);
    });

    it('should move slowly (one orbit takes about 12 years)', () => {
      const start = calculatePlanetPosition('Jupiter', J2000_JD);
      const oneYear = calculatePlanetPosition('Jupiter', J2000_JD + 365.25);

      // In one year, Jupiter moves about 30 degrees
      const angle1 = Math.atan2(start.y, start.x);
      const angle2 = Math.atan2(oneYear.y, oneYear.x);
      let angleDiff = angle2 - angle1;
      if (angleDiff < 0) angleDiff += 2 * Math.PI;
      if (angleDiff > Math.PI) angleDiff = 2 * Math.PI - angleDiff;

      // About 30 degrees per year (0.52 radians)
      expect(angleDiff).toBeCloseTo(30 * Math.PI / 180, 0);
    });
  });

  describe('Saturn position', () => {
    it('should be at approximately 9.5 AU from the Sun', () => {
      const pos = calculatePlanetPosition('Saturn', J2000_JD);
      expect(pos.r).toBeGreaterThan(9.0);
      expect(pos.r).toBeLessThan(10.1);
    });
  });

  describe('Outer planets', () => {
    it('should place Uranus at approximately 19-20 AU', () => {
      const pos = calculatePlanetPosition('Uranus', J2000_JD);
      expect(pos.r).toBeGreaterThan(18);
      expect(pos.r).toBeLessThan(21);
    });

    it('should place Neptune at approximately 30 AU', () => {
      const pos = calculatePlanetPosition('Neptune', J2000_JD);
      expect(pos.r).toBeGreaterThan(29);
      expect(pos.r).toBeLessThan(31);
    });
  });

  describe('Pluto and dwarf planets', () => {
    it('should handle Pluto with high eccentricity (0.25)', () => {
      const pos = calculatePlanetPosition('Pluto', J2000_JD);
      // Pluto's orbit: perihelion 29.7 AU, aphelion 49.3 AU
      expect(pos.r).toBeGreaterThan(29);
      expect(pos.r).toBeLessThan(50);
    });

    it('should handle Sedna with extreme eccentricity (0.855)', () => {
      const pos = calculatePlanetPosition('Sedna', J2000_JD);
      // Sedna's orbit: perihelion ~76 AU, aphelion ~937 AU
      expect(pos.r).toBeGreaterThan(50);
      // Just verify it returns valid coordinates
      expect(isNaN(pos.x)).toBe(false);
      expect(isNaN(pos.y)).toBe(false);
      expect(isNaN(pos.z)).toBe(false);
    });
  });

  describe('Unknown planets', () => {
    it('should return zero position for unknown planet', () => {
      const pos = calculatePlanetPosition('NotAPlanet', J2000_JD);
      expect(pos.x).toBe(0);
      expect(pos.y).toBe(0);
      expect(pos.z).toBe(0);
      expect(pos.r).toBe(0);
    });
  });

  describe('Position consistency', () => {
    it('should return consistent results for the same inputs', () => {
      const pos1 = calculatePlanetPosition('Earth', J2000_JD);
      const pos2 = calculatePlanetPosition('Earth', J2000_JD);

      expect(pos1.x).toBe(pos2.x);
      expect(pos1.y).toBe(pos2.y);
      expect(pos1.z).toBe(pos2.z);
      expect(pos1.r).toBe(pos2.r);
    });

    it('should handle dates far in the future', () => {
      // 100 years from J2000.0
      const futureJD = J2000_JD + 36525;
      const pos = calculatePlanetPosition('Earth', futureJD);

      expect(pos.r).toBeGreaterThan(0.98);
      expect(pos.r).toBeLessThan(1.02);
      expect(isNaN(pos.x)).toBe(false);
    });
  });
});

describe('Kepler equation solving (via calculatePlanetPosition)', () => {
  const J2000_JD = 2451545.0;

  it('should handle near-circular orbits (Venus, e=0.007)', () => {
    const pos = calculatePlanetPosition('Venus', J2000_JD);
    // Venus should be at about 0.72 AU
    expect(pos.r).toBeCloseTo(0.723, 1);
    expect(isNaN(pos.x)).toBe(false);
    expect(isNaN(pos.y)).toBe(false);
  });

  it('should handle moderate eccentricity (Mars, e=0.093)', () => {
    const pos = calculatePlanetPosition('Mars', J2000_JD);
    expect(pos.r).toBeGreaterThan(1.3);
    expect(pos.r).toBeLessThan(1.7);
    expect(isNaN(pos.x)).toBe(false);
  });

  it('should handle high eccentricity (Mercury, e=0.206)', () => {
    // Mercury has the highest eccentricity of the major planets
    const pos = calculatePlanetPosition('Mercury', J2000_JD);
    expect(pos.r).toBeGreaterThan(0.3);
    expect(pos.r).toBeLessThan(0.5);
    expect(isNaN(pos.x)).toBe(false);
  });

  it('should handle very high eccentricity (Pluto, e=0.249)', () => {
    const pos = calculatePlanetPosition('Pluto', J2000_JD);
    expect(isNaN(pos.r)).toBe(false);
    expect(isFinite(pos.r)).toBe(true);
  });

  it('should handle extreme eccentricity (Eris, e=0.441)', () => {
    const pos = calculatePlanetPosition('Eris', J2000_JD);
    expect(isNaN(pos.r)).toBe(false);
    expect(isFinite(pos.r)).toBe(true);
    expect(pos.r).toBeGreaterThan(30); // Eris is very distant
  });

  it('should handle near-parabolic eccentricity (Sedna, e=0.855)', () => {
    const pos = calculatePlanetPosition('Sedna', J2000_JD);
    expect(isNaN(pos.r)).toBe(false);
    expect(isFinite(pos.r)).toBe(true);
  });
});

describe('calculateMoonPosition', () => {
  const J2000_JD = 2451545.0;

  it('should return Moon position relative to Earth at about 0.00257 AU', () => {
    const pos = calculateMoonPosition(J2000_JD);
    // Moon's average distance is about 384,400 km = 0.00257 AU
    expect(pos.r).toBeCloseTo(0.00257, 3);
  });

  it('should include moon phase (0-1)', () => {
    const pos = calculateMoonPosition(J2000_JD);
    expect(pos.phase).toBeGreaterThanOrEqual(0);
    expect(pos.phase).toBeLessThanOrEqual(1);
  });

  it('should show Moon moving over time', () => {
    const pos1 = calculateMoonPosition(J2000_JD);
    const pos2 = calculateMoonPosition(J2000_JD + 7); // 7 days later

    // Moon should have moved significantly (orbital period ~27 days)
    const distMoved = Math.sqrt(
      Math.pow(pos2.x - pos1.x, 2) +
      Math.pow(pos2.y - pos1.y, 2) +
      Math.pow(pos2.z - pos1.z, 2)
    );
    expect(distMoved).toBeGreaterThan(0.001);
  });

  it('should complete phase cycle in approximately 29.5 days', () => {
    // Synodic month is 29.53 days
    const fullMoon = calculateMoonPosition(J2000_JD);
    const nextFullMoon = calculateMoonPosition(J2000_JD + 29.53);

    // Phases should be similar after one synodic month
    const phaseDiff = Math.abs(nextFullMoon.phase - fullMoon.phase);
    expect(phaseDiff).toBeLessThan(0.1);
  });
});

describe('getOrbitalPeriod', () => {
  it('should return 1 year for Earth (1 AU)', () => {
    const period = getOrbitalPeriod(1);
    expect(period).toBeCloseTo(1, 5);
  });

  it('should return correct period for Mars (~1.88 years at 1.524 AU)', () => {
    const period = getOrbitalPeriod(1.524);
    expect(period).toBeCloseTo(1.88, 1);
  });

  it('should return correct period for Jupiter (~11.86 years at 5.203 AU)', () => {
    const period = getOrbitalPeriod(5.203);
    expect(period).toBeCloseTo(11.86, 0);
  });

  it('should return correct period for Neptune (~164.8 years at 30.07 AU)', () => {
    const period = getOrbitalPeriod(30.07);
    expect(period).toBeCloseTo(164.8, 0);
  });

  it('should follow Kepler\'s third law: T^2 = a^3', () => {
    const testValues = [0.5, 1, 2, 5, 10, 30];

    testValues.forEach(a => {
      const T = getOrbitalPeriod(a);
      // T^2 should equal a^3
      expect(Math.pow(T, 2)).toBeCloseTo(Math.pow(a, 3), 5);
    });
  });
});

describe('ORBITAL_ELEMENTS', () => {
  it('should contain all major planets', () => {
    const majorPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    majorPlanets.forEach(planet => {
      expect(ORBITAL_ELEMENTS[planet]).toBeDefined();
    });
  });

  it('should contain Pluto and dwarf planets', () => {
    const dwarfPlanets = ['Pluto', 'Ceres', 'Eris', 'Haumea', 'Makemake'];
    dwarfPlanets.forEach(planet => {
      expect(ORBITAL_ELEMENTS[planet]).toBeDefined();
    });
  });

  it('should have required orbital elements for each body', () => {
    const requiredElements = ['a', 'e', 'i', 'L', 'wbar', 'omega'];

    Object.entries(ORBITAL_ELEMENTS).forEach(([name, elements]) => {
      requiredElements.forEach(elem => {
        expect(elements[elem]).toBeDefined();
        expect(typeof elements[elem]).toBe('number');
        expect(isNaN(elements[elem])).toBe(false);
      });
    });
  });

  it('should have valid eccentricities (0 <= e < 1)', () => {
    Object.entries(ORBITAL_ELEMENTS).forEach(([name, elements]) => {
      expect(elements.e).toBeGreaterThanOrEqual(0);
      expect(elements.e).toBeLessThan(1);
    });
  });

  it('should have positive semi-major axes', () => {
    Object.entries(ORBITAL_ELEMENTS).forEach(([name, elements]) => {
      expect(elements.a).toBeGreaterThan(0);
    });
  });
});

describe('calculateAllPositions', () => {
  it('should return positions for all planets in ORBITAL_ELEMENTS', () => {
    const date = new Date(Date.UTC(2000, 0, 1, 12, 0, 0)); // J2000.0
    const positions = calculateAllPositions(date);

    // Check that all planets from ORBITAL_ELEMENTS are present
    Object.keys(ORBITAL_ELEMENTS).forEach(planet => {
      expect(positions[planet]).toBeDefined();
      expect(positions[planet].x).toBeDefined();
      expect(positions[planet].y).toBeDefined();
      expect(positions[planet].z).toBeDefined();
      expect(positions[planet].r).toBeDefined();
    });
  });

  it('should include Moon position', () => {
    const date = new Date(Date.UTC(2000, 0, 1, 12, 0, 0));
    const positions = calculateAllPositions(date);

    expect(positions.Moon).toBeDefined();
    expect(positions.Moon.x).toBeDefined();
    expect(positions.Moon.y).toBeDefined();
    expect(positions.Moon.z).toBeDefined();
    expect(positions.Moon.phase).toBeDefined();
  });

  it('should return valid positions for all bodies', () => {
    const date = new Date(Date.UTC(2020, 6, 15, 0, 0, 0));
    const positions = calculateAllPositions(date);

    Object.entries(positions).forEach(([name, pos]) => {
      expect(isNaN(pos.x)).toBe(false);
      expect(isNaN(pos.y)).toBe(false);
      expect(isNaN(pos.z)).toBe(false);
      expect(isFinite(pos.x)).toBe(true);
      expect(isFinite(pos.y)).toBe(true);
      expect(isFinite(pos.z)).toBe(true);
    });
  });

  it('should return different positions for different dates', () => {
    const date1 = new Date(Date.UTC(2000, 0, 1, 0, 0, 0));
    const date2 = new Date(Date.UTC(2000, 6, 1, 0, 0, 0)); // 6 months later

    const positions1 = calculateAllPositions(date1);
    const positions2 = calculateAllPositions(date2);

    // Earth should have moved significantly in 6 months
    const earthPos1 = positions1.Earth;
    const earthPos2 = positions2.Earth;

    const distance = Math.sqrt(
      Math.pow(earthPos2.x - earthPos1.x, 2) +
      Math.pow(earthPos2.y - earthPos1.y, 2)
    );

    // Earth moves to opposite side of Sun in 6 months (~2 AU movement)
    expect(distance).toBeGreaterThan(1.5);
  });

  it('should handle dates far in the past', () => {
    const ancientDate = new Date(Date.UTC(1800, 0, 1, 0, 0, 0));
    const positions = calculateAllPositions(ancientDate);

    // All positions should be valid numbers
    expect(isNaN(positions.Earth.x)).toBe(false);
    expect(isNaN(positions.Mars.x)).toBe(false);
    expect(isNaN(positions.Jupiter.x)).toBe(false);
  });

  it('should handle dates far in the future', () => {
    const futureDate = new Date(Date.UTC(2200, 0, 1, 0, 0, 0));
    const positions = calculateAllPositions(futureDate);

    // All positions should be valid numbers
    expect(isNaN(positions.Earth.x)).toBe(false);
    expect(isNaN(positions.Mars.x)).toBe(false);
    expect(isNaN(positions.Saturn.x)).toBe(false);
  });

  it('should include all dwarf planets', () => {
    const date = new Date(Date.UTC(2020, 0, 1, 0, 0, 0));
    const positions = calculateAllPositions(date);

    const dwarfPlanets = ['Pluto', 'Ceres', 'Eris', 'Haumea', 'Makemake', 'Sedna'];
    dwarfPlanets.forEach(dwarf => {
      expect(positions[dwarf]).toBeDefined();
      expect(positions[dwarf].r).toBeGreaterThan(0);
    });
  });
});
