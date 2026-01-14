/**
 * AudioAccessibility - Accessibility features for the audio system
 *
 * Based on WCAG 2.1 guidelines and 2024-2025 accessibility best practices:
 * - Visual feedback for audio events (for deaf/hard-of-hearing users)
 * - ARIA live regions for screen reader announcements
 * - Text alternatives for audio content
 * - Keyboard-accessible audio controls
 *
 * Features:
 * - Visual indicators when audio is playing
 * - Screen reader announcements for audio state changes
 * - Text descriptions of audio content
 * - Focus management for audio controls
 */

/**
 * Audio descriptions for educational content
 * Provides text alternatives for users who cannot hear
 */
export const AUDIO_DESCRIPTIONS = {
  // Planet ambient sounds
  jupiter: {
    title: 'Jupiter Electromagnetic Emissions',
    description: 'Deep, rumbling electromagnetic waves from Jupiter\'s magnetosphere. ' +
      'The sound includes low-frequency oscillations caused by plasma interactions ' +
      'with the planet\'s powerful magnetic field, recorded by Voyager and Juno spacecraft.',
    character: 'Low rumbling, oceanic waves, mysterious hums'
  },
  saturn: {
    title: 'Saturn Radio Emissions',
    description: 'Ethereal, sweeping radio emissions from Saturn\'s auroras and rings. ' +
      'These sounds include kilometric radio waves that sweep up and down in frequency, ' +
      'creating an otherworldly, whistling quality.',
    character: 'Whistling sweeps, static bursts, ethereal tones'
  },
  earth: {
    title: 'Earth\'s Chorus Waves',
    description: 'Chirping, rising tones produced by electromagnetic waves in Earth\'s ' +
      'magnetosphere. These "chorus" waves sound like birds chirping at dawn, caused by ' +
      'electrons spiraling along Earth\'s magnetic field lines.',
    character: 'Chirping, bird-like calls, rising whistles'
  },
  mars: {
    title: 'Mars Atmospheric Sounds',
    description: 'Subtle wind sounds and low rumbles from Mars, captured by the InSight ' +
      'lander and Perseverance rover. The thin Martian atmosphere creates a distinctive, ' +
      'quiet soundscape with occasional gusts.',
    character: 'Quiet whispers, gentle wind, subtle vibrations'
  },
  uranus: {
    title: 'Uranus Plasma Wave Sounds',
    description: 'Unusual, wobbling radio emissions from Uranus, detected during Voyager 2\'s ' +
      'flyby. The ice giant produces distinctive plasma wave signatures different from ' +
      'other planets.',
    character: 'Wobbling tones, unusual oscillations'
  },
  neptune: {
    title: 'Neptune Wind Recordings',
    description: 'Powerful atmospheric dynamics from Neptune, the windiest planet. ' +
      'Wind speeds exceed 1,200 mph, creating dramatic audio when translated from ' +
      'atmospheric data.',
    character: 'Howling winds, powerful gusts, dynamic rumbles'
  },

  // Moon sounds
  io: {
    title: 'Io Plasma Torus',
    description: 'Intense electromagnetic emissions from Jupiter\'s volcanic moon Io. ' +
      'Io\'s volcanic activity creates a donut-shaped plasma torus around Jupiter, ' +
      'producing distinctive radio emissions.',
    character: 'Intense crackles, sharp bursts, volcanic energy'
  },
  miranda: {
    title: 'Miranda Ambient',
    description: 'Synthesized representation of Uranus\'s fractured moon Miranda, based on ' +
      'its dramatic terrain of canyons and cliffs.',
    character: 'Mysterious, crystalline, fractured tones'
  },

  // Ambient zones
  solar: {
    title: 'Solar Wind',
    description: 'The continuous stream of charged particles flowing from the Sun. ' +
      'This "solar wind" creates a constant background hiss of plasma waves that ' +
      'permeates the inner solar system.',
    character: 'Steady hiss, flowing energy, warm static'
  },
  interstellar: {
    title: 'Interstellar Space',
    description: 'The sounds of interstellar space recorded by Voyager 1 after leaving ' +
      'our solar system. A quieter, more sparse soundscape than the inner heliosphere.',
    character: 'Sparse tones, cosmic silence, distant echoes'
  },

  // Spacecraft
  voyager: {
    title: 'Voyager Golden Record Tones',
    description: 'Calibration tones and greetings from NASA\'s Voyager spacecraft, ' +
      'carrying humanity\'s message to the stars since 1977.',
    character: 'Pure tones, mathematical precision, hopeful signals'
  },

  // Music
  generative: {
    title: 'Generative Ambient Music',
    description: 'Procedurally generated ambient music that responds to your exploration. ' +
      'The music uses Lydian mode scales for a sense of wonder and discovery, with ' +
      'intensity changing based on what you\'re viewing.',
    character: 'Evolving pads, gentle arpeggios, contemplative melodies'
  }
};

/**
 * AudioAccessibility - Manages accessibility features for audio
 */
