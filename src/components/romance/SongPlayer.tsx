import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music, Pause, Play } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VIDEO_ID = "7rA02T9_kh8";
const START_SECONDS = 174; // 2:54

export const SongPlayer = () => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const initPlayer = () => {
      if (!containerRef.current || playerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          start: START_SECONDS,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => {
            setReady(true);
            try {
              e.target.seekTo(START_SECONDS, true);
              e.target.unMute?.();
              e.target.setVolume?.(60);
              e.target.playVideo();
              setTimeout(() => {
                const state = e.target.getPlayerState?.();
                if (state !== 1) setNeedsTap(true);
              }, 800);
            } catch {
              setNeedsTap(true);
            }
          },
          onStateChange: (e: any) => {
            // 1 = playing, 2 = paused, 0 = ended
            if (e.data === 1) {
              setPlaying(true);
              setNeedsTap(false);
            } else if (e.data === 2) {
              setPlaying(false);
            } else if (e.data === 0) {
              try {
                e.target.seekTo(START_SECONDS, true);
                e.target.playVideo();
              } catch {}
            }
          },
        },
      });
    };

    if (!document.getElementById("yt-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "yt-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = initPlayer;
    } else if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      try {
        playerRef.current?.destroy?.();
      } catch {}
      playerRef.current = null;
    };
  }, []);

  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;
    try {
      p.unMute?.();
      if (playing) {
        p.pauseVideo();
      } else {
        const t = p.getCurrentTime?.() ?? 0;
        if (t < START_SECONDS - 1) p.seekTo(START_SECONDS, true);
        p.playVideo();
      }
    } catch {}
  };

  return (
    <>
      {/* Hidden YouTube iframe (audio only) */}
      <div
        style={{
          position: "fixed",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
          left: -9999,
          top: -9999,
        }}
        aria-hidden
      >
        <div ref={containerRef} />
      </div>

      {/* Floating control */}
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full px-4 py-3 backdrop-blur-xl border border-rose/40 bg-background/40 shadow-[0_8px_32px_hsl(var(--rose)/0.35)]"
        aria-label={playing ? "Pause song" : "Play our song"}
      >
        <motion.span
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: playing ? Infinity : 0, duration: 6, ease: "linear" }}
          className="text-rose"
        >
          <Music className="h-4 w-4" />
        </motion.span>
        <span className="text-xs font-medium tracking-wide text-foreground/90">
          {needsTap && !playing
            ? "Tap to play our song 💕"
            : playing
            ? "Our song is playing"
            : ready
            ? "Play our song"
            : "Loading…"}
        </span>
        {playing ? (
          <Pause className="h-3.5 w-3.5 text-rose" />
        ) : (
          <Play className="h-3.5 w-3.5 text-rose" />
        )}
      </motion.button>
    </>
  );
};
