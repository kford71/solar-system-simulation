/**
 * Atmospheric Fresnel Shader
 *
 * Creates a glowing rim effect around planets with atmospheres
 * using backface rendering for proper fresnel calculation.
 *
 * The effect simulates how light scatters through atmosphere
 * at grazing angles, making planetary limbs glow.
 */

export const AtmosphereShader = {
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
    uniform float atmosphereIntensity;
    uniform float atmospherePower;
    uniform float atmosphereOpacity;

    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // View direction (from fragment toward camera)
      vec3 viewDir = normalize(-vPosition);

      // Fresnel effect - dot product gives 1 at center, 0 at edges
      // We want glow at edges, so use (1 - dot)
      // abs() handles backface rendering where normals point inward
      float fresnel = 1.0 - abs(dot(vNormal, viewDir));

      // Raise to power to concentrate glow at rim
      // Higher power = thinner, more concentrated rim
      fresnel = pow(fresnel, atmospherePower);

      // Calculate final intensity
      float intensity = fresnel * atmosphereIntensity;

      // Slight color variation based on fresnel for more natural look
      vec3 finalColor = atmosphereColor * (0.8 + 0.2 * fresnel);

      // Output with atmospheric color and calculated alpha
      gl_FragColor = vec4(finalColor, intensity * atmosphereOpacity);
    }
  `
};
