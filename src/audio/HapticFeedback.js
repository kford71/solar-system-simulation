/**
 * HapticFeedback - Audio-synchronized haptic feedback
 *
 * Based on 2024-2025 web haptics research:
 * - Vibration API for mobile devices
 * - Gamepad API haptics for controllers
 * - Audio-synchronized vibration patterns
 *
 * Features:
 * - Mobile device vibration
 * - Game controller rumble
 * - Beat-synchronized haptics
 * - Customizable vibration patterns
 */

/**
 * Vibration pattern presets (durations in ms)
 * Patterns are arrays: [vibrate, pause, vibrate, pause, ...]
 */
export const HAPTIC_PATTERNS = {
  // Short feedback patterns
  tap: [50],
  doubleTap: [50, 50, 50],
  tick: [20],
  click: [30],

  // Medium patterns
  pulse: [100],
  buzz: [150],
  bump: [80, 30, 40],

  // Long patterns
  rumble: [200, 50, 150, 50, 100],
  wave: [50, 30, 80, 30, 120, 30, 80, 30, 50],
  alert: [100, 50, 100, 50, 200],

  // Audio-reactive patterns
  beat: [80],
  bassDrop: [150, 30, 100],
  impact: [200],

  // Discovery/achievement
  discovery: [50, 30, 100, 50, 150],
  success: [50, 50, 50, 50, 100, 50, 150],

  // Navigation
  scroll: [15],
  select: [40],
  back: [30, 20, 60]
};

/**
 * HapticFeedback - Manages haptic feedback across devices
 */
class HapticFeedback {
  constructor() {
    this.enabled = true;
    this.intensity = 1.0;  // 0-1 multiplier for duration

    // Feature detection
    this.hasVibration = this.checkVibrationSupport();
    this.hasGamepadHaptics = this.checkGamepadHapticSupport();

    // Gamepad tracking
    this.gamepads = new Map();
    this.gamepadPollInterval = null;

    // Audio sync
    this.audioVisualizer = null;
    this.beatSyncEnabled = false;
    this.lastBeatTime = 0;
    this.beatCooldown = 150;  // ms

    // State
    this.initialized = false;
  }

  /**
   * Check if Vibration API is supported
   * @returns {boolean}
   */
  checkVibrationSupport() {
    return 'vibrate' in navigator;
  }

  /**
   * Check if Gamepad haptics are supported
   * @returns {boolean}
   */
  checkGamepadHapticSupport() {
    // This is a basic check - actual support depends on connected controllers
    return 'getGamepads' in navigator;
  }

  /**
   * Initialize haptic feedback system
   */
  init() {
    if (this.initialized) return;

    console.log('HapticFeedback initializing...');
    console.log('Vibration API:', this.hasVibration ? 'supported' : 'not supported');
    console.log('Gamepad API:', this.hasGamepadHaptics ? 'supported' : 'not supported');

    // Start gamepad polling if supported
    if (this.hasGamepadHaptics) {
      this.startGamepadPolling();
    }

    // Listen for gamepad connections
    window.addEventListener('gamepadconnected', (e) => {
      console.log('Gamepad connected:', e.gamepad.id);
      this.updateGamepads();
    });

    window.addEventListener('gamepaddisconnected', (e) => {
      console.log('Gamepad disconnected:', e.gamepad.id);
      this.gamepads.delete(e.gamepad.index);
    });

    this.initialized = true;
    console.log('HapticFeedback initialized');
  }

  /**
   * Start polling for gamepads
   * Required because getGamepads() returns a snapshot
   */
  startGamepadPolling() {
    this.gamepadPollInterval = setInterval(() => {
      this.updateGamepads();
    }, 500);  // Poll every 500ms for new controllers
  }

  /**
   * Update gamepad references
   */
  updateGamepads() {
    const gamepads = navigator.getGamepads();
    for (const gamepad of gamepads) {
      if (gamepad) {
        this.gamepads.set(gamepad.index, gamepad);
      }
    }
  }

