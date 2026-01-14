/**
 * AudioCrossfader - Smooth transitions between audio sources
 *
 * Implements equal-power crossfading for seamless planet transitions.
 * Prevents overlapping volume spikes and jarring audio cuts.
 *
 * Features:
 * - Equal-power crossfade (constant perceived loudness during transition)
 * - Configurable transition duration
 * - Queue system for rapid transitions
 * - Automatic cleanup of old sources
 */

import * as Tone from 'tone';

export class AudioCrossfader {
  constructor(output) {
    this.output = output;

    // Crossfade node for smooth transitions
    this.crossfade = new Tone.CrossFade(0);
    this.crossfade.connect(output);

    // Current and next source slots
    this.currentSource = null;
    this.nextSource = null;

    // Track which input (a or b) is currently active
    this.activeInput = 'a'; // 'a' or 'b'

    // Transition state
    this.isTransitioning = false;
    this.transitionDuration = 3; // seconds

    // Gain nodes for each input (allows volume control)
    this.gainA = new Tone.Gain(1).connect(this.crossfade.a);
    this.gainB = new Tone.Gain(1).connect(this.crossfade.b);

    // Queue for pending transitions
    this.pendingTransition = null;
  }

  /**
   * Set the transition duration
   * @param {number} seconds - Duration in seconds (1-10)
   */
  setTransitionDuration(seconds) {
    this.transitionDuration = Math.max(0.5, Math.min(10, seconds));
  }

  /**
   * Get the current active gain node for connecting sources
   * @returns {Tone.Gain}
   */
  getActiveInput() {
    return this.activeInput === 'a' ? this.gainA : this.gainB;
  }

  /**
   * Get the inactive gain node (for the next source)
   * @returns {Tone.Gain}
   */
  getInactiveInput() {
    return this.activeInput === 'a' ? this.gainB : this.gainA;
  }

  /**
   * Transition to a new audio source
   * @param {Tone.Player|Tone.Source} newSource - The new audio source
   * @param {Object} options - Transition options
   * @returns {Promise} - Resolves when transition completes
   */
  async transitionTo(newSource, options = {}) {
    const {
      duration = this.transitionDuration,
      volume = 1,
      startImmediately = true
    } = options;

    // If already transitioning, queue this one
    if (this.isTransitioning) {
      this.pendingTransition = { newSource, options };
      return;
    }

    this.isTransitioning = true;

    // Get the inactive input for the new source
    const inactiveGain = this.getInactiveInput();
    const activeGain = this.getActiveInput();

    // Disconnect any existing source on the inactive input
    if (this.nextSource) {
      try {
        this.nextSource.disconnect(inactiveGain);
        if (this.nextSource.state === 'started') {
          this.nextSource.stop();
        }
      } catch (e) {
        // Ignore disconnection errors
      }
    }

    // Connect new source to inactive input
    newSource.connect(inactiveGain);
    inactiveGain.gain.value = volume;

    // Start the new source if requested
    if (startImmediately && newSource.start) {
      newSource.start();
    }

    // Store reference
    this.nextSource = newSource;

    // Determine target fade value
    const targetFade = this.activeInput === 'a' ? 1 : 0;

    // Perform the crossfade
    await this.performCrossfade(targetFade, duration);

    // Cleanup: stop and disconnect old source
    if (this.currentSource) {
      try {
        if (this.currentSource.state === 'started') {
          this.currentSource.stop();
        }
        this.currentSource.disconnect(activeGain);
      } catch (e) {
        // Ignore cleanup errors
      }
    }

    // Swap references
    this.currentSource = this.nextSource;
    this.nextSource = null;

    // Flip active input
    this.activeInput = this.activeInput === 'a' ? 'b' : 'a';

    this.isTransitioning = false;

    // Process any pending transition
    if (this.pendingTransition) {
      const pending = this.pendingTransition;
      this.pendingTransition = null;
      await this.transitionTo(pending.newSource, pending.options);
    }
  }

  /**
   * Perform the actual crossfade animation
   * @param {number} targetValue - Target fade value (0 = a, 1 = b)
   * @param {number} duration - Duration in seconds
   * @returns {Promise}
   */
  performCrossfade(targetValue, duration) {
    return new Promise((resolve) => {
      // Use Tone.js rampTo for smooth transition
      this.crossfade.fade.rampTo(targetValue, duration);

      // Resolve after duration
      setTimeout(resolve, duration * 1000);
    });
  }

