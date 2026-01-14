/**
 * NASASounds - Authentic NASA space audio for the solar system simulation
 *
 * Audio sources from NASA's public domain collection:
 * - NASA SoundCloud: https://soundcloud.com/nasa
 * - Radio JOVE Project: https://radiojove.gsfc.nasa.gov
 * - NASA Historical Sounds: https://www.nasa.gov/historical-sounds/
 * - Internet Archive NASA Collection: https://archive.org/details/NasaAudioHighlightReels
 *
 * All NASA audio is public domain and free to use.
 * Credit: National Aeronautics and Space Administration (NASA)
 *
 * This module supports both:
 * 1. Real NASA audio files (if downloaded to /src/audio/samples/)
 * 2. Synthesized fallback sounds (if files are not present)
 */

import * as Tone from 'tone';
import { PLANET_SOUNDS, SPACECRAFT_SOUNDS, AMBIENT_SOUNDS, MOON_SOUNDS, AUDIO_BASE_PATH, getAudioUrl } from './samples/audioManifest.js';
import { audioCache, CachedAudioLoader } from './AudioCache.js';

/**
 * NASA Sound catalog with URLs to public domain audio
 * Using Internet Archive and NASA direct links for reliability
 */
export const NASA_SOUND_CATALOG = {
  // Spacecraft and mission sounds
  spacecraft: {
    voyagerPlasmaSounds: {
      name: 'Voyager Plasma Wave Sounds',
      description: 'Plasma wave sounds from Voyager spacecraft',
      // Converted from Voyager's plasma wave instrument data
      url: 'https://www.nasa.gov/wp-content/uploads/2023/10/sdo-video_full-quality-flare_with-sound.mp3',
      duration: 30,
      category: 'ambient'
    },
    apolloLaunch: {
      name: 'Apollo Launch',
      description: 'Saturn V rocket launch',
      url: 'https://archive.org/download/NasaAudioHighlightReels/Apollo%2011%20Highlights.mp3',
      duration: 180,
      category: 'event'
    }
  },

  // Planetary sounds (electromagnetic emissions converted to audio)
  planets: {
    jupiter: {
      name: 'Jupiter Radio Emissions',
      description: 'Jupiter\'s magnetosphere radio emissions',
      // Jupiter's radio storms
      frequency: 'low',
      character: 'rumbling, stormy'
    },
    saturn: {
      name: 'Saturn Radio Emissions',
      description: 'Saturn\'s radio emissions from Cassini',
      frequency: 'mid',
      character: 'eerie, whistling'
    },
    earth: {
      name: 'Earth\'s Chorus',
      description: 'Electromagnetic chorus waves in Earth\'s magnetosphere',
      frequency: 'high',
      character: 'chirping, rising tones'
    },
    sun: {
      name: 'Solar Wind',
      description: 'Solar wind plasma oscillations',
      frequency: 'variable',
      character: 'whooshing, crackling'
    }
  },

  // Mission voice clips
  missions: {
    eagleLanded: {
      name: 'The Eagle Has Landed',
      description: 'Apollo 11 moon landing announcement',
      transcript: 'Houston, Tranquility Base here. The Eagle has landed.'
    },
    oneSmallStep: {
      name: 'One Small Step',
      description: 'Neil Armstrong\'s first words on the Moon',
      transcript: 'That\'s one small step for man, one giant leap for mankind.'
    },
    houstonProblem: {
      name: 'Houston We\'ve Had a Problem',
      description: 'Apollo 13 emergency call',
      transcript: 'Houston, we\'ve had a problem.'
    }
  }
};

/**
 * NASASounds class - Generates NASA-inspired space sounds using synthesis
 * Since direct URL loading can be blocked by CORS, we synthesize authentic-sounding
 * versions of the famous NASA recordings
 */
