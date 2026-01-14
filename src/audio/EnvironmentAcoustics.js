/**
 * EnvironmentAcoustics - Simulated room/environment acoustics
 *
 * Based on 2024-2025 acoustic simulation research:
 * - Convolver-based reverb with environment presets
 * - Distance-based acoustic properties
 * - Dynamic room simulation for different space environments
 *
 * Features:
 * - Multiple environment presets (void, spacecraft, planetary surface, etc.)
 * - Smooth transitions between environments
 * - Integration with spatial audio for distance-based reverb
 * - Procedural impulse response generation
 */

import * as Tone from 'tone';

/**
 * Environment presets with acoustic properties
 * Based on the concept that different space environments
 * would have different acoustic characteristics
 */
export const ENVIRONMENT_PRESETS = {
  // Deep space - minimal reverb, clean sound
  void: {
    name: 'Deep Space Void',
    decay: 0.5,
    preDelay: 0,
    wet: 0.1,
    roomSize: 'small',
    damping: 0.9,
    description: 'The emptiness of space - minimal reflections'
  },

  // Inside a spacecraft - metallic, confined reverb
  spacecraft: {
    name: 'Spacecraft Interior',
    decay: 1.2,
    preDelay: 0.01,
    wet: 0.3,
    roomSize: 'medium',
    damping: 0.4,
    description: 'Metallic reflections of a spacecraft cabin'
  },

  // Space station - larger metallic space
  station: {
    name: 'Space Station',
    decay: 2.5,
    preDelay: 0.02,
    wet: 0.35,
    roomSize: 'large',
    damping: 0.5,
    description: 'Large metallic corridors and modules'
  },

  // Planetary cave/cavern
  cavern: {
    name: 'Planetary Cavern',
    decay: 4.0,
    preDelay: 0.05,
    wet: 0.5,
    roomSize: 'huge',
    damping: 0.6,
    description: 'Deep caverns with long natural reverb'
  },

  // Rocky planetary surface (some reflection from rocks)
  rocky: {
    name: 'Rocky Surface',
    decay: 1.0,
    preDelay: 0.03,
    wet: 0.2,
    roomSize: 'medium',
    damping: 0.7,
    description: 'Subtle reflections from rocky terrain'
  },

  // Ice moon surface
  ice: {
    name: 'Ice Surface',
    decay: 2.0,
    preDelay: 0.02,
    wet: 0.4,
    roomSize: 'large',
    damping: 0.3,
    description: 'Bright, clear reflections from ice'
  },

  // Gas giant atmosphere (diffuse, murky)
  gasGiant: {
    name: 'Gas Giant Atmosphere',
    decay: 3.0,
    preDelay: 0.1,
    wet: 0.6,
    roomSize: 'huge',
    damping: 0.8,
    description: 'Diffuse, dense atmospheric reverb'
  },

  // Near the Sun (harsh, bright)
  solar: {
    name: 'Solar Corona',
    decay: 0.8,
    preDelay: 0,
    wet: 0.15,
    roomSize: 'small',
    damping: 0.2,
    description: 'Harsh electromagnetic environment'
  },

  // Educational/narration mode - clear and present
  narration: {
    name: 'Narration Mode',
    decay: 0.3,
    preDelay: 0,
    wet: 0.05,
    roomSize: 'small',
    damping: 0.95,
    description: 'Clear and intimate for narration'
  }
};

/**
 * EnvironmentAcoustics - Manages acoustic environment simulation
 */
class EnvironmentAcoustics {
  constructor() {
    this.initialized = false;
    this.currentEnvironment = 'void';
    this.targetEnvironment = 'void';

    // Effect nodes
    this.reverb = null;
    this.preDelay = null;
    this.dryGain = null;
    this.wetGain = null;

    // Input/output
    this.input = null;
    this.output = null;

    // Transition state
    this.isTransitioning = false;
    this.transitionDuration = 2;  // seconds

    // Current acoustic parameters
    this.currentParams = {
      decay: 0.5,
      wet: 0.1,
      preDelay: 0
    };
  }

