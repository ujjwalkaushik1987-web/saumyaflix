import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, RefreshCw, Eye, BookOpen } from 'lucide-react';
import { CONFIG } from '../data/config';
import { useSoundEffects } from '../hooks/useSoundEffects';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [revealedParagraphs, setRevealedParagraphs] = useState(0);
  const { playChime, playHeartPop } = useSoundEffects();
  const { loveLetter } = CONFIG;

  const totalParagraphs = loveLetter.paragraphs.length;

  const handleOpenEnvelope = () => {
    playChime();
    setIsOpen(true);
    setRevealedParagraphs(0);
  };

  // Progressive reveal of paragraphs for a warm, heartfelt reading pacing
  useEffect(() => {
    if (!isOpen) return;

    if (revealedParagraphs < totalParagraphs) {
      const timer = setTimeout(() => {
        setRevealedParagraphs(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, revealedParagraphs, totalParagraphs]);

  const handleReset = (e) => {
    e.stopPropagation();
    playHeartPop();
    setIsOpen(false);
    setRevealedParagraphs(0);
  };

  return (
    <section id="letter" className="py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(217,45,85,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#D6B477]" />
          <span>Personal Handwritten Note</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          {loveLetter.sectionTitle}
        </h2>
        <p className="text-sm sm:text-base font-serif italic text-pink-200 mt-2">
          {loveLetter.subtitle}
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {!isOpen ? (
          /* Sealed Envelope View */
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            onClick={handleOpenEnvelope}
            className="group relative w-full max-w-lg aspect-[16/11] bg-gradient-to-br from-[#1F101A] to-[#120810] rounded-2xl p-6 sm:p-8 border border-red-500/30 shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Envelope flap aesthetic */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent border-b border-white/5 pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="text-[11px] font-serif tracking-widest text-pink-300 uppercase">
                Air Mail • For Saumya's Eyes Only
              </span>
              <div className="flex items-center gap-1 text-[11px] text-[#D6B477]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Confidential Love</span>
              </div>
            </div>

            {/* Center Wax Seal */}
            <div className="flex flex-col items-center justify-center my-auto z-10">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E62E5C] via-[#B31D42] to-[#730D26] p-1 shadow-glow-red flex items-center justify-center border-2 border-[#D6B477]/50"
              >
                <div className="w-full h-full rounded-full border border-dashed border-red-200/50 flex flex-col items-center justify-center text-center">
                  <Heart className="w-6 h-6 text-white fill-white mb-0.5 animate-pulse" />
                  <span className="text-[10px] font-serif font-black tracking-widest text-white">
                    SEALED
                  </span>
                </div>
              </motion.div>
              <span className="text-xs font-serif italic text-pink-200 mt-3 group-hover:text-white transition-colors">
                Tap the wax seal to open
              </span>
            </div>

            <div className="flex justify-between items-end text-neutral-400 text-xs z-10 font-serif">
              <span>Stamp: Forever & Always</span>
              <span className="text-[#D92D55] font-semibold">Priority Delivery ❤️</span>
            </div>
          </motion.div>
        ) : (
          /* Unfolded Parchment Letter View */
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full letter-paper rounded-2xl p-8 sm:p-12 text-[#2A1B24] border-2 border-[#D6B477]/60 relative shadow-2xl"
          >
            {/* Vintage watermark stamp */}
            <div className="absolute top-6 right-6 opacity-20 pointer-events-none select-none">
              <div className="w-16 h-16 rounded-full border-2 border-red-900 flex items-center justify-center rotate-12">
                <span className="text-[10px] font-bold text-red-950 uppercase text-center leading-tight">
                  ORIGINAL<br />LOVE
                </span>
              </div>
            </div>

            {/* Salutation */}
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-serif text-2xl sm:text-3xl font-bold text-[#801431] mb-6 tracking-wide"
            >
              {loveLetter.salutation}
            </motion.h3>

            {/* Paragraphs */}
            <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#3D2534]">
              {loveLetter.paragraphs.map((p, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: index <= revealedParagraphs ? 1 : 0.2,
                    y: index <= revealedParagraphs ? 0 : 5
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Closing & Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: revealedParagraphs >= totalParagraphs ? 1 : 0.3 }}
              transition={{ delay: 0.2 }}
              className="mt-8 pt-6 border-t border-[#D6B477]/30 flex flex-col items-end"
            >
              <p className="font-serif italic text-xl sm:text-2xl font-bold text-[#801431]">
                {loveLetter.closing}
              </p>
              {loveLetter.postscript && (
                <p className="font-serif italic text-xs text-[#694857] mt-2">
                  {loveLetter.postscript}
                </p>
              )}
            </motion.div>

            {/* Letter Controls */}
            <div className="mt-8 pt-4 flex items-center justify-between border-t border-black/10">
              <button
                onClick={() => setRevealedParagraphs(totalParagraphs)}
                className="text-xs text-[#801431] hover:underline cursor-pointer flex items-center gap-1 font-sans"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Show all text</span>
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-[#801431] font-semibold hover:underline cursor-pointer flex items-center gap-1 font-sans"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Fold back into envelope</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
