/**
 * SpaceDust Component
 *
 * Creates ambient floating particles near the camera for added depth and immersion.
 * The dust particles follow the camera and create a sense of movement through space.
 *
 * Features:
 * - Particles drift slowly relative to camera movement
 * - Subtle twinkling/fading effect
 * - Performance-optimized using instanced rendering
 * - Particles recycle as they move out of view
 */

import * as THREE from 'three';

export class SpaceDust {
  constructor(options = {}) {
    this.particleCount = options.particleCount || 300;
    this.radius = options.radius || 50;        // Box size around camera
    this.particleSize = options.particleSize || 0.03;
    this.driftSpeed = options.driftSpeed || 0.02;

    this.group = new THREE.Group();
    this.group.name = 'SpaceDust';

    this.geometry = null;
    this.material = null;
    this.particles = null;

    // Store individual particle data
    this.particleData = [];

    // Track camera position for relative movement
    this.lastCameraPos = new THREE.Vector3();

    this.init();
  }

  init() {
    this.createParticles();
  }

  /**
   * Create the particle system
   */
  createParticles() {
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const alphas = new Float32Array(this.particleCount);
    const phases = new Float32Array(this.particleCount);

    for (let i = 0; i < this.particleCount; i++) {
      // Random position in a box around origin (will follow camera)
      positions[i * 3] = (Math.random() - 0.5) * this.radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * this.radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * this.radius;

      // Subtle color variation (warm whites to cool whites)
      const colorType = Math.random();
      if (colorType < 0.6) {
        // Cool white/blue dust
        colors[i * 3] = 0.7 + Math.random() * 0.3;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 1.0;
      } else if (colorType < 0.85) {
        // Warm white/yellow dust
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 0.7 + Math.random() * 0.2;
      } else {
        // Pure white
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 1.0;
        colors[i * 3 + 2] = 1.0;
      }

      // Random sizes
      sizes[i] = this.particleSize * (0.5 + Math.random() * 1.5);

      // Random starting alpha
      alphas[i] = 0.2 + Math.random() * 0.6;

      // Random phase for twinkling
      phases[i] = Math.random() * Math.PI * 2;

      // Store drift velocity for each particle
      this.particleData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * this.driftSpeed,
          (Math.random() - 0.5) * this.driftSpeed,
          (Math.random() - 0.5) * this.driftSpeed
        ),
        phase: phases[i],
        twinkleSpeed: 0.5 + Math.random() * 2
      });
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    this.geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));

    // Custom shader for soft, twinkling particles
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        attribute float size;
        attribute float alpha;
        attribute float phase;
        attribute vec3 color;

        uniform float time;
        uniform float pixelRatio;

        varying float vAlpha;
        varying vec3 vColor;

        void main() {
          vColor = color;

          // Subtle twinkling based on time and phase
          float twinkle = 0.5 + 0.5 * sin(time * 1.5 + phase);
          vAlpha = alpha * (0.4 + twinkle * 0.6);

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          // Size attenuation (closer = larger)
          float dist = length(mvPosition.xyz);
          float attenuation = 300.0 / dist;

          gl_PointSize = size * pixelRatio * attenuation;
          gl_PointSize = clamp(gl_PointSize, 1.0, 8.0);

          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3 vColor;

        void main() {
          // Soft circular particle
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);

          if (dist > 0.5) discard;

          // Soft falloff from center
          float alpha = vAlpha * (1.0 - smoothstep(0.0, 0.5, dist));

          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false
    });

    this.particles = new THREE.Points(this.geometry, this.material);
    this.particles.frustumCulled = false;
    this.group.add(this.particles);
  }

  /**
   * Get the mesh for adding to scene
   */
  getMesh() {
    return this.group;
  }

  /**
   * Update particle positions and twinkling
   */
  update(deltaTime, camera) {
    if (!this.particles) return;

    // Update shader time for twinkling
    this.material.uniforms.time.value += deltaTime;

    const positions = this.geometry.attributes.position.array;
    const halfRadius = this.radius / 2;

    // Calculate camera movement delta
    const cameraDelta = new THREE.Vector3().subVectors(camera.position, this.lastCameraPos);
    this.lastCameraPos.copy(camera.position);

    // Move the entire dust system to follow camera (with lag)
    this.group.position.lerp(camera.position, 0.1);

    // Update individual particle positions with drift
    for (let i = 0; i < this.particleCount; i++) {
      const idx = i * 3;
      const data = this.particleData[i];

      // Apply drift velocity
      positions[idx] += data.velocity.x;
      positions[idx + 1] += data.velocity.y;
      positions[idx + 2] += data.velocity.z;

      // Wrap particles that move too far
      if (positions[idx] > halfRadius) positions[idx] = -halfRadius;
      if (positions[idx] < -halfRadius) positions[idx] = halfRadius;
      if (positions[idx + 1] > halfRadius) positions[idx + 1] = -halfRadius;
      if (positions[idx + 1] < -halfRadius) positions[idx + 1] = halfRadius;
      if (positions[idx + 2] > halfRadius) positions[idx + 2] = -halfRadius;
      if (positions[idx + 2] < -halfRadius) positions[idx + 2] = halfRadius;
    }

    this.geometry.attributes.position.needsUpdate = true;
  }

  /**
   * Set particle visibility
   */
  setVisible(visible) {
    this.group.visible = visible;
  }

  /**
   * Clean up resources
   */
  dispose() {
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
  }
}
