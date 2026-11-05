import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles, X, Cake, Flame, Smile } from 'lucide-react';
import { CONFIG } from '../data/config';
import { useSoundEffects } from '../hooks/useSoundEffects';

export default function BirthdaySurprise({ isOpen, onClose }) {
  const [step, setStep] = useState('gift'); // 'gift' | 'opened'
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [hugCount, setHugCount] = useState(0);
  const [showHugMessage, setShowHugMessage] = useState(false);
  const { playChime, playHeartPop, playCinemaTaDum } = useSoundEffects();
  const { birthdaySurprise } = CONFIG;

  if (!isOpen) return null;

  const triggerConfettiExplosion = () => {
    // Left & Right canons
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6, x: 0.2 },
      colors: ['#D92D55', '#EBA6B6', '#D6B477', '#FFFFFF', '#FF69B4']
    });
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6, x: 0.8 },
      colors: ['#D92D55', '#EBA6B6', '#D6B477', '#FFFFFF', '#FF69B4']
    });

    // Center starburst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#D92D55', '#EBA6B6', '#D6B477', '#FFDF00']
      });
    }, 400);
  };

  const handleOpenGift = () => {
    playChime();
    setStep('opened');
    triggerConfettiExplosion();
  };

  const handleBlowCandles = () => {
    playHeartPop();
    setCandlesBlown(true);
    triggerConfettiExplosion();
  };

  const handleGiveHug = () => {
    playHeartPop();
    setHugCount(prev => prev + 1);
    setShowHugMessage(true);

    // Confetti heart burst
    confetti({
      particleCount: 60,
      spread: 90,
      origin: { y: 0.7, x: 0.5 },
      colors: ['#D92D55', '#FF4081', '#EBA6B6']
    });
  };

  const handleReset = () => {
    setStep('gift');
    setCandlesBlown(false);
    setShowHugMessage(false);
    setHugCount(0);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Dimmed Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
        />

        {/* Surprise Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-2xl w-full text-center z-10 my-auto py-8 px-6 sm:px-10 rounded-3xl glass-card border border-red-500/40 shadow-glow-red"
        >
          {/* Close Button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'gift' ? (
            /* STEP 1: UNOPENED GIFT BOX */
            <div className="flex flex-col items-center py-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D6B477] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D6B477]" />
                <span>Special Delivery for Saumya</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
                Your Birthday Surprise
              </h2>
              <p className="text-sm font-serif italic text-pink-200 mb-8 max-w-md">
                Wrapped with infinite love, sealed with a hundred warm hugs.
              </p>

              {/* 3D Animated Gift Box */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenGift}
                className="group relative cursor-pointer my-4"
              >
                {/* Glow behind gift box */}
                <div className="absolute inset-0 bg-[#D92D55] blur-3xl opacity-40 group-hover:opacity-75 transition-opacity" />

                {/* Box Structure */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-[#941334] via-[#D92D55] to-[#FF4F79] p-1 shadow-2xl border-2 border-[#D6B477] flex items-center justify-center">
                  {/* Ribbon Horizontal */}
                  <div className="absolute inset-x-0 h-8 bg-gradient-to-r from-[#C29C5B] via-[#F3E5AB] to-[#C29C5B] shadow-md" />
                  {/* Ribbon Vertical */}
                  <div className="absolute inset-y-0 w-8 bg-gradient-to-b from-[#C29C5B] via-[#F3E5AB] to-[#C29C5B] shadow-md" />

                  {/* Ribbon Bow on Top */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F3E5AB] to-[#C29C5B] flex items-center justify-center shadow-lg border border-yellow-200 animate-bounce">
                      <Heart className="w-6 h-6 text-[#941334] fill-[#941334]" />
                    </div>
                  </div>

                  {/* Center Emblem */}
                  <div className="z-10 text-white font-black text-center">
                    <span className="text-xs uppercase tracking-widest text-pink-100">Tap to</span>
                    <h3 className="text-xl sm:text-2xl font-serif">OPEN</h3>
                  </div>
                </div>
              </motion.div>

              <button
                onClick={handleOpenGift}
                className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D92D55] to-[#B31D42] text-white font-semibold text-base shadow-glow-red hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <Gift className="w-5 h-5 text-[#D6B477]" />
                <span>Open Your Birthday Surprise</span>
              </button>
            </div>
          ) : (
            /* STEP 2: OPENED CELEBRATION, CAKE & MESSAGE */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="py-4 space-y-6"
            >
              {/* Glowing Birthday Cake */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Animated Cake Icon & Glowing Candles */}
                  <div className="relative p-4 rounded-3xl bg-red-950/40 border border-red-500/30 shadow-glow-red">
                    <Cake className="w-16 h-16 sm:w-20 sm:h-20 text-pink-300 mx-auto" />

                    {/* Flickering Candle Flames */}
                    <div className="absolute -top-2 inset-x-0 flex justify-center gap-3">
                      {[1, 2, 3].map((candle) => (
                        <div key={candle} className="flex flex-col items-center">
                          {!candlesBlown ? (
                            <motion.div
                              animate={{ scale: [1, 1.25, 0.9, 1.1], opacity: [0.9, 1, 0.8, 1] }}
                              transition={{ repeat: Infinity, duration: 1.2 + candle * 0.2 }}
                              className="w-3.5 h-3.5 rounded-full bg-yellow-400 blur-[1px] shadow-[0_0_12px_#ffea00]"
                            >
                              <Flame className="w-3.5 h-3.5 text-yellow-500 fill-yellow-300" />
                            </motion.div>
                          ) : (
                            <motion.span
                              initial={{ opacity: 1, y: 0 }}
                              animate={{ opacity: 0, y: -15 }}
                              className="text-xs text-neutral-400"
                            >
                              💨
                            </motion.span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {!candlesBlown ? (
                  <button
                    onClick={handleBlowCandles}
                    className="mt-3 text-xs font-semibold text-[#D6B477] hover:underline cursor-pointer flex items-center gap-1.5"
                  >
                    <Flame className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Click to make a wish & blow out candles!</span>
                  </button>
                ) : (
                  <span className="mt-3 text-xs font-semibold text-pink-300 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D6B477]" />
                    <span>Wish made! May it all come true! ✨</span>
                  </span>
                )}
              </div>

              {/* Glowing Main Birthday Message */}
              <div className="space-y-3 max-w-lg mx-auto">
                <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight netflix-brand">
                  {birthdaySurprise.bannerTitle}
                </h2>

                <p className="font-serif text-base sm:text-lg text-white/95 leading-relaxed">
                  {birthdaySurprise.messageParagraph1}
                </p>

                <p className="font-serif italic text-sm sm:text-base text-pink-200 leading-relaxed">
                  {birthdaySurprise.messageParagraph2}
                </p>

                <p className="font-serif font-bold text-lg sm:text-xl text-[#D6B477] tracking-wider pt-2">
                  {birthdaySurprise.highlightText}
                </p>
              </div>

              {/* One More Hug Button & Message */}
              <div className="pt-4 flex flex-col items-center">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleGiveHug}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D92D55] via-[#E83E66] to-[#D92D55] text-white font-bold text-sm tracking-wide shadow-glow-red hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
                  <span>{birthdaySurprise.hugButtonText}</span>
                  {hugCount > 0 && (
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-black/40 text-[11px]">
                      +{hugCount}
                    </span>
                  )}
                </motion.button>

                {showHugMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-xs sm:text-sm font-serif italic text-pink-200 max-w-md"
                  >
                    "{birthdaySurprise.hugMessage}"
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
