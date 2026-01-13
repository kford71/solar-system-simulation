/**
 * AudioSystem Component
 *
 * Provides audio feedback for the solar system simulation using Web Audio API.
 * Features:
 * - Ambient space drone
 * - Whoosh/zoom sound when camera focuses on a new planet
 * - Ping/chime when clicking on a celestial body
 * - Unique tones based on planet size
 * - Mute/unmute toggle
 * - Volume controls
 */

export class AudioSystem {
  constructor() {
    this.audioContext = null;
    this.isInitialized = false;
    this.isMuted = true;  // Start muted (browser autoplay policy)

    // Volume settings
    this.masterVolume = 0.5;
    this.ambientVolume = 0.3;
    this.uiVolume = 0.5;

    // Audio nodes
    this.masterGain = null;
    this.ambientGain = null;
    this.uiGain = null;

    // Ambient oscillators
    this.ambientOscillators = [];
    this.ambientNoiseNode = null;

    // Planet frequency mapping (lower pitch for larger planets)
    this.planetFrequencies = {
      'Sun': 55,        // A1 - deep bass
      'Jupiter': 82,    // E2
      'Saturn': 98,     // G2
      'Uranus': 110,    // A2
      'Neptune': 123,   // B2
      'Earth': 196,     // G3
      'Venus': 220,     // A3
      'Mars': 247,      // B3
      'Mercury': 330,   // E4
      'Moon': 392,      // G4
      'Pluto': 440,     // A4
      'Ceres': 523,     // C5
      'Comet': 587,     // D5
      'default': 262    // C4
    };

    this.currentFocusedBody = null;

    // Create audio enable prompt
    this.createAudioPrompt();
  }

  /**
   * Create the "Click to enable sound" prompt
   */
  createAudioPrompt() {
    this.audioPrompt = document.createElement('div');
    this.audioPrompt.id = 'audio-prompt';
    this.audioPrompt.innerHTML = `
      <div class="audio-prompt-content">
        <span class="audio-icon">&#127925;</span>
        <span>Click to enable sound</span>
      </div>
    `;
    this.audioPrompt.style.cssText = `
      position: fixed;
      bottom: 100px;
      right: 20px;
      background: rgba(10, 10, 30, 0.9);
      border: 1px solid rgba(100, 150, 255, 0.3);
      border-radius: 8px;
      padding: 12px 20px;
      color: #88ccff;
      font-size: 14px;
      cursor: pointer;
      z-index: 100;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    `;

    this.audioPrompt.addEventListener('mouseenter', () => {
      this.audioPrompt.style.borderColor = 'rgba(100, 150, 255, 0.6)';
      this.audioPrompt.style.background = 'rgba(20, 20, 50, 0.95)';
    });

    this.audioPrompt.addEventListener('mouseleave', () => {
      this.audioPrompt.style.borderColor = 'rgba(100, 150, 255, 0.3)';
      this.audioPrompt.style.background = 'rgba(10, 10, 30, 0.9)';
    });

    this.audioPrompt.addEventListener('click', () => {
      this.enableAudio();
    });

    document.body.appendChild(this.audioPrompt);
  }

  /**
   * Initialize audio context and enable audio
   */
  async enableAudio() {
    if (this.isInitialized) {
      this.unmute();
      return;
    }

    try {
      // Create audio context
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Resume context if suspended (browser autoplay policy)
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      // Setup gain nodes
      this.setupGainNodes();

      // Start ambient sound
      this.startAmbientSound();

      this.isInitialized = true;
      this.isMuted = false;

      // Hide prompt
      this.audioPrompt.style.opacity = '0';
      setTimeout(() => {
        this.audioPrompt.style.display = 'none';
      }, 300);

      // Play a welcome chime
      this.playWelcomeChime();

    } catch (error) {
      console.warn('Failed to initialize audio:', error);
    }
  }

  /**
   * Setup gain nodes for volume control
   */
  setupGainNodes() {
    // Master gain
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = this.masterVolume;
    this.masterGain.connect(this.audioContext.destination);

    // Ambient gain (connects to master)
    this.ambientGain = this.audioContext.createGain();
    this.ambientGain.gain.value = this.ambientVolume;
    this.ambientGain.connect(this.masterGain);

    // UI sounds gain (connects to master)
    this.uiGain = this.audioContext.createGain();
    this.uiGain.gain.value = this.uiVolume;
    this.uiGain.connect(this.masterGain);
  }

