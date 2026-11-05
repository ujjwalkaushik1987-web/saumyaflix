/**
 * ====================================================================
 * SAUMYAFLIX — CENTRALIZED CONTENT CONFIGURATION
 * ====================================================================
 * Customize all details for Saumya's birthday here!
 * You can easily change names, dates, quotes, photos, music, and videos.
 * 
 * To use local photos, place them in `public/images/` and update paths like:
 *   image: "/images/your-photo.jpg"
 * 
 * To use your own music, place an MP3 in `public/music/` and update:
 *   musicFile: "/music/your-song.mp3"
 * 
 * To use your own trailer video, place an MP4 in `public/videos/` and update:
 *   videoFile: "/videos/trailer.mp4"
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

  // Audio & Media Paths
  // If the local file doesn't exist yet, our smart audio engine automatically synthesizes
  // an enchanting romantic ambient piano melody so music plays out-of-the-box!
  musicFile: "/music/romantic-melody.mp3",
  musicTitle: "Saumya's Birthday Theme",
  musicArtist: "Composed with Love for You",

  // Video trailer path (falls back to cinematic montage trailer if file is not yet placed)
  videoFile: "/videos/trailer.mp4",
  videoThumbnail: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1920&q=80",

  // Hero Section
  hero: {
    title: "Happy Birthday, Saumya ❤️",
    subtitle: "A beautiful soul. A million memories. An endless story.",
    overview: "In a world of billions, this universe made you. Today we celebrate the most wonderful person to ever walk into my life. Every laugh we shared, every quiet glance, and every dream we spoke into the midnight sky leads to this special moment.",
    backgroundImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=2000&q=85",
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

  // Timeline of Relationship Milestones (Section 7)
  timeline: [
    {
      id: "time-1",
      date: "Chapter 1",
      title: "The First Hello",
      description: "A simple introduction that quietly changed my entire world forever. Who knew a single greeting could spark an endless story?",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
      tag: "The Spark",
      emoji: "✨"
    },
    {
      id: "time-2",
      date: "Chapter 2",
      title: "Our First Long Conversation",
      description: "Hours vanished like minutes as we talked about everything and nothing. I realized I could listen to your voice forever.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
      tag: "Midnight Talks",
      emoji: "☕"
    },
    {
      id: "time-3",
      date: "Chapter 3",
      title: "The First Time You Smiled at Me",
      description: "That genuine, crinkly-eyed smile that still makes my heart skip a beat every single time I see it.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
      tag: "Magic",
      emoji: "🌸"
    },
    {
      id: "time-4",
      date: "Chapter 4",
      title: "Unforgettable Adventures",
      description: "Whether exploring new streets, getting lost together, or laughing until our stomachs hurt, every place is home with you.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
      tag: "Wanderlust",
      emoji: "🗺️"
    },
    {
      id: "time-5",
      date: "Chapter 5",
      title: "Today & Every Tomorrow",
      description: "Celebrating another year of your incredible existence. The best chapters of our story are still waiting to be written.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80",
      tag: "Birthday Girl",
      emoji: "🎂"
    }
  ],

  // Gallery Categories & Photos (Section 5)
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
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80",
      caption: "The golden sun will never shine as bright as your smile.",
      likes: 128
    },
    {
      id: "gal-2",
      title: "Her Radiance",
      category: "Her Beautiful Smile",
      date: "Always Beautiful",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      caption: "That million-watt smile that can turn any cloudy day into sunshine.",
      likes: 245
    },
    {
      id: "gal-3",
      title: "Walking Side by Side",
      category: "Together Forever",
      date: "Every Step",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
      caption: "Holding your hand is my favorite place in the whole universe.",
      likes: 310
    },
    {
      id: "gal-4",
      title: "Unfiltered Laughter",
      category: "Random Memories",
      date: "Spontaneous Joy",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
      caption: "The silly candid moments we cherish more than any planned picture.",
      likes: 189
    },
    {
      id: "gal-5",
      title: "Celebration Lights",
      category: "Special Days",
      date: "Birthday Eve",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
      caption: "Fairy lights, sweet wishes, and celebrating the queen of my heart.",
      likes: 276
    },
    {
      id: "gal-6",
      title: "Stolen Glances",
      category: "Beautiful Moments",
      date: "Sweet Serendipity",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80",
      caption: "Caught you looking, and my whole heart melted instantly.",
      likes: 412
    },
    {
      id: "gal-7",
      title: "Coffee & Daydreams",
      category: "Random Memories",
      date: "Lazy Morning",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      caption: "Warm cups, sweet glances, and dream-filled conversations.",
      likes: 154
    },
    {
      id: "gal-8",
      title: "Birthday Cheer",
      category: "Special Days",
      date: "A Day to Remember",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80",
      caption: "Wishing you a year as extraordinary as the joy you give everyone around you.",
      likes: 520
    }
  ],

  // Netflix Horizontal Rows (Section 4)
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
          image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
          match: "99% Match",
          duration: "Timeless",
          tags: ["Destiny", "First Glance", "Unforgettable"],
          description: "A moment etched into my mind forever. The universe aligned just so our paths could cross."
        },
        {
          id: "mem-2",
          title: "Late Night Conversations",
          subtitle: "Whispers under the stars",
          image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "4h 22m",
          tags: ["Heart-to-Heart", "Deep Talks", "Midnight"],
          description: "When 2 AM felt like noon because every word you spoke was mesmerizing."
        },
        {
          id: "mem-3",
          title: "Our Unplanned Road Trip",
          subtitle: "Getting lost on purpose",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
          match: "98% Match",
          duration: "Full Season",
          tags: ["Adventure", "Wanderer", "Joy"],
          description: "Wrong turns that led to the right views, all with the greatest companion beside me."
        },
        {
          id: "mem-4",
          title: "The Rainy Day Cafe",
          subtitle: "Warm coffee & sweet laughter",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
          match: "99% Match",
          duration: "Cozy Edition",
          tags: ["Rainy Day", "Cozy", "Laughter"],
          description: "Rain drops racing on the window pane while we laughed until our drinks got cold."
        },
        {
          id: "mem-5",
          title: "That Perfect Golden Hour",
          subtitle: "Sunset in your eyes",
          image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
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
          image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
          match: "99% Match",
          duration: "Pilot Episode",
          tags: ["Destiny", "First Hello", "Magic"],
          description: "The unforgettable premiere of our relationship. Every second felt like a movie scene."
        },
        {
          id: "story-2",
          title: "Season 2: Growing Closer",
          subtitle: "Sharing secrets & silly jokes",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
          match: "98% Match",
          duration: "High Rated",
          tags: ["Closeness", "Secrets", "Smiles"],
          description: "Learning all your favorite songs, your quirks, and the things that make you you."
        },
        {
          id: "story-3",
          title: "Season 3: Inseparable",
          subtitle: "Two hearts beating in sync",
          image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "Blockbuster",
          tags: ["Together", "Stronger", "Unbreakable"],
          description: "Facing every day hand in hand. Knowing you're always there makes everything possible."
        },
        {
          id: "story-4",
          title: "Season 4: Celebrating Saumya",
          subtitle: "The Birthday Grand Finale",
          image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
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
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "Irreplaceable",
          tags: ["Sweetest", "Glowing", "Favorite"],
          description: "Nothing in this world can compare to the warmth and light of your smile."
        },
        {
          id: "love-2",
          title: "Your Beautiful Heart",
          subtitle: "Kind, compassionate, pure",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "Pure Gold",
          tags: ["Kindness", "Empathy", "Grace"],
          description: "The gentle, caring way you treat everyone around you is your superpower."
        },
        {
          id: "love-3",
          title: "Your Silly Little Habits",
          subtitle: "Things only I get to notice",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
          match: "99% Match",
          duration: "Adorable",
          tags: ["Cute Quirks", "Laughter", "Joy"],
          description: "The way you pout, your random little dances, and the funny faces you make."
        },
        {
          id: "love-4",
          title: "Your Passion & Dreams",
          subtitle: "Inspiring me every single day",
          image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
          match: "99% Match",
          duration: "Fierce",
          tags: ["Ambitious", "Inspiring", "Strong"],
          description: "Watching you work hard for your dreams makes me so endlessly proud to know you."
        },
        {
          id: "love-5",
          title: "The Comfort of Your Hugs",
          subtitle: "Where everything feels safe",
          image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
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
          image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "12:00 AM",
          tags: ["Celebration", "Countdown", "Excitement"],
          description: "Watching the clock strike 12:00, celebrating another year of your wonderful existence."
        },
        {
          id: "fav-2",
          title: "Laughing Until We Cried",
          subtitle: "That hilarious inside joke",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
          match: "98% Match",
          duration: "Endless Laughs",
          tags: ["Unstoppable", "Tears of Joy", "Fun"],
          description: "Remember when neither of us could breathe from laughing so hard? Best memory ever."
        },
        {
          id: "fav-3",
          title: "Sunset by the Horizon",
          subtitle: "Quiet peace in the breeze",
          image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
          match: "99% Match",
          duration: "Sunset Special",
          tags: ["Serenity", "Peace", "Beauty"],
          description: "Sitting shoulder to shoulder, listening to the world slow down just for us."
        },
        {
          id: "fav-4",
          title: "Cooking Disasters & Takeout",
          subtitle: "Burnt dinner, best company",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
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
          image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "Forever & Ever",
          tags: ["Premium", "No Ads", "VIP Access"],
          description: "Includes unlimited cuddles, late-night snacks, shoulder rubs, and lifetime loyalty."
        },
        {
          id: "spec-2",
          title: "VIP Pass to My Heart",
          subtitle: "Access Granted Exclusively to Saumya",
          image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "All-Access Pass",
          tags: ["Exclusive", "Reserved", "Forever"],
          description: "Non-transferable, highest clearance level. You are the only person who holds the key."
        },
        {
          id: "spec-3",
          title: "The Birthday Wish Coupon",
          subtitle: "Redeemable anytime, anywhere",
          image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
          match: "100% Match",
          duration: "No Expiry",
          tags: ["Birthday Wish", "Golden Ticket", "Magic"],
          description: "Ask for anything you wish for today or any day—your wish is my absolute command!"
        },
        {
          id: "spec-4",
          title: "The Saumya Fan Club",
          subtitle: "Founder & Number One Fan",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
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
