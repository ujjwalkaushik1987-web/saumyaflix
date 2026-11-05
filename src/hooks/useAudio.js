import { useState, useEffect, useRef, useCallback } from 'react';
import { CONFIG } from '../data/config';

/**
 * useAudio Hook
 * Manages background music playback, volume, looping, and visualizer data.
 * Features automatic graceful fallback to a Web Audio romantic ambient chime synthesizer
 * so audio plays even before a custom MP3 is dropped into public/music/.
 */
export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isSynthMode, setIsSynthMode] = useState(false);
  const [visualizerData, setVisualizerData] = useState([20, 45, 75, 55, 30, 80, 60, 40, 25, 65, 85, 35]);

  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const synthTimerRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Initialize HTML5 Audio
  useEffect(() => {
    const audio = new Audio();
    audio.src = CONFIG.musicFile;
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Handle audio error -> switch to romantic synthesized chords
    const handleError = () => {
      // Audio file not found or unsupported - fallback to procedural ambient romance synthesizer
      setIsSynthMode(true);
    };

    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        try {
          audioContextRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Procedural Romantic Chord Synthesizer (Fallback when no MP3 is present)
  const startRomanticSynth = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
        audioContextRef.current = new AudioContext();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Romantic chord notes (Frequencies in Hz: C4, E4, G4, B4, D5, A4, etc.)
      // Progression: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4
      const chords = [
        [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
        [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
        [174.61, 261.63, 329.63, 349.23, 440.00], // Fmaj7
        [196.00, 261.63, 293.66, 392.00, 493.88], // Gsus4
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!isPlaying && !audioContextRef.current) return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc.type = i % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Gentle romantic arpeggiated envelope
          const noteTime = ctx.currentTime + i * 0.22;
          const currentVol = isMuted ? 0 : volume * 0.12;

          gainNode.gain.setValueAtTime(0.001, noteTime);
          gainNode.gain.exponentialRampToValueAtTime(currentVol, noteTime + 0.15);
          gainNode.gain.exponentialRampToValueAtTime(0.0001, noteTime + 2.8);

          osc.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc.start(noteTime);
          osc.stop(noteTime + 3.0);
        });
      };

      playChord();
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
      synthTimerRef.current = setInterval(playChord, 3200);
    } catch {
      // Fallback gracefully if Web Audio is blocked
    }
  }, [isPlaying, isMuted, volume]);

  const stopRomanticSynth = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  }, []);

  // Visualizer animated pulse loop
  useEffect(() => {
    if (!isPlaying) {
      setVisualizerData([15, 20, 15, 25, 18, 20, 15, 25, 18, 15, 20, 15]);
      return;
    }

    const interval = setInterval(() => {
      setVisualizerData(prev =>
        prev.map(() => Math.floor(Math.random() * 70) + 25)
      );
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Play / Pause toggle
  const togglePlay = useCallback(async () => {
    if (isPlaying) {
      if (audioRef.current && !isSynthMode) {
        audioRef.current.pause();
      }
      stopRomanticSynth();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      if (audioRef.current && !isSynthMode) {
        try {
          await audioRef.current.play();
        } catch {
          // If playback of local file fails, switch to romantic synth smoothly
          setIsSynthMode(true);
          startRomanticSynth();
        }
      } else {
        startRomanticSynth();
      }
    }
  }, [isPlaying, isSynthMode, startRomanticSynth, stopRomanticSynth]);

  // Start music explicitly (used when clicking "Start Celebration")
  const startMusic = useCallback(async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    if (audioRef.current && !isSynthMode) {
      try {
        await audioRef.current.play();
      } catch {
        setIsSynthMode(true);
        startRomanticSynth();
      }
    } else {
      startRomanticSynth();
    }
  }, [isPlaying, isSynthMode, startRomanticSynth]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const handleVolumeChange = useCallback((newVol) => {
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  return {
    isPlaying,
    volume,
    isMuted,
    visualizerData,
    togglePlay,
    startMusic,
    toggleMute,
    setVolume: handleVolumeChange,
    trackTitle: CONFIG.musicTitle,
    artist: CONFIG.musicArtist
  };
}

export default useAudio;
