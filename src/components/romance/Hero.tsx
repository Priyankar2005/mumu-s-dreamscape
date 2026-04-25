import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import photo9 from "@/assets/mumu/photo9.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-rose opacity-40 blur-3xl float-slow" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-sunset opacity-40 blur-3xl float-medium" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-tulip opacity-30 blur-3xl float-fast" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 glass-rose rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-rosy" />
            <span className="text-xs font-medium text-rosy-deep">A love letter from Priyankar</span>
          </div>

          <h1 className="font-serif italic text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-rosy-deep mb-2">
            For my
          </h1>
          <h1 className="font-script text-7xl md:text-8xl lg:text-9xl shimmer-text text-glow leading-none mb-6">
            Mumu
          </h1>

          <p className="font-serif italic text-2xl md:text-3xl text-rosy-deep/80 mb-3">
            Lost in her eyes <span className="text-rosy">forever</span>.
          </p>
          <p className="font-sans text-base md:text-lg text-rosy-deep/70 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            A garden of tulips, lilies and roses — all of them less beautiful than you.
            This little corner of the internet is mine, made only for you. 💗
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#letter"
              className="glass-rose-strong rounded-full px-6 py-3 text-rosy-deep font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              <Heart className="h-4 w-4 fill-rosy text-rosy heart-beat" />
              Read my letter
            </a>
            <a
              href="#eyes"
              className="bg-gradient-rose text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 hover:scale-105 transition shadow-lg"
              style={{ boxShadow: "0 10px 30px hsl(345 80% 50% / 0.4)" }}
            >
              <Sparkles className="h-4 w-4" />
              See her eyes
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 justify-center md:justify-start text-rosy-deep/60 text-sm">
            <div className="flex -space-x-2">
              {["🌹", "🌷", "🌺"].map((e, i) => (
                <span key={i} className="w-8 h-8 rounded-full glass-rose flex items-center justify-center text-base">
                  {e}
                </span>
              ))}
            </div>
            <span className="font-serif italic">tulips · lilies · roses · and you</span>
          </div>
        </motion.div>

        {/* Right: floating polaroid stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[520px] flex items-center justify-center"
        >
          {/* Halo */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-rose opacity-50 blur-2xl animate-pupil-glow" />

          {/* Rotating ring */}
          <div className="absolute w-[460px] h-[460px] rounded-full border-2 border-dashed border-rosy/40 animate-spin-slow" />
          <div className="absolute w-[380px] h-[380px] rounded-full border border-rosy/30" />

          {/* Main polaroid */}
          <motion.div
            className="relative polaroid w-[300px] z-20 float-slow"
            style={{ transform: "rotate(-4deg)" }}
            whileHover={{ rotate: 0, scale: 1.04 }}
          >
            <img src={photo9} alt="Mumu" className="w-full h-[360px] object-cover rounded-sm" />
            <p className="font-script text-2xl text-rosy-deep text-center mt-3">my whole world 🌹</p>
          </motion.div>

          {/* Floating hearts around */}
          {[
            { top: "8%", left: "8%", size: 28, delay: "0s" },
            { top: "12%", right: "6%", size: 22, delay: "0.4s" },
            { bottom: "18%", left: "4%", size: 26, delay: "0.8s" },
            { bottom: "8%", right: "10%", size: 32, delay: "1.2s" },
            { top: "45%", right: "2%", size: 18, delay: "1.6s" },
          ].map((h, i) => (
            <span
              key={i}
              className="absolute heart-beat"
              style={{ ...h, fontSize: h.size, animationDelay: h.delay } as React.CSSProperties}
            >
              💗
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