  /**
   * Fade out current source (no new source)
   * @param {number} duration - Fade duration
   * @returns {Promise}
   */
  async fadeOut(duration = this.transitionDuration) {
    if (!this.currentSource) return;

    const activeGain = this.getActiveInput();

    // Fade the gain to 0
    activeGain.gain.rampTo(0, duration);

    await new Promise(resolve => setTimeout(resolve, duration * 1000));

    // Stop the source
    if (this.currentSource && this.currentSource.state === 'started') {
      this.currentSource.stop();
    }
  }

  /**
   * Fade in current source from silence
   * @param {number} duration - Fade duration
   * @param {number} targetVolume - Target volume
   */
  fadeIn(duration = this.transitionDuration, targetVolume = 1) {
    const activeGain = this.getActiveInput();
    activeGain.gain.value = 0;
    activeGain.gain.rampTo(targetVolume, duration);
  }

  /**
   * Immediately switch sources (no crossfade)
   * @param {Tone.Player|Tone.Source} newSource - New source
   * @param {number} volume - Volume level
   */
  switchImmediately(newSource, volume = 1) {
    // Stop current
    if (this.currentSource) {
      try {
        if (this.currentSource.state === 'started') {
          this.currentSource.stop();
        }
        this.currentSource.disconnect();
      } catch (e) {
        // Ignore
      }
    }

    // Connect new
    const activeGain = this.getActiveInput();
    newSource.connect(activeGain);
    activeGain.gain.value = volume;

    if (newSource.start) {
      newSource.start();
    }

    this.currentSource = newSource;
  }

  /**
   * Get current state
   * @returns {Object}
   */
  getState() {
    return {
      isTransitioning: this.isTransitioning,
      activeInput: this.activeInput,
      fadeValue: this.crossfade.fade.value,
      hasCurrent: !!this.currentSource,
      hasNext: !!this.nextSource,
      hasPending: !!this.pendingTransition
    };
  }

  /**
   * Dispose all resources
   */
  dispose() {
    // Stop sources
    if (this.currentSource) {
      try {
        this.currentSource.stop();
        this.currentSource.disconnect();
      } catch (e) {}
    }
    if (this.nextSource) {
      try {
        this.nextSource.stop();
        this.nextSource.disconnect();
      } catch (e) {}
    }

    // Dispose nodes
    this.crossfade.dispose();
    this.gainA.dispose();
    this.gainB.dispose();

    this.currentSource = null;
    this.nextSource = null;
    this.pendingTransition = null;
  }
}

/**
 * PlanetAudioManager - Manages planet audio transitions
 * Uses AudioCrossfader for smooth transitions between planets
 */
export class PlanetAudioTransitioner {
  constructor(output) {
    this.crossfader = new AudioCrossfader(output);
    this.currentPlanet = null;
    this.players = new Map(); // Cache of loaded players
  }

  /**
   * Transition to a new planet's audio
   * @param {string} planetName - Name of the planet
   * @param {Tone.Player} player - The audio player for this planet
   * @param {Object} options - Transition options
   */
  async transitionToPlanet(planetName, player, options = {}) {
    if (this.currentPlanet === planetName) {
      return; // Already on this planet
    }

    const prevPlanet = this.currentPlanet;
    this.currentPlanet = planetName;

    console.log(`Transitioning audio: ${prevPlanet || 'none'} → ${planetName}`);

    // Cache the player
    this.players.set(planetName, player);

    // Perform crossfade transition
    await this.crossfader.transitionTo(player, {
      duration: options.duration || 3,
      volume: options.volume || 1,
      startImmediately: true
    });

    console.log(`Audio transition complete: now playing ${planetName}`);
  }

  /**
   * Fade out current planet audio
   * @param {number} duration - Fade duration
   */
  async fadeOutCurrent(duration = 2) {
    await this.crossfader.fadeOut(duration);
    this.currentPlanet = null;
  }

  /**
   * Set transition duration
   * @param {number} seconds - Duration
   */
  setTransitionDuration(seconds) {
    this.crossfader.setTransitionDuration(seconds);
  }

  /**
   * Get current state
   */
  getState() {
    return {
      currentPlanet: this.currentPlanet,
      cachedPlanets: Array.from(this.players.keys()),
      crossfaderState: this.crossfader.getState()
    };
  }

  /**
   * Dispose resources
   */
  dispose() {
    this.crossfader.dispose();
    this.players.forEach(player => {
      try {
        player.dispose();
      } catch (e) {}
    });
    this.players.clear();
    this.currentPlanet = null;
  }
}

export default AudioCrossfader;
