/**
 * AudioVisualizer - Real-time audio analysis and visualization
 *
 * Based on 2024-2025 Web Audio visualization techniques:
 * - FFT analysis using AnalyserNode for frequency spectrum
 * - Time-domain analysis for waveform visualization
 * - Beat detection for reactive animations
 * - Optimized for 60fps rendering with Three.js
 *
 * Features:
 * - Frequency band extraction (bass, mid, treble)
 * - Beat/onset detection for reactive effects
 * - Smoothing controls for visual aesthetics
 * - Integration with Three.js objects for audio-reactive 3D
 */

import * as Tone from 'tone';

/**
 * Frequency band definitions (in Hz)
 */
export const FREQUENCY_BANDS = {
  subBass: { min: 20, max: 60 },
  bass: { min: 60, max: 250 },
  lowMid: { min: 250, max: 500 },
  mid: { min: 500, max: 2000 },
  highMid: { min: 2000, max: 4000 },
  treble: { min: 4000, max: 8000 },
  brilliance: { min: 8000, max: 20000 }
};

/**
 * AudioVisualizer - Performs FFT analysis and provides visualization data
 */
export class AudioVisualizer {
  constructor(options = {}) {
    // FFT configuration
    this.fftSize = options.fftSize || 2048;  // Power of 2: 32 to 32768
    this.smoothingTimeConstant = options.smoothing || 0.8;  // 0-1, higher = smoother

    // Analysis nodes
    this.analyser = null;
    this.waveformAnalyser = null;

    // Data arrays (reused for performance)
    this.frequencyData = null;
    this.waveformData = null;
    this.normalizedFrequency = null;

    // Band energy values (updated each frame)
    this.bandEnergy = {
      subBass: 0,
      bass: 0,
      lowMid: 0,
      mid: 0,
      highMid: 0,
      treble: 0,
      brilliance: 0,
      overall: 0
    };

    // Beat detection state
    this.beatDetector = {
      threshold: options.beatThreshold || 1.3,  // Energy spike threshold
      decay: options.beatDecay || 0.98,         // How fast threshold adapts
      history: [],
      historySize: 43,  // ~43 frames at 60fps ≈ 0.7 seconds
      lastBeat: 0,
      cooldown: 150,    // ms between beats
      isBeat: false
    };

    // Smoothed values for visual effects
    this.smoothedBass = 0;
    this.smoothedMid = 0;
    this.smoothedTreble = 0;

    // Callbacks
    this.onBeat = null;
    this.onUpdate = null;

    // State
    this.initialized = false;
    this.connected = false;
  }

  /**
   * Initialize the visualizer
   * @param {Tone.ToneAudioNode} source - Audio source to analyze (or leave null to analyze master)
   */
  init(source = null) {
    if (this.initialized) return;

    // Create Tone.js FFT analyser
    this.analyser = new Tone.FFT({
      size: this.fftSize,
      smoothing: this.smoothingTimeConstant
    });

    // Create waveform analyser
    this.waveformAnalyser = new Tone.Waveform({
      size: 1024
    });

    // Connect to source or master output
    if (source) {
      source.connect(this.analyser);
      source.connect(this.waveformAnalyser);
      this.connected = true;
    } else {
      // Connect to master for analyzing all output
      Tone.Destination.connect(this.analyser);
      Tone.Destination.connect(this.waveformAnalyser);
      this.connected = true;
    }

    // Initialize data arrays
    this.frequencyData = new Float32Array(this.fftSize / 2);
    this.waveformData = new Float32Array(1024);
    this.normalizedFrequency = new Float32Array(this.fftSize / 2);

    // Calculate frequency bin indices for each band
    this.calculateBandIndices();

    this.initialized = true;
    console.log(`AudioVisualizer initialized: fftSize=${this.fftSize}, smoothing=${this.smoothingTimeConstant}`);
  }

  /**
   * Calculate the array indices for each frequency band
   */
  calculateBandIndices() {
    const sampleRate = Tone.context.sampleRate;
    const binCount = this.fftSize / 2;
    const nyquist = sampleRate / 2;
    const binSize = nyquist / binCount;

    this.bandIndices = {};

    for (const [band, range] of Object.entries(FREQUENCY_BANDS)) {
      this.bandIndices[band] = {
        start: Math.floor(range.min / binSize),
        end: Math.min(Math.ceil(range.max / binSize), binCount - 1)
      };
    }
  }

