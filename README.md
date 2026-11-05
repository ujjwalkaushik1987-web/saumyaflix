# SAUMYAFLIX ❤️ — Cinematic Romantic Birthday Experience

> *"An Original Love Story starring Saumya."*

A production-ready, Netflix-inspired romantic birthday celebration website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Demo & Public Deployment

Deployable with 1-click on **Vercel**, **Netlify**, or **GitHub Pages**.

### Step 1: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new) named `saumyaflix` (set it to **Public** or **Private**).
2. Link and push your local project:
   ```bash
   cd /Users/ujjwalbharti/saumya-flix
   git remote add origin https://github.com/YOUR_USERNAME/saumyaflix.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (Recommended)

1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New Project"** -> **"Import Git Repository"**.
3. Select your `saumyaflix` repository.
4. Vercel automatically detects the framework presets:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. In ~30 seconds, Vercel will give you a public URL (e.g. `https://saumyaflix.vercel.app`) that you can send to Saumya!

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) to preview the production bundle locally.

---

## 🎨 Personalizing the Content

All website texts, dates, messages, gallery items, and media references are configured in **one centralized file**:

👉 **[`src/data/config.js`](./src/data/config.js)**

### 1. Changing Photos
- Add your photos into `public/images/` (e.g. `public/images/photo1.jpg`).
- In `src/data/config.js`, update:
  ```javascript
  image: "/images/photo1.jpg"
  ```
- Or continue using the curated high-resolution romantic photos already configured.

### 2. Changing Background Music
- Add an MP3 file to `public/music/` (e.g. `public/music/your-romantic-song.mp3`).
- In `src/data/config.js`:
  ```javascript
  musicFile: "/music/your-romantic-song.mp3"
  ```
*(Note: A royalty-free romantic melody is already included and plays out of the box with zero setup).*

### 3. Adding Personal Birthday Video
- Add your MP4 video to `public/videos/` as `trailer.mp4`.
- In `src/data/config.js`:
  ```javascript
  videoFile: "/videos/trailer.mp4"
  ```
*(Note: If no video is uploaded, an interactive cinematic romantic slideshow montage plays automatically).*

---

## 📱 Mobile & Cross-Platform Support

Tested and verified on:
- **Desktop & Laptops**: macOS (Safari, Chrome), Windows (Chrome, Edge), Linux (Firefox).
- **Mobile & Tablets**: iOS (Safari, Chrome on iPhone & iPad), Android (Chrome, Samsung Internet).
- **Responsive Navigation**: Touch-friendly horizontal swipe carousels, mobile drawer menu, and adaptive font sizing.

---

## 📦 Project Structure

```text
saumya-flix/
├── public/
│   ├── favicon.svg
│   ├── images/
│   ├── music/
│   │   └── romantic-melody.mp3
│   └── videos/
├── src/
│   ├── components/
│   │   ├── AboutModal.jsx
│   │   ├── BirthdaySurprise.jsx
│   │   ├── DetailModal.jsx
│   │   ├── FloatingParticles.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoveLetter.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieRow.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── Navbar.jsx
│   │   ├── OpeningScreen.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── StoryTimeline.jsx
│   │   ├── SurpriseBanner.jsx
│   │   └── TrailerModal.jsx
│   ├── data/
│   │   ├── config.js          # Master configuration
│   │   ├── memories.js
│   │   ├── messages.js
│   │   └── timeline.js
│   ├── hooks/
│   │   ├── useAudio.js        # Background music engine
│   │   └── useSoundEffects.js # Web Audio synthesized chimes
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Memories.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vercel.json                # Vercel SPA routing & caching
├── vite.config.js             # Vite production configuration
├── tailwind.config.js         # Custom romantic streaming design system
└── package.json
```

---

## ❤️ Credits
Created exclusively with love for **Saumya**.