  /**
   * Start the ambient space drone
   */
  startAmbientSound() {
    // Deep bass drone
    const bassOsc = this.audioContext.createOscillator();
    bassOsc.type = 'sine';
    bassOsc.frequency.value = 40;

    const bassGain = this.audioContext.createGain();
    bassGain.gain.value = 0.15;

    bassOsc.connect(bassGain);
    bassGain.connect(this.ambientGain);
    bassOsc.start();
    this.ambientOscillators.push({ osc: bassOsc, gain: bassGain });

    // Sub-harmonic
    const subOsc = this.audioContext.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.value = 20;

    const subGain = this.audioContext.createGain();
    subGain.gain.value = 0.1;

    subOsc.connect(subGain);
    subGain.connect(this.ambientGain);
    subOsc.start();
    this.ambientOscillators.push({ osc: subOsc, gain: subGain });

    // High-pitched distant star sound
    const highOsc = this.audioContext.createOscillator();
    highOsc.type = 'sine';
    highOsc.frequency.value = 2000;

    const highGain = this.audioContext.createGain();
    highGain.gain.value = 0.01;

    // LFO for subtle variation
    const lfo = this.audioContext.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.05;

    const lfoGain = this.audioContext.createGain();
    lfoGain.gain.value = 300;

    lfo.connect(lfoGain);
    lfoGain.connect(highOsc.frequency);
    lfo.start();

    highOsc.connect(highGain);
    highGain.connect(this.ambientGain);
    highOsc.start();
    this.ambientOscillators.push({ osc: highOsc, gain: highGain, lfo });

    // Filtered noise for "space hiss"
    this.createSpaceNoise();
  }

  /**
   * Create filtered noise for ambient space sound
   */
  createSpaceNoise() {
    // Create noise buffer
    const bufferSize = this.audioContext.sampleRate * 2;
    const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    // Noise source
    this.ambientNoiseNode = this.audioContext.createBufferSource();
    this.ambientNoiseNode.buffer = noiseBuffer;
    this.ambientNoiseNode.loop = true;

    // High-pass filter
    const highpass = this.audioContext.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 8000;

    // Low-pass filter
    const lowpass = this.audioContext.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 12000;

    // Very quiet
    const noiseGain = this.audioContext.createGain();
    noiseGain.gain.value = 0.02;

    this.ambientNoiseNode.connect(highpass);
    highpass.connect(lowpass);
    lowpass.connect(noiseGain);
    noiseGain.connect(this.ambientGain);

    this.ambientNoiseNode.start();
  }

