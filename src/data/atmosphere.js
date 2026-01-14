/**
 * Atmosphere Configuration
 *
 * Defines the visual properties of planetary atmospheres
 * for the Fresnel rim glow effect.
 *
 * Properties:
 * - color: RGB values (0-1) for atmosphere tint
 * - intensity: Overall brightness multiplier
 * - power: Fresnel exponent (higher = thinner rim)
 * - opacity: Maximum opacity at edges
 * - scale: Size relative to planet (1.02 = 2% larger)
 *
 * @see {import('../types/index.d.ts')} for type definitions
 */

/** @type {import('../types/index.d.ts').AtmosphereConfigMap} */
export const ATMOSPHERE_CONFIG = {
  // Earth - Prominent blue atmosphere
  Earth: {
    color: [0.3, 0.6, 1.0],    // Blue
    intensity: 1.2,
    power: 4.0,
    opacity: 0.8,
    scale: 1.025               // 2.5% larger than planet
  },

  // Venus - Thick yellowish-white cloud layer
  Venus: {
    color: [1.0, 0.9, 0.7],    // Pale yellow-white
    intensity: 1.5,
    power: 2.5,
    opacity: 0.9,
    scale: 1.045               // Thick atmosphere
  },

  // Mars - Very thin dusty red-orange atmosphere
  Mars: {
    color: [1.0, 0.5, 0.3],    // Dusty red-orange
    intensity: 0.5,
    power: 5.0,
    opacity: 0.4,
    scale: 1.008               // Very thin
  },

  // Jupiter - Subtle pale tan glow
  Jupiter: {
    color: [0.9, 0.8, 0.7],    // Pale tan
    intensity: 0.3,
    power: 6.0,
    opacity: 0.3,
    scale: 1.008
  },

  // Saturn - Subtle pale gold glow
  Saturn: {
    color: [1.0, 0.95, 0.8],   // Pale gold
    intensity: 0.25,
    power: 6.0,
    opacity: 0.3,
    scale: 1.008
  },

  // Uranus - Cyan methane atmosphere
  Uranus: {
    color: [0.5, 0.8, 0.9],    // Cyan
    intensity: 0.5,
    power: 4.5,
    opacity: 0.5,
    scale: 1.012
  },

  // Neptune - Deep blue atmosphere
  Neptune: {
    color: [0.2, 0.4, 1.0],    // Deep blue
    intensity: 0.6,
    power: 4.0,
    opacity: 0.6,
    scale: 1.015
  },

  // Titan - Thick orange hazy atmosphere (most dramatic moon)
  Titan: {
    color: [1.0, 0.6, 0.2],    // Orange haze
    intensity: 1.0,
    power: 3.0,
    opacity: 0.85,
    scale: 1.035               // Thick hazy atmosphere
  },

  // Pluto - Extremely thin nitrogen atmosphere
  Pluto: {
    color: [0.7, 0.8, 1.0],    // Faint blue (nitrogen)
    intensity: 0.3,
    power: 6.0,
    opacity: 0.25,
    scale: 1.005               // Extremely thin
  },

  // Triton - Thin nitrogen atmosphere with geysers
  Triton: {
    color: [0.8, 0.85, 1.0],   // Pale blue (nitrogen geysers)
    intensity: 0.25,
    power: 6.0,
    opacity: 0.2,
    scale: 1.004
  }
};