export class NASASounds {
  constructor(destination) {
    this.destination = destination;
    this.initialized = false;
    this.players = new Map();          // Real audio file players
    this.synths = new Map();           // Synthesized fallback sounds
    this.activeLoops = new Map();
    this.volume = 0.5;
    this.audioFilesAvailable = {};     // Track which real files are loaded

    // Synthesized ambient sounds
    this.ambientSynths = {};

    // Real audio ambient players
    this.ambientPlayers = {};

    // Cached audio loader for large files
    this.cachedLoader = new CachedAudioLoader();

    // Track loading state for lazy loading
    this.loadingState = new Map();  // url -> Promise
  }

  /**
   * Initialize the NASA sounds system
   */
  init() {
    if (this.initialized) return;

    // Try to load real audio files first
    this.loadRealAudioFiles();

    // Setup synthesized fallbacks (always available)
    this.setupPlanetarySounds();
    this.setupSpacecraftSounds();
    this.setupAmbientDrones();

    this.initialized = true;
    console.log('NASASounds initialized');
  }

  /**
   * Attempt to load real NASA audio files
   * Falls back to synthesis if files are not available
   */
  loadRealAudioFiles() {
    // Load planetary sounds - try each file in the files array
    Object.entries(PLANET_SOUNDS).forEach(([planet, config]) => {
      const files = config.files || [config.primary];
      this.tryLoadAudioFiles(planet, files, config.loop, config.volume);
    });

    // Load ambient sounds
    Object.entries(AMBIENT_SOUNDS).forEach(([zone, config]) => {
      const files = config.files || [config.primary];
      this.tryLoadAmbientFiles(zone, files, config.volume);
    });

    // Load spacecraft sounds
    Object.entries(SPACECRAFT_SOUNDS).forEach(([craft, config]) => {
      const files = config.files || [config.primary];
      this.tryLoadAudioFiles(craft, files, config.loop, config.volume);
    });

    // Load moon sounds
    if (MOON_SOUNDS) {
      Object.entries(MOON_SOUNDS).forEach(([moon, config]) => {
        const files = config.files || [config.primary];
        this.tryLoadAudioFiles(moon, files, config.loop, config.volume);
      });
    }
  }

  /**
   * Try to load audio files from a list, stopping at first success
   */
  tryLoadAudioFiles(id, files, loop = true, volume = 0.5, fileIndex = 0) {
    if (fileIndex >= files.length) {
      console.log(`No audio files found for ${id}, using synthesized sound`);
      this.audioFilesAvailable[id] = false;
      return;
    }

    const filename = files[fileIndex];
    const url = getAudioUrl(filename);

    try {
      const player = new Tone.Player({
        url: url,
        loop: loop,
        autostart: false,
        volume: Tone.gainToDb(volume * this.volume),
        onload: () => {
          console.log(`Loaded real NASA audio: ${filename} for ${id}`);
          this.audioFilesAvailable[id] = true;
          this.players.set(id, player);
        },
        onerror: () => {
          console.log(`File ${filename} not found for ${id}, trying next...`);
          player.dispose();
          // Try next file in list
          this.tryLoadAudioFiles(id, files, loop, volume, fileIndex + 1);
        }
      }).connect(this.destination);

      // Store temporarily, will be replaced if this one fails
      if (fileIndex === 0) {
        this.players.set(id, player);
      }
    } catch (error) {
      console.log(`Failed to create player for ${id} with ${filename}: ${error.message}`);
      this.tryLoadAudioFiles(id, files, loop, volume, fileIndex + 1);
    }
  }