  /**
   * Play welcome chime
   */
  playWelcomeChime() {
    const now = this.audioContext.currentTime;

    // Arpeggio of pleasant notes
    const notes = [261.63, 329.63, 392, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, i) => {
      this.playNote(freq, now + i * 0.15, 0.4, 0.15);
    });
  }

  /**
   * Play a single note
   */
  playNote(frequency, startTime, duration, volume = 0.2) {
    if (!this.isInitialized || this.isMuted) return;

    const osc = this.audioContext.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = frequency;

    const gain = this.audioContext.createGain();
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.uiGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  /**
   * Play click/select sound for a celestial body
   */
  playSelectSound(bodyName) {
    if (!this.isInitialized || this.isMuted) return;

    const frequency = this.planetFrequencies[bodyName] || this.planetFrequencies.default;
    const now = this.audioContext.currentTime;

    // Main tone
    this.playNote(frequency, now, 0.3, 0.25);

    // Harmonic overtone
    this.playNote(frequency * 1.5, now + 0.05, 0.25, 0.1);

    // High ping
    this.playNote(frequency * 2, now + 0.02, 0.15, 0.08);
  }

  /**
   * Play focus/zoom sound when camera focuses on a body
   */
  playFocusSound(bodyName) {
    if (!this.isInitialized || this.isMuted) return;
    if (this.currentFocusedBody === bodyName) return;

    this.currentFocusedBody = bodyName;

    const baseFreq = this.planetFrequencies[bodyName] || this.planetFrequencies.default;
    const now = this.audioContext.currentTime;

    // Whoosh effect using filtered noise sweep
    this.playWhoosh(now, 0.5);

    // Rising tone
    const osc = this.audioContext.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq * 0.5, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.3);

    const gain = this.audioContext.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(gain);
    gain.connect(this.uiGain);

    osc.start(now);
    osc.stop(now + 1);

    // Arrival chime
    setTimeout(() => {
      if (!this.isMuted) {
        this.playNote(baseFreq, this.audioContext.currentTime, 0.5, 0.2);
        this.playNote(baseFreq * 1.25, this.audioContext.currentTime + 0.1, 0.4, 0.1);
      }
    }, 400);
  }

  /**
   * Play whoosh effect
   */
  playWhoosh(startTime, duration) {
    // Create noise for whoosh
    const bufferSize = this.audioContext.sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = buffer;

    // Bandpass filter that sweeps up
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(200, startTime);
    filter.frequency.exponentialRampToValueAtTime(2000, startTime + duration * 0.7);
    filter.frequency.exponentialRampToValueAtTime(500, startTime + duration);
    filter.Q.value = 2;

    const gain = this.audioContext.createGain();
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.15, startTime + duration * 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.uiGain);

    noise.start(startTime);
    noise.stop(startTime + duration);
  }

  /**
   * Play hover sound
   */
  playHoverSound() {
    if (!this.isInitialized || this.isMuted) return;

    const now = this.audioContext.currentTime;
    this.playNote(800, now, 0.08, 0.05);
  }

  /**
   * Set master volume
   */
  setMasterVolume(value) {
    this.masterVolume = Math.max(0, Math.min(1, value));
    if (this.masterGain) {
      this.masterGain.gain.linearRampToValueAtTime(
        this.masterVolume,
        this.audioContext.currentTime + 0.1
      );
    }
  }

  /**
   * Set ambient volume
   */
  setAmbientVolume(value) {
    this.ambientVolume = Math.max(0, Math.min(1, value));
    if (this.ambientGain) {
      this.ambientGain.gain.linearRampToValueAtTime(
        this.ambientVolume,
        this.audioContext.currentTime + 0.1
      );
    }
  }

  /**
   * Set UI sounds volume
   */
  setUIVolume(value) {
    this.uiVolume = Math.max(0, Math.min(1, value));
    if (this.uiGain) {
      this.uiGain.gain.linearRampToValueAtTime(
        this.uiVolume,
        this.audioContext.currentTime + 0.1
      );
    }
  }

  /**
   * Mute all audio
   */
  mute() {
    this.isMuted = true;
    if (this.masterGain) {
      this.masterGain.gain.linearRampToValueAtTime(
        0,
        this.audioContext.currentTime + 0.1
      );
    }
  }

  /**
   * Unmute audio
   */
  unmute() {
    if (!this.isInitialized) {
      this.enableAudio();
      return;
    }

    this.isMuted = false;
    if (this.masterGain) {
      this.masterGain.gain.linearRampToValueAtTime(
        this.masterVolume,
        this.audioContext.currentTime + 0.1
      );
    }
  }

  /**
   * Toggle mute state
   */
  toggleMute() {
    if (this.isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
    return this.isMuted;
  }

  /**
   * Get current mute state
   */
  getMuteState() {
    return this.isMuted;
  }

  /**
   * Dispose of audio resources
   */
  dispose() {
    // Stop all oscillators
    this.ambientOscillators.forEach(({ osc, lfo }) => {
      try {
        osc.stop();
        if (lfo) lfo.stop();
      } catch (e) {}
    });

    // Stop noise
    if (this.ambientNoiseNode) {
      try {
        this.ambientNoiseNode.stop();
      } catch (e) {}
    }

    // Close audio context
    if (this.audioContext) {
      this.audioContext.close();
    }

    // Remove prompt
    if (this.audioPrompt && this.audioPrompt.parentNode) {
      this.audioPrompt.parentNode.removeChild(this.audioPrompt);
    }
  }
}
