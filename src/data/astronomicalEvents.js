/**
 * Notable astronomical events for timeline markers
 * Events span from 1940 to 2123 (within the +/- 100 year timeline range)
 */

export const ASTRONOMICAL_EVENTS = [
  { date: '1940-08-01', name: 'Jupiter-Saturn Triple Conjunction', type: 'conjunction' },
  { date: '1961-02-15', name: 'Great Conjunction (0.22° apart)', type: 'conjunction' },
  { date: '1962-02-05', name: 'Five Planet Alignment + Eclipse', type: 'alignment' },
  { date: '1965-10-21', name: 'Comet Ikeya-Seki (brightest of century)', type: 'comet' },
  { date: '1981-03-06', name: 'Jupiter-Saturn Triple Conjunction', type: 'conjunction' },
  { date: '1986-02-09', name: "Halley's Comet Perihelion", type: 'comet' },
  { date: '1996-03-25', name: 'Comet Hyakutake Close Pass', type: 'comet' },
  { date: '1997-04-01', name: 'Comet Hale-Bopp Perihelion', type: 'comet' },
  { date: '2003-08-27', name: 'Mars Closest in 60,000 Years', type: 'approach' },
  { date: '2004-06-08', name: 'Venus Transit', type: 'transit' },
  { date: '2012-06-06', name: 'Venus Transit (last until 2117)', type: 'transit' },
  { date: '2016-08-27', name: 'Venus-Jupiter Conjunction (4 arcmin)', type: 'conjunction' },
  { date: '2018-07-31', name: 'Mars Close Opposition', type: 'approach' },
  { date: '2020-12-21', name: 'Great Conjunction (6 arcmin) "Christmas Star"', type: 'conjunction' },
  { date: '2025-08-12', name: 'Venus-Jupiter Conjunction', type: 'conjunction' },
  { date: '2025-08-18', name: 'Six Planet Parade', type: 'alignment' },
  { date: '2029-04-13', name: 'Asteroid Apophis Close Flyby', type: 'approach' },
  { date: '2034-04-01', name: 'Five Planet Alignment', type: 'alignment' },
  { date: '2035-09-15', name: 'Mars Close Opposition', type: 'approach' },
  { date: '2040-09-08', name: 'Five Planets Within 7° (rarest in 800 years)', type: 'alignment' },
  { date: '2060-04-08', name: 'Great Conjunction', type: 'conjunction' },
  { date: '2061-07-28', name: "Halley's Comet Returns", type: 'comet' },
  { date: '2065-11-22', name: 'Venus Occults Jupiter', type: 'occultation' },
  { date: '2080-03-15', name: 'Great Conjunction (6 arcmin)', type: 'conjunction' },
  { date: '2119-07-15', name: 'Great Conjunction', type: 'conjunction' },
  { date: '2123-09-14', name: 'Venus Occults Jupiter', type: 'occultation' }
];

/**
 * Color mapping for event types
 */
export const EVENT_COLORS = {
  conjunction: '#ffdd44',   // Yellow
  alignment: '#4488ff',     // Blue
  approach: '#ff8844',      // Orange
  comet: '#44ddff',         // Cyan
  transit: '#aa66ff',       // Purple
  occultation: '#aa66ff'    // Purple
};
