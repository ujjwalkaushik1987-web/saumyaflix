import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Heart, Star, Sparkles, Check, Share2 } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { CONFIG } from '../data/config';

export default function DetailModal({ item, onClose, onPlayTrailer }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const { playHeartPop } = useSoundEffects();

  if (!item) return null;

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
    playHeartPop();
  };

  const handleCopyNote = () => {
    navigator.clipboard?.writeText?.(`"${item.title}" — ${item.description}`);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-[#140D13] border border-red-500/30 shadow-2xl z-10 my-auto"
        >
          {/* Header Image with Gradient Overlays */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140D13] via-[#140D13]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-2.5 py-1 rounded-md bg-red-950/70 border border-red-500/40 text-[11px] font-bold text-red-300 uppercase tracking-widest mb-2 backdrop-blur-md">
                Saumyaflix Special
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base font-serif italic text-pink-200 mt-1">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Metadata and Quick Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
                <span className="text-[#46D369] font-bold tracking-wide">
                  {item.match || CONFIG.matchPercentage} Match
                </span>
                <span className="px-2 py-0.5 rounded border border-neutral-600 bg-black/40 text-neutral-300 text-xs">
                  {item.duration || 'Forever'}
                </span>
                <span className="px-2 py-0.5 rounded border border-red-500/30 bg-red-950/30 text-pink-300 text-xs font-semibold">
                  Ultra HD Romance
                </span>
                <span className="text-pink-300 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D6B477] text-[#D6B477]" />
                  Favorite Memory
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleFavoriteToggle}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isFavorited
                      ? 'bg-red-950/60 border-red-500 text-red-300'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-[#D92D55] text-[#D92D55]' : ''}`} />
                  <span>{isFavorited ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={handleCopyNote}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
                >
                  {copiedNotice ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
                  <span>{copiedNotice ? 'Copied!' : 'Copy Quote'}</span>
                </button>
              </div>
            </div>

            {/* Narrative Description */}
            <div className="rounded-xl p-4 bg-black/40 border border-white/5">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B477]" />
                <span>The Story Behind This</span>
              </h4>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-neutral-400 font-medium">Genres:</span>
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-pink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
