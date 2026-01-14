/**
 * Comet Data
 *
 * Contains orbital elements and data for notable comets.
 * Currently includes Halley's Comet with JPL-accurate orbital elements.
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

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
