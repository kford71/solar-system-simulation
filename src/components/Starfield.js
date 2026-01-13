/**
 * Starfield Component
 *
 * Creates a realistic starfield background with:
 * - Varied star brightness based on magnitude distribution
 * - Color temperature variation (O/B, F/G, K, M type stars)
 * - Subtle twinkling effect via custom shader
 * - Milky Way band for realism
 */

import * as THREE from 'three';

export class Starfield {
  constructor(options = {}) {
    this.starCount = options.starCount || 8000;
    this.milkyWayStarCount = options.milkyWayStarCount || 6000;
    this.radius = options.radius || 1000;

    this.group = new THREE.Group();
    this.group.name = 'StarfieldGroup';

    this.geometry = null;
    this.material = null;
    this.mesh = null;
    this.milkyWayMesh = null;
    this.elapsedTime = 0;

    this.init();
  }

  /**
   * Initialize the starfield
   */
  init() {
    this.createMainStarfield();
    this.createMilkyWay();
  }

  /**
   * Select a color based on weighted probability (star type distribution)
   */
  selectWeightedColor(colorOptions) {
    const totalWeight = colorOptions.reduce((sum, opt) => sum + opt.weight, 0);
    let random = Math.random() * totalWeight;
    for (const option of colorOptions) {
      random -= option.weight;
      if (random <= 0) return option.color.clone();
    }
    return colorOptions[0].color.clone();
  }