  /**
   * Try to load ambient audio files from a list
   */
  tryLoadAmbientFiles(zone, files, volume = 0.3, fileIndex = 0) {
    if (fileIndex >= files.length) {
      console.log(`No ambient files found for ${zone}, using synthesized sound`);
      this.ambientPlayers[zone] = { player: null, loaded: false, playing: false };
      return;
    }

    const filename = files[fileIndex];
    const url = getAudioUrl(filename);

    try {
      const player = new Tone.Player({
        url: url,
        loop: true,
        autostart: false,
        volume: Tone.gainToDb(volume * this.volume),
        onload: () => {
          console.log(`Loaded real NASA ambient: ${filename} for ${zone}`);
          this.ambientPlayers[zone] = { player, loaded: true, playing: false };
        },
        onerror: () => {
          console.log(`Ambient file ${filename} not found for ${zone}, trying next...`);
          player.dispose();
          this.tryLoadAmbientFiles(zone, files, volume, fileIndex + 1);
        }
      }).connect(this.destination);

      // Store temporarily
      if (fileIndex === 0) {
        this.ambientPlayers[zone] = { player, loaded: false, playing: false };
      }
    } catch (error) {
      console.log(`Failed to create ambient player for ${zone}: ${error.message}`);
      this.tryLoadAmbientFiles(zone, files, volume, fileIndex + 1);
    }
  }

  /**
   * Check if real audio is available for a given id
   */
  hasRealAudio(id) {
    return this.audioFilesAvailable[id] === true;
  }

  /**
   * Setup synthesized planetary sounds based on real NASA data characteristics
   */
  setupPlanetarySounds() {
    // Jupiter's radio storms - deep rumbling with sporadic bursts
    const jupiterSynth = new Tone.NoiseSynth({
      noise: { type: 'brown' },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 0.8,
        release: 3
      }
    });

    const jupiterFilter = new Tone.Filter({
      frequency: 150,
      type: 'lowpass',
      rolloff: -24
    });

    const jupiterChorus = new Tone.Chorus({
      frequency: 0.5,
      delayTime: 20,
      depth: 0.8
    });

    jupiterSynth.connect(jupiterFilter);
    jupiterFilter.connect(jupiterChorus);
    jupiterChorus.connect(this.destination);
    jupiterSynth.volume.value = -20;

    this.synths.set('jupiter', {
      synth: jupiterSynth,
      filter: jupiterFilter,
      chorus: jupiterChorus
    });

    // Saturn's eerie whistles - based on Cassini recordings
    const saturnSynth = new Tone.FMSynth({
      harmonicity: 3.01,
      modulationIndex: 10,
      oscillator: { type: 'sine' },
      modulation: { type: 'sine' },
      envelope: {
        attack: 4,
        decay: 2,
        sustain: 0.5,
        release: 5
      },
      modulationEnvelope: {
        attack: 3,
        decay: 3,
        sustain: 0.4,
        release: 4
      }
    });

    const saturnReverb = new Tone.Reverb({
      decay: 8,
      wet: 0.7
    });

    saturnSynth.connect(saturnReverb);
    saturnReverb.connect(this.destination);
    saturnSynth.volume.value = -25;

    this.synths.set('saturn', {
      synth: saturnSynth,
      reverb: saturnReverb
    });

