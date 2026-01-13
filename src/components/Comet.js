/**
 * Comet Component - Halley's Comet (1P/Halley)
 *
 * Creates Halley's Comet with:
 * - Accurate Keplerian orbital mechanics using JPL orbital elements
 * - Retrograde orbit (orbits opposite to planets)
 * - Glowing nucleus and coma
 * - Particle-based dust and ion tails that always point away from the Sun
 * - Tail length and brightness increases near perihelion
 * - Correct position on timeline (perihelion in 1986 and 2061)
 */

import * as THREE from 'three';
import { COMET_DATA, DISTANCE_SCALE } from '../data/planetData.js';

// Constants for orbital calculations
const DEG_TO_RAD = Math.PI / 180;

export class Comet {
  constructor(options = {}) {
    // Use accurate orbital elements from COMET_DATA
    this.data = COMET_DATA;

    // Orbital elements (in appropriate units)
    this.semiMajorAxis = this.data.semiMajorAxis;           // AU
    this.eccentricity = this.data.eccentricity;
    this.inclination = this.data.inclination * DEG_TO_RAD;  // Convert to radians
    this.longitudeOfAscendingNode = this.data.longitudeOfAscendingNode * DEG_TO_RAD;
    this.argumentOfPerihelion = this.data.argumentOfPerihelion * DEG_TO_RAD;
    this.meanAnomalyAtEpoch = this.data.meanAnomalyAtEpoch * DEG_TO_RAD;
    this.epoch = this.data.epoch;                           // Julian Date
    this.meanMotion = this.data.meanMotion * DEG_TO_RAD;    // Radians per day
    this.orbitalPeriod = this.data.orbitalPeriod;           // Years

    // Derived values
    this.perihelion = this.data.perihelion;                 // AU
    this.aphelion = this.data.aphelion;                     // AU

    this.group = new THREE.Group();
    this.group.name = "Halley's Comet";

    this.nucleus = null;
    this.coma = null;           // Glowing halo around nucleus
    this.dustTail = null;       // Curved dust tail
    this.ionTail = null;        // Straight ion tail
    this.orbitLine = null;

    // Current Julian Date for position calculation
    this.currentJulianDate = null;

    // Tail particle count
    this.dustTailCount = 250;
    this.ionTailCount = 150;

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
   * Solve Kepler's equation: M = E - e*sin(E)
   * Uses Newton-Raphson iteration
   */
  solveKepler(M, e) {
    // Normalize M to 0-2PI
    M = M % (2 * Math.PI);
    if (M < 0) M += 2 * Math.PI;

    // Initial guess
    let E = M + e * Math.sin(M) * (1 + e * Math.cos(M));

    // Newton-Raphson iteration
    const tolerance = 1e-10;
    let delta = 1;
    let iterations = 0;
    const maxIterations = 30;

    while (Math.abs(delta) > tolerance && iterations < maxIterations) {
      delta = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
      E -= delta;
      iterations++;
    }

    return E;
  }

  /**
   * Calculate comet position for a given Julian Date
   * Returns heliocentric coordinates in AU
   */
  calculatePosition(jd) {
    // Days since epoch
    const daysSinceEpoch = jd - this.epoch;

    // Mean anomaly at current time
    const M = this.meanAnomalyAtEpoch + this.meanMotion * daysSinceEpoch;

    // Solve Kepler's equation for eccentric anomaly
    const E = this.solveKepler(M, this.eccentricity);

    // True anomaly
    const sinNu = Math.sqrt(1 - this.eccentricity * this.eccentricity) * Math.sin(E) / (1 - this.eccentricity * Math.cos(E));
    const cosNu = (Math.cos(E) - this.eccentricity) / (1 - this.eccentricity * Math.cos(E));
    const nu = Math.atan2(sinNu, cosNu);

    // Distance from Sun (in AU)
    const r = this.semiMajorAxis * (1 - this.eccentricity * Math.cos(E));

    // Position in orbital plane
    const xOrbit = r * Math.cos(nu);
    const yOrbit = r * Math.sin(nu);

    // Rotation matrices for 3D position
    // Note: inclination > 90 degrees makes it retrograde
    const cosW = Math.cos(this.argumentOfPerihelion);
    const sinW = Math.sin(this.argumentOfPerihelion);
    const cosO = Math.cos(this.longitudeOfAscendingNode);
    const sinO = Math.sin(this.longitudeOfAscendingNode);
    const cosI = Math.cos(this.inclination);
    const sinI = Math.sin(this.inclination);

    // Transform to heliocentric ecliptic coordinates
    const x = (cosW * cosO - sinW * sinO * cosI) * xOrbit +
              (-sinW * cosO - cosW * sinO * cosI) * yOrbit;
    const y = (cosW * sinO + sinW * cosO * cosI) * xOrbit +
              (-sinW * sinO + cosW * cosO * cosI) * yOrbit;
    const z = (sinW * sinI) * xOrbit + (cosW * sinI) * yOrbit;

    return { x, y, z, r, trueAnomaly: nu };
  }

  /**
   * Create the comet nucleus (the solid core)
   */
  createNucleus() {
    // Halley's nucleus is about 11km x 8km - make it visually small
    const geometry = new THREE.SphereGeometry(0.12, 16, 16);

    // Dark, irregular material (Halley's nucleus has very low albedo ~0.04)
    const material = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.95,
      metalness: 0.05
    });

    this.nucleus = new THREE.Mesh(geometry, material);
    this.nucleus.name = "Halley's Comet";
    this.nucleus.userData = {
      type: 'celestialBody',
      name: "Halley's Comet",
      clickable: true,
      facts: this.data.facts
    };

