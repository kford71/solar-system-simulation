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
import { MOON_DATA, ADDITIONAL_MOONS, CHARON_DATA, DISTANCE_SCALE, ATMOSPHERE_CONFIG, MOON_TEXTURES } from '../data/planetData.js';
import { calculatePlanetPosition, calculateMoonPosition, dateToJulianDate } from '../utils/OrbitalMechanics.js';
import { AtmosphereShader } from '../shaders/AtmosphereShader.js';

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

    // Create orbit line synchronously (doesn't need textures)
    this.createOrbitLine();

    // CRITICAL: Add axisGroup to orbitGroup synchronously so scene graph is valid
    // before createSolarSystem() calls getMesh(). The async init() will populate
    // the axisGroup with meshes, but the parent-child relationship must exist now.
    this.orbitGroup.add(this.axisGroup);

    this.init();
  }

  async init() {
    await this.createPlanetMesh();
    this.applyAxialTilt();

    // Create subtle colored glow around all planets for better visibility
    this.createPlanetGlow();

    // Create Fresnel atmosphere effect if this planet has one configured
    this.createFresnelAtmosphere();

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
    // Note: orbitGroup.add(axisGroup) is now done in constructor for sync scene graph setup
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
    // Standard material for other planets - use albedo-based shader
    else {
      material = await this.createAlbedoMaterial();
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
   * Create material with albedo-based lighting and PBR normal mapping
   * Higher albedo planets appear brighter when lit by the Sun
   * Mercury (albedo 0.068) will appear notably darker than Venus (albedo 0.77)
   * Normal maps add surface detail for rocky bodies
   */
  async createAlbedoMaterial() {
    let texture = null;
    let normalMap = null;
    let specularMap = null;

    // Load main texture
    if (this.data.textureUrl) {
      try {
        texture = await this.loadTexture(this.data.textureUrl);
      } catch (e) {
        console.warn(`Failed to load texture for ${this.data.name}, using color fallback`);
      }
    }

    // Load normal map for surface detail
    if (this.data.normalMapUrl) {
      try {
        normalMap = await this.loadTexture(this.data.normalMapUrl);
      } catch (e) {
        // Silently ignore - will use vertex normals
      }
    }

    // Load specular map (for Earth's oceans)
    if (this.data.specularMapUrl) {
      try {
        specularMap = await this.loadTexture(this.data.specularMapUrl);
      } catch (e) {
        // Silently ignore
      }
    }

    // Get albedo value (default to 0.3 if not specified)
    const albedo = this.data.albedo !== undefined ? this.data.albedo : 0.3;

    // Determine normal map strength based on planet type
    // Rocky planets get stronger normal mapping for visible terrain
    const isRocky = ['Mercury', 'Mars'].includes(this.data.name);
    const normalScale = isRocky ? 1.5 : 1.0;

    // Create shader material with albedo-based lighting and normal mapping
    return new THREE.ShaderMaterial({
      uniforms: {
        planetTexture: { value: texture },
        normalMap: { value: normalMap },
        specularMap: { value: specularMap },
        hasTexture: { value: texture !== null },
        hasNormalMap: { value: normalMap !== null },
        hasSpecularMap: { value: specularMap !== null },
        normalScale: { value: normalScale },
        baseColor: { value: new THREE.Color(this.data.color) },
        albedo: { value: albedo },
        sunDirection: { value: new THREE.Vector3(1, 0, 0) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vViewPosition;
        varying vec3 vTangent;
        varying vec3 vBitangent;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);

          // Calculate tangent and bitangent for normal mapping on sphere
          // For a sphere, we can derive tangent from the position
          vec3 pos = normalize(position);
          vec3 tangent = normalize(cross(vec3(0.0, 1.0, 0.0), pos));
          if (length(tangent) < 0.001) {
            tangent = normalize(cross(vec3(1.0, 0.0, 0.0), pos));
          }
          vec3 bitangent = normalize(cross(pos, tangent));

          vTangent = normalize(normalMatrix * tangent);
          vBitangent = normalize(normalMatrix * bitangent);

          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D planetTexture;
        uniform sampler2D normalMap;
        uniform sampler2D specularMap;
        uniform bool hasTexture;
        uniform bool hasNormalMap;
        uniform bool hasSpecularMap;
        uniform float normalScale;
        uniform vec3 baseColor;
        uniform float albedo;
        uniform vec3 sunDirection;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vViewPosition;
        varying vec3 vTangent;
        varying vec3 vBitangent;

        void main() {
          // Get base color from texture or fallback
          vec3 surfaceColor;
          if (hasTexture) {
            surfaceColor = texture2D(planetTexture, vUv).rgb;
          } else {
            surfaceColor = baseColor;
          }

          // Get normal - apply normal map if available
          vec3 normal = normalize(vNormal);

          if (hasNormalMap) {
            // Sample normal map and convert from [0,1] to [-1,1]
            vec3 mapNormal = texture2D(normalMap, vUv).rgb * 2.0 - 1.0;

            // Apply normal scale for intensity control
            mapNormal.xy *= normalScale;
            mapNormal = normalize(mapNormal);

            // Transform from tangent space to view space using TBN matrix
            mat3 TBN = mat3(
              normalize(vTangent),
              normalize(vBitangent),
              normalize(vNormal)
            );
            normal = normalize(TBN * mapNormal);
          }

          // View direction for specular
          vec3 viewDir = normalize(vViewPosition);

          // Calculate lighting
          float sunDot = dot(normal, sunDirection);

          // Diffuse lighting with albedo affecting brightness
          float ambientLight = 0.08;  // Very dim ambient
          float diffuse = max(0.0, sunDot);

          // Apply albedo to affect overall brightness
          float albedoFactor = 0.4 + (albedo * 0.8);  // Range: 0.45 to 1.02

          // Calculate specular highlight (for shiny surfaces like oceans)
          float specular = 0.0;
          float roughness = 0.9;  // Default roughness (matte)

          if (hasSpecularMap) {
            // Specular map: white = water (shiny), black = land (rough)
            float specMask = texture2D(specularMap, vUv).r;
            roughness = 1.0 - specMask * 0.7;  // Water is less rough

            // Blinn-Phong specular for ocean highlights
            vec3 halfDir = normalize(sunDirection + viewDir);
            float specAngle = max(0.0, dot(normal, halfDir));
            float shininess = mix(8.0, 64.0, specMask);  // Shinier where water
            specular = pow(specAngle, shininess) * specMask * 0.5;
          }

          // Final lighting calculation
          float lighting = ambientLight + (diffuse * albedoFactor);

          // Apply lighting to surface color
          vec3 finalColor = surfaceColor * lighting;

          // Add specular highlight (white)
          finalColor += vec3(1.0, 1.0, 0.95) * specular * diffuse;

          // Slight boost to prevent completely black dark sides
          finalColor = max(finalColor, surfaceColor * 0.03);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
  }

  /**
   * Create Fresnel-based atmospheric glow effect
   * Uses ATMOSPHERE_CONFIG for per-planet settings
   */
  createFresnelAtmosphere() {
    const config = ATMOSPHERE_CONFIG[this.data.name];
    if (!config) return null;  // No atmosphere for this body

    // Create slightly larger sphere for atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(
      this.data.radius * config.scale,
      64,
      64
    );

    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: AtmosphereShader.vertexShader,
      fragmentShader: AtmosphereShader.fragmentShader,
      uniforms: {
        atmosphereColor: { value: new THREE.Color(...config.color) },
        atmosphereIntensity: { value: config.intensity },
        atmospherePower: { value: config.power },
        atmosphereOpacity: { value: config.opacity }
      },
      side: THREE.BackSide,       // Render inside of sphere
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false           // Don't occlude planet
    });

    this.atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.atmosphereMesh.name = `${this.data.name}_atmosphere`;

    // Add to planet mesh so it moves with planet
    this.planetMesh.add(this.atmosphereMesh);

    return this.atmosphereMesh;
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
   * Create planetary rings using accurate band data
   */
  async createRings() {
    if (!this.data.ringBands || this.data.ringBands.length === 0) {
      // Fallback for planets without detailed ring data
      return this.createLegacyRings();
    }

    // Find the overall inner and outer radius from ring bands
    let minInner = Infinity;
    let maxOuter = 0;
    this.data.ringBands.forEach(band => {
      minInner = Math.min(minInner, band.inner);
      maxOuter = Math.max(maxOuter, band.outer);
    });

    const innerRadius = this.data.radius * minInner;
    const outerRadius = this.data.radius * maxOuter;

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

    // Create accurate ring texture based on band data
    const ringTexture = this.createAccurateRingTexture(minInner, maxOuter);

    const material = new THREE.MeshStandardMaterial({
      map: ringTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1.0,  // Opacity is baked into texture
      alphaTest: 0.01,
      depthWrite: false
    });

    this.ringMesh = new THREE.Mesh(geometry, material);
    this.ringMesh.rotation.x = Math.PI / 2;
    this.ringMesh.position.copy(this.planetMesh.position);
    this.ringMesh.renderOrder = 1;

    this.axisGroup.add(this.ringMesh);
  }

  /**
   * Fallback for planets without detailed ring band data
   */
  async createLegacyRings() {
    const innerRadius = this.data.radius * (this.data.ringInnerRadius || 1.2);
    const outerRadius = this.data.radius * (this.data.ringOuterRadius || 2.3);

    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);

    const pos = geometry.attributes.position;
    const uv = geometry.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const distance = Math.sqrt(x * x + y * y);
      const normalizedDist = (distance - innerRadius) / (outerRadius - innerRadius);
      uv.setXY(i, normalizedDist, 0.5);
    }

    const ringTexture = this.createSaturnRingTexture();
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
   * Create accurate ring texture based on ring band data
   */
  createAccurateRingTexture(minInner, maxOuter) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Clear to transparent
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const totalRange = maxOuter - minInner;

    // Draw each ring band
    this.data.ringBands.forEach(band => {
      const startX = ((band.inner - minInner) / totalRange) * canvas.width;
      const endX = ((band.outer - minInner) / totalRange) * canvas.width;
      const bandWidth = endX - startX;

      // Convert hex color to RGB
      const color = new THREE.Color(band.color);
      const r = Math.floor(color.r * 255);
      const g = Math.floor(color.g * 255);
      const b = Math.floor(color.b * 255);

      // Create gradient for smooth edges
      const gradient = ctx.createLinearGradient(startX, 0, endX, 0);
      const edgeFade = Math.min(0.1, 10 / bandWidth);

      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
      gradient.addColorStop(edgeFade, `rgba(${r}, ${g}, ${b}, ${band.opacity})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${band.opacity})`);
      gradient.addColorStop(1 - edgeFade, `rgba(${r}, ${g}, ${b}, ${band.opacity})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(startX, 0, bandWidth, canvas.height);
    });

    // Add fine detail noise for realism (varies by planet type)
    this.addRingNoise(ctx, canvas.width, canvas.height);

    return new THREE.CanvasTexture(canvas);
  }

  /**
   * Add noise and detail to ring texture based on planet type
   */
  addRingNoise(ctx, width, height) {
    const ringType = this.data.ringType || 'saturn';

    if (ringType === 'saturn') {
      // Saturn: More visible texture, icy particles
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.15;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
      // Add darker streaks
      for (let i = 0; i < 2000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.1;
        ctx.fillStyle = `rgba(100, 80, 60, ${alpha})`;
        ctx.fillRect(x, y, 2, 1);
      }
    } else if (ringType === 'jupiter') {
      // Jupiter: Very faint dusty texture
      for (let i = 0; i < 500; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.05;
        ctx.fillStyle = `rgba(200, 150, 100, ${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
    } else if (ringType === 'uranus') {
      // Uranus: Dark charcoal with minimal texture
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.08;
        ctx.fillStyle = `rgba(80, 80, 80, ${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
    } else if (ringType === 'neptune') {
      // Neptune: Very faint dusty texture
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.04;
        ctx.fillStyle = `rgba(100, 80, 70, ${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
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
   * Create a single moon with Keplerian orbital mechanics and PBR materials
   */
  async createSingleMoon(moonData) {
    const moonGeometry = new THREE.SphereGeometry(moonData.radius, 32, 32);

    let moonMaterial;
    let moonTexture = null;
    let normalMap = null;

    // Check MOON_TEXTURES for high-quality textures first
    const textureConfig = MOON_TEXTURES[moonData.name];

    // Try to load diffuse texture
    const textureUrl = textureConfig?.diffuse || moonData.textureUrl;
    if (textureUrl) {
      try {
        moonTexture = await this.loadTexture(textureUrl);
      } catch (e) {
        // Use color fallback
      }
    }

    // Try to load normal map if available
    if (textureConfig?.normal) {
      try {
        normalMap = await this.loadTexture(textureConfig.normal);
      } catch (e) {
        // Silently ignore
      }
    }

    // Use shader material for Earth's Moon to show phases
    if (moonData.name === 'Moon' && moonData.parent === 'Earth') {
      moonMaterial = this.createMoonPhaseMaterial(moonTexture, moonData.color);
    } else {
      // Create PBR-style material for other moons
      const materialOptions = {
        color: moonTexture ? 0xffffff : moonData.color,
        roughness: 1.0,   // Rocky/icy surfaces are matte
        metalness: 0.0    // Non-metallic
      };

      if (moonTexture) {
        materialOptions.map = moonTexture;
      }

      if (normalMap) {
        materialOptions.normalMap = normalMap;
        materialOptions.normalScale = new THREE.Vector2(1.0, 1.0);
      }

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

    // Create pivot for orbit - this will be tilted for inclination
    const moonPivot = new THREE.Group();
    moonPivot.position.copy(this.planetMesh.position);

    // Create an inner orbit group for inclination
    const orbitPlane = new THREE.Group();
    moonPivot.add(orbitPlane);

    // Apply orbital inclination
    const inclination = moonData.inclination || 0;
    const inclinationRad = THREE.MathUtils.degToRad(inclination);
    orbitPlane.rotation.x = inclinationRad;

    orbitPlane.add(moonMesh);

    // Position moon at orbital distance (semi-major axis scaled)
    moonMesh.position.x = moonData.distance;

    // Create Fresnel atmosphere for moon if defined in ATMOSPHERE_CONFIG (e.g., Titan, Triton)
    let atmosphereMesh = null;
    const moonAtmoConfig = ATMOSPHERE_CONFIG[moonData.name];
    if (moonAtmoConfig) {
      const atmoGeom = new THREE.SphereGeometry(
        moonData.radius * moonAtmoConfig.scale,
        32, 32
      );
      const atmoMat = new THREE.ShaderMaterial({
        vertexShader: AtmosphereShader.vertexShader,
        fragmentShader: AtmosphereShader.fragmentShader,
        uniforms: {
          atmosphereColor: { value: new THREE.Color(...moonAtmoConfig.color) },
          atmosphereIntensity: { value: moonAtmoConfig.intensity },
          atmospherePower: { value: moonAtmoConfig.power },
          atmosphereOpacity: { value: moonAtmoConfig.opacity }
        },
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      atmosphereMesh = new THREE.Mesh(atmoGeom, atmoMat);
      atmosphereMesh.name = `${moonData.name}_atmosphere`;
      moonMesh.add(atmosphereMesh);
    }

    this.axisGroup.add(moonPivot);

    // Return moon object with Keplerian orbital parameters
    return {
      mesh: moonMesh,
      pivot: moonPivot,
      orbitPlane: orbitPlane,
      data: moonData,
      // Initialize orbital state
      meanAnomaly: Math.random() * Math.PI * 2,  // Random starting position
      orbitAngle: Math.random() * Math.PI * 2,   // For backward compatibility
      // Keplerian elements
      semiMajorAxis: moonData.distance,
      eccentricity: moonData.eccentricity || 0,
      inclination: inclination,
      retrograde: moonData.retrograde || false,
      orbitalPeriod: moonData.orbitalPeriod || 1,
      atmosphereMesh
    };
  }

  /**
   * Solve Kepler's equation for moon orbits
   * M = E - e*sin(E)
   */
  solveKeplerEquation(meanAnomaly, eccentricity) {
    // For nearly circular orbits, return mean anomaly
    if (eccentricity < 0.001) {
      return meanAnomaly;
    }

    // Newton-Raphson iteration
    let E = meanAnomaly + eccentricity * Math.sin(meanAnomaly);
    const tolerance = 1e-6;
    let iterations = 0;
    const maxIterations = 10;

    while (iterations < maxIterations) {
      const dE = (E - eccentricity * Math.sin(E) - meanAnomaly) / (1 - eccentricity * Math.cos(E));
      E -= dE;
      if (Math.abs(dE) < tolerance) break;
      iterations++;
    }

    return E;
  }

  /**
   * Calculate moon position using Keplerian orbital mechanics
   */
  calculateMoonPosition(moon) {
    const e = moon.eccentricity;
    const a = moon.semiMajorAxis;

    // Solve Kepler's equation
    const E = this.solveKeplerEquation(moon.meanAnomaly, e);

    // Calculate true anomaly
    const sinNu = Math.sqrt(1 - e * e) * Math.sin(E) / (1 - e * Math.cos(E));
    const cosNu = (Math.cos(E) - e) / (1 - e * Math.cos(E));
    const trueAnomaly = Math.atan2(sinNu, cosNu);

    // Calculate distance from parent (radius)
    const r = a * (1 - e * Math.cos(E));

    // Position in orbital plane (before inclination is applied by orbitPlane group)
    const x = r * Math.cos(trueAnomaly);
    const z = r * Math.sin(trueAnomaly);

    return { x, z, trueAnomaly };
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
    // Guard against being called before async init() completes
    if (this.planetMesh) {
      this.planetMesh.getWorldPosition(position);
    }
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
    const objects = [];
    // Guard against being called before async init() completes
    if (this.planetMesh) {
      objects.push(this.planetMesh);
    }
    this.moons.forEach(moon => {
      if (moon.mesh) objects.push(moon.mesh);
    });
    return objects;
  }

  /**
   * Set planet position for a specific Julian Date using accurate orbital mechanics
   */
  setPositionForDate(julianDate) {
    // Guard against being called before async init() completes
    if (!this.planetMesh) return;

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

        // Atmosphere is a child of planetMesh, moves automatically

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
    // Guard against being called before async init() completes
    if (!this.planetMesh) return;

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
    if (this.planetMesh.material && this.planetMesh.material.uniforms && this.planetMesh.material.uniforms.sunDirection) {
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

    // Atmosphere mesh is a child of planetMesh, so it moves automatically

    // Update rings
    if (this.ringMesh) {
      this.ringMesh.position.copy(this.planetMesh.position);
    }

    // Update clouds (rotate slightly faster)
    if (this.cloudsMesh) {
      this.cloudsMesh.position.copy(this.planetMesh.position);
      this.cloudsMesh.rotation.y += rotationSpeed * 1.15;
    }

    // Update moons with Keplerian orbital mechanics
    this.moons.forEach(moon => {
      // Keep pivot centered on planet
      moon.pivot.position.copy(this.planetMesh.position);

      // Calculate mean motion (radians per day, scaled for simulation)
      // Using 100 as the time scale factor for visibility
      const meanMotion = (2 * Math.PI) / (moon.orbitalPeriod * 100);

      // Update mean anomaly - retrograde moons orbit backwards
      const direction = moon.retrograde ? -1 : 1;
      moon.meanAnomaly += meanMotion * deltaTime * speedMultiplier * direction;

      // Normalize mean anomaly to [0, 2π]
      moon.meanAnomaly = moon.meanAnomaly % (2 * Math.PI);
      if (moon.meanAnomaly < 0) moon.meanAnomaly += 2 * Math.PI;

      // Calculate position using Keplerian mechanics
      const pos = this.calculateMoonPosition(moon);

      // Apply position to moon mesh
      moon.mesh.position.x = pos.x;
      moon.mesh.position.z = pos.z;
      moon.mesh.position.y = 0;  // Y is handled by orbitPlane inclination

      // Update orbit angle for backward compatibility
      moon.orbitAngle = pos.trueAnomaly;

      // Tidally locked rotation - moon always faces planet
      // For retrograde moons, this still works because the orbit direction is handled by meanAnomaly
      moon.mesh.rotation.y = pos.trueAnomaly + Math.PI;

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
