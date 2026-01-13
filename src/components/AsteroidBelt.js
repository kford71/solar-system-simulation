/**
 * AsteroidBelt Component
 *
 * Creates a procedurally generated asteroid belt between Mars and Jupiter
 * using instanced meshes for performance.
 *
 * Each asteroid has:
 * - Random position within the belt region
 * - Random size within defined range
 * - Individual orbital velocity
 * - Random rotation
 */

import * as THREE from 'three';
import { ASTEROID_BELT_DATA } from '../data/planetData.js';

export class AsteroidBelt {
  constructor() {
    this.data = ASTEROID_BELT_DATA;
    this.group = new THREE.Group();
    this.group.name = 'AsteroidBelt';

    // Store asteroid data for animation
    this.asteroids = [];

    // Instanced mesh for performance
    this.instancedMesh = null;

    // Dummy object for matrix calculations
    this.dummy = new THREE.Object3D();

    this.init();
  }

  init() {
    this.createAsteroids();
  }

  /**
   * Create the asteroid belt using instanced mesh for performance
   *
   * Asteroid distribution:
   * - Radial position: random between inner and outer radius
   * - Angular position: random around the full circle
   * - Vertical position: slight random spread for 3D depth
   * - Each asteroid has unique orbital parameters
   */
  createAsteroids() {
    // Create a few different asteroid geometries to mix
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),      // Low-poly rocky shape
      new THREE.OctahedronGeometry(1, 0),       // Different rocky shape
      new THREE.TetrahedronGeometry(1, 0),      // Another variation
    ];

    // We'll use the icosahedron for instancing (best asteroid shape)
    const geometry = geometries[0];

    // Material with slight color variation
    const material = new THREE.MeshStandardMaterial({
      color: this.data.color,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true  // Gives rocky appearance
    });

    // Create instanced mesh
    this.instancedMesh = new THREE.InstancedMesh(
      geometry,
      material,
      this.data.count
    );
    this.instancedMesh.name = 'AsteroidInstances';

    // Generate asteroid data and set initial transforms
    for (let i = 0; i < this.data.count; i++) {
      // Random position in the belt (polar coordinates)
      const radius = THREE.MathUtils.randFloat(
        this.data.innerRadius,
        this.data.outerRadius
      );
      const angle = Math.random() * Math.PI * 2;
      const verticalOffset = THREE.MathUtils.randFloatSpread(this.data.verticalSpread);

      // Random size
      const size = THREE.MathUtils.randFloat(this.data.minSize, this.data.maxSize);

      // Random rotation
      const rotationX = Math.random() * Math.PI * 2;
      const rotationY = Math.random() * Math.PI * 2;
      const rotationZ = Math.random() * Math.PI * 2;

      // Orbital velocity based on Kepler's laws (simplified)
      // Inner asteroids orbit faster than outer ones
      // v proportional to 1/sqrt(r)
      const orbitalVelocity = 0.01 / Math.sqrt(radius / this.data.innerRadius);

      // Store asteroid data
      this.asteroids.push({
        radius,
        angle,
        verticalOffset,
        size,
        rotationX,
        rotationY,
        rotationZ,
        orbitalVelocity,
        rotationSpeed: THREE.MathUtils.randFloat(0.5, 2) // Tumbling speed
      });

      // Set initial transform
      this.updateAsteroidMatrix(i);
    }

    // Enable instance color for slight variations
    const colors = new Float32Array(this.data.count * 3);
    for (let i = 0; i < this.data.count; i++) {
      // Slight gray/brown color variation
      const shade = 0.3 + Math.random() * 0.4;
      colors[i * 3] = shade + Math.random() * 0.1;     // R
      colors[i * 3 + 1] = shade;                        // G
      colors[i * 3 + 2] = shade - Math.random() * 0.1;  // B
    }
    this.instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);

    this.group.add(this.instancedMesh);

    // Clean up extra geometries
    geometries[1].dispose();
    geometries[2].dispose();
  }

  /**
   * Update a single asteroid's transformation matrix
   */
  updateAsteroidMatrix(index) {
    const asteroid = this.asteroids[index];

    // Calculate position from polar coordinates
    const x = Math.cos(asteroid.angle) * asteroid.radius;
    const z = Math.sin(asteroid.angle) * asteroid.radius;
    const y = asteroid.verticalOffset;

    this.dummy.position.set(x, y, z);
    this.dummy.rotation.set(
      asteroid.rotationX,
      asteroid.rotationY,
      asteroid.rotationZ
    );
    this.dummy.scale.setScalar(asteroid.size);
    this.dummy.updateMatrix();

    this.instancedMesh.setMatrixAt(index, this.dummy.matrix);
  }

  /**
   * Get the group to add to scene
   */
  getMesh() {
    return this.group;
  }

  /**
   * Update asteroid positions and rotations
   *
   * Each asteroid:
   * - Orbits around the sun at its individual velocity
   * - Tumbles (rotates on all axes)
   */
  update(deltaTime, speedMultiplier = 1) {
    for (let i = 0; i < this.data.count; i++) {
      const asteroid = this.asteroids[i];

      // Update orbital position
      asteroid.angle += asteroid.orbitalVelocity * deltaTime * speedMultiplier;

      // Update tumbling rotation
      asteroid.rotationX += asteroid.rotationSpeed * deltaTime * 0.1;
      asteroid.rotationY += asteroid.rotationSpeed * deltaTime * 0.15;
      asteroid.rotationZ += asteroid.rotationSpeed * deltaTime * 0.05;

      // Update matrix
      this.updateAsteroidMatrix(i);
    }

    // Flag that instance matrices need update
    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Clean up resources
   */
  dispose() {
    if (this.instancedMesh) {
      this.instancedMesh.geometry.dispose();
      this.instancedMesh.material.dispose();
    }
  }
}
