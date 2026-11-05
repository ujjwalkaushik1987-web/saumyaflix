import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info, Sparkles, Heart, Film, Star } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Hero({ onPlayStory, onMoreInfo }) {
  const { hero } = CONFIG;

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-start overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      {/* Cinematic Background Image with Dark Vignettes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: 'easeOut' }}
          src={hero.backgroundImage}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = hero.fallbackImage || '/images/fallbacks/hero-fallback.svg';
          }}
          alt="Saumyaflix Hero Banner"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]"
        />

        {/* Multi-layered cinematic gradients for seamless Netflix readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090609] via-[#090609]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090609] via-[#090609]/75 to-transparent w-full md:w-3/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,45,85,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-3xl pt-12">
        {/* Netflix Original Series Tag */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-xs font-bold tracking-widest uppercase text-red-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D92D55] animate-ping" />
            <span>SAUMYAFLIX ORIGINAL</span>
          </div>
          <span className="text-[#D6B477] font-semibold text-xs tracking-wider flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[#D6B477]" />
            #1 IN OUR HEARTS TODAY
          </span>
        </motion.div>

        {/* Main Title Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-4 text-shadow-lg"
        >
          {hero.title}
        </motion.h1>

        {/* Romantic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#EBA6B6] mb-5 tracking-wide"
        >
          "{hero.subtitle}"
        </motion.p>

        {/* Metadata Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-neutral-300 mb-6"
        >
          <span className="text-[#46D369] font-bold tracking-wide">
            {CONFIG.matchPercentage} Match
          </span>
          <span className="px-2 py-0.5 rounded border border-neutral-600 bg-black/40 text-neutral-200 text-xs">
            {CONFIG.birthdayYear}
          </span>
          <span className="px-2 py-0.5 rounded border border-red-500/40 bg-red-950/40 text-pink-200 text-xs font-semibold">
            Special Birthday Edition
          </span>
          <span className="px-2 py-0.5 rounded border border-neutral-600 bg-black/40 text-neutral-200 text-xs">
            4K Ultra Romance
          </span>
          <span className="text-pink-300 flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#D92D55] fill-[#D92D55]" />
            Made with Love
          </span>
        </motion.div>

        {/* Overview synopsis */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl line-clamp-3 sm:line-clamp-none font-light"
        >
          {hero.overview}
        </motion.p>

        {/* Hero Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center gap-4"
        >
          {/* Play Our Story */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlayStory}
            className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-white text-black font-bold text-base sm:text-lg tracking-wide hover:bg-neutral-200 transition-all shadow-xl cursor-pointer"
          >
            <Play className="w-5 h-5 fill-black text-black" />
            <span>Play Our Story</span>
          </motion.button>

          {/* More About You */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMoreInfo}
            className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-700/90 text-white font-semibold text-base sm:text-lg tracking-wide border border-neutral-600/60 backdrop-blur-md transition-all shadow-xl cursor-pointer"
          >
            <Info className="w-5 h-5 text-pink-300" />
            <span>More About You</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating corner badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="hidden xl:flex absolute bottom-12 right-12 flex-col items-end gap-1 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-400">Exclusive Stream</span>
        <span className="font-serif italic text-lg text-[#EBA6B6]">For Saumya's Eyes Only ❤️</span>
      </motion.div>
    </section>
  );
}
