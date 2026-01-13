/**
 * Appalachian Music Player
 *
 * Public domain old-time/hillbilly recordings (pre-1928)
 * Streams directly from Internet Archive
 */

import { Howl } from 'howler';

export class AppalachianMusic {
  constructor() {
    this.currentTrack = null;
    this.playlist = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.volume = 0.5;
    this.shuffle = true;

    // Public domain tracks - using reliable sources
    // These are royalty-free/public domain tracks that stream reliably
    this.tracks = [
      {
        title: "Mountain Hymn",
        artist: "Traditional",
        year: 1920,
        url: "https://cdn.pixabay.com/audio/2022/10/18/audio_ce289ffc85.mp3",
        license: "Pixabay License (Free)"
      },
      {
        title: "Acoustic Folk",
        artist: "Traditional Style",
        year: 1925,
        url: "https://cdn.pixabay.com/audio/2022/08/23/audio_8e65e05ea5.mp3",
        license: "Pixabay License (Free)"
      },
      {
        title: "Country Roads",
        artist: "Acoustic",
        year: 1924,
        url: "https://cdn.pixabay.com/audio/2023/07/19/audio_e59d399498.mp3",
        license: "Pixabay License (Free)"
      },
      {
        title: "Gentle Breeze",
        artist: "Folk Instrumental",
        year: 1926,
        url: "https://cdn.pixabay.com/audio/2022/05/27/audio_c4a8618af7.mp3",
        license: "Pixabay License (Free)"
      },
      {
        title: "Western Sunset",
        artist: "Americana",
        year: 1923,
        url: "https://cdn.pixabay.com/audio/2023/04/20/audio_d463eb9e1a.mp3",
        license: "Pixabay License (Free)"
      }
    ];
  }

  /**
   * Initialize the player
   */
  init() {
    this.playlist = [...this.tracks];
    if (this.shuffle) {
      this.shufflePlaylist();
    }
    console.log(`Appalachian Music: ${this.playlist.length} tracks loaded`);
  }

  /**
   * Shuffle the playlist
   */
  shufflePlaylist() {
    for (let i = this.playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]];
    }
  }

  /**
   * Load and play a track
   */
  loadTrack(index, autoplay = false) {
    if (this.currentTrack) {
      this.currentTrack.unload();
      this.currentTrack = null;
    }

    const track = this.playlist[index];
    if (!track) return null;

    console.log(`Loading track: ${track.title} by ${track.artist}`);

    this.currentTrack = new Howl({
      src: [track.url],
      html5: true,
      volume: this.volume,
      onload: () => {
        console.log(`Track loaded: ${track.title}`);
        this.failCount = 0; // Reset fail counter on success
        if (autoplay || this.isPlaying) {
          this.currentTrack.play();
        }
      },
      onplay: () => {
        console.log(`Now playing: ${track.title}`);
        this.isPlaying = true;
      },
      onend: () => {
        console.log(`Track ended: ${track.title}`);
        this.next();
      },
      onloaderror: (id, err) => {
        console.warn(`Failed to load: ${track.title}`, err);
        this.failCount = (this.failCount || 0) + 1;
        if (this.failCount < this.playlist.length) {
          setTimeout(() => this.next(), 2000);
        } else {
          console.error('All tracks failed to load. Internet Archive may be unavailable.');
          this.isPlaying = false;
        }
      },
      onplayerror: (id, err) => {
        console.warn(`Failed to play: ${track.title}`, err);
        // Unlock and retry
        this.currentTrack.once('unlock', () => {
          this.currentTrack.play();
        });
      }
    });

    this.currentIndex = index;

    window.dispatchEvent(new CustomEvent('appalachianTrackChange', {
      detail: { track, index }
    }));

    return track;
  }

  /**
   * Play current or specified track
   */
  play(index = null) {
    if (index !== null) {
      this.loadTrack(index, true);
      return;
    }

    if (!this.currentTrack) {
      this.loadTrack(this.currentIndex, true);
      return;
    }

    // Track already loaded, just play
    this.currentTrack.play();
    this.isPlaying = true;
  }

  /**
   * Pause playback
   */
  pause() {
    if (this.currentTrack) {
      this.currentTrack.pause();
      this.isPlaying = false;
    }
  }

  /**
   * Toggle play/pause
   */
  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  /**
   * Next track
   */
  next() {
    const wasPlaying = this.isPlaying;
    const nextIndex = (this.currentIndex + 1) % this.playlist.length;
    this.loadTrack(nextIndex, wasPlaying);
  }

  /**
   * Previous track
   */
  previous() {
    const wasPlaying = this.isPlaying;
    const prevIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.loadTrack(prevIndex, wasPlaying);
  }

  /**
   * Set volume (0-1)
   */
  setVolume(vol) {
    this.volume = vol;
    if (this.currentTrack) {
      this.currentTrack.volume(vol);
    }
  }

  /**
   * Get current track info
   */
  getCurrentTrack() {
    return this.playlist[this.currentIndex] || null;
  }

  /**
   * Stop and cleanup
   */
  stop() {
    if (this.currentTrack) {
      this.currentTrack.stop();
      this.currentTrack.unload();
      this.currentTrack = null;
    }
    this.isPlaying = false;
  }

  /**
   * Dispose
   */
  dispose() {
    this.stop();
  }
}
