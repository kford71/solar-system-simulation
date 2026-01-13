/**
 * KuiperBelt Component
 *
 * Creates a subtle particle field beyond Neptune representing the Kuiper Belt.
 * Similar to AsteroidBelt but more dispersed and fainter.
 */

import * as THREE from 'three';
import { KUIPER_BELT_DATA } from '../data/planetData.js';

export class KuiperBelt {
  constructor() {
    this.data = KUIPER_BELT_DATA;
    this.group = new THREE.Group();
    this.group.name = 'KuiperBelt';

    this.particles = null;

    this.init();
  }

  init() {
    this.createParticles();
  }

  /**
   * Create the Kuiper Belt using point particles
   * Uses points instead of instanced mesh for better performance at distance
   */
  createParticles() {
    const positions = new Float32Array(this.data.count * 3);
    const colors = new Float32Array(this.data.count * 3);
    const sizes = new Float32Array(this.data.count);

    // Store orbital data for animation
    this.orbitalData = [];

    for (let i = 0; i < this.data.count; i++) {
      // Random position in the belt (polar coordinates)
      const radius = THREE.MathUtils.randFloat(
        this.data.innerRadius,
        this.data.outerRadius
      );
      const angle = Math.random() * Math.PI * 2;
      const verticalOffset = THREE.MathUtils.randFloatSpread(this.data.verticalSpread);

      // Store orbital data
      this.orbitalData.push({
        radius,
        angle,
        verticalOffset,
        // Slower orbital velocity for distant objects (Kepler's laws)
        orbitalVelocity: 0.002 / Math.sqrt(radius / this.data.innerRadius)
      });

      // Calculate initial position
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = verticalOffset;
      positions[i * 3 + 2] = z;

      // Color variation - mostly icy blue-gray
      const colorVariation = Math.random();
      if (colorVariation < 0.6) {
        // Icy blue-gray
        colors[i * 3] = 0.5 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.6 + Math.random() * 0.2;
      } else if (colorVariation < 0.8) {
        // Reddish (like some KBOs)
        colors[i * 3] = 0.6 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.1;
        colors[i * 3 + 2] = 0.4 + Math.random() * 0.1;
      } else {
        // Bright icy
        colors[i * 3] = 0.7 + Math.random() * 0.3;
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      }

      // Random sizes
      sizes[i] = THREE.MathUtils.randFloat(this.data.minSize, this.data.maxSize) * 50;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create circular point texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const pointTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: this.data.opacity,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      map: pointTexture,
      depthWrite: false
    });

    this.particles = new THREE.Points(geometry, material);
    this.particles.name = 'KuiperBeltParticles';

    this.group.add(this.particles);
  }

  getMesh() {
    return this.group;
  }

  /**
   * Update particle positions for orbital motion
   */
  update(deltaTime, speedMultiplier = 1) {
    const positions = this.particles.geometry.attributes.position.array;

    for (let i = 0; i < this.data.count; i++) {
      const orbital = this.orbitalData[i];

      // Update angle
      orbital.angle += orbital.orbitalVelocity * deltaTime * speedMultiplier;

      // Calculate new position
      const x = Math.cos(orbital.angle) * orbital.radius;
      const z = Math.sin(orbital.angle) * orbital.radius;

      positions[i * 3] = x;
      positions[i * 3 + 2] = z;
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
  }

  dispose() {
    if (this.particles) {
      this.particles.geometry.dispose();
      this.particles.material.dispose();
      if (this.particles.material.map) {
        this.particles.material.map.dispose();
      }
    }
  }
}
