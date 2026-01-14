#!/bin/bash
# NASA Audio Download Script for Solar System Simulation
# Downloads authentic NASA space sounds from Internet Archive
#
# Usage: chmod +x download-nasa-audio.sh && ./download-nasa-audio.sh

echo "🚀 NASA Audio Download Script"
echo "=============================="
echo ""
echo "Using verified Internet Archive sources"
echo ""

# Change to script directory
cd "$(dirname "$0")"

# Function to download with retry and validation
download_file() {
    local url="$1"
    local filename="$2"
    local description="$3"

    echo "📥 Downloading: $description"
    echo "   URL: $url"

    if curl -L -o "$filename" "$url" --max-time 180 --retry 3 -f 2>/dev/null; then
        local size=$(ls -lh "$filename" 2>/dev/null | awk '{print $5}')
        local filetype=$(file -b "$filename" 2>/dev/null | head -c 40)

        # Verify it's actually audio (not HTML error page)
        if [[ "$filetype" == *"Audio"* ]] || [[ "$filetype" == *"MPEG"* ]] || [[ "$filetype" == *"RIFF"* ]] || [[ "$filetype" == *"Ogg"* ]] || [[ "$filetype" == *"FLAC"* ]] || [[ "$filetype" == *"Vorbis"* ]]; then
            echo "   ✅ Success: $filename ($size) - $filetype"
            return 0
        else
            echo "   ⚠️  Downloaded but may not be audio: $filetype"
            echo "   File saved anyway - please verify manually"
            return 0
        fi
    else
        echo "   ❌ Failed: $filename"
        rm -f "$filename"  # Remove partial/failed downloads
        return 1
    fi
    echo ""
}

echo "=== Space Sounds Music (NASA Voyager) ==="
echo "Source: https://archive.org/details/SpaceSoundsMusic"
echo ""

# These are OGG files from SpaceSoundsMusic collection
download_file \
    "https://archive.org/download/SpaceSoundsMusic/Jupiter.ogg" \
    "jupiter-radio.ogg" \
    "Jupiter (NASA Voyager Recording)"

download_file \
    "https://archive.org/download/SpaceSoundsMusic/Saturn.ogg" \
    "saturn-radio.ogg" \
    "Saturn (NASA Voyager Recording)"

download_file \
    "https://archive.org/download/SpaceSoundsMusic/Saturns%20Rings.ogg" \
    "saturn-rings.ogg" \
    "Saturn's Rings (NASA Voyager Recording)"

download_file \
    "https://archive.org/download/SpaceSoundsMusic/Song%20of%20Earth.ogg" \
    "earth-chorus.ogg" \
    "Song of Earth (NASA Voyager Recording)"

download_file \
    "https://archive.org/download/SpaceSoundsMusic/Uranus.ogg" \
    "uranus-plasma.ogg" \
    "Uranus (NASA Voyager Recording)"

download_file \
    "https://archive.org/download/SpaceSoundsMusic/Neptune.ogg" \
    "neptune-plasma.ogg" \
    "Neptune (NASA Voyager Recording)"

echo "=== Voyager Audio Log ==="
echo "Source: https://archive.org/details/VoyagerAudioLog_139"
echo ""

# Alternative planet sounds from Voyager Audio Log
download_file \
    "https://archive.org/download/VoyagerAudioLog_139/02JupiterElectricStorms.ogg" \
    "jupiter-storms.ogg" \
    "Jupiter Electric Storms"

download_file \
    "https://archive.org/download/VoyagerAudioLog_139/05Saturn900mphCyclone.ogg" \
    "saturn-cyclone.ogg" \
    "Saturn 900mph Cyclone"

download_file \
    "https://archive.org/download/VoyagerAudioLog_139/01MARSTheRedDesert.ogg" \
    "mars-desert.ogg" \
    "Mars - The Red Desert"

echo "=== Voyager Golden Record ==="
echo "Source: https://archive.org/details/TheSoundsOfEarth"
echo ""

download_file \
    "https://archive.org/download/TheSoundsOfEarth/02_Greetings%20In%2055%20Languages.mp3" \
    "voyager-greetings.mp3" \
    "Voyager Golden Record - Greetings in 55 Languages"

download_file \
    "https://archive.org/download/TheSoundsOfEarth/04_The%20Sounds%20Of%20Earth.mp3" \
    "sounds-of-earth.mp3" \
    "Voyager Golden Record - Sounds of Earth"

echo "=== Symphonies of the Planets 4 ==="
echo "Source: https://archive.org/details/4-01-symphonies-of-the-planets-4"
echo ""

# VBR MP3 from Symphonies of Planets 4
download_file \
    "https://archive.org/download/4-01-symphonies-of-the-planets-4/Symphonies%20Of%20The%20Planets%204%20-%20NASA%20Voyager%20Recordings.mp3" \
    "symphonies-4.mp3" \
    "Symphonies of the Planets 4 (Full Album)"

echo "=== NASA Sound of Saturn ==="
echo "Source: https://archive.org/details/NASASoundofSaturn"
echo ""

# Saturn from dedicated collection
download_file \
    "https://archive.org/download/NASASoundofSaturn/Sound%20of%20Saturn.ogg" \
    "saturn-cassini.ogg" \
    "Saturn Radio Emissions (Cassini)"

echo "=============================="
echo "Download complete!"
echo ""
echo "Files in samples directory:"
ls -lah *.mp3 *.ogg *.wav 2>/dev/null || echo "No audio files found"
echo ""

# Count successful downloads
audio_count=$(ls *.mp3 *.ogg *.wav 2>/dev/null | wc -l)
echo "📊 Downloaded $audio_count audio files"
echo ""

if [ "$audio_count" -eq 0 ]; then
    echo "⚠️  No files downloaded. Try downloading manually from:"
    echo "   https://archive.org/details/SpaceSoundsMusic"
    echo "   https://archive.org/details/VoyagerAudioLog_139"
    echo "   https://archive.org/details/TheSoundsOfEarth"
else
    echo "✅ Audio files ready for the solar system simulation!"
    echo ""
    echo "💡 The simulation will automatically detect and use these files."
    echo "   Missing planets will fall back to synthesized sounds."
fi
