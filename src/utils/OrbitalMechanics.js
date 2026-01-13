/**
 * Orbital Mechanics Utility
 *
 * Calculates accurate planetary positions using Keplerian orbital elements.
 * Based on NASA/JPL data for J2000.0 epoch (January 1, 2000, 12:00 TT)
 *
 * Sources:
 * - NASA JPL Solar System Dynamics: https://ssd.jpl.nasa.gov/planets/approx_pos.html
 * - Astronomical Algorithms by Jean Meeus
 */

// J2000.0 epoch in Julian Date
const J2000 = 2451545.0;

// Degrees to radians
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

/**
 * Orbital elements at J2000.0 and their rates of change per century
 * From NASA JPL: https://ssd.jpl.nasa.gov/planets/approx_pos.html
 *
 * Elements:
 * a  = semi-major axis (AU)
 * e  = eccentricity
 * i  = inclination (degrees)
 * L  = mean longitude (degrees)
 * wbar = longitude of perihelion (degrees)
 * omega = longitude of ascending node (degrees)
 *
 * Rates are per Julian century (36525 days)
 * @type {import('../types/index.d.ts').OrbitalElementsMap}
 */
export const ORBITAL_ELEMENTS = {
  Mercury: {
    a: 0.38709927, a_rate: 0.00000037,
    e: 0.20563593, e_rate: 0.00001906,
    i: 7.00497902, i_rate: -0.00594749,
    L: 252.25032350, L_rate: 149472.67411175,
    wbar: 77.45779628, wbar_rate: 0.16047689,
    omega: 48.33076593, omega_rate: -0.12534081
  },
  Venus: {
    a: 0.72333566, a_rate: 0.00000390,
    e: 0.00677672, e_rate: -0.00004107,
    i: 3.39467605, i_rate: -0.00078890,
    L: 181.97909950, L_rate: 58517.81538729,
    wbar: 131.60246718, wbar_rate: 0.00268329,
    omega: 76.67984255, omega_rate: -0.27769418
  },
  Earth: {
    a: 1.00000261, a_rate: 0.00000562,
    e: 0.01671123, e_rate: -0.00004392,
    i: -0.00001531, i_rate: -0.01294668,
    L: 100.46457166, L_rate: 35999.37244981,
    wbar: 102.93768193, wbar_rate: 0.32327364,
    omega: 0.0, omega_rate: 0.0  // Reference plane
  },
  Mars: {
    a: 1.52371034, a_rate: 0.00001847,
    e: 0.09339410, e_rate: 0.00007882,
    i: 1.84969142, i_rate: -0.00813131,
    L: -4.55343205, L_rate: 19140.30268499,
    wbar: -23.94362959, wbar_rate: 0.44441088,
    omega: 49.55953891, omega_rate: -0.29257343
  },
  Jupiter: {
    a: 5.20288700, a_rate: -0.00011607,
    e: 0.04838624, e_rate: -0.00013253,
    i: 1.30439695, i_rate: -0.00183714,
    L: 34.39644051, L_rate: 3034.74612775,
    wbar: 14.72847983, wbar_rate: 0.21252668,
    omega: 100.47390909, omega_rate: 0.20469106
  },
  Saturn: {
    a: 9.53667594, a_rate: -0.00125060,
    e: 0.05386179, e_rate: -0.00050991,
    i: 2.48599187, i_rate: 0.00193609,
    L: 49.95424423, L_rate: 1222.49362201,
    wbar: 92.59887831, wbar_rate: -0.41897216,
    omega: 113.66242448, omega_rate: -0.28867794
  },
  Uranus: {
    a: 19.18916464, a_rate: -0.00196176,
    e: 0.04725744, e_rate: -0.00004397,
    i: 0.77263783, i_rate: -0.00242939,
    L: 313.23810451, L_rate: 428.48202785,
    wbar: 170.95427630, wbar_rate: 0.40805281,
    omega: 74.01692503, omega_rate: 0.04240589
  },
  Neptune: {
    a: 30.06992276, a_rate: 0.00026291,
    e: 0.00859048, e_rate: 0.00005105,
    i: 1.77004347, i_rate: 0.00035372,
    L: -55.12002969, L_rate: 218.45945325,
    wbar: 44.96476227, wbar_rate: -0.32241464,
    omega: 131.78422574, omega_rate: -0.00508664
  },
  // Dwarf planets (approximate elements)
  Pluto: {
    a: 39.48211675, a_rate: -0.00031596,
    e: 0.24882730, e_rate: 0.00005170,
    i: 17.14001206, i_rate: 0.00004818,
    L: 238.92903833, L_rate: 145.20780515,
    wbar: 224.06891629, wbar_rate: -0.04062942,
    omega: 110.30393684, omega_rate: -0.01183482
  },
  Ceres: {
    a: 2.7675, a_rate: 0,
    e: 0.0758, e_rate: 0,
    i: 10.59, i_rate: 0,
    L: 153.0, L_rate: 78.19, // Approximate mean motion
    wbar: 73.0, wbar_rate: 0,
    omega: 80.3, omega_rate: 0
  },
  // Additional dwarf planets
  Haumea: {
    a: 43.22, a_rate: 0,
    e: 0.191, e_rate: 0,
    i: 28.2, i_rate: 0,
    L: 566.2, L_rate: 1.27,  // ~284 year period → ~1.27°/year × 100 = 127°/century
    wbar: 361.2, wbar_rate: 0,  // omega + w = 122.1 + 239.1
    omega: 122.1, omega_rate: 0
  },
  Makemake: {
    a: 45.56, a_rate: 0,
    e: 0.158, e_rate: 0,
    i: 29.0, i_rate: 0,
    L: 518.0, L_rate: 1.17,  // ~308 year period
    wbar: 376.0, wbar_rate: 0,  // 79.6 + 296.4
    omega: 79.6, omega_rate: 0
  },
  Eris: {
    a: 67.86, a_rate: 0,
    e: 0.441, e_rate: 0,
    i: 44.0, i_rate: 0,
    L: 392.4, L_rate: 0.64,  // ~559 year period
    wbar: 187.4, wbar_rate: 0,  // 35.9 + 151.5
    omega: 35.9, omega_rate: 0
  },
  Orcus: {
    a: 39.40, a_rate: 0,
    e: 0.220, e_rate: 0,
    i: 20.6, i_rate: 0,
    L: 508.1, L_rate: 1.46,  // ~247 year period
    wbar: 341.1, wbar_rate: 0,  // 268.8 + 72.3
    omega: 268.8, omega_rate: 0
  },
  Salacia: {
    a: 42.18, a_rate: 0,
    e: 0.106, e_rate: 0,
    i: 23.9, i_rate: 0,
    L: 711.5, L_rate: 1.31,  // ~274 year period
    wbar: 591.5, wbar_rate: 0,  // 280.0 + 311.5
    omega: 280.0, omega_rate: 0
  },
  Quaoar: {
    a: 43.69, a_rate: 0,
    e: 0.040, e_rate: 0,
    i: 8.0, i_rate: 0,
    L: 624.0, L_rate: 1.25,  // ~289 year period
    wbar: 344.0, wbar_rate: 0,  // 189.0 + 155.0
    omega: 189.0, omega_rate: 0
  },
  Gonggong: {
    a: 66.90, a_rate: 0,
    e: 0.503, e_rate: 0,
    i: 30.7, i_rate: 0,
    L: 649.0, L_rate: 0.65,  // ~554 year period
    wbar: 544.0, wbar_rate: 0,  // 336.8 + 207.2
    omega: 336.8, omega_rate: 0
  },
  Sedna: {
    a: 506.8, a_rate: 0,
    e: 0.855, e_rate: 0,
    i: 11.9, i_rate: 0,
    L: 814.0, L_rate: 0.0316,  // ~11400 year period → very slow
    wbar: 456.0, wbar_rate: 0,  // 144.5 + 311.5
    omega: 144.5, omega_rate: 0
  }
};

