/**
 * AudioCache - IndexedDB-based caching for large audio files
 *
 * Performance optimization based on research:
 * - Caches decoded audio buffers in IndexedDB
 * - Avoids re-downloading/decoding large files on page reload
 * - Lazy loading support - only load audio when needed
 * - Significantly reduces initial load time
 *
 * Storage strategy:
 * - Stores ArrayBuffers (not decoded AudioBuffers - those can't be serialized)
 * - On cache hit, decodes from cached ArrayBuffer
 * - Includes version/timestamp for cache invalidation
 */

const DB_NAME = 'SolarSystemAudioCache';
const DB_VERSION = 1;
const STORE_NAME = 'audioBuffers';
const CACHE_EXPIRY_DAYS = 30;

class AudioCache {
  constructor() {
    if (AudioCache.instance) {
      return AudioCache.instance;
    }
    AudioCache.instance = this;

    this.db = null;
    this.initialized = false;
    this.initPromise = null;
  }

  /**
   * Initialize IndexedDB connection
   * @returns {Promise<boolean>} - Whether initialization succeeded
   */
  async init() {
    if (this.initialized) return true;
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB not supported - audio caching disabled');
        resolve(false);
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.warn('IndexedDB open failed - audio caching disabled');
        resolve(false);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        this.initialized = true;
        console.log('AudioCache initialized with IndexedDB');
        resolve(true);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Create object store for audio buffers
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'url' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });

    return this.initPromise;
  }

  /**
   * Get cached audio buffer
   * @param {string} url - The audio file URL
   * @returns {Promise<ArrayBuffer|null>} - Cached buffer or null
   */
  async get(url) {
    if (!this.initialized || !this.db) return null;

    return new Promise((resolve) => {
      try {
        const transaction = this.db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(url);

        request.onsuccess = () => {
          const result = request.result;

          if (!result) {
            resolve(null);
            return;
          }

          // Check expiry
          const ageMs = Date.now() - result.timestamp;
          const ageDays = ageMs / (1000 * 60 * 60 * 24);

          if (ageDays > CACHE_EXPIRY_DAYS) {
            // Cache expired - delete and return null
            this.delete(url);
            resolve(null);
            return;
          }

          console.log(`Cache hit for ${url} (${(result.buffer.byteLength / 1024 / 1024).toFixed(1)}MB)`);
          resolve(result.buffer);
        };

        request.onerror = () => {
          console.warn(`Cache read error for ${url}`);
          resolve(null);
        };
      } catch (e) {
        console.warn('Cache get error:', e);
        resolve(null);
      }
    });
  }

  /**
   * Store audio buffer in cache
   * @param {string} url - The audio file URL
   * @param {ArrayBuffer} buffer - The audio data
   * @returns {Promise<boolean>} - Whether storage succeeded
   */
  async set(url, buffer) {
    if (!this.initialized || !this.db) return false;

    return new Promise((resolve) => {
      try {
        const transaction = this.db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const record = {
          url,
          buffer,
          timestamp: Date.now(),
          size: buffer.byteLength
        };

        const request = store.put(record);

        request.onsuccess = () => {
          console.log(`Cached ${url} (${(buffer.byteLength / 1024 / 1024).toFixed(1)}MB)`);
          resolve(true);
        };

        request.onerror = () => {
          console.warn(`Cache write error for ${url}`);
          resolve(false);
        };
      } catch (e) {
        console.warn('Cache set error:', e);
        resolve(false);
      }
    });
  }

  /**
   * Delete cached audio
   * @param {string} url - The audio file URL
   */
  async delete(url) {
    if (!this.initialized || !this.db) return;

    try {
      const transaction = this.db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.delete(url);
    } catch (e) {
      // Ignore delete errors
    }
  }

  /**
   * Clear all cached audio
   */
  async clear() {
    if (!this.initialized || !this.db) return;

    try {
      const transaction = this.db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.clear();
      console.log('Audio cache cleared');
    } catch (e) {
      console.warn('Cache clear error:', e);
    }
  }

  /**
   * Get cache statistics
   * @returns {Promise<Object>} - Cache stats
   */
  async getStats() {
    if (!this.initialized || !this.db) {
      return { entries: 0, totalSize: 0, enabled: false };
    }

    return new Promise((resolve) => {
      try {
        const transaction = this.db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => {
          const entries = request.result || [];
          const totalSize = entries.reduce((sum, e) => sum + (e.size || 0), 0);

          resolve({
            enabled: true,
            entries: entries.length,
            totalSize,
            totalSizeMB: (totalSize / 1024 / 1024).toFixed(1),
            files: entries.map(e => ({
              url: e.url,
              sizeMB: (e.size / 1024 / 1024).toFixed(1),
              ageDays: ((Date.now() - e.timestamp) / (1000 * 60 * 60 * 24)).toFixed(1)
            }))
          });
        };

        request.onerror = () => {
          resolve({ entries: 0, totalSize: 0, enabled: true, error: 'Read error' });
        };
      } catch (e) {
        resolve({ entries: 0, totalSize: 0, enabled: false, error: e.message });
      }
    });
  }
}

// Export singleton
export const audioCache = new AudioCache();
export default audioCache;


/**
 * CachedAudioLoader - Helper for loading audio with caching
 *
 * Usage:
 *   const loader = new CachedAudioLoader();
 *   const buffer = await loader.load('/audio/samples/jupiter.ogg');
 */
export class CachedAudioLoader {
  constructor() {
    this.loadingPromises = new Map(); // Prevent duplicate loads
  }

  /**
   * Load audio with caching
   * @param {string} url - Audio file URL
   * @param {AudioContext} context - Audio context for decoding
   * @returns {Promise<AudioBuffer>} - Decoded audio buffer
   */
  async load(url, context) {
    // Check if already loading
    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url);
    }

    const loadPromise = this._loadWithCache(url, context);
    this.loadingPromises.set(url, loadPromise);

    try {
      const buffer = await loadPromise;
      return buffer;
    } finally {
      this.loadingPromises.delete(url);
    }
  }

  async _loadWithCache(url, context) {
    // Initialize cache if needed
    await audioCache.init();

    // Try cache first
    const cachedBuffer = await audioCache.get(url);
    if (cachedBuffer) {
      // Decode cached ArrayBuffer
      try {
        const audioBuffer = await context.decodeAudioData(cachedBuffer.slice(0));
        return audioBuffer;
      } catch (e) {
        console.warn(`Failed to decode cached audio for ${url}, re-fetching`);
        await audioCache.delete(url);
      }
    }

    // Fetch from network
    console.log(`Fetching ${url} from network...`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();

    // Cache the ArrayBuffer (before decoding)
    await audioCache.set(url, arrayBuffer.slice(0));

    // Decode and return
    const audioBuffer = await context.decodeAudioData(arrayBuffer);
    return audioBuffer;
  }

  /**
   * Preload multiple audio files
   * @param {string[]} urls - URLs to preload
   * @param {AudioContext} context - Audio context
   * @param {Function} onProgress - Progress callback (loaded, total)
   * @returns {Promise<Map<string, AudioBuffer>>} - Map of URL to buffer
   */
  async preloadAll(urls, context, onProgress) {
    const results = new Map();
    let loaded = 0;

    for (const url of urls) {
      try {
        const buffer = await this.load(url, context);
        results.set(url, buffer);
      } catch (e) {
        console.warn(`Failed to preload ${url}:`, e);
      }

      loaded++;
      if (onProgress) {
        onProgress(loaded, urls.length);
      }
    }

    return results;
  }
}