    this.group.add(this.nucleus);
  }

  /**
   * Create the coma (glowing halo) around the nucleus
   */
  createComa() {
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

      velocities.push({
        speed: 0.5 + Math.random() * 1.5,
        angle: (Math.random() - 0.5) * 0.3,
        offset: Math.random() * Math.PI * 2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

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
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
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
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    this.ionTail = new THREE.Points(geometry, material);
    this.group.add(this.ionTail);
  }

  /**
   * Create orbital path visualization with accurate 3D orbit
   */
  createOrbitLine() {
    const points = [];
    const segments = 512;  // More segments for smooth ellipse

    for (let i = 0; i <= segments; i++) {
      // True anomaly from 0 to 2PI
      const nu = (i / segments) * Math.PI * 2;

      // Distance at this true anomaly
      const r = (this.semiMajorAxis * (1 - this.eccentricity * this.eccentricity)) /
                (1 + this.eccentricity * Math.cos(nu));

      // Position in orbital plane
      const xOrbit = r * Math.cos(nu);
      const yOrbit = r * Math.sin(nu);

      // Transform to 3D coordinates
      const cosW = Math.cos(this.argumentOfPerihelion);
      const sinW = Math.sin(this.argumentOfPerihelion);
      const cosO = Math.cos(this.longitudeOfAscendingNode);
      const sinO = Math.sin(this.longitudeOfAscendingNode);
      const cosI = Math.cos(this.inclination);
      const sinI = Math.sin(this.inclination);

      const x = (cosW * cosO - sinW * sinO * cosI) * xOrbit +
                (-sinW * cosO - cosW * sinO * cosI) * yOrbit;
      const y = (cosW * sinO + sinW * cosO * cosI) * xOrbit +
                (-sinW * sinO + cosW * cosO * cosI) * yOrbit;
      const z = (sinW * sinI) * xOrbit + (cosW * sinI) * yOrbit;

      // Scale to scene units
      points.push(new THREE.Vector3(
        x * DISTANCE_SCALE,
        z * DISTANCE_SCALE,  // Swap y and z for Three.js coordinate system
        y * DISTANCE_SCALE
      ));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x6666aa,
      transparent: true,
      opacity: 0.3
    });

    this.orbitLine = new THREE.Line(geometry, material);
    this.orbitLine.name = "Halley's Comet Orbit";
  }

  getMesh() {
    return this.group;
  }

  getOrbitLine() {
    return this.orbitLine;
  }

  /**
   * Set position for a specific Julian Date
   */
  setPositionForDate(julianDate) {
    this.currentJulianDate = julianDate;

    // Calculate position using Keplerian mechanics
    const pos = this.calculatePosition(julianDate);

    // Convert to scene coordinates (scale AU to scene units)
    // Swap y and z for Three.js coordinate system
    const x = pos.x * DISTANCE_SCALE;
    const y = pos.z * DISTANCE_SCALE;
    const z = pos.y * DISTANCE_SCALE;

    this.nucleus.position.set(x, y, z);
    this.coma.position.copy(this.nucleus.position);

    // Calculate tail properties based on distance from Sun
    const distanceFromSun = pos.r;  // Already in AU

    // Normalize distance (0 = at perihelion, 1 = at aphelion)
    const normalizedDist = (distanceFromSun - this.perihelion) / (this.aphelion - this.perihelion);

    // Tail is longer and brighter near perihelion
    const tailLengthFactor = Math.max(0.1, 1 - normalizedDist * 0.8);
    const maxTailLength = 25 * tailLengthFactor;

    // Direction away from Sun
    const awayFromSun = new THREE.Vector3(x, y, z).normalize();

    // Update coma size based on distance (bigger when closer to Sun)
    const comaSize = 1.5 + (1 - normalizedDist) * 3;
    this.coma.scale.set(comaSize, comaSize, 1);
    this.coma.material.opacity = 0.4 + (1 - normalizedDist) * 0.5;

    // Update tails
    this.updateDustTail(awayFromSun, maxTailLength, pos.trueAnomaly);
    this.updateIonTail(awayFromSun, maxTailLength * 1.5);

    // Update tail visibility
    this.dustTail.material.opacity = 0.1 + (1 - normalizedDist) * 0.3;
    this.ionTail.material.opacity = 0.08 + (1 - normalizedDist) * 0.25;
  }

  /**
   * Update comet position and tail
   */
  update(deltaTime, speedMultiplier = 1, elapsedTime = 0, julianDate = null) {
    if (julianDate !== null) {
      this.setPositionForDate(julianDate);
    }
  }

  /**
   * Update dust tail particles (curved tail)
   */
  updateDustTail(awayFromSun, maxLength, trueAnomaly) {
    const positions = this.dustTail.geometry.attributes.position.array;
    const velocities = this.dustTail.userData.velocities;

    // Get orbital velocity direction for curved tail
    // For retrograde orbit, orbital direction is reversed
    const orbitalDir = new THREE.Vector3(
      Math.sin(trueAnomaly + this.argumentOfPerihelion),
      0,
      -Math.cos(trueAnomaly + this.argumentOfPerihelion)
    ).normalize();

    for (let i = 0; i < this.dustTailCount; i++) {
      const t = i / this.dustTailCount;
      const vel = velocities[i];

      // Curved path - combination of anti-sunward and orbital direction
      const curveFactor = t * t * 0.3;
      const tailDir = new THREE.Vector3()
        .copy(awayFromSun)
        .multiplyScalar(1 - curveFactor)
        .add(orbitalDir.clone().multiplyScalar(curveFactor))
        .normalize();

      const dist = t * maxLength * vel.speed;
      const spread = t * 1.5 * (Math.sin(vel.offset + t * 3) * 0.5 + 0.5);

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

      const dist = t * maxLength;
      const spread = t * 0.4;

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
