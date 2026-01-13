/**
 * Comet Component
 *
 * Creates a comet with:
 * - Highly elliptical orbit
 * - Glowing nucleus
 * - Particle-based tail that always points away from the Sun
 * - Tail length and brightness increases near perihelion
 */

import * as THREE from 'three';

export class Comet {
  constructor(options = {}) {
    // Orbital parameters (highly elliptical)
    this.semiMajorAxis = options.semiMajorAxis || 150;  // Far out
    this.eccentricity = options.eccentricity || 0.95;   // Very elliptical
    this.inclination = options.inclination || 0.3;      // Slight tilt
    this.orbitalPeriod = options.orbitalPeriod || 75;   // Years (like Halley's)

    this.group = new THREE.Group();
    this.group.name = 'Comet';

    this.nucleus = null;
    this.coma = null;           // Glowing halo around nucleus
    this.dustTail = null;       // Curved dust tail
    this.ionTail = null;        // Straight ion tail

    this.orbitAngle = Math.random() * Math.PI * 2;
    this.tailParticles = [];

    // Tail particle count
    this.dustTailCount = 500;
    this.ionTailCount = 300;

    this.init();
  }

  init() {
    this.createNucleus();
    this.createComa();
    this.createDustTail();
    this.createIonTail();
    this.createOrbitLine();
  }

