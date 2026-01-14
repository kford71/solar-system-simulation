/**
 * AudioManager - Centralized audio control for the solar system simulation
 *
 * Architecture:
 * - Tone.js for generative planet sounds and UI synthesis
 * - Three.js PositionalAudio for spatial positioning (future)
 *
 * Features:
 * - Procedural UI sounds (no external files needed)
 * - Layered ambient soundscape (space drone + solar wind)
 * - Master bus with limiter for safe output
 * - Mobile-friendly initialization
 * - Visibility change handling (mute when tab hidden)
 *
 * Performance Optimizations (2024 best practices):
 * - Shared effect buses (reverb, delay) to reduce CPU load
 * - Object pooling for synths to minimize GC pressure
 * - IndexedDB caching for large audio files
 * - latencyHint: 'playback' for better CPU efficiency
 */

import * as Tone from 'tone';
import { MusicSystem } from './MusicSystem.js';
import { NASASounds } from './NASASounds.js';
import { sharedBuses } from './SharedAudioBuses.js';
import { synthPool } from './SynthPool.js';
import { audioCache } from './AudioCache.js';
import { masteringChain } from './MasteringChain.js';
import { PlanetAudioTransitioner } from './AudioCrossfader.js';
import { spatialAudioManager, ATTENUATION_PRESETS } from './SpatialAudioManager.js';
import { mobileAudioHandler, PlatformDetection } from './MobileAudioHandler.js';
import { audioAccessibility } from './AudioAccessibility.js';
import { audioVisualizer, AudioReactiveController } from './AudioVisualizer.js';
import { environmentAcoustics, ENVIRONMENT_PRESETS } from './EnvironmentAcoustics.js';
import { hapticFeedback, HAPTIC_PATTERNS } from './HapticFeedback.js';
import { audioDeviceManager } from './AudioDeviceManager.js';
import { plasmaWaveSynthesizer, PLANETARY_FREQUENCIES } from './PlasmaWaveSynthesizer.js';
// Note: PlanetSoundGenerator and AppalachianMusic are disabled
// PlanetSounds: Noise generators cause unwanted hiss
// AppalachianMusic: External URLs blocked by CORS

class AudioManager {
  constructor() {
    if (AudioManager.instance) {
      return AudioManager.instance;
    }
    AudioManager.instance = this;

    this.initialized = false;
    this.muted = true;  // Start muted by default
    this.masterVolume = 0.5;
    this.ambientVolume = 0.3;
    this.uiVolume = 0.5;
    this.musicVolume = 0.3;
    this.musicEnabled = true;
    this.musicMode = 'off'; // 'generative' or 'off'

    // Audio nodes
    this.uiSynth = null;
    this.uiNoise = null;
    this.masterGain = null;
    this.masterLimiter = null;
    this.musicSystem = null;
    this.nasaSounds = null;  // NASA space sounds module
    this.nasaSoundsEnabled = true;  // Enable NASA sounds by default
    this.planetTransitioner = null; // Crossfade transitions between planets
    this.useMasteringChain = true;  // Use professional mastering chain
    this.useSpatialAudio = true;    // Use 3D spatial audio positioning
    this.spatialObjects = new Map(); // Map of id -> Three.js Object3D for position sync

    // Immersive audio features
    this.useVisualizer = true;          // Audio-reactive visualization
    this.useEnvironmentAcoustics = true; // Environment-based reverb
    this.useHaptics = true;             // Haptic feedback
    this.usePlasmaWaves = true;         // Scientifically accurate space sounds
    this.audioReactiveController = null; // Controller for reactive 3D objects

    // State
    this.currentZone = 'inner'; // 'inner', 'outer', 'interstellar'
    this.focusedPlanet = null;
    this.lastUpdateTime = 0;
    this.updateInterval = 100; // ms between proximity updates (performance)

    // Zone thresholds (in scene units)
    this.ZONE_THRESHOLDS = {
      innerOuter: 50,           // Roughly asteroid belt
      outerInterstellar: 200    // Beyond Neptune/Kuiper belt
    };
  }