class AudioAccessibility {
  constructor() {
    this.liveRegion = null;
    this.visualIndicator = null;
    this.statusElement = null;
    this.initialized = false;
    this.announceQueue = [];
    this.isAnnouncing = false;

    // Current audio state for status
    this.currentSound = null;
    this.isMuted = true;
    this.volume = 50;
  }

  /**
   * Initialize accessibility features
   * Creates ARIA live regions and visual indicators
   */
  init() {
    if (this.initialized) return;

    this.createLiveRegion();
    this.createVisualIndicator();
    this.createStatusElement();

    this.initialized = true;
    console.log('AudioAccessibility initialized');
  }

  /**
   * Create ARIA live region for screen reader announcements
   * Uses polite priority to avoid interrupting user
   */
  createLiveRegion() {
    // Check if already exists
    if (document.getElementById('audio-announcer')) {
      this.liveRegion = document.getElementById('audio-announcer');
      return;
    }

    this.liveRegion = document.createElement('div');
    this.liveRegion.id = 'audio-announcer';
    this.liveRegion.setAttribute('role', 'status');
    this.liveRegion.setAttribute('aria-live', 'polite');
    this.liveRegion.setAttribute('aria-atomic', 'true');

    // Visually hidden but accessible to screen readers
    this.liveRegion.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;

    document.body.appendChild(this.liveRegion);
  }

  /**
   * Create visual indicator for audio playback
   * Shows animated bars when audio is playing
   */
  createVisualIndicator() {
    // Check if already exists
    if (document.getElementById('audio-visual-indicator')) {
      this.visualIndicator = document.getElementById('audio-visual-indicator');
      return;
    }

    this.visualIndicator = document.createElement('div');
    this.visualIndicator.id = 'audio-visual-indicator';
    this.visualIndicator.setAttribute('aria-hidden', 'true'); // Decorative only
    this.visualIndicator.setAttribute('title', 'Audio playing');

    this.visualIndicator.innerHTML = `
      <div class="audio-bar"></div>
      <div class="audio-bar"></div>
      <div class="audio-bar"></div>
      <div class="audio-bar"></div>
    `;

    this.visualIndicator.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      display: none;
      align-items: flex-end;
      gap: 3px;
      height: 20px;
      padding: 8px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 8px;
      z-index: 9999;
      backdrop-filter: blur(4px);
    `;

    // Add styles for animation
    const style = document.createElement('style');
    style.textContent = `
      #audio-visual-indicator .audio-bar {
        width: 4px;
        background: linear-gradient(to top, #4ade80, #22d3ee);
        border-radius: 2px;
        animation: audioBarPulse 0.8s ease-in-out infinite;
      }
      #audio-visual-indicator .audio-bar:nth-child(1) { height: 8px; animation-delay: 0s; }
      #audio-visual-indicator .audio-bar:nth-child(2) { height: 16px; animation-delay: 0.2s; }
      #audio-visual-indicator .audio-bar:nth-child(3) { height: 12px; animation-delay: 0.4s; }
      #audio-visual-indicator .audio-bar:nth-child(4) { height: 6px; animation-delay: 0.6s; }

      @keyframes audioBarPulse {
        0%, 100% { transform: scaleY(0.5); opacity: 0.6; }
        50% { transform: scaleY(1); opacity: 1; }
      }

      #audio-visual-indicator.muted .audio-bar {
        animation: none;
        opacity: 0.3;
        transform: scaleY(0.3);
      }

