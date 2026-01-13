/**
 * Planet Component
 *
 * Creates a planet with:
 * - Textured surface with proper lighting and normal maps
 * - Atmospheric glow effect
 * - Orbital motion around the Sun (accurate Keplerian mechanics)
 * - Axial rotation with proper tilt
 * - Optional rings (Saturn, Uranus)
 * - Multiple moons support
 * - Optional cloud layer (Earth)
 * - Earth night lights shader
 * - Jupiter Great Red Spot animation
 * - Atmospheric scattering (sunrise/sunset effect)
 */

import * as THREE from 'three';
import { MOON_DATA, ADDITIONAL_MOONS, CHARON_DATA, DISTANCE_SCALE } from '../data/planetData.js';
import { calculatePlanetPosition, calculateMoonPosition, dateToJulianDate } from '../utils/OrbitalMechanics.js';

export class Planet {
  constructor(data, textureLoader) {
    this.data = data;
    this.textureLoader = textureLoader;

    // Orbital state
    this.orbitAngle = Math.random() * Math.PI * 2;
    this.rotationAngle = 0;

    // Accurate orbital mechanics
    this.currentJulianDate = null;
    this.useAccurateOrbits = true;  // Use Keplerian calculations

    // Three.js objects
    this.orbitGroup = new THREE.Group();
    this.axisGroup = new THREE.Group();
    this.planetMesh = null;
    this.planetGlow = null;  // Colored glow for visibility
    this.atmosphereMesh = null;
    this.cloudsMesh = null;
    this.ringMesh = null;
    this.moons = [];  // Array of moon objects
    this.orbitLine = null;

    this.orbitGroup.name = `${data.name}Orbit`;
    this.axisGroup.name = `${data.name}Axis`;

    this.init();
  }

  async init() {
    await this.createPlanetMesh();
    this.applyAxialTilt();
    this.createOrbitLine();

    // Create subtle colored glow around all planets for better visibility
    this.createPlanetGlow();

    // Create atmosphere if defined
    if (this.data.atmosphere) {
      this.createAtmosphere();
    }

    if (this.data.hasRings) {
      await this.createRings();
    }

    // Create moons based on data
    if (this.data.moons && this.data.moons.length > 0) {
      await this.createMoons();
    }

    if (this.data.cloudsUrl) {
      await this.createClouds();
    }

    this.orbitGroup.add(this.axisGroup);
  }

  /**
   * Create the main planet mesh with textures
   */
  async createPlanetMesh() {
    const geometry = new THREE.SphereGeometry(this.data.radius, 64, 64);

    let material;

    // Special handling for Earth with night lights
    if (this.data.name === 'Earth' && this.data.nightTextureUrl) {
      material = await this.createEarthMaterial(geometry);
    }
    // Special handling for Jupiter with Great Red Spot
    else if (this.data.name === 'Jupiter') {
      material = await this.createJupiterMaterial(geometry);
    }
    // Standard material for other planets
    else {
      const materialOptions = {
        color: this.data.color
      };

      // Load main texture
      if (this.data.textureUrl) {
        try {
          const texture = await this.loadTexture(this.data.textureUrl);
          materialOptions.map = texture;
        } catch (e) {
          console.warn(`Failed to load texture for ${this.data.name}, using color fallback`);
        }
      }

      // Load normal map
      if (this.data.normalMapUrl) {
        try {
          const normalMap = await this.loadTexture(this.data.normalMapUrl);
          materialOptions.normalMap = normalMap;
          materialOptions.normalScale = new THREE.Vector2(0.8, 0.8);
        } catch (e) {
          // Silently ignore
        }
      }

      // Load specular map (for water reflections)
      if (this.data.specularMapUrl) {
        try {
          const specularMap = await this.loadTexture(this.data.specularMapUrl);
          materialOptions.metalnessMap = specularMap;
          materialOptions.metalness = 0.1;
          materialOptions.roughness = 0.7;
        } catch (e) {
          // Silently ignore
        }
      }

      material = new THREE.MeshStandardMaterial(materialOptions);
    }

    this.planetMesh = new THREE.Mesh(geometry, material);
    this.planetMesh.name = this.data.name;
    this.planetMesh.userData = {
      type: 'celestialBody',
      name: this.data.name,
      facts: this.data.facts,
      earthComparison: this.data.earthComparison,
      clickable: true,
      isPlanet: true,
      isDwarfPlanet: this.data.isDwarfPlanet || false
    };

    this.planetMesh.position.x = this.data.distance;
    this.axisGroup.add(this.planetMesh);
  }

