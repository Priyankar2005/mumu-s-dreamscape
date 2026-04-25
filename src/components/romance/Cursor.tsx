import { useEffect, useState } from "react";

export const HeartCursor = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let id = 0;
    let last = 0;
    const handler = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last < 60) return;
      last = now;
      const newHeart = { id: id++, x: e.clientX, y: e.clientY };
      setHearts((h) => [...h.slice(-15), newHeart]);
      setTimeout(() => {
        setHearts((h) => h.filter((it) => it.id !== newHeart.id));
      }, 1200);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute select-none text-xl"
          style={{
            left: h.x,
            top: h.y,
            transform: "translate(-50%, -50%)",
            animation: "float 1.2s ease-out forwards",
            color: "hsl(var(--rose))",
            filter: "drop-shadow(0 0 6px hsl(345 90% 70% / 0.8))",
          }}
        >
          💗
        </span>
      ))}
    </div>
  );
};
