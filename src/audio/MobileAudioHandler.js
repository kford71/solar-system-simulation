/**
 * MobileAudioHandler - Cross-platform mobile audio optimization
 *
 * Based on 2024-2025 mobile web audio research:
 * - iOS Safari AudioContext interruption handling ("interrupted" state)
 * - Android Chrome autoplay policy compliance
 * - Robust resume strategies for edge cases
 * - Battery-efficient audio processing
 * - PWA background audio support
 *
 * Key features:
 * - Automatic context unlock on first user gesture
 * - Interruption recovery (phone calls, notifications, Siri)
 * - Visibility change handling with state persistence
 * - Media Session API integration for lock screen controls
 */

import * as Tone from 'tone';

/**
 * Platform detection utilities
 */
export const PlatformDetection = {
  isIOS: () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  isAndroid: () => /Android/.test(navigator.userAgent),
  isSafari: () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  isMobile: () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isPWA: () => window.matchMedia('(display-mode: standalone)').matches ||
               window.navigator.standalone === true,

  // Check for specific iOS version (for feature gating)
  getIOSVersion: () => {
    const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return match ? parseInt(match[1], 10) : null;
  },

  // Check if browser supports specific audio features
  supportsAudioWorklet: () => typeof AudioWorkletNode !== 'undefined',
  supportsMediaSession: () => 'mediaSession' in navigator,
  supportsBaseLatency: () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const supported = 'baseLatency' in ctx;
      ctx.close();
      return supported;
    } catch (e) {
      return false;
    }
  }
};

/**
 * MobileAudioHandler - Singleton for managing mobile-specific audio behavior
 */
class MobileAudioHandler {
  constructor() {
    this.initialized = false;
    this.audioUnlocked = false;
    this.wasPlayingBeforeInterrupt = false;
    this.wasPlayingBeforeHide = false;
    this.interruptionCount = 0;
    this.lastInterruptionTime = 0;

    // Callbacks for audio state changes
    this.onAudioUnlocked = null;
    this.onInterruption = null;
    this.onResume = null;
    this.onError = null;

    // Media Session metadata
    this.mediaMetadata = {
      title: 'Solar System Exploration',
      artist: 'NASA Space Sounds',
      album: 'Solar System Simulator',
      artwork: []
    };

    // Track current playback state for Media Session
    this.isPlaying = false;

    // Stuck context detection
    this.lastCurrentTime = 0;
    this.stuckCheckInterval = null;
  }

  /**
   * Initialize mobile audio handling
   * Call this early in app initialization
   */
  init() {
    if (this.initialized) return;

    console.log('MobileAudioHandler initializing...');
    console.log('Platform:', {
      iOS: PlatformDetection.isIOS(),
      android: PlatformDetection.isAndroid(),
      safari: PlatformDetection.isSafari(),
      mobile: PlatformDetection.isMobile(),
      pwa: PlatformDetection.isPWA(),
      iosVersion: PlatformDetection.getIOSVersion()
    });

    // Setup unlock listeners
    this.setupUnlockListeners();

    // Setup visibility change handling
    this.setupVisibilityHandling();

    // Setup iOS Safari interruption handling
    if (PlatformDetection.isIOS() || PlatformDetection.isSafari()) {
      this.setupInterruptionHandling();
    }

    // Setup Media Session API if supported
    if (PlatformDetection.supportsMediaSession()) {
      this.setupMediaSession();
    }

    this.initialized = true;
    console.log('MobileAudioHandler initialized');
  }

  /**
   * Setup one-time unlock listeners for user gesture
   * Covers touch, mouse, and keyboard interactions
   */
  setupUnlockListeners() {
    const unlockEvents = ['touchend', 'touchstart', 'mousedown', 'keydown'];

    const unlockHandler = async (event) => {
      if (this.audioUnlocked) return;

      // Ignore keyboard events that aren't user-initiated
      if (event.type === 'keydown' && !['Enter', 'Space', ' '].includes(event.key)) {
        return;
      }

      try {
        await this.unlockAudio();

        // Remove all unlock listeners after successful unlock
        unlockEvents.forEach(eventType => {
          document.body.removeEventListener(eventType, unlockHandler);
        });

        console.log('Audio unlocked via user gesture:', event.type);
      } catch (e) {
        console.warn('Audio unlock attempt failed:', e);
      }
    };

    // Add listeners for various input types
    unlockEvents.forEach(eventType => {
      document.body.addEventListener(eventType, unlockHandler, {
        once: false,  // We'll remove manually after success
        passive: true
      });
    });
  }

  /**
   * Unlock audio context - call this on user gesture
   * @returns {Promise<boolean>} Whether unlock was successful
   */
  async unlockAudio() {
    if (this.audioUnlocked) return true;

    try {
      // Start Tone.js (which resumes its AudioContext)
      await Tone.start();

      // Verify context is running
      if (Tone.context.state === 'running') {
        this.audioUnlocked = true;

        if (this.onAudioUnlocked) {
          this.onAudioUnlocked();
        }

        return true;
      }

      // If not running, try explicit resume
      await Tone.context.resume();

      if (Tone.context.state === 'running') {
        this.audioUnlocked = true;
        if (this.onAudioUnlocked) {
          this.onAudioUnlocked();
        }
        return true;
      }

      console.warn('AudioContext state after unlock attempt:', Tone.context.state);
      return false;

    } catch (e) {
      console.error('Audio unlock failed:', e);
      if (this.onError) {
        this.onError(e);
      }
      return false;
    }
  }