  /**
   * Initialize audio system - must be called after user interaction
   */
  async init() {
    if (this.initialized) return;

    try {
      // Check if AudioContext is supported
      if (!window.AudioContext && !window.webkitAudioContext) {
        throw new Error('Web Audio API not supported in this browser');
      }

      // Initialize mobile audio handler FIRST (sets up unlock listeners)
      mobileAudioHandler.init();

      // Setup mobile handler callbacks
      mobileAudioHandler.onAudioUnlocked = () => {
        console.log('Mobile audio handler: audio unlocked');
      };
      mobileAudioHandler.onInterruption = (type) => {
        console.log('Audio interrupted:', type);
        // Announce interruption for accessibility
        audioAccessibility.announceStateChange('paused');
      };
      mobileAudioHandler.onResume = () => {
        console.log('Audio resumed from interruption');
        if (!this.muted) {
          audioAccessibility.announceStateChange('playing', this.focusedPlanet);
        }
      };

      // Initialize accessibility features
      audioAccessibility.init();

      // Get recommended latency hint based on platform
      const latencyHint = mobileAudioHandler.getRecommendedLatencyHint('ambient');

      // Configure Tone.js context BEFORE starting
      // Mobile uses 'playback' for battery efficiency, desktop can use 'balanced'
      Tone.setContext(new Tone.Context({
        latencyHint: latencyHint,  // Platform-optimized latency
        lookAhead: PlatformDetection.isMobile() ? 0.15 : 0.1  // Slightly higher on mobile
      }));

      // Start Tone.js (required for mobile)
      await Tone.start();

      // Verify audio context is running
      if (Tone.context.state !== 'running') {
        // Try to resume (needed for some browsers)
        await Tone.context.resume();
        if (Tone.context.state !== 'running') {
          throw new Error('Audio context failed to start. Please check browser permissions.');
        }
      }

      // Log audio context settings with platform info
      const latencyInfo = mobileAudioHandler.getLatencyInfo();
      console.log(`AudioContext settings: sampleRate=${Tone.context.sampleRate}, ` +
        `latencyHint=${latencyHint}, baseLatency=${latencyInfo.baseLatency || 'N/A'}`);

      // Initialize IndexedDB audio cache (async, non-blocking)
      audioCache.init().then(() => {
        console.log('Audio cache ready');
      }).catch(e => {
        console.warn('Audio cache init failed:', e);
      });

      // Initialize mastering chain (includes multiband comp, soft clip, limiter)
      // This replaces the simple limiter with a professional mastering setup
      if (this.useMasteringChain) {
        masteringChain.init();
        this.masterGain = masteringChain.getBus('ambient'); // Default output bus

        // UI sounds go to UI bus (sidechains to duck ambient/music)
        this.uiBus = masteringChain.getBus('ui');
        this.ambientBus = masteringChain.getBus('ambient');
        this.musicBus = masteringChain.getBus('music');

        console.log('Using professional mastering chain with sidechain ducking');
      } else {
        // Fallback: simple limiter setup
        this.masterLimiter = new Tone.Limiter(-1).toDestination();
        this.masterGain = new Tone.Gain(this.masterVolume).connect(this.masterLimiter);
        this.uiBus = this.masterGain;
        this.ambientBus = this.masterGain;
        this.musicBus = this.masterGain;
      }

      // Initialize shared effect buses (reverb, delay)
      sharedBuses.init(this.ambientBus);

      // Initialize synth pool for UI sounds
      synthPool.init(this.uiBus);

      // Initialize planet audio transitioner for smooth crossfades
      this.planetTransitioner = new PlanetAudioTransitioner(this.ambientBus);

      // Initialize spatial audio manager for 3D positioning
      if (this.useSpatialAudio) {
        spatialAudioManager.init(this.ambientBus);
        console.log('Spatial audio manager initialized with HRTF');
      }

      // Initialize audio visualizer for FFT analysis
      if (this.useVisualizer) {
        audioVisualizer.init();  // Analyzes master output by default
        this.audioReactiveController = new AudioReactiveController(audioVisualizer);
        console.log('Audio visualizer initialized');
      }

      // Initialize environment acoustics (reverb simulation)
      if (this.useEnvironmentAcoustics) {
        environmentAcoustics.init(this.ambientBus);
        console.log('Environment acoustics initialized');
      }

      // Initialize haptic feedback
      if (this.useHaptics) {
        hapticFeedback.init();
        // Connect to visualizer for beat-synchronized haptics
        if (this.useVisualizer) {
          hapticFeedback.connectAudioVisualizer(audioVisualizer);
        }
        console.log('Haptic feedback initialized');
      }

      // Initialize audio device manager
      audioDeviceManager.init().catch(e => {
        console.warn('Audio device manager init failed:', e);
      });

      // Initialize plasma wave synthesizer for scientifically accurate space sounds
      if (this.usePlasmaWaves) {
        plasmaWaveSynthesizer.init(this.ambientBus);
        console.log('Plasma wave synthesizer initialized');
      }

      // Load UI sounds (procedural synthesis)
      this.setupUISounds();

      // Generative music system (disabled by default - can enable via settings)
      // Music goes to music bus for proper mixing
      try {
        const musicOutput = this.musicBus || this.masterGain;
        this.musicSystem = new MusicSystem(musicOutput);
        this.musicSystem.init();
        this.musicSystem.setVolume(this.musicVolume);
      } catch (musicError) {
        console.warn('Music system initialization failed:', musicError);
        this.musicSystem = null;
        // Continue without music - not critical
      }

      // NASA space sounds (authentic planetary and mission sounds)
      // NASA sounds go to ambient bus
      try {
        const ambientOutput = this.ambientBus || this.masterGain;
        this.nasaSounds = new NASASounds(ambientOutput);
        this.nasaSounds.init();
        this.nasaSounds.setVolume(this.ambientVolume);
        console.log('NASA Sounds initialized');
      } catch (nasaError) {
        console.warn('NASA Sounds initialization failed:', nasaError);
        this.nasaSounds = null;
        // Continue without NASA sounds - not critical
      }

      // Apply initial mute state
      Tone.Destination.mute = this.muted;

      this.initialized = true;
      this.initError = null;
      console.log('AudioManager initialized');

      // Dispatch success event for UI updates
      window.dispatchEvent(new CustomEvent('audioInitialized', { detail: { success: true } }));

    } catch (error) {
      console.warn('AudioManager initialization failed:', error);
      this.initialized = false;
      this.initError = error.message || 'Audio initialization failed';

      // Dispatch error event for UI feedback
      window.dispatchEvent(new CustomEvent('audioInitialized', {
        detail: {
          success: false,
          error: this.initError
        }
      }));

      // Show user-friendly notification
      this.showAudioErrorNotification(this.initError);
    }
  }

