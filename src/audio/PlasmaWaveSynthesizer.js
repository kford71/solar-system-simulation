/**
 * PlasmaWaveSynthesizer - Scientifically accurate space audio synthesis
 *
 * Based on NASA/JPL Voyager PWS (Plasma Wave Subsystem) data and research:
 * - Audification of electromagnetic wave data (10 Hz - 56 kHz)
 * - Wideband receiver: 40 Hz - 12 kHz (most useful for sonification)
 * - Time compression ratios for real-time playback
 *
 * Planetary sound characteristics from actual NASA recordings:
 * - Jupiter: Deep rumbles, S-burst pops, descending whistlers
 * - Saturn: Auroral hiss, FM-swept tones, Enceladus plasma
 * - Earth: Chorus chirps, lightning whistlers, plasmaspheric hiss
 * - Uranus/Neptune: Weaker magnetospheric emissions
 * - Rocky planets: Bow shock noise, solar wind turbulence
 *
 * References:
 * - NASA Space Sounds: https://voyager.jpl.nasa.gov/golden-record/
 * - Iowa PWS Group: space-audio.org
 * - Van Allen Probes chorus recordings
 */

import * as Tone from 'tone';

/**
 * Frequency ranges for planetary magnetospheric emissions
 * Based on Voyager PWS instrument specifications
 */
export const PLANETARY_FREQUENCIES = {
  jupiter: {
    rumbleBase: { min: 20, max: 80 },      // Low frequency magnetospheric hum
    sBursts: { min: 100, max: 300 },        // Sporadic bursts from Io interaction
    whistlers: { min: 500, max: 8000 },     // Descending whistler waves
    auroral: { min: 1000, max: 5000 }       // Auroral kilometric radiation (shifted)
  },
  saturn: {
    hiss: { min: 1000, max: 5000 },         // High-frequency auroral hiss
    sweeps: { min: 200, max: 2000 },        // FM-modulated rising/falling tones
    enceladus: { min: 500, max: 3000 },     // Plasma from Enceladus plumes
    rings: { min: 50, max: 500 }            // Ring particle impacts
  },
  earth: {
    chorus: { min: 1000, max: 6000 },       // Rising chorus chirps ("space birds")
    whistlers: { min: 300, max: 10000 },    // Lightning-generated whistlers
    hiss: { min: 200, max: 2000 },          // Plasmaspheric hiss
    auroral: { min: 100, max: 500 }         // Auroral kilometric radiation
  },
  uranus: {
    magnetosphere: { min: 100, max: 1000 }, // Tilted magnetosphere emissions
    hiss: { min: 500, max: 2000 }           // Background hiss
  },
  neptune: {
    magnetosphere: { min: 80, max: 800 },   // Weak magnetospheric activity
    triton: { min: 200, max: 1500 }         // Triton interaction
  },
  mars: {
    bowShock: { min: 50, max: 500 },        // Bow shock turbulence
    solarWind: { min: 100, max: 1000 }      // Solar wind interaction
  },
  venus: {
    bowShock: { min: 30, max: 400 },        // Dense atmosphere bow shock
    lightning: { min: 100, max: 800 }       // Possible lightning (debated)
  },
  mercury: {
    magnetosphere: { min: 50, max: 300 },   // Small magnetosphere
    solarWind: { min: 200, max: 2000 }      // Direct solar wind (close to Sun)
  },
  sun: {
    corona: { min: 20, max: 200 },          // Coronal mass ejections
    solarWind: { min: 50, max: 1000 },      // Solar wind base
    flares: { min: 500, max: 5000 }         // Solar flare radio emissions
  }
};

/**
 * Time compression ratios (original -> audible)
 * Real plasma waves are often very slow, need speedup
 */
export const TIME_COMPRESSION = {
  realtime: 1,
  slow: 100,      // 100x speedup
  medium: 1000,   // 1000x speedup (common for Voyager data)
  fast: 10000     // 10000x speedup
};

/**
 * PlasmaWaveSynthesizer - Creates scientifically-inspired space sounds
 */
class PlasmaWaveSynthesizer {
  constructor() {
    this.initialized = false;
    this.currentPlanet = null;

    // Main output
    this.output = null;
    this.masterGain = null;

    // Synthesis components (created per-planet)
    this.activeSynths = [];
    this.activeNoises = [];
    this.activeLFOs = [];
    this.activeFilters = [];

    // Modulation sources
    this.modulationSources = new Map();

    // Playback state
    this.isPlaying = false;
    this.intensity = 0.5;  // 0-1 overall intensity

    // Scheduled events
    this.scheduledEvents = [];
  }

