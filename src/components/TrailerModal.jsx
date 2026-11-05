import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Heart, Film, Info, ChevronRight } from 'lucide-react';
import { CONFIG } from '../data/config';
import { EPISODES, FALLBACKS } from '../data/media';

export default function TrailerModal({ isOpen, onClose }) {
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [montageSlide, setMontageSlide] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const activeEpisode = EPISODES[activeEpisodeIndex] || EPISODES[0];

  // Cinematic montage fallback quotes if a video file ever fails
  const montageScenes = [
    {
      title: "Episode 1: The One & Only Saumya",
      quote: "In every lifetime and every universe, my heart would choose you.",
      image: "/images/hero/saumya-hero.jpg",
    },
    {
      title: "Episode 2: A Million Smiles",
      quote: "Your laughter is the soundtrack to my happiest moments.",
      image: "/images/gallery/gallery-2.jpg",
    },
    {
      title: "Episode 3: The Golden Chapters",
      quote: "Every adventure is extraordinary when I am walking by your side.",
      image: "/images/memories/mem-5.jpg",
    },
  ];

  // Auto advance montage scenes on error
  useEffect(() => {
    if (!isOpen || !hasVideoError) return;
    const interval = setInterval(() => {
      setMontageSlide((prev) => (prev + 1) % montageScenes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen, hasVideoError, montageScenes.length]);

  // Handle switching episode
  const handleSelectEpisode = (index) => {
    setActiveEpisodeIndex(index);
    setProgress(0);
    setHasVideoError(false);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play?.().catch(() => {});
    }
  };

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current || hasVideoError) {
      setIsPlaying(!isPlaying);
      return;
    }
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const handleVideoEnded = () => {
    // Auto advance to next episode if available
    if (activeEpisodeIndex < EPISODES.length - 1) {
      handleSelectEpisode(activeEpisodeIndex + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/92 backdrop-blur-2xl"
        />

        {/* Modal Player Card */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[#10080D] border border-red-500/35 shadow-2xl z-10 flex flex-col my-auto"
        >
          {/* Top Bar with Title & Close */}
          <div className="absolute top-0 inset-x-0 z-30 p-4 sm:p-5 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D92D55] animate-ping" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
                {activeEpisode.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container (16:9 Aspect Ratio) */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            {!hasVideoError ? (
              <video
                key={activeEpisode.file}
                ref={videoRef}
                src={activeEpisode.file}
                poster={activeEpisode.thumbnail}
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                onError={() => setHasVideoError(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              /* Fallback Cinematic Montage Slideshow */
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={montageSlide}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={montageScenes[montageSlide].image}
                      alt="Montage Scene"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = FALLBACKS.hero;
                      }}
                      className="w-full h-full object-cover filter brightness-[0.65]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

                    {/* Centered romantic message */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-xl mx-auto">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#D6B477] mb-2">
                        {montageScenes[montageSlide].title}
                      </span>
                      <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-medium mb-3">
                        "{montageScenes[montageSlide].quote}"
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-pink-300">
                        <Heart className="w-3.5 h-3.5 text-[#D92D55] fill-[#D92D55]" />
                        <span>A Saumya Original</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 z-30 p-3 sm:p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-2">
              {/* Progress Bar */}
              <div
                onClick={(e) => {
                  if (!videoRef.current) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
                }}
                className="w-full h-1.5 bg-neutral-700/60 hover:h-2 rounded-full overflow-hidden cursor-pointer transition-all"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#D92D55] to-[#EBA6B6] rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-white text-xs sm:text-sm pt-1">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="hover:text-pink-300 cursor-pointer flex items-center gap-2 p-1"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="hover:text-pink-300 cursor-pointer p-1"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-white" />}
                  </button>

                  <span className="text-[11px] text-neutral-400 hidden sm:inline">
                    {activeEpisode.subtitle}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-red-950/70 border border-red-500/30 text-pink-200">
                    Episode {activeEpisode.episodeNumber} of {EPISODES.length}
                  </span>
                  <button
                    onClick={toggleFullscreen}
                    className="hover:text-pink-300 cursor-pointer p-1"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Episode Playlist Tabs (Netflix-Style Carousel Selector) */}
          <div className="p-4 sm:p-5 bg-[#140D13] border-t border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs uppercase tracking-widest text-[#D6B477] font-bold flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#D6B477]" />
                <span>Special Birthday Episodes ({EPISODES.length} Parts)</span>
              </h4>
              <span className="text-[11px] text-neutral-400">
                Click any episode to stream
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {EPISODES.map((ep, idx) => (
                <button
                  key={ep.id}
                  onClick={() => handleSelectEpisode(idx)}
                  className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                    activeEpisodeIndex === idx
                      ? 'bg-red-950/60 border-red-500 text-white shadow-glow-red'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-neutral-300'
                  }`}
                >
                  <div className="relative w-16 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 border border-white/10">
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = FALLBACKS.memory;
                      }}
                      className="w-full h-full object-cover"
                    />
                    {activeEpisodeIndex === idx && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-4 h-4 fill-white text-white" />
                      </div>
                    )}
                  </div>

                  <div className="overflow-hidden">
                    <span className="text-[10px] font-bold text-pink-300 uppercase block">
                      Part {ep.episodeNumber}
                    </span>
                    <h5 className="text-xs font-semibold text-white truncate">
                      {ep.title}
                    </h5>
                    <p className="text-[10px] text-neutral-400 truncate">
                      {ep.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
