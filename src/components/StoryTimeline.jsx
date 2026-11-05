import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Heart, Film } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function StoryTimeline() {
  const { timeline } = CONFIG;

  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-3">
          <Film className="w-3.5 h-3.5 text-[#D6B477]" />
          <span>Episodes of Our Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          The Story of Us
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 font-light">
          From the very first moment to every tomorrow, here is how our favorite story unfolded.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Central Glowing Line (Desktop) / Left Line (Mobile) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#D92D55] via-[#EBA6B6]/60 to-[#D92D55]/20 shadow-[0_0_15px_rgba(217,45,85,0.6)]" />

        {/* Timeline Milestones */}
        <div className="space-y-12 sm:space-y-16">
          {timeline.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Milestone Node on Center Line */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1A0B14] border-2 border-[#D92D55] flex items-center justify-center text-sm shadow-glow-red z-20">
                  <span>{event.emoji || '❤️'}</span>
                </div>

                {/* Content Card */}
                <div className="ml-14 md:ml-0 w-full md:w-[calc(50%-2.5rem)]">
                  <div className="group rounded-2xl overflow-hidden glass-card hover:border-red-500/50 transition-all duration-300 shadow-2xl">
                    {/* Event Photo */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/fallbacks/timeline-fallback.svg';
                        }}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140D13] via-[#140D13]/30 to-transparent" />

                      {/* Date Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-[11px] font-bold text-red-200 backdrop-blur-md flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#D6B477]" />
                          <span>{event.date}</span>
                        </span>
                      </div>

                      {/* Tag Badge */}
                      {event.tag && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-medium text-pink-200 backdrop-blur-md">
                            {event.tag}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-pink-200 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-neutral-300 mt-2 font-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty Spacer Column for Desktop Symmetry */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
