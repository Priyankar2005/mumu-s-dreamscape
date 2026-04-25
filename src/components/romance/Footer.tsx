import { motion } from "motion/react";
import { Heart } from "lucide-react";

export const Footer = () => (
  <footer className="relative py-20 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-rose opacity-95" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.4)_0%,_transparent_60%)]" />

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-md mb-6"
      >
        <Heart className="h-12 w-12 fill-white text-white heart-beat" />
      </motion.div>

      <h2 className="font-serif italic text-5xl md:text-7xl leading-[0.95] mb-4">
        you, mumu — <br /> always you.
      </h2>
      <p className="font-script text-3xl md:text-4xl mb-2">i love you 💗</p>
      <p className="font-sans text-white/80 text-base max-w-md mx-auto mb-8">
        a little website, a forever feeling. handcrafted with every petal of love by your priyankar.
      </p>

      <div className="flex items-center justify-center gap-3 text-2xl mb-10">
        {["🌷","🌹","🌺","💮","🥀","🌸","🧸"].map((f, i) => (
          <span key={i} className="float-medium" style={{ animationDelay: `${i * 0.15}s` }}>{f}</span>
        ))}
      </div>

      <div className="pt-6 border-t border-white/30 text-white/80 text-sm font-sans">
        <p className="font-script text-xl">— priyankar &amp; mumu, forever —</p>
        <p className="mt-1 text-xs text-white/60">made with 💗 just for you</p>
      </div>
    </div>
  </footer>
);
