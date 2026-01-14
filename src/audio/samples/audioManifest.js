/**
 * NASA Audio Manifest
 *
 * Maps celestial bodies and events to their audio files.
 * The NASASounds module uses this to load appropriate sounds.
 */

// Base path for audio samples (served from public folder)
// Must include the Vite base path for proper URL resolution
export const AUDIO_BASE_PATH = '/solar-system-simulation/audio/samples/';

/**
 * Planetary sound mappings
 * Each planet can have multiple sound types
 */
export const PLANET_SOUNDS = {
  jupiter: {
    // NASA Voyager recordings of Jupiter's electromagnetic emissions
    files: ['jupiter-radio.ogg', 'jupiter-storms.ogg'],
    description: 'Jupiter magnetosphere radio emissions - 4000x stronger than Earth\'s magnetic field',
    source: 'NASA Voyager I & II / Internet Archive',
    loop: true,
    volume: 0.6
  },
  saturn: {
    // Saturn's magnetopause and ring interactions
    files: ['saturn-radio.ogg', 'saturn-rings.ogg', 'saturn-cyclone.ogg'],
    description: 'Saturn radio emissions and ring plasma - deep throbbing vibrations',
    source: 'NASA Voyager I & II / Internet Archive',
    loop: true,
    volume: 0.5
  },
  earth: {
    // Earth electromagnetic chorus and voice recordings
    files: ['earth-chorus.ogg', 'earth-voice.ogg', 'sounds-of-earth.mp3'],
    description: 'Earth magnetosphere chorus waves and solar wind interactions',
    source: 'Injun I, Hawkeye, IMP I, ISEE I space probes / Internet Archive',
    loop: true,
    volume: 0.5
  },
  mars: {
    files: ['mars-desert.ogg', 'mars-wind.mp3'],
    description: 'Mars atmospheric sounds',
    source: 'NASA Perseverance',
    loop: true,
    volume: 0.7
  },
  uranus: {
    // Uranus plasma and rings - energetic and relaxing with sweeping sounds
    files: ['uranus-plasma.ogg', 'uranus-rings.ogg'],
    description: 'Uranus plasma waves and ring system - energetic sweeping sounds',
    source: 'NASA Voyager II (January 1986) / Internet Archive',
    loop: true,
    volume: 0.4
  },
  neptune: {
    // Neptune - wind velocities over 700 MPH, tilted magnetic field
    files: ['neptune-plasma.ogg'],
    description: 'Neptune plasma and radio pulses - 47° tilted magnetic field',
    source: 'NASA Voyager II (August 1989) / Internet Archive',
    loop: true,
    volume: 0.4
  }
};

/**
 * Moon sound mappings
 */
export const MOON_SOUNDS = {
  io: {
    // Io - volcanic moon of Jupiter
    files: ['io-sphere.ogg'],
    description: 'Io electromagnetic sphere - one of only two volcanically active moons',
    source: 'NASA Voyager I & II (July 1979) / Internet Archive',
    loop: true,
    volume: 0.5
  },
  miranda: {
    // Miranda - innermost moon of Uranus with 9-mile high cliffs
    files: ['miranda.ogg'],
    description: 'Miranda plasma waves - smallest Uranian satellite with 9-mile cliffs',
    source: 'NASA Voyager II (January 1986) / Internet Archive',
    loop: true,
    volume: 0.5
  }
};

/**
 * Spacecraft sound mappings
 */
export const SPACECRAFT_SOUNDS = {
  voyager1: {
    files: ['voyager-greetings.mp3', 'sounds-of-earth.mp3'],
    description: 'Voyager Golden Record greetings',
    source: 'Voyager Golden Record / Internet Archive',
    loop: false,
    volume: 0.6
  },
  voyager2: {
    files: ['voyager-greetings.mp3', 'sounds-of-earth.mp3'],
    description: 'Voyager Golden Record greetings',
    source: 'Voyager Golden Record / Internet Archive',
    loop: false,
    volume: 0.6
  },
  iss: {
    files: ['iss-ambient.mp3'],
    description: 'ISS interior ambient sounds',
    source: 'International Space Station',
    loop: true,
    volume: 0.4
  }
};

/**
 * Ambient zone sounds
 */
export const AMBIENT_SOUNDS = {
  solar: {
    files: ['solar-wind.mp3'],
    description: 'Solar wind plasma flow',
    source: 'Parker Solar Probe',
    loop: true,
    volume: 0.3
  },
  interstellar: {
    files: ['interstellar.wav', 'interstellar.mp3'],
    description: 'Interstellar medium plasma oscillations',
    source: 'Voyager 1 at heliopause',
    loop: true,
    volume: 0.3
  }
};

/**
 * Event sounds (one-shots)
 */
export const EVENT_SOUNDS = {
  apollo_landing: {
    files: ['apollo11-landing.wav', 'apollo11-landing.mp3'],
    description: 'Apollo 11 - The Eagle has landed',
    source: 'Apollo 11 Mission',
    volume: 0.8
  }
};

/**
 * Helper to get the first available file from a list
 */
export function getFirstAvailableFile(config) {
  if (config.files && config.files.length > 0) {
    return config.files[0]; // Return first file, NASASounds will try others if this fails
  }
  return config.primary || null; // Fallback for legacy format
}

/**
 * Check if an audio file exists (for fallback logic)
 * This is called at runtime to determine if we use real or synthesized audio
 */
export async function checkAudioFileExists(filename) {
  try {
    const response = await fetch(AUDIO_BASE_PATH + filename, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get the full URL for an audio file
 */
export function getAudioUrl(filename) {
  return AUDIO_BASE_PATH + filename;
}