  /**
   * Initialize the acoustics system
   * @param {Tone.ToneAudioNode} destination - Output destination
   */
  init(destination) {
    if (this.initialized) return;

    // Create input gain for routing
    this.input = new Tone.Gain(1);

    // Create pre-delay for reverb
    this.preDelay = new Tone.Delay({
      delayTime: 0,
      maxDelay: 0.2
    });

    // Create convolution reverb
    this.reverb = new Tone.Reverb({
      decay: 0.5,
      preDelay: 0,
      wet: 1  // We control wet/dry with separate gains
    });

    // Create wet/dry mixing
    this.dryGain = new Tone.Gain(0.9);
    this.wetGain = new Tone.Gain(0.1);

    // Create output
    this.output = new Tone.Gain(1);

    // Connect: input → dryGain → output
    //          input → preDelay → reverb → wetGain → output
    this.input.connect(this.dryGain);
    this.dryGain.connect(this.output);

    this.input.connect(this.preDelay);
    this.preDelay.connect(this.reverb);
    this.reverb.connect(this.wetGain);
    this.wetGain.connect(this.output);

    // Connect to destination
    if (destination) {
      this.output.connect(destination);
    } else {
      this.output.toDestination();
    }

    // Generate initial reverb
    this.reverb.generate();

    // Apply initial environment
    this.setEnvironment('void', false);

    this.initialized = true;
    console.log('EnvironmentAcoustics initialized');
  }

  /**
   * Get the input node (connect audio sources here)
   * @returns {Tone.Gain}
   */
  getInput() {
    return this.input;
  }

  /**
   * Get the output node
   * @returns {Tone.Gain}
   */
  getOutput() {
    return this.output;
  }

  /**
   * Set the acoustic environment
   * @param {string} environmentName - Name of the preset
   * @param {boolean} transition - Whether to smoothly transition
   * @param {number} duration - Transition duration in seconds
   */
  async setEnvironment(environmentName, transition = true, duration = null) {
    const preset = ENVIRONMENT_PRESETS[environmentName];
    if (!preset) {
      console.warn(`Unknown environment: ${environmentName}`);
      return;
    }

    if (!this.initialized) {
      console.warn('EnvironmentAcoustics not initialized');
      return;
    }

    this.targetEnvironment = environmentName;
    const transitionTime = duration || this.transitionDuration;

    if (transition) {
      await this.transitionTo(preset, transitionTime);
    } else {
      this.applyPreset(preset);
    }

    this.currentEnvironment = environmentName;
    console.log(`Environment set to: ${preset.name}`);
  }

  /**
   * Apply a preset immediately (no transition)
   * @param {Object} preset
   */
  applyPreset(preset) {
    // Update reverb decay
    this.reverb.decay = preset.decay;

    // Update pre-delay
    this.preDelay.delayTime.value = preset.preDelay;

    // Update wet/dry mix
    this.dryGain.gain.value = 1 - preset.wet;
    this.wetGain.gain.value = preset.wet;

    // Regenerate reverb with new settings
    this.reverb.generate();

    // Store current params
    this.currentParams = {
      decay: preset.decay,
      wet: preset.wet,
      preDelay: preset.preDelay
    };
  }

  /**
   * Smoothly transition to a new preset
   * @param {Object} preset
   * @param {number} duration - Transition time in seconds
   */
  async transitionTo(preset, duration) {
    if (this.isTransitioning) {
      // Queue this transition? For now, just override
    }

    this.isTransitioning = true;

    // Smoothly ramp wet/dry gains
    this.dryGain.gain.rampTo(1 - preset.wet, duration);
    this.wetGain.gain.rampTo(preset.wet, duration);

    // Ramp pre-delay
    this.preDelay.delayTime.rampTo(preset.preDelay, duration);

    // For decay, we need to regenerate the reverb
    // Do this gradually by crossfading
    const startDecay = this.currentParams.decay;
    const endDecay = preset.decay;
    const steps = 5;
    const stepDuration = (duration * 1000) / steps;

    for (let i = 1; i <= steps; i++) {
      const progress = i / steps;
      const currentDecay = startDecay + (endDecay - startDecay) * progress;

      await new Promise(resolve => setTimeout(resolve, stepDuration));

      if (this.reverb) {
        this.reverb.decay = currentDecay;
        // Only regenerate a couple times to avoid CPU spikes
        if (i === Math.floor(steps / 2) || i === steps) {
          try {
            this.reverb.generate();
          } catch (e) {
            // Ignore generation errors during transition
          }
        }
      }
    }

    this.currentParams = {
      decay: preset.decay,
      wet: preset.wet,
      preDelay: preset.preDelay
    };

    this.isTransitioning = false;
  }