  /**
   * Create Earth material with day/night shader and city lights
   */
  async createEarthMaterial() {
    // Load textures
    let dayTexture = null;
    let nightTexture = null;
    let normalMap = null;
    let specularMap = null;

    try {
      dayTexture = await this.loadTexture(this.data.textureUrl);
    } catch (e) {
      console.warn('Failed to load Earth day texture');
    }

    try {
      nightTexture = await this.loadTexture(this.data.nightTextureUrl);
    } catch (e) {
      console.warn('Failed to load Earth night texture');
    }

    if (this.data.normalMapUrl) {
      try {
        normalMap = await this.loadTexture(this.data.normalMapUrl);
      } catch (e) {}
    }

    if (this.data.specularMapUrl) {
      try {
        specularMap = await this.loadTexture(this.data.specularMapUrl);
      } catch (e) {}
    }

    // If we don't have both textures, fall back to standard material
    if (!dayTexture || !nightTexture) {
      return new THREE.MeshStandardMaterial({
        map: dayTexture,
        color: this.data.color
      });
    }

    // Create custom shader for day/night transition with city lights
    return new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: dayTexture },
        nightTexture: { value: nightTexture },
        normalMap: { value: normalMap },
        specularMap: { value: specularMap },
        sunDirection: { value: new THREE.Vector3(1, 0, 0) },
        ambientIntensity: { value: 0.1 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform sampler2D normalMap;
        uniform sampler2D specularMap;
        uniform vec3 sunDirection;
        uniform float ambientIntensity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normal = normalize(vNormal);

          // Calculate sun direction relative to fragment
          vec3 toSun = normalize(-vWorldPosition);

          // Dot product for day/night blend (using world normal vs sun direction)
          float sunDot = dot(normal, sunDirection);

          // Smooth transition zone
          float dayFactor = smoothstep(-0.2, 0.3, sunDot);

          // Sample textures
          vec4 dayColor = texture2D(dayTexture, vUv);
          vec4 nightColor = texture2D(nightTexture, vUv);

          // Night color represents city lights - make them glow
          vec3 cityLights = nightColor.rgb * 2.0;  // Boost brightness

          // Day side: full day texture with lighting
          vec3 litDay = dayColor.rgb * (ambientIntensity + max(0.0, sunDot));

          // Night side: city lights only (no ambient to make lights stand out)
          vec3 litNight = cityLights * (1.0 - dayFactor) * 1.5;

          // Blend based on sun angle
          vec3 finalColor = litDay * dayFactor + litNight;

          // Add subtle blue atmospheric scattering on terminator
          float terminator = 1.0 - abs(sunDot);
          terminator = pow(terminator, 4.0);
          vec3 scatterColor = vec3(0.3, 0.5, 1.0) * terminator * 0.15;
          finalColor += scatterColor;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
  }

