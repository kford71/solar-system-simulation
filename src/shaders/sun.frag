/**
 * Sun Fragment Shader
 *
 * Creates animated solar surface with:
 * - Turbulent plasma flow using fractal Brownian motion
 * - Granulation effect (convection cells)
 * - Sunspot-like darker regions
 * - Limb darkening at edges
 * - Rim brightening for bloom effect
 */

uniform float time;
uniform vec3 baseColor;
uniform vec3 glowColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

// Hash function for noise generation
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// Value noise function
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

// Fractal Brownian motion for turbulent appearance
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
