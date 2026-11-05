import React, { useState } from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import PhotoGallery from '../components/PhotoGallery';
import LoveLetter from '../components/LoveLetter';
import StoryTimeline from '../components/StoryTimeline';
import SurpriseBanner from '../components/SurpriseBanner';
import DetailModal from '../components/DetailModal';
import TrailerModal from '../components/TrailerModal';
import AboutModal from '../components/AboutModal';
import { CONFIG } from '../data/config';

export default function Home({
  onOpenSurprise,
  trailerOpen,
  onOpenTrailer,
  onCloseTrailer,
}) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const handlePlayStory = () => {
    // Scrolls to the Story Timeline or opens trailer
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenTrailer();
    }
  };

  return (
    <main className="relative z-10 w-full overflow-hidden">
      {/* Hero Section */}
      <div id="hero">
        <Hero
          onPlayStory={handlePlayStory}
          onMoreInfo={() => setAboutModalOpen(true)}
        />
      </div>

      {/* Netflix Horizontal Content Rows */}
      <div id="memories" className="relative z-20 -mt-16 sm:-mt-24 space-y-2 sm:space-y-4">
        {CONFIG.rows.map((row) => (
          <MovieRow
            key={row.id}
            row={row}
            onSelectCard={(item) => setSelectedCard(item)}
          />
        ))}
      </div>

      {/* Photo Memory Gallery Section */}
      <PhotoGallery />

      {/* Romantic Love Letter Section */}
      <LoveLetter />

      {/* Story Timeline Section */}
      <StoryTimeline />

      {/* Birthday Surprise Teaser Banner */}
      <SurpriseBanner onOpenSurprise={onOpenSurprise} />

      {/* Modals */}
      {selectedCard && (
        <DetailModal
          item={selectedCard}
          onClose={() => setSelectedCard(null)}
          onPlayTrailer={onOpenTrailer}
        />
      )}

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />

      <TrailerModal
        isOpen={trailerOpen}
        onClose={onCloseTrailer}
      />
    </main>
  );
}
