import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Disc, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export default function MusicPlayer({ audioState }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="glass-card rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-red-500/25 flex items-center gap-3 backdrop-blur-xl"
      >
        {/* Album / Spinning Vinyl Art */}
        <div
          onClick={audioState.togglePlay}
          className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#2A0E1C] to-[#D92D55] p-0.5 shadow-md flex items-center justify-center cursor-pointer group flex-shrink-0"
        >
          <div
            className={`w-full h-full rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 ${
              audioState.isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
            }`}
          >
            <Disc className="w-5 h-5 text-pink-300" />
          </div>

          {/* Center Play/Pause Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            {audioState.isPlaying ? (
              <Pause className="w-4 h-4 text-white fill-white" />
            ) : (
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            )}
          </div>
        </div>

        {/* Track Info & Visualizer */}
        <div className="hidden sm:flex flex-col min-w-[140px] max-w-[200px]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D92D55] animate-pulse" />
            <span className="text-xs font-semibold text-white truncate">
              {audioState.trackTitle}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 truncate">
            {audioState.artist}
          </span>

          {/* Sound wave visualizer bars */}
          <div className="flex items-end gap-1 h-3 mt-1">
            {audioState.visualizerData.slice(0, 8).map((val, idx) => (
              <span
                key={idx}
                className="w-1 rounded-full bg-gradient-to-t from-[#D92D55] to-[#EBA6B6] transition-all duration-150"
                style={{
                  height: audioState.isPlaying ? `${Math.max(20, val)}%` : '15%',
                  opacity: audioState.isPlaying ? 1 : 0.3
                }}
              />
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Main Play / Pause Button */}
          <button
            onClick={audioState.togglePlay}
            className="w-8 h-8 rounded-full bg-[#D92D55] hover:bg-red-600 text-white flex items-center justify-center shadow-glow-red transition-all cursor-pointer hover:scale-105 active:scale-95"
            title={audioState.isPlaying ? "Pause Music" : "Play Music"}
          >
            {audioState.isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white ml-0.5" />
            )}
          </button>

          {/* Expand/Collapse Volume slider */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-neutral-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            title="Volume Controls"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Expandable Volume Controls Tray */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="flex items-center gap-2 pl-2 border-l border-white/10 overflow-hidden"
            >
              <button
                onClick={audioState.toggleMute}
                className="text-neutral-300 hover:text-white cursor-pointer"
              >
                {audioState.isMuted || audioState.volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-red-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-pink-300" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={audioState.isMuted ? 0 : audioState.volume}
                onChange={(e) => audioState.setVolume(parseFloat(e.target.value))}
                className="w-20 sm:w-24 accent-[#D92D55] cursor-pointer h-1.5 bg-neutral-700 rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
