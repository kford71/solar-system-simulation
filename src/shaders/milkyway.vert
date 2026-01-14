/**
 * Milky Way Vertex Shader
 *
 * Similar to main starfield but with smaller size scaling
 * for distant, densely-packed galactic plane stars.
 */

attribute float size;
attribute float phase;
attribute float twinkleSpeed;
attribute vec3 starColor;

varying vec3 vColor;
varying float vPhase;
varying float vSpeed;

void main() {
  vColor = starColor;
  vPhase = phase;
  vSpeed = twinkleSpeed;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  // Smaller size multiplier for distant Milky Way stars
  gl_PointSize = size * (150.0 / -mvPosition.z);
  gl_PointSize = clamp(gl_PointSize, 0.5, 4.0);

  gl_Position = projectionMatrix * mvPosition;
}
