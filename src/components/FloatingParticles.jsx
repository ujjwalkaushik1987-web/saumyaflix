import React, { useMemo } from 'react';

export default function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.random() * 3) % 100}%`,
      size: `${Math.floor(Math.random() * 12) + 10}px`,
      duration: `${Math.floor(Math.random() * 12) + 14}s`,
      delay: `${Math.random() * 8}s`,
      opacity: Math.random() * 0.25 + 0.08,
      symbol: i % 4 === 0 ? '❤️' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '💖' : '🌸'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-heart select-none"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