  /**
   * Update analysis - call this each frame
   * @returns {Object} Current analysis data
   */
  update() {
    if (!this.initialized || !this.connected) return null;

    // Get frequency data (dB values, typically -100 to 0)
    const rawFrequency = this.analyser.getValue();

    // Copy and normalize frequency data
    for (let i = 0; i < rawFrequency.length; i++) {
      this.frequencyData[i] = rawFrequency[i];
      // Normalize from dB (-100 to 0) to 0-1 range
      this.normalizedFrequency[i] = Math.max(0, (rawFrequency[i] + 100) / 100);
    }

    // Get waveform data
    const rawWaveform = this.waveformAnalyser.getValue();
    for (let i = 0; i < rawWaveform.length; i++) {
      this.waveformData[i] = rawWaveform[i];
    }

    // Calculate band energies
    this.calculateBandEnergies();

    // Smooth values for visual effects
    this.updateSmoothedValues();

    // Beat detection
    this.detectBeat();

    // Callback
    if (this.onUpdate) {
      this.onUpdate(this.getAnalysisData());
    }

    return this.getAnalysisData();
  }

  /**
   * Calculate energy for each frequency band
   */
  calculateBandEnergies() {
    let totalEnergy = 0;

    for (const [band, indices] of Object.entries(this.bandIndices)) {
      let sum = 0;
      const count = indices.end - indices.start + 1;

      for (let i = indices.start; i <= indices.end; i++) {
        sum += this.normalizedFrequency[i];
      }

      this.bandEnergy[band] = count > 0 ? sum / count : 0;
      totalEnergy += this.bandEnergy[band];
    }

    this.bandEnergy.overall = totalEnergy / Object.keys(FREQUENCY_BANDS).length;
  }

  /**
   * Update smoothed values for visual effects
   */
  updateSmoothedValues() {
    const bassSmooth = 0.85;
    const midSmooth = 0.8;
    const trebleSmooth = 0.75;

    // Combine sub-bass and bass for bass value
    const currentBass = (this.bandEnergy.subBass + this.bandEnergy.bass) / 2;
    this.smoothedBass = this.smoothedBass * bassSmooth + currentBass * (1 - bassSmooth);

    // Combine mid ranges
    const currentMid = (this.bandEnergy.lowMid + this.bandEnergy.mid + this.bandEnergy.highMid) / 3;
    this.smoothedMid = this.smoothedMid * midSmooth + currentMid * (1 - midSmooth);

    // Combine treble and brilliance
    const currentTreble = (this.bandEnergy.treble + this.bandEnergy.brilliance) / 2;
    this.smoothedTreble = this.smoothedTreble * trebleSmooth + currentTreble * (1 - trebleSmooth);
  }

  /**
   * Simple beat detection based on energy spikes
   */
  detectBeat() {
    const bd = this.beatDetector;
    const now = performance.now();

    // Use bass energy for beat detection
    const energy = this.bandEnergy.bass + this.bandEnergy.subBass;

    // Add to history
    bd.history.push(energy);
    if (bd.history.length > bd.historySize) {
      bd.history.shift();
    }

    // Calculate average energy
    const avgEnergy = bd.history.reduce((a, b) => a + b, 0) / bd.history.length;

    // Check for beat (energy spike above threshold)
    bd.isBeat = false;
    if (energy > avgEnergy * bd.threshold && now - bd.lastBeat > bd.cooldown) {
      bd.isBeat = true;
      bd.lastBeat = now;

      // Callback
      if (this.onBeat) {
        this.onBeat({
          energy,
          avgEnergy,
          ratio: energy / avgEnergy,
          time: now
        });
      }
    }
  }

  /**
   * Get current analysis data
   * @returns {Object}
   */
  getAnalysisData() {
    return {
      frequency: this.normalizedFrequency,
      waveform: this.waveformData,
      bands: { ...this.bandEnergy },
      smoothed: {
        bass: this.smoothedBass,
        mid: this.smoothedMid,
        treble: this.smoothedTreble
      },
      isBeat: this.beatDetector.isBeat,
      overall: this.bandEnergy.overall
    };
  }

