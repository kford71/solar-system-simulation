/**
 * Sun Vertex Shader
 *
 * Passes UV coordinates, normals, and positions
 * to fragment shader for surface effects.
 */

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