  /**
   * Show a user-friendly notification when audio fails
   */
  showAudioErrorNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('audio-error-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.id = 'audio-error-notification';
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(80, 40, 40, 0.9);
        color: #ffcccc;
        padding: 12px 24px;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        z-index: 10000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 100, 100, 0.3);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      `;
      document.body.appendChild(notification);
    }

    notification.textContent = `🔇 Audio unavailable: ${message}`;
    notification.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (notification) {
        notification.style.display = 'none';
      }
    }, 5000);
  }

  /**
   * Check if audio is available
   */
  isAudioAvailable() {
    return this.initialized && !this.initError;
  }

  /**
   * Get initialization error message
   */
  getInitError() {
    return this.initError;
  }

  /**
   * Setup procedural UI sounds using synthesis
   * UI sounds go to the UI bus for sidechain ducking of ambient/music
   */
  setupUISounds() {
    // Use UI bus so these sounds trigger sidechain ducking
    const uiOutput = this.uiBus || this.masterGain;

    // Polyphonic synth for melodic UI sounds
    this.uiSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.1,
        release: 0.3
      }
    }).connect(uiOutput);
    this.uiSynth.volume.value = -10;

    // Noise synth for hover/glitch sounds
    this.uiNoise = new Tone.NoiseSynth({
      noise: { type: 'white' },
      envelope: {
        attack: 0.001,
        decay: 0.05,
        sustain: 0,
        release: 0.01
      }
    }).connect(uiOutput);
    this.uiNoise.volume.value = -25;

    // Membrane synth for deeper UI sounds
    this.uiMembrane = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 4,
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0,
        release: 0.2
      }
    }).connect(uiOutput);
    this.uiMembrane.volume.value = -15;
  }

  // ==================== UI SOUNDS ====================

  /**
   * Play hover sound - quick noise burst
   */
  playHover() {
    if (this.muted || !this.initialized) return;
    try {
      this.uiNoise.triggerAttackRelease('16n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play select/click sound - harmonious ping
   */
  playSelect(objectName = null) {
    if (this.muted || !this.initialized) return;
    try {
      // Random note from C major for variety
      const notes = ['C5', 'E5', 'G5'];
      const note = notes[Math.floor(Math.random() * notes.length)];
      this.uiSynth.triggerAttackRelease(note, '16n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play focus sound - rising chord
   */
  playFocus(objectName = null) {
    if (this.muted || !this.initialized) return;
    try {
      // C major chord for positive feedback
      this.uiSynth.triggerAttackRelease(['C4', 'E4', 'G4'], '8n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play back/cancel sound - lower tone
   */
  playBack() {
    if (this.muted || !this.initialized) return;
    try {
      this.uiSynth.triggerAttackRelease('G3', '8n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play timeline movement sound - quick tick
   */
  playTimelineMove() {
    if (this.muted || !this.initialized) return;
    try {
      this.uiNoise.triggerAttackRelease('32n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play event notification - ascending alert
   */
  playEventNotification() {
    if (this.muted || !this.initialized) return;
    try {
      const now = Tone.now();
      this.uiSynth.triggerAttackRelease('E4', '16n', now);
      this.uiSynth.triggerAttackRelease('G4', '16n', now + 0.1);
      this.uiSynth.triggerAttackRelease('B4', '16n', now + 0.2);
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play speed change sound - pitch reflects speed
   */
  playSpeedChange(speed) {
    if (this.muted || !this.initialized) return;
    try {
      // Map speed to pitch
      const baseNote = 60; // Middle C
      const pitchOffset = Math.log2(Math.max(0.1, speed)) * 4;
      const midiNote = Math.round(baseNote + pitchOffset);
      const freq = Tone.Frequency(midiNote, 'midi').toFrequency();
      this.uiMembrane.triggerAttackRelease(freq, '16n');
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Play pause/resume sound
   */
  playPauseToggle(isPaused) {
    if (this.muted || !this.initialized) return;
    try {
      if (isPaused) {
        // Descending for pause
        this.uiSynth.triggerAttackRelease('E4', '16n');
      } else {
        // Ascending for resume
        const now = Tone.now();
        this.uiSynth.triggerAttackRelease('C4', '16n', now);
        this.uiSynth.triggerAttackRelease('E4', '16n', now + 0.05);
      }
    } catch (e) {
      // Ignore audio errors
    }
  }

  // ==================== VOLUME CONTROLS ====================

  /**
   * Set master volume (0-1)
   */
  setMasterVolume(value) {
    this.masterVolume = Math.max(0, Math.min(1, value));
    if (this.masterGain) {
      this.masterGain.gain.rampTo(this.masterVolume, 0.1);
    }
  }

  /**
   * Set UI sound volume (0-1)
   */
  setUIVolume(value) {
    this.uiVolume = Math.max(0, Math.min(1, value));
    if (this.uiSynth) {
      this.uiSynth.volume.value = Tone.gainToDb(value);
    }
  }

  /**
   * Set ambient sound volume (0-1)
   * Controls NASA space sounds volume
   */
  setAmbientVolume(value) {
    this.ambientVolume = Math.max(0, Math.min(1, value));
    if (this.nasaSounds) {
      this.nasaSounds.setVolume(value);
    }
  }

  /**
   * Set music volume (0-1)
   */
  setMusicVolume(value) {
    this.musicVolume = Math.max(0, Math.min(1, value));
    if (this.musicSystem) {
      this.musicSystem.setVolume(value);
    }
  }

  /**
   * Set music mode: 'generative' or 'off'
   */
  setMusicMode(mode) {
    // Stop current music
    if (this.musicMode === 'generative' && this.musicSystem) {
      this.musicSystem.stop();
    }

    this.musicMode = mode;

    // Start new mode
    if (mode === 'generative' && this.musicSystem && !this.muted) {
      this.musicSystem.start();
      this.musicSystem.setIntensity(0.3);
    }
  }

  /**
   * Get current music mode
   */
  getMusicMode() {
    return this.musicMode;
  }

  /**
   * Set muted state
   */
  setMuted(muted) {
    this.muted = muted;
    if (Tone.Destination) {
      Tone.Destination.mute = muted;
    }
    if (this.musicSystem) {
      this.musicSystem.setMuted(muted);
    }

    // Update accessibility state
    audioAccessibility.setMuted(muted);

    // Update mobile handler playback state
    mobileAudioHandler.setPlaybackState(!muted);
  }

  /**
   * Toggle mute state
   */
  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  /**
   * Get current mute state
   */
  isMuted() {
    return this.muted;
  }

  /**
   * Set the currently focused planet (updates music intensity)
   * @param {string|null} planetName - Name of the planet to focus, or null to unfocus
   */
  setFocusedPlanet(planetName) {
    if (!this.initialized) return;
    if (this.focusedPlanet === planetName) return;

    // Stop previous planet sound
    if (this.focusedPlanet && this.nasaSounds && this.nasaSoundsEnabled) {
      this.nasaSounds.stopPlanetSound(this.focusedPlanet);
    }

    this.focusedPlanet = planetName;

    // Update accessibility with planet focus (announces to screen readers)
    if (planetName) {
      audioAccessibility.announcePlanetFocus(planetName);
      audioAccessibility.showPlayingIndicator(!this.muted);

      // Update Media Session metadata for lock screen display
      mobileAudioHandler.setCurrentPlanet(planetName);
    } else {
      audioAccessibility.updateStatus(null, false);
      audioAccessibility.showPlayingIndicator(false);
    }

    // Update music system intensity
    if (this.musicSystem) {
      if (planetName) {
        this.musicSystem.setIntensity(0.7); // Increase intensity when focused
        this.musicSystem.triggerDiscovery();
      } else {
        this.musicSystem.setIntensity(0.3); // Return to ambient
      }
    }

    // Play NASA planetary sounds when focusing on a planet
    if (this.nasaSounds && this.nasaSoundsEnabled && planetName) {
      // Play discovery fanfare
      this.nasaSounds.playDiscovery();

      // Play planet-specific sounds for supported planets
      const supportedPlanets = ['jupiter', 'saturn', 'earth', 'mars', 'uranus', 'neptune'];
      const supportedMoons = ['io', 'miranda'];
      const nameLower = planetName.toLowerCase();

      if (supportedPlanets.includes(nameLower)) {
        // Delay slightly so discovery sound plays first
        setTimeout(() => {
          if (this.focusedPlanet === planetName) { // Still focused
            this.nasaSounds.playPlanetSound(planetName);
          }
        }, 500);
      }

      // Play moon-specific sounds
      if (supportedMoons.includes(nameLower)) {
        setTimeout(() => {
          if (this.focusedPlanet === planetName) {
            this.nasaSounds.playPlanetSound(planetName); // Uses same method
          }
        }, 500);
      }

      // Play Voyager tones when focusing on Voyager spacecraft
      if (nameLower.includes('voyager')) {
        this.nasaSounds.playVoyagerTones();
      }
    }
  }

  // ==================== LIFECYCLE ====================

  /**
   * Called every frame - update zone-based audio
   * @param {THREE.Camera} camera - The scene camera
   * @param {Array} planets - Array of planet objects (unused, kept for API compatibility)
   * @param {Object} sun - The sun object (unused, kept for API compatibility)
   * @param {Array} dwarfPlanets - Array of dwarf planet objects (unused, kept for API compatibility)
   * @param {number} deltaTime - Time since last frame (unused)
   */
  update(camera, planets, sun, dwarfPlanets, deltaTime) {
    if (!this.initialized || this.muted) return;

    const now = performance.now();

    // Throttle zone updates for performance
    if (now - this.lastUpdateTime >= this.updateInterval) {
      this.lastUpdateTime = now;

      // Update zone-based music system
      const distFromSun = camera.position.length();
      this.updateAmbientZone(distFromSun);
    }

    // Update spatial audio system (handles its own throttling)
    if (this.useSpatialAudio) {
      spatialAudioManager.update(camera, this.spatialObjects);
    }

    // Update audio visualizer and reactive controller
    if (this.useVisualizer) {
      audioVisualizer.update();
      if (this.audioReactiveController) {
        this.audioReactiveController.update();
      }
    }
  }

  /**
   * Update ambient zone based on distance from sun
   * @param {number} distance - Distance from sun
   */
  updateAmbientZone(distance) {
    let newZone = 'inner';

    if (distance > this.ZONE_THRESHOLDS.outerInterstellar) {
      newZone = 'interstellar';
    } else if (distance > this.ZONE_THRESHOLDS.innerOuter) {
      newZone = 'outer';
    }

    if (newZone !== this.currentZone) {
      this.currentZone = newZone;

      // Sync music system zone
      if (this.musicSystem) {
        this.musicSystem.setZone(newZone);
      }

      // Sync NASA sounds zone (solar wind vs interstellar plasma)
      if (this.nasaSounds && this.nasaSoundsEnabled && !this.muted) {
        this.nasaSounds.setZone(newZone);
      }
    }
  }

  /**
   * Handle page visibility changes - mute when tab hidden
   */
  onVisibilityChange(hidden) {
    if (hidden) {
      // Store previous state and mute
      this._wasMutedBeforeHide = this.muted;
      if (Tone.Destination) {
        Tone.Destination.mute = true;
      }
    } else if (!this._wasMutedBeforeHide) {
      // Restore previous state
      if (Tone.Destination) {
        Tone.Destination.mute = this.muted;
      }
    }
  }

  /**
   * Enable or disable NASA space sounds
   * @param {boolean} enabled - Whether NASA sounds should be enabled
   */
  setNASASoundsEnabled(enabled) {
    this.nasaSoundsEnabled = enabled;
    if (!enabled && this.nasaSounds) {
      // Stop all NASA sounds
      this.nasaSounds.stopAmbientDrone('solar');
      this.nasaSounds.stopAmbientDrone('interstellar');
      if (this.focusedPlanet) {
        this.nasaSounds.stopPlanetSound(this.focusedPlanet);
      }
    } else if (enabled && this.nasaSounds && !this.muted) {
      // Restart zone-based ambient
      this.nasaSounds.setZone(this.currentZone);
    }
  }

  /**
   * Check if NASA sounds are enabled
   */
  isNASASoundsEnabled() {
    return this.nasaSoundsEnabled;
  }

  dispose() {
    // Dispose NASA sounds
    if (this.nasaSounds) {
      this.nasaSounds.dispose();
      this.nasaSounds = null;
    }

    // Dispose music system
    if (this.musicSystem) {
      this.musicSystem.dispose();
      this.musicSystem = null;
    }

    // Dispose UI sounds
    if (this.uiSynth) this.uiSynth.dispose();
    if (this.uiNoise) this.uiNoise.dispose();
    if (this.uiMembrane) this.uiMembrane.dispose();

    // Dispose planet transitioner
    if (this.planetTransitioner) {
      this.planetTransitioner.dispose();
      this.planetTransitioner = null;
    }

    // Dispose spatial audio manager
    if (this.useSpatialAudio) {
      spatialAudioManager.dispose();
      this.spatialObjects.clear();
    }

    // Dispose mobile audio handler
    mobileAudioHandler.dispose();

    // Dispose accessibility features
    audioAccessibility.dispose();

    // Dispose visualizer and reactive controller
    if (this.audioReactiveController) {
      this.audioReactiveController.dispose();
      this.audioReactiveController = null;
    }
    audioVisualizer.dispose();

    // Dispose environment acoustics
    environmentAcoustics.dispose();

    // Dispose haptic feedback
    hapticFeedback.dispose();

    // Dispose audio device manager
    audioDeviceManager.dispose();

    // Dispose plasma wave synthesizer
    plasmaWaveSynthesizer.dispose();

    // Dispose synth pool
    synthPool.dispose();

    // Dispose shared effect buses
    sharedBuses.dispose();

    // Dispose mastering chain
    if (this.useMasteringChain) {
      masteringChain.dispose();
    }

    // Dispose master bus (if not using mastering chain)
    if (this.masterGain && !this.useMasteringChain) this.masterGain.dispose();
    if (this.masterLimiter) this.masterLimiter.dispose();

    this.initialized = false;
    this.focusedPlanet = null;
    AudioManager.instance = null;
  }

  /**
   * Get audio system performance stats
   * @returns {Object} - Performance statistics
   */
  getPerformanceStats() {
    const stats = {
      contextState: Tone.context?.state,
      sampleRate: Tone.context?.sampleRate,
      currentTime: Tone.context?.currentTime,
      baseLatency: Tone.context?.baseLatency,
      synthPool: synthPool.getStats(),
      masteringChain: this.useMasteringChain ? masteringChain.getLevels() : null
    };

    // Add cache stats asynchronously
    audioCache.getStats().then(cacheStats => {
      stats.cache = cacheStats;
    });

    return stats;
  }

  /**
   * Set stereo width for immersive soundscape
   * @param {number} width - Width 0 (mono) to 1 (max width)
   */
  setStereoWidth(width) {
    if (this.useMasteringChain) {
      masteringChain.setStereoWidth(width);
    }
  }

  /**
   * Set transition duration for planet audio crossfades
   * @param {number} seconds - Duration in seconds
   */
  setPlanetTransitionDuration(seconds) {
    if (this.planetTransitioner) {
      this.planetTransitioner.setTransitionDuration(seconds);
    }
  }

  /**
   * Get mastering chain levels for debugging/visualization
   * @returns {Object|null}
   */
  getMasteringLevels() {
    return this.useMasteringChain ? masteringChain.getLevels() : null;
  }

  // ==================== SPATIAL AUDIO ====================

  /**
   * Create a spatial audio source for a celestial body
   * @param {string} id - Unique identifier (e.g., 'jupiter', 'mars')
   * @param {string} type - Source type ('planet', 'moon', 'spacecraft', 'ambient')
   * @param {THREE.Object3D} object3D - Three.js object to track position
   * @returns {SpatialAudioSource|null}
   */
  createSpatialSource(id, type = 'planet', object3D = null) {
    if (!this.useSpatialAudio || !this.initialized) return null;

    const source = spatialAudioManager.createSource(id, { type });

    // Track object for position updates
    if (object3D) {
      this.spatialObjects.set(id, object3D);
      source.setPositionFromObject(object3D);
    }

    return source;
  }

  /**
   * Get a spatial audio source by ID
   * @param {string} id - Source identifier
   * @returns {SpatialAudioSource|null}
   */
  getSpatialSource(id) {
    if (!this.useSpatialAudio) return null;
    return spatialAudioManager.getSource(id);
  }

  /**
   * Remove a spatial audio source
   * @param {string} id - Source identifier
   */
  removeSpatialSource(id) {
    if (!this.useSpatialAudio) return;
    spatialAudioManager.removeSource(id);
    this.spatialObjects.delete(id);
  }

  /**
   * Register a Three.js object for spatial audio position tracking
   * @param {string} id - Identifier matching a spatial source
   * @param {THREE.Object3D} object3D - Three.js object
   */
  registerSpatialObject(id, object3D) {
    this.spatialObjects.set(id, object3D);
  }

  /**
   * Unregister a spatial audio object
   * @param {string} id - Object identifier
   */
  unregisterSpatialObject(id) {
    this.spatialObjects.delete(id);
  }

  /**
   * Enable or disable HRTF (Head-Related Transfer Function)
   * HRTF provides more realistic 3D positioning but uses more CPU
   * @param {boolean} enabled - Whether to use HRTF
   */
  setHRTFEnabled(enabled) {
    if (this.useSpatialAudio) {
      spatialAudioManager.setHRTF(enabled);
    }
  }

  /**
   * Enable or disable spatial audio entirely
   * @param {boolean} enabled - Whether to use spatial audio
   */
  setSpatialAudioEnabled(enabled) {
    this.useSpatialAudio = enabled;
    if (!enabled) {
      // Clean up all spatial sources
      spatialAudioManager.dispose();
      this.spatialObjects.clear();
    } else if (this.initialized) {
      // Re-initialize spatial audio
      spatialAudioManager.init(this.ambientBus);
    }
  }

  /**
   * Get spatial audio statistics
   * @returns {Object}
   */
  getSpatialAudioStats() {
    if (!this.useSpatialAudio) {
      return { enabled: false };
    }
    return {
      enabled: true,
      ...spatialAudioManager.getStats()
    };
  }

  /**
   * Get available attenuation presets for spatial audio
   * @returns {Object}
   */
  getAttenuationPresets() {
    return ATTENUATION_PRESETS;
  }

  // ==================== MOBILE & ACCESSIBILITY ====================

  /**
   * Get mobile audio handler state for debugging
   * @returns {Object}
   */
  getMobileAudioState() {
    return mobileAudioHandler.getState();
  }

  /**
   * Get platform detection info
   * @returns {Object}
   */
  getPlatformInfo() {
    return {
      iOS: PlatformDetection.isIOS(),
      android: PlatformDetection.isAndroid(),
      safari: PlatformDetection.isSafari(),
      mobile: PlatformDetection.isMobile(),
      pwa: PlatformDetection.isPWA(),
      iosVersion: PlatformDetection.getIOSVersion(),
      supportsAudioWorklet: PlatformDetection.supportsAudioWorklet(),
      supportsMediaSession: PlatformDetection.supportsMediaSession()
    };
  }

  /**
   * Get audio description for a sound (for accessibility)
   * @param {string} soundId - Sound identifier
   * @returns {Object|null}
   */
  getAudioDescription(soundId) {
    return audioAccessibility.getDescription(soundId);
  }

  /**
   * Get all audio descriptions
   * @returns {Object}
   */
  getAllAudioDescriptions() {
    return audioAccessibility.getAllDescriptions();
  }

  /**
   * Manually trigger audio resume (useful after interruptions)
   * @returns {Promise<boolean>}
   */
  async attemptAudioResume() {
    return mobileAudioHandler.attemptResume();
  }

  /**
   * Check if audio is currently available and working
   * @returns {boolean}
   */
  isAudioWorking() {
    return mobileAudioHandler.isAudioAvailable() && this.initialized;
  }

  // ==================== IMMERSIVE AUDIO FEATURES ====================

  /**
   * Get audio analysis data for visualization
   * @returns {Object|null}
   */
  getVisualizationData() {
    if (!this.useVisualizer) return null;
    return audioVisualizer.getAnalysisData();
  }

  /**
   * Get frequency spectrum for visualization (bar graph style)
   * @param {number} barCount - Number of bars
   * @param {boolean} logarithmic - Use logarithmic scale (better for music)
   * @returns {Float32Array}
   */
  getSpectrum(barCount = 32, logarithmic = true) {
    if (!this.useVisualizer) return new Float32Array(barCount);
    return logarithmic
      ? audioVisualizer.getLogSpectrum(barCount)
      : audioVisualizer.getSpectrum(barCount);
  }

  /**
   * Register a Three.js object to react to audio
   * @param {string} id - Unique identifier
   * @param {THREE.Object3D} object - The Three.js object
   * @param {Object} config - Reaction configuration
   */
  registerAudioReactiveObject(id, object, config = {}) {
    if (!this.audioReactiveController) return;
    this.audioReactiveController.registerTarget(id, object, config);
  }

  /**
   * Unregister an audio-reactive object
   * @param {string} id
   */
  unregisterAudioReactiveObject(id) {
    if (!this.audioReactiveController) return;
    this.audioReactiveController.unregisterTarget(id);
  }

  /**
   * Set callback for beat detection
   * @param {Function} callback - Called on each detected beat
   */
  onBeatDetected(callback) {
    if (audioVisualizer) {
      audioVisualizer.onBeat = callback;
    }
  }

  /**
   * Set environment acoustics based on location
   * @param {string} environment - Environment preset name
   * @param {boolean} transition - Smooth transition
   */
  setEnvironment(environment, transition = true) {
    if (!this.useEnvironmentAcoustics) return;
    environmentAcoustics.setEnvironment(environment, transition);
  }

  /**
   * Set environment based on celestial body type
   * @param {string} bodyType - 'planet', 'moon', 'star', etc.
   * @param {string} bodyName - Specific body name
   */
  setEnvironmentForBody(bodyType, bodyName = null) {
    if (!this.useEnvironmentAcoustics) return;
    environmentAcoustics.setEnvironmentForBody(bodyType, bodyName);
  }

  /**
   * Get available environment presets
   * @returns {Array}
   */
  getEnvironmentPresets() {
    return environmentAcoustics.getEnvironmentList();
  }

  /**
   * Get current environment info
   * @returns {Object}
   */
  getCurrentEnvironment() {
    return environmentAcoustics.getCurrentEnvironment();
  }

  /**
   * Trigger haptic feedback
   * @param {string} pattern - Pattern name from HAPTIC_PATTERNS
   */
  triggerHaptic(pattern = 'tap') {
    if (!this.useHaptics) return;
    hapticFeedback.trigger(pattern);
  }

  /**
   * Trigger discovery haptic feedback
   */
  triggerDiscoveryHaptic() {
    if (!this.useHaptics) return;
    hapticFeedback.playDiscoveryHaptic();
  }

  /**
   * Enable/disable beat-synchronized haptics
   * @param {boolean} enabled
   */
  setBeatSyncHaptics(enabled) {
    hapticFeedback.setBeatSyncEnabled(enabled);
  }

  /**
   * Set haptic intensity
   * @param {number} intensity - 0 to 1
   */
  setHapticIntensity(intensity) {
    hapticFeedback.setIntensity(intensity);
  }

  /**
   * Get haptic capabilities
   * @returns {Object}
   */
  getHapticCapabilities() {
    return hapticFeedback.getCapabilities();
  }

  /**
   * Get available audio output devices
   * @returns {Array}
   */
  async getAudioDevices() {
    return audioDeviceManager.getDevices();
  }

  /**
   * Set audio output device
   * @param {string} deviceId - Device ID
   * @returns {Promise<boolean>}
   */
  async setAudioDevice(deviceId) {
    return audioDeviceManager.setOutputDevice(deviceId);
  }

  /**
   * Get current audio output device
   * @returns {Object|null}
   */
  getCurrentAudioDevice() {
    return audioDeviceManager.getCurrentDevice();
  }

  /**
   * Get audio output info (channels, latency, etc.)
   * @returns {Object}
   */
  getAudioOutputInfo() {
    return audioDeviceManager.getOutputInfo();
  }

  /**
   * Check if surround sound is available
   * @returns {boolean}
   */
  isSurroundSoundAvailable() {
    return audioDeviceManager.isSurroundSoundAvailable();
  }

  /**
   * Get comprehensive audio system state for debugging
   * @returns {Object}
   */
  getFullAudioState() {
    return {
      initialized: this.initialized,
      muted: this.muted,
      zone: this.currentZone,
      focusedPlanet: this.focusedPlanet,
      platform: this.getPlatformInfo(),
      mobile: this.getMobileAudioState(),
      spatial: this.getSpatialAudioStats(),
      environment: this.getCurrentEnvironment(),
      haptics: this.getHapticCapabilities(),
      output: this.getAudioOutputInfo(),
      mastering: this.getMasteringLevels(),
      performance: this.getPerformanceStats(),
      plasmaWaves: this.getPlasmaWaveState()
    };
  }

  // ==================== PLASMA WAVE SYNTHESIZER ====================

  /**
   * Start scientifically accurate plasma wave sounds for a planet
   * Based on NASA Voyager PWS data and magnetospheric research
   * @param {string} planetName - Planet name (jupiter, saturn, earth, etc.)
   * @param {Object} options - { intensity: 0-1 }
   */
  async startPlasmaWaves(planetName, options = {}) {
    if (!this.usePlasmaWaves || !this.initialized || this.muted) return;
    await plasmaWaveSynthesizer.startPlanet(planetName, options);
  }

  /**
   * Stop plasma wave sounds
   * @param {number} fadeTime - Fade out duration in seconds
   */
  async stopPlasmaWaves(fadeTime = 1) {
    if (!this.usePlasmaWaves) return;
    await plasmaWaveSynthesizer.stop(fadeTime);
  }

  /**
   * Set plasma wave intensity
   * @param {number} intensity - 0 to 1
   */
  setPlasmaWaveIntensity(intensity) {
    if (!this.usePlasmaWaves) return;
    plasmaWaveSynthesizer.setIntensity(intensity);
  }

  /**
   * Get available planets for plasma wave sounds
   * @returns {Array<string>}
   */
  getPlasmaWavePlanets() {
    return plasmaWaveSynthesizer.getAvailablePlanets();
  }

  /**
   * Get frequency ranges for a planet's magnetospheric emissions
   * @param {string} planetName
   * @returns {Object|null}
   */
  getPlanetaryFrequencies(planetName) {
    const name = planetName?.toLowerCase();
    return PLANETARY_FREQUENCIES[name] || null;
  }

  /**
   * Get plasma wave synthesizer state
   * @returns {Object}
   */
  getPlasmaWaveState() {
    return plasmaWaveSynthesizer.getState();
  }

  /**
   * Enable or disable plasma wave synthesis
   * @param {boolean} enabled
   */
  setPlasmaWavesEnabled(enabled) {
    this.usePlasmaWaves = enabled;
    if (!enabled) {
      plasmaWaveSynthesizer.stop(0.5);
    }
  }

  /**
   * Check if plasma waves are currently playing
   * @returns {boolean}
   */
  isPlasmaWavesPlaying() {
    return plasmaWaveSynthesizer.getState().isPlaying;
  }
}

// Export singleton instance
export const audioManager = new AudioManager();
export default audioManager;
