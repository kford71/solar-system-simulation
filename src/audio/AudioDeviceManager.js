/**
 * AudioDeviceManager - Audio output device selection
 *
 * Based on 2024-2025 Web Audio standards:
 * - AudioContext.setSinkId() for output device selection (Chrome 110+)
 * - Device enumeration via navigator.mediaDevices
 * - Multi-channel output detection
 *
 * Features:
 * - List available audio output devices
 * - Switch output device at runtime
 * - Detect surround sound / multi-channel support
 * - Handle device changes (plugging/unplugging)
 */

import * as Tone from 'tone';

/**
 * AudioDeviceManager - Manages audio output device selection
 */
class AudioDeviceManager {
  constructor() {
    this.initialized = false;
    this.currentDeviceId = 'default';
    this.devices = [];
    this.supportsDeviceSelection = false;
    this.supportsSinkId = false;

    // Callbacks
    this.onDeviceChange = null;
    this.onDeviceListChange = null;

    // State
    this.lastDeviceListUpdate = 0;
  }

  /**
   * Initialize the device manager
   */
  async init() {
    if (this.initialized) return;

    // Check for feature support
    this.checkSupport();

    // Get initial device list
    await this.refreshDeviceList();

    // Listen for device changes
    if (navigator.mediaDevices && 'ondevicechange' in navigator.mediaDevices) {
      navigator.mediaDevices.ondevicechange = () => {
        console.log('Audio devices changed');
        this.refreshDeviceList();
      };
    }

    this.initialized = true;
    console.log('AudioDeviceManager initialized');
    console.log('Device selection support:', this.supportsDeviceSelection);
    console.log('setSinkId support:', this.supportsSinkId);
  }

  /**
   * Check for feature support
   */
  checkSupport() {
    // Check if we can enumerate devices
    this.supportsDeviceSelection = !!(
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.enumerateDevices === 'function'
    );

    // Check for setSinkId on AudioContext (Chrome 110+)
    // This is the Web Audio API way to select output device
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.supportsSinkId = typeof ctx.setSinkId === 'function';
      ctx.close();
    } catch (e) {
      this.supportsSinkId = false;
    }

