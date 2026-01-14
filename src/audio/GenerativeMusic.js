/**
 * GenerativeMusic - Advanced generative music techniques
 *
 * Based on 2024-2025 research on generative music:
 * - Markov chains for melodic generation
 * - Euclidean rhythms for interesting patterns
 * - Procedural chord progressions
 * - Tension/intensity curves
 * - Horizontal/vertical re-sequencing
 *
 * This module provides building blocks that can enhance MusicSystem
 */

import * as Tone from 'tone';

/**
 * Markov Chain for melodic generation
 * Learns note transitions from input sequences and generates new melodies
 */
export class MelodyMarkov {
  constructor(order = 1) {
    this.order = order; // How many previous notes to consider
    this.transitions = new Map(); // state -> [possible next notes]
    this.startNotes = []; // Notes that can start a sequence
  }

  /**
   * Train the Markov chain on a sequence of notes
   * @param {string[]} notes - Array of note names (e.g., ['C4', 'E4', 'G4'])
   */
  train(notes) {
    if (notes.length <= this.order) return;

    // Record starting notes
    this.startNotes.push(notes.slice(0, this.order).join('|'));

    // Build transition table
    for (let i = 0; i <= notes.length - this.order - 1; i++) {
      const state = notes.slice(i, i + this.order).join('|');
      const next = notes[i + this.order];

      if (!this.transitions.has(state)) {
        this.transitions.set(state, []);
      }
      this.transitions.get(state).push(next);
    }
  }

  /**
   * Generate a new melody
   * @param {number} length - Number of notes to generate
   * @param {string} startState - Optional starting state
   * @returns {string[]} - Generated note sequence
   */
  generate(length, startState = null) {
    if (this.transitions.size === 0) {
      return [];
    }

    // Pick starting state
    let state = startState;
    if (!state) {
      if (this.startNotes.length > 0) {
        state = this.startNotes[Math.floor(Math.random() * this.startNotes.length)];
      } else {
        // Use any state
        const states = Array.from(this.transitions.keys());
        state = states[Math.floor(Math.random() * states.length)];
      }
    }

    const result = state.split('|');

    // Generate notes
    for (let i = 0; i < length - this.order; i++) {
      const nextOptions = this.transitions.get(state);
      if (!nextOptions || nextOptions.length === 0) {
        // Dead end - restart from a random state
        const states = Array.from(this.transitions.keys());
        state = states[Math.floor(Math.random() * states.length)];
        continue;
      }

      const next = nextOptions[Math.floor(Math.random() * nextOptions.length)];
      result.push(next);

      // Update state (sliding window)
      const stateNotes = state.split('|');
      stateNotes.shift();
      stateNotes.push(next);
      state = stateNotes.join('|');
    }

    return result;
  }

  /**
   * Pre-train with Lydian mode patterns for space music
   */
  trainLydianPatterns() {
    // Common Lydian melodic patterns (C Lydian)
    const patterns = [
      ['C4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5'],  // Scale ascending
      ['C5', 'B4', 'A4', 'G4', 'F#4', 'E4', 'D4', 'C4'],  // Scale descending
      ['C4', 'E4', 'G4', 'B4', 'C5'],                      // CMaj7 arpeggio
      ['D4', 'F#4', 'A4', 'C5'],                           // D major arp
      ['E4', 'G4', 'B4', 'D5'],                            // E minor arp
      ['G4', 'B4', 'D5', 'F#5'],                           // G major arp
      ['C4', 'G4', 'C5', 'G4', 'E4', 'C4'],               // Broken chord
      ['C4', 'D4', 'E4', 'C4', 'D4', 'E4', 'F#4', 'G4'], // Stepwise motif
      ['G4', 'A4', 'B4', 'A4', 'G4', 'F#4', 'E4'],        // Upper neighbor
      ['C4', 'E4', 'D4', 'F#4', 'E4', 'G4', 'F#4', 'A4'], // Ascending thirds
    ];

    patterns.forEach(p => this.train(p));
  }
}

/**
 * Euclidean Rhythm Generator
 * Distributes pulses evenly across steps for interesting rhythmic patterns
 */
