/**
 * Asteroid Component
 *
 * Creates a major asteroid with:
 * - Keplerian orbital mechanics (accurate position calculation)
 * - Proper orbital inclination
 * - Albedo-based lighting
 * - Clickable info panel
 * - Orbit line visualization
 */

import * as THREE from 'three';
import { DISTANCE_SCALE } from '../data/planetData.js';

export class Asteroid {
  constructor(data) {
    this.data = data;

    // Orbital state
    this.currentJulianDate = null;
    this.orbitAngle = 0;

    // Three.js objects
    this.asteroidMesh = null;
    this.orbitLine = null;
    this.orbitGroup = new THREE.Group();

    this.orbitGroup.name = `${data.name}Orbit`;

    this.init();
  }

  init() {
    this.createAsteroidMesh();
    this.createOrbitLine();
  }

  /**
   * Create the asteroid mesh with albedo-based lighting
   */
  createAsteroidMesh() {
    // Use icosahedron geometry for more irregular asteroid shape
    const geometry = new THREE.IcosahedronGeometry(this.data.radius, 2);

    // Slightly deform for more asteroid-like appearance
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      const length = Math.sqrt(x * x + y * y + z * z);

      // Apply random deformation (5-15%)
      const deformation = 0.9 + Math.random() * 0.2;
      positions.setXYZ(
        i,
        x * deformation,
        y * deformation,
        z * deformation
      );
    }
    geometry.computeVertexNormals();

    // Get albedo value (default to 0.1 if not specified)
    const albedo = this.data.albedo !== undefined ? this.data.albedo : 0.1;

    // Create shader material with albedo-based lighting
    const material = new THREE.ShaderMaterial({
      uniforms: {
        baseColor: { value: new THREE.Color(this.data.color) },
        albedo: { value: albedo },
        sunDirection: { value: new THREE.Vector3(1, 0, 0) }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 baseColor;
        uniform float albedo;
        uniform vec3 sunDirection;

        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normal = normalize(vNormal);

          // Calculate lighting
          float sunDot = dot(normal, sunDirection);

          // Diffuse lighting with albedo affecting brightness
          float ambientLight = 0.08;
          float diffuse = max(0.0, sunDot);

          // Apply albedo to affect overall brightness
          // Brighter asteroids (Vesta) should be more visible
          float albedoFactor = 0.3 + (albedo * 1.0);

          // Final lighting calculation
          float lighting = ambientLight + (diffuse * albedoFactor);

          // Apply lighting to surface color
          vec3 finalColor = baseColor * lighting;

          // Slight boost to prevent completely black dark sides
          finalColor = max(finalColor, baseColor * 0.03);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });

    this.asteroidMesh = new THREE.Mesh(geometry, material);
    this.asteroidMesh.name = this.data.displayName || this.data.name;
    this.asteroidMesh.userData = {
      type: 'celestialBody',
      name: this.data.displayName || this.data.name,
      facts: this.data.facts,
      clickable: true,
      isAsteroid: true
    };

    // Set initial position
    const distance = this.data.semiMajorAxis * DISTANCE_SCALE;
    this.asteroidMesh.position.x = distance;

    this.orbitGroup.add(this.asteroidMesh);
  }

  /**
   * Create the orbital path visualization with inclination
   */
  createOrbitLine() {
    const points = [];
    const segments = 128;
    const a = this.data.semiMajorAxis * DISTANCE_SCALE;
    const e = this.data.eccentricity;

    // Create elliptical orbit
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      // Ellipse equation: r = a(1-e²) / (1 + e*cos(θ))
      const r = (a * (1 - e * e)) / (1 + e * Math.cos(angle));
      points.push(new THREE.Vector3(
        Math.cos(angle) * r,
        0,
        Math.sin(angle) * r
      ));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Use a distinct color for asteroid orbits (muted orange/brown)
    const orbitColor = new THREE.Color(this.data.color).lerp(new THREE.Color(0x886644), 0.5);

    const material = new THREE.LineBasicMaterial({
      color: orbitColor,
      transparent: true,
      opacity: 0.3
    });

    this.orbitLine = new THREE.Line(geometry, material);
    this.orbitLine.name = `${this.data.name}OrbitLine`;

    // Apply orbital inclination
    const inclination = THREE.MathUtils.degToRad(this.data.inclination || 0);
    const ascendingNode = THREE.MathUtils.degToRad(this.data.longitudeOfAscendingNode || 0);

    // Rotate orbit for inclination and ascending node
    this.orbitLine.rotation.x = inclination;
    this.orbitLine.rotation.y = ascendingNode;
  }

  /**
   * Solve Kepler's equation using Newton-Raphson iteration
   * M = E - e*sin(E)
   */
  solveKeplerEquation(meanAnomaly, eccentricity) {
    // For nearly circular orbits, return mean anomaly
    if (eccentricity < 0.001) {
      return meanAnomaly;
    }

    // Newton-Raphson iteration
    let E = meanAnomaly + eccentricity * Math.sin(meanAnomaly);
    const tolerance = 1e-8;
    let iterations = 0;
    const maxIterations = 15;

    while (iterations < maxIterations) {
      const dE = (E - eccentricity * Math.sin(E) - meanAnomaly) / (1 - eccentricity * Math.cos(E));
      E -= dE;
      if (Math.abs(dE) < tolerance) break;
      iterations++;
    }

    return E;
  }

