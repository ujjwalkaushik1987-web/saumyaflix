import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Star, Award, ShieldCheck, Sun } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const attributes = [
    { label: "Radiance", value: "Infinite Lumens", icon: Sun },
    { label: "Kindness Rating", value: "Off the Charts", icon: Heart },
    { label: "Cuteness Score", value: "Maximum 10/10", icon: Sparkles },
    { label: "Heart Status", value: "Purest Gold", icon: Award },
    { label: "Security Clearance", value: "Key to My Soul", icon: ShieldCheck },
    { label: "Star Sign", value: "My Entire Constellation", icon: Star },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 25 }}
          className="relative w-full max-w-2xl rounded-2xl overflow-hidden glass-card border border-red-500/30 shadow-2xl z-10 p-6 sm:p-8 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#D92D55] animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6B477]">
              Character Profile & Spotlight
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            Meet the Star: {CONFIG.recipientName}
          </h2>

          <p className="font-serif italic text-base text-pink-200 mb-6">
            "{CONFIG.hero.subtitle}"
          </p>

          {/* Synopsis */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6 text-sm text-neutral-300 leading-relaxed font-light">
            {CONFIG.hero.overview}
          </div>

          {/* Attribute Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {attributes.map((attr, idx) => {
              const IconComp = attr.icon;
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-1">
                    <IconComp className="w-3.5 h-3.5 text-[#D92D55]" />
                    <span>{attr.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {attr.value}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom Badge */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <span>Special Birthday Edition • All Rights Given to You</span>
            <span className="text-[#D92D55] font-semibold flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-[#D92D55]" />
              Endless Love
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
