/**
 * SpatialAudioManager - 3D Positional Audio for the Solar System Simulation
 *
 * Based on 2024-2025 spatial audio research:
 * - HRTF (Head-Related Transfer Function) for realistic 3D binaural audio
 * - Distance attenuation models (linear, inverse, exponential)
 * - Integration with Three.js camera for listener position
 * - Performance optimizations for multiple sources
 *
 * Architecture:
 * - Uses Tone.js Panner3D for spatial positioning
 * - Syncs listener with Three.js camera each frame
 * - Supports distance-based culling to save CPU
 * - Configurable attenuation per source type
 */

import * as Tone from 'tone';

/**
 * Distance attenuation presets for different sound types
 */
export const ATTENUATION_PRESETS = {
  // Planets - audible from moderate distance, natural falloff
  planet: {
    distanceModel: 'inverse',
    refDistance: 5,        // Full volume within 5 units
    rolloffFactor: 1.5,    // Moderate falloff
    maxDistance: 100,      // Used for culling
    panningModel: 'HRTF'   // Full 3D positioning
  },

  // Moons - shorter range, closer interaction
  moon: {
    distanceModel: 'inverse',
    refDistance: 2,
    rolloffFactor: 2,
    maxDistance: 50,
    panningModel: 'HRTF'
  },

  // Spacecraft - tight range for focused listening
  spacecraft: {
    distanceModel: 'inverse',
    refDistance: 3,
    rolloffFactor: 2.5,
    maxDistance: 40,
    panningModel: 'HRTF'
  },

  // Ambient - wide range, gentle falloff (solar wind, etc.)
  ambient: {
    distanceModel: 'exponential',
    refDistance: 10,
    rolloffFactor: 0.5,    // Very gradual falloff
    maxDistance: 200,
    panningModel: 'equalpower'  // Less CPU for ambient
  },

  // UI sounds - no spatialization (centered)
  ui: {
    distanceModel: 'linear',
    refDistance: 1,
    rolloffFactor: 0,      // No attenuation
    maxDistance: 10000,
    panningModel: 'equalpower'
  }
};

/**
 * Spatial audio source wrapper
 * Manages a single 3D-positioned audio source
 */
export class SpatialAudioSource {
  constructor(config = {}) {
    const preset = ATTENUATION_PRESETS[config.type] || ATTENUATION_PRESETS.planet;

    // Create Tone.js 3D panner
    this.panner = new Tone.Panner3D({
      panningModel: config.panningModel || preset.panningModel,
      distanceModel: config.distanceModel || preset.distanceModel,
      refDistance: config.refDistance || preset.refDistance,
      rolloffFactor: config.rolloffFactor || preset.rolloffFactor,
      maxDistance: config.maxDistance || preset.maxDistance,
      // Cone settings for directional audio (optional)
      coneInnerAngle: config.coneInnerAngle || 360,
      coneOuterAngle: config.coneOuterAngle || 360,
      coneOuterGain: config.coneOuterGain || 0
    });

    // Position in 3D space
    this.position = { x: 0, y: 0, z: 0 };

    // State tracking
    this.isActive = false;
    this.isCulled = false;
    this.lastDistance = 0;

    // Reference to connected source (Tone.Player, Tone.Synth, etc.)
    this.source = null;

    // Config for reference
    this.config = { ...preset, ...config };
  }

  /**
   * Connect an audio source to this spatial panner
   * @param {Tone.Source} source - Tone.js audio source
   * @returns {SpatialAudioSource} - this for chaining
   */
  connect(source) {
    this.source = source;
    source.connect(this.panner);
    return this;
  }

  /**
   * Connect panner output to destination
   * @param {Tone.ToneAudioNode} destination - Where to route audio
   * @returns {SpatialAudioSource}
   */
  toDestination(destination) {
    if (destination) {
      this.panner.connect(destination);
    } else {
      this.panner.toDestination();
    }
    return this;
  }