// Moon orbital elements (simplified, relative to Earth)
export const MOON_ELEMENTS = {
  a: 0.00257,  // Semi-major axis in AU (384,400 km)
  e: 0.0549,   // Eccentricity
  i: 5.145,    // Inclination to ecliptic (degrees)
  // Mean elements at J2000.0
  L0: 218.3164477,      // Mean longitude (degrees)
  L_rate: 481267.88123421,  // Rate per century
  // Longitude of perigee
  w0: 83.3532465,
  w_rate: 4069.0137287,
  // Longitude of ascending node
  omega0: 125.0445479,
  omega_rate: -1934.1362891
};

/**
 * Convert a JavaScript Date to Julian Date
 * @param {Date} date - JavaScript Date object
 * @returns {number} Julian Date
 */
export function dateToJulianDate(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();

  // Day fraction
  const dayFraction = (hour + minute / 60 + second / 3600) / 24;

  // Julian Date calculation
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }

  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);

  const JD = Math.floor(365.25 * (y + 4716)) +
             Math.floor(30.6001 * (m + 1)) +
             day + dayFraction + B - 1524.5;

  return JD;
}

/**
 * Convert Julian Date to JavaScript Date
 * @param {number} jd - Julian Date
 * @returns {Date} JavaScript Date object
 */
