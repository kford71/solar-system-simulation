/**
 * Starfield Component
 *
 * Creates a procedurally generated starfield background
 * using thousands of point particles distributed on a large sphere.
 * Includes a subtle Milky Way band for realism.
 */

import * as THREE from 'three';

export class Starfield {
  constructor(options = {}) {
    this.starCount = options.starCount || 10000;
    this.milkyWayStarCount = options.milkyWayStarCount || 8000;
    this.radius = options.radius || 1000;

    this.group = new THREE.Group();
    this.group.name = 'StarfieldGroup';

    this.geometry = null;
    this.material = null;
    this.mesh = null;
    this.milkyWayMesh = null;

    this.init();
  }

  /**
   * Initialize the starfield by creating points distributed
   * randomly on a sphere surrounding the solar system
   */
  init() {
    this.createMainStarfield();
    this.createMilkyWay();
  }

  /**
   * Create the main background starfield
   */
  createMainStarfield() {
    this.geometry = new THREE.BufferGeometry();

    // Create arrays for star positions and sizes
    const positions = new Float32Array(this.starCount * 3);
    const colors = new Float32Array(this.starCount * 3);
    const sizes = new Float32Array(this.starCount);

    for (let i = 0; i < this.starCount; i++) {
      const i3 = i * 3;

      // Generate random point on sphere using spherical coordinates
      // This ensures even distribution across the sphere surface
      const theta = Math.random() * Math.PI * 2;  // Azimuthal angle
      const phi = Math.acos(2 * Math.random() - 1);  // Polar angle

      // Convert spherical to Cartesian coordinates
      positions[i3] = this.radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = this.radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = this.radius * Math.cos(phi);

      // Create varied star colors (mostly white with some blue/yellow tints)
      const colorVariation = Math.random();
      if (colorVariation < 0.7) {
        // White stars
        colors[i3] = 0.9 + Math.random() * 0.1;
        colors[i3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i3 + 2] = 0.9 + Math.random() * 0.1;
      } else if (colorVariation < 0.85) {
        // Blue-white stars (hot stars)
        colors[i3] = 0.7 + Math.random() * 0.2;
        colors[i3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i3 + 2] = 1.0;
      } else {
        // Yellow-orange stars (cooler stars)
        colors[i3] = 1.0;
        colors[i3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i3 + 2] = 0.5 + Math.random() * 0.3;
      }

      // Varied star sizes for depth perception
      sizes[i] = Math.random() * 2 + 0.5;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create material with point sprites
    this.material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });

    this.mesh = new THREE.Points(this.geometry, this.material);
    this.mesh.name = 'Starfield';
    this.group.add(this.mesh);
  }

  /**
   * Create the Milky Way band - a denser concentration of stars
   * along a band across the sky
   */
  createMilkyWay() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.milkyWayStarCount * 3);
    const colors = new Float32Array(this.milkyWayStarCount * 3);

    // Milky Way band parameters
    const bandWidth = 0.35; // Width of the band in radians
    const bandTilt = Math.PI / 6; // Tilt angle of the galactic plane

    for (let i = 0; i < this.milkyWayStarCount; i++) {
      const i3 = i * 3;

      // Generate stars concentrated along the galactic plane
      const theta = Math.random() * Math.PI * 2;

      // Use gaussian-like distribution for phi to concentrate stars in a band
      const gaussianOffset = (Math.random() + Math.random() + Math.random() - 1.5) * bandWidth;
      const phi = Math.PI / 2 + gaussianOffset;

      // Apply tilt to the galactic plane
      let x = this.radius * Math.sin(phi) * Math.cos(theta);
      let y = this.radius * Math.sin(phi) * Math.sin(theta);
      let z = this.radius * Math.cos(phi);

      // Rotate around X axis for tilt
      const cosT = Math.cos(bandTilt);
      const sinT = Math.sin(bandTilt);
      const newY = y * cosT - z * sinT;
      const newZ = y * sinT + z * cosT;

      positions[i3] = x;
      positions[i3 + 1] = newY;
      positions[i3 + 2] = newZ;

      // Milky Way colors - subtle warm tones with some variation
      const brightness = 0.3 + Math.random() * 0.4;
      const colorVar = Math.random();
      if (colorVar < 0.4) {
        // Warm white
        colors[i3] = brightness * 1.0;
        colors[i3 + 1] = brightness * 0.95;
        colors[i3 + 2] = brightness * 0.85;
      } else if (colorVar < 0.7) {
        // Slight blue tint
        colors[i3] = brightness * 0.9;
        colors[i3 + 1] = brightness * 0.95;
        colors[i3 + 2] = brightness * 1.0;
      } else {
        // Pinkish/red (nebula areas)
        colors[i3] = brightness * 1.0;
        colors[i3 + 1] = brightness * 0.8;
        colors[i3 + 2] = brightness * 0.85;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create circular point texture for softer stars
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const starTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      map: starTexture,
      depthWrite: false
    });

    this.milkyWayMesh = new THREE.Points(geometry, material);
    this.milkyWayMesh.name = 'MilkyWay';
    this.group.add(this.milkyWayMesh);

    // Add subtle nebula glow sprites along the band
    this.createNebulaGlow();
  }

  /**
   * Create subtle nebula glow patches along the Milky Way
   */
  createNebulaGlow() {
    const nebulaCount = 20;

    // Create canvas texture for nebula glow
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(180, 160, 200, 0.3)');
    gradient.addColorStop(0.3, 'rgba(160, 140, 180, 0.15)');
    gradient.addColorStop(0.6, 'rgba(140, 120, 160, 0.05)');
    gradient.addColorStop(1, 'rgba(120, 100, 140, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    const nebulaTexture = new THREE.CanvasTexture(canvas);

    const nebulaMaterial = new THREE.SpriteMaterial({
      map: nebulaTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.3
    });

    const bandTilt = Math.PI / 6;

    for (let i = 0; i < nebulaCount; i++) {
      const sprite = new THREE.Sprite(nebulaMaterial.clone());

      const theta = (i / nebulaCount) * Math.PI * 2 + Math.random() * 0.5;
      const phi = Math.PI / 2 + (Math.random() - 0.5) * 0.3;

      let x = this.radius * 0.95 * Math.sin(phi) * Math.cos(theta);
      let y = this.radius * 0.95 * Math.sin(phi) * Math.sin(theta);
      let z = this.radius * 0.95 * Math.cos(phi);

      // Apply same tilt
      const cosT = Math.cos(bandTilt);
      const sinT = Math.sin(bandTilt);
      const newY = y * cosT - z * sinT;
      const newZ = y * sinT + z * cosT;

      sprite.position.set(x, newY, newZ);

      const scale = 100 + Math.random() * 150;
      sprite.scale.set(scale, scale, 1);

      // Random color tint
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        sprite.material.color.setHex(0xccbbdd); // Purple
      } else if (colorChoice < 0.7) {
        sprite.material.color.setHex(0xddccbb); // Warm
      } else {
        sprite.material.color.setHex(0xbbccdd); // Blue
      }

      this.group.add(sprite);
    }
  }

  /**
   * Get the Three.js object to add to scene
   */
  getMesh() {
    return this.group;
  }

  /**
   * Optional slow rotation for subtle animation
   */
  update(deltaTime) {
    // Very slow rotation to add subtle life to the background
    this.group.rotation.y += deltaTime * 0.001;
  }

  /**
   * Clean up resources
   */
  dispose() {
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
    if (this.milkyWayMesh) {
      this.milkyWayMesh.geometry.dispose();
      this.milkyWayMesh.material.dispose();
      if (this.milkyWayMesh.material.map) {
        this.milkyWayMesh.material.map.dispose();
      }
    }
  }
}