  /**
   * Set position in 3D space
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  setPosition(x, y, z) {
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

    // Update panner position
    this.panner.positionX.value = x;
    this.panner.positionY.value = y;
    this.panner.positionZ.value = z;
  }

  /**
   * Set position from Three.js Vector3 or Object3D
   * @param {THREE.Vector3|THREE.Object3D} obj
   */
  setPositionFromObject(obj) {
    if (obj.isObject3D) {
      // Get world position from Object3D
      const worldPos = obj.getWorldPosition(new THREE.Vector3());
      this.setPosition(worldPos.x, worldPos.y, worldPos.z);
    } else if (obj.isVector3) {
      this.setPosition(obj.x, obj.y, obj.z);
    } else if (obj.x !== undefined) {
      this.setPosition(obj.x, obj.y || 0, obj.z || 0);
    }
  }

  /**
   * Set orientation (for directional sounds)
   * @param {number} x - Forward direction x
   * @param {number} y - Forward direction y
   * @param {number} z - Forward direction z
   */
  setOrientation(x, y, z) {
    this.panner.orientationX.value = x;
    this.panner.orientationY.value = y;
    this.panner.orientationZ.value = z;
  }

  /**
   * Calculate distance to listener
   * @param {Object} listenerPos - { x, y, z }
   * @returns {number}
   */
  getDistanceToListener(listenerPos) {
    const dx = this.position.x - listenerPos.x;
    const dy = this.position.y - listenerPos.y;
    const dz = this.position.z - listenerPos.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  /**
   * Check if should be culled based on distance
   * @param {number} distance
   * @returns {boolean}
   */
  shouldCull(distance) {
    return distance > this.config.maxDistance * 1.5; // 50% buffer
  }

  /**
   * Start playing (if source supports it)
   */
  start() {
    if (this.source && this.source.start && !this.isActive) {
      this.source.start();
      this.isActive = true;
    }
  }

  /**
   * Stop playing
   */
  stop() {
    if (this.source && this.source.stop && this.isActive) {
      try {
        this.source.stop();
      } catch (e) {
        // May already be stopped
      }
      this.isActive = false;
    }
  }

  /**
   * Dispose of resources
   */
  dispose() {
    this.stop();
    if (this.panner) {
      this.panner.dispose();
    }
    this.source = null;
  }
}

/**
 * SpatialAudioManager - Manages all 3D audio sources and listener
 */
export class SpatialAudioManager {
  constructor() {
    this.sources = new Map();  // id -> SpatialAudioSource
    this.listener = {
      position: { x: 0, y: 0, z: 0 },
      forward: { x: 0, y: 0, z: -1 },
      up: { x: 0, y: 1, z: 0 }
    };

    // Performance settings
    this.cullDistance = 150;       // Distance beyond which to cull
    this.updateThrottle = 16;      // ms between position updates (~60fps)
    this.lastUpdateTime = 0;

    // HRTF state
    this.useHRTF = true;           // Can be disabled for performance

    // Output destination
    this.destination = null;
  }

  /**
   * Initialize the spatial audio system
   * @param {Tone.ToneAudioNode} destination - Audio output node
   */
  init(destination) {
    this.destination = destination || Tone.Destination;

    // Set up Tone.js listener (maps to Web Audio AudioListener)
    this.updateListener();

    console.log('SpatialAudioManager initialized with HRTF:', this.useHRTF);
  }

  /**
   * Create a new spatial audio source
   * @param {string} id - Unique identifier
   * @param {Object} config - Configuration (type, position, etc.)
   * @returns {SpatialAudioSource}
   */
  createSource(id, config = {}) {
    // Apply HRTF setting
    if (!this.useHRTF) {
      config.panningModel = 'equalpower';
    }

    const source = new SpatialAudioSource(config);
    source.toDestination(this.destination);

    this.sources.set(id, source);
    return source;
  }

  /**
   * Get an existing source by ID
   * @param {string} id
   * @returns {SpatialAudioSource|null}
   */
  getSource(id) {
    return this.sources.get(id) || null;
  }

  /**
   * Remove a source
   * @param {string} id
   */
  removeSource(id) {
    const source = this.sources.get(id);
    if (source) {
      source.dispose();
      this.sources.delete(id);
    }
  }

