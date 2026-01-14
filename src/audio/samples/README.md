# NASA Audio Samples

This folder contains authentic NASA space audio files for the solar system simulation.

## Quick Start

Run the download script to automatically fetch all audio files:

```bash
cd src/audio/samples
chmod +x download-nasa-audio.sh
./download-nasa-audio.sh
```

## Audio Sources

All files come from verified Internet Archive collections of NASA public domain recordings.

### Symphonies of the Planets (NASA Voyager)
**Source:** [archive.org/details/SpaceSoundsMusic](https://archive.org/details/SpaceSoundsMusic)

| Filename | Planet | Description |
|----------|--------|-------------|
| `jupiter-radio.flac` | Jupiter | Electromagnetic emissions from Voyager |
| `saturn-radio.flac` | Saturn | Voyager recordings of Saturn |
| `saturn-rings.flac` | Saturn | Saturn's ring plasma sounds |
| `earth-chorus.flac` | Earth | "Song of Earth" electromagnetic chorus |
| `uranus-plasma.flac` | Uranus | Voyager 2 plasma wave recordings |
| `neptune-plasma.flac` | Neptune | Voyager 2 plasma wave recordings |

### Complete Voyager Recordings
**Source:** [archive.org/details/VoyagerRecordings-SymphoniesOfThePlanets15CompleteRecordings](https://archive.org/details/VoyagerRecordings-SymphoniesOfThePlanets15CompleteRecordings)

| Filename | Description |
|----------|-------------|
| `jupiter-symphonies.mp3` | Extended Jupiter recordings |
| `saturn-symphonies.mp3` | Extended Saturn recordings |

### Voyager Golden Record
**Source:** [archive.org/details/TheSoundsOfEarth](https://archive.org/details/TheSoundsOfEarth)

| Filename | Description |
|----------|-------------|
| `voyager-greetings.mp3` | Greetings in 55 languages |
| `sounds-of-earth.mp3` | Natural and human-made sounds |

### Saturn (Cassini)
**Source:** [archive.org/details/NASASoundofSaturn](https://archive.org/details/NASASoundofSaturn)

| Filename | Description |
|----------|-------------|
| `saturn-cassini.mp3` | Cassini RPWS radio emissions |

### Mars Perseverance
**Source:** [archive.org/details/soundcloud-990395395](https://archive.org/details/soundcloud-990395395)

| Filename | Description |
|----------|-------------|
| `mars-wind.mp3` | Martian wind (filtered, no rover noise) |
| `mars-atmosphere.mp3` | Mars atmosphere with rover sounds |

## Manual Download

If the script doesn't work, download files manually from these Internet Archive collections:

1. **Space Sounds Music:** https://archive.org/details/SpaceSoundsMusic
2. **Voyager Recordings:** https://archive.org/details/VoyagerRecordings-SymphoniesOfThePlanets15CompleteRecordings
3. **Golden Record:** https://archive.org/details/TheSoundsOfEarth
4. **Sound of Saturn:** https://archive.org/details/NASASoundofSaturn

## License

All NASA audio is public domain and free to use.

## Usage

Once files are downloaded, the NASASounds.js module will automatically detect and use them, falling back to synthesized sounds for any missing files.

The manifest (`audioManifest.js`) supports multiple file formats per planet, trying each in order until one loads successfully.
