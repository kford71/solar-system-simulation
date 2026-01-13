/**
 * Notable astronomical events for timeline markers
 * Events span from 1940 to 2123 (within the +/- 100 year timeline range)
 *
 * Each event includes:
 * - date: ISO date string
 * - name: Human-readable event name
 * - type: Event category for coloring
 * - planets: Array of planets involved (for visual effects)
 */

export const ASTRONOMICAL_EVENTS = [
  {
    date: '1940-08-01',
    name: 'Jupiter-Saturn Triple Conjunction',
    type: 'conjunction',
    planets: ['Jupiter', 'Saturn']
  },
  {
    date: '1952-02-25',
    name: 'Total Solar Eclipse (3m 9s)',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '1955-06-20',
    name: 'Longest Eclipse Until 2150 (7m 8s)',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '1961-02-15',
    name: 'Great Conjunction (0.22° apart)',
    type: 'conjunction',
    planets: ['Jupiter', 'Saturn']
  },
  {
    date: '1962-02-05',
    name: 'Five Planet Alignment + Eclipse',
    type: 'alignment',
    planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn']
  },
  {
    date: '1965-10-21',
    name: 'Comet Ikeya-Seki (brightest of century)',
    type: 'comet',
    planets: []
  },
  {
    date: '1970-03-07',
    name: 'Total Solar Eclipse - First Color TV',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '1973-06-30',
    name: 'Total Solar Eclipse (7m 4s) - Concorde',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '1979-02-26',
    name: 'Last US Eclipse Until 2017',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '1981-03-06',
    name: 'Jupiter-Saturn Triple Conjunction',
    type: 'conjunction',
    planets: ['Jupiter', 'Saturn']
  },
  {
    date: '1986-02-09',
    name: "Halley's Comet Perihelion",
    type: 'comet',
    planets: []
  },
  {
    date: '1991-07-11',
    name: 'Eclipse of the Century (6m 53s)',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '1996-03-25',
    name: 'Comet Hyakutake Close Pass',
    type: 'comet',
    planets: []
  },
  {
    date: '1997-04-01',
    name: 'Comet Hale-Bopp Perihelion',
    type: 'comet',
    planets: []
  },
  {
    date: '1999-08-11',
    name: 'Most-Viewed Eclipse - Europe',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2003-08-27',
    name: 'Mars Closest in 60,000 Years',
    type: 'approach',
    planets: ['Mars']
  },
  {
    date: '2004-06-08',
    name: 'Venus Transit',
    type: 'transit',
    planets: ['Venus']
  },
  {
    date: '2009-07-22',
    name: 'Longest Eclipse of 21st Century (6m 39s)',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2012-06-06',
    name: 'Venus Transit (last until 2117)',
    type: 'transit',
    planets: ['Venus']
  },
  {
    date: '2016-08-27',
    name: 'Venus-Jupiter Conjunction (4 arcmin)',
    type: 'conjunction',
    planets: ['Venus', 'Jupiter']
  },
  {
    date: '2017-08-21',
    name: 'Great American Eclipse',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2018-07-31',
    name: 'Mars Close Opposition',
    type: 'approach',
    planets: ['Mars']
  },
  {
    date: '2020-12-21',
    name: 'Great Conjunction (6 arcmin) "Christmas Star"',
    type: 'conjunction',
    planets: ['Jupiter', 'Saturn']
  },
  {
    date: '2024-04-08',
    name: 'Great North American Eclipse (4m 28s)',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2025-08-12',
    name: 'Venus-Jupiter Conjunction',
    type: 'conjunction',
    planets: ['Venus', 'Jupiter']
  },
  {
    date: '2025-08-18',
    name: 'Six Planet Parade',
    type: 'alignment',
    planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus']
  },
  {
    date: '2026-08-12',
    name: 'Total Solar Eclipse - Spain',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2027-08-02',
    name: 'Eclipse of Century - Egypt (6m 23s)',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2028-07-22',
    name: 'Total Solar Eclipse - Sydney',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2029-04-13',
    name: 'Asteroid Apophis Close Flyby',
    type: 'approach',
    planets: []
  },
  {
    date: '2034-04-01',
    name: 'Five Planet Alignment',
    type: 'alignment',
    planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn']
  },
  {
    date: '2035-09-02',
    name: 'Total Solar Eclipse - Beijing',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2035-09-15',
    name: 'Mars Close Opposition',
    type: 'approach',
    planets: ['Mars']
  },
  {
    date: '2040-09-08',
    name: 'Five Planets Within 7° (rarest in 800 years)',
    type: 'alignment',
    planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn']
  },
  {
    date: '2045-08-12',
    name: 'Great American Eclipse (6m 6s)',
    type: 'eclipse',
    planets: ['Earth']
  },
  {
    date: '2060-04-08',
    name: 'Great Conjunction',
    type: 'conjunction',
    planets: ['Jupiter', 'Saturn']
  },
  {
    date: '2061-07-28',
    name: "Halley's Comet Returns",
    type: 'comet',
    planets: []
  },
  {
    date: '2065-11-22',
    name: 'Venus Occults Jupiter',
    type: 'occultation',
    planets: ['Venus', 'Jupiter']
  },
  {
    date: '2080-03-15',
    name: 'Great Conjunction (6 arcmin)',
    type: 'conjunction',
    planets: ['Jupiter', 'Saturn']
  },
  {
    date: '2119-07-15',
    name: 'Great Conjunction',
    type: 'conjunction',
    planets: ['Jupiter', 'Saturn']
  },
  {
    date: '2123-09-14',
    name: 'Venus Occults Jupiter',
    type: 'occultation',
    planets: ['Venus', 'Jupiter']
  }
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
  occultation: '#aa66ff',   // Purple
  eclipse: '#ff6633'        // Orange-red
};