  /**
   * Setup visibility change handling
   * Suspends audio when page hidden, resumes when visible
   */
  setupVisibilityHandling() {
    document.addEventListener('visibilitychange', async () => {
      if (document.visibilityState === 'hidden') {
        // Store current state before hiding
        this.wasPlayingBeforeHide = this.isPlaying;

        // Suspend context to save battery
        if (Tone.context.state === 'running') {
          try {
            await Tone.context.suspend();
            console.log('AudioContext suspended (page hidden)');
          } catch (e) {
            console.warn('Failed to suspend context:', e);
          }
        }
      } else if (document.visibilityState === 'visible') {
        // Resume audio when page becomes visible
        await this.attemptResume();

        // Start stuck detection after visibility change
        this.startStuckDetection();
      }
    });

    // Also handle page freeze/resume (newer API)
    if ('onfreeze' in document) {
      document.addEventListener('freeze', () => {
        console.log('Page frozen, audio will be suspended');
      });

      document.addEventListener('resume', async () => {
        console.log('Page resumed from freeze');
        await this.attemptResume();
      });
    }
  }

  /**
   * Setup iOS Safari interruption handling
   * Handles phone calls, alarms, Siri, etc.
   */
  setupInterruptionHandling() {
    // Get raw AudioContext (Tone.js wraps it)
    const audioCtx = Tone.context.rawContext || Tone.context._context || Tone.context;

    if (!audioCtx) {
      console.warn('Cannot access raw AudioContext for interruption handling');
      return;
    }

    // Listen for state changes
    audioCtx.onstatechange = async () => {
      const state = audioCtx.state;
      console.log('AudioContext state changed:', state);

      if (state === 'interrupted') {
        // iOS Safari specific: audio was interrupted by system
        this.wasPlayingBeforeInterrupt = this.isPlaying;
        this.interruptionCount++;
        this.lastInterruptionTime = Date.now();

        console.log('Audio interrupted by system (call, alarm, Siri, etc.)');

        if (this.onInterruption) {
          this.onInterruption('system');
        }

      } else if (state === 'suspended' && this.audioUnlocked) {
        // Context was suspended (possibly by system)
        console.log('AudioContext suspended');

        if (this.onInterruption) {
          this.onInterruption('suspended');
        }

      } else if (state === 'running') {
        // Context is running again
        if (this.wasPlayingBeforeInterrupt || this.wasPlayingBeforeHide) {
          console.log('Audio resumed after interruption');

          if (this.onResume) {
            this.onResume();
          }
        }

        this.wasPlayingBeforeInterrupt = false;
      }
    };
  }

  /**
   * Attempt to resume audio context with fallback strategies
   * @returns {Promise<boolean>} Whether resume was successful
   */
  async attemptResume() {
    if (!this.audioUnlocked) {
      console.log('Audio not unlocked yet, cannot resume');
      return false;
    }

    const audioCtx = Tone.context.rawContext || Tone.context._context || Tone.context;
    const state = audioCtx?.state || Tone.context.state;

    if (state === 'running') {
      return true;
    }

    console.log('Attempting to resume audio, current state:', state);

    try {
      // Standard resume
      await Tone.context.resume();

      if (Tone.context.state === 'running') {
        console.log('Audio resumed successfully');
        return true;
      }

      // Safari workaround: suspend then resume
      // This can kick-start a stuck context
      console.log('Standard resume failed, trying suspend->resume cycle');
      await Tone.context.suspend();
      await new Promise(resolve => setTimeout(resolve, 100));
      await Tone.context.resume();

      if (Tone.context.state === 'running') {
        console.log('Audio resumed via suspend->resume cycle');
        return true;
      }

      console.warn('Resume attempts failed, may need user interaction');
      return false;

    } catch (e) {
      console.error('Resume failed:', e);
      return false;
    }
  }

  /**
   * Start detection for stuck AudioContext
   * Safari bug: context reports "running" but currentTime doesn't advance
   */
  startStuckDetection() {
    // Clear any existing interval
    if (this.stuckCheckInterval) {
      clearInterval(this.stuckCheckInterval);
    }

    let checkCount = 0;
    const maxChecks = 5;

    this.stuckCheckInterval = setInterval(async () => {
      checkCount++;

      if (checkCount > maxChecks) {
        clearInterval(this.stuckCheckInterval);
        this.stuckCheckInterval = null;
        return;
      }

      if (Tone.context.state === 'running') {
        const currentTime = Tone.context.currentTime;

        if (this.lastCurrentTime > 0 && currentTime === this.lastCurrentTime) {
          // Context is stuck - currentTime not advancing
          console.warn('Stuck AudioContext detected! Attempting recovery...');

          try {
            await Tone.context.suspend();
            await Tone.context.resume();
            console.log('Stuck context recovery attempted');
          } catch (e) {
            console.error('Stuck context recovery failed:', e);
          }
        }

        this.lastCurrentTime = currentTime;
      }
    }, 500);
  }

