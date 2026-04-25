import { motion } from "motion/react";
import { Heart } from "lucide-react";
import photo5 from "@/assets/mumu/photo5.jpg";

export const Letter = () => {
  return (
    <section id="letter" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-romance opacity-80" />
      <div className="absolute top-20 left-10 text-7xl float-slow opacity-60">🌹</div>
      <div className="absolute bottom-20 right-10 text-7xl float-medium opacity-60">🌷</div>
      <div className="absolute top-1/2 right-20 text-5xl float-fast opacity-50">🌺</div>
      <div className="absolute bottom-32 left-20 text-5xl float-slow opacity-50">💮</div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-rosy">from priyankar, with all of me —</p>
          <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-rosy-deep leading-[0.95] mt-2">
            a letter for my <span className="shimmer-text">mumu</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass-rose-strong rounded-[2.5rem] p-8 md:p-14 grid md:grid-cols-[1fr_2fr] gap-10 items-center shadow-petal"
          style={{ boxShadow: "var(--shadow-petal)" }}
        >
          <div className="relative">
            <div className="polaroid" style={{ transform: "rotate(-4deg)" }}>
              <img src={photo5} alt="mumu" className="w-full h-72 object-cover rounded-sm" />
              <p className="font-script text-xl text-rosy-deep text-center mt-2">my forever 💗</p>
            </div>
            <Heart className="absolute -top-4 -right-4 h-10 w-10 fill-rosy text-rosy heart-beat" />
          </div>

          <div className="space-y-5 font-serif text-rosy-deep text-lg md:text-xl leading-relaxed">
            <p className="font-script text-3xl text-rosy">my dearest mumu,</p>
            <p>
              if i could give you the world wrapped in tulips, lilies and roses,
              i would — every single day. but the world is too small for what i feel for you.
            </p>
            <p>
              you are my morning, my midnight, my favourite thought.
              you make ordinary days feel like poems and the boring ones feel like home.
            </p>
            <p className="italic">
              when i look at you, i don't just see a girl — i see <span className="text-rosy font-semibold not-italic">my person</span>,
              my safe place, my reason to try harder, smile wider, and love deeper.
            </p>
            <p>
              thank you for choosing me. again and again. even on the days i don't deserve it.
            </p>
            <p className="font-script text-3xl text-rosy text-right">— forever yours, priyankar 💗</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
