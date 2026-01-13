/**
 * Dynamic Generative Music System
 *
 * Architecture:
 * - Vertical layering: Pad (always) → Arpeggio (exploration) → Melody (focus)
 * - Lydian mode for "space wonder" aesthetic
 * - Probabilistic note triggering for non-repetitive patterns
 * - Responds to zone (inner/outer/interstellar) and time warp
 */

import * as Tone from 'tone';

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
  }

  /**
   * Initialize all music layers
   */
  init() {
    this.createPadLayer();
    this.createArpeggioLayer();
    this.createMelodyLayer();
    this.createBassLayer();

    // Setup transport for synchronized playback
    Tone.Transport.bpm.value = 60;

    // Start with pad only
    this.setIntensity(0.3);
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

    // Arpeggio pattern - probabilistic triggering
    const pattern = new Tone.Loop((time) => {
      if (Math.random() < 0.25) { // 25% chance per beat
        const note = self.getRandomNote();
        const velocity = 0.3 + Math.random() * 0.3;
        synth.triggerAttackRelease(note, '4n', time, velocity);
      }
    }, '4n');

    this.layers.arpeggio = {
      synth,
      delay,
      reverb,
      gain,
      pattern,
      baseVolume: 0.15
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

    // Sparse melody - very low probability, high register notes
    const pattern = new Tone.Loop((time) => {
      if (Math.random() < 0.08) { // 8% chance - very sparse
        // Pick from upper part of scale
        const upperScale = self.scale.slice(-5);
        const note = upperScale[Math.floor(Math.random() * upperScale.length)];
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

    // Very sparse bass notes - root notes only
    const pattern = new Tone.Loop((time) => {
      if (Math.random() < 0.05) { // 5% chance
        const rootNote = self.scale[0]; // Always root
        synth.triggerAttackRelease(rootNote, '1n', time, 0.5);
      }
    }, '1n');

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
  }
}