  /**
   * Trigger mobile device vibration
   * @param {string|number|Array} pattern - Pattern name, duration, or array
   */
  vibrate(pattern = 'tap') {
    if (!this.enabled || !this.hasVibration) return;

    let vibrationPattern;

    if (typeof pattern === 'string') {
      vibrationPattern = HAPTIC_PATTERNS[pattern] || HAPTIC_PATTERNS.tap;
    } else if (typeof pattern === 'number') {
      vibrationPattern = [pattern];
    } else if (Array.isArray(pattern)) {
      vibrationPattern = pattern;
    } else {
      vibrationPattern = HAPTIC_PATTERNS.tap;
    }

    // Apply intensity multiplier to durations
    if (this.intensity < 1) {
      vibrationPattern = vibrationPattern.map((duration, i) =>
        i % 2 === 0 ? Math.round(duration * this.intensity) : duration
      );
    }

    try {
      navigator.vibrate(vibrationPattern);
    } catch (e) {
      console.warn('Vibration failed:', e);
    }
  }

  /**
   * Stop any ongoing vibration
   */
  stopVibration() {
    if (this.hasVibration) {
      try {
        navigator.vibrate(0);
      } catch (e) {
        // Ignore
      }
    }
  }

  /**
   * Trigger gamepad haptic feedback
   * @param {number} gamepadIndex - Index of the gamepad (default: 0)
   * @param {number} intensity - Vibration intensity 0-1 (default: 1)
   * @param {number} duration - Duration in ms (default: 100)
   * @param {string} side - 'left', 'right', or 'both' (default: 'both')
   */
  async triggerGamepadHaptic(gamepadIndex = 0, intensity = 1, duration = 100, side = 'both') {
    if (!this.enabled || !this.hasGamepadHaptics) return;

    // Get fresh gamepad reference
    const gamepads = navigator.getGamepads();
    const gamepad = gamepads[gamepadIndex];

    if (!gamepad) return;

    // Apply global intensity
    const finalIntensity = Math.min(1, intensity * this.intensity);

    // Check for vibration actuator (standard)
    if (gamepad.vibrationActuator) {
      try {
        await gamepad.vibrationActuator.playEffect('dual-rumble', {
          startDelay: 0,
          duration: duration,
          weakMagnitude: side === 'right' ? 0 : finalIntensity,
          strongMagnitude: side === 'left' ? 0 : finalIntensity
        });
      } catch (e) {
        // Try older pulse API
        try {
          if (gamepad.hapticActuators && gamepad.hapticActuators.length > 0) {
            gamepad.hapticActuators[0].pulse(finalIntensity, duration);
          }
        } catch (e2) {
          console.warn('Gamepad haptic failed:', e2);
        }
      }
    }
    // Check for hapticActuators (older API)
    else if (gamepad.hapticActuators && gamepad.hapticActuators.length > 0) {
      try {
        for (const actuator of gamepad.hapticActuators) {
          actuator.pulse(finalIntensity, duration);
        }
      } catch (e) {
        console.warn('Gamepad haptic actuator failed:', e);
      }
    }
  }

  /**
   * Trigger haptic feedback on all connected gamepads
   * @param {number} intensity
   * @param {number} duration
   */
  triggerAllGamepads(intensity = 1, duration = 100) {
    const gamepads = navigator.getGamepads();
    for (let i = 0; i < gamepads.length; i++) {
      if (gamepads[i]) {
        this.triggerGamepadHaptic(i, intensity, duration);
      }
    }
  }

  /**
   * Trigger haptic feedback on all available devices
   * @param {string|number|Array} pattern - For mobile
   * @param {number} intensity - For gamepad (0-1)
   * @param {number} duration - For gamepad (ms)
   */
  trigger(pattern = 'tap', intensity = 1, duration = 100) {
    // Mobile vibration
    this.vibrate(pattern);

    // Gamepad haptics
    this.triggerAllGamepads(intensity, duration);
  }