  /**
   * Create the comet nucleus (the solid core)
   */
  createNucleus() {
    const geometry = new THREE.SphereGeometry(0.15, 16, 16);

    // Irregular, dark material
    const material = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.9,
      metalness: 0.1
    });

    this.nucleus = new THREE.Mesh(geometry, material);
    this.nucleus.name = 'CometNucleus';
    this.nucleus.userData = {
      type: 'celestialBody',
      name: 'Comet',
      clickable: true,
      facts: {
        type: 'Periodic Comet',
        orbitalPeriod: `~${this.orbitalPeriod} Earth years`,
        composition: 'Ice, dust, and rock ("dirty snowball")',
        tailLength: 'Up to millions of kilometers near Sun',
        feature: 'Tail always points away from the Sun'
      }
    };

    this.group.add(this.nucleus);
  }

  /**
   * Create the coma (glowing halo) around the nucleus
   */
  createComa() {
    // Create gradient texture for coma
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(200, 220, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(180, 200, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(150, 180, 255, 0.4)');
    gradient.addColorStop(0.8, 'rgba(120, 150, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(100, 130, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const comaTexture = new THREE.CanvasTexture(canvas);

    const comaMaterial = new THREE.SpriteMaterial({
      map: comaTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.coma = new THREE.Sprite(comaMaterial);
    this.coma.scale.set(2, 2, 1);
    this.group.add(this.coma);
  }

  /**
   * Create the dust tail (curved, yellow-white)
   */
  createDustTail() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.dustTailCount * 3);
    const colors = new Float32Array(this.dustTailCount * 3);
    const sizes = new Float32Array(this.dustTailCount);
    const velocities = [];

    for (let i = 0; i < this.dustTailCount; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;

      // Warm dust color
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
      colors[i * 3 + 2] = 0.7 + Math.random() * 0.2;

      sizes[i] = 0.5 + Math.random() * 1.0;

      // Random velocity for curved tail effect
      velocities.push({
        speed: 0.5 + Math.random() * 1.5,
        angle: (Math.random() - 0.5) * 0.3,  // Spread
        offset: Math.random() * Math.PI * 2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Point texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    this.dustTail = new THREE.Points(geometry, material);
    this.dustTail.userData.velocities = velocities;
    this.group.add(this.dustTail);
  }

  /**
   * Create the ion tail (straight, blue)
   */
  createIonTail() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.ionTailCount * 3);
    const colors = new Float32Array(this.ionTailCount * 3);

    for (let i = 0; i < this.ionTailCount; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;

      // Blue ion color
      colors[i * 3] = 0.3 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
      colors[i * 3 + 2] = 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Point texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(100, 150, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(100, 150, 255, 0.6)');
    gradient.addColorStop(0.6, 'rgba(100, 150, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    this.ionTail = new THREE.Points(geometry, material);
    this.group.add(this.ionTail);
  }

  /**
   * Create orbital path visualization
   */
  createOrbitLine() {
    const points = [];
    const segments = 256;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const r = this.getOrbitalRadius(angle);

      const x = r * Math.cos(angle);
      const z = r * Math.sin(angle);
      const y = Math.sin(angle) * Math.sin(this.inclination) * r * 0.3;

      points.push(new THREE.Vector3(x, y, z));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x444488,
      transparent: true,
      opacity: 0.2
    });

    this.orbitLine = new THREE.Line(geometry, material);
    this.orbitLine.name = 'CometOrbitLine';
  }

  /**
   * Calculate orbital radius at given angle (Kepler's equation)
   */
  getOrbitalRadius(angle) {
    const a = this.semiMajorAxis;
    const e = this.eccentricity;
    return (a * (1 - e * e)) / (1 + e * Math.cos(angle));
  }

  getMesh() {
    return this.group;
  }

  getOrbitLine() {
    return this.orbitLine;
  }

  /**
   * Update comet position and tail
   */
  update(deltaTime, speedMultiplier = 1) {
    // Update orbital position
    const orbitalAngularVelocity = (2 * Math.PI) / (this.orbitalPeriod * 100);
    this.orbitAngle += orbitalAngularVelocity * deltaTime * speedMultiplier;

    const r = this.getOrbitalRadius(this.orbitAngle);
    const x = r * Math.cos(this.orbitAngle);
    const z = r * Math.sin(this.orbitAngle);
    const y = Math.sin(this.orbitAngle) * Math.sin(this.inclination) * r * 0.3;

    this.nucleus.position.set(x, y, z);
    this.coma.position.copy(this.nucleus.position);

    // Calculate distance from Sun (for tail intensity)
    const distanceFromSun = Math.sqrt(x * x + y * y + z * z);

    // Tail length and brightness increase as comet approaches Sun
    // perihelion distance (closest to sun)
    const perihelion = this.semiMajorAxis * (1 - this.eccentricity);
    const aphelion = this.semiMajorAxis * (1 + this.eccentricity);

    // Normalize distance (0 = at perihelion, 1 = at aphelion)
    const normalizedDist = (distanceFromSun - perihelion) / (aphelion - perihelion);

    // Tail length increases near Sun
    const tailLengthFactor = Math.max(0.1, 1 - normalizedDist * 0.8);
    const maxTailLength = 30 * tailLengthFactor;

    // Direction away from Sun
    const awayFromSun = new THREE.Vector3(x, y, z).normalize();

    // Update coma size based on distance
    const comaSize = 2 + (1 - normalizedDist) * 3;
    this.coma.scale.set(comaSize, comaSize, 1);
    this.coma.material.opacity = 0.5 + (1 - normalizedDist) * 0.5;

    // Update dust tail particles
    this.updateDustTail(awayFromSun, maxTailLength, deltaTime);

    // Update ion tail particles
    this.updateIonTail(awayFromSun, maxTailLength * 1.5);

    // Update tail visibility based on distance
    this.dustTail.material.opacity = 0.3 + (1 - normalizedDist) * 0.5;
    this.ionTail.material.opacity = 0.2 + (1 - normalizedDist) * 0.5;
  }

  /**
   * Update dust tail particles (curved tail)
   */
  updateDustTail(awayFromSun, maxLength, deltaTime) {
    const positions = this.dustTail.geometry.attributes.position.array;
    const velocities = this.dustTail.userData.velocities;

    // Get orbital velocity direction for curved tail
    const orbitalDir = new THREE.Vector3(
      -Math.sin(this.orbitAngle),
      0,
      Math.cos(this.orbitAngle)
    ).normalize();

    for (let i = 0; i < this.dustTailCount; i++) {
      const t = i / this.dustTailCount;  // 0 to 1 along tail
      const vel = velocities[i];

      // Curved path - combination of anti-sunward and orbital direction
      const curveFactor = t * t * 0.3;
      const tailDir = new THREE.Vector3()
        .copy(awayFromSun)
        .multiplyScalar(1 - curveFactor)
        .add(orbitalDir.clone().multiplyScalar(curveFactor))
        .normalize();

      // Position along tail with some spread
      const dist = t * maxLength * vel.speed;
      const spread = t * 2 * (Math.sin(vel.offset + t * 3) * 0.5 + 0.5);

      positions[i * 3] = this.nucleus.position.x + tailDir.x * dist + (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = this.nucleus.position.y + tailDir.y * dist + (Math.random() - 0.5) * spread * 0.5;
      positions[i * 3 + 2] = this.nucleus.position.z + tailDir.z * dist + (Math.random() - 0.5) * spread;
    }

    this.dustTail.geometry.attributes.position.needsUpdate = true;
  }

  /**
   * Update ion tail particles (straight tail, always points directly away from Sun)
   */
  updateIonTail(awayFromSun, maxLength) {
    const positions = this.ionTail.geometry.attributes.position.array;

    for (let i = 0; i < this.ionTailCount; i++) {
      const t = i / this.ionTailCount;

      // Straight tail pointing away from sun
      const dist = t * maxLength;
      const spread = t * 0.5;

      positions[i * 3] = this.nucleus.position.x + awayFromSun.x * dist + (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = this.nucleus.position.y + awayFromSun.y * dist + (Math.random() - 0.5) * spread * 0.3;
      positions[i * 3 + 2] = this.nucleus.position.z + awayFromSun.z * dist + (Math.random() - 0.5) * spread;
    }

    this.ionTail.geometry.attributes.position.needsUpdate = true;
  }

  dispose() {
    if (this.nucleus) {
      this.nucleus.geometry.dispose();
      this.nucleus.material.dispose();
    }
    if (this.coma) {
      this.coma.material.map.dispose();
      this.coma.material.dispose();
    }
    if (this.dustTail) {
      this.dustTail.geometry.dispose();
      this.dustTail.material.dispose();
      this.dustTail.material.map.dispose();
    }
    if (this.ionTail) {
      this.ionTail.geometry.dispose();
      this.ionTail.material.dispose();
      this.ionTail.material.map.dispose();
    }
    if (this.orbitLine) {
      this.orbitLine.geometry.dispose();
      this.orbitLine.material.dispose();
    }
  }
}
