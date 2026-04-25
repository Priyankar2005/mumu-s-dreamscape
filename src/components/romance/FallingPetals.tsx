import { useMemo } from "react";

const EMOJIS = ["🌹", "🌷", "🌺", "💮", "🌸", "🥀", "💗", "💕", "✨"];

export const FallingPetals = ({ count = 24 }: { count?: number }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 14 + Math.random() * 22,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        rotate: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            filter: "drop-shadow(0 4px 8px hsl(345 70% 50% / 0.3))",
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};
