/**
 * Milky Way Fragment Shader
 *
 * Similar to main starfield but with:
 * - Softer falloff for distant stars
 * - More transparent overall
 * - Subtler twinkle for distant perception
 */

uniform float time;

varying vec3 vColor;
varying float vPhase;
varying float vSpeed;

void main() {
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  if (dist > 0.5) discard;

  // Softer falloff for Milky Way stars
  float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
  alpha *= 0.6; // More transparent overall

  // Very subtle twinkle for distant stars
  float twinkle = 0.9 + 0.1 * sin(time * vSpeed + vPhase);

  gl_FragColor = vec4(vColor * twinkle, alpha * twinkle);
}
