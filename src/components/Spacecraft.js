/**
 * Spacecraft Component
 *
 * Renders historic deep space missions with:
 * - Trajectory line showing path through solar system
 * - Interpolated position based on simulation date
 * - Glowing marker at current position
 * - Clickable info panel
 * - Proper 3D positioning with ecliptic latitude
 */

import * as THREE from 'three';
import { DISTANCE_SCALE } from '../data/planetData.js';

export class Spacecraft {
  constructor(data) {
    this.data = data;
    this.visible = true;
    this.terminated = false;

    // Three.js objects
    this.spacecraftMesh = null;
    this.glowMesh = null;
    this.trajectoryLine = null;
    this.trailLine = null;
    this.group = new THREE.Group();

    this.group.name = `${data.name}Group`;

    // Parse waypoint dates to timestamps
    this.waypoints = data.waypoints.map(wp => ({
      ...wp,
      timestamp: new Date(wp.date).getTime()
    }));

    // Termination date if applicable
    if (data.terminationDate) {
      this.terminationTimestamp = new Date(data.terminationDate).getTime();
    }

    this.init();
  }

  init() {
    this.createSpacecraftMesh();
    this.createTrajectoryLine();
  }

  /**
   * Create the spacecraft marker (glowing dot)
   */
  createSpacecraftMesh() {
    // Main spacecraft marker - small sphere
    const geometry = new THREE.SphereGeometry(0.08, 16, 16);

    // Emissive material for visibility
    const material = new THREE.MeshBasicMaterial({
      color: this.data.color,
      transparent: true,
      opacity: 1.0
    });

    this.spacecraftMesh = new THREE.Mesh(geometry, material);
    this.spacecraftMesh.name = this.data.name;
    this.spacecraftMesh.userData = {
      type: 'celestialBody',
      name: this.data.name,
      facts: this.data.facts,
      clickable: true,
      isSpacecraft: true
    };

    // Create glow effect
    const glowGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(this.data.color) },
        intensity: { value: 0.8 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform float intensity;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDirection = normalize(-vPosition);
          float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
          fresnel = pow(fresnel, 2.0);
          vec3 color = glowColor * fresnel * intensity;
          float alpha = fresnel * intensity * 0.8;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    this.spacecraftMesh.add(this.glowMesh);

    this.group.add(this.spacecraftMesh);
  }