  /**
   * Calculate asteroid position using Keplerian orbital mechanics
   */
  calculatePosition(julianDate) {
    const a = this.data.semiMajorAxis;
    const e = this.data.eccentricity;
    const i = THREE.MathUtils.degToRad(this.data.inclination || 0);
    const omega = THREE.MathUtils.degToRad(this.data.argumentOfPerihelion || 0);
    const Omega = THREE.MathUtils.degToRad(this.data.longitudeOfAscendingNode || 0);
    const M0 = THREE.MathUtils.degToRad(this.data.meanAnomalyAtEpoch || 0);
    const epoch = this.data.epoch || 2451545.0;

    // Calculate mean anomaly at current date
    const n = 0.9856076686 / (a * Math.sqrt(a)); // Mean motion in deg/day
    const daysSinceEpoch = julianDate - epoch;
    const M = (M0 + THREE.MathUtils.degToRad(n * daysSinceEpoch)) % (2 * Math.PI);

    // Solve Kepler's equation for eccentric anomaly
    const E = this.solveKeplerEquation(M, e);

    // Calculate true anomaly
    const sinNu = Math.sqrt(1 - e * e) * Math.sin(E) / (1 - e * Math.cos(E));
    const cosNu = (Math.cos(E) - e) / (1 - e * Math.cos(E));
    const nu = Math.atan2(sinNu, cosNu);

    // Calculate distance from Sun
    const r = a * (1 - e * Math.cos(E));

    // Position in orbital plane
    const xOrbital = r * Math.cos(nu);
    const yOrbital = r * Math.sin(nu);

    // Transform to heliocentric coordinates
    // x = r * (cos(Ω)cos(ω+ν) - sin(Ω)sin(ω+ν)cos(i))
    // y = r * (sin(Ω)cos(ω+ν) + cos(Ω)sin(ω+ν)cos(i))
    // z = r * sin(ω+ν)sin(i)
    const cosOmega = Math.cos(Omega);
    const sinOmega = Math.sin(Omega);
    const cosOmegaNu = Math.cos(omega + nu);
    const sinOmegaNu = Math.sin(omega + nu);
    const cosI = Math.cos(i);
    const sinI = Math.sin(i);

    const x = r * (cosOmega * cosOmegaNu - sinOmega * sinOmegaNu * cosI);
    const y = r * (sinOmega * cosOmegaNu + cosOmega * sinOmegaNu * cosI);
    const z = r * sinOmegaNu * sinI;

    return {
      x: x * DISTANCE_SCALE,
      y: z * DISTANCE_SCALE,  // z becomes y (up) in 3D scene
      z: y * DISTANCE_SCALE,  // y becomes z in 3D scene
      theta: nu
    };
  }

  getMesh() {
    return this.orbitGroup;
  }

  getOrbitLine() {
    return this.orbitLine;
  }

  getWorldPosition() {
    const position = new THREE.Vector3();
    this.asteroidMesh.getWorldPosition(position);
    return position;
  }

  /**
   * Get all clickable objects (just the asteroid mesh)
   */
  getClickableObjects() {
    return [this.asteroidMesh];
  }

  /**
   * Update asteroid position and rotation
   */
  update(deltaTime, speedMultiplier = 1, elapsedTime = 0, julianDate = null) {
    // If Julian Date provided, use accurate orbital positioning
    if (julianDate !== null) {
      const pos = this.calculatePosition(julianDate);

      this.asteroidMesh.position.x = pos.x;
      this.asteroidMesh.position.y = pos.y;
      this.asteroidMesh.position.z = pos.z;

      this.orbitAngle = pos.theta;
    } else {
      // Fallback to simple orbital motion
      const orbitalAngularVelocity = (2 * Math.PI) / (this.data.orbitalPeriod * 100);
      this.orbitAngle += orbitalAngularVelocity * deltaTime * speedMultiplier;

      const distance = this.data.semiMajorAxis * DISTANCE_SCALE;
      this.asteroidMesh.position.x = Math.cos(this.orbitAngle) * distance;
      this.asteroidMesh.position.z = Math.sin(this.orbitAngle) * distance;
    }

    // Rotation (convert rotation period from hours to simulation units)
    const rotationPeriodDays = this.data.rotationPeriod / 24;
    const rotationSpeed = (1 / rotationPeriodDays) * deltaTime * speedMultiplier * 0.5;
    this.asteroidMesh.rotation.y += rotationSpeed;

    // Update sun direction for shader
    if (this.asteroidMesh.material.uniforms && this.asteroidMesh.material.uniforms.sunDirection) {
      const sunDir = new THREE.Vector3(
        -this.asteroidMesh.position.x,
        -this.asteroidMesh.position.y,
        -this.asteroidMesh.position.z
      ).normalize();
      this.asteroidMesh.material.uniforms.sunDirection.value.copy(sunDir);
    }
  }

  dispose() {
    if (this.asteroidMesh) {
      this.asteroidMesh.geometry.dispose();
      this.asteroidMesh.material.dispose();
    }
    if (this.orbitLine) {
      this.orbitLine.geometry.dispose();
      this.orbitLine.material.dispose();
    }
  }
}