export function julianDateToDate(jd) {
  const Z = Math.floor(jd + 0.5);
  const F = jd + 0.5 - Z;

  let A;
  if (Z < 2299161) {
    A = Z;
  } else {
    const alpha = Math.floor((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - Math.floor(alpha / 4);
  }

  const B = A + 1524;
  const C = Math.floor((B - 122.1) / 365.25);
  const D = Math.floor(365.25 * C);
  const E = Math.floor((B - D) / 30.6001);

  const day = B - D - Math.floor(30.6001 * E) + F;
  const month = E < 14 ? E - 1 : E - 13;
  const year = month > 2 ? C - 4716 : C - 4715;

  const dayInt = Math.floor(day);
  const dayFrac = day - dayInt;
  const hours = dayFrac * 24;
  const hoursInt = Math.floor(hours);
  const minutes = (hours - hoursInt) * 60;
  const minutesInt = Math.floor(minutes);
  const seconds = (minutes - minutesInt) * 60;

  return new Date(Date.UTC(year, month - 1, dayInt, hoursInt, minutesInt, Math.floor(seconds)));
}

/**
 * Normalize angle to 0-360 degrees
 */
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle < 0) angle += 360;
  return angle;
}

/**
 * Solve Kepler's equation: M = E - e*sin(E)
 * Uses Newton-Raphson iteration
 *
 * @param {number} M - Mean anomaly in radians
 * @param {number} e - Eccentricity
 * @returns {number} Eccentric anomaly in radians
 */
function solveKepler(M, e) {
  // Initial guess
  let E = M + e * Math.sin(M) * (1 + e * Math.cos(M));

  // Newton-Raphson iteration
  const tolerance = 1e-10;
  let delta = 1;
  let iterations = 0;
  const maxIterations = 30;

  while (Math.abs(delta) > tolerance && iterations < maxIterations) {
    delta = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= delta;
    iterations++;
  }

  return E;
}

/**
 * Calculate heliocentric coordinates for a planet at a given Julian Date
 *
 * @param {string} planetName - Name of the planet
 * @param {number} jd - Julian Date
 * @returns {import('../types/index.d.ts').HeliocentricPosition} Heliocentric coordinates in AU
 */
export function calculatePlanetPosition(planetName, jd) {
  const elements = ORBITAL_ELEMENTS[planetName];
  if (!elements) {
    console.warn(`No orbital elements for ${planetName}`);
    return { x: 0, y: 0, z: 0, r: 0, theta: 0 };
  }

  // Centuries since J2000.0
  const T = (jd - J2000) / 36525.0;

  // Calculate current orbital elements
  const a = elements.a + elements.a_rate * T;
  const e = elements.e + elements.e_rate * T;
  const i = (elements.i + elements.i_rate * T) * DEG_TO_RAD;
  const L = normalizeAngle(elements.L + elements.L_rate * T);
  const wbar = normalizeAngle(elements.wbar + elements.wbar_rate * T);
  const omega = normalizeAngle(elements.omega + elements.omega_rate * T);

  // Argument of perihelion
  const w = (wbar - omega) * DEG_TO_RAD;
  const omegaRad = omega * DEG_TO_RAD;

  // Mean anomaly
  const M = normalizeAngle(L - wbar) * DEG_TO_RAD;

  // Solve Kepler's equation for eccentric anomaly
  const E = solveKepler(M, e);

  // True anomaly
  const sinNu = Math.sqrt(1 - e * e) * Math.sin(E) / (1 - e * Math.cos(E));
  const cosNu = (Math.cos(E) - e) / (1 - e * Math.cos(E));
  const nu = Math.atan2(sinNu, cosNu);

  // Distance from Sun
  const r = a * (1 - e * Math.cos(E));

  // Position in orbital plane
  const xOrbit = r * Math.cos(nu);
  const yOrbit = r * Math.sin(nu);

  // Rotate to ecliptic coordinates
  const cosW = Math.cos(w);
  const sinW = Math.sin(w);
  const cosO = Math.cos(omegaRad);
  const sinO = Math.sin(omegaRad);
  const cosI = Math.cos(i);
  const sinI = Math.sin(i);

  // Heliocentric ecliptic coordinates
  const x = (cosW * cosO - sinW * sinO * cosI) * xOrbit +
            (-sinW * cosO - cosW * sinO * cosI) * yOrbit;
  const y = (cosW * sinO + sinW * cosO * cosI) * xOrbit +
            (-sinW * sinO + cosW * cosO * cosI) * yOrbit;
  const z = (sinW * sinI) * xOrbit + (cosW * sinI) * yOrbit;

  // Orbital angle (for compatibility with existing code)
  const theta = Math.atan2(y, x);

  return { x, y, z, r, theta, trueAnomaly: nu, meanAnomaly: M };
}

