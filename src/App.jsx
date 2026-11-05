import React, { useState, useEffect } from 'react';
import OpeningScreen from './components/OpeningScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BirthdaySurprise from './components/BirthdaySurprise';
import MusicPlayer from './components/MusicPlayer';
import FloatingParticles from './components/FloatingParticles';
import Footer from './components/Footer';
import useAudio from './hooks/useAudio';

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const audioState = useAudio();

  const handleOpenTrailer = () => {
    if (audioState.isPlaying) {
      audioState.togglePlay();
      sessionStorage.setItem('resumeMusicOnClose', 'true');
    }
    setTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setTrailerOpen(false);
    if (sessionStorage.getItem('resumeMusicOnClose') === 'true') {
      sessionStorage.removeItem('resumeMusicOnClose');
      audioState.startMusic();
    }
  };

  const handleStartCelebration = () => {
    setShowOpening(false);
    // User interaction enables browser audio autoplay
    audioState.startMusic();
  };

  const handleNavigate = (targetId) => {
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'memories', 'gallery', 'letter', 'story'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090609] text-white selection:bg-[#D92D55] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Opening Screen */}
      {showOpening && (
        <OpeningScreen onStartCelebration={handleStartCelebration} />
      )}

      {/* Ambient Floating Hearts & Particles */}
      <FloatingParticles />

      {/* Main Navigation Bar */}
      <Navbar
        audioState={audioState}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSurprise={() => setSurpriseOpen(true)}
        onOpenTrailer={handleOpenTrailer}
      />

      {/* Main Content Area */}
      <Home
        onOpenSurprise={() => setSurpriseOpen(true)}
        trailerOpen={trailerOpen}
        onOpenTrailer={handleOpenTrailer}
        onCloseTrailer={handleCloseTrailer}
      />

      {/* Floating Music Visualizer Dock */}
      <MusicPlayer audioState={audioState} />

      {/* Birthday Surprise Fullscreen Experience Modal */}
      <BirthdaySurprise
        isOpen={surpriseOpen}
        onClose={() => setSurpriseOpen(false)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