  /**
   * Get frequency data for a specific range (useful for custom visualizers)
   * @param {number} startFreq - Start frequency in Hz
   * @param {number} endFreq - End frequency in Hz
   * @returns {Float32Array} Subset of frequency data
   */
  getFrequencyRange(startFreq, endFreq) {
    const sampleRate = Tone.context.sampleRate;
    const binSize = (sampleRate / 2) / (this.fftSize / 2);

    const startBin = Math.floor(startFreq / binSize);
    const endBin = Math.ceil(endFreq / binSize);

    return this.normalizedFrequency.slice(startBin, endBin);
  }

  /**
   * Get average energy for a frequency range
   * @param {number} startFreq - Start frequency
   * @param {number} endFreq - End frequency
   * @returns {number} Average energy (0-1)
   */
  getAverageEnergy(startFreq, endFreq) {
    const range = this.getFrequencyRange(startFreq, endFreq);
    if (range.length === 0) return 0;
    return range.reduce((a, b) => a + b, 0) / range.length;
  }

  /**
   * Set smoothing constant (0-1)
   * Higher values = smoother but less responsive
   * @param {number} value
   */
  setSmoothing(value) {
    this.smoothingTimeConstant = Math.max(0, Math.min(1, value));
    if (this.analyser) {
      this.analyser.smoothing = this.smoothingTimeConstant;
    }
  }

  /**
   * Set beat detection threshold
   * Higher values = only detect stronger beats
   * @param {number} threshold - Typically 1.1 to 2.0
   */
  setBeatThreshold(threshold) {
    this.beatDetector.threshold = threshold;
  }

  /**
   * Get spectrum as array of values (for bar visualization)
   * @param {number} barCount - Number of bars to return
   * @returns {Float32Array}
   */
  getSpectrum(barCount = 32) {
    if (!this.normalizedFrequency) return new Float32Array(barCount);

    const bars = new Float32Array(barCount);
    const binCount = this.normalizedFrequency.length;
    const binsPerBar = Math.floor(binCount / barCount);

    for (let i = 0; i < barCount; i++) {
      let sum = 0;
      const startBin = i * binsPerBar;
      const endBin = Math.min(startBin + binsPerBar, binCount);

      for (let j = startBin; j < endBin; j++) {
        sum += this.normalizedFrequency[j];
      }

      bars[i] = sum / (endBin - startBin);
    }

    return bars;
  }

  /**
   * Get logarithmic spectrum (better for music visualization)
   * Low frequencies get more resolution, high frequencies less
   * @param {number} barCount
   * @returns {Float32Array}
   */
  getLogSpectrum(barCount = 32) {
    if (!this.normalizedFrequency) return new Float32Array(barCount);

    const bars = new Float32Array(barCount);
    const binCount = this.normalizedFrequency.length;

    // Use logarithmic scale for bin distribution
    for (let i = 0; i < barCount; i++) {
      // Logarithmic mapping
      const lowFreqRatio = Math.pow(i / barCount, 2);
      const highFreqRatio = Math.pow((i + 1) / barCount, 2);

      const startBin = Math.floor(lowFreqRatio * binCount);
      const endBin = Math.min(Math.ceil(highFreqRatio * binCount), binCount);

      let sum = 0;
      let count = 0;
      for (let j = startBin; j < endBin; j++) {
        sum += this.normalizedFrequency[j];
        count++;
      }

      bars[i] = count > 0 ? sum / count : 0;
    }

    return bars;
  }

  /**
   * Dispose resources
   */
  dispose() {
    if (this.analyser) {
      this.analyser.dispose();
      this.analyser = null;
    }
    if (this.waveformAnalyser) {
      this.waveformAnalyser.dispose();
      this.waveformAnalyser = null;
    }

    this.frequencyData = null;
    this.waveformData = null;
    this.normalizedFrequency = null;
    this.initialized = false;
    this.connected = false;
  }
}

/**
 * AudioReactiveController - Applies visualizer data to Three.js objects
 */
export class AudioReactiveController {
  constructor(visualizer) {
    this.visualizer = visualizer;
    this.targets = new Map();  // id -> { object, config }
    this.enabled = true;
  }