  /**
   * Initialize the synthesizer
   * @param {Tone.ToneAudioNode} destination - Output destination
   */
  init(destination) {
    if (this.initialized) return;

    // Create master output chain
    this.masterGain = new Tone.Gain(0.5);
    this.output = new Tone.Gain(1);

    // Add subtle compression for consistent levels
    this.compressor = new Tone.Compressor({
      threshold: -20,
      ratio: 4,
      attack: 0.01,
      release: 0.2
    });

    // Add master EQ for space-like character
    this.masterEQ = new Tone.EQ3({
      low: -3,
      mid: 0,
      high: -6,
      lowFrequency: 200,
      highFrequency: 4000
    });

    // Connect chain
    this.masterGain.connect(this.compressor);
    this.compressor.connect(this.masterEQ);
    this.masterEQ.connect(this.output);

    // Connect to destination
    if (destination) {
      this.output.connect(destination);
    } else {
      this.output.toDestination();
    }

    this.initialized = true;
    console.log('PlasmaWaveSynthesizer initialized');
  }

  /**
   * Get the output node
   * @returns {Tone.Gain}
   */
  getOutput() {
    return this.output;
  }

  /**
   * Start playing sounds for a specific planet
   * @param {string} planetName - Planet name
   * @param {Object} options - Playback options
   */
  async startPlanet(planetName, options = {}) {
    if (!this.initialized) {
      console.warn('PlasmaWaveSynthesizer not initialized');
      return;
    }

    const normalizedName = planetName.toLowerCase();

    // Stop current sounds if switching planets
    if (this.currentPlanet && this.currentPlanet !== normalizedName) {
      await this.stop();
    }

    this.currentPlanet = normalizedName;
    this.isPlaying = true;

    // Apply intensity from options
    if (options.intensity !== undefined) {
      this.intensity = options.intensity;
    }

    // Create planet-specific synthesis
    switch (normalizedName) {
      case 'jupiter':
        this.createJupiterSounds();
        break;
      case 'saturn':
        this.createSaturnSounds();
        break;
      case 'earth':
        this.createEarthSounds();
        break;
      case 'uranus':
        this.createUranusSounds();
        break;
      case 'neptune':
        this.createNeptuneSounds();
        break;
      case 'mars':
        this.createMarsSounds();
        break;
      case 'venus':
        this.createVenusSounds();
        break;
      case 'mercury':
        this.createMercurySounds();
        break;
      case 'sun':
        this.createSunSounds();
        break;
      default:
        // Generic space ambience for unknown bodies
        this.createGenericSpaceSounds();
    }

    console.log(`Started plasma wave synthesis for: ${normalizedName}`);
  }