  /**
   * Setup Media Session API for lock screen controls
   * Enables play/pause from lock screen, headphone buttons, etc.
   */
  setupMediaSession() {
    if (!navigator.mediaSession) return;

    // Set metadata
    this.updateMediaMetadata();

    // Set action handlers
    navigator.mediaSession.setActionHandler('play', () => {
      console.log('Media Session: play');
      this.setPlaybackState(true);
      if (this.onResume) {
        this.onResume();
      }
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      console.log('Media Session: pause');
      this.setPlaybackState(false);
      if (this.onInterruption) {
        this.onInterruption('user');
      }
    });

    // Optional: seek handlers if you have timeline control
    try {
      navigator.mediaSession.setActionHandler('seekbackward', null);
      navigator.mediaSession.setActionHandler('seekforward', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    } catch (e) {
      // Not all handlers are supported on all platforms
    }
  }

  /**
   * Update Media Session metadata
   * @param {Object} metadata - Optional metadata override
   */
  updateMediaMetadata(metadata = {}) {
    if (!navigator.mediaSession) return;

    const finalMetadata = { ...this.mediaMetadata, ...metadata };

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: finalMetadata.title,
        artist: finalMetadata.artist,
        album: finalMetadata.album,
        artwork: finalMetadata.artwork
      });
    } catch (e) {
      console.warn('Failed to set media metadata:', e);
    }
  }

  /**
   * Set current planet for Media Session display
   * @param {string} planetName - Name of the planet
   * @param {string} artworkUrl - Optional artwork URL
   */
  setCurrentPlanet(planetName, artworkUrl = null) {
    const metadata = {
      title: `${planetName} - Ambient Sounds`,
      artist: 'NASA Space Recordings',
      album: 'Solar System Explorer'
    };

    if (artworkUrl) {
      metadata.artwork = [
        { src: artworkUrl, sizes: '512x512', type: 'image/png' }
      ];
    }

    this.updateMediaMetadata(metadata);
  }

  /**
   * Set playback state for Media Session
   * @param {boolean} playing - Whether audio is playing
   */
  setPlaybackState(playing) {
    this.isPlaying = playing;

    if (navigator.mediaSession) {
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    }
  }

  /**
   * Get recommended latency hint based on platform and use case
   * @param {string} useCase - 'interactive' for responsive, 'ambient' for background
   * @returns {string} Latency hint value
   */
  getRecommendedLatencyHint(useCase = 'ambient') {
    // For ambient/background audio, prefer battery efficiency
    if (useCase === 'ambient' || useCase === 'playback') {
      return 'playback';
    }

    // For interactive audio (UI sounds), use balanced
    if (useCase === 'interactive') {
      // On mobile, even "interactive" can be slightly higher latency
      // Use "balanced" for a good compromise
      return PlatformDetection.isMobile() ? 'balanced' : 'interactive';
    }

    return 'balanced';
  }

  /**
   * Get audio latency information
   * @returns {Object} Latency info
   */
  getLatencyInfo() {
    const audioCtx = Tone.context.rawContext || Tone.context._context || Tone.context;

    return {
      baseLatency: audioCtx?.baseLatency || null,
      outputLatency: audioCtx?.outputLatency || null,
      sampleRate: audioCtx?.sampleRate || Tone.context.sampleRate,
      state: Tone.context.state,
      lookAhead: Tone.context.lookAhead
    };
  }

  /**
   * Check if audio is currently available and working
   * @returns {boolean}
   */
  isAudioAvailable() {
    return this.audioUnlocked && Tone.context.state === 'running';
  }

  /**
   * Get current handler state for debugging
   * @returns {Object}
   */
  getState() {
    return {
      initialized: this.initialized,
      audioUnlocked: this.audioUnlocked,
      isPlaying: this.isPlaying,
      contextState: Tone.context.state,
      interruptionCount: this.interruptionCount,
      lastInterruptionTime: this.lastInterruptionTime,
      platform: {
        ios: PlatformDetection.isIOS(),
        android: PlatformDetection.isAndroid(),
        safari: PlatformDetection.isSafari(),
        mobile: PlatformDetection.isMobile(),
        pwa: PlatformDetection.isPWA()
      },
      latency: this.getLatencyInfo()
    };
  }

  /**
   * Cleanup
   */
  dispose() {
    if (this.stuckCheckInterval) {
      clearInterval(this.stuckCheckInterval);
    }

    // Remove Media Session handlers
    if (navigator.mediaSession) {
      try {
        navigator.mediaSession.setActionHandler('play', null);
        navigator.mediaSession.setActionHandler('pause', null);
      } catch (e) {
        // Ignore
      }
    }

    this.initialized = false;
  }
}

// Export singleton instance
export const mobileAudioHandler = new MobileAudioHandler();
export default mobileAudioHandler;