  /**
   * Update listener position/orientation from Three.js camera
   * @param {THREE.Camera} camera
   */
  updateListenerFromCamera(camera) {
    if (!camera) return;

    // Get camera world position
    const position = camera.position;
    this.listener.position.x = position.x;
    this.listener.position.y = position.y;
    this.listener.position.z = position.z;

    // Get camera forward direction (negative z in camera space)
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(camera.quaternion);
    this.listener.forward.x = forward.x;
    this.listener.forward.y = forward.y;
    this.listener.forward.z = forward.z;

    // Get camera up direction
    const up = new THREE.Vector3(0, 1, 0);
    up.applyQuaternion(camera.quaternion);
    this.listener.up.x = up.x;
    this.listener.up.y = up.y;
    this.listener.up.z = up.z;

    // Update Tone.js listener
    this.updateListener();
  }

  /**
   * Update the Tone.js/Web Audio listener
   */
  updateListener() {
    // Tone.Listener wraps the AudioListener
    Tone.Listener.positionX.value = this.listener.position.x;
    Tone.Listener.positionY.value = this.listener.position.y;
    Tone.Listener.positionZ.value = this.listener.position.z;

    Tone.Listener.forwardX.value = this.listener.forward.x;
    Tone.Listener.forwardY.value = this.listener.forward.y;
    Tone.Listener.forwardZ.value = this.listener.forward.z;

    Tone.Listener.upX.value = this.listener.up.x;
    Tone.Listener.upY.value = this.listener.up.y;
    Tone.Listener.upZ.value = this.listener.up.z;
  }

  /**
   * Update all sources - call each frame
   * @param {THREE.Camera} camera - The scene camera
   * @param {Map<string, THREE.Object3D>} objects - Map of id -> object3D for position sync
   */
  update(camera, objects = null) {
    const now = performance.now();

    // Throttle updates for performance
    if (now - this.lastUpdateTime < this.updateThrottle) {
      return;
    }
    this.lastUpdateTime = now;

    // Update listener from camera
    if (camera) {
      this.updateListenerFromCamera(camera);
    }

    // Update each source position and handle culling
    this.sources.forEach((source, id) => {
      // Sync position with Three.js object if provided
      if (objects && objects.has(id)) {
        const obj = objects.get(id);
        source.setPositionFromObject(obj);
      }

      // Calculate distance for culling
      const distance = source.getDistanceToListener(this.listener.position);
      source.lastDistance = distance;

      // Distance-based culling
      const shouldCull = source.shouldCull(distance);

      if (shouldCull && !source.isCulled) {
        // Cull this source (stop processing)
        source.isCulled = true;
        // Optionally pause the source to save CPU
        // source.stop();
        console.log(`Culling audio source: ${id} (distance: ${distance.toFixed(1)})`);
      } else if (!shouldCull && source.isCulled) {
        // Un-cull this source
        source.isCulled = false;
        // source.start();
        console.log(`Un-culling audio source: ${id}`);
      }
    });
  }

  /**
   * Set whether to use HRTF (can be toggled for performance)
   * @param {boolean} enabled
   */
  setHRTF(enabled) {
    this.useHRTF = enabled;

    // Update existing sources (note: changing panningModel at runtime
    // may not be supported in all browsers, may need to recreate panners)
    this.sources.forEach(source => {
      try {
        source.panner.panningModel = enabled ? 'HRTF' : 'equalpower';
      } catch (e) {
        console.warn('Could not update panning model:', e);
      }
    });

    console.log('HRTF:', enabled ? 'enabled' : 'disabled');
  }

  /**
   * Get statistics about spatial audio sources
   * @returns {Object}
   */
  getStats() {
    const stats = {
      totalSources: this.sources.size,
      activeSources: 0,
      culledSources: 0,
      useHRTF: this.useHRTF,
      listenerPosition: { ...this.listener.position },
      sources: []
    };

    this.sources.forEach((source, id) => {
      if (source.isActive) stats.activeSources++;
      if (source.isCulled) stats.culledSources++;

      stats.sources.push({
        id,
        position: { ...source.position },
        distance: source.lastDistance.toFixed(1),
        active: source.isActive,
        culled: source.isCulled,
        type: source.config.type
      });
    });

    return stats;
  }

  /**
   * Dispose all sources and cleanup
   */
  dispose() {
    this.sources.forEach(source => source.dispose());
    this.sources.clear();
  }
}

// Export singleton instance
export const spatialAudioManager = new SpatialAudioManager();
export default spatialAudioManager;