  /**
   * Create the full trajectory line from waypoints
   */
  createTrajectoryLine() {
    const points = [];

    // Generate smooth trajectory through all waypoints
    for (let i = 0; i < this.waypoints.length; i++) {
      const wp = this.waypoints[i];
      const pos = this.waypointToPosition(wp);
      points.push(pos);
    }

    // Create spline curve through waypoints for smooth path
    if (points.length >= 2) {
      const curve = new THREE.CatmullRomCurve3(points);
      const curvePoints = curve.getPoints(200);  // 200 segments for smooth curve

      const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);

      // Gradient material - brighter near current position
      const material = new THREE.LineBasicMaterial({
        color: this.data.color,
        transparent: true,
        opacity: 0.4,
        linewidth: 1
      });

      this.trajectoryLine = new THREE.Line(geometry, material);
      this.trajectoryLine.name = `${this.data.name}Trajectory`;
    }
  }

  /**
   * Convert a waypoint to 3D position
   */
  waypointToPosition(waypoint) {
    const distance = waypoint.distance * DISTANCE_SCALE;
    const latRad = THREE.MathUtils.degToRad(waypoint.lat);

    // Special case for Cassini - follows Saturn's approximate orbit
    let angle;
    if (this.data.name === 'Cassini') {
      // Cassini orbited Saturn, place it near Saturn's orbit
      // Use a position that progresses around Saturn's orbit
      const wpIndex = this.waypoints.indexOf(waypoint);
      angle = THREE.MathUtils.degToRad(wpIndex * 30);  // Spread waypoints around
    } else {
      // Use departure angle for trajectory direction
      angle = THREE.MathUtils.degToRad(this.data.departureAngle || 0);
    }

    // Calculate 3D position
    // X and Z are in the ecliptic plane
    // Y is vertical (based on ecliptic latitude)
    const horizontalDistance = distance * Math.cos(latRad);
    const x = Math.cos(angle) * horizontalDistance;
    const z = Math.sin(angle) * horizontalDistance;
    const y = distance * Math.sin(latRad);

    return new THREE.Vector3(x, y, z);
  }

  /**
   * Interpolate position between waypoints based on date
   */
  getPositionForDate(timestamp) {
    // Find surrounding waypoints
    let prevWp = null;
    let nextWp = null;

    for (let i = 0; i < this.waypoints.length - 1; i++) {
      if (timestamp >= this.waypoints[i].timestamp &&
          timestamp <= this.waypoints[i + 1].timestamp) {
        prevWp = this.waypoints[i];
        nextWp = this.waypoints[i + 1];
        break;
      }
    }

    // Before first waypoint
    if (!prevWp && timestamp < this.waypoints[0].timestamp) {
      return null;  // Not launched yet
    }

    // After last waypoint - extrapolate
    if (!prevWp) {
      const lastWp = this.waypoints[this.waypoints.length - 1];
      const secondLastWp = this.waypoints[this.waypoints.length - 2];

      // Simple linear extrapolation based on velocity
      const timeDiff = (timestamp - lastWp.timestamp) / (1000 * 60 * 60 * 24 * 365.25);  // years
      const velocityAUperYear = this.data.velocity * 31557600 / 149597870.7;  // km/s to AU/year

      const extraDistance = lastWp.distance + (velocityAUperYear * timeDiff);
      return this.waypointToPosition({
        distance: extraDistance,
        lat: lastWp.lat
      });
    }

    // Interpolate between waypoints
    const totalTime = nextWp.timestamp - prevWp.timestamp;
    const elapsedTime = timestamp - prevWp.timestamp;
    const t = elapsedTime / totalTime;

    // Smooth interpolation
    const smoothT = t * t * (3 - 2 * t);  // Smoothstep

    const prevPos = this.waypointToPosition(prevWp);
    const nextPos = this.waypointToPosition(nextWp);

    return new THREE.Vector3().lerpVectors(prevPos, nextPos, smoothT);
  }

  /**
   * Get the current event/phase name for the given date
   */
  getCurrentEvent(timestamp) {
    for (let i = this.waypoints.length - 1; i >= 0; i--) {
      if (timestamp >= this.waypoints[i].timestamp) {
        return this.waypoints[i].event;
      }
    }
    return 'Pre-Launch';
  }

  getMesh() {
    return this.group;
  }

  getTrajectoryLine() {
    return this.trajectoryLine;
  }

  getWorldPosition() {
    const position = new THREE.Vector3();
    this.spacecraftMesh.getWorldPosition(position);
    return position;
  }

  /**
   * Get all clickable objects
   */
  getClickableObjects() {
    return [this.spacecraftMesh];
  }

  /**
   * Check if spacecraft is visible at given date
   */
  isVisibleAtDate(timestamp) {
    // Not visible before launch
    if (timestamp < this.waypoints[0].timestamp) {
      return false;
    }

    // Cassini terminated
    if (this.terminationTimestamp && timestamp > this.terminationTimestamp) {
      return false;
    }

    return true;
  }

  /**
   * Update spacecraft position based on simulation date
   */
  update(deltaTime, speedMultiplier, elapsedTime, julianDate, simulationDate) {
    if (!simulationDate) {
      // Default to current date if no simulation date
      simulationDate = new Date();
    }

    const timestamp = simulationDate.getTime();

    // Check visibility
    const isVisible = this.isVisibleAtDate(timestamp);
    this.spacecraftMesh.visible = isVisible;
    this.glowMesh.visible = isVisible;

    if (!isVisible) {
      return;
    }

    // Get interpolated position
    const position = this.getPositionForDate(timestamp);

    if (position) {
      this.spacecraftMesh.position.copy(position);
    }

    // Pulse the glow slightly
    if (this.glowMesh.material.uniforms) {
      const pulse = 0.7 + Math.sin(elapsedTime * 2) * 0.15;
      this.glowMesh.material.uniforms.intensity.value = pulse;
    }
  }

  dispose() {
    if (this.spacecraftMesh) {
      this.spacecraftMesh.geometry.dispose();
      this.spacecraftMesh.material.dispose();
    }
    if (this.glowMesh) {
      this.glowMesh.geometry.dispose();
      this.glowMesh.material.dispose();
    }
    if (this.trajectoryLine) {
      this.trajectoryLine.geometry.dispose();
      this.trajectoryLine.material.dispose();
    }
  }
}
