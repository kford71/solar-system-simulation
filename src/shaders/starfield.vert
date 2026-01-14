/**
 * Starfield Vertex Shader
 *
 * Handles star positioning with:
 * - Per-star size based on magnitude
 * - Size attenuation based on distance
 * - Passes twinkle parameters to fragment shader
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

  // Size attenuation based on distance
  gl_PointSize = size * (200.0 / -mvPosition.z);
  gl_PointSize = clamp(gl_PointSize, 1.0, 6.0);

  gl_Position = projectionMatrix * mvPosition;
}