  /**
   * Create the main starfield with shader-based twinkling
   */
  createMainStarfield() {
    const positions = new Float32Array(this.starCount * 3);
    const colors = new Float32Array(this.starCount * 3);
    const sizes = new Float32Array(this.starCount);
    const phases = new Float32Array(this.starCount);
    const speeds = new Float32Array(this.starCount);

    // Star color palette based on spectral type
    // Realistic distribution: O/B (hot blue) are rare, M (cool red) are common
    const starColors = [
      { color: new THREE.Color(0xaaccff), weight: 0.10 },  // O/B type: Blue-white (hot)
      { color: new THREE.Color(0xffffff), weight: 0.30 },  // F type: Pure white
      { color: new THREE.Color(0xfff8f0), weight: 0.25 },  // G type: Warm white (like Sun)
      { color: new THREE.Color(0xffd699), weight: 0.20 },  // K type: Yellow-orange
      { color: new THREE.Color(0xffaa77), weight: 0.15 },  // M type: Orange-red (cool)
    ];

    for (let i = 0; i < this.starCount; i++) {
      // Random position on sphere with slight depth variation
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = this.radius * 0.9 + Math.random() * this.radius * 0.2;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Weighted random color selection
      const color = this.selectWeightedColor(starColors);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size based on "magnitude" - exponential falloff (most stars dim, few bright)
      // Using power of 2.5 creates realistic magnitude distribution
      const magnitude = Math.pow(Math.random(), 2.5);
      sizes[i] = 1.5 + magnitude * 2.5; // Range 1.5 to 4.0

      // Random twinkle parameters for each star
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.3 + Math.random() * 1.5; // Varied twinkle speeds
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('starColor', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    this.geometry.setAttribute('twinkleSpeed', new THREE.BufferAttribute(speeds, 1));

    // Custom shader material for twinkling effect
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute float phase;
        attribute float twinkleSpeed;
        attribute vec3 starColor;

        varying vec3 vColor;
        varying float vPhase;
        varying float vSpeed;

        void main() {
          vColor = starColor;
          vPhase = phase;
          vSpeed = twinkleSpeed;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          // Size attenuation based on distance
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_PointSize = clamp(gl_PointSize, 1.0, 6.0);

          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;

        varying vec3 vColor;
        varying float vPhase;
        varying float vSpeed;

        void main() {
          // Circular point with soft edge
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          if (dist > 0.5) discard;

          // Soft radial falloff from center
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);

          // Subtle twinkle effect (not too dramatic)
          // Range: 0.85 to 1.0 for gentle scintillation
          float twinkle = 0.85 + 0.15 * sin(time * vSpeed + vPhase);

          // Add slight secondary frequency for more organic feel
          twinkle *= 0.95 + 0.05 * sin(time * vSpeed * 0.7 + vPhase * 1.3);

          gl_FragColor = vec4(vColor * twinkle, alpha * twinkle);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false  // Keep star colors vivid, not affected by tone mapping
    });

    this.mesh = new THREE.Points(this.geometry, this.material);
    this.mesh.name = 'Starfield';
    this.group.add(this.mesh);
  }

  /**
   * Create the Milky Way band - a denser concentration of stars
   * along a band across the sky with its own twinkling
   */
  createMilkyWay() {
    const positions = new Float32Array(this.milkyWayStarCount * 3);
    const colors = new Float32Array(this.milkyWayStarCount * 3);
    const sizes = new Float32Array(this.milkyWayStarCount);
    const phases = new Float32Array(this.milkyWayStarCount);
    const speeds = new Float32Array(this.milkyWayStarCount);

    // Milky Way band parameters
    const bandWidth = 0.35; // Width of the band in radians
    const bandTilt = Math.PI / 6; // Tilt angle of the galactic plane

    // Milky Way has more warm/red stars (older stellar population)
    const milkyWayColors = [
      { color: new THREE.Color(0xbbccee), weight: 0.08 },  // Blue-white
      { color: new THREE.Color(0xffffff), weight: 0.20 },  // White
      { color: new THREE.Color(0xfff4e8), weight: 0.30 },  // Warm white
      { color: new THREE.Color(0xffe0b0), weight: 0.25 },  // Yellow
      { color: new THREE.Color(0xffcc99), weight: 0.17 },  // Orange
    ];

    for (let i = 0; i < this.milkyWayStarCount; i++) {
      // Generate stars concentrated along the galactic plane
      const theta = Math.random() * Math.PI * 2;

      // Gaussian-like distribution for phi to concentrate stars in a band
      const gaussianOffset = (Math.random() + Math.random() + Math.random() - 1.5) * bandWidth;
      const phi = Math.PI / 2 + gaussianOffset;

      const radius = this.radius * 0.95;

      // Apply tilt to the galactic plane
      let x = radius * Math.sin(phi) * Math.cos(theta);
      let y = radius * Math.sin(phi) * Math.sin(theta);
      let z = radius * Math.cos(phi);

      // Rotate around X axis for tilt
      const cosT = Math.cos(bandTilt);
      const sinT = Math.sin(bandTilt);
      const newY = y * cosT - z * sinT;
      const newZ = y * sinT + z * cosT;

      positions[i * 3] = x;
      positions[i * 3 + 1] = newY;
      positions[i * 3 + 2] = newZ;

      // Weighted color selection
      const color = this.selectWeightedColor(milkyWayColors);
      // Dim the Milky Way stars somewhat
      const brightness = 0.4 + Math.random() * 0.3;
      colors[i * 3] = color.r * brightness;
      colors[i * 3 + 1] = color.g * brightness;
      colors[i * 3 + 2] = color.b * brightness;

      // Smaller sizes for Milky Way (distant dense field)
      sizes[i] = 1.0 + Math.pow(Math.random(), 3) * 1.5;

      // Twinkle parameters
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.2 + Math.random() * 1.0; // Slower twinkle for distant stars
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('starColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('twinkleSpeed', new THREE.BufferAttribute(speeds, 1));

    // Same shader material but with separate time uniform
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute float phase;
        attribute float twinkleSpeed;
        attribute vec3 starColor;

        varying vec3 vColor;
        varying float vPhase;
        varying float vSpeed;

        void main() {
          vColor = starColor;
          vPhase = phase;
          vSpeed = twinkleSpeed;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          gl_PointSize = size * (150.0 / -mvPosition.z);
          gl_PointSize = clamp(gl_PointSize, 0.5, 4.0);

          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;

        varying vec3 vColor;
        varying float vPhase;
        varying float vSpeed;

        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          if (dist > 0.5) discard;

          // Softer falloff for Milky Way stars
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= 0.6; // More transparent overall

          // Very subtle twinkle for distant stars
          float twinkle = 0.9 + 0.1 * sin(time * vSpeed + vPhase);

          gl_FragColor = vec4(vColor * twinkle, alpha * twinkle);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false
    });

    this.milkyWayMesh = new THREE.Points(geometry, material);
    this.milkyWayMesh.name = 'MilkyWay';
    this.milkyWayMaterial = material;
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

      let x = this.radius * 0.94 * Math.sin(phi) * Math.cos(theta);
      let y = this.radius * 0.94 * Math.sin(phi) * Math.sin(theta);
      let z = this.radius * 0.94 * Math.cos(phi);

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
   * Update starfield - animate twinkling and subtle rotation
   */
  update(deltaTime) {
    this.elapsedTime += deltaTime;

    // Update shader time uniforms for twinkling
    if (this.material && this.material.uniforms) {
      this.material.uniforms.time.value = this.elapsedTime;
    }
    if (this.milkyWayMaterial && this.milkyWayMaterial.uniforms) {
      this.milkyWayMaterial.uniforms.time.value = this.elapsedTime;
    }

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
      if (this.milkyWayMaterial) {
        this.milkyWayMaterial.dispose();
      }
    }
  }
}
