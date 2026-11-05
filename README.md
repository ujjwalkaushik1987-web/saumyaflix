# SAUMYAFLIX ❤️ — A Cinematic Romantic Birthday Experience

> "An Original Love Story starring Saumya."

A production-quality, Netflix-inspired romantic birthday streaming website built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 🌟 Highlights

- **Cinematic Opening Screen**: Netflix-style title reveal, glowing particles, custom "Ta-dum" cinema chime sound synthesis, and "Start Celebration" button.
- **Netflix Streaming Interface**:
  - Full-screen Hero banner with romantic tags (`99% Match`, `Special Birthday Edition`, `4K Ultra Romance`).
  - 5 Horizontal Content Rows with smooth scroll arrows and hover zoom:
    - *Our Beautiful Memories*
    - *The Story of Us*
    - *Things I Love About You*
    - *My Favourite Moments*
    - *Made Especially For You*
  - Expandable Netflix Detail Modals for every card.
- **Photo Memory Gallery**:
  - Filterable by *Beautiful Moments*, *Together Forever*, *Random Memories*, *Her Beautiful Smile*, and *Special Days*.
  - Fullscreen Lightbox with Next/Prev and keyboard arrow support.
  - Interactive Heart Favorite counter.
- **"A Letter From My Heart"**:
  - Interactive 3D romantic wax-sealed envelope.
  - Smooth unfolding parchment paper animation with progressive reading pacing.
- **The Story of Us (Timeline)**:
  - Vertical cinematic timeline with glowing connection line, milestone dates, and photos.
- **Live Background Music Player**:
  - Docked visualizer with dynamic audio frequency bars.
  - Volume slider, mute toggle, loop mode.
  - Seamless fallback to an enchanting ambient chime synthesizer if no local MP3 is placed yet.
- **Birthday Trailer Player**:
  - Custom video controls (play/pause, timeline, fullscreen).
  - Built-in cinematic montage preview.
- **The Grand Birthday Surprise**:
  - 3D gift box with ribbon unboxing animation.
  - Colorful confetti cannon shower and floating hearts.
  - Glowing birthday cake with interactive candle blowing!
  - "One More Hug ❤️" button with heart burst explosion.

---

## 📁 Centralized Content Configuration

Everything on the website is customized in a single file:
👉 **[`src/data/config.js`](file:///Users/ujjwalbharti/.gemini/antigravity/scratch/saumyaflix/src/data/config.js)**

### How to Add Your Own Photos, Music & Video:

1. **Add Photos**:
   - Place JPG/PNG files in `public/images/` (e.g. `public/images/photo1.jpg`).
   - In `src/data/config.js`, update the `image` field:
     ```javascript
     image: "/images/photo1.jpg"
     ```

2. **Add Custom Background Music**:
   - Place an MP3 file in `public/music/` (e.g. `public/music/romantic-melody.mp3`).
   - In `src/data/config.js`:
     ```javascript
     musicFile: "/music/romantic-melody.mp3"
     ```

3. **Add Custom Birthday Video**:
   - Place an MP4 video in `public/videos/` as `public/videos/trailer.mp4`.
   - In `src/data/config.js`:
     ```javascript
     videoFile: "/videos/trailer.mp4"
     ```

---

## 🚀 Running the Project

```bash
cd /Users/ujjwalbharti/.gemini/antigravity/scratch/saumyaflix
npm run dev
```

Open `http://localhost:5173` in any browser on desktop or mobile.
