import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import MovieCard from './MovieCard';

export default function MovieRow({ row, onSelectCard }) {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [row.items]);

  const scroll = (direction) => {
    if (!rowRef.current) return;
    const { clientWidth } = rowRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="relative my-8 sm:my-10 px-4 sm:px-6 lg:px-12">
      {/* Row Header */}
      <div className="flex items-baseline justify-between mb-3.5">
        <div className="flex items-center gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
            <span>{row.title}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D92D55]" />
          </h2>
          {row.badge && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#D6B477] uppercase tracking-wider bg-[#1A0B14] px-2.5 py-0.5 rounded-full border border-[#D6B477]/30">
              <Sparkles className="w-3 h-3 text-[#D6B477]" />
              {row.badge}
            </span>
          )}
        </div>
      </div>

      {/* Row Carousel Area */}
      <div className="relative group">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-20 sm:h-24 bg-black/75 hover:bg-black/95 text-white flex items-center justify-center rounded-r-lg backdrop-blur-md border-r border-y border-white/10 shadow-2xl transition-all cursor-pointer opacity-90 hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
        )}

        {/* Scrollable Track */}
        <div
          ref={rowRef}
          onScroll={checkScroll}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-1 scroll-smooth"
        >
          {row.items.map((item) => (
            <MovieCard key={item.id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-20 sm:h-24 bg-black/75 hover:bg-black/95 text-white flex items-center justify-center rounded-l-lg backdrop-blur-md border-l border-y border-white/10 shadow-2xl transition-all cursor-pointer opacity-90 hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