  /**
   * Set environment based on celestial body type
   * @param {string} bodyType - 'planet', 'moon', 'star', 'spacecraft', etc.
   * @param {string} bodyName - Specific body name for fine-tuning
   */
  setEnvironmentForBody(bodyType, bodyName = null) {
    let environment = 'void';

    // Map body types to environments
    switch (bodyType) {
      case 'star':
      case 'sun':
        environment = 'solar';
        break;

      case 'gasGiant':
        environment = 'gasGiant';
        break;

      case 'rockyPlanet':
      case 'terrestrial':
        environment = 'rocky';
        break;

      case 'iceMoon':
      case 'icy':
        environment = 'ice';
        break;

      case 'moon':
        // Check for specific moons
        if (bodyName) {
          const lowerName = bodyName.toLowerCase();
          if (['europa', 'enceladus', 'triton'].includes(lowerName)) {
            environment = 'ice';
          } else if (['io'].includes(lowerName)) {
            environment = 'rocky';
          } else {
            environment = 'cavern';
          }
        } else {
          environment = 'rocky';
        }
        break;

      case 'spacecraft':
      case 'probe':
        environment = 'spacecraft';
        break;

      case 'station':
        environment = 'station';
        break;

      default:
        environment = 'void';
    }

    // Special cases by name
    if (bodyName) {
      const lowerName = bodyName.toLowerCase();
      if (['jupiter', 'saturn', 'uranus', 'neptune'].includes(lowerName)) {
        environment = 'gasGiant';
      } else if (['mercury', 'venus', 'earth', 'mars'].includes(lowerName)) {
        environment = 'rocky';
      }
    }

    this.setEnvironment(environment, true);
  }

  /**
   * Set custom acoustic parameters
   * @param {Object} params - { decay, wet, preDelay }
   * @param {boolean} transition - Whether to transition smoothly
   */
  setCustomParams(params, transition = true) {
    const customPreset = {
      name: 'Custom',
      decay: params.decay ?? this.currentParams.decay,
      wet: params.wet ?? this.currentParams.wet,
      preDelay: params.preDelay ?? this.currentParams.preDelay,
      roomSize: 'custom',
      damping: 0.5
    };

    if (transition) {
      this.transitionTo(customPreset, this.transitionDuration);
    } else {
      this.applyPreset(customPreset);
    }
  }

  /**
   * Set wet/dry mix directly
   * @param {number} wet - 0 to 1
   */
  setWetLevel(wet) {
    if (!this.initialized) return;
    const clampedWet = Math.max(0, Math.min(1, wet));
    this.dryGain.gain.rampTo(1 - clampedWet, 0.1);
    this.wetGain.gain.rampTo(clampedWet, 0.1);
    this.currentParams.wet = clampedWet;
  }

  /**
   * Get list of available environments
   * @returns {Array}
   */
  getEnvironmentList() {
    return Object.entries(ENVIRONMENT_PRESETS).map(([key, preset]) => ({
      id: key,
      name: preset.name,
      description: preset.description
    }));
  }

  /**
   * Get current environment info
   * @returns {Object}
   */
  getCurrentEnvironment() {
    const preset = ENVIRONMENT_PRESETS[this.currentEnvironment];
    return {
      id: this.currentEnvironment,
      name: preset?.name || 'Unknown',
      params: { ...this.currentParams },
      isTransitioning: this.isTransitioning
    };
  }

  /**
   * Bypass the acoustics (dry signal only)
   * @param {boolean} bypass
   */
  setBypass(bypass) {
    if (!this.initialized) return;

    if (bypass) {
      this.dryGain.gain.rampTo(1, 0.1);
      this.wetGain.gain.rampTo(0, 0.1);
    } else {
      this.dryGain.gain.rampTo(1 - this.currentParams.wet, 0.1);
      this.wetGain.gain.rampTo(this.currentParams.wet, 0.1);
    }
  }

  /**
   * Dispose resources
   */
  dispose() {
    if (this.reverb) this.reverb.dispose();
    if (this.preDelay) this.preDelay.dispose();
    if (this.dryGain) this.dryGain.dispose();
    if (this.wetGain) this.wetGain.dispose();
    if (this.input) this.input.dispose();
    if (this.output) this.output.dispose();

    this.reverb = null;
    this.preDelay = null;
    this.dryGain = null;
    this.wetGain = null;
    this.input = null;
    this.output = null;
    this.initialized = false;
  }
}

// Export singleton instance
export const environmentAcoustics = new EnvironmentAcoustics();
export default environmentAcoustics;
