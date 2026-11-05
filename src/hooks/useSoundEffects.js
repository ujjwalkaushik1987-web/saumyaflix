/**
 * useSoundEffects Hook
 * Provides Web Audio API synthesizers for cinema chime, gentle clicks, and celebratory chords.
 * Zero external audio dependencies required!
 */
export function useSoundEffects() {
  const playCinemaTaDum = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Deep cinematic boom (sub bass)
      const oscLow = ctx.createOscillator();
      const gainLow = ctx.createGain();
      oscLow.type = 'sine';
      oscLow.frequency.setValueAtTime(110, ctx.currentTime);
      oscLow.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 1.2);

      gainLow.gain.setValueAtTime(0.4, ctx.currentTime);
      gainLow.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

      oscLow.connect(gainLow);
      gainLow.connect(ctx.destination);

      oscLow.start(ctx.currentTime);
      oscLow.stop(ctx.currentTime + 1.8);

      // Shimmering romantic harmonic chime
      const freqs = [330, 440, 659.25, 880];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + 0.15 + idx * 0.08);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + 0.15 + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.25 + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + 0.15 + idx * 0.08);
        osc.stop(ctx.currentTime + 2.2);
      });
    } catch {
      // Audio context may be restricted before user gesture
    }
  };

  const playHeartPop = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.18); // C6

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // ignore
    }
  };

  const playChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      [587.33, 739.99, 880, 1174.66].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + i * 0.1 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.8);
      });
    } catch {
      // ignore
    }
  };

  return { playCinemaTaDum, playHeartPop, playChime };
}

export default useSoundEffects;
