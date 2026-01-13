/**
 * Sun Component
 *
 * Creates the Sun with:
 * - Emissive material for self-illumination
 * - Corona/glow effect using sprites
 * - Animated solar flares/prominences
 * - Lens flare effect when camera faces the Sun
 * - Point light to illuminate planets
 * - Animated surface effect
 */

import * as THREE from 'three';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';
import { SUN_DATA } from '../data/planetData.js';

export class Sun {
  constructor(textureLoader) {
    this.data = SUN_DATA;
    this.textureLoader = textureLoader;
    this.group = new THREE.Group();
    this.group.name = 'Sun';
    this.group.userData = {
      type: 'celestialBody',
      name: 'Sun',
      facts: this.data.facts,
      clickable: true
    };

    this.sunMesh = null;
    this.coronaMesh = null;
    this.solarFlares = [];
    this.lensflare = null;
    this.pointLight = null;
    this.ambientLight = null;

    this.init();
  }

  init() {
    this.createSunSphere();
    this.createCorona();
    this.createSolarFlares();
    this.createLensFlare();
    this.createLights();
  }

  /**
   * Create the main sun sphere with emissive material
   */
  createSunSphere() {
    const geometry = new THREE.SphereGeometry(this.data.radius, 64, 64);

    // Create custom shader material for animated sun surface
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        baseColor: { value: new THREE.Color(0xffdd44) },
        glowColor: { value: new THREE.Color(0xff6600) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 baseColor;
        uniform vec3 glowColor;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        // Improved noise functions for sun surface
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 6; i++) {
            value += amplitude * noise(p * frequency);
            frequency *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          // Animated surface turbulence
          vec2 animatedUv = vUv * 6.0 + vec2(time * 0.03, time * 0.02);
          float turbulence = fbm(animatedUv);

          // Create granulation effect (convection cells)
          vec2 granuleUv = vUv * 20.0 + time * 0.01;
          float granules = fbm(granuleUv);
          granules = smoothstep(0.3, 0.7, granules);

          // Sunspot-like darker regions
          vec2 spotUv = vUv * 3.0 + time * 0.005;
          float spots = fbm(spotUv);
          spots = smoothstep(0.6, 0.8, spots) * 0.3;

          // Combine effects
          vec3 color = baseColor;
          color = mix(color, glowColor, turbulence * 0.4);
          color = mix(color, baseColor * 1.2, granules * 0.2);
          color = mix(color, vec3(0.8, 0.3, 0.1), spots);

          // Limb darkening effect
          float limb = dot(vNormal, vec3(0.0, 0.0, 1.0));
          limb = pow(max(0.0, limb), 0.4);
          color *= 0.6 + limb * 0.4;

          // Rim brightening for bloom
          float rim = 1.0 - limb;
          rim = pow(rim, 3.0);
          color += glowColor * rim * 0.3;

          // High intensity for bloom effect
          gl_FragColor = vec4(color * 1.8, 1.0);
        }
      `
    });

    this.sunMesh = new THREE.Mesh(geometry, material);
    this.sunMesh.userData = this.group.userData;
    this.group.add(this.sunMesh);
  }

  /**
   * Create corona/glow effect using billboard sprites
   */
  createCorona() {
    // Main corona
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, 'rgba(255, 220, 150, 1)');
    gradient.addColorStop(0.15, 'rgba(255, 180, 80, 0.9)');
    gradient.addColorStop(0.3, 'rgba(255, 120, 40, 0.6)');
    gradient.addColorStop(0.5, 'rgba(255, 80, 20, 0.3)');
    gradient.addColorStop(0.7, 'rgba(255, 40, 0, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    const coronaTexture = new THREE.CanvasTexture(canvas);

    const coronaMaterial = new THREE.SpriteMaterial({
      map: coronaTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.coronaMesh = new THREE.Sprite(coronaMaterial);
    // Reduced corona size to not bleed into inner planets
    this.coronaMesh.scale.set(this.data.radius * 3, this.data.radius * 3, 1);
    this.group.add(this.coronaMesh);
  }

  /**
   * Create animated solar flares/prominences
   */
  createSolarFlares() {
    const flareCount = 5;

    for (let i = 0; i < flareCount; i++) {
      const flare = this.createSingleFlare(i / flareCount);
      this.solarFlares.push(flare);
      this.group.add(flare.mesh);
    }
  }

  /**
   * Create a single solar flare
   */
  createSingleFlare(offset) {
    // Create canvas for flare texture
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Draw flare shape (elongated arc)
    const gradient = ctx.createLinearGradient(128, 512, 128, 0);
    gradient.addColorStop(0, 'rgba(255, 100, 50, 0.8)');
    gradient.addColorStop(0.3, 'rgba(255, 150, 50, 0.6)');
    gradient.addColorStop(0.6, 'rgba(255, 200, 100, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 200, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(64, 512);
    ctx.quadraticCurveTo(0, 256, 64, 0);
    ctx.quadraticCurveTo(128, 128, 192, 0);
    ctx.quadraticCurveTo(256, 256, 192, 512);
    ctx.closePath();
    ctx.fill();

    const flareTexture = new THREE.CanvasTexture(canvas);

    const flareMaterial = new THREE.SpriteMaterial({
      map: flareTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.6
    });

    const flareMesh = new THREE.Sprite(flareMaterial);

    // Random positioning around the sun
    const angle = offset * Math.PI * 2 + Math.random() * 0.5;
    const flareData = {
      mesh: flareMesh,
      baseAngle: angle,
      speed: 0.1 + Math.random() * 0.2,
      scaleBase: 0.8 + Math.random() * 0.4,
      phaseOffset: Math.random() * Math.PI * 2,
      height: this.data.radius * (1.5 + Math.random() * 1.5)
    };

    // Initial positioning
    this.updateFlarePosition(flareData, 0);

    return flareData;
  }

  /**
   * Update a flare's position based on time
   */
  updateFlarePosition(flare, time) {
    const angle = flare.baseAngle + Math.sin(time * 0.2 + flare.phaseOffset) * 0.2;
    const height = flare.height * (0.8 + Math.sin(time * flare.speed + flare.phaseOffset) * 0.3);
    const scale = flare.scaleBase * (0.7 + Math.sin(time * flare.speed * 2 + flare.phaseOffset) * 0.4);

    // Position on sun's surface
    const distance = this.data.radius * 0.95;
    flare.mesh.position.x = Math.cos(angle) * distance;
    flare.mesh.position.y = Math.sin(angle) * distance;
    flare.mesh.position.z = 0;

    // Scale and rotation to point outward
    flare.mesh.scale.set(this.data.radius * 0.5 * scale, height * scale, 1);

    // Rotate to point away from sun center
    flare.mesh.material.rotation = angle - Math.PI / 2;

    // Fade in/out
    const fade = 0.3 + Math.sin(time * flare.speed + flare.phaseOffset) * 0.3;
    flare.mesh.material.opacity = Math.max(0, fade);
  }

  /**
   * Create lens flare effect
   */
  createLensFlare() {
    // Create lens flare textures procedurally
    const textureFlare0 = this.createFlareTexture(256, 'radial');
    const textureFlare1 = this.createFlareTexture(128, 'ring');
    const textureFlare2 = this.createFlareTexture(64, 'hex');

    this.lensflare = new Lensflare();
    // Much more subtle lens flare - reduced sizes and opacity
    this.lensflare.addElement(new LensflareElement(textureFlare0, 200, 0, new THREE.Color(0xffffff)));
    this.lensflare.addElement(new LensflareElement(textureFlare1, 30, 0.6, new THREE.Color(0xffcc88)));
    this.lensflare.addElement(new LensflareElement(textureFlare1, 35, 0.7, new THREE.Color(0xffaa66)));
    this.lensflare.addElement(new LensflareElement(textureFlare2, 50, 0.9, new THREE.Color(0xffddaa)));
    this.lensflare.addElement(new LensflareElement(textureFlare2, 30, 1.0, new THREE.Color(0xffffcc)));

    this.group.add(this.lensflare);
  }

  /**
   * Create procedural flare textures
   */
  createFlareTexture(size, type) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const center = size / 2;

    if (type === 'radial') {
      const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 220, 150, 0.8)');
      gradient.addColorStop(0.4, 'rgba(255, 180, 100, 0.4)');
      gradient.addColorStop(0.8, 'rgba(255, 100, 50, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 50, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    } else if (type === 'ring') {
      ctx.strokeStyle = 'rgba(255, 200, 150, 0.5)';
      ctx.lineWidth = size * 0.1;
      ctx.beginPath();
      ctx.arc(center, center, size * 0.35, 0, Math.PI * 2);
      ctx.stroke();
    } else if (type === 'hex') {
      ctx.fillStyle = 'rgba(255, 220, 180, 0.3)';
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const x = center + Math.cos(angle) * center * 0.8;
        const y = center + Math.sin(angle) * center * 0.8;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  /**
   * Create point light and ambient light
   */
  createLights() {
    // Main point light from the sun
    this.pointLight = new THREE.PointLight(0xffffff, 2.5, 0, 0.1);
    this.pointLight.position.set(0, 0, 0);
    this.pointLight.castShadow = false;
    this.group.add(this.pointLight);

    // Very dim ambient light so dark sides aren't completely black
    this.ambientLight = new THREE.AmbientLight(0x404040, 0.15);
    this.group.add(this.ambientLight);
  }

  getMesh() {
    return this.group;
  }

  /**
   * Update sun animation
   */
  update(deltaTime, elapsedTime) {
    // Update shader time uniform
    if (this.sunMesh && this.sunMesh.material.uniforms) {
      this.sunMesh.material.uniforms.time.value = elapsedTime;
    }

    // Subtle rotation
    this.sunMesh.rotation.y += deltaTime * 0.05;

    // Pulsate corona (reduced size)
    const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
    this.coronaMesh.scale.set(
      this.data.radius * 3 * pulse,
      this.data.radius * 3 * pulse,
      1
    );

    // Update solar flares
    this.solarFlares.forEach(flare => {
      this.updateFlarePosition(flare, elapsedTime);
    });

    // Rotate flare system slowly
    this.solarFlares.forEach((flare, i) => {
      flare.baseAngle += deltaTime * 0.02 * (i % 2 === 0 ? 1 : -1);
    });
  }

  /**
   * Set lens flare visibility (useful when zoomed in on sun)
   */
  setLensFlareVisible(visible) {
    if (this.lensflare) {
      this.lensflare.visible = visible;
    }
  }

  dispose() {
    if (this.sunMesh) {
      this.sunMesh.geometry.dispose();
      this.sunMesh.material.dispose();
    }
    if (this.coronaMesh) {
      this.coronaMesh.material.map.dispose();
      this.coronaMesh.material.dispose();
    }
    this.solarFlares.forEach(flare => {
      flare.mesh.material.map.dispose();
      flare.mesh.material.dispose();
    });
    if (this.lensflare) {
      this.lensflare.dispose();
    }
  }
}
