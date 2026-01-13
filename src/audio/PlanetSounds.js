/**
 * Planet Signature Sounds
 *
 * Each planet has a unique synthesized sound based on NASA sonification data:
 * - Sun: Deep throb + solar flare crackles
 * - Mercury: Brittle high-frequency static (solar wind bombardment)
 * - Venus: Heavy low-frequency wind drone (dense atmosphere)
 * - Earth: "Chorus" waves - electronic chirping (magnetosphere)
 * - Mars: Thin wind + metallic resonance (thin atmosphere)
 * - Jupiter: FM synthesis "ocean roar" + whistlers (magnetosphere)
 * - Saturn: Eerie rising/falling tones (Saturn Kilometric Radiation)
 * - Uranus: Cold sparse whistlers
 * - Neptune: Deep wind + distant whistling
 */

import * as Tone from 'tone';

export class PlanetSoundGenerator {
  constructor(masterGain) {
    this.masterGain = masterGain;
    this.planetSounds = new Map();
    this.activeSound = null;
    this.initialized = false;
  }

  /**
   * Create all planet signature sounds
   */
  init() {
    if (this.initialized) return;

    try {
      this.createSunSound();
      this.createMercurySound();
      this.createVenusSound();
      this.createEarthSound();
      this.createMarsSound();
      this.createJupiterSound();
      this.createSaturnSound();
      this.createUranusSound();
      this.createNeptuneSound();

      // Start all sounds muted
      this.planetSounds.forEach(sound => {
        if (sound.outputGain) {
          sound.outputGain.gain.value = 0;
        }
      });

      this.initialized = true;
      console.log('PlanetSoundGenerator initialized');
    } catch (error) {
      console.warn('PlanetSoundGenerator init failed:', error);
    }
  }

