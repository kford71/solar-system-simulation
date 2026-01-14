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
import sunVert from '../shaders/sun.vert?raw';
import sunFrag from '../shaders/sun.frag?raw';

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
      vertexShader: sunVert,
      fragmentShader: sunFrag
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
   * Create cinematic lens flare effect
   * Attached to point light for proper occlusion when sun is behind objects
   */
  createLensFlare() {
    // Generate high-quality procedural flare textures
    const textureFlareMain = this.createGlowFlareTexture(256, 'rgba(255,255,240,1)', 0.3);
    const textureFlareHex = this.createHexagonFlareTexture(64, 'rgba(255,200,100,1)');
    const textureFlareRing = this.createRingFlareTexture(128, 'rgba(200,180,255,1)');
    const textureFlareGlow = this.createGlowFlareTexture(128, 'rgba(255,220,180,1)', 0.6);
    const textureFlareSmall = this.createGlowFlareTexture(64, 'rgba(255,240,200,1)', 0.5);

    this.lensflare = new Lensflare();

    // Main sun glow (at light source position, distance = 0)
    this.lensflare.addElement(new LensflareElement(
      textureFlareMain,
      500,      // size - large central glow
      0,        // distance (0 = at light source)
      new THREE.Color(0xffffee)
    ));

    // Secondary glow closer to sun
    this.lensflare.addElement(new LensflareElement(
      textureFlareGlow,
      80,
      0.1,
      new THREE.Color(0xffffcc)
    ));

    // Elements spread along the line from sun toward camera center
    this.lensflare.addElement(new LensflareElement(
      textureFlareGlow,
      60,
      0.25,
      new THREE.Color(0xffeeaa)
    ));

    this.lensflare.addElement(new LensflareElement(
      textureFlareHex,
      35,
      0.4,
      new THREE.Color(0xffaa66)
    ));

    this.lensflare.addElement(new LensflareElement(
      textureFlareRing,
      70,
      0.55,
      new THREE.Color(0xaaaaff)
    ));

    this.lensflare.addElement(new LensflareElement(
      textureFlareHex,
      25,
      0.65,
      new THREE.Color(0xffddaa)
    ));

    this.lensflare.addElement(new LensflareElement(
      textureFlareSmall,
      40,
      0.75,
      new THREE.Color(0xffffff)
    ));

    this.lensflare.addElement(new LensflareElement(
      textureFlareGlow,
      90,
      0.85,
      new THREE.Color(0xffffee)
    ));

    // Opposite side from sun (past screen center)
    this.lensflare.addElement(new LensflareElement(
      textureFlareHex,
      45,
      1.0,
      new THREE.Color(0xffcc88)
    ));

    this.lensflare.addElement(new LensflareElement(
      textureFlareRing,
      55,
      1.1,
      new THREE.Color(0xccccff)
    ));

    // Note: Lensflare will be added to pointLight in createLights()
    // so occlusion works properly (objects blocking sun will dim the flare)
  }

  /**
   * Create soft glow flare texture with configurable falloff
   */
  createGlowFlareTexture(size, color, falloff = 0.5) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2;

    // Parse the rgba color to get components
    const colorMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const r = colorMatch ? colorMatch[1] : 255;
    const g = colorMatch ? colorMatch[2] : 255;
    const b = colorMatch ? colorMatch[3] : 255;

    // Radial gradient for soft glow
    const gradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, radius
    );

    gradient.addColorStop(0, `rgba(${r},${g},${b},1)`);
    gradient.addColorStop(falloff * 0.5, `rgba(${r},${g},${b},0.6)`);
    gradient.addColorStop(falloff, `rgba(${r},${g},${b},0.3)`);
    gradient.addColorStop(falloff + (1 - falloff) * 0.5, `rgba(${r},${g},${b},0.1)`);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  /**
   * Create hexagonal aperture flare texture
   */
  createHexagonFlareTexture(size, color) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.4;

    // Parse the rgba color
    const colorMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const r = colorMatch ? colorMatch[1] : 255;
    const g = colorMatch ? colorMatch[2] : 200;
    const b = colorMatch ? colorMatch[3] : 100;

    // Draw hexagon path
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Soft gradient fill
    const gradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, radius
    );
    gradient.addColorStop(0, `rgba(${r},${g},${b},0.8)`);
    gradient.addColorStop(0.5, `rgba(${r},${g},${b},0.4)`);
    gradient.addColorStop(1, `rgba(${r},${g},${b},0.1)`);

    ctx.fillStyle = gradient;
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  /**
   * Create ring/circle flare texture
   */
  createRingFlareTexture(size, color) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const centerX = size / 2;
    const centerY = size / 2;
    const outerRadius = size * 0.45;
    const innerRadius = size * 0.32;

    // Parse the rgba color
    const colorMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const r = colorMatch ? colorMatch[1] : 200;
    const g = colorMatch ? colorMatch[2] : 180;
    const b = colorMatch ? colorMatch[3] : 255;

    // Create ring using arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2, true);
    ctx.closePath();

    // Radial gradient for the ring
    const gradient = ctx.createRadialGradient(
      centerX, centerY, innerRadius,
      centerX, centerY, outerRadius
    );
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(0.2, `rgba(${r},${g},${b},0.3)`);
    gradient.addColorStop(0.5, `rgba(${r},${g},${b},0.5)`);
    gradient.addColorStop(0.8, `rgba(${r},${g},${b},0.3)`);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = gradient;
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
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

    // Attach lens flare to point light for proper occlusion
    // When objects block the sun, the flare will properly dim
    if (this.lensflare) {
      this.pointLight.add(this.lensflare);
    }

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
