/**
 * ====================================================================
 * SAUMYAFLIX — CENTRALIZED MEDIA CONFIGURATION (media.js)
 * ====================================================================
 * All local media paths for Hero, Video Episodes, Audio, Memories,
 * Gallery, and Timeline are centralized here.
 */

export const FALLBACKS = {
  hero: "/images/fallbacks/hero-fallback.svg",
  memory: "/images/fallbacks/memory-fallback.svg",
  gallery: "/images/fallbacks/gallery-fallback.svg",
  timeline: "/images/fallbacks/timeline-fallback.svg",
};

/**
 * Graceful image error handler
 * Automatically replaces missing local images with an elegant romantic fallback
 */
export const handleImageFallback = (event, type = "memory") => {
  if (!event || !event.currentTarget) return;
  event.currentTarget.onerror = null;
  event.currentTarget.src = FALLBACKS[type] || FALLBACKS.memory;
};

// 1. Hero Section Media
export const HERO_MEDIA = {
  image: "/images/hero/saumya-hero.jpg",
  fallback: FALLBACKS.hero,
  title: "Saumya Hero Banner",
};

// 2. Background Music
export const AUDIO_MEDIA = {
  file: "/music/background.mp3",
  title: "Saumya's Birthday Theme",
  artist: "Composed with Love for You",
};

// 3. 3-Part Birthday Special Video Episodes
export const EPISODES = [
  {
    id: "ep-1",
    episodeNumber: 1,
    title: "Episode 1: The Spark & Memories",
    subtitle: "A story that changed my world forever",
    file: "/videos/episode-1.mp4",
    duration: "Special Edition",
    thumbnail: "/images/memories/mem-1.jpg"
  },
  {
    id: "ep-2",
    episodeNumber: 2,
    title: "Episode 2: Adventures With You",
    subtitle: "Every laugh, every journey, every smile",
    file: "/videos/episode-2.mp4",
    duration: "Special Edition",
    thumbnail: "/images/timeline/timeline-4.jpg"
  },
  {
    id: "ep-3",
    episodeNumber: 3,
    title: "Episode 3: The Birthday Special",
    subtitle: "Celebrating the queen of my heart",
    file: "/videos/episode-3.mp4",
    duration: "Grand Finale",
    thumbnail: "/images/gallery/gallery-1.jpg"
  }
];

// Single Trailer Reference (defaults to Episode 1)
export const VIDEO_MEDIA = {
  file: "/videos/birthday-trailer.mp4",
  thumbnail: "/images/hero/saumya-hero.jpg",
  episodes: EPISODES
};

// 4. Netflix Memory Carousel Rows Media
export const MEMORIES_MEDIA = {
  // Row 1: OUR BEAUTIFUL MEMORIES
  "mem-1": "/images/memories/mem-1.jpg", // The Day We First Met
  "mem-2": "/images/memories/mem-2.jpg", // Late Night Conversations
  "mem-3": "/images/memories/mem-3.jpg", // Our Unplanned Road Trip
  "mem-4": "/images/memories/mem-4.jpg", // The Rainy Day Cafe
  "mem-5": "/images/memories/mem-5.jpg", // That Perfect Golden Hour

  // Row 2: THE STORY OF US
  "story-1": "/images/memories/story-1.jpg", // Season 1: The Spark
  "story-2": "/images/memories/story-2.jpg", // Season 2: Growing Closer
  "story-3": "/images/memories/story-3.jpg", // Season 3: Inseparable
  "story-4": "/images/memories/story-4.jpg", // Season 4: Celebrating Saumya

  // Row 3: THINGS I LOVE ABOUT YOU
  "love-1": "/images/memories/love-1.jpg", // Your Radiant Smile
  "love-2": "/images/memories/love-2.jpg", // Your Beautiful Heart
  "love-3": "/images/memories/love-3.jpg", // Your Silly Little Habits
  "love-4": "/images/memories/love-4.jpg", // Your Passion & Dreams
  "love-5": "/images/memories/love-5.jpg", // The Comfort of Your Hugs

  // Row 4: MY FAVOURITE MOMENTS
  "fav-1": "/images/memories/fav-1.jpg", // Midnight Birthday Countdown
  "fav-2": "/images/memories/fav-2.jpg", // Laughing Until We Cried
  "fav-3": "/images/memories/fav-3.jpg", // Sunset by the Horizon
  "fav-4": "/images/memories/fav-4.jpg", // Cooking Disasters & Takeout

  // Row 5: MADE ESPECIALLY FOR YOU
  "spec-1": "/images/memories/special-1.jpg", // Lifetime Subscription to Love
  "spec-2": "/images/memories/special-2.jpg", // VIP Pass to My Heart
  "spec-3": "/images/memories/special-3.jpg", // The Birthday Wish Coupon
  "spec-4": "/images/memories/special-4.jpg", // The Saumya Fan Club
};

// 5. Photo Memory Gallery Media
export const GALLERY_MEDIA = {
  "gal-1": "/images/gallery/gallery-1.jpg", // Sunset Glow (Beautiful Moments)
  "gal-2": "/images/gallery/gallery-2.jpg", // Her Radiance (Her Beautiful Smile)
  "gal-3": "/images/gallery/gallery-3.jpg", // Walking Side by Side (Together Forever)
  "gal-4": "/images/gallery/gallery-4.jpg", // Unfiltered Laughter (Random Memories)
  "gal-5": "/images/gallery/gallery-5.jpg", // Celebration Lights (Special Days)
  "gal-6": "/images/gallery/gallery-6.jpg", // Stolen Glances (Beautiful Moments)
  "gal-7": "/images/gallery/gallery-7.jpg", // Coffee & Daydreams (Random Memories)
  "gal-8": "/images/gallery/gallery-8.jpg", // Birthday Cheer (Special Days)
};

// 6. Relationship Timeline Media
export const TIMELINE_MEDIA = {
  "time-1": "/images/timeline/timeline-1.jpg", // Chapter 1: The First Hello
  "time-2": "/images/timeline/timeline-2.jpg", // Chapter 2: Our First Long Conversation
  "time-3": "/images/timeline/timeline-3.jpg", // Chapter 3: The First Time You Smiled at Me
  "time-4": "/images/timeline/timeline-4.jpg", // Chapter 4: Unforgettable Adventures
  "time-5": "/images/timeline/timeline-5.jpg", // Chapter 5: Today & Every Tomorrow
};

export default {
  HERO_MEDIA,
  AUDIO_MEDIA,
  VIDEO_MEDIA,
  EPISODES,
  MEMORIES_MEDIA,
  GALLERY_MEDIA,
  TIMELINE_MEDIA,
  FALLBACKS,
  handleImageFallback,
};
