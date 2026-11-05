import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Play } from 'lucide-react';
import { CONFIG } from '../data/config';
import { useSoundEffects } from '../hooks/useSoundEffects';

export default function OpeningScreen({ onStartCelebration }) {
  const { playCinemaTaDum } = useSoundEffects();
  const [hasStarted, setHasStarted] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate background ambient particles
  useEffect(() => {
    const items = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 6,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2
    }));
    setParticles(items);
  }, []);

  const handleStart = () => {
    playCinemaTaDum();
    setHasStarted(true);
    setTimeout(() => {
      onStartCelebration();
    }, 900);
  };

  return (
    <AnimatePresence>
      {!hasStarted && (
        <motion.div
          key="opening-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#090609] overflow-hidden select-none"
        >
          {/* Ambient radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,45,85,0.18)_0%,rgba(26,11,20,0.85)_50%,#090609_100%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

          {/* Floating glowing particles & micro hearts */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: `${p.y}vh`, x: `${p.x}vw`, opacity: 0 }}
              animate={{
                y: [`${p.y}vh`, `${(p.y - 30 + 100) % 100}vh`],
                opacity: [0, p.opacity, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              className="absolute pointer-events-none text-red-400/30"
              style={{ fontSize: `${p.size}px` }}
            >
              {p.id % 3 === 0 ? '❤️' : '✨'}
            </motion.div>
          ))}

          {/* Center Cinematic Card */}
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
            {/* Top Streaming Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-semibold tracking-widest uppercase text-red-300 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D6B477] animate-pulse" />
              <span>A Special Romantic Original</span>
            </motion.div>

            {/* Main Brand Title */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest netflix-brand">
                {CONFIG.siteTitle}
              </h1>
            </motion.div>

            {/* Subtitle taglines */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-serif italic text-xl sm:text-2xl text-[#EBA6B6] tracking-wide mb-2"
            >
              "{CONFIG.tagline}"
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base sm:text-lg font-medium text-white/90 tracking-wider mb-2 flex items-center justify-center gap-2"
            >
              <span>{CONFIG.subTagline}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xs sm:text-sm text-neutral-400 font-light mb-10 tracking-wider"
            >
              {CONFIG.creatorCredit}
            </motion.p>

            {/* Start Celebration Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(217, 45, 85, 0.6)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              onClick={handleStart}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D92D55] via-[#E83E66] to-[#D92D55] text-white font-semibold text-lg tracking-wide shadow-glow-red overflow-hidden cursor-pointer"
            >
              {/* Shimmer light effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
              <span>Start Celebration</span>
              <Heart className="w-5 h-5 text-pink-200 fill-pink-200 animate-bounce" />
            </motion.button>

            {/* Audio notice hint */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.8 }}
              className="text-[11px] text-neutral-400 mt-4 tracking-wider flex items-center gap-1.5"
            >
              <span>🎧 Turn up the volume for the best cinematic experience</span>
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
