import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Heart, Film, Info } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function TrailerModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [montageSlide, setMontageSlide] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Cinematic montage fallback quotes and scenes if trailer.mp4 is not present
  const montageScenes = [
    {
      title: "Episode 1: The One & Only Saumya",
      quote: "In every lifetime and every universe, my heart would choose you.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Episode 2: A Million Smiles",
      quote: "Your laughter is the soundtrack to my happiest moments.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Episode 3: The Golden Chapters",
      quote: "Every adventure is extraordinary when I am walking by your side.",
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Episode 4: Happy Birthday, My Love",
      quote: "May this year bring you all the magic and wonder you bring to others.",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80",
    }
  ];

  // Auto advance montage scenes
  useEffect(() => {
    if (!isOpen || !hasVideoError) return;
    const interval = setInterval(() => {
      setMontageSlide((prev) => (prev + 1) % montageScenes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen, hasVideoError, montageScenes.length]);

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Player Card */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black border border-red-500/30 shadow-2xl z-10 flex flex-col justify-between"
        >
          {/* Top Bar with Title & Close */}
          <div className="absolute top-0 inset-x-0 z-30 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92D55] animate-ping" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
                Saumyaflix Official Birthday Trailer
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video or Cinematic Montage Display */}
          <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
            {!hasVideoError ? (
              <video
                ref={videoRef}
                src={CONFIG.videoFile}
                poster={CONFIG.videoThumbnail}
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onError={() => setHasVideoError(true)}
                className="w-full h-full object-cover"
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
                      className="w-full h-full object-cover filter brightness-[0.65]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

                    {/* Centered romantic message */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-xl mx-auto">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#D6B477] mb-2">
                        {montageScenes[montageSlide].title}
                      </span>
                      <h3 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-3">
                        "{montageScenes[montageSlide].quote}"
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-pink-300">
                        <Heart className="w-3.5 h-3.5 text-[#D92D55] fill-[#D92D55]" />
                        <span>A Saumya Original</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Info Helper Note on how to drop a real mp4 video */}
                <div className="absolute top-16 left-6 right-6 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 border border-red-500/30 text-[11px] text-neutral-300 backdrop-blur-md">
                    <Info className="w-3.5 h-3.5 text-[#D6B477] flex-shrink-0" />
                    <span>To stream your personal MP4 video: Drop it into <code className="text-pink-300">public/videos/trailer.mp4</code></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Custom Video Controls */}
          <div className="absolute bottom-0 inset-x-0 z-30 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-2">
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-neutral-700/60 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-[#D92D55] to-[#EBA6B6] rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs sm:text-sm pt-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="hover:text-pink-300 cursor-pointer flex items-center gap-2"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="hover:text-pink-300 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>

                <span className="text-[11px] text-neutral-400 hidden sm:inline">
                  {hasVideoError ? "Cinematic Montage Preview" : "4K Ultra HD"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleFullscreen}
                  className="hover:text-pink-300 cursor-pointer p-1"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
