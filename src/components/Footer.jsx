import React from 'react';
import { Heart, Sparkles, ArrowUp, Film } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090609] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/5">
          {/* Brand & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-black tracking-widest netflix-brand">
                {CONFIG.siteTitle}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-500/30">
                Exclusive
              </span>
            </div>
            <p className="font-serif italic text-sm text-[#EBA6B6]">
              "{CONFIG.tagline}" • Starring {CONFIG.recipientName} ❤️
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            <button
              onClick={() => onNavigate('hero')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('memories')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Our Memories
            </button>
            <button
              onClick={() => onNavigate('letter')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Love Notes
            </button>
            <button
              onClick={() => onNavigate('story')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Photo Gallery
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-red-500/50 text-neutral-300 hover:text-white transition-all cursor-pointer flex items-center justify-center ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="flex items-center justify-center sm:justify-start gap-1.5 text-neutral-400">
            <span>Made with all my heart for</span>
            <span className="text-pink-300 font-semibold">{CONFIG.recipientName}</span>
            <Heart className="w-3.5 h-3.5 text-[#D92D55] fill-[#D92D55] inline" />
          </p>

          <p className="text-[11px] text-neutral-400 font-mono">
            {CONFIG.siteTitle} © {CONFIG.birthdayYear} • Lifetime Streaming License
          </p>
        </div>
      </div>
    </footer>
  );
}