  /**
   * Connect to an AudioVisualizer for beat-synchronized haptics
   * @param {AudioVisualizer} visualizer
   */
  connectAudioVisualizer(visualizer) {
    this.audioVisualizer = visualizer;

    // Set up beat callback
    visualizer.onBeat = (beatData) => {
      if (this.beatSyncEnabled) {
        this.onAudioBeat(beatData);
      }
    };
  }

  /**
   * Handle audio beat detection
   * @param {Object} beatData
   */
  onAudioBeat(beatData) {
    const now = performance.now();
    if (now - this.lastBeatTime < this.beatCooldown) return;

    this.lastBeatTime = now;

    // Map beat intensity to haptic intensity
    const intensity = Math.min(1, beatData.ratio * 0.5);
    const duration = Math.round(50 + intensity * 100);

    // Trigger haptics
    this.vibrate([duration]);
    this.triggerAllGamepads(intensity, duration);
  }

  /**
   * Enable/disable beat-synchronized haptics
   * @param {boolean} enabled
   */
  setBeatSyncEnabled(enabled) {
    this.beatSyncEnabled = enabled;
  }

  /**
   * Set global haptic intensity
   * @param {number} intensity - 0 to 1
   */
  setIntensity(intensity) {
    this.intensity = Math.max(0, Math.min(1, intensity));
  }

  /**
   * Enable/disable haptic feedback
   * @param {boolean} enabled
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      this.stopVibration();
    }
  }

  /**
   * Play a UI interaction haptic
   * @param {string} interactionType - 'select', 'back', 'scroll', etc.
   */
  playUIHaptic(interactionType) {
    switch (interactionType) {
      case 'select':
      case 'click':
        this.trigger('select', 0.5, 40);
        break;
      case 'back':
      case 'cancel':
        this.trigger('back', 0.4, 60);
        break;
      case 'scroll':
      case 'tick':
        this.trigger('tick', 0.2, 15);
        break;
      case 'focus':
        this.trigger('tap', 0.3, 50);
        break;
      case 'error':
        this.trigger('alert', 0.7, 200);
        break;
      case 'success':
        this.trigger('success', 0.6, 150);
        break;
      default:
        this.trigger('tap', 0.4, 50);
    }
  }

  /**
   * Play a discovery/achievement haptic
   */
  playDiscoveryHaptic() {
    this.trigger('discovery', 0.8, 150);
  }

  /**
   * Play an impact haptic (for collisions, bass drops, etc.)
   * @param {number} intensity - 0 to 1
   */
  playImpactHaptic(intensity = 1) {
    const duration = Math.round(100 + intensity * 150);
    this.vibrate([duration]);
    this.triggerAllGamepads(intensity, duration);
  }

  /**
   * Get list of connected gamepads with haptic support
   * @returns {Array}
   */
  getConnectedGamepads() {
    const result = [];
    const gamepads = navigator.getGamepads();

    for (const gamepad of gamepads) {
      if (gamepad) {
        result.push({
          index: gamepad.index,
          id: gamepad.id,
          hasVibration: !!(gamepad.vibrationActuator || (gamepad.hapticActuators && gamepad.hapticActuators.length > 0))
        });
      }
    }

    return result;
  }

  /**
   * Get system haptic capabilities
   * @returns {Object}
   */
  getCapabilities() {
    return {
      vibrationAPI: this.hasVibration,
      gamepadAPI: this.hasGamepadHaptics,
      connectedGamepads: this.getConnectedGamepads(),
      enabled: this.enabled,
      intensity: this.intensity,
      beatSyncEnabled: this.beatSyncEnabled
    };
  }

  /**
   * Dispose resources
   */
  dispose() {
    if (this.gamepadPollInterval) {
      clearInterval(this.gamepadPollInterval);
    }

    this.stopVibration();
    this.gamepads.clear();
    this.audioVisualizer = null;
    this.initialized = false;
  }
}

// Export singleton instance
export const hapticFeedback = new HapticFeedback();
export default hapticFeedback;