  /**
   * Register a Three.js object to react to audio
   * @param {string} id - Unique identifier
   * @param {THREE.Object3D} object - The Three.js object
   * @param {Object} config - Reaction configuration
   */
  registerTarget(id, object, config = {}) {
    const defaultConfig = {
      // Which audio property to react to
      source: 'bass',  // 'bass', 'mid', 'treble', 'overall', 'beat', or band name

      // Effect types
      scaleEffect: false,
      scaleMultiplier: 0.3,
      scaleBase: 1,
      scaleAxis: 'uniform',  // 'x', 'y', 'z', or 'uniform'

      emissiveEffect: false,
      emissiveColor: 0x00ffff,
      emissiveMultiplier: 1,

      positionEffect: false,
      positionAxis: 'y',
      positionMultiplier: 1,

      rotationEffect: false,
      rotationAxis: 'y',
      rotationSpeed: 0.01,

      opacityEffect: false,
      opacityMin: 0.3,
      opacityMax: 1,

      // Custom effect function
      customEffect: null
    };

    this.targets.set(id, {
      object,
      config: { ...defaultConfig, ...config },
      originalScale: object.scale.clone(),
      originalPosition: object.position.clone()
    });
  }

  /**
   * Unregister a target
   * @param {string} id
   */
  unregisterTarget(id) {
    const target = this.targets.get(id);
    if (target) {
      // Restore original values
      target.object.scale.copy(target.originalScale);
      target.object.position.copy(target.originalPosition);
      this.targets.delete(id);
    }
  }

  /**
   * Update all targets - call each frame after visualizer.update()
   */
  update() {
    if (!this.enabled || !this.visualizer.initialized) return;

    const data = this.visualizer.getAnalysisData();
    if (!data) return;

    this.targets.forEach((target, id) => {
      this.updateTarget(target, data);
    });
  }

  /**
   * Update a single target based on audio data
   */
  updateTarget(target, data) {
    const { object, config, originalScale, originalPosition } = target;

    // Get the audio value based on source
    let audioValue = 0;
    switch (config.source) {
      case 'bass':
        audioValue = data.smoothed.bass;
        break;
      case 'mid':
        audioValue = data.smoothed.mid;
        break;
      case 'treble':
        audioValue = data.smoothed.treble;
        break;
      case 'overall':
        audioValue = data.overall;
        break;
      case 'beat':
        audioValue = data.isBeat ? 1 : 0;
        break;
      default:
        // Try to get from bands
        if (data.bands[config.source] !== undefined) {
          audioValue = data.bands[config.source];
        }
    }

    // Apply scale effect
    if (config.scaleEffect) {
      const scaleValue = config.scaleBase + audioValue * config.scaleMultiplier;
      if (config.scaleAxis === 'uniform') {
        object.scale.setScalar(originalScale.x * scaleValue);
      } else {
        object.scale[config.scaleAxis] = originalScale[config.scaleAxis] * scaleValue;
      }
    }

    // Apply emissive effect (requires material with emissive property)
    if (config.emissiveEffect && object.material && 'emissive' in object.material) {
      const intensity = audioValue * config.emissiveMultiplier;
      object.material.emissive.setHex(config.emissiveColor);
      object.material.emissiveIntensity = intensity;
    }

    // Apply position effect
    if (config.positionEffect) {
      const posOffset = audioValue * config.positionMultiplier;
      object.position[config.positionAxis] = originalPosition[config.positionAxis] + posOffset;
    }

    // Apply rotation effect
    if (config.rotationEffect) {
      object.rotation[config.rotationAxis] += audioValue * config.rotationSpeed;
    }

    // Apply opacity effect
    if (config.opacityEffect && object.material) {
      object.material.opacity = config.opacityMin + audioValue * (config.opacityMax - config.opacityMin);
      object.material.transparent = true;
    }

    // Custom effect
    if (config.customEffect && typeof config.customEffect === 'function') {
      config.customEffect(object, audioValue, data);
    }
  }

  /**
   * Set enabled state
   * @param {boolean} enabled
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      // Restore all targets to original state
      this.targets.forEach(target => {
        target.object.scale.copy(target.originalScale);
        target.object.position.copy(target.originalPosition);
      });
    }
  }

  /**
   * Dispose
   */
  dispose() {
    // Restore all targets
    this.targets.forEach(target => {
      target.object.scale.copy(target.originalScale);
      target.object.position.copy(target.originalPosition);
    });
    this.targets.clear();
  }
}

// Export singleton visualizer instance
export const audioVisualizer = new AudioVisualizer();
export default audioVisualizer;
