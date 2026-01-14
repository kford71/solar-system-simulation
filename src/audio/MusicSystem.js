/**
 * Dynamic Generative Music System
 *
 * Architecture:
 * - Vertical layering: Pad (always) → Arpeggio (exploration) → Melody (focus)
 * - Lydian mode for "space wonder" aesthetic
 * - Probabilistic note triggering for non-repetitive patterns
 * - Responds to zone (inner/outer/interstellar) and time warp
 *
 * Enhanced with generative techniques (2024-2025):
 * - Markov chain melodic generation
 * - Euclidean rhythms for interesting patterns
 * - Procedural chord progressions
 * - Tension curves for dynamic response
 */

import * as Tone from 'tone';
import {
  MelodyMarkov,
  EuclideanRhythm,
  ChordProgressionGenerator,
  TensionCurve,
  MotifSystem
} from './GenerativeMusic.js';

export class MusicSystem {
  constructor(masterGain) {
    this.masterGain = masterGain;
    this.isPlaying = false;
    this.currentZone = 'inner';
    this.intensity = 0.5; // 0-1, affects layer activation

    // Musical scales (Lydian mode - raised 4th for wonder/mystery)
    this.scales = {
      inner: ['C3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4', 'G4'],
      outer: ['A2', 'B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A3', 'B3', 'C#4', 'D#4', 'E4'],
      interstellar: ['E2', 'F#2', 'G#2', 'A#2', 'B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3']
    };

    // Current scale
    this.scale = this.scales.inner;

    // Layers
    this.layers = {};

    // Volume multiplier
    this.volumeMultiplier = 1;

    // Generative music components
    this.melodyMarkov = new MelodyMarkov(2); // 2nd order Markov chain
    this.chordGenerator = new ChordProgressionGenerator();
    this.tensionCurve = new TensionCurve();
    this.motifSystem = new MotifSystem();

    // Current chord progression
    this.currentProgression = [];
    this.progressionIndex = 0;

    // Euclidean rhythm patterns
    this.rhythmPatterns = {
      arpeggio: EuclideanRhythm.generate(5, 16),  // 5 hits in 16 steps
      bass: EuclideanRhythm.generate(3, 8),       // 3 hits in 8 steps
      percussion: EuclideanRhythm.generate(4, 12) // 4 hits in 12 steps
    };
  }

  /**
   * Initialize all music layers
   */
  init() {
    // Initialize generative components
    this.initGenerativeComponents();

    this.createPadLayer();
    this.createArpeggioLayer();
    this.createMelodyLayer();
    this.createBassLayer();

    // Setup transport for synchronized playback
    Tone.Transport.bpm.value = 60;

    // Generate initial chord progression
    this.generateNewProgression();

    // Start with pad only
    this.setIntensity(0.3);
  }

  /**
   * Initialize generative music components
   */
  initGenerativeComponents() {
    // Train Markov chain with Lydian patterns
    this.melodyMarkov.trainLydianPatterns();

    // Add zone-specific patterns
    const innerPatterns = [
      ['C4', 'E4', 'G4', 'B4', 'C5', 'B4', 'G4', 'E4'],
      ['D4', 'F#4', 'A4', 'D5', 'A4', 'F#4'],
      ['G4', 'B4', 'D5', 'G5', 'D5', 'B4', 'G4'],
    ];
    innerPatterns.forEach(p => this.melodyMarkov.train(p));

    // Store some motifs for later use
    this.motifSystem.store('wonder', ['C4', 'E4', 'G4', 'B4']);
    this.motifSystem.store('discovery', ['G4', 'A4', 'B4', 'D5', 'C5']);
    this.motifSystem.store('mystery', ['E4', 'F#4', 'G4', 'F#4', 'E4']);
  }

  /**
   * Generate a new chord progression
   */
  generateNewProgression() {
    // Generate 8 chords
    this.currentProgression = this.chordGenerator.generateWithNotes(8, 'C', 3);
    this.progressionIndex = 0;
    console.log('Generated progression:', this.currentProgression.map(c => c.numeral).join(' → '));
  }

  /**
   * Get current chord from progression
   */
  getCurrentChord() {
    if (this.currentProgression.length === 0) return null;
    return this.currentProgression[this.progressionIndex % this.currentProgression.length];
  }

