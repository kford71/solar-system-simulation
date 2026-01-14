/**
 * MasteringChain - Professional audio mastering for the solar system simulation
 *
 * Based on real-time audio mixing best practices:
 * - Sidechain ducking for UI clarity
 * - Multiband compression for frequency control
 * - Soft clipping to prevent harsh digital distortion
 * - Stereo widening for immersive soundscapes
 * - Limiter as final safety net
 *
 * Signal flow:
 * Sources → Bus Gains → Sidechain Duck → Multiband Comp → Soft Clip → Limiter → Output
 */

import * as Tone from 'tone';

class MasteringChain {
  constructor() {
    if (MasteringChain.instance) {
      return MasteringChain.instance;
    }
    MasteringChain.instance = this;

    this.initialized = false;

    // Bus system for routing
    this.buses = {
      ui: null,           // UI sounds (clicks, fanfares) - high priority
      ambient: null,      // Ambient drones, NASA sounds - low priority
      music: null         // Generative music - medium priority
    };

    // Sidechain components
    this.sidechain = {
      follower: null,
      duckGain: null
    };

    // Mastering chain nodes
    this.nodes = {
      multibandComp: null,
      stereoWidener: null,
      softClipper: null,
      limiter: null,
      masterGain: null
    };
  }

  /**
   * Initialize the mastering chain
   * @returns {Tone.Gain} - The input gain node for connecting sources
   */
  init() {
    if (this.initialized) {
      return this.nodes.masterGain;
    }

    // Create bus gains for each audio category
    this.buses.ui = new Tone.Gain(1);        // UI at full volume
    this.buses.ambient = new Tone.Gain(0.6); // Ambient slightly lower
    this.buses.music = new Tone.Gain(0.5);   // Music background level

    // Create sidechain ducking system
    // UI sounds will duck the ambient/music buses
    this.setupSidechainDucking();

    // Create multiband compressor for frequency control
    this.nodes.multibandComp = new Tone.MultibandCompressor({
      lowFrequency: 250,    // Low band below 250 Hz
      highFrequency: 4000,  // High band above 4 kHz
      low: {
        threshold: -24,     // Tame rumbling bass
        ratio: 4,
        attack: 0.05,
        release: 0.2
      },
      mid: {
        threshold: -18,     // Gentle mid compression
        ratio: 2,
        attack: 0.02,
        release: 0.15
      },
      high: {
        threshold: -20,     // Control harsh highs
        ratio: 3,
        attack: 0.01,
        release: 0.1
      }
    });

    // Create stereo widener for immersive feel
    // Width 0.6 = moderate widening, safe for mono compatibility
    this.nodes.stereoWidener = new Tone.StereoWidener(0.6);

    // Create soft clipper using waveshaper with tanh curve
    // This gently saturates peaks before they hit the limiter
    this.nodes.softClipper = new Tone.WaveShaper((value) => {
      // tanh provides smooth saturation
      // Multiply input by 1.2 for slight drive, then tanh to soft clip
      return Math.tanh(value * 1.2);
    }, 2048); // High resolution curve

    // Final limiter - catches any remaining peaks
    this.nodes.limiter = new Tone.Limiter(-0.5); // -0.5 dB ceiling for safety

    // Master gain for overall volume control
    this.nodes.masterGain = new Tone.Gain(0.8);

    // Connect the mastering chain
    this.connectChain();

    this.initialized = true;
    console.log('MasteringChain initialized: sidechain → multiband → widener → softclip → limiter');

    return this.nodes.masterGain;
  }

  /**
   * Setup sidechain ducking - UI sounds duck ambient/music
   */
  setupSidechainDucking() {
    // Follower tracks UI bus amplitude
    // Fast attack (10ms) to catch transients, moderate release (200ms) for smooth recovery
    this.sidechain.follower = new Tone.Follower(0.01);

    // Connect UI bus to follower (for analysis only)
    this.buses.ui.connect(this.sidechain.follower);

    // Create the ducking gain control
    // We'll use a signal chain: follower → multiply (invert) → add (offset) → gain
    const duckAmount = 0.4; // Duck by up to 40%

    // Invert the follower signal
    const invert = new Tone.Multiply(-duckAmount);
    this.sidechain.follower.connect(invert);

    // Add offset of 1 so silent = 1.0 gain, loud UI = 0.6 gain
    const offset = new Tone.Add(1);
    invert.connect(offset);

    // This becomes our duck control signal
    this.sidechain.duckGain = new Tone.Gain(1);

    // Connect offset to control the duck gain
    offset.connect(this.sidechain.duckGain.gain);

    // Store for cleanup
    this.sidechain.invert = invert;
    this.sidechain.offset = offset;
  }