export class EuclideanRhythm {
  /**
   * Generate a Euclidean rhythm pattern
   * @param {number} pulses - Number of hits
   * @param {number} steps - Total steps in the pattern
   * @param {number} rotation - Rotate pattern by this many steps
   * @returns {boolean[]} - Pattern array (true = hit, false = rest)
   */
  static generate(pulses, steps, rotation = 0) {
    if (pulses >= steps) {
      return Array(steps).fill(true);
    }
    if (pulses <= 0) {
      return Array(steps).fill(false);
    }

    // Bjorklund's algorithm for Euclidean rhythms
    const pattern = [];
    let remainder = pulses;
    let level = 0;
    const counts = [];
    const remainders = [steps - pulses];

    counts.push(pulses);

    while (remainders[level] > 1) {
      counts.push(Math.floor(remainders[level] / counts[level]));
      remainders.push(remainders[level] % counts[level]);
      level++;
    }

    counts.push(counts[level]);

    // Build pattern
    const build = (level) => {
      if (level === -1) {
        pattern.push(false);
      } else if (level === -2) {
        pattern.push(true);
      } else {
        for (let i = 0; i < counts[level]; i++) {
          build(level - 1);
        }
        if (remainders[level] !== 0) {
          build(level - 2);
        }
      }
    };

    build(level);

    // Rotate pattern
    if (rotation !== 0) {
      const rot = ((rotation % steps) + steps) % steps;
      return [...pattern.slice(rot), ...pattern.slice(0, rot)];
    }

    return pattern;
  }

  /**
   * Get common world music rhythms expressed as Euclidean patterns
   * @returns {Object} - Named rhythm patterns
   */
  static getCommonRhythms() {
    return {
      'tresillo': this.generate(3, 8),        // Cuban/Latin: X..X..X.
      'cinquillo': this.generate(5, 8),       // X.XX.XX.
      'bossa': this.generate(5, 16),          // Brazilian pattern
      'gahu': this.generate(4, 12),           // West African
      'rumba': this.generate(5, 12),          // Cuban rumba clave
      'soukous': this.generate(5, 16, 2),     // Central African
      'space': this.generate(3, 16),          // Sparse, spacey
      'pulse': this.generate(4, 16),          // Steady quarter notes
      'offbeat': this.generate(4, 16, 2),     // Syncopated
    };
  }
}

/**
 * Procedural Chord Progression Generator
 * Creates chord progressions using Markov chains and music theory rules
 */
export class ChordProgressionGenerator {
  constructor() {
    // Chord transition probabilities for Lydian mode
    // Format: { fromChord: { toChord: weight, ... }, ... }
    this.transitions = {
      'I':   { 'II': 0.3, 'IV#dim': 0.1, 'V': 0.2, 'vi': 0.2, 'iii': 0.1, 'I': 0.1 },
      'II':  { 'V': 0.3, 'iii': 0.2, 'I': 0.2, 'vi': 0.2, 'IV#dim': 0.1 },
      'iii': { 'vi': 0.3, 'IV#dim': 0.1, 'II': 0.2, 'I': 0.2, 'V': 0.2 },
      'IV#dim': { 'V': 0.4, 'I': 0.3, 'iii': 0.2, 'vi': 0.1 },
      'V':   { 'I': 0.4, 'vi': 0.2, 'iii': 0.2, 'II': 0.2 },
      'vi':  { 'II': 0.3, 'V': 0.2, 'IV#dim': 0.1, 'iii': 0.2, 'I': 0.2 },
      'vii': { 'I': 0.5, 'iii': 0.3, 'V': 0.2 }
    };

    // Lydian scale degrees mapped to chord roots (in C Lydian)
    this.lydianChords = {
      'I':   { root: 'C', type: 'maj7', notes: ['C', 'E', 'G', 'B'] },
      'II':  { root: 'D', type: 'maj', notes: ['D', 'F#', 'A'] },
      'iii': { root: 'E', type: 'min', notes: ['E', 'G', 'B'] },
      'IV#dim': { root: 'F#', type: 'dim', notes: ['F#', 'A', 'C'] },
      'V':   { root: 'G', type: 'maj', notes: ['G', 'B', 'D'] },
      'vi':  { root: 'A', type: 'min', notes: ['A', 'C', 'E'] },
      'vii': { root: 'B', type: 'min', notes: ['B', 'D', 'F#'] }
    };
  }

