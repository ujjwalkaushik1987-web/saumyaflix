import {
  HERO_MEDIA,
  AUDIO_MEDIA,
  VIDEO_MEDIA,
  MEMORIES_MEDIA,
  GALLERY_MEDIA,
  TIMELINE_MEDIA,
  FALLBACKS
} from './media';

/**
 * ====================================================================
 * SAUMYAFLIX — CENTRALIZED CONTENT CONFIGURATION
 * ====================================================================
 * All texts, dates, romantic messages, and metadata are customized here.
 * All media paths are centralized via `media.js`.
 */

export const CONFIG = {
  // Personal Details
  recipientName: "Saumya",
  recipientNickname: "My Sunshine",
  senderName: "With All My Love",
  birthdayDate: "November 5",
  birthdayYear: "2026",
  ageYears: "Special Edition",
  relationshipMilestone: "Chapter Forever",

  // Streaming Platform Metadata
  siteTitle: "SAUMYAFLIX",
  tagline: "An Original Love Story",
  subTagline: "Starring: Saumya ❤️",
  creatorCredit: "Created with love, just for you.",
  matchPercentage: "99.9%",
  maturityRating: "All Ages",
  soundQuality: "Dolby Romance 7.1",
  videoQuality: "4K Ultra Love",

  // Audio & Media Paths (from media.js)
  musicFile: AUDIO_MEDIA.file,
  musicTitle: AUDIO_MEDIA.title,
  musicArtist: AUDIO_MEDIA.artist,

  // Video trailer path
  videoFile: VIDEO_MEDIA.file,
  videoThumbnail: VIDEO_MEDIA.thumbnail,

  // Fallbacks
  fallbacks: FALLBACKS,

  // Hero Section
  hero: {
    title: "Happy Birthday, Saumya ❤️",
    subtitle: "A beautiful soul. A million memories. An endless story.",
    overview: "In a world of billions, this universe made you. Today we celebrate the most wonderful person to ever walk into my life. Every laugh we shared, every quiet glance, and every dream we spoke into the midnight sky leads to this special moment.",
    backgroundImage: HERO_MEDIA.image,
    fallbackImage: HERO_MEDIA.fallback,
    tags: ["Romantic Collection", "Special Birthday Edition", "99% Match", "Made with Love", "2026"],
  },

  // Romantic Love Letter (Section 6)
  loveLetter: {
    sectionTitle: "A Letter From My Heart",
    subtitle: "Click the envelope to read what words could never fully contain.",
    salutation: "Dear Saumya,",
    paragraphs: [
      "I don't know how to put everything into words, but I just want you to know how special you are.",
      "Your smile, your little habits, your beautiful heart, and the way you make ordinary moments feel special mean more than words can explain.",
      "On your birthday, I wish you endless happiness, beautiful opportunities, and all the love this world has to offer.",
      "Keep smiling, keep shining, and always remember how precious you are."
    ],
    closing: "Happy Birthday, Saumya. ❤️",
    postscript: "P.S. You will always be my favorite story."
  },

  // Birthday Surprise Experience (Section 10)
  birthdaySurprise: {
    bannerTitle: "HAPPY BIRTHDAY, SAUMYA! ❤️",
    messageParagraph1: "You deserve all the happiness, love, peace, and beautiful moments in this world.",
    messageParagraph2: "May your smile never fade, may your dreams come true, and may life always give you reasons to be happy.",
    highlightText: "Today is all about YOU.",
    hugButtonText: "One More Hug ❤️",
    hugMessage: "Sending you the warmest, warmest infinite hug! You make every single day brighter just by being you. Happy Birthday, my love! 🥰✨"
  },

  // Timeline of Relationship Milestones
  timeline: [
    {
      id: "time-1",
      date: "Chapter 1",
      title: "The First Hello",
      description: "A simple introduction that quietly changed my entire world forever. Who knew a single greeting could spark an endless story?",
      image: TIMELINE_MEDIA["time-1"],
      tag: "The Spark",
      emoji: "✨"
    },
    {
      id: "time-2",
      date: "Chapter 2",
      title: "Our First Long Conversation",
      description: "Hours vanished like minutes as we talked about everything and nothing. I realized I could listen to your voice forever.",
      image: TIMELINE_MEDIA["time-2"],
      tag: "Midnight Talks",
      emoji: "☕"
    },
    {
      id: "time-3",
      date: "Chapter 3",
      title: "The First Time You Smiled at Me",
      description: "That genuine, crinkly-eyed smile that still makes my heart skip a beat every single time I see it.",
      image: TIMELINE_MEDIA["time-3"],
      tag: "Magic",
      emoji: "🌸"
    },
    {
      id: "time-4",
      date: "Chapter 4",
      title: "Unforgettable Adventures",
      description: "Whether exploring new streets, getting lost together, or laughing until our stomachs hurt, every place is home with you.",
      image: TIMELINE_MEDIA["time-4"],
      tag: "Wanderlust",
      emoji: "🗺️"
    },
    {
      id: "time-5",
      date: "Chapter 5",
      title: "Today & Every Tomorrow",
      description: "Celebrating another year of your incredible existence. The best chapters of our story are still waiting to be written.",
      image: TIMELINE_MEDIA["time-5"],
      tag: "Birthday Girl",
      emoji: "🎂"
    }
  ],

  // Gallery Categories & Photos
  galleryCategories: [
    "All Memories",
    "Beautiful Moments",
    "Together Forever",
    "Random Memories",
    "Her Beautiful Smile",
    "Special Days"
  ],

  galleryPhotos: [
    {
      id: "gal-1",
      title: "Sunset Glow",
      category: "Beautiful Moments",
      date: "Golden Hour",
      image: GALLERY_MEDIA["gal-1"],
      caption: "The golden sun will never shine as bright as your smile.",
      likes: 128
    },
    {
      id: "gal-2",
      title: "Her Radiance",
      category: "Her Beautiful Smile",
      date: "Always Beautiful",
      image: GALLERY_MEDIA["gal-2"],
      caption: "That million-watt smile that can turn any cloudy day into sunshine.",
      likes: 245
    },
    {
      id: "gal-3",
      title: "Walking Side by Side",
      category: "Together Forever",
      date: "Every Step",
      image: GALLERY_MEDIA["gal-3"],
      caption: "Holding your hand is my favorite place in the whole universe.",
      likes: 310
    },
    {
      id: "gal-4",
      title: "Unfiltered Laughter",
      category: "Random Memories",
      date: "Spontaneous Joy",
      image: GALLERY_MEDIA["gal-4"],
      caption: "The silly candid moments we cherish more than any planned picture.",
      likes: 189
    },
    {
      id: "gal-5",
      title: "Celebration Lights",
      category: "Special Days",
      date: "Birthday Eve",
      image: GALLERY_MEDIA["gal-5"],
      caption: "Fairy lights, sweet wishes, and celebrating the queen of my heart.",
      likes: 276
    },
    {
      id: "gal-6",
      title: "Stolen Glances",
      category: "Beautiful Moments",
      date: "Sweet Serendipity",
      image: GALLERY_MEDIA["gal-6"],
      caption: "Caught you looking, and my whole heart melted instantly.",
      likes: 412
    },
    {
      id: "gal-7",
      title: "Coffee & Daydreams",
      category: "Random Memories",
      date: "Lazy Morning",
      image: GALLERY_MEDIA["gal-7"],
      caption: "Warm cups, sweet glances, and dream-filled conversations.",
      likes: 154
    },
    {
      id: "gal-8",
      title: "Birthday Cheer",
      category: "Special Days",
      date: "A Day to Remember",
      image: GALLERY_MEDIA["gal-8"],
      caption: "Wishing you a year as extraordinary as the joy you give everyone around you.",
      likes: 520
    }
  ],

  // Netflix Horizontal Rows
  rows: [
    {
      id: "row-memories",
      title: "OUR BEAUTIFUL MEMORIES",
      badge: "Trending in Our Hearts",
      items: [
        {
          id: "mem-1",
          title: "The Day We First Met",
          subtitle: "Where everything began",
          image: MEMORIES_MEDIA["mem-1"],
          match: "99% Match",
          duration: "Timeless",
          tags: ["Destiny", "First Glance", "Unforgettable"],
          description: "A moment etched into my mind forever. The universe aligned just so our paths could cross."
        },
        {
          id: "mem-2",
          title: "Late Night Conversations",
          subtitle: "Whispers under the stars",
          image: MEMORIES_MEDIA["mem-2"],
          match: "100% Match",
          duration: "4h 22m",
          tags: ["Heart-to-Heart", "Deep Talks", "Midnight"],
          description: "When 2 AM felt like noon because every word you spoke was mesmerizing."
        },
        {
          id: "mem-3",
          title: "Our Unplanned Road Trip",
          subtitle: "Getting lost on purpose",
          image: MEMORIES_MEDIA["mem-3"],
          match: "98% Match",
          duration: "Full Season",
          tags: ["Adventure", "Wanderer", "Joy"],
          description: "Wrong turns that led to the right views, all with the greatest companion beside me."
        },
        {
          id: "mem-4",
          title: "The Rainy Day Cafe",
          subtitle: "Warm coffee & sweet laughter",
          image: MEMORIES_MEDIA["mem-4"],
          match: "99% Match",
          duration: "Cozy Edition",
          tags: ["Rainy Day", "Cozy", "Laughter"],
          description: "Rain drops racing on the window pane while we laughed until our drinks got cold."
        },
        {
          id: "mem-5",
          title: "That Perfect Golden Hour",
          subtitle: "Sunset in your eyes",
          image: MEMORIES_MEDIA["mem-5"],
          match: "100% Match",
          duration: "Cinematic",
          tags: ["Golden Hour", "Pure Magic", "Glow"],
          description: "When the sky was painted pink and gold, but I couldn't take my eyes off you."
        }
      ]
    },
    {
      id: "row-story",
      title: "THE STORY OF US",
      badge: "Critically Acclaimed",
      items: [
        {
          id: "story-1",
          title: "Season 1: The Spark",
          subtitle: "How two worlds collided",
          image: MEMORIES_MEDIA["story-1"],
          match: "99% Match",
          duration: "Pilot Episode",
          tags: ["Destiny", "First Hello", "Magic"],
          description: "The unforgettable premiere of our relationship. Every second felt like a movie scene."
        },
        {
          id: "story-2",
          title: "Season 2: Growing Closer",
          subtitle: "Sharing secrets & silly jokes",
          image: MEMORIES_MEDIA["story-2"],
          match: "98% Match",
          duration: "High Rated",
          tags: ["Closeness", "Secrets", "Smiles"],
          description: "Learning all your favorite songs, your quirks, and the things that make you you."
        },
        {
          id: "story-3",
          title: "Season 3: Inseparable",
          subtitle: "Two hearts beating in sync",
          image: MEMORIES_MEDIA["story-3"],
          match: "100% Match",
          duration: "Blockbuster",
          tags: ["Together", "Stronger", "Unbreakable"],
          description: "Facing every day hand in hand. Knowing you're always there makes everything possible."
        },
        {
          id: "story-4",
          title: "Season 4: Celebrating Saumya",
          subtitle: "The Birthday Grand Finale",
          image: MEMORIES_MEDIA["story-4"],
          match: "100% Match",
          duration: "New Release",
          tags: ["Birthday Special", "Queen", "Joy"],
          description: "A premier celebration dedicated entirely to the girl who brings wonder into my life."
        }
      ]
    },
    {
      id: "row-love-about-you",
      title: "THINGS I LOVE ABOUT YOU",
      badge: "Top 10 in My Universe",
      items: [
        {
          id: "love-1",
          title: "Your Radiant Smile",
          subtitle: "Lights up the whole room",
          image: MEMORIES_MEDIA["love-1"],
          match: "100% Match",
          duration: "Irreplaceable",
          tags: ["Sweetest", "Glowing", "Favorite"],
          description: "Nothing in this world can compare to the warmth and light of your smile."
        },
        {
          id: "love-2",
          title: "Your Beautiful Heart",
          subtitle: "Kind, compassionate, pure",
          image: MEMORIES_MEDIA["love-2"],
          match: "100% Match",
          duration: "Pure Gold",
          tags: ["Kindness", "Empathy", "Grace"],
          description: "The gentle, caring way you treat everyone around you is your superpower."
        },
        {
          id: "love-3",
          title: "Your Silly Little Habits",
          subtitle: "Things only I get to notice",
          image: MEMORIES_MEDIA["love-3"],
          match: "99% Match",
          duration: "Adorable",
          tags: ["Cute Quirks", "Laughter", "Joy"],
          description: "The way you pout, your random little dances, and the funny faces you make."
        },
        {
          id: "love-4",
          title: "Your Passion & Dreams",
          subtitle: "Inspiring me every single day",
          image: MEMORIES_MEDIA["love-4"],
          match: "99% Match",
          duration: "Fierce",
          tags: ["Ambitious", "Inspiring", "Strong"],
          description: "Watching you work hard for your dreams makes me so endlessly proud to know you."
        },
        {
          id: "love-5",
          title: "The Comfort of Your Hugs",
          subtitle: "Where everything feels safe",
          image: MEMORIES_MEDIA["love-5"],
          match: "100% Match",
          duration: "Infinite",
          tags: ["Safe Haven", "Warmth", "Peace"],
          description: "One hug from you can erase the stress of a thousand hectic days."
        }
      ]
    },
    {
      id: "row-favourite-moments",
      title: "MY FAVOURITE MOMENTS",
      badge: "Watch Again & Again",
      items: [
        {
          id: "fav-1",
          title: "Midnight Birthday Countdown",
          subtitle: "First to wish my favorite person",
          image: MEMORIES_MEDIA["fav-1"],
          match: "100% Match",
          duration: "12:00 AM",
          tags: ["Celebration", "Countdown", "Excitement"],
          description: "Watching the clock strike 12:00, celebrating another year of your wonderful existence."
        },
        {
          id: "fav-2",
          title: "Laughing Until We Cried",
          subtitle: "That hilarious inside joke",
          image: MEMORIES_MEDIA["fav-2"],
          match: "98% Match",
          duration: "Endless Laughs",
          tags: ["Unstoppable", "Tears of Joy", "Fun"],
          description: "Remember when neither of us could breathe from laughing so hard? Best memory ever."
        },
        {
          id: "fav-3",
          title: "Sunset by the Horizon",
          subtitle: "Quiet peace in the breeze",
          image: MEMORIES_MEDIA["fav-3"],
          match: "99% Match",
          duration: "Sunset Special",
          tags: ["Serenity", "Peace", "Beauty"],
          description: "Sitting shoulder to shoulder, listening to the world slow down just for us."
        },
        {
          id: "fav-4",
          title: "Cooking Disasters & Takeout",
          subtitle: "Burnt dinner, best company",
          image: MEMORIES_MEDIA["fav-4"],
          match: "97% Match",
          duration: "Delicious",
          tags: ["Foodie", "Pizza Night", "Silly"],
          description: "The recipe didn't work out at all, but the pizza we ordered tasted like pure happiness."
        }
      ]
    },
    {
      id: "row-made-especially",
      title: "MADE ESPECIALLY FOR YOU",
      badge: "Original Exclusive",
      items: [
        {
          id: "spec-1",
          title: "Lifetime Subscription to Love",
          subtitle: "Unlimited hugs, zero expiration",
          image: MEMORIES_MEDIA["spec-1"],
          match: "100% Match",
          duration: "Forever & Ever",
          tags: ["Premium", "No Ads", "VIP Access"],
          description: "Includes unlimited cuddles, late-night snacks, shoulder rubs, and lifetime loyalty."
        },
        {
          id: "spec-2",
          title: "VIP Pass to My Heart",
          subtitle: "Access Granted Exclusively to Saumya",
          image: MEMORIES_MEDIA["spec-2"],
          match: "100% Match",
          duration: "All-Access Pass",
          tags: ["Exclusive", "Reserved", "Forever"],
          description: "Non-transferable, highest clearance level. You are the only person who holds the key."
        },
        {
          id: "spec-3",
          title: "The Birthday Wish Coupon",
          subtitle: "Redeemable anytime, anywhere",
          image: MEMORIES_MEDIA["spec-3"],
          match: "100% Match",
          duration: "No Expiry",
          tags: ["Birthday Wish", "Golden Ticket", "Magic"],
          description: "Ask for anything you wish for today or any day—your wish is my absolute command!"
        },
        {
          id: "spec-4",
          title: "The Saumya Fan Club",
          subtitle: "Founder & Number One Fan",
          image: MEMORIES_MEDIA["spec-4"],
          match: "100% Match",
          duration: "Lifelong",
          tags: ["Fan Club", "Admirer", "Proud"],
          description: "I will forever cheer loudest for you in every room and every chapter of your journey."
        }
      ]
    }
  ]
};

export default CONFIG;