  /**
   * Advance to next chord in progression
   */
  advanceChord() {
    this.progressionIndex++;
    if (this.progressionIndex >= this.currentProgression.length) {
      // Generate new progression every cycle
      this.generateNewProgression();
    }
  }

  // ==================== PAD LAYER (Always on) ====================
  createPadLayer() {
    // Warm evolving pad using multiple detuned oscillators
    const osc1 = new Tone.Oscillator({ frequency: 'C3', type: 'sine' });
    const osc2 = new Tone.Oscillator({ frequency: 'G3', type: 'sine' });
    const osc3 = new Tone.Oscillator({ frequency: 'C4', type: 'triangle' });

    // Slow detune LFO for organic movement
    const detuneLFO = new Tone.LFO(0.05, -10, 10).start();
    detuneLFO.connect(osc2.detune);

    // Filter with slow sweep
    const filter = new Tone.Filter(800, 'lowpass');
    const filterLFO = new Tone.LFO(0.02, 400, 1200).start();
    filterLFO.connect(filter.frequency);

    // Reverb for space
    const reverb = new Tone.Reverb({ decay: 8, wet: 0.6 });

    // Output gain
    const gain = new Tone.Gain(0);

    // Connect
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(reverb);
    reverb.connect(gain);
    gain.connect(this.masterGain);

    this.layers.pad = {
      oscillators: [osc1, osc2, osc3],
      filter,
      filterLFO,
      detuneLFO,
      reverb,
      gain,
      baseVolume: 0.12
    };
  }

