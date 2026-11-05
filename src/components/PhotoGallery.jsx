import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, X, Sparkles, Filter, Info } from 'lucide-react';
import { CONFIG } from '../data/config';
import { useSoundEffects } from '../hooks/useSoundEffects';

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Memories");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [photoLikes, setPhotoLikes] = useState(() => {
    const initial = {};
    CONFIG.galleryPhotos.forEach(p => {
      initial[p.id] = { likes: p.likes || 100, isLiked: false };
    });
    return initial;
  });
  const [showHelper, setShowHelper] = useState(false);
  const { playHeartPop } = useSoundEffects();

  const filteredPhotos = selectedCategory === "All Memories"
    ? CONFIG.galleryPhotos
    : CONFIG.galleryPhotos.filter(p => p.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'Escape') setLightboxIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos]);

  const handleNextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const togglePhotoLike = (e, photoId) => {
    e.stopPropagation();
    playHeartPop();
    setPhotoLikes(prev => {
      const current = prev[photoId] || { likes: 100, isLiked: false };
      const newIsLiked = !current.isLiked;
      return {
        ...prev,
        [photoId]: {
          likes: current.likes + (newIsLiked ? 1 : -1),
          isLiked: newIsLiked
        }
      };
    });
  };

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B477]" />
            <span>Captured Memories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Photo Memory Gallery
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-1 font-light">
            Every snapshot holds a thousand smiles and endless affection.
          </p>
        </div>

        {/* Customization helper button */}
        <button
          onClick={() => setShowHelper(!showHelper)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer self-start md:self-auto"
        >
          <Info className="w-3.5 h-3.5 text-[#D6B477]" />
          <span>How to add your real photos</span>
        </button>
      </div>

      {/* Helper Box */}
      <AnimatePresence>
        {showHelper && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 p-4 rounded-xl glass-card border border-[#D6B477]/40 text-xs text-neutral-300 space-y-1.5"
          >
            <p className="font-semibold text-[#D6B477] flex items-center gap-1.5">
              <span>💡 Easily personalize this gallery with Saumya's real photographs:</span>
            </p>
            <p>1. Drop your JPG or PNG files into the project's <code className="text-pink-300 bg-black/50 px-1 py-0.5 rounded">public/images/</code> folder.</p>
            <p>2. Open <code className="text-pink-300 bg-black/50 px-1 py-0.5 rounded">src/data/config.js</code> and update the <code className="text-pink-300 bg-black/50 px-1 py-0.5 rounded">galleryPhotos</code> array with your image paths and sweet captions.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
        <Filter className="w-4 h-4 text-neutral-500 mr-1 flex-shrink-0" />
        {CONFIG.galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === category
                ? 'bg-[#D92D55] text-white shadow-glow-red font-semibold'
                : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredPhotos.map((photo, idx) => {
          const likeInfo = photoLikes[photo.id] || { likes: photo.likes || 100, isLiked: false };

          return (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#140D13] border border-white/5 hover:border-red-500/40 shadow-xl cursor-pointer aspect-[4/5]"
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/fallbacks/gallery-fallback.svg';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-pink-200">
                  {photo.category}
                </span>
              </div>

              {/* Heart Favorite Interaction */}
              <button
                onClick={(e) => togglePhotoLike(e, photo.id)}
                className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white text-xs transition-transform active:scale-90"
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    likeInfo.isLiked ? 'text-[#D92D55] fill-[#D92D55]' : 'text-neutral-300'
                  }`}
                />
                <span className="text-[11px] font-mono">{likeInfo.likes}</span>
              </button>

              {/* Caption Card on Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] text-pink-300 font-medium tracking-wider uppercase block mb-1">
                  {photo.date}
                </span>
                <h3 className="text-base font-semibold text-white group-hover:text-pink-200 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2 font-light">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Nav Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image View */}
              <div className="relative rounded-2xl overflow-hidden max-h-[72vh] bg-black shadow-2xl border border-white/10">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/fallbacks/gallery-fallback.svg';
                  }}
                  className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Caption and Info Below Image */}
              <div className="w-full max-w-2xl text-center mt-4 px-4">
                <div className="flex items-center justify-center gap-3 text-xs text-neutral-400 mb-1">
                  <span className="text-[#D6B477] font-semibold">{activePhoto.category}</span>
                  <span>•</span>
                  <span>{activePhoto.date}</span>
                  <span>•</span>
                  <span>{lightboxIndex + 1} of {filteredPhotos.length}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  {activePhoto.title}
                </h3>
                <p className="font-serif italic text-sm sm:text-base text-pink-200">
                  "{activePhoto.caption}"
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