  // ==================== SUN ====================
  createSunSound() {
    // Deep rhythmic throb (solar convection)
    const lfo = new Tone.LFO(0.1, 0.3, 0.8).start();
    const baseOsc = new Tone.Oscillator(30, 'sine').start();
    const ampMod = new Tone.Gain();
    lfo.connect(ampMod.gain);
    baseOsc.connect(ampMod);

    // Sub-bass rumble
    const subNoise = new Tone.Noise('brown').start();
    const subFilter = new Tone.Filter(40, 'lowpass');
    subNoise.connect(subFilter);

    // Solar flare crackles (granular high frequencies)
    const crackleNoise = new Tone.Noise('white').start();
    const crackleFilter = new Tone.Filter(8000, 'highpass');
    const crackleGain = new Tone.Gain(0.03);
    const crackleLFO = new Tone.LFO(0.5, 0, 0.1).start();
    crackleNoise.connect(crackleFilter);
    crackleFilter.connect(crackleGain);
    crackleLFO.connect(crackleGain.gain);

    // Mix
    const outputGain = new Tone.Gain(0);
    ampMod.connect(outputGain);
    subFilter.connect(outputGain);
    crackleGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Sun', {
      nodes: [lfo, baseOsc, ampMod, subNoise, subFilter, crackleNoise, crackleFilter, crackleGain, crackleLFO],
      outputGain,
      baseVolume: 0.4
    });
  }

  // ==================== MERCURY ====================
  createMercurySound() {
    // Brittle, dry, irradiated - high frequency static
    const noise = new Tone.Noise('white').start();
    const filter = new Tone.Filter(6000, 'highpass');
    const bitcrusher = new Tone.BitCrusher(6);

    // Irregular crackling
    const lfo = new Tone.LFO(3, 0, 0.15).start();
    const outputGain = new Tone.Gain(0);
    lfo.connect(outputGain.gain);

    noise.connect(filter);
    filter.connect(bitcrusher);
    bitcrusher.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Mercury', {
      nodes: [noise, filter, bitcrusher, lfo],
      outputGain,
      baseVolume: 0.15
    });
  }

  // ==================== VENUS ====================
  createVenusSound() {
    // Heavy, oppressive, dense atmosphere
    const noise = new Tone.Noise('brown').start();
    const filter = new Tone.Filter(150, 'lowpass');
    const filter2 = new Tone.Filter(200, 'lowpass'); // Double filter for thickness

    // Slow pressure modulation
    const lfo = new Tone.LFO(0.05, 0.4, 0.8).start();
    const ampGain = new Tone.Gain();
    lfo.connect(ampGain.gain);

    // Distant thunder rumbles
    const thunderLFO = new Tone.LFO(0.02, 0, 0.2).start();
    const thunderOsc = new Tone.Oscillator(25, 'sine').start();
    const thunderGain = new Tone.Gain(0);
    thunderLFO.connect(thunderGain.gain);
    thunderOsc.connect(thunderGain);

    const outputGain = new Tone.Gain(0);
    noise.connect(filter);
    filter.connect(filter2);
    filter2.connect(ampGain);
    ampGain.connect(outputGain);
    thunderGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Venus', {
      nodes: [noise, filter, filter2, lfo, ampGain, thunderLFO, thunderOsc, thunderGain],
      outputGain,
      baseVolume: 0.35
    });
  }

  // ==================== EARTH ====================
  createEarthSound() {
    // "Chorus" waves - electronic chirping from magnetosphere
    // Surprisingly bird-like, caused by electrons spiraling along field lines

    // Main chorus effect using FM synthesis
    const modulator = new Tone.Oscillator(800, 'sine').start();
    const carrier = new Tone.Oscillator(2000, 'sine').start();
    const modGain = new Tone.Gain(400);
    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    // Chirp LFO - rapid sweeps
    const chirpLFO = new Tone.LFO(8, 600, 3000).start();
    chirpLFO.connect(modulator.frequency);

    // Random amplitude for "flock" effect
    const ampLFO = new Tone.LFO(2, 0.05, 0.2).start();
    const ampGain = new Tone.Gain();
    ampLFO.connect(ampGain.gain);
    carrier.connect(ampGain);

    // Subtle radio chatter undertone
    const radioNoise = new Tone.Noise('pink').start();
    const radioFilter = new Tone.Filter(4000, 'bandpass');
    const radioGain = new Tone.Gain(0.02);
    radioNoise.connect(radioFilter);
    radioFilter.connect(radioGain);

    const outputGain = new Tone.Gain(0);
    ampGain.connect(outputGain);
    radioGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Earth', {
      nodes: [modulator, carrier, modGain, chirpLFO, ampLFO, ampGain, radioNoise, radioFilter, radioGain],
      outputGain,
      baseVolume: 0.2
    });
  }

  // ==================== MARS ====================
  createMarsSound() {
    // Thin, desolate - high-pitched wind lacking bass
    const wind = new Tone.Noise('pink').start();
    const windFilter = new Tone.Filter(2000, 'highpass');
    const windFilter2 = new Tone.Filter(800, 'lowpass'); // Bandpass effect

    // Slow wind modulation
    const windLFO = new Tone.LFO(0.1, 0.1, 0.3).start();
    const windGain = new Tone.Gain();
    windLFO.connect(windGain.gain);

    wind.connect(windFilter);
    windFilter.connect(windFilter2);
    windFilter2.connect(windGain);

    // "Dinks and donks" - metallic resonance (InSight lander sounds)
    const metalOsc = new Tone.Oscillator(800, 'sine').start();
    const metalEnv = new Tone.AmplitudeEnvelope({
      attack: 0.001,
      decay: 0.3,
      sustain: 0,
      release: 0.1
    });
    metalOsc.connect(metalEnv);
    const metalGain = new Tone.Gain(0.1);
    metalEnv.connect(metalGain);

    const outputGain = new Tone.Gain(0);
    windGain.connect(outputGain);
    metalGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    // Metal trigger function
    const triggerMetal = () => {
      if (Math.random() < 0.005) { // 0.5% chance per call
        metalOsc.frequency.value = 400 + Math.random() * 800;
        metalEnv.triggerAttackRelease(0.1);
      }
    };

    this.planetSounds.set('Mars', {
      nodes: [wind, windFilter, windFilter2, windLFO, windGain, metalOsc, metalEnv, metalGain],
      outputGain,
      baseVolume: 0.25,
      triggerMetal
    });
  }

  // ==================== JUPITER ====================
  createJupiterSound() {
    // Loudest radio source - chaotic ocean roar + whistlers

    // FM synthesis for magnetosphere "tearing" sound
    const modulator = new Tone.Oscillator(50, 'sawtooth').start();
    const carrier = new Tone.Oscillator(80, 'sine').start();
    const modGain = new Tone.Gain(100);
    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    // Chaos modulation
    const chaosLFO = new Tone.LFO(0.3, 20, 120).start();
    chaosLFO.connect(modulator.frequency);

    // Ocean roar base
    const noise = new Tone.Noise('brown').start();
    const noiseFilter = new Tone.Filter(200, 'lowpass');
    noise.connect(noiseFilter);

    // Whistlers - descending tones (lightning)
    const whistlerOsc = new Tone.Oscillator(4000, 'sine').start();
    const whistlerLFO = new Tone.LFO(0.5, 500, 4000).start();
    whistlerLFO.connect(whistlerOsc.frequency);
    const whistlerGain = new Tone.Gain(0.08);
    const whistlerAmpLFO = new Tone.LFO(0.2, 0, 0.1).start();
    whistlerAmpLFO.connect(whistlerGain.gain);
    whistlerOsc.connect(whistlerGain);

    const outputGain = new Tone.Gain(0);
    carrier.connect(outputGain);
    noiseFilter.connect(outputGain);
    whistlerGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Jupiter', {
      nodes: [modulator, carrier, modGain, chaosLFO, noise, noiseFilter, whistlerOsc, whistlerLFO, whistlerGain, whistlerAmpLFO],
      outputGain,
      baseVolume: 0.35
    });
  }

  // ==================== SATURN ====================
  createSaturnSound() {
    // Eerie, cinematic - Saturn Kilometric Radiation
    // Rising and falling tones, classic "1950s sci-fi" sound

    // Main SKR tone - slow rising/falling
    const osc1 = new Tone.Oscillator(200, 'sine').start();
    const osc2 = new Tone.Oscillator(203, 'sine').start(); // Slight detune for beating
    const lfo1 = new Tone.LFO(0.03, 150, 400).start(); // Very slow sweep
    lfo1.connect(osc1.frequency);
    lfo1.connect(osc2.frequency);

    // Secondary higher tone
    const osc3 = new Tone.Oscillator(800, 'triangle').start();
    const lfo2 = new Tone.LFO(0.05, 600, 1200).start();
    lfo2.connect(osc3.frequency);
    const highGain = new Tone.Gain(0.1);
    osc3.connect(highGain);

    // Ring plane dust (subtle hiss)
    const ringNoise = new Tone.Noise('white').start();
    const ringFilter = new Tone.Filter(3000, 'highpass');
    const ringGain = new Tone.Gain(0.02);
    ringNoise.connect(ringFilter);
    ringFilter.connect(ringGain);

    const outputGain = new Tone.Gain(0);
    osc1.connect(outputGain);
    osc2.connect(outputGain);
    highGain.connect(outputGain);
    ringGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Saturn', {
      nodes: [osc1, osc2, lfo1, osc3, lfo2, highGain, ringNoise, ringFilter, ringGain],
      outputGain,
      baseVolume: 0.25
    });
  }

  // ==================== URANUS ====================
  createUranusSound() {
    // Cold, distant, sparse whistlers
    const noise = new Tone.Noise('pink').start();
    const filter = new Tone.Filter(1000, 'bandpass');
    filter.Q.value = 5;

    // Very slow, sparse modulation
    const lfo = new Tone.LFO(0.02, 0.02, 0.1).start();
    const ampGain = new Tone.Gain();
    lfo.connect(ampGain.gain);

    noise.connect(filter);
    filter.connect(ampGain);

    // Ghostly whistler
    const whistler = new Tone.Oscillator(1500, 'sine').start();
    const whistlerLFO = new Tone.LFO(0.1, 800, 2000).start();
    whistlerLFO.connect(whistler.frequency);
    const whistlerGain = new Tone.Gain(0.03);
    whistler.connect(whistlerGain);

    const outputGain = new Tone.Gain(0);
    ampGain.connect(outputGain);
    whistlerGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Uranus', {
      nodes: [noise, filter, lfo, ampGain, whistler, whistlerLFO, whistlerGain],
      outputGain,
      baseVolume: 0.15
    });
  }

  // ==================== NEPTUNE ====================
  createNeptuneSound() {
    // Deep wind + distant ethereal quality
    const wind = new Tone.Noise('brown').start();
    const windFilter = new Tone.Filter(100, 'lowpass');

    // Ethereal pad
    const pad1 = new Tone.Oscillator(60, 'sine').start();
    const pad2 = new Tone.Oscillator(90, 'sine').start();
    const padLFO = new Tone.LFO(0.01, 0.05, 0.15).start();
    const padGain = new Tone.Gain();
    padLFO.connect(padGain.gain);
    pad1.connect(padGain);
    pad2.connect(padGain);

    wind.connect(windFilter);

    const outputGain = new Tone.Gain(0);
    windFilter.connect(outputGain);
    padGain.connect(outputGain);
    outputGain.connect(this.masterGain);

    this.planetSounds.set('Neptune', {
      nodes: [wind, windFilter, pad1, pad2, padLFO, padGain],
      outputGain,
      baseVolume: 0.2
    });
  }

  // ==================== CONTROL METHODS ====================

  /**
   * Set volume for a specific planet (0-1)
   */
  setPlanetVolume(planetName, volume) {
    const sound = this.planetSounds.get(planetName);
    if (sound && sound.outputGain) {
      // Smooth transition
      sound.outputGain.gain.rampTo(volume * sound.baseVolume, 0.5);
    }
  }

  /**
   * Fade in planet sound
   */
  fadeIn(planetName, duration = 2) {
    const sound = this.planetSounds.get(planetName);
    if (sound && sound.outputGain) {
      sound.outputGain.gain.rampTo(sound.baseVolume, duration);
    }
  }

  /**
   * Fade out planet sound
   */
  fadeOut(planetName, duration = 2) {
    const sound = this.planetSounds.get(planetName);
    if (sound && sound.outputGain) {
      sound.outputGain.gain.rampTo(0, duration);
    }
  }

  /**
   * Fade out all planet sounds
   */
  fadeOutAll(duration = 1) {
    this.planetSounds.forEach((sound, name) => {
      this.fadeOut(name, duration);
    });
  }

  /**
   * Check if a planet has a sound defined
   */
  hasSound(planetName) {
    return this.planetSounds.has(planetName);
  }

  /**
   * Update - call in animation loop for random triggers
   */
  update(deltaTime) {
    if (!this.initialized) return;

    // Mars metallic sounds
    const mars = this.planetSounds.get('Mars');
    if (mars && mars.outputGain.gain.value > 0.01 && mars.triggerMetal) {
      mars.triggerMetal();
    }
  }

  /**
   * Cleanup all audio nodes
   */
  dispose() {
    this.planetSounds.forEach(sound => {
      sound.nodes.forEach(node => {
        try {
          if (node.stop) node.stop();
          if (node.dispose) node.dispose();
        } catch (e) {
          // Ignore disposal errors
        }
      });
      try {
        if (sound.outputGain) sound.outputGain.dispose();
      } catch (e) {
        // Ignore
      }
    });
    this.planetSounds.clear();
    this.initialized = false;
  }
}