  // ==================== ARPEGGIO LAYER (Exploration) ====================
  createArpeggioLayer() {
    // Synth for arpeggios
    const synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'triangle' },
      envelope: {
        attack: 0.02,
        decay: 0.3,
        sustain: 0.2,
        release: 1.5
      }
    });

    // Delay for space
    const delay = new Tone.PingPongDelay({
      delayTime: '8n',
      feedback: 0.3,
      wet: 0.4
    });

    // Reverb
    const reverb = new Tone.Reverb({ decay: 6, wet: 0.5 });

    // Output
    const gain = new Tone.Gain(0);

    synth.connect(delay);
    delay.connect(reverb);
    reverb.connect(gain);
    gain.connect(this.masterGain);

    // Store reference to this for callback
    const self = this;

    // Step counter for Euclidean rhythm
    let stepIndex = 0;

    // Arpeggio pattern - using Euclidean rhythm instead of pure probability
    const pattern = new Tone.Loop((time) => {
      const euclideanPattern = self.rhythmPatterns.arpeggio;
      const shouldPlay = euclideanPattern[stepIndex % euclideanPattern.length];

      // Add some probability on top of Euclidean pattern for variety
      const tensionProb = 0.2 + self.tensionCurve.getTension() * 0.3;

      if (shouldPlay || Math.random() < tensionProb * 0.3) {
        // Use Markov chain to generate note, or fall back to random
        let note;
        if (self.melodyMarkov && Math.random() < 0.6) {
          const generated = self.melodyMarkov.generate(1);
          note = generated[0] || self.getRandomNote();
        } else {
          note = self.getRandomNote();
        }

        const velocity = 0.3 + Math.random() * 0.3;
        synth.triggerAttackRelease(note, '4n', time, velocity);
      }

      stepIndex++;
    }, '16n'); // 16th notes for Euclidean pattern

    this.layers.arpeggio = {
      synth,
      delay,
      reverb,
      gain,
      pattern,
      baseVolume: 0.15,
      stepIndex: 0
    };
  }

  // ==================== MELODY LAYER (Focus/Discovery) ====================
  createMelodyLayer() {
    // Lead synth - slightly brighter
    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.5,
        release: 2
      }
    });

    // Vibrato
    const vibrato = new Tone.Vibrato({
      frequency: 4,
      depth: 0.1
    });

    // Long reverb
    const reverb = new Tone.Reverb({ decay: 10, wet: 0.7 });

    // Output
    const gain = new Tone.Gain(0);

    synth.connect(vibrato);
    vibrato.connect(reverb);
    reverb.connect(gain);
    gain.connect(this.masterGain);

    // Store reference to this for callback
    const self = this;

    // Track current motif playback
    let currentMotif = [];
    let motifIndex = 0;
    let barsWithoutMotif = 0;

    // Melody pattern - uses motifs and Markov chains
    const pattern = new Tone.Loop((time) => {
      // Tension affects melody probability
      const tensionProb = 0.05 + self.tensionCurve.getTension() * 0.15;

      // If we have a motif playing, continue it
      if (currentMotif.length > 0 && motifIndex < currentMotif.length) {
        const note = currentMotif[motifIndex];
        const velocity = 0.4 + Math.random() * 0.2;
        synth.triggerAttackRelease(note, '2n', time, velocity);
        motifIndex++;

        if (motifIndex >= currentMotif.length) {
          currentMotif = [];
          motifIndex = 0;
        }
        return;
      }

      // Decide whether to start a new motif or play a random note
      barsWithoutMotif++;

      if (barsWithoutMotif > 8 && Math.random() < 0.3) {
        // Start a motif variation every ~8 bars
        const motifNames = ['wonder', 'discovery', 'mystery'];
        const motifName = motifNames[Math.floor(Math.random() * motifNames.length)];
        currentMotif = self.motifSystem.getVariation(motifName);
        motifIndex = 0;
        barsWithoutMotif = 0;

        if (currentMotif.length > 0) {
          const note = currentMotif[motifIndex];
          const velocity = 0.5;
          synth.triggerAttackRelease(note, '2n', time, velocity);
          motifIndex++;
        }
      } else if (Math.random() < tensionProb) {
        // Generate a note using Markov chain or random
        let note;
        if (self.melodyMarkov && Math.random() < 0.7) {
          const upperScale = self.scale.slice(-5);
          const startNote = upperScale[Math.floor(Math.random() * upperScale.length)];
          const generated = self.melodyMarkov.generate(2, startNote);
          note = generated[1] || startNote;
        } else {
          const upperScale = self.scale.slice(-5);
          note = upperScale[Math.floor(Math.random() * upperScale.length)];
        }

        const velocity = 0.4 + Math.random() * 0.2;
        synth.triggerAttackRelease(note, '2n', time, velocity);
      }
    }, '2n');

    this.layers.melody = {
      synth,
      vibrato,
      reverb,
      gain,
      pattern,
      baseVolume: 0.1
    };
  }

  // ==================== BASS LAYER (Grounding) ====================
  createBassLayer() {
    // Sub bass
    const synth = new Tone.MonoSynth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.5,
        decay: 0.3,
        sustain: 0.8,
        release: 3
      },
      filterEnvelope: {
        attack: 0.5,
        decay: 0,
        sustain: 1,
        release: 2,
        baseFrequency: 60,
        octaves: 1
      }
    });

    // Output
    const gain = new Tone.Gain(0);

    synth.connect(gain);
    gain.connect(this.masterGain);

    // Store reference to this for callback
    const self = this;

    // Step counter for Euclidean rhythm
    let stepIndex = 0;
    let chordChangeCounter = 0;

    // Bass pattern - uses Euclidean rhythm and follows chord progression
    const pattern = new Tone.Loop((time) => {
      const euclideanPattern = self.rhythmPatterns.bass;
      const shouldPlay = euclideanPattern[stepIndex % euclideanPattern.length];

      if (shouldPlay) {
        // Get bass note from current chord or use root
        let bassNote;
        const currentChord = self.getCurrentChord();

        if (currentChord && currentChord.notes && currentChord.notes.length > 0) {
          // Use root of current chord, transposed down an octave
          bassNote = currentChord.notes[0].replace(/\d/, '2'); // Force octave 2
        } else {
          bassNote = self.scale[0]; // Default to scale root
        }

        const velocity = 0.5 + self.tensionCurve.getTension() * 0.2;
        synth.triggerAttackRelease(bassNote, '1n', time, velocity);
      }

      stepIndex++;

      // Advance chord every 2 bars (8 beats at quarter note resolution)
      chordChangeCounter++;
      if (chordChangeCounter >= 8) {
        self.advanceChord();
        chordChangeCounter = 0;
      }
    }, '4n');

    this.layers.bass = {
      synth,
      gain,
      pattern,
      baseVolume: 0.2
    };
  }

  // ==================== CONTROL METHODS ====================

  /**
   * Get random note from current scale
   */
  getRandomNote() {
    return this.scale[Math.floor(Math.random() * this.scale.length)];
  }

  /**
   * Start the music system
   */
  start() {
    if (this.isPlaying) return;

    // Start oscillators
    this.layers.pad.oscillators.forEach(osc => osc.start());

    // Start patterns
    this.layers.arpeggio.pattern.start(0);
    this.layers.melody.pattern.start(0);
    this.layers.bass.pattern.start(0);

    // Start transport
    Tone.Transport.start();

    this.isPlaying = true;
    console.log('Music system started');
  }

  /**
   * Stop the music system
   */
  stop() {
    if (!this.isPlaying) return;

    // Stop transport
    Tone.Transport.stop();

    // Stop patterns
    this.layers.arpeggio.pattern.stop();
    this.layers.melody.pattern.stop();
    this.layers.bass.pattern.stop();

    // Stop oscillators
    this.layers.pad.oscillators.forEach(osc => osc.stop());

    this.isPlaying = false;
  }

  /**
   * Set intensity (0-1) - controls which layers are active
   * 0.0-0.3: Pad only
   * 0.3-0.6: Pad + Arpeggio
   * 0.6-0.8: Pad + Arpeggio + Bass
   * 0.8-1.0: All layers including melody
   */
  setIntensity(intensity) {
    this.intensity = Math.max(0, Math.min(1, intensity));

    const pad = this.layers.pad;
    const arp = this.layers.arpeggio;
    const melody = this.layers.melody;
    const bass = this.layers.bass;

    const vol = this.volumeMultiplier;
    // Use small minimum to avoid exponential ramp errors with 0
    const min = 0.0001;

    // Pad always audible when intensity > 0
    if (pad && pad.gain) {
      const padVol = intensity > 0.1 ? pad.baseVolume * vol : min;
      pad.gain.gain.linearRampTo(padVol, 2);
    }

    // Arpeggio fades in at 0.3
    if (arp && arp.gain) {
      const arpVol = intensity > 0.3 ? (intensity - 0.3) / 0.7 * arp.baseVolume * vol : min;
      arp.gain.gain.linearRampTo(Math.max(arpVol, min), 2);
    }

    // Bass at 0.5
    if (bass && bass.gain) {
      const bassVol = intensity > 0.5 ? (intensity - 0.5) / 0.5 * bass.baseVolume * vol : min;
      bass.gain.gain.linearRampTo(Math.max(bassVol, min), 2);
    }

    // Melody at 0.7
    if (melody && melody.gain) {
      const melVol = intensity > 0.7 ? (intensity - 0.7) / 0.3 * melody.baseVolume * vol : min;
      melody.gain.gain.linearRampTo(Math.max(melVol, min), 2);
    }
  }

  /**
   * Change zone - shifts scale and tempo
   */
  setZone(zone) {
    if (zone === this.currentZone) return;
    this.currentZone = zone;

    // Change scale
    this.scale = this.scales[zone] || this.scales.inner;

    // Adjust tempo and feel
    switch (zone) {
      case 'inner':
        Tone.Transport.bpm.value = 65;
        if (this.layers.pad && this.layers.pad.filter) {
          this.layers.pad.filter.frequency.linearRampTo(1000, 4);
        }
        break;

      case 'outer':
        Tone.Transport.bpm.value = 50;
        if (this.layers.pad && this.layers.pad.filter) {
          this.layers.pad.filter.frequency.linearRampTo(600, 4);
        }
        break;

      case 'interstellar':
        Tone.Transport.bpm.value = 40;
        if (this.layers.pad && this.layers.pad.filter) {
          this.layers.pad.filter.frequency.linearRampTo(300, 4);
        }
        break;
    }

    // Update pad frequencies to new root
    const root = this.scale[0];
    const fifth = this.scale[4];
    const octave = this.scale[7] || this.scale[0];

    if (this.layers.pad && this.layers.pad.oscillators) {
      this.layers.pad.oscillators[0].frequency.linearRampTo(root, 4);
      this.layers.pad.oscillators[1].frequency.linearRampTo(fifth, 4);
      this.layers.pad.oscillators[2].frequency.linearRampTo(octave, 4);
    }

    console.log(`Music zone changed to: ${zone}`);
  }

  /**
   * Respond to time warp speed
   * Faster time = more intense/dense music
   */
  setTimeWarp(speed) {
    // speed 1 = normal, higher = faster time
    const clampedSpeed = Math.max(0.1, Math.min(10, speed));

    // Subtle tempo increase with time warp
    const baseTempo = this.currentZone === 'inner' ? 65 :
                      this.currentZone === 'outer' ? 50 : 40;
    const warpedTempo = baseTempo * (1 + (clampedSpeed - 1) * 0.1);
    Tone.Transport.bpm.rampTo(Math.min(warpedTempo, 100), 1);
  }

  /**
   * Trigger discovery flourish (when focusing on new object)
   */
  triggerDiscovery() {
    if (!this.layers.melody || !this.layers.melody.synth) return;

    // Play ascending notes
    const now = Tone.now();
    const notes = [this.scale[0], this.scale[2], this.scale[4], this.scale[7] || this.scale[0]];

    notes.forEach((note, i) => {
      this.layers.melody.synth.triggerAttackRelease(
        note, '8n', now + i * 0.15, 0.4
      );
    });
  }

  /**
   * Set master volume for music (0-1)
   */
  setVolume(volume) {
    this.volumeMultiplier = Math.max(0, Math.min(1, volume));
    // Reapply intensity to update all volumes
    this.setIntensity(this.intensity);
  }

  /**
   * Mute/unmute
   */
  setMuted(muted) {
    Object.values(this.layers).forEach(layer => {
      if (layer && layer.gain) {
        if (muted) {
          layer.gain.gain.rampTo(0, 0.5);
        } else {
          // Reapply current intensity
          this.setIntensity(this.intensity);
        }
      }
    });
  }

  /**
   * Update music system state (call from game loop)
   * @param {Object} gameState - Current game state
   */
  updateFromGameState(gameState) {
    // Calculate tension from game state
    const newTension = this.tensionCurve.calculateFromGameState(gameState);
    this.tensionCurve.setTargetTension(newTension);
    this.tensionCurve.update();

    // Update intensity to match tension
    this.setIntensity(0.3 + this.tensionCurve.getTension() * 0.5);

    // Update tempo based on tension
    const targetTempo = this.tensionCurve.getParameterValue('tempo');
    if (Math.abs(Tone.Transport.bpm.value - targetTempo) > 2) {
      Tone.Transport.bpm.rampTo(targetTempo, 4);
    }

    // Update pad filter based on tension
    if (this.layers.pad && this.layers.pad.filter) {
      const filterFreq = this.tensionCurve.getParameterValue('filterCutoff');
      this.layers.pad.filter.frequency.rampTo(filterFreq, 2);
    }
  }

  /**
   * Regenerate Euclidean patterns with new parameters
   * @param {string} patternName - Which pattern to regenerate
   * @param {number} pulses - Number of pulses
   * @param {number} steps - Number of steps
   */
  setEuclideanPattern(patternName, pulses, steps) {
    if (this.rhythmPatterns[patternName]) {
      this.rhythmPatterns[patternName] = EuclideanRhythm.generate(pulses, steps);
      console.log(`Updated ${patternName} Euclidean pattern: ${pulses}/${steps}`);
    }
  }

  /**
   * Get current generative music state for debugging
   */
  getGenerativeState() {
    return {
      tension: this.tensionCurve.getTension(),
      tensionParams: this.tensionCurve.getAllParameters(),
      currentChord: this.getCurrentChord(),
      progressionIndex: this.progressionIndex,
      progression: this.currentProgression.map(c => c.numeral),
      rhythmPatterns: {
        arpeggio: this.rhythmPatterns.arpeggio.map(b => b ? 'X' : '.').join(''),
        bass: this.rhythmPatterns.bass.map(b => b ? 'X' : '.').join('')
      }
    };
  }

  /**
   * Cleanup
   */
  dispose() {
    this.stop();

    Object.values(this.layers).forEach(layer => {
      if (layer) {
        Object.values(layer).forEach(node => {
          if (node && typeof node.dispose === 'function') {
            try {
              node.dispose();
            } catch (e) {
              // Ignore disposal errors
            }
          }
        });
      }
    });

    this.layers = {};
    this.currentProgression = [];
    this.progressionIndex = 0;
  }
}