/**
 * Calculate Moon's position relative to Earth at a given Julian Date
 *
 * @param {number} jd - Julian Date
 * @returns {import('../types/index.d.ts').MoonPosition} Position relative to Earth in AU, and phase angle
 */
export function calculateMoonPosition(jd) {
  // Centuries since J2000.0
  const T = (jd - J2000) / 36525.0;

  // Mean elements
  const L = normalizeAngle(MOON_ELEMENTS.L0 + MOON_ELEMENTS.L_rate * T) * DEG_TO_RAD;
  const w = normalizeAngle(MOON_ELEMENTS.w0 + MOON_ELEMENTS.w_rate * T) * DEG_TO_RAD;
  const omega = normalizeAngle(MOON_ELEMENTS.omega0 + MOON_ELEMENTS.omega_rate * T) * DEG_TO_RAD;
  const i = MOON_ELEMENTS.i * DEG_TO_RAD;
  const e = MOON_ELEMENTS.e;
  const a = MOON_ELEMENTS.a;

  // Mean anomaly
  const M = L - w;

  // Solve Kepler's equation
  const E = solveKepler(M, e);

  // True anomaly
  const sinNu = Math.sqrt(1 - e * e) * Math.sin(E) / (1 - e * Math.cos(E));
  const cosNu = (Math.cos(E) - e) / (1 - e * Math.cos(E));
  const nu = Math.atan2(sinNu, cosNu);

  // Distance from Earth
  const r = a * (1 - e * Math.cos(E));

  // Position in orbital plane
  const xOrbit = r * Math.cos(nu);
  const yOrbit = r * Math.sin(nu);

  // Argument of perigee relative to ascending node
  const wArg = w - omega;

  // Rotate to ecliptic coordinates (relative to Earth)
  const cosW = Math.cos(wArg);
  const sinW = Math.sin(wArg);
  const cosO = Math.cos(omega);
  const sinO = Math.sin(omega);
  const cosI = Math.cos(i);
  const sinI = Math.sin(i);

  const x = (cosW * cosO - sinW * sinO * cosI) * xOrbit +
            (-sinW * cosO - cosW * sinO * cosI) * yOrbit;
  const y = (cosW * sinO + sinW * cosO * cosI) * xOrbit +
            (-sinW * sinO + cosW * cosO * cosI) * yOrbit;
  const z = (sinW * sinI) * xOrbit + (cosW * sinI) * yOrbit;

  // Calculate moon phase (0 = new, 0.5 = full)
  // Simplified: based on elongation from Sun
  const earthPos = calculatePlanetPosition('Earth', jd);
  const moonHelioX = earthPos.x + x;
  const moonHelioY = earthPos.y + y;

  const sunMoonAngle = Math.atan2(moonHelioY, moonHelioX);
  const sunEarthAngle = Math.atan2(earthPos.y, earthPos.x);
  let elongation = sunMoonAngle - sunEarthAngle;

  // Normalize to 0-2PI
  while (elongation < 0) elongation += 2 * Math.PI;
  while (elongation > 2 * Math.PI) elongation -= 2 * Math.PI;

  // Phase: 0 = new moon, 0.5 = full moon, 1 = new moon again
  const phase = elongation / (2 * Math.PI);

  return { x, y, z, r, phase };
}

/**
 * Get orbital period in Earth years from semi-major axis (Kepler's 3rd law)
 * @param {number} semiMajorAxisAU - Semi-major axis in AU
 * @returns {number} Orbital period in Earth years
 */
export function getOrbitalPeriod(semiMajorAxisAU) {
  return Math.pow(semiMajorAxisAU, 1.5);
}

/**
 * Calculate positions for all planets at a given date
 * @param {Date} date - JavaScript Date object
 * @returns {Object.<string, import('../types/index.d.ts').HeliocentricPosition|import('../types/index.d.ts').MoonPosition>} Map of body names to positions
 */
export function calculateAllPositions(date) {
  const jd = dateToJulianDate(date);
  const positions = {};

  for (const planet of Object.keys(ORBITAL_ELEMENTS)) {
    positions[planet] = calculatePlanetPosition(planet, jd);
  }

  positions.Moon = calculateMoonPosition(jd);

  return positions;
}
