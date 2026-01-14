/**
 * SynthPool - Object pooling for Tone.js synthesizers
 *
 * Performance optimization based on research:
 * - Pre-allocates synths to avoid runtime allocation
 * - Reuses synths instead of creating/disposing
 * - Significantly reduces GC pressure and audio glitches
 * - Prevents memory leaks from abandoned synths
 *
 * Usage:
 *   const synth = synthPool.acquire('poly');
 *   synth.triggerAttackRelease('C4', '8n');
 *   synthPool.release(synth); // Returns to pool
 */

import * as Tone from 'tone';

class SynthPool {
  constructor() {
    if (SynthPool.instance) {
      return SynthPool.instance;
    }
    SynthPool.instance = this;

    this.initialized = false;
    this.pools = {
      poly: [],      // PolySynth for chords
      mono: [],      // MonoSynth for bass/leads
      membrane: [],  // MembraneSynth for percussion
      noise: [],     // NoiseSynth for effects
      fm: []         // FMSynth for complex tones
    };

    // Track which synths are in use
    this.inUse = new Set();

    // Pool sizes
    this.poolSizes = {
      poly: 4,
      mono: 4,
      membrane: 2,
      noise: 4,
      fm: 2
    };

    // Connection target
    this.output = null;
  }

  /**
   * Initialize pools with pre-allocated synths
   * @param {Tone.Gain} output - Output node to connect synths to
   */
  init(output) {
    if (this.initialized) return;

    this.output = output;

    // Pre-allocate PolySynths
    for (let i = 0; i < this.poolSizes.poly; i++) {
      this.pools.poly.push(this.createPolySynth());
    }

    // Pre-allocate MonoSynths
    for (let i = 0; i < this.poolSizes.mono; i++) {
      this.pools.mono.push(this.createMonoSynth());
    }

    // Pre-allocate MembraneSynths
    for (let i = 0; i < this.poolSizes.membrane; i++) {
      this.pools.membrane.push(this.createMembraneSynth());
    }

    // Pre-allocate NoiseSynths
    for (let i = 0; i < this.poolSizes.noise; i++) {
      this.pools.noise.push(this.createNoiseSynth());
    }

    // Pre-allocate FMSynths
    for (let i = 0; i < this.poolSizes.fm; i++) {
      this.pools.fm.push(this.createFMSynth());
    }

    this.initialized = true;
    console.log('SynthPool initialized with pre-allocated synths');
  }

  // Factory methods for each synth type
  createPolySynth() {
    const synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 0.3
      }
    });
    synth.volume.value = -10;
    synth.connect(this.output);
    synth._poolType = 'poly';
    return synth;
  }

  createMonoSynth() {
    const synth = new Tone.MonoSynth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.5,
        release: 0.5
      },
      filterEnvelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.5,
        release: 0.5,
        baseFrequency: 200,
        octaves: 2
      }
    });
    synth.volume.value = -15;
    synth.connect(this.output);
    synth._poolType = 'mono';
    return synth;
  }

  createMembraneSynth() {
    const synth = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 4,
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0,
        release: 0.2
      }
    });
    synth.volume.value = -15;
    synth.connect(this.output);
    synth._poolType = 'membrane';
    return synth;
  }

  createNoiseSynth() {
    const synth = new Tone.NoiseSynth({
      noise: { type: 'white' },
      envelope: {
        attack: 0.001,
        decay: 0.05,
        sustain: 0,
        release: 0.01
      }
    });
    synth.volume.value = -25;
    synth.connect(this.output);
    synth._poolType = 'noise';
    return synth;
  }

  createFMSynth() {
    const synth = new Tone.FMSynth({
      harmonicity: 3,
      modulationIndex: 10,
      oscillator: { type: 'sine' },
      modulation: { type: 'sine' },
      envelope: {
        attack: 0.5,
        decay: 0.2,
        sustain: 0.5,
        release: 1
      },
      modulationEnvelope: {
        attack: 0.5,
        decay: 0.2,
        sustain: 0.5,
        release: 1
      }
    });
    synth.volume.value = -20;
    synth.connect(this.output);
    synth._poolType = 'fm';
    return synth;
  }

  /**
   * Acquire a synth from the pool
   * @param {string} type - 'poly', 'mono', 'membrane', 'noise', or 'fm'
   * @returns {Tone.Synth|null} - A synth instance or null if pool exhausted
   */
  acquire(type) {
    const pool = this.pools[type];
    if (!pool) {
      console.warn(`Unknown synth type: ${type}`);
      return null;
    }

    // Find available synth
    const synth = pool.find(s => !this.inUse.has(s));

    if (synth) {
      this.inUse.add(synth);
      return synth;
    }

    // Pool exhausted - create temporary synth (will be disposed on release)
    console.warn(`Pool exhausted for ${type}, creating temporary synth`);
    const tempSynth = this[`create${type.charAt(0).toUpperCase() + type.slice(1)}Synth`]();
    tempSynth._isTemporary = true;
    this.inUse.add(tempSynth);
    return tempSynth;
  }

  /**
   * Release a synth back to the pool
   * @param {Tone.Synth} synth - The synth to release
   */
  release(synth) {
    if (!synth) return;

    // Stop any playing notes
    try {
      if (synth.releaseAll) {
        synth.releaseAll();
      } else if (synth.triggerRelease) {
        synth.triggerRelease();
      }
    } catch (e) {
      // Ignore errors during release
    }

    // If temporary, dispose it
    if (synth._isTemporary) {
      this.inUse.delete(synth);
      synth.dispose();
      return;
    }

    // Return to pool
    this.inUse.delete(synth);
  }

  /**
   * Get pool statistics
   * @returns {Object} - Stats about pool usage
   */
  getStats() {
    const stats = {};
    Object.keys(this.pools).forEach(type => {
      const pool = this.pools[type];
      const inUseCount = pool.filter(s => this.inUse.has(s)).length;
      stats[type] = {
        total: pool.length,
        inUse: inUseCount,
        available: pool.length - inUseCount
      };
    });
    return stats;
  }

  /**
   * Dispose all synths in all pools
   */
  dispose() {
    Object.values(this.pools).forEach(pool => {
      pool.forEach(synth => {
        try {
          synth.dispose();
        } catch (e) {
          // Ignore disposal errors
        }
      });
    });

    this.pools = {
      poly: [],
      mono: [],
      membrane: [],
      noise: [],
      fm: []
    };
    this.inUse.clear();
    this.initialized = false;
    SynthPool.instance = null;
  }
}

// Export singleton
export const synthPool = new SynthPool();
export default synthPool;
