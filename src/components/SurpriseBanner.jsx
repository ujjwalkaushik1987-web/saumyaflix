import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';

export default function SurpriseBanner({ onOpenSurprise }) {
  return (
    <section className="my-16 sm:my-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative rounded-3xl overflow-hidden glass-card p-8 sm:p-12 border border-red-500/30 shadow-glow-red flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-purple-950/40 to-[#1A0B14] pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#D92D55]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-bold text-[#D6B477] uppercase tracking-widest mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B477]" />
            <span>The Grand Birthday Finale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-3">
            A Special Birthday Surprise Awaits
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-pink-200">
            You've explored the memories and read the notes. Now unwrap what is prepared just for you.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 35px rgba(217, 45, 85, 0.65)' }}
            whileTap={{ scale: 0.94 }}
            onClick={onOpenSurprise}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D92D55] via-[#E83E66] to-[#D92D55] text-white font-bold text-base sm:text-lg shadow-glow-red flex items-center gap-3 cursor-pointer group"
          >
            <Gift className="w-5 h-5 text-[#D6B477] group-hover:rotate-12 transition-transform" />
            <span>Open Your Birthday Surprise</span>
            <Heart className="w-4 h-4 text-pink-200 fill-pink-200" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
