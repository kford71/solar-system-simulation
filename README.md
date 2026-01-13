# Interactive 3D Solar System Simulation

A visually impressive 3D solar system simulation built with Three.js and Vite. Experience our solar system with realistic orbital mechanics, beautiful visual effects, atmospheric glows, audio feedback, and comprehensive interactive controls.

## Features

### Celestial Bodies
- **The Sun** - Animated surface with solar flares, corona effect, and lens flare
- **All 8 Planets** - Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune
- **Dwarf Planets** - Pluto (with Charon) and Ceres
- **Moons**:
  - Earth's Moon (with phase rendering)
  - Mars: Phobos and Deimos
  - Jupiter: Io, Europa, Ganymede, Callisto (Galilean moons)
  - Saturn: Titan (with atmosphere)
  - Pluto: Charon
- **Planetary Rings**:
  - Saturn's Rings - Procedurally generated with realistic banding and Cassini Division
  - Uranus's Rings - Faint, dark ring system
- **Asteroid Belt** - 3,000 instanced asteroids between Mars and Jupiter
- **Kuiper Belt** - 2,000 particles beyond Neptune
- **Comet** - Halley's-style comet with elliptical orbit and dual particle tails

### Visual Effects
- High-quality textures from Solar System Scope
- **Milky Way Background** - Subtle galactic band with nebula glow patches
- 20,000+ star background with color variations
- **Atmospheric Glow** - Earth (blue), Venus (yellow), Mars (red), and gas giants
- **Atmospheric Scattering** - Sunrise/sunset orange glow on planet terminators
- **Earth Night Lights** - City lights shader visible on Earth's dark side
- **Jupiter's Great Red Spot** - Animated swirling storm texture
- **Moon Phases** - Earth's Moon shows realistic phases based on Sun position
- Bloom/glow postprocessing on Sun and atmospheres
- Animated solar flares and prominences
- Lens flare effect when viewing the Sun
- Realistic lighting from the Sun illuminating planets
- Day/night shading based on planet orientation
- Independent cloud rotation on Earth

### Comet Features
- Highly elliptical orbit (like Halley's Comet)
- Glowing nucleus with coma
- Dual particle tails:
  - Dust tail (curved, yellow-white)
  - Ion tail (straight, blue)
- Tail length and brightness increases near perihelion

### Orbital Mechanics
- Accurate relative orbital periods (Kepler's laws simplified)
- Planetary rotation on tilted axes with accurate axial tilts
- Moon orbital mechanics around their parent planets
- Tidally locked rotation for moons

### Audio System
- **Ambient Space Drone** - Continuous atmospheric hum
- **Focus Sounds** - Whoosh/zoom when camera focuses on a new planet
- **Click Sounds** - Ping/chime when clicking on a celestial body
- **Unique Planet Tones** - Lower pitch for larger planets, higher for smaller
- **Volume Controls**:
  - Master volume slider
  - Separate ambient volume
  - UI sounds volume
- Audio starts muted (browser autoplay policy) with "Click to enable sound" prompt

### Interactivity
- **OrbitControls** - Rotate, zoom, and pan the camera
- **Click to Focus** - Click any celestial body to zoom in
- **Enhanced Info Panel**:
  - Planet/moon icon
  - Current distance from Sun (AU and km)
  - Orbital position (degrees)
  - Detailed facts
  - Earth comparison (size, gravity, mass)
- **lil-gui Control Panel**:
  - Adjust simulation speed (0-5x)
  - Pause/Resume toggle
  - Toggle planet labels
  - Toggle orbit path lines
  - Toggle mini-map
  - Quick-focus dropdown menu
  - Audio mute toggle
  - Volume sliders
- **Hover Effect** - Planets highlight with cyan outline when hovered

### Educational Features
- **Time Display** - Shows simulated date based on orbital positions
- **Timeline Slider** - Scrub through time (-100 to +100 years)
- **2D Mini-map** - Top-down view showing planet positions
- **Distance Indicator** - Real-time distance from Sun when focused

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0` | Focus on Sun |
| `1-8` | Focus on planets (Mercury-Neptune) |
| `P` | Focus on Pluto |
| `C` | Focus on Ceres |
| `Space` | Pause/Resume simulation |
| `R` | Reset camera to default view |
| `M` | Toggle audio mute |
| `Escape` | Close info panel |

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. Navigate to the project directory:
```bash
cd solar-system-simulation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to http://localhost:5173

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Controls

| Action | Control |
|--------|---------|
| Rotate view | Left-click + drag |
| Zoom | Scroll wheel |
| Pan | Right-click + drag |
| Select planet | Click on planet |
| Close info panel | Click X or press Escape |

## Project Structure

```
solar-system-simulation/
├── index.html              # Main HTML entry point
├── style.css               # Global styles and UI styling
├── src/
│   ├── main.js             # Application entry point
│   ├── components/
│   │   ├── Sun.js          # Sun with flares, corona, lens flare
│   │   ├── Planet.js       # Planet class with atmospheres, moons, rings
│   │   ├── AsteroidBelt.js # Instanced asteroid belt
│   │   ├── KuiperBelt.js   # Kuiper belt particles
│   │   ├── Starfield.js    # Background stars with Milky Way
│   │   ├── Comet.js        # Comet with elliptical orbit and tails
│   │   ├── AudioSystem.js  # Web Audio API sound system
│   │   └── Controls.js     # Camera, UI, keyboard, minimap, audio
│   ├── data/
│   │   └── planetData.js   # Planet, moon, dwarf planet, comet data
│   └── utils/              # Utility functions
├── public/
│   └── textures/           # Local texture storage
├── package.json
└── README.md
```

## Technical Notes

- ES6 modules throughout
- Three.js for 3D rendering
- Web Audio API for spatial sound
- Postprocessing pipeline (EffectComposer, UnrealBloomPass)
- Custom GLSL shaders:
  - Sun surface animation
  - Earth day/night with city lights
  - Jupiter Great Red Spot animation
  - Atmospheric glow with scattering
  - Moon phase rendering
- Instanced rendering for asteroids and Kuiper belt
- Responsive design adapts to window size
- Textures from Solar System Scope and Three.js repositories

## Data Sources

Planetary data based on NASA fact sheets:
- Orbital distances scaled for visibility
- Planet sizes scaled while maintaining relative proportions
- Orbital periods maintain accurate ratios
- Axial tilts are accurate

## Browser Compatibility

Requires modern browser with WebGL 2 and Web Audio support:
- Chrome 56+
- Firefox 51+
- Safari 15+
- Edge 79+

## License

MIT
