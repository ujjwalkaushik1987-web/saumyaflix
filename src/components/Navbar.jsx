import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Heart, Gift, Film, Sparkles, BookOpen, Image as ImageIcon } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Navbar({
  audioState,
  activeSection,
  onNavigate,
  onOpenSurprise,
  onOpenTrailer
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'Our Memories', target: 'memories' },
    { label: 'Love Notes', target: 'letter' },
    { label: 'Our Story', target: 'story' },
    { label: 'Photo Gallery', target: 'gallery' },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg'
            : 'bg-gradient-to-b from-[#090609]/90 via-[#090609]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo & Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-2xl sm:text-3xl font-black tracking-widest netflix-brand cursor-pointer hover:scale-105 transition-transform flex items-center gap-1.5 focus:outline-none"
            >
              <span>{CONFIG.siteTitle}</span>
              <span className="w-2 h-2 rounded-full bg-[#D92D55] animate-ping" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.target)}
                  className={`text-sm font-medium tracking-wide transition-colors cursor-pointer hover:text-white ${
                    activeSection === item.target
                      ? 'text-[#D92D55] font-semibold'
                      : 'text-neutral-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Actions, Music & Surprise Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Music Controls */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                onClick={audioState.togglePlay}
                title={audioState.isPlaying ? "Pause Romantic Music" : "Play Romantic Music"}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-950/40 hover:bg-red-900/50 border border-red-500/20 text-xs text-pink-200 transition-all cursor-pointer backdrop-blur-md"
              >
                {audioState.isPlaying && !audioState.isMuted ? (
                  <Volume2 className="w-4 h-4 text-[#D92D55] animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-neutral-400" />
                )}

                {/* Animated Visualizer Bars */}
                <div className="flex items-end gap-0.5 h-3.5 w-6">
                  {audioState.visualizerData.slice(0, 4).map((height, i) => (
                    <span
                      key={i}
                      className="w-1 bg-[#D92D55] rounded-t-sm transition-all duration-150"
                      style={{
                        height: audioState.isPlaying ? `${Math.max(15, height)}%` : '20%',
                        opacity: audioState.isPlaying ? 1 : 0.4
                      }}
                    />
                  ))}
                </div>

                <span className="hidden sm:inline text-[11px] font-medium">
                  {audioState.isPlaying ? "Music ON" : "Music OFF"}
                </span>
              </button>

              {/* Volume Slider Flyout */}
              <AnimatePresence>
                {showVolumeSlider && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 top-full mt-2 p-2 rounded-xl glass-card flex items-center gap-2 shadow-2xl z-50 w-36"
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={audioState.isMuted ? 0 : audioState.volume}
                      onChange={(e) => audioState.setVolume(parseFloat(e.target.value))}
                      className="w-full accent-[#D92D55] cursor-pointer h-1 bg-neutral-700 rounded-lg"
                    />
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {Math.round((audioState.isMuted ? 0 : audioState.volume) * 100)}%
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Trailer Quick Button */}
            <button
              onClick={onOpenTrailer}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-white transition-all cursor-pointer backdrop-blur-md"
            >
              <Film className="w-3.5 h-3.5 text-pink-300" />
              <span>Trailer</span>
            </button>

            {/* Birthday Surprise Highlight Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenSurprise}
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D92D55] to-[#B31D42] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-glow-red hover:shadow-lg transition-all cursor-pointer"
            >
              <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6B477] animate-bounce" />
              <span>Surprise</span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden glass-card mx-3 my-2 p-5 rounded-2xl shadow-2xl border border-red-500/20"
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left py-2 px-3 rounded-lg hover:bg-red-950/30 text-white font-medium flex items-center justify-between"
              >
                <span>Home</span>
                <Heart className="w-4 h-4 text-[#D92D55]" />
              </button>
              <button
                onClick={() => handleNavClick('memories')}
                className="text-left py-2 px-3 rounded-lg hover:bg-red-950/30 text-white font-medium flex items-center justify-between"
              >
                <span>Our Memories</span>
                <Sparkles className="w-4 h-4 text-[#D6B477]" />
              </button>
              <button
                onClick={() => handleNavClick('letter')}
                className="text-left py-2 px-3 rounded-lg hover:bg-red-950/30 text-white font-medium flex items-center justify-between"
              >
                <span>Love Notes</span>
                <BookOpen className="w-4 h-4 text-pink-300" />
              </button>
              <button
                onClick={() => handleNavClick('story')}
                className="text-left py-2 px-3 rounded-lg hover:bg-red-950/30 text-white font-medium flex items-center justify-between"
              >
                <span>Our Story Timeline</span>
                <Film className="w-4 h-4 text-red-400" />
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className="text-left py-2 px-3 rounded-lg hover:bg-red-950/30 text-white font-medium flex items-center justify-between"
              >
                <span>Photo Gallery</span>
                <ImageIcon className="w-4 h-4 text-pink-400" />
              </button>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTrailer();
                  }}
                  className="flex items-center gap-2 py-2 px-3 text-sm text-pink-200"
                >
                  <Film className="w-4 h-4 text-[#D92D55]" />
                  <span>Play Birthday Trailer</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
