/**
 * Starfield Fragment Shader
 *
 * Creates realistic star rendering with:
 * - Circular point with soft edge falloff
 * - Subtle scintillation (twinkling) effect
 * - Multi-frequency variation for organic feel
 */

uniform float time;

varying vec3 vColor;
varying float vPhase;
varying float vSpeed;

void main() {
  // Circular point with soft edge
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  if (dist > 0.5) discard;

  // Soft radial falloff from center
  float alpha = 1.0 - smoothstep(0.0, 0.5, dist);

  // Subtle twinkle effect (not too dramatic)
  // Range: 0.85 to 1.0 for gentle scintillation
  float twinkle = 0.85 + 0.15 * sin(time * vSpeed + vPhase);

  // Add slight secondary frequency for more organic feel
  twinkle *= 0.95 + 0.05 * sin(time * vSpeed * 0.7 + vPhase * 1.3);

  gl_FragColor = vec4(vColor * twinkle, alpha * twinkle);
}
