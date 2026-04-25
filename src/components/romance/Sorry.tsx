import { motion } from "motion/react";
import { Heart } from "lucide-react";

export const Sorry = () => {
  return (
    <section id="promise" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rosy-soft/40 via-blush to-rosy-soft/40" />
      <div className="absolute top-10 right-10 text-6xl float-slow opacity-40">🥀</div>
      <div className="absolute bottom-10 left-10 text-6xl float-medium opacity-40">🌹</div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="glass-rose-strong rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gradient-rose opacity-30 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-tulip opacity-30 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-rose mb-6 shadow-lg" style={{ boxShadow: "0 10px 30px hsl(345 80% 50% / 0.4)" }}>
              <Heart className="h-10 w-10 text-white fill-white heart-beat" />
            </div>

            <p className="font-script text-3xl text-rosy mb-3">a small confession</p>
            <h2 className="font-serif italic text-5xl md:text-6xl text-rosy-deep leading-[0.95] mb-8">
              i'm sorry, mumu.
            </h2>

            <div className="space-y-5 font-serif text-lg md:text-xl text-rosy-deep/85 max-w-2xl mx-auto leading-relaxed">
              <p>
                i know i'm not the perfect boyfriend. i mess up. i overthink.
                sometimes i don't say the right thing at the right time.
              </p>
              <p className="italic">
                but please believe this with all your heart —
              </p>
              <p className="font-serif italic text-2xl md:text-3xl text-rosy font-semibold">
                "i'll never give up on you."
              </p>
              <p>
                not on the worst days. not on the silent ones.
                not on the ones where loving me feels harder than it should.
                i'll keep choosing you, learning you, growing for you. always.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {["🌷", "🌹", "💮", "🌺", "🥀"].map((f, i) => (
                <span key={i} className="text-3xl float-medium" style={{ animationDelay: `${i * 0.2}s` }}>
                  {f}
                </span>
              ))}
            </div>
            <p className="mt-6 font-script text-3xl shimmer-text">forever, priyankar</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
