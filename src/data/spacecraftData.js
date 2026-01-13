/**
 * Spacecraft Data
 *
 * Historic deep space mission trajectories (1972-2026)
 * Data based on NASA JPL ephemeris and mission documentation
 *
 * Waypoints define trajectory through the solar system:
 * - date: ISO date string
 * - distance: Heliocentric distance in AU
 * - lat: Ecliptic latitude in degrees
 * - event: Description of mission phase
 */

export const SPACECRAFT_DATA = [
  {
    name: 'Voyager 1',
    active: true,
    color: 0x00ff88,
    // Departure direction: ~260° (toward Ophiuchus)
    departureAngle: 260,
    waypoints: [
      { date: '1977-09-05', distance: 1.0, lat: 0, event: 'Launch' },
      { date: '1979-03-05', distance: 5.2, lat: 0, event: 'Jupiter Flyby' },
      { date: '1980-11-12', distance: 9.5, lat: 5, event: 'Saturn Flyby' },
      { date: '1985-01-01', distance: 25, lat: 20, event: 'Cruise' },
      { date: '1990-01-01', distance: 40, lat: 26, event: 'Cruise' },
      { date: '1995-01-01', distance: 58, lat: 30, event: 'Cruise' },
      { date: '2000-01-01', distance: 76, lat: 32, event: 'Cruise' },
      { date: '2005-01-01', distance: 94, lat: 34, event: 'Cruise' },
      { date: '2012-08-25', distance: 121, lat: 35, event: 'Heliopause' },
      { date: '2020-01-01', distance: 148, lat: 35, event: 'Interstellar' },
      { date: '2026-01-01', distance: 169.4, lat: 35, event: 'Current' }
    ],
    velocity: 16.92,  // km/s
    facts: {
      type: 'Interplanetary Probe',
      launch: 'September 5, 1977',
      status: 'Active - Interstellar space',
      distance: '169.4 AU (25.3 billion km)',
      velocity: '16.92 km/s (3.57 AU/year)',
      milestone: 'Reaches 1 light-day in November 2026',
      direction: 'Constellation Ophiuchus, 35° above ecliptic',
      note: 'Most distant human-made object'
    }
  },
  {
    name: 'Voyager 2',
    active: true,
    color: 0x00aaff,
    // Departure direction: ~300° (toward Pavo)
    departureAngle: 300,
    waypoints: [
      { date: '1977-08-20', distance: 1.0, lat: 0, event: 'Launch' },
      { date: '1979-07-09', distance: 5.2, lat: 0, event: 'Jupiter Flyby' },
      { date: '1981-08-26', distance: 9.5, lat: 0, event: 'Saturn Flyby' },
      { date: '1986-01-24', distance: 19.2, lat: -5, event: 'Uranus Flyby' },
      { date: '1989-08-25', distance: 30.1, lat: -10, event: 'Neptune Flyby' },
      { date: '1995-01-01', distance: 52, lat: -25, event: 'Cruise' },
      { date: '2000-01-01', distance: 63, lat: -30, event: 'Cruise' },
      { date: '2005-01-01', distance: 80, lat: -34, event: 'Cruise' },
      { date: '2010-01-01', distance: 97, lat: -36, event: 'Cruise' },
      { date: '2018-11-05', distance: 119.7, lat: -38, event: 'Heliopause' },
      { date: '2023-07-18', distance: 137, lat: -38, event: 'Overtakes Pioneer 10' },
      { date: '2026-01-01', distance: 141.8, lat: -38, event: 'Current' }
    ],
    velocity: 15.26,
    facts: {
      type: 'Interplanetary Probe',
      launch: 'August 20, 1977',
      status: 'Active - Interstellar space',
      distance: '141.8 AU (21.2 billion km)',
      velocity: '15.26 km/s (3.22 AU/year)',
      unique: 'Only spacecraft to visit all 4 gas giants',
      direction: 'Constellation Pavo, 38° below ecliptic',
      heliopause: 'Crossed November 5, 2018'
    }
  },
  {
    name: 'Pioneer 10',
    active: false,
    color: 0xffaa00,
    // Departure direction: ~75° (toward Taurus)
    departureAngle: 75,
    waypoints: [
      { date: '1972-03-02', distance: 1.0, lat: 0, event: 'Launch' },
      { date: '1973-12-03', distance: 5.2, lat: 0, event: 'Jupiter Flyby' },
      { date: '1980-01-01', distance: 22, lat: 2, event: 'Cruise' },
      { date: '1990-01-01', distance: 50, lat: 3, event: 'Cruise' },
      { date: '2000-01-01', distance: 73, lat: 3, event: 'Cruise' },
      { date: '2003-01-23', distance: 80, lat: 3, event: 'Last Signal' },
      { date: '2010-01-01', distance: 102, lat: 3, event: 'Drifting' },
      { date: '2020-01-01', distance: 126, lat: 3, event: 'Drifting' },
      { date: '2026-01-01', distance: 140.2, lat: 3, event: 'Current' }
    ],
    velocity: 11.87,
    facts: {
      type: 'Interplanetary Probe',
      launch: 'March 2, 1972',
      status: 'Inactive since January 2003',
      distance: '140.2 AU (21.0 billion km)',
      velocity: '11.87 km/s (2.50 AU/year)',
      historic: 'First spacecraft to cross asteroid belt',
      firstJupiter: 'First Jupiter flyby (December 3, 1973)',
      direction: 'Constellation Taurus, near ecliptic plane',
      note: 'Carries gold plaque for extraterrestrial contact'
    }
  },
  {
    name: 'Pioneer 11',
    active: false,
    color: 0xff8800,
    // Departure direction: ~280° (toward Scutum)
    departureAngle: 280,
    waypoints: [
      { date: '1973-04-06', distance: 1.0, lat: 0, event: 'Launch' },
      { date: '1974-12-02', distance: 5.2, lat: 0, event: 'Jupiter Flyby' },
      { date: '1979-09-01', distance: 9.5, lat: 5, event: 'Saturn Flyby' },
      { date: '1985-01-01', distance: 25, lat: 10, event: 'Cruise' },
      { date: '1990-01-01', distance: 35, lat: 12, event: 'Cruise' },
      { date: '1995-11-01', distance: 44, lat: 14, event: 'Last Signal' },
      { date: '2000-01-01', distance: 56, lat: 14, event: 'Drifting' },
      { date: '2010-01-01', distance: 79, lat: 14, event: 'Drifting' },
      { date: '2020-01-01', distance: 103, lat: 14, event: 'Drifting' },
      { date: '2026-01-01', distance: 117.7, lat: 14, event: 'Current' }
    ],
    velocity: 11.13,
    facts: {
      type: 'Interplanetary Probe',
      launch: 'April 6, 1973',
      status: 'Inactive since November 1995',
      distance: '117.7 AU (17.6 billion km)',
      velocity: '11.13 km/s (2.35 AU/year)',
      historic: 'First spacecraft to visit Saturn',
      jupiterFlyby: 'Closest Jupiter approach (43,000 km)',
      direction: 'Constellation Scutum, 14° above ecliptic',
      note: 'Discovered Saturn\'s F Ring'
    }
  },
  {
    name: 'New Horizons',
    active: true,
    color: 0xff00ff,
    // Departure direction: ~290° (toward Sagittarius)
    departureAngle: 290,
    waypoints: [
      { date: '2006-01-19', distance: 1.0, lat: 0, event: 'Launch' },
      { date: '2007-02-28', distance: 5.2, lat: 0, event: 'Jupiter Flyby' },
      { date: '2010-01-01', distance: 16, lat: 1, event: 'Cruise' },
      { date: '2015-07-14', distance: 33, lat: 2, event: 'Pluto Flyby' },
      { date: '2019-01-01', distance: 43.4, lat: 2, event: 'Arrokoth Flyby' },
      { date: '2022-01-01', distance: 52, lat: 2, event: 'Kuiper Belt' },
      { date: '2026-01-01', distance: 63.6, lat: 2, event: 'Current' }
    ],
    velocity: 13.60,
    facts: {
      type: 'Interplanetary Probe',
      launch: 'January 19, 2006',
      status: 'Active - Kuiper Belt Extended Mission',
      distance: '63.6 AU (9.5 billion km)',
      velocity: '13.60 km/s (2.87 AU/year)',
      speed: 'Fastest launch velocity ever (16.26 km/s)',
      pluto: 'First Pluto flyby (July 14, 2015)',
      arrokoth: 'Most distant flyby ever (January 1, 2019)',
      direction: 'Constellation Sagittarius, near ecliptic'
    }
  },
  {
    name: 'Cassini',
    active: false,
    terminated: true,  // Crashed into Saturn
    terminationDate: '2017-09-15',
    color: 0xffff00,
    // Cassini orbited Saturn, use Saturn's approximate position
    departureAngle: null,  // Special case - follows Saturn
    waypoints: [
      { date: '1997-10-15', distance: 1.0, lat: 0, event: 'Launch' },
      { date: '1998-04-26', distance: 0.72, lat: 0, event: 'Venus Flyby 1' },
      { date: '1999-06-24', distance: 0.72, lat: 0, event: 'Venus Flyby 2' },
      { date: '1999-08-18', distance: 1.0, lat: 0, event: 'Earth Flyby' },
      { date: '2000-12-30', distance: 5.2, lat: 0, event: 'Jupiter Flyby' },
      { date: '2004-07-01', distance: 9.5, lat: 0, event: 'Saturn Orbit Insertion' },
      { date: '2008-01-01', distance: 9.5, lat: 0, event: 'Primary Mission' },
      { date: '2012-01-01', distance: 9.5, lat: 0, event: 'Solstice Mission' },
      { date: '2017-09-15', distance: 9.5, lat: 0, event: 'Grand Finale - End of Mission' }
    ],
    velocity: 0,  // No longer moving
    facts: {
      type: 'Saturn Orbiter',
      launch: 'October 15, 1997',
      status: 'Mission ended September 15, 2017',
      trajectory: 'VVEJGA (Venus-Venus-Earth-Jupiter)',
      saturnArrival: 'July 1, 2004',
      mission: '13 years orbiting Saturn (294 orbits)',
      end: 'Plunged into Saturn atmosphere (Grand Finale)',
      discoveries: 'Enceladus geysers, Titan methane lakes',
      note: 'Deliberately destroyed to protect moons'
    }
  }
];