    // Earth's chorus - chirping electromagnetic waves
    const earthSynth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.01,
        decay: 0.3,
        sustain: 0.1,
        release: 0.5
      }
    });

    const earthDelay = new Tone.FeedbackDelay({
      delayTime: '8n',
      feedback: 0.4
    });

    const earthFilter = new Tone.Filter({
      frequency: 2000,
      type: 'bandpass',
      Q: 5
    });

    earthSynth.connect(earthFilter);
    earthFilter.connect(earthDelay);
    earthDelay.connect(this.destination);
    earthSynth.volume.value = -18;

    this.synths.set('earth', {
      synth: earthSynth,
      filter: earthFilter,
      delay: earthDelay
    });

    // Mars wind sounds - from Perseverance recordings
    const marsSynth = new Tone.NoiseSynth({
      noise: { type: 'pink' },
      envelope: {
        attack: 3,
        decay: 2,
        sustain: 0.6,
        release: 4
      }
    });

    const marsFilter = new Tone.Filter({
      frequency: 400,
      type: 'bandpass',
      Q: 2
    });

    const marsLFO = new Tone.LFO({
      frequency: 0.1,
      min: 200,
      max: 600
    }).start();

    marsLFO.connect(marsFilter.frequency);
    marsSynth.connect(marsFilter);
    marsFilter.connect(this.destination);
    marsSynth.volume.value = -22;

    this.synths.set('mars', {
      synth: marsSynth,
      filter: marsFilter,
      lfo: marsLFO
    });
  }

  /**
   * Setup spacecraft sounds - beeps, telemetry, etc.
   */
  setupSpacecraftSounds() {
    // Voyager golden record tones
    const voyagerSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'triangle' },
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.3,
        release: 0.5
      }
    });

    const voyagerReverb = new Tone.Reverb({
      decay: 4,
      wet: 0.5
    });

    voyagerSynth.connect(voyagerReverb);
    voyagerReverb.connect(this.destination);
    voyagerSynth.volume.value = -15;

    this.synths.set('voyager', {
      synth: voyagerSynth,
      reverb: voyagerReverb
    });

    // ISS ambient - humming electronics
    const issSynth = new Tone.Synth({
      oscillator: { type: 'sawtooth' },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 1,
        release: 2
      }
    });

    const issFilter = new Tone.Filter({
      frequency: 100,
      type: 'lowpass',
      rolloff: -48
    });

    issSynth.connect(issFilter);
    issFilter.connect(this.destination);
    issSynth.volume.value = -30;

    this.synths.set('iss', {
      synth: issSynth,
      filter: issFilter
    });
  }

  /**
   * Setup deep space ambient drones
   */
  setupAmbientDrones() {
    // Interstellar plasma - based on Voyager 1 interstellar space sounds
    const interstellarNoise = new Tone.Noise('pink');

    const interstellarFilter = new Tone.AutoFilter({
      frequency: 0.05,
      baseFrequency: 100,
      octaves: 3
    }).start();

    const interstellarReverb = new Tone.Reverb({
      decay: 15,
      wet: 0.8
    });

    interstellarNoise.connect(interstellarFilter);
    interstellarFilter.connect(interstellarReverb);
    interstellarReverb.connect(this.destination);
    interstellarNoise.volume.value = -35;

    this.ambientSynths.interstellar = {
      noise: interstellarNoise,
      filter: interstellarFilter,
      reverb: interstellarReverb,
      playing: false
    };

    // Solar wind - whooshing, crackling
    const solarNoise = new Tone.Noise('white');

    const solarFilter = new Tone.Filter({
      frequency: 800,
      type: 'bandpass',
      Q: 4
    });

    const solarLFO = new Tone.LFO({
      frequency: 0.2,
      min: 400,
      max: 1200
    }).start();

    solarLFO.connect(solarFilter.frequency);

    const solarTremolo = new Tone.Tremolo({
      frequency: 3,
      depth: 0.6
    }).start();

    solarNoise.connect(solarFilter);
    solarFilter.connect(solarTremolo);
    solarTremolo.connect(this.destination);
    solarNoise.volume.value = -30;

    this.ambientSynths.solar = {
      noise: solarNoise,
      filter: solarFilter,
      lfo: solarLFO,
      tremolo: solarTremolo,
      playing: false
    };
  }

  /**
   * Play planetary sound for a specific planet
   * Uses real NASA audio if available, falls back to synthesis
   * @param {string} planet - Planet name (jupiter, saturn, earth, mars, uranus, neptune)
   */
  playPlanetSound(planet, retryCount = 0) {
    const planetLower = planet.toLowerCase();
    const maxRetries = 10; // Max 5 seconds (10 * 500ms)

    // Stop any existing synthesized sound for this planet first
    this.stopSynthesizedPlanetSound(planetLower);

    // Try to play real audio first
    if (this.hasRealAudio(planetLower)) {
      const player = this.players.get(planetLower);
      if (player && player.loaded) {
        // Make sure player is stopped before starting
        if (player.state === 'started') {
          player.stop();
        }
        player.start();
        console.log(`Playing real NASA audio for ${planet}`);
        return;
      }
    }

    // Audio files are large (~20MB) and may still be loading
    // Retry a few times before falling back to synthesized sound
    if (retryCount < maxRetries) {
      // Check if audio might still be loading (audioFilesAvailable not yet set to false)
      const stillLoading = this.audioFilesAvailable[planetLower] === undefined;
      if (stillLoading) {
        console.log(`Audio for ${planet} still loading, will retry in 500ms...`);
        setTimeout(() => {
          this.playPlanetSound(planet, retryCount + 1);
        }, 500);
        return;
      }
    }

    // Fall back to synthesized sound only if no real audio available
    if (!this.hasRealAudio(planetLower)) {
      console.log(`Using synthesized sound for ${planet}`);
      this.playSynthesizedPlanetSound(planetLower);
    }
  }

  /**
   * Stop synthesized planetary sound
   */
  stopSynthesizedPlanetSound(planet) {
    const synthData = this.synths.get(planet);
    if (synthData && synthData.synth) {
      try {
        synthData.synth.triggerRelease();
      } catch (e) {
        // Synth may not be playing
      }
    }
  }

  /**
   * Play synthesized planetary sound (fallback)
   */
  playSynthesizedPlanetSound(planet) {
    const synthData = this.synths.get(planet);
    if (!synthData) return;

    const { synth } = synthData;

    switch(planet) {
      case 'jupiter':
        // Jupiter's rumbling radio storms
        synth.triggerAttack();
        break;

      case 'saturn':
        // Saturn's eerie descending whistles
        synth.triggerAttackRelease('C2', '8s');
        setTimeout(() => synth.triggerAttackRelease('G1', '6s'), 2000);
        setTimeout(() => synth.triggerAttackRelease('E1', '10s'), 5000);
        break;

      case 'earth':
        // Earth chorus chirps
        this.playEarthChorus();
        break;

      case 'mars':
        // Mars wind
        synth.triggerAttack();
        break;

      case 'uranus':
      case 'neptune':
        // Outer planet plasma waves - use similar to Saturn but lower
        if (synth && synth.triggerAttackRelease) {
          synth.triggerAttackRelease('G1', '10s');
        }
        break;
    }
  }

  /**
   * Stop planetary sound
   * @param {string} planet - Planet name
   */
  stopPlanetSound(planet) {
    const planetLower = planet.toLowerCase();

    // Stop real audio player if playing
    const player = this.players.get(planetLower);
    if (player && player.state === 'started') {
      player.stop();
    }

    // Stop synthesized sound
    const synthData = this.synths.get(planetLower);
    if (synthData) {
      const { synth } = synthData;
      if (synth && synth.triggerRelease) {
        synth.triggerRelease();
      }
    }

    // Stop any active loops
    const loop = this.activeLoops.get(planetLower);
    if (loop) {
      loop.stop();
      this.activeLoops.delete(planetLower);
    }
  }

  /**
   * Play Earth's electromagnetic chorus (chirping sounds)
   */
  playEarthChorus() {
    const synthData = this.synths.get('earth');
    if (!synthData) return;

    const { synth } = synthData;

    // Create chirping pattern similar to NASA's chorus recordings
    const loop = new Tone.Loop((time) => {
      const baseFreq = 1000 + Math.random() * 2000;
      const endFreq = baseFreq + 500 + Math.random() * 1000;

      synth.frequency.setValueAtTime(baseFreq, time);
      synth.frequency.exponentialRampToValueAtTime(endFreq, time + 0.15);
      synth.triggerAttackRelease(baseFreq, '16n', time);
    }, '8n');

    loop.start();
    this.activeLoops.set('earth', loop);

    // Auto-stop after 10 seconds
    setTimeout(() => {
      loop.stop();
      this.activeLoops.delete('earth');
    }, 10000);
  }

  /**
   * Play Voyager golden record-inspired tones
   */
  playVoyagerTones() {
    const synthData = this.synths.get('voyager');
    if (!synthData) return;

    const { synth } = synthData;

    // Golden record greeting-inspired sequence
    const notes = ['C4', 'E4', 'G4', 'C5', 'G4', 'E4', 'C4'];
    const now = Tone.now();

    notes.forEach((note, i) => {
      synth.triggerAttackRelease(note, '8n', now + i * 0.3);
    });
  }

  /**
   * Start ambient space drone
   * Uses real NASA audio if available, falls back to synthesis
   * @param {string} type - 'solar' or 'interstellar'
   */
  startAmbientDrone(type) {
    // Try real audio first
    const realAmbient = this.ambientPlayers[type];
    if (realAmbient && realAmbient.loaded && realAmbient.player && !realAmbient.playing) {
      realAmbient.player.start();
      realAmbient.playing = true;
      console.log(`Started real NASA ${type} ambient`);
      return;
    }

    // Fall back to synthesized
    const ambient = this.ambientSynths[type];
    if (!ambient || ambient.playing) return;

    // Fade in to avoid clicks/scratches
    const originalVolume = ambient.noise.volume.value;
    ambient.noise.volume.value = -60; // Start silent
    ambient.noise.start();
    ambient.noise.volume.rampTo(originalVolume, 1); // Fade in over 1 second
    ambient.playing = true;
    console.log(`Started synthesized ${type} ambient drone`);
  }

  /**
   * Stop ambient space drone
   * @param {string} type - 'solar' or 'interstellar'
   */
  stopAmbientDrone(type) {
    // Stop real audio if playing
    const realAmbient = this.ambientPlayers[type];
    if (realAmbient && realAmbient.playing && realAmbient.player) {
      realAmbient.player.stop();
      realAmbient.playing = false;
    }

    // Stop synthesized if playing - fade out to avoid clicks
    const ambient = this.ambientSynths[type];
    if (ambient && ambient.playing) {
      ambient.noise.volume.rampTo(-60, 0.5); // Fade out
      setTimeout(() => {
        ambient.noise.stop();
        ambient.playing = false;
      }, 500);
    }
    console.log(`Stopped ${type} ambient drone`);
  }

  /**
   * Set the zone-based ambient sound
   * @param {string} zone - 'inner', 'outer', or 'interstellar'
   */
  setZone(zone) {
    switch(zone) {
      case 'inner':
        this.startAmbientDrone('solar');
        this.stopAmbientDrone('interstellar');
        break;
      case 'outer':
        this.stopAmbientDrone('solar');
        this.stopAmbientDrone('interstellar');
        break;
      case 'interstellar':
        this.stopAmbientDrone('solar');
        this.startAmbientDrone('interstellar');
        break;
    }
  }

  /**
   * Play discovery fanfare (when focusing on a new object)
   */
  playDiscovery() {
    const synthData = this.synths.get('voyager');
    if (!synthData) return;

    const { synth } = synthData;
    const now = Tone.now();

    // Triumphant discovery chord
    synth.triggerAttackRelease(['C4', 'E4', 'G4'], '2n', now);
    synth.triggerAttackRelease(['C5'], '4n', now + 0.5);
  }

  /**
   * Set volume
   * @param {number} value - Volume 0-1
   */
  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, value));

    // Update all synth volumes proportionally
    this.synths.forEach(({ synth }) => {
      if (synth && synth.volume) {
        const baseVolume = synth.volume.value;
        // Don't go above -10dB even at max
        synth.volume.value = Math.min(-10, baseVolume + (value - 0.5) * 10);
      }
    });

    // Update ambient volumes
    Object.values(this.ambientSynths).forEach(ambient => {
      if (ambient.noise && ambient.noise.volume) {
        ambient.noise.volume.value = -35 + (value * 15);
      }
    });
  }

  /**
   * Dispose of all resources
   */
  dispose() {
    // Stop all loops
    this.activeLoops.forEach(loop => loop.stop());
    this.activeLoops.clear();

    // Dispose synths
    this.synths.forEach(({ synth, ...effects }) => {
      if (synth) synth.dispose();
      Object.values(effects).forEach(effect => {
        if (effect && effect.dispose) effect.dispose();
      });
    });
    this.synths.clear();

    // Dispose ambient synths
    Object.values(this.ambientSynths).forEach(ambient => {
      if (ambient.noise) ambient.noise.dispose();
      Object.values(ambient).forEach(node => {
        if (node && node.dispose && typeof node.dispose === 'function') {
          node.dispose();
        }
      });
    });
    this.ambientSynths = {};

    // Dispose real audio players
    this.players.forEach(player => {
      if (player && player.dispose) player.dispose();
    });
    this.players.clear();

    // Dispose ambient players
    Object.values(this.ambientPlayers).forEach(({ player }) => {
      if (player && player.dispose) player.dispose();
    });
    this.ambientPlayers = {};

    this.audioFilesAvailable = {};
    this.initialized = false;
  }

  /**
   * Get status of loaded audio files (for debugging)
   */
  getAudioStatus() {
    return {
      realAudioLoaded: Object.entries(this.audioFilesAvailable)
        .filter(([, loaded]) => loaded)
        .map(([id]) => id),
      synthesizedFallback: Object.entries(this.audioFilesAvailable)
        .filter(([, loaded]) => !loaded)
        .map(([id]) => id),
      ambientStatus: Object.entries(this.ambientPlayers)
        .map(([zone, { loaded }]) => ({ zone, realAudio: loaded }))
    };
  }

  /**
   * Lazy load audio on demand with IndexedDB caching
   * This is useful for large files that shouldn't block initial load
   * @param {string} id - Sound identifier
   * @param {string[]} files - Array of filenames to try
   * @param {boolean} loop - Whether to loop the audio
   * @param {number} volume - Volume level
   * @returns {Promise<boolean>} - Whether load succeeded
   */
  async lazyLoadAudio(id, files, loop = true, volume = 0.5) {
    // Already loaded?
    if (this.audioFilesAvailable[id] === true) {
      return true;
    }

    // Already loading?
    const loadingKey = `load_${id}`;
    if (this.loadingState.has(loadingKey)) {
      return this.loadingState.get(loadingKey);
    }

    const loadPromise = this._doLazyLoad(id, files, loop, volume);
    this.loadingState.set(loadingKey, loadPromise);

    try {
      return await loadPromise;
    } finally {
      this.loadingState.delete(loadingKey);
    }
  }

  async _doLazyLoad(id, files, loop, volume) {
    for (const filename of files) {
      const url = getAudioUrl(filename);

      try {
        // Use cached loader with IndexedDB support
        const audioBuffer = await this.cachedLoader.load(url, Tone.context._context);

        // Create Tone.js Player from buffer
        const player = new Tone.Player({
          url: audioBuffer,  // Can accept AudioBuffer directly
          loop: loop,
          autostart: false,
          volume: Tone.gainToDb(volume * this.volume)
        }).connect(this.destination);

        // Wait for player to be ready
        await new Promise((resolve, reject) => {
          if (player.loaded) {
            resolve();
          } else {
            player.onload = resolve;
            player.onerror = reject;
            // Timeout after 5s
            setTimeout(() => reject(new Error('Player load timeout')), 5000);
          }
        });

        console.log(`Lazy loaded (cached): ${filename} for ${id}`);
        this.audioFilesAvailable[id] = true;
        this.players.set(id, player);
        return true;

      } catch (e) {
        console.log(`Lazy load failed for ${filename}: ${e.message}`);
        // Try next file
      }
    }

    console.log(`All lazy load attempts failed for ${id}`);
    this.audioFilesAvailable[id] = false;
    return false;
  }

  /**
   * Get cache statistics
   * @returns {Promise<Object>}
   */
  async getCacheStats() {
    return audioCache.getStats();
  }

  /**
   * Clear audio cache
   */
  async clearCache() {
    await audioCache.clear();
    console.log('NASA sounds cache cleared');
  }
}

export default NASASounds;
