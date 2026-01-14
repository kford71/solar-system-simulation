/**
 * SharedAudioBuses - Centralized effect buses for optimal performance
 *
 * Based on Tone.js performance best practices:
 * - Shared reverb/delay buses reduce CPU load significantly
 * - Single instance of expensive effects (reverb, convolver) shared across synths
 * - Reduces memory footprint and GC pressure
 *
 * Architecture:
 * - reverbBus: Shared reverb for all spatial sounds
 * - delayBus: Shared delay for rhythmic elements
 * - filterBus: Shared filter for ambient processing
 * - All buses connect to a master compressor before output
 */

import * as Tone from 'tone';

class SharedAudioBuses {
  constructor() {
    if (SharedAudioBuses.instance) {
      return SharedAudioBuses.instance;
    }
    SharedAudioBuses.instance = this;

    this.initialized = false;
    this.buses = {};
    this.masterOutput = null;
  }

  /**
   * Initialize shared effect buses
   * @param {Tone.Gain} masterGain - The master gain node to connect to
   */
  init(masterGain) {
    if (this.initialized) return;

    this.masterOutput = masterGain;

    // Create shared reverb bus (most CPU-intensive effect)
    // Using Reverb with decay settings optimized for space sounds
    this.buses.reverb = {
      send: new Tone.Gain(1),
      effect: new Tone.Reverb({
        decay: 8,
        wet: 1,  // Fully wet - dry signal comes from source
        preDelay: 0.01
      }),
      output: new Tone.Gain(0.6)
    };

    // Create shared delay bus for rhythmic/echo effects
    this.buses.delay = {
      send: new Tone.Gain(1),
      effect: new Tone.PingPongDelay({
        delayTime: '8n',
        feedback: 0.3,
        wet: 1
      }),
      output: new Tone.Gain(0.4)
    };

    // Create shared long reverb bus for atmospheric sounds
    this.buses.longReverb = {
      send: new Tone.Gain(1),
      effect: new Tone.Reverb({
        decay: 15,
        wet: 1,
        preDelay: 0.02
      }),
      output: new Tone.Gain(0.5)
    };

    // Connect buses
    this.buses.reverb.send.connect(this.buses.reverb.effect);
    this.buses.reverb.effect.connect(this.buses.reverb.output);
    this.buses.reverb.output.connect(masterGain);

    this.buses.delay.send.connect(this.buses.delay.effect);
    this.buses.delay.effect.connect(this.buses.delay.output);
    this.buses.delay.output.connect(masterGain);

    this.buses.longReverb.send.connect(this.buses.longReverb.effect);
    this.buses.longReverb.effect.connect(this.buses.longReverb.output);
    this.buses.longReverb.output.connect(masterGain);

    this.initialized = true;
    console.log('SharedAudioBuses initialized - reverb, delay, longReverb ready');
  }

  /**
   * Get a send gain node for connecting to a bus
   * @param {string} busName - 'reverb', 'delay', or 'longReverb'
   * @param {number} amount - Send amount 0-1
   * @returns {Tone.Gain} - A gain node connected to the bus send
   */
  getSend(busName, amount = 0.5) {
    const bus = this.buses[busName];
    if (!bus) {
      console.warn(`Unknown bus: ${busName}`);
      return null;
    }

    // Create a new gain node for this send
    const sendGain = new Tone.Gain(amount);
    sendGain.connect(bus.send);
    return sendGain;
  }

  /**
   * Get direct connection to a bus send (for manual routing)
   * @param {string} busName - Bus name
   * @returns {Tone.Gain} - The bus send input
   */
  getBusSend(busName) {
    return this.buses[busName]?.send || null;
  }

  /**
   * Set bus output level
   * @param {string} busName - Bus name
   * @param {number} level - Level 0-1
   * @param {number} rampTime - Ramp time in seconds
   */
  setBusLevel(busName, level, rampTime = 0.1) {
    const bus = this.buses[busName];
    if (bus && bus.output) {
      bus.output.gain.rampTo(level, rampTime);
    }
  }

  /**
   * Set reverb decay time (for zone changes)
   * @param {number} decay - Decay time in seconds
   */
  setReverbDecay(decay) {
    // Note: Tone.Reverb doesn't support live decay changes
    // This is for reference - would need to recreate reverb
    console.log(`Reverb decay would be set to ${decay}s (requires rebuild)`);
  }

  /**
   * Dispose all buses
   */
  dispose() {
    Object.values(this.buses).forEach(bus => {
      if (bus.send) bus.send.dispose();
      if (bus.effect) bus.effect.dispose();
      if (bus.output) bus.output.dispose();
    });
    this.buses = {};
    this.initialized = false;
    SharedAudioBuses.instance = null;
  }
}

// Export singleton
export const sharedBuses = new SharedAudioBuses();
export default sharedBuses;
