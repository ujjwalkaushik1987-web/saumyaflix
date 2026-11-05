import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Plus, Check, ChevronDown, Sparkles } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';

export default function MovieCard({ item, onSelectCard }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const { playHeartPop } = useSoundEffects();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    playHeartPop();
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => onSelectCard(item)}
      className="group relative flex-none w-[260px] sm:w-[300px] md:w-[320px] rounded-xl overflow-hidden bg-[#140D13] border border-white/5 hover:border-red-500/40 shadow-xl cursor-pointer transition-all duration-300"
    >
      {/* Thumbnail Aspect Ratio Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/fallbacks/memory-fallback.svg';
          }}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140D13] via-[#140D13]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-red-950/80 border border-red-500/30 text-[10px] font-bold text-red-200 backdrop-blur-md">
            {item.match}
          </span>
        </div>

        {/* Top Right Heart Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          title={isFavorited ? "Saved to Favorites" : "Add to Favorites"}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white backdrop-blur-md transition-transform active:scale-90"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              isFavorited
                ? 'text-[#D92D55] fill-[#D92D55]'
                : 'text-neutral-300 hover:text-red-400'
            }`}
          />
        </button>

        {/* Play Icon Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-glow-red transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-black ml-0.5" />
          </div>
        </div>
      </div>

      {/* Card Info Box */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-pink-200 transition-colors truncate">
              {item.title}
            </h3>
            <span className="text-[11px] font-medium text-neutral-400 flex-shrink-0">
              {item.duration}
            </span>
          </div>

          <p className="text-xs text-neutral-400 line-clamp-1 mb-3">
            {item.subtitle}
          </p>
        </div>

        {/* Tags and Expand Chevron */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 overflow-hidden">
            {item.tags?.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 font-light truncate"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-pink-300 group-hover:translate-x-0.5 transition-transform">
            <span>Details</span>
            <ChevronDown className="w-3.5 h-3.5 transform -rotate-90" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