  /**
   * Create Jupiter material with animated Great Red Spot
   */
  async createJupiterMaterial() {
    let baseTexture = null;

    try {
      baseTexture = await this.loadTexture(this.data.textureUrl);
    } catch (e) {
      console.warn('Failed to load Jupiter texture');
    }

    if (!baseTexture) {
      return new THREE.MeshStandardMaterial({ color: this.data.color });
    }

    // Store time uniform for animation
    this.jupiterTimeUniform = { value: 0 };

    return new THREE.ShaderMaterial({
      uniforms: {
        baseTexture: { value: baseTexture },
        time: this.jupiterTimeUniform,
        sunDirection: { value: new THREE.Vector3(1, 0, 0) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D baseTexture;
        uniform float time;
        uniform vec3 sunDirection;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        // Noise functions for storm animation
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
          for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec4 baseColor = texture2D(baseTexture, vUv);

          // Great Red Spot location (approximate)
          // The GRS is at about 22 degrees south latitude
          vec2 grsCenter = vec2(0.65, 0.38);  // UV coordinates
          float grsRadiusX = 0.08;
          float grsRadiusY = 0.04;

          // Calculate distance to GRS center (elliptical)
          vec2 toGrs = vUv - grsCenter;
          toGrs.x = mod(toGrs.x + 0.5, 1.0) - 0.5;  // Wrap around
          float grsDistance = length(vec2(toGrs.x / grsRadiusX, toGrs.y / grsRadiusY));

          // GRS effect
          if (grsDistance < 1.2) {
            // Swirling animation
            float angle = atan(toGrs.y, toGrs.x);
            float swirl = fbm(vec2(grsDistance * 8.0 + time * 0.5, angle * 2.0 + time * 0.3));

            // Red spot color
            vec3 grsColor = vec3(0.85, 0.35, 0.25);

            // Blend based on distance with swirl
            float blend = smoothstep(1.2, 0.3, grsDistance);
            blend *= 0.4 + swirl * 0.3;

            // Mix the GRS color with base
            baseColor.rgb = mix(baseColor.rgb, grsColor, blend);

            // Add swirling detail
            float detail = fbm(vec2(toGrs.x * 30.0 + time, toGrs.y * 30.0)) * 0.15;
            baseColor.rgb += vec3(detail, detail * 0.5, 0.0) * blend;
          }

          // Standard lighting
          vec3 normal = normalize(vNormal);
          float sunDot = max(0.1, dot(normal, sunDirection));
          vec3 finalColor = baseColor.rgb * sunDot;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
  }

  /**
   * Create atmospheric glow effect with scattering
   */
  createAtmosphere() {
    const atmoData = this.data.atmosphere;
    const atmosphereGeometry = new THREE.SphereGeometry(
      this.data.radius * atmoData.scale,
      64,
      64
    );

    // Store sun direction uniform for scattering effect
    this.atmosphereSunDirection = { value: new THREE.Vector3(1, 0, 0) };

    // Determine if this planet should have enhanced scattering
    const hasEnhancedScattering = this.data.name === 'Earth' || this.data.name === 'Venus';
    const scatteringStrength = hasEnhancedScattering ? 0.6 : 0.3;

    // Custom shader for atmospheric glow with scattering
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(atmoData.color) },
        intensity: { value: atmoData.opacity },
        sunDirection: this.atmosphereSunDirection,
        scatterStrength: { value: scatteringStrength }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform vec3 sunDirection;
        uniform float scatterStrength;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;

        void main() {
          // Fresnel effect - glow stronger at edges
          vec3 viewDirection = normalize(-vPosition);
          float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
          fresnel = pow(fresnel, 2.0);

          // Calculate sun angle for scattering
          float sunDot = dot(vWorldNormal, sunDirection);

          // Terminator region (where day meets night)
          float terminator = 1.0 - abs(sunDot);
          terminator = pow(terminator, 3.0);

          // Sunset/sunrise colors - orange/red at terminator
          vec3 scatterColor = vec3(1.0, 0.5, 0.2);  // Orange-red
          vec3 dayColor = atmosphereColor;

          // Blend scatter color at terminator
          float scatterAmount = terminator * scatterStrength * fresnel;

          // Base atmosphere with scattering
          vec3 finalColor = dayColor * fresnel * intensity * 2.0;

          // Add warm scattering at the terminator (limb)
          finalColor += scatterColor * scatterAmount * 1.5;

          // Enhance glow on the sunlit side edge
          float sunlitEdge = max(0.0, sunDot) * fresnel;
          finalColor += dayColor * sunlitEdge * 0.3;

          float alpha = fresnel * intensity + scatterAmount * 0.5;

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.atmosphereMesh.position.copy(this.planetMesh.position);
    this.axisGroup.add(this.atmosphereMesh);
  }

  /**
   * Load a texture with promise wrapper
   */
  loadTexture(url) {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        url,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          resolve(texture);
        },
        undefined,
        (error) => reject(error)
      );
    });
  }