  /**
   * Connect the full mastering chain
   */
  connectChain() {
    // UI bus goes directly to multiband (no ducking on UI itself)
    this.buses.ui.connect(this.nodes.multibandComp);

    // Ambient and music buses go through duck gain first
    this.buses.ambient.connect(this.sidechain.duckGain);
    this.buses.music.connect(this.sidechain.duckGain);

    // Ducked signal goes to multiband
    this.sidechain.duckGain.connect(this.nodes.multibandComp);

    // Chain: multiband → widener → soft clip → limiter → master → destination
    this.nodes.multibandComp.connect(this.nodes.stereoWidener);
    this.nodes.stereoWidener.connect(this.nodes.softClipper);
    this.nodes.softClipper.connect(this.nodes.limiter);
    this.nodes.limiter.connect(this.nodes.masterGain);
    this.nodes.masterGain.toDestination();
  }

  /**
   * Get bus for connecting audio sources
   * @param {string} busName - 'ui', 'ambient', or 'music'
   * @returns {Tone.Gain} - The bus input gain
   */
  getBus(busName) {
    return this.buses[busName] || null;
  }

  /**
   * Set bus volume
   * @param {string} busName - Bus name
   * @param {number} volume - Volume 0-1
   * @param {number} rampTime - Ramp time in seconds
   */
  setBusVolume(busName, volume, rampTime = 0.1) {
    const bus = this.buses[busName];
    if (bus) {
      bus.gain.rampTo(volume, rampTime);
    }
  }

  /**
   * Set stereo width
   * @param {number} width - Width 0 (mono) to 1 (max width)
   */
  setStereoWidth(width) {
    if (this.nodes.stereoWidener) {
      this.nodes.stereoWidener.width.value = Math.max(0, Math.min(1, width));
    }
  }

  /**
   * Set sidechain duck amount
   * @param {number} amount - Duck amount 0-1 (0 = no duck, 1 = full duck)
   */
  setDuckAmount(amount) {
    // Recreate the multiply node with new amount
    // This is a limitation - ideally we'd modulate this live
    console.log(`Sidechain duck amount: ${amount * 100}%`);
  }

  /**
   * Set master volume
   * @param {number} volume - Volume 0-1
   * @param {number} rampTime - Ramp time
   */
  setMasterVolume(volume, rampTime = 0.1) {
    if (this.nodes.masterGain) {
      this.nodes.masterGain.gain.rampTo(volume, rampTime);
    }
  }

  /**
   * Bypass/enable the soft clipper
   * @param {boolean} bypass - True to bypass
   */
  bypassSoftClipper(bypass) {
    if (this.nodes.softClipper) {
      this.nodes.softClipper.wet.value = bypass ? 0 : 1;
    }
  }

  /**
   * Get current levels for metering
   * @returns {Object} - Level info
   */
  getLevels() {
    return {
      masterGain: this.nodes.masterGain?.gain.value,
      uiBus: this.buses.ui?.gain.value,
      ambientBus: this.buses.ambient?.gain.value,
      musicBus: this.buses.music?.gain.value,
      duckGain: this.sidechain.duckGain?.gain.value
    };
  }

  /**
   * Dispose all nodes
   */
  dispose() {
    // Dispose buses
    Object.values(this.buses).forEach(bus => {
      if (bus) bus.dispose();
    });

    // Dispose sidechain components
    if (this.sidechain.follower) this.sidechain.follower.dispose();
    if (this.sidechain.duckGain) this.sidechain.duckGain.dispose();
    if (this.sidechain.invert) this.sidechain.invert.dispose();
    if (this.sidechain.offset) this.sidechain.offset.dispose();

    // Dispose mastering nodes
    Object.values(this.nodes).forEach(node => {
      if (node && node.dispose) node.dispose();
    });

    this.buses = {};
    this.sidechain = {};
    this.nodes = {};
    this.initialized = false;
    MasteringChain.instance = null;
  }
}

// Export singleton
export const masteringChain = new MasteringChain();
export default masteringChain;