    // Also check Tone.js context
    if (Tone.context && typeof Tone.context.setSinkId === 'function') {
      this.supportsSinkId = true;
    }
  }

  /**
   * Refresh the list of available audio output devices
   * @returns {Promise<Array>}
   */
  async refreshDeviceList() {
    if (!this.supportsDeviceSelection) {
      this.devices = [];
      return this.devices;
    }

    try {
      // Request permission first (needed for device labels)
      // Try to get a temporary audio stream to trigger permission prompt
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Immediately stop the stream - we just needed permission
        stream.getTracks().forEach(track => track.stop());
      } catch (e) {
        // Permission denied or not available - continue anyway
        // Device labels may be empty
      }

      const allDevices = await navigator.mediaDevices.enumerateDevices();

      // Filter to audio output devices only
      this.devices = allDevices
        .filter(device => device.kind === 'audiooutput')
        .map(device => ({
          deviceId: device.deviceId,
          label: device.label || `Speaker ${device.deviceId.substring(0, 8)}`,
          groupId: device.groupId,
          isDefault: device.deviceId === 'default',
          // Try to detect device type from label
          type: this.inferDeviceType(device.label)
        }));

      this.lastDeviceListUpdate = Date.now();

      // Callback
      if (this.onDeviceListChange) {
        this.onDeviceListChange(this.devices);
      }

      console.log(`Found ${this.devices.length} audio output devices`);
      return this.devices;

    } catch (e) {
      console.warn('Failed to enumerate audio devices:', e);
      this.devices = [];
      return this.devices;
    }
  }

  /**
   * Infer device type from label
   * @param {string} label
   * @returns {string}
   */
  inferDeviceType(label) {
    const lowerLabel = label.toLowerCase();

    if (lowerLabel.includes('headphone') || lowerLabel.includes('headset')) {
      return 'headphones';
    }
    if (lowerLabel.includes('airpod') || lowerLabel.includes('earbud')) {
      return 'earbuds';
    }
    if (lowerLabel.includes('bluetooth') || lowerLabel.includes('wireless')) {
      return 'bluetooth';
    }
    if (lowerLabel.includes('hdmi') || lowerLabel.includes('display')) {
      return 'hdmi';
    }
    if (lowerLabel.includes('usb')) {
      return 'usb';
    }
    if (lowerLabel.includes('built-in') || lowerLabel.includes('internal')) {
      return 'builtin';
    }
    if (lowerLabel.includes('virtual') || lowerLabel.includes('cable')) {
      return 'virtual';
    }

    return 'speaker';
  }

  /**
   * Get list of available audio output devices
   * @returns {Array}
   */
  getDevices() {
    return [...this.devices];
  }

  /**
   * Get current output device ID
   * @returns {string}
   */
  getCurrentDeviceId() {
    return this.currentDeviceId;
  }

  /**
   * Get current output device info
   * @returns {Object|null}
   */
  getCurrentDevice() {
    return this.devices.find(d => d.deviceId === this.currentDeviceId) || null;
  }

  /**
   * Set the audio output device
   * @param {string} deviceId - Device ID or 'default'
   * @returns {Promise<boolean>} Whether the change was successful
   */
  async setOutputDevice(deviceId) {
    if (!this.supportsSinkId) {
      console.warn('setSinkId not supported in this browser');
      return false;
    }

    if (deviceId === this.currentDeviceId) {
      return true;  // Already using this device
    }

    try {
      // Get the AudioContext (from Tone.js)
      const ctx = Tone.context.rawContext || Tone.context._context || Tone.context;

      if (ctx && typeof ctx.setSinkId === 'function') {
        await ctx.setSinkId(deviceId);
        this.currentDeviceId = deviceId;

        const device = this.devices.find(d => d.deviceId === deviceId);
        console.log(`Audio output changed to: ${device?.label || deviceId}`);

        // Callback
        if (this.onDeviceChange) {
          this.onDeviceChange(device || { deviceId });
        }

        return true;
      } else {
        console.warn('AudioContext does not support setSinkId');
        return false;
      }

    } catch (e) {
      console.error('Failed to set audio output device:', e);
      return false;
    }
  }

  /**
   * Set output to default device
   * @returns {Promise<boolean>}
   */
  async setDefaultDevice() {
    return this.setOutputDevice('default');
  }

  /**
   * Get channel count for the current output
   * Useful for detecting surround sound systems
   * @returns {number}
   */
  getOutputChannelCount() {
    try {
      const ctx = Tone.context.rawContext || Tone.context._context || Tone.context;
      if (ctx && ctx.destination) {
        return ctx.destination.maxChannelCount;
      }
    } catch (e) {
      // Ignore
    }
    return 2;  // Default to stereo
  }

  /**
   * Check if output supports surround sound (5.1 or higher)
   * @returns {boolean}
   */
  isSurroundSoundAvailable() {
    return this.getOutputChannelCount() >= 6;
  }

  /**
   * Get detailed output info
   * @returns {Object}
   */
  getOutputInfo() {
    const ctx = Tone.context.rawContext || Tone.context._context || Tone.context;

    return {
      currentDevice: this.getCurrentDevice(),
      deviceId: this.currentDeviceId,
      sampleRate: ctx?.sampleRate || Tone.context.sampleRate,
      maxChannelCount: this.getOutputChannelCount(),
      isSurround: this.isSurroundSoundAvailable(),
      state: ctx?.state || Tone.context.state,
      baseLatency: ctx?.baseLatency,
      outputLatency: ctx?.outputLatency
    };
  }

  /**
   * Get system capabilities
   * @returns {Object}
   */
  getCapabilities() {
    return {
      supportsDeviceSelection: this.supportsDeviceSelection,
      supportsSinkId: this.supportsSinkId,
      deviceCount: this.devices.length,
      maxChannelCount: this.getOutputChannelCount(),
      isSurround: this.isSurroundSoundAvailable()
    };
  }

  /**
   * Test audio on a specific device
   * Plays a short test tone to verify the device works
   * @param {string} deviceId
   * @returns {Promise<boolean>}
   */
  async testDevice(deviceId) {
    if (!this.supportsSinkId) {
      console.warn('Device testing not supported');
      return false;
    }

    const originalDevice = this.currentDeviceId;

    try {
      // Switch to test device
      await this.setOutputDevice(deviceId);

      // Play a short test tone
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease('C4', '8n');

      // Wait for the tone to play
      await new Promise(resolve => setTimeout(resolve, 500));

      synth.dispose();

      // Switch back to original device
      await this.setOutputDevice(originalDevice);

      return true;

    } catch (e) {
      console.error('Device test failed:', e);
      // Try to restore original device
      try {
        await this.setOutputDevice(originalDevice);
      } catch (e2) {
        // Ignore
      }
      return false;
    }
  }

  /**
   * Dispose resources
   */
  dispose() {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.ondevicechange = null;
    }

    this.devices = [];
    this.onDeviceChange = null;
    this.onDeviceListChange = null;
    this.initialized = false;
  }
}

// Export singleton instance
export const audioDeviceManager = new AudioDeviceManager();
export default audioDeviceManager;