  /**
   * Apply axial tilt to the planet
   */
  applyAxialTilt() {
    const tiltRadians = THREE.MathUtils.degToRad(this.data.axialTilt);
    this.axisGroup.rotation.z = tiltRadians;
  }

  /**
   * Create the orbital path visualization with color-coded lines
   */
  createOrbitLine() {
    const points = [];
    const segments = 128;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(
        Math.cos(angle) * this.data.distance,
        0,
        Math.sin(angle) * this.data.distance
      ));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Color-code orbit lines to match planet color (subtle tint)
    // Inner planets get thicker lines
    const isInnerPlanet = this.data.distance < 20; // Mars and closer
    const orbitColor = new THREE.Color(this.data.color).lerp(new THREE.Color(0x444466), 0.7);

    const material = new THREE.LineBasicMaterial({
      color: this.data.isDwarfPlanet ? 0x664466 : orbitColor,
      transparent: true,
      opacity: this.data.isDwarfPlanet ? 0.25 : 0.4,
      linewidth: isInnerPlanet ? 2 : 1 // Note: linewidth only works in some renderers
    });

    this.orbitLine = new THREE.Line(geometry, material);
    this.orbitLine.name = `${this.data.name}OrbitLine`;
  }

  /**
   * Create a subtle colored glow around the planet
   */
  createPlanetGlow() {
    const glowGeometry = new THREE.SphereGeometry(this.data.radius * 1.15, 32, 32);

    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(this.data.color) },
        intensity: { value: 0.4 }
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
          fresnel = pow(fresnel, 3.0);
          vec3 color = glowColor * fresnel * intensity;
          float alpha = fresnel * intensity * 0.6;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.planetGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    this.planetGlow.position.copy(this.planetMesh.position);
    this.axisGroup.add(this.planetGlow);
  }

  /**
   * Create planetary rings (Saturn or Uranus)
   */
  async createRings() {
    const innerRadius = this.data.radius * this.data.ringInnerRadius;
    const outerRadius = this.data.radius * this.data.ringOuterRadius;

    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);

    // Adjust UVs for proper texture mapping
    const pos = geometry.attributes.position;
    const uv = geometry.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const distance = Math.sqrt(x * x + y * y);
      const normalizedDist = (distance - innerRadius) / (outerRadius - innerRadius);
      uv.setXY(i, normalizedDist, 0.5);
    }

    // Different ring styles for different planets
    let ringTexture;
    const isUranus = this.data.name === 'Uranus';

    if (this.data.ringTextureUrl) {
      try {
        ringTexture = await this.loadTexture(this.data.ringTextureUrl);
      } catch (e) {
        ringTexture = isUranus
          ? this.createUranusRingTexture()
          : this.createSaturnRingTexture();
      }
    } else {
      ringTexture = isUranus
        ? this.createUranusRingTexture()
        : this.createSaturnRingTexture();
    }

    const ringOpacity = this.data.ringOpacity || 0.9;

    const material = new THREE.MeshStandardMaterial({
      map: ringTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: ringOpacity
    });

    this.ringMesh = new THREE.Mesh(geometry, material);
    this.ringMesh.rotation.x = Math.PI / 2;
    this.ringMesh.position.copy(this.planetMesh.position);

    this.axisGroup.add(this.ringMesh);
  }

  /**
   * Create procedural Saturn ring texture
   */
  createSaturnRingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Multiple ring bands for Saturn
    const gradient = ctx.createLinearGradient(0, 0, 1024, 0);
    gradient.addColorStop(0, 'rgba(200, 180, 150, 0.0)');
    gradient.addColorStop(0.05, 'rgba(210, 190, 160, 0.7)');
    gradient.addColorStop(0.1, 'rgba(200, 180, 150, 0.95)');
    gradient.addColorStop(0.15, 'rgba(180, 160, 130, 0.2)');  // Cassini Division gap
    gradient.addColorStop(0.18, 'rgba(180, 160, 130, 0.15)');
    gradient.addColorStop(0.22, 'rgba(200, 180, 150, 0.9)');
    gradient.addColorStop(0.35, 'rgba(220, 200, 170, 0.95)');
    gradient.addColorStop(0.45, 'rgba(200, 180, 150, 0.85)');
    gradient.addColorStop(0.55, 'rgba(180, 160, 140, 0.7)');
    gradient.addColorStop(0.65, 'rgba(200, 180, 150, 0.8)');
    gradient.addColorStop(0.75, 'rgba(190, 170, 145, 0.6)');
    gradient.addColorStop(0.85, 'rgba(180, 160, 140, 0.4)');
    gradient.addColorStop(0.95, 'rgba(170, 150, 130, 0.2)');
    gradient.addColorStop(1.0, 'rgba(160, 140, 120, 0.0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 64);

    // Add fine detail noise
    for (let i = 0; i < 3000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 64;
      const alpha = Math.random() * 0.2;
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fillRect(x, y, 1, 1);
    }

    // Add darker bands
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 64;
      const alpha = Math.random() * 0.15;
      ctx.fillStyle = `rgba(100, 80, 60, ${alpha})`;
      ctx.fillRect(x, y, 2, 1);
    }

    return new THREE.CanvasTexture(canvas);
  }

  /**
   * Create procedural Uranus ring texture (faint, dark rings)
   */
  createUranusRingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Fill with transparency first
    ctx.clearRect(0, 0, 512, 32);

    // Uranus has thin, dark rings - much fainter than Saturn
    const gradient = ctx.createLinearGradient(0, 0, 512, 0);
    gradient.addColorStop(0, 'rgba(80, 100, 130, 0.0)');
    gradient.addColorStop(0.15, 'rgba(90, 110, 140, 0.15)');
    gradient.addColorStop(0.25, 'rgba(70, 90, 120, 0.05)');
    gradient.addColorStop(0.35, 'rgba(90, 110, 140, 0.2)');
    gradient.addColorStop(0.45, 'rgba(80, 100, 130, 0.1)');
    gradient.addColorStop(0.55, 'rgba(90, 110, 140, 0.25)');  // Epsilon ring (brightest)
    gradient.addColorStop(0.65, 'rgba(80, 100, 130, 0.08)');
    gradient.addColorStop(0.75, 'rgba(90, 110, 140, 0.15)');
    gradient.addColorStop(0.85, 'rgba(80, 100, 130, 0.1)');
    gradient.addColorStop(1.0, 'rgba(70, 90, 120, 0.0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 32);

    // Add very subtle noise
    for (let i = 0; i < 500; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 32;
      const alpha = Math.random() * 0.1;
      ctx.fillStyle = `rgba(150, 170, 200, ${alpha})`;
      ctx.fillRect(x, y, 1, 1);
    }

    return new THREE.CanvasTexture(canvas);
  }

  // Legacy alias for backward compatibility
  createProceduralRingTexture() {
    return this.createSaturnRingTexture();
  }

  /**
   * Create shader material for Earth's Moon to show phases
   */
  createMoonPhaseMaterial(texture, fallbackColor) {
    // Store uniform for updates
    this.moonSunDirection = { value: new THREE.Vector3(1, 0, 0) };

    return new THREE.ShaderMaterial({
      uniforms: {
        moonTexture: { value: texture },
        baseColor: { value: new THREE.Color(fallbackColor || 0xaaaaaa) },
        sunDirection: this.moonSunDirection,
        hasTexture: { value: texture ? 1.0 : 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D moonTexture;
        uniform vec3 baseColor;
        uniform vec3 sunDirection;
        uniform float hasTexture;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        void main() {
          // Get base color from texture or fallback
          vec3 color;
          if (hasTexture > 0.5) {
            color = texture2D(moonTexture, vUv).rgb;
          } else {
            color = baseColor;
          }

          // Calculate sun illumination on the moon
          float sunDot = dot(vWorldNormal, sunDirection);

          // Sharp terminator for moon phases
          float illumination = smoothstep(-0.05, 0.1, sunDot);

          // Ambient lighting on dark side (earthshine effect)
          float ambient = 0.03;

          // Final illumination
          float finalLight = ambient + illumination * 0.97;

          // Apply lighting
          vec3 litColor = color * finalLight;

          gl_FragColor = vec4(litColor, 1.0);
        }
      `
    });
  }

  /**
   * Create moons for this planet
   */
  async createMoons() {
    for (const moonName of this.data.moons) {
      let moonData;

      // Get moon data from appropriate source
      if (moonName === 'Moon') {
        moonData = MOON_DATA;
      } else if (moonName === 'Charon') {
        moonData = CHARON_DATA;
      } else if (ADDITIONAL_MOONS[moonName]) {
        moonData = ADDITIONAL_MOONS[moonName];
      } else {
        continue;
      }

      const moon = await this.createSingleMoon(moonData);
      if (moon) {
        this.moons.push(moon);
      }
    }
  }

  /**
   * Create a single moon
   */
  async createSingleMoon(moonData) {
    const moonGeometry = new THREE.SphereGeometry(moonData.radius, 32, 32);

    let moonMaterial;
    let moonTexture = null;

    // Try to load texture
    if (moonData.textureUrl) {
      try {
        moonTexture = await this.loadTexture(moonData.textureUrl);
      } catch (e) {
        // Use color fallback
      }
    }

    // Use shader material for Earth's Moon to show phases
    if (moonData.name === 'Moon' && moonData.parent === 'Earth') {
      moonMaterial = this.createMoonPhaseMaterial(moonTexture, moonData.color);
    } else {
      const materialOptions = { color: moonData.color };
      if (moonTexture) materialOptions.map = moonTexture;
      moonMaterial = new THREE.MeshStandardMaterial(materialOptions);
    }

    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
    moonMesh.name = moonData.name;
    moonMesh.userData = {
      type: 'celestialBody',
      name: moonData.name,
      facts: moonData.facts,
      clickable: true,
      isMoon: true,
      parent: this.data.name
    };

    // Create pivot for orbit
    const moonPivot = new THREE.Group();
    moonPivot.position.copy(this.planetMesh.position);
    moonPivot.add(moonMesh);

    // Position moon at orbital distance
    moonMesh.position.x = moonData.distance;

    // Create atmosphere for moon if defined (e.g., Titan)
    let atmosphereMesh = null;
    if (moonData.atmosphere) {
      const atmoGeom = new THREE.SphereGeometry(
        moonData.radius * moonData.atmosphere.scale,
        32, 32
      );
      const atmoMat = new THREE.ShaderMaterial({
        uniforms: {
          atmosphereColor: { value: new THREE.Color(moonData.atmosphere.color) },
          intensity: { value: moonData.atmosphere.opacity }
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
          uniform vec3 atmosphereColor;
          uniform float intensity;
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vec3 viewDirection = normalize(-vPosition);
            float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
            fresnel = pow(fresnel, 2.0);
            vec3 color = atmosphereColor * fresnel * intensity * 2.0;
            float alpha = fresnel * intensity;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      atmosphereMesh = new THREE.Mesh(atmoGeom, atmoMat);
      moonMesh.add(atmosphereMesh);
    }

    this.axisGroup.add(moonPivot);

    return {
      mesh: moonMesh,
      pivot: moonPivot,
      data: moonData,
      orbitAngle: Math.random() * Math.PI * 2,
      atmosphereMesh
    };
  }

  /**
   * Create cloud layer for Earth
   */
  async createClouds() {
    const cloudGeometry = new THREE.SphereGeometry(
      this.data.radius * 1.015,
      64, 64
    );

    let cloudTexture = null;
    try {
      cloudTexture = await this.loadTexture(this.data.cloudsUrl);
    } catch (e) {
      return;
    }

    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      alphaMap: cloudTexture
    });

    this.cloudsMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    this.cloudsMesh.position.copy(this.planetMesh.position);
    this.axisGroup.add(this.cloudsMesh);
  }

  getMesh() {
    return this.orbitGroup;
  }

  getOrbitLine() {
    return this.orbitLine;
  }

  getWorldPosition() {
    const position = new THREE.Vector3();
    this.planetMesh.getWorldPosition(position);
    return position;
  }

  /**
   * Get current orbital position in degrees (0-360)
   */
  getOrbitalPosition() {
    let degrees = THREE.MathUtils.radToDeg(this.orbitAngle) % 360;
    if (degrees < 0) degrees += 360;
    return degrees;
  }

  /**
   * Get current distance from sun in AU
   */
  getDistanceFromSun() {
    return this.data.distance / 10; // Convert back from scale
  }

  /**
   * Get all clickable objects (planet + moons)
   */
  getClickableObjects() {
    const objects = [this.planetMesh];
    this.moons.forEach(moon => objects.push(moon.mesh));
    return objects;
  }

  /**
   * Set planet position for a specific Julian Date using accurate orbital mechanics
   */
  setPositionForDate(julianDate) {
    this.currentJulianDate = julianDate;

    if (this.useAccurateOrbits) {
      const position = calculatePlanetPosition(this.data.name, julianDate);

      if (position) {
        // Convert AU to scene units and apply to planet position
        // Note: We use x and y from orbital calc, mapping to x and z in 3D scene
        this.planetMesh.position.x = position.x * DISTANCE_SCALE;
        this.planetMesh.position.z = position.y * DISTANCE_SCALE;
        // Small vertical offset based on orbital inclination
        this.planetMesh.position.y = position.z * DISTANCE_SCALE;

        // Store orbital angle for compatibility
        this.orbitAngle = position.theta;

        // Update glow position
        if (this.planetGlow) {
          this.planetGlow.position.copy(this.planetMesh.position);
        }

        // Update atmosphere position
        if (this.atmosphereMesh) {
          this.atmosphereMesh.position.copy(this.planetMesh.position);
        }

        // Update rings position
        if (this.ringMesh) {
          this.ringMesh.position.copy(this.planetMesh.position);
        }

        // Update clouds position
        if (this.cloudsMesh) {
          this.cloudsMesh.position.copy(this.planetMesh.position);
        }

        // Update Earth's Moon with accurate position
        if (this.data.name === 'Earth') {
          this.updateMoonForDate(julianDate);
        }
      }
    }
  }

  /**
   * Update Earth's Moon position for accurate phases
   */
  updateMoonForDate(julianDate) {
    const moonData = this.moons.find(m => m.data.name === 'Moon');
    if (!moonData) return;

    const moonPos = calculateMoonPosition(julianDate);
    if (moonPos) {
      // Moon position is relative to Earth, scale appropriately
      // Using a larger scale for visibility
      const moonScale = 15; // Visual scale factor
      moonData.mesh.position.x = moonPos.x * DISTANCE_SCALE * moonScale;
      moonData.mesh.position.z = moonPos.y * DISTANCE_SCALE * moonScale;
      moonData.mesh.position.y = moonPos.z * DISTANCE_SCALE * moonScale;

      // Update moon phase in shader if available
      if (moonData.mesh.material.uniforms && moonData.mesh.material.uniforms.phase) {
        moonData.mesh.material.uniforms.phase.value = moonPos.phase;
      }

      // Store phase for info display
      moonData.phase = moonPos.phase;
    }
  }

  /**
   * Update orbital and rotational motion
   */
  update(deltaTime, speedMultiplier = 1, elapsedTime = 0, julianDate = null) {
    // If Julian Date provided, use accurate orbital positioning
    if (julianDate !== null && this.useAccurateOrbits) {
      this.setPositionForDate(julianDate);
    } else {
      // Fallback to simple orbital motion
      const orbitalAngularVelocity = (2 * Math.PI) / (this.data.orbitalPeriod * 100);
      this.orbitAngle += orbitalAngularVelocity * deltaTime * speedMultiplier;

      // Update orbital position
      this.planetMesh.position.x = Math.cos(this.orbitAngle) * this.data.distance;
      this.planetMesh.position.z = Math.sin(this.orbitAngle) * this.data.distance;
    }

    // Rotation
    const rotationDirection = this.data.rotationPeriod > 0 ? 1 : -1;
    const rotationSpeed = Math.abs(1 / this.data.rotationPeriod) * deltaTime * speedMultiplier * 0.5;
    this.planetMesh.rotation.y += rotationSpeed * rotationDirection;

    // Update sun direction for custom shaders (Earth and Jupiter)
    if (this.planetMesh.material.uniforms && this.planetMesh.material.uniforms.sunDirection) {
      // Sun is at origin, so direction from planet to sun
      const sunDir = new THREE.Vector3(-this.planetMesh.position.x, 0, -this.planetMesh.position.z).normalize();
      this.planetMesh.material.uniforms.sunDirection.value.copy(sunDir);
    }

    // Update Jupiter's time uniform for GRS animation
    if (this.jupiterTimeUniform) {
      this.jupiterTimeUniform.value = elapsedTime;
    }

    // Update glow position
    if (this.planetGlow) {
      this.planetGlow.position.copy(this.planetMesh.position);
    }

    // Update atmosphere position and sun direction
    if (this.atmosphereMesh) {
      this.atmosphereMesh.position.copy(this.planetMesh.position);

      // Update sun direction for atmospheric scattering
      if (this.atmosphereSunDirection) {
        const sunDir = new THREE.Vector3(-this.planetMesh.position.x, 0, -this.planetMesh.position.z).normalize();
        this.atmosphereSunDirection.value.copy(sunDir);
      }
    }

    // Update rings
    if (this.ringMesh) {
      this.ringMesh.position.copy(this.planetMesh.position);
    }

    // Update clouds (rotate slightly faster)
    if (this.cloudsMesh) {
      this.cloudsMesh.position.copy(this.planetMesh.position);
      this.cloudsMesh.rotation.y += rotationSpeed * 1.15;
    }

    // Update moons
    this.moons.forEach(moon => {
      moon.pivot.position.copy(this.planetMesh.position);

      const moonOrbitalVelocity = (2 * Math.PI) / (moon.data.orbitalPeriod * 100);
      moon.orbitAngle += moonOrbitalVelocity * deltaTime * speedMultiplier;

      moon.mesh.position.x = Math.cos(moon.orbitAngle) * moon.data.distance;
      moon.mesh.position.z = Math.sin(moon.orbitAngle) * moon.data.distance;

      // Tidally locked rotation
      moon.mesh.rotation.y = moon.orbitAngle;

      // Update moon phase shader if this is Earth's Moon
      if (moon.mesh.material.uniforms && moon.mesh.material.uniforms.sunDirection) {
        // Get moon's world position
        const moonWorldPos = new THREE.Vector3();
        moon.mesh.getWorldPosition(moonWorldPos);

        // Sun direction from moon's position (sun is at origin)
        const sunDir = new THREE.Vector3(-moonWorldPos.x, -moonWorldPos.y, -moonWorldPos.z).normalize();
        moon.mesh.material.uniforms.sunDirection.value.copy(sunDir);
      }
    });

    // Update moon sun direction uniform for phase shader
    if (this.moonSunDirection) {
      // Calculate sun direction from planet's position
      const sunDir = new THREE.Vector3(-this.planetMesh.position.x, 0, -this.planetMesh.position.z).normalize();
      this.moonSunDirection.value.copy(sunDir);
    }
  }

  dispose() {
    if (this.planetMesh) {
      this.planetMesh.geometry.dispose();
      this.planetMesh.material.dispose();
      if (this.planetMesh.material.map) {
        this.planetMesh.material.map.dispose();
      }
    }
    if (this.planetGlow) {
      this.planetGlow.geometry.dispose();
      this.planetGlow.material.dispose();
    }
    if (this.atmosphereMesh) {
      this.atmosphereMesh.geometry.dispose();
      this.atmosphereMesh.material.dispose();
    }
    if (this.ringMesh) {
      this.ringMesh.geometry.dispose();
      this.ringMesh.material.dispose();
    }
    if (this.cloudsMesh) {
      this.cloudsMesh.geometry.dispose();
      this.cloudsMesh.material.dispose();
    }
    if (this.orbitLine) {
      this.orbitLine.geometry.dispose();
      this.orbitLine.material.dispose();
    }
    this.moons.forEach(moon => {
      moon.mesh.geometry.dispose();
      moon.mesh.material.dispose();
    });
  }
}