  /**
   * Jupiter: Deep rumbles, S-bursts, descending whistlers
   * Based on Voyager 1/2 PWS recordings near Io
   */
  createJupiterSounds() {
    const freq = PLANETARY_FREQUENCIES.jupiter;
    const baseGain = this.intensity * 0.4;

    // 1. Deep magnetospheric rumble (Brownian noise filtered low)
    const rumbleNoise = new Tone.Noise('brown').start();
    const rumbleFilter = new Tone.Filter({
      type: 'lowpass',
      frequency: freq.rumbleBase.max,
      rolloff: -24,
      Q: 2
    });
    const rumbleGain = new Tone.Gain(baseGain * 0.8);

    // Slow modulation of rumble
    const rumbleLFO = new Tone.LFO({
      frequency: 0.05,
      min: freq.rumbleBase.min,
      max: freq.rumbleBase.max,
      type: 'sine'
    }).start();
    rumbleLFO.connect(rumbleFilter.frequency);

    rumbleNoise.connect(rumbleFilter);
    rumbleFilter.connect(rumbleGain);
    rumbleGain.connect(this.masterGain);

    this.activeNoises.push(rumbleNoise);
    this.activeFilters.push(rumbleFilter);
    this.activeLFOs.push(rumbleLFO);

    // 2. Io S-bursts (sporadic pops/clicks from Io flux tube)
    this.scheduleIoSBursts(freq.sBursts, baseGain * 0.3);

    // 3. Descending whistlers (characteristic Jupiter sound)
    this.scheduleWhistlers(freq.whistlers, baseGain * 0.5, 'descending', 2000, 5000);

    // 4. Auroral emissions (mid-range atmospheric hum)
    const auroralSynth = new Tone.FMSynth({
      harmonicity: 0.5,
      modulationIndex: 2,
      oscillator: { type: 'sine' },
      envelope: { attack: 2, decay: 1, sustain: 0.8, release: 2 },
      modulation: { type: 'sine' },
      modulationEnvelope: { attack: 1, decay: 0.5, sustain: 0.5, release: 1 }
    });
    const auroralGain = new Tone.Gain(baseGain * 0.2);
    const auroralFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 2000,
      Q: 1
    });

    auroralSynth.connect(auroralFilter);
    auroralFilter.connect(auroralGain);
    auroralGain.connect(this.masterGain);

    // Slowly modulate auroral frequency
    const auroralLFO = new Tone.LFO({
      frequency: 0.02,
      min: freq.auroral.min,
      max: freq.auroral.max
    }).start();
    auroralLFO.connect(auroralFilter.frequency);

    auroralSynth.triggerAttack(100);

    this.activeSynths.push(auroralSynth);
    this.activeFilters.push(auroralFilter);
    this.activeLFOs.push(auroralLFO);
  }

  /**
   * Schedule Io S-burst events (sporadic pops)
   */
  scheduleIoSBursts(freqRange, gain) {
    const burstSynth = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 2,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.1 }
    });
    const burstGain = new Tone.Gain(gain);
    burstSynth.connect(burstGain);
    burstGain.connect(this.masterGain);

    this.activeSynths.push(burstSynth);

    // Schedule random bursts
    const scheduleBurst = () => {
      if (!this.isPlaying || this.currentPlanet !== 'jupiter') return;

      const freq = freqRange.min + Math.random() * (freqRange.max - freqRange.min);
      burstSynth.triggerAttackRelease(freq, '32n');

      // Random interval between bursts (0.1 - 2 seconds)
      const nextTime = 100 + Math.random() * 1900;
      const eventId = setTimeout(scheduleBurst, nextTime);
      this.scheduledEvents.push(eventId);
    };

    // Start bursting after initial delay
    const eventId = setTimeout(scheduleBurst, 500);
    this.scheduledEvents.push(eventId);
  }

  /**
   * Schedule whistler wave events
   * @param {Object} freqRange - Frequency range
   * @param {number} gain - Gain level
   * @param {string} direction - 'descending' or 'ascending'
   * @param {number} minInterval - Min ms between whistlers
   * @param {number} maxInterval - Max ms between whistlers
   */
  scheduleWhistlers(freqRange, gain, direction = 'descending', minInterval = 3000, maxInterval = 8000) {
    const whistlerSynth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.5, sustain: 0.3, release: 0.5 }
    });
    const whistlerFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: freqRange.max / 2,
      Q: 5
    });
    const whistlerGain = new Tone.Gain(gain);

    whistlerSynth.connect(whistlerFilter);
    whistlerFilter.connect(whistlerGain);
    whistlerGain.connect(this.masterGain);

    this.activeSynths.push(whistlerSynth);
    this.activeFilters.push(whistlerFilter);

    const scheduleWhistler = () => {
      if (!this.isPlaying) return;

      const startFreq = direction === 'descending' ? freqRange.max : freqRange.min;
      const endFreq = direction === 'descending' ? freqRange.min : freqRange.max;
      const duration = 0.5 + Math.random() * 1.5;

      whistlerSynth.triggerAttack(startFreq);
      whistlerSynth.frequency.exponentialRampTo(endFreq, duration);

      setTimeout(() => {
        if (this.isPlaying) {
          whistlerSynth.triggerRelease();
        }
      }, duration * 1000);

      // Schedule next whistler
      const nextTime = minInterval + Math.random() * (maxInterval - minInterval);
      const eventId = setTimeout(scheduleWhistler, nextTime);
      this.scheduledEvents.push(eventId);
    };

    // Start first whistler after delay
    const eventId = setTimeout(scheduleWhistler, 1000 + Math.random() * 2000);
    this.scheduledEvents.push(eventId);
  }

  /**
   * Saturn: Auroral hiss, FM sweeps, ring particle sounds
   * Based on Cassini radio and plasma wave science data
   */
  createSaturnSounds() {
    const freq = PLANETARY_FREQUENCIES.saturn;
    const baseGain = this.intensity * 0.4;

    // 1. High-frequency auroral hiss (characteristic Saturn sound)
    const hissNoise = new Tone.Noise('white').start();
    const hissFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: (freq.hiss.min + freq.hiss.max) / 2,
      Q: 3
    });
    const hissGain = new Tone.Gain(baseGain * 0.4);

    // Modulate hiss frequency
    const hissLFO = new Tone.LFO({
      frequency: 0.1,
      min: freq.hiss.min,
      max: freq.hiss.max,
      type: 'sine'
    }).start();
    hissLFO.connect(hissFilter.frequency);

    hissNoise.connect(hissFilter);
    hissFilter.connect(hissGain);
    hissGain.connect(this.masterGain);

    this.activeNoises.push(hissNoise);
    this.activeFilters.push(hissFilter);
    this.activeLFOs.push(hissLFO);

    // 2. FM-modulated sweeping tones (Saturn's "voice")
    this.createSaturnSweeps(freq.sweeps, baseGain * 0.5);

    // 3. Ring particle impacts (subtle crackle)
    const ringNoise = new Tone.Noise('pink').start();
    const ringFilter = new Tone.Filter({
      type: 'highpass',
      frequency: 100,
      rolloff: -12
    });
    const ringGate = new Tone.Gate(-40);
    const ringGain = new Tone.Gain(baseGain * 0.2);

    ringNoise.connect(ringFilter);
    ringFilter.connect(ringGate);
    ringGate.connect(ringGain);
    ringGain.connect(this.masterGain);

    this.activeNoises.push(ringNoise);
    this.activeFilters.push(ringFilter);

    // 4. Enceladus plasma interaction (subtle mid-range)
    const enceladusSynth = new Tone.AMSynth({
      harmonicity: 1.5,
      oscillator: { type: 'sine' },
      envelope: { attack: 3, decay: 2, sustain: 0.6, release: 3 },
      modulation: { type: 'triangle' },
      modulationEnvelope: { attack: 2, decay: 1, sustain: 0.5, release: 2 }
    });
    const enceladusGain = new Tone.Gain(baseGain * 0.15);
    enceladusSynth.connect(enceladusGain);
    enceladusGain.connect(this.masterGain);

    enceladusSynth.triggerAttack(800);

    this.activeSynths.push(enceladusSynth);
  }

  /**
   * Create Saturn's characteristic FM sweep sounds
   */
  createSaturnSweeps(freqRange, gain) {
    const sweepSynth = new Tone.FMSynth({
      harmonicity: 2,
      modulationIndex: 5,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.5, decay: 0.5, sustain: 0.5, release: 1 },
      modulation: { type: 'sine' },
      modulationEnvelope: { attack: 0.3, decay: 0.3, sustain: 0.3, release: 0.5 }
    });
    const sweepFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 1000,
      Q: 2
    });
    const sweepGain = new Tone.Gain(gain);

    sweepSynth.connect(sweepFilter);
    sweepFilter.connect(sweepGain);
    sweepGain.connect(this.masterGain);

    this.activeSynths.push(sweepSynth);
    this.activeFilters.push(sweepFilter);

    const scheduleSweep = () => {
      if (!this.isPlaying || this.currentPlanet !== 'saturn') return;

      // Alternating up/down sweeps
      const goingUp = Math.random() > 0.5;
      const startFreq = goingUp ? freqRange.min : freqRange.max;
      const endFreq = goingUp ? freqRange.max : freqRange.min;
      const duration = 1 + Math.random() * 3;

      sweepSynth.triggerAttack(startFreq);
      sweepSynth.frequency.exponentialRampTo(endFreq, duration);

      setTimeout(() => {
        if (this.isPlaying) {
          sweepSynth.triggerRelease();
        }
      }, duration * 1000);

      // Next sweep in 4-10 seconds
      const nextTime = 4000 + Math.random() * 6000;
      const eventId = setTimeout(scheduleSweep, nextTime);
      this.scheduledEvents.push(eventId);
    };

    const eventId = setTimeout(scheduleSweep, 2000);
    this.scheduledEvents.push(eventId);
  }

  /**
   * Earth: Chorus chirps, lightning whistlers, plasmaspheric hiss
   * Based on Van Allen Probes and THEMIS data
   */
  createEarthSounds() {
    const freq = PLANETARY_FREQUENCIES.earth;
    const baseGain = this.intensity * 0.4;

    // 1. Chorus waves ("space birds" - rising chirps)
    this.scheduleChorusChirps(freq.chorus, baseGain * 0.5);

    // 2. Lightning whistlers (descending, faster than Jupiter's)
    this.scheduleWhistlers(freq.whistlers, baseGain * 0.4, 'descending', 2000, 6000);

    // 3. Plasmaspheric hiss (background)
    const hissNoise = new Tone.Noise('pink').start();
    const hissFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: (freq.hiss.min + freq.hiss.max) / 2,
      Q: 2
    });
    const hissGain = new Tone.Gain(baseGain * 0.3);

    hissNoise.connect(hissFilter);
    hissFilter.connect(hissGain);
    hissGain.connect(this.masterGain);

    this.activeNoises.push(hissNoise);
    this.activeFilters.push(hissFilter);

    // 4. Low-frequency auroral emissions
    const auroralNoise = new Tone.Noise('brown').start();
    const auroralFilter = new Tone.Filter({
      type: 'lowpass',
      frequency: freq.auroral.max,
      rolloff: -24
    });
    const auroralGain = new Tone.Gain(baseGain * 0.2);

    // Slow pulsation
    const auroralLFO = new Tone.LFO({
      frequency: 0.08,
      min: 0.1,
      max: 0.3
    }).start();
    auroralLFO.connect(auroralGain.gain);

    auroralNoise.connect(auroralFilter);
    auroralFilter.connect(auroralGain);
    auroralGain.connect(this.masterGain);

    this.activeNoises.push(auroralNoise);
    this.activeFilters.push(auroralFilter);
    this.activeLFOs.push(auroralLFO);
  }

  /**
   * Schedule Earth chorus chirps (rising tones)
   */
  scheduleChorusChirps(freqRange, gain) {
    const chorusSynth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0.1, release: 0.3 }
    });
    const chorusFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 3000,
      Q: 4
    });
    const chorusGain = new Tone.Gain(gain);

    chorusSynth.connect(chorusFilter);
    chorusFilter.connect(chorusGain);
    chorusGain.connect(this.masterGain);

    this.activeSynths.push(chorusSynth);
    this.activeFilters.push(chorusFilter);

    const scheduleChirp = () => {
      if (!this.isPlaying || this.currentPlanet !== 'earth') return;

      // Rising chirps (characteristic of Earth's chorus)
      const startFreq = freqRange.min + Math.random() * (freqRange.max - freqRange.min) * 0.3;
      const endFreq = startFreq + (freqRange.max - startFreq) * (0.5 + Math.random() * 0.5);
      const duration = 0.1 + Math.random() * 0.3;

      chorusSynth.triggerAttack(startFreq);
      chorusSynth.frequency.exponentialRampTo(endFreq, duration);

      setTimeout(() => {
        if (this.isPlaying) {
          chorusSynth.triggerRelease();
        }
      }, duration * 1000);

      // Chorus tends to come in bursts
      const burstMode = Math.random() > 0.6;
      const nextTime = burstMode ? 100 + Math.random() * 300 : 1000 + Math.random() * 3000;
      const eventId = setTimeout(scheduleChirp, nextTime);
      this.scheduledEvents.push(eventId);
    };

    const eventId = setTimeout(scheduleChirp, 500);
    this.scheduledEvents.push(eventId);
  }

  /**
   * Uranus: Tilted magnetosphere, unusual emission patterns
   */
  createUranusSounds() {
    const freq = PLANETARY_FREQUENCIES.uranus;
    const baseGain = this.intensity * 0.3;

    // Weaker, more chaotic emissions due to tilted magnetosphere
    const magnetoNoise = new Tone.Noise('pink').start();
    const magnetoFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 500,
      Q: 2
    });
    const magnetoGain = new Tone.Gain(baseGain * 0.5);

    // Irregular modulation (representing tilted field)
    const magnetoLFO1 = new Tone.LFO({ frequency: 0.07, min: freq.magnetosphere.min, max: freq.magnetosphere.max }).start();
    const magnetoLFO2 = new Tone.LFO({ frequency: 0.03, min: 0.2, max: 0.6 }).start();
    magnetoLFO1.connect(magnetoFilter.frequency);
    magnetoLFO2.connect(magnetoGain.gain);

    magnetoNoise.connect(magnetoFilter);
    magnetoFilter.connect(magnetoGain);
    magnetoGain.connect(this.masterGain);

    this.activeNoises.push(magnetoNoise);
    this.activeFilters.push(magnetoFilter);
    this.activeLFOs.push(magnetoLFO1, magnetoLFO2);

    // Background hiss
    const hissNoise = new Tone.Noise('white').start();
    const hissFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 1000,
      Q: 1
    });
    const hissGain = new Tone.Gain(baseGain * 0.2);

    hissNoise.connect(hissFilter);
    hissFilter.connect(hissGain);
    hissGain.connect(this.masterGain);

    this.activeNoises.push(hissNoise);
    this.activeFilters.push(hissFilter);
  }

  /**
   * Neptune: Distant, faint magnetospheric activity
   */
  createNeptuneSounds() {
    const freq = PLANETARY_FREQUENCIES.neptune;
    const baseGain = this.intensity * 0.25;

    // Very subtle magnetospheric emissions
    const magnetoNoise = new Tone.Noise('brown').start();
    const magnetoFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 400,
      Q: 1.5
    });
    const magnetoGain = new Tone.Gain(baseGain * 0.4);

    magnetoNoise.connect(magnetoFilter);
    magnetoFilter.connect(magnetoGain);
    magnetoGain.connect(this.masterGain);

    this.activeNoises.push(magnetoNoise);
    this.activeFilters.push(magnetoFilter);

    // Triton interaction (subtle mid-frequency)
    const tritonSynth = new Tone.AMSynth({
      harmonicity: 1.2,
      oscillator: { type: 'triangle' },
      envelope: { attack: 4, decay: 2, sustain: 0.5, release: 4 },
      modulation: { type: 'sine' },
      modulationEnvelope: { attack: 2, decay: 1, sustain: 0.3, release: 2 }
    });
    const tritonGain = new Tone.Gain(baseGain * 0.2);
    tritonSynth.connect(tritonGain);
    tritonGain.connect(this.masterGain);

    tritonSynth.triggerAttack(800);

    this.activeSynths.push(tritonSynth);

    // Distant wind-like ambience
    const windNoise = new Tone.Noise('pink').start();
    const windFilter = new Tone.AutoFilter({
      frequency: 0.05,
      type: 'bandpass',
      depth: 0.5,
      baseFrequency: 200,
      octaves: 2
    }).start();
    const windGain = new Tone.Gain(baseGain * 0.3);

    windNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.masterGain);

    this.activeNoises.push(windNoise);
    this.activeFilters.push(windFilter);
  }

  /**
   * Mars: Bow shock noise, no magnetosphere
   */
  createMarsSounds() {
    const freq = PLANETARY_FREQUENCIES.mars;
    const baseGain = this.intensity * 0.3;

    // Bow shock turbulence (solar wind hitting atmosphere)
    const shockNoise = new Tone.Noise('brown').start();
    const shockFilter = new Tone.Filter({
      type: 'lowpass',
      frequency: freq.bowShock.max,
      rolloff: -12
    });
    const shockGain = new Tone.Gain(baseGain * 0.6);

    // Turbulent modulation
    const shockLFO = new Tone.LFO({
      frequency: 0.15,
      min: freq.bowShock.min,
      max: freq.bowShock.max,
      type: 'sawtooth'
    }).start();
    shockLFO.connect(shockFilter.frequency);

    shockNoise.connect(shockFilter);
    shockFilter.connect(shockGain);
    shockGain.connect(this.masterGain);

    this.activeNoises.push(shockNoise);
    this.activeFilters.push(shockFilter);
    this.activeLFOs.push(shockLFO);

    // Solar wind interaction
    const windNoise = new Tone.Noise('pink').start();
    const windFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 500,
      Q: 1
    });
    const windGain = new Tone.Gain(baseGain * 0.3);

    windNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.masterGain);

    this.activeNoises.push(windNoise);
    this.activeFilters.push(windFilter);
  }

  /**
   * Venus: Dense atmosphere bow shock
   */
  createVenusSounds() {
    const freq = PLANETARY_FREQUENCIES.venus;
    const baseGain = this.intensity * 0.35;

    // Heavy, dense bow shock (thick atmosphere)
    const shockNoise = new Tone.Noise('brown').start();
    const shockFilter = new Tone.Filter({
      type: 'lowpass',
      frequency: freq.bowShock.max,
      rolloff: -24,
      Q: 3
    });
    const shockGain = new Tone.Gain(baseGain * 0.7);

    shockNoise.connect(shockFilter);
    shockFilter.connect(shockGain);
    shockGain.connect(this.masterGain);

    this.activeNoises.push(shockNoise);
    this.activeFilters.push(shockFilter);

    // Possible lightning (debated)
    this.scheduleVenusLightning(freq.lightning, baseGain * 0.2);
  }

  /**
   * Schedule possible Venus lightning events
   */
  scheduleVenusLightning(freqRange, gain) {
    const lightningSynth = new Tone.NoiseSynth({
      noise: { type: 'white' },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.1 }
    });
    const lightningFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 400,
      Q: 2
    });
    const lightningGain = new Tone.Gain(gain);

    lightningSynth.connect(lightningFilter);
    lightningFilter.connect(lightningGain);
    lightningGain.connect(this.masterGain);

    this.activeSynths.push(lightningSynth);
    this.activeFilters.push(lightningFilter);

    const scheduleLightning = () => {
      if (!this.isPlaying || this.currentPlanet !== 'venus') return;

      // Rare events
      if (Math.random() > 0.3) {
        lightningFilter.frequency.value = freqRange.min + Math.random() * (freqRange.max - freqRange.min);
        lightningSynth.triggerAttackRelease('8n');
      }

      // Long intervals (lightning is rare)
      const nextTime = 3000 + Math.random() * 7000;
      const eventId = setTimeout(scheduleLightning, nextTime);
      this.scheduledEvents.push(eventId);
    };

    const eventId = setTimeout(scheduleLightning, 2000);
    this.scheduledEvents.push(eventId);
  }

  /**
   * Mercury: Small magnetosphere, close to Sun
   */
  createMercurySounds() {
    const freq = PLANETARY_FREQUENCIES.mercury;
    const baseGain = this.intensity * 0.3;

    // Weak magnetosphere
    const magnetoNoise = new Tone.Noise('pink').start();
    const magnetoFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 150,
      Q: 2
    });
    const magnetoGain = new Tone.Gain(baseGain * 0.4);

    magnetoNoise.connect(magnetoFilter);
    magnetoFilter.connect(magnetoGain);
    magnetoGain.connect(this.masterGain);

    this.activeNoises.push(magnetoNoise);
    this.activeFilters.push(magnetoFilter);

    // Intense solar wind (close to Sun)
    const solarNoise = new Tone.Noise('white').start();
    const solarFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 1000,
      Q: 1
    });
    const solarGain = new Tone.Gain(baseGain * 0.5);

    // Rapid fluctuations
    const solarLFO = new Tone.LFO({
      frequency: 0.3,
      min: freq.solarWind.min,
      max: freq.solarWind.max
    }).start();
    solarLFO.connect(solarFilter.frequency);

    solarNoise.connect(solarFilter);
    solarFilter.connect(solarGain);
    solarGain.connect(this.masterGain);

    this.activeNoises.push(solarNoise);
    this.activeFilters.push(solarFilter);
    this.activeLFOs.push(solarLFO);
  }

  /**
   * Sun: Coronal emissions, solar wind, flares
   */
  createSunSounds() {
    const freq = PLANETARY_FREQUENCIES.sun;
    const baseGain = this.intensity * 0.5;

    // Deep coronal rumble
    const coronaNoise = new Tone.Noise('brown').start();
    const coronaFilter = new Tone.Filter({
      type: 'lowpass',
      frequency: freq.corona.max,
      rolloff: -24,
      Q: 4
    });
    const coronaGain = new Tone.Gain(baseGain * 0.6);

    // Slow, powerful modulation
    const coronaLFO = new Tone.LFO({
      frequency: 0.02,
      min: freq.corona.min,
      max: freq.corona.max,
      type: 'sine'
    }).start();
    coronaLFO.connect(coronaFilter.frequency);

    coronaNoise.connect(coronaFilter);
    coronaFilter.connect(coronaGain);
    coronaGain.connect(this.masterGain);

    this.activeNoises.push(coronaNoise);
    this.activeFilters.push(coronaFilter);
    this.activeLFOs.push(coronaLFO);

    // Solar wind base
    const windNoise = new Tone.Noise('pink').start();
    const windFilter = new Tone.Filter({
      type: 'bandpass',
      frequency: 300,
      Q: 1
    });
    const windGain = new Tone.Gain(baseGain * 0.4);

    windNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.masterGain);

    this.activeNoises.push(windNoise);
    this.activeFilters.push(windFilter);

    // Solar flare events
    this.scheduleSolarFlares(freq.flares, baseGain * 0.4);
  }

  /**
   * Schedule solar flare events
   */
  scheduleSolarFlares(freqRange, gain) {
    const flareSynth = new Tone.FMSynth({
      harmonicity: 3,
      modulationIndex: 10,
      oscillator: { type: 'sawtooth' },
      envelope: { attack: 0.1, decay: 0.5, sustain: 0.3, release: 1 },
      modulation: { type: 'square' },
      modulationEnvelope: { attack: 0.05, decay: 0.2, sustain: 0.2, release: 0.5 }
    });
    const flareFilter = new Tone.Filter({
      type: 'lowpass',
      frequency: 3000,
      Q: 2
    });
    const flareGain = new Tone.Gain(gain);

    flareSynth.connect(flareFilter);
    flareFilter.connect(flareGain);
    flareGain.connect(this.masterGain);

    this.activeSynths.push(flareSynth);
    this.activeFilters.push(flareFilter);

    const scheduleFlare = () => {
      if (!this.isPlaying || this.currentPlanet !== 'sun') return;

      const startFreq = freqRange.min + Math.random() * (freqRange.max - freqRange.min);
      const duration = 0.5 + Math.random() * 2;

      flareFilter.frequency.value = startFreq * 2;
      flareSynth.triggerAttackRelease(startFreq, duration);

      // Flares are relatively rare
      const nextTime = 5000 + Math.random() * 15000;
      const eventId = setTimeout(scheduleFlare, nextTime);
      this.scheduledEvents.push(eventId);
    };

    const eventId = setTimeout(scheduleFlare, 3000);
    this.scheduledEvents.push(eventId);
  }

  /**
   * Generic space sounds for unknown bodies
   */
  createGenericSpaceSounds() {
    const baseGain = this.intensity * 0.3;

    // Subtle cosmic background
    const bgNoise = new Tone.Noise('brown').start();
    const bgFilter = new Tone.Filter({
      type: 'lowpass',
      frequency: 200,
      rolloff: -24
    });
    const bgGain = new Tone.Gain(baseGain * 0.5);

    bgNoise.connect(bgFilter);
    bgFilter.connect(bgGain);
    bgGain.connect(this.masterGain);

    this.activeNoises.push(bgNoise);
    this.activeFilters.push(bgFilter);

    // Occasional random events
    this.scheduleRandomSpaceEvents(baseGain * 0.3);
  }

  /**
   * Schedule random space events for generic sounds
   */
  scheduleRandomSpaceEvents(gain) {
    const eventSynth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.1, decay: 0.3, sustain: 0.2, release: 0.5 }
    });
    const eventGain = new Tone.Gain(gain);
    eventSynth.connect(eventGain);
    eventGain.connect(this.masterGain);

    this.activeSynths.push(eventSynth);

    const scheduleEvent = () => {
      if (!this.isPlaying) return;

      const freq = 100 + Math.random() * 2000;
      const duration = 0.2 + Math.random() * 0.8;
      eventSynth.triggerAttackRelease(freq, duration);

      const nextTime = 3000 + Math.random() * 7000;
      const eventId = setTimeout(scheduleEvent, nextTime);
      this.scheduledEvents.push(eventId);
    };

    const eventId = setTimeout(scheduleEvent, 2000);
    this.scheduledEvents.push(eventId);
  }

  /**
   * Set overall intensity
   * @param {number} intensity - 0 to 1
   */
  setIntensity(intensity) {
    this.intensity = Math.max(0, Math.min(1, intensity));
    if (this.masterGain) {
      this.masterGain.gain.rampTo(intensity * 0.5, 0.5);
    }
  }

  /**
   * Stop all sounds
   * @param {number} fadeTime - Fade out time in seconds
   */
  async stop(fadeTime = 1) {
    this.isPlaying = false;

    // Clear scheduled events
    this.scheduledEvents.forEach(eventId => clearTimeout(eventId));
    this.scheduledEvents = [];

    // Fade out master
    if (this.masterGain) {
      this.masterGain.gain.rampTo(0, fadeTime);
    }

    // Wait for fade
    await new Promise(resolve => setTimeout(resolve, fadeTime * 1000 + 100));

    // Dispose all active nodes
    this.activeSynths.forEach(synth => {
      try {
        synth.triggerRelease();
        synth.dispose();
      } catch (e) {
        // Ignore disposal errors
      }
    });

    this.activeNoises.forEach(noise => {
      try {
        noise.stop();
        noise.dispose();
      } catch (e) {
        // Ignore
      }
    });

    this.activeLFOs.forEach(lfo => {
      try {
        lfo.stop();
        lfo.dispose();
      } catch (e) {
        // Ignore
      }
    });

    this.activeFilters.forEach(filter => {
      try {
        filter.dispose();
      } catch (e) {
        // Ignore
      }
    });

    // Clear arrays
    this.activeSynths = [];
    this.activeNoises = [];
    this.activeLFOs = [];
    this.activeFilters = [];

    // Restore master gain
    if (this.masterGain) {
      this.masterGain.gain.value = this.intensity * 0.5;
    }

    this.currentPlanet = null;
    console.log('PlasmaWaveSynthesizer stopped');
  }

  /**
   * Get current state
   * @returns {Object}
   */
  getState() {
    return {
      initialized: this.initialized,
      isPlaying: this.isPlaying,
      currentPlanet: this.currentPlanet,
      intensity: this.intensity,
      activeSynthCount: this.activeSynths.length,
      activeNoiseCount: this.activeNoises.length
    };
  }

  /**
   * Get list of available planets
   * @returns {Array}
   */
  getAvailablePlanets() {
    return Object.keys(PLANETARY_FREQUENCIES);
  }

  /**
   * Dispose all resources
   */
  dispose() {
    this.stop(0);

    if (this.masterGain) this.masterGain.dispose();
    if (this.compressor) this.compressor.dispose();
    if (this.masterEQ) this.masterEQ.dispose();
    if (this.output) this.output.dispose();

    this.masterGain = null;
    this.compressor = null;
    this.masterEQ = null;
    this.output = null;
    this.initialized = false;

    console.log('PlasmaWaveSynthesizer disposed');
  }
}

// Export singleton instance
export const plasmaWaveSynthesizer = new PlasmaWaveSynthesizer();
export default plasmaWaveSynthesizer;