      /* Respect reduced motion preferences */
      @media (prefers-reduced-motion: reduce) {
        #audio-visual-indicator .audio-bar {
          animation: none;
        }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(this.visualIndicator);
  }

  /**
   * Create visible status element for current audio
   * Shows what sound is currently playing
   */
  createStatusElement() {
    // Check if already exists
    if (document.getElementById('audio-status')) {
      this.statusElement = document.getElementById('audio-status');
      return;
    }

    this.statusElement = document.createElement('div');
    this.statusElement.id = 'audio-status';
    this.statusElement.setAttribute('role', 'status');

    this.statusElement.style.cssText = `
      position: fixed;
      bottom: 50px;
      left: 20px;
      max-width: 250px;
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.7);
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      border-radius: 6px;
      z-index: 9998;
      backdrop-filter: blur(4px);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;

    document.body.appendChild(this.statusElement);
  }

  /**
   * Announce a message to screen readers
   * @param {string} message - Message to announce
   * @param {string} priority - 'polite' or 'assertive'
   */
  announce(message, priority = 'polite') {
    if (!this.liveRegion) return;

    // Queue announcement to avoid overlap
    this.announceQueue.push({ message, priority });
    this.processAnnounceQueue();
  }

  /**
   * Process announcement queue
   */
  processAnnounceQueue() {
    if (this.isAnnouncing || this.announceQueue.length === 0) return;

    this.isAnnouncing = true;
    const { message, priority } = this.announceQueue.shift();

    // Update priority if needed
    this.liveRegion.setAttribute('aria-live', priority);

    // Clear and set new content (forces re-announcement)
    this.liveRegion.textContent = '';

    // Small delay to ensure screen reader picks up change
    setTimeout(() => {
      this.liveRegion.textContent = message;

      // Allow next announcement after a delay
      setTimeout(() => {
        this.isAnnouncing = false;
        this.processAnnounceQueue();
      }, 1000);
    }, 100);
  }

  /**
   * Show visual indicator that audio is playing
   * @param {boolean} playing - Whether audio is playing
   */
  showPlayingIndicator(playing) {
    if (!this.visualIndicator) return;

    if (playing && !this.isMuted) {
      this.visualIndicator.style.display = 'flex';
      this.visualIndicator.classList.remove('muted');
    } else if (this.isMuted) {
      this.visualIndicator.style.display = 'flex';
      this.visualIndicator.classList.add('muted');
    } else {
      this.visualIndicator.style.display = 'none';
    }
  }

  /**
   * Update status display with current sound info
   * @param {string} soundId - ID of the current sound
   * @param {boolean} show - Whether to show the status
   */
  updateStatus(soundId, show = true) {
    if (!this.statusElement) return;

    this.currentSound = soundId;

    if (!show || !soundId) {
      this.statusElement.style.opacity = '0';
      return;
    }

    const description = AUDIO_DESCRIPTIONS[soundId.toLowerCase()];

    if (description) {
      this.statusElement.innerHTML = `
        <strong>🔊 ${description.title}</strong><br>
        <span style="opacity: 0.8">${description.character}</span>
      `;
      this.statusElement.style.opacity = '1';

      // Announce to screen readers
      this.announce(`Now playing: ${description.title}. ${description.character}`);
    }
  }

  /**
   * Announce audio state change
   * @param {string} state - 'playing', 'paused', 'muted', 'unmuted'
   * @param {string} soundId - Optional sound identifier
   */
  announceStateChange(state, soundId = null) {
    let message = '';

    switch (state) {
      case 'playing':
        if (soundId && AUDIO_DESCRIPTIONS[soundId.toLowerCase()]) {
          const desc = AUDIO_DESCRIPTIONS[soundId.toLowerCase()];
          message = `Audio playing: ${desc.title}`;
        } else {
          message = 'Audio playing';
        }
        this.showPlayingIndicator(true);
        break;

      case 'paused':
        message = 'Audio paused';
        this.showPlayingIndicator(false);
        break;

      case 'muted':
        this.isMuted = true;
        message = 'Audio muted';
        this.showPlayingIndicator(false);
        break;

      case 'unmuted':
        this.isMuted = false;
        message = 'Audio unmuted';
        if (this.currentSound) {
          this.showPlayingIndicator(true);
        }
        break;

      case 'volumeChange':
        // Don't announce every volume change, just significant ones
        break;

      default:
        message = `Audio: ${state}`;
    }

    if (message) {
      this.announce(message);
    }
  }

  /**
   * Announce planet focus with audio description
   * @param {string} planetName - Name of the planet
   */
  announcePlanetFocus(planetName) {
    const desc = AUDIO_DESCRIPTIONS[planetName.toLowerCase()];

    if (desc) {
      // Show visual status
      this.updateStatus(planetName, true);

      // Full description for screen readers
      this.announce(
        `Focused on ${planetName}. ${desc.description}`,
        'polite'
      );
    }
  }

  /**
   * Get full audio description for a sound
   * @param {string} soundId - Sound identifier
   * @returns {Object|null} Description object
   */
  getDescription(soundId) {
    return AUDIO_DESCRIPTIONS[soundId.toLowerCase()] || null;
  }

  /**
   * Get all available descriptions
   * @returns {Object}
   */
  getAllDescriptions() {
    return AUDIO_DESCRIPTIONS;
  }

  /**
   * Hide all visual indicators
   */
  hideAll() {
    if (this.visualIndicator) {
      this.visualIndicator.style.display = 'none';
    }
    if (this.statusElement) {
      this.statusElement.style.opacity = '0';
    }
  }

  /**
   * Set mute state
   * @param {boolean} muted
   */
  setMuted(muted) {
    this.isMuted = muted;
    this.announceStateChange(muted ? 'muted' : 'unmuted');
  }

  /**
   * Dispose and cleanup
   */
  dispose() {
    if (this.liveRegion && this.liveRegion.parentNode) {
      this.liveRegion.parentNode.removeChild(this.liveRegion);
    }
    if (this.visualIndicator && this.visualIndicator.parentNode) {
      this.visualIndicator.parentNode.removeChild(this.visualIndicator);
    }
    if (this.statusElement && this.statusElement.parentNode) {
      this.statusElement.parentNode.removeChild(this.statusElement);
    }

    this.liveRegion = null;
    this.visualIndicator = null;
    this.statusElement = null;
    this.initialized = false;
  }
}

// Export singleton instance
export const audioAccessibility = new AudioAccessibility();
export default audioAccessibility;