  /**
   * Generate a chord progression
   * @param {number} length - Number of chords
   * @param {string} startChord - Starting chord (default 'I')
   * @returns {string[]} - Array of chord numerals
   */
  generateProgression(length, startChord = 'I') {
    const progression = [startChord];
    let current = startChord;

    for (let i = 1; i < length; i++) {
      current = this.getNextChord(current);
      progression.push(current);
    }

    return progression;
  }

  /**
   * Get next chord based on weighted probabilities
   * @param {string} current - Current chord numeral
   * @returns {string} - Next chord numeral
   */
  getNextChord(current) {
    const options = this.transitions[current];
    if (!options) return 'I';

    const entries = Object.entries(options);
    const total = entries.reduce((sum, [, weight]) => sum + weight, 0);
    let random = Math.random() * total;

    for (const [chord, weight] of entries) {
      random -= weight;
      if (random <= 0) return chord;
    }

    return entries[0][0];
  }

  /**
   * Convert chord numeral to actual notes in a given key
   * @param {string} numeral - Chord numeral (e.g., 'I', 'V')
   * @param {string} rootNote - Root of the key (e.g., 'C', 'G')
   * @param {number} octave - Base octave
   * @returns {string[]} - Array of note names with octaves
   */
  getChordNotes(numeral, rootNote = 'C', octave = 3) {
    const chord = this.lydianChords[numeral];
    if (!chord) return [`${rootNote}${octave}`];

    // Transpose from C to target root
    const semitoneOffset = this.getNoteOffset(rootNote);

    return chord.notes.map((note, i) => {
      const transposed = this.transposeNote(note, semitoneOffset);
      // Spread chord across octaves for voicing
      const noteOctave = octave + Math.floor(i / 3);
      return `${transposed}${noteOctave}`;
    });
  }

  /**
   * Get semitone offset from C
   */
  getNoteOffset(note) {
    const noteMap = { 'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11 };
    const baseNote = note.replace(/[#b]/g, '');
    let offset = noteMap[baseNote] || 0;
    if (note.includes('#')) offset += 1;
    if (note.includes('b')) offset -= 1;
    return offset;
  }

  /**
   * Transpose a note by semitones
   */
  transposeNote(note, semitones) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const baseNote = note.replace(/[#b]/g, '');
    let index = notes.indexOf(baseNote);
    if (note.includes('#')) index += 1;
    if (note.includes('b')) index -= 1;
    index = ((index + semitones) % 12 + 12) % 12;
    return notes[index];
  }

  /**
   * Generate a full progression with notes
   * @param {number} length - Number of chords
   * @param {string} key - Key root note
   * @param {number} octave - Base octave
   * @returns {Object[]} - Array of { numeral, notes }
   */
  generateWithNotes(length, key = 'C', octave = 3) {
    const numerals = this.generateProgression(length);
    return numerals.map(numeral => ({
      numeral,
      notes: this.getChordNotes(numeral, key, octave)
    }));
  }
}

/**
 * Tension/Intensity Curve System
 * Maps game state to musical parameters
 */
export class TensionCurve {
  constructor() {
    this.currentTension = 0;
    this.targetTension = 0;
    this.smoothingFactor = 0.05; // How quickly tension changes

    // Parameter mappings (tension 0-1 → parameter ranges)
    this.mappings = {
      filterCutoff: { min: 200, max: 2000 },     // Hz
      tempo: { min: 40, max: 80 },               // BPM
      layerThreshold: {                          // When layers activate
        pad: 0.0,
        arpeggio: 0.3,
        bass: 0.5,
        melody: 0.7,
        percussion: 0.8
      },
      rhythmDensity: { min: 0.1, max: 0.4 },     // Note probability
      dissonance: { min: 0, max: 0.3 },          // Amount of out-of-scale notes
      volume: { min: -20, max: -6 }              // dB
    };
  }

  /**
   * Set target tension level
   * @param {number} tension - Target tension (0-1)
   */
  setTargetTension(tension) {
    this.targetTension = Math.max(0, Math.min(1, tension));
  }

  /**
   * Update tension with smoothing (call each frame or tick)
   * @param {number} deltaTime - Time since last update in seconds
   */
  update(deltaTime = 0.016) {
    const diff = this.targetTension - this.currentTension;
    this.currentTension += diff * this.smoothingFactor;
  }

  /**
   * Get current tension level
   * @returns {number}
   */
  getTension() {
    return this.currentTension;
  }

  /**
   * Map tension to a parameter value
   * @param {string} param - Parameter name
   * @returns {number} - Mapped value
   */
  getParameterValue(param) {
    const mapping = this.mappings[param];
    if (!mapping) return 0;

    if (mapping.min !== undefined && mapping.max !== undefined) {
      return mapping.min + (mapping.max - mapping.min) * this.currentTension;
    }

    return 0;
  }

  /**
   * Check if a layer should be active at current tension
   * @param {string} layer - Layer name
   * @returns {boolean}
   */
  isLayerActive(layer) {
    const threshold = this.mappings.layerThreshold[layer];
    return threshold !== undefined && this.currentTension >= threshold;
  }

  /**
   * Get all parameter values as an object
   * @returns {Object}
   */
  getAllParameters() {
    return {
      tension: this.currentTension,
      filterCutoff: this.getParameterValue('filterCutoff'),
      tempo: this.getParameterValue('tempo'),
      rhythmDensity: this.getParameterValue('rhythmDensity'),
      dissonance: this.getParameterValue('dissonance'),
      volume: this.getParameterValue('volume'),
      activeLayers: Object.keys(this.mappings.layerThreshold)
        .filter(layer => this.isLayerActive(layer))
    };
  }

  /**
   * Calculate tension from game state
   * @param {Object} gameState - Game state object
   * @returns {number} - Calculated tension
   */
  calculateFromGameState(gameState) {
    let tension = 0;

    // Distance from sun (closer = higher tension, as you approach planets)
    if (gameState.distanceFromSun !== undefined) {
      // Normalize: assume 0-200 range
      const normalized = Math.min(gameState.distanceFromSun / 200, 1);
      // Closer to sun or to planets = more tension
      tension += (1 - normalized) * 0.3;
    }

    // Focus on object adds tension
    if (gameState.focusedObject) {
      tension += 0.3;
    }

    // Time warp speed affects tension
    if (gameState.timeWarpSpeed) {
      const warpFactor = Math.log10(Math.max(1, gameState.timeWarpSpeed)) / 3;
      tension += warpFactor * 0.2;
    }

    // Zone affects base tension
    if (gameState.zone === 'interstellar') {
      tension += 0.1; // Slight ambient tension in deep space
    }

    return Math.min(tension, 1);
  }
}

/**
 * Horizontal Re-sequencer
 * Manages musical sections and transitions between them
 */
export class HorizontalResequencer {
  constructor(transport = Tone.Transport) {
    this.transport = transport;
    this.sections = new Map(); // name -> { patterns, duration }
    this.currentSection = null;
    this.nextSection = null;
    this.transitionScheduled = false;
  }

  /**
   * Register a musical section
   * @param {string} name - Section name
   * @param {Object} config - Section configuration
   */
  registerSection(name, config) {
    this.sections.set(name, {
      patterns: config.patterns || [],      // Tone.Part or Tone.Pattern instances
      duration: config.duration || '4m',    // Duration before can transition
      key: config.key || 'C',
      mode: config.mode || 'lydian',
      tempo: config.tempo || 60,
      intensity: config.intensity || 0.5
    });
  }

  /**
   * Start a section immediately
   * @param {string} name - Section name
   */
  startSection(name) {
    const section = this.sections.get(name);
    if (!section) {
      console.warn(`Section "${name}" not found`);
      return;
    }

    // Stop current section
    if (this.currentSection) {
      const current = this.sections.get(this.currentSection);
      if (current) {
        current.patterns.forEach(p => p.stop());
      }
    }

    // Start new section
    section.patterns.forEach(p => p.start());
    this.currentSection = name;

    // Update tempo if different
    if (section.tempo !== this.transport.bpm.value) {
      this.transport.bpm.rampTo(section.tempo, 2);
    }

    console.log(`Started section: ${name}`);
  }

  /**
   * Schedule transition to another section at next musical boundary
   * @param {string} name - Section to transition to
   * @param {string} boundary - When to transition ('1m', '2m', '4m', etc.)
   */
  transitionTo(name, boundary = '1m') {
    if (!this.sections.has(name)) {
      console.warn(`Section "${name}" not found`);
      return;
    }

    if (this.transitionScheduled) {
      // Update the pending transition
      this.nextSection = name;
      return;
    }

    this.nextSection = name;
    this.transitionScheduled = true;

    // Schedule the transition at next boundary
    this.transport.scheduleOnce((time) => {
      this.executeTransition();
    }, `@${boundary}`);
  }

  /**
   * Execute the scheduled transition
   */
  executeTransition() {
    if (!this.nextSection) return;

    const next = this.sections.get(this.nextSection);
    const current = this.currentSection ? this.sections.get(this.currentSection) : null;

    // Crossfade: start next section's patterns while stopping current
    if (current) {
      current.patterns.forEach(p => {
        // Fade out over 1 measure
        if (p.volume) {
          p.volume.rampTo(-Infinity, '1m');
        }
        this.transport.scheduleOnce(() => p.stop(), '+1m');
      });
    }

    // Start next section
    next.patterns.forEach(p => {
      if (p.volume) {
        p.volume.value = -Infinity;
        p.volume.rampTo(0, '1m');
      }
      p.start();
    });

    // Update tempo
    if (next.tempo !== this.transport.bpm.value) {
      this.transport.bpm.rampTo(next.tempo, 4);
    }

    this.currentSection = this.nextSection;
    this.nextSection = null;
    this.transitionScheduled = false;

    console.log(`Transitioned to section: ${this.currentSection}`);
  }

  /**
   * Get current section info
   */
  getCurrentSection() {
    return this.currentSection ? {
      name: this.currentSection,
      ...this.sections.get(this.currentSection)
    } : null;
  }

  /**
   * Stop all sections
   */
  stopAll() {
    this.sections.forEach((section) => {
      section.patterns.forEach(p => p.stop());
    });
    this.currentSection = null;
    this.nextSection = null;
    this.transitionScheduled = false;
  }
}

/**
 * Motif System - Stores and varies melodic motifs
 */
export class MotifSystem {
  constructor() {
    this.motifs = new Map();
    this.currentMotif = null;
  }

  /**
   * Store a motif
   * @param {string} name - Motif name
   * @param {string[]} notes - Array of notes
   */
  store(name, notes) {
    this.motifs.set(name, {
      original: [...notes],
      variations: this.generateVariations(notes)
    });
  }

  /**
   * Generate variations of a motif
   */
  generateVariations(notes) {
    return {
      original: notes,
      inversion: this.invert(notes),
      retrograde: [...notes].reverse(),
      retrogradeInversion: this.invert([...notes].reverse()),
      transposedUp: this.transpose(notes, 2),   // Up a whole step
      transposedDown: this.transpose(notes, -2), // Down a whole step
      augmented: this.augment(notes),           // Double durations (implied)
      diminished: this.diminish(notes)          // Half durations (implied)
    };
  }

  /**
   * Invert a motif (flip intervals)
   */
  invert(notes) {
    if (notes.length < 2) return notes;

    const result = [notes[0]];
    const firstMidi = Tone.Frequency(notes[0]).toMidi();

    for (let i = 1; i < notes.length; i++) {
      const prevMidi = Tone.Frequency(notes[i - 1]).toMidi();
      const currMidi = Tone.Frequency(notes[i]).toMidi();
      const interval = currMidi - prevMidi;
      const newMidi = Tone.Frequency(result[i - 1]).toMidi() - interval; // Flip interval
      result.push(Tone.Frequency(newMidi, 'midi').toNote());
    }

    return result;
  }

  /**
   * Transpose a motif by semitones
   */
  transpose(notes, semitones) {
    return notes.map(note => {
      const midi = Tone.Frequency(note).toMidi();
      return Tone.Frequency(midi + semitones, 'midi').toNote();
    });
  }

  /**
   * Get a random variation of a stored motif
   */
  getVariation(name, type = null) {
    const motif = this.motifs.get(name);
    if (!motif) return [];

    if (type && motif.variations[type]) {
      return motif.variations[type];
    }

    // Random variation
    const types = Object.keys(motif.variations);
    const randomType = types[Math.floor(Math.random() * types.length)];
    return motif.variations[randomType];
  }

  /**
   * Augment (implied - returns notes for longer durations)
   */
  augment(notes) {
    return notes; // Same notes, caller should use longer durations
  }

  /**
   * Diminish (implied - returns notes for shorter durations)
   */
  diminish(notes) {
    return notes; // Same notes, caller should use shorter durations
  }
}

export default {
  MelodyMarkov,
  EuclideanRhythm,
  ChordProgressionGenerator,
  TensionCurve,
  HorizontalResequencer,
  MotifSystem
};
