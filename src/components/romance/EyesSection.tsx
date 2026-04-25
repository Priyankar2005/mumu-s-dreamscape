import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import eyes from "@/assets/mumu/eyes.jpg";

export const EyesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section
      id="eyes"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* deep romantic backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush via-rosy-soft/40 to-blush" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(345_90%_75%/0.5)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-3xl md:text-4xl text-rosy mb-4"
        >
          and the moment I saw them...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-rosy-deep leading-[0.95] mb-12 text-glow"
        >
          Lost in her eyes
          <br />
          <span className="shimmer-text">forever.</span>
        </motion.h2>

        {/* The eyes — main attraction */}
        <motion.div
          style={{ scale, opacity, rotate }}
          className="relative mx-auto w-full max-w-3xl"
        >
          <div className="relative rounded-[3rem] overflow-hidden glass-rose-strong p-3">
            {/* glowing border ring */}
            <div className="absolute -inset-2 rounded-[3.5rem] bg-gradient-rose opacity-60 blur-2xl animate-pupil-glow -z-10" />

            <div className="relative rounded-[2.5rem] overflow-hidden">
              <img src={eyes} alt="Mumu's eyes" className="w-full h-auto object-cover" />

              {/* sparkle overlays on pupils */}
              <span className="absolute top-[35%] left-[28%] text-3xl sparkle" style={{ animationDelay: "0s" }}>✨</span>
              <span className="absolute top-[60%] left-[55%] text-2xl sparkle" style={{ animationDelay: "0.7s" }}>✨</span>
              <span className="absolute top-[42%] left-[68%] text-xl sparkle" style={{ animationDelay: "1.2s" }}>💫</span>
              <span className="absolute top-[55%] left-[20%] text-2xl sparkle" style={{ animationDelay: "1.8s" }}>✨</span>
            </div>
          </div>

          {/* floating quotes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="absolute -left-4 md:-left-16 top-1/3 glass-rose rounded-2xl px-4 py-3 max-w-[180px] hidden md:block"
            style={{ transform: "rotate(-6deg)" }}
          >
            <p className="font-serif italic text-sm text-rosy-deep">"two galaxies — and i live in both"</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            viewport={{ once: true }}
            className="absolute -right-4 md:-right-16 bottom-1/4 glass-rose rounded-2xl px-4 py-3 max-w-[200px] hidden md:block"
            style={{ transform: "rotate(5deg)" }}
          >
            <p className="font-serif italic text-sm text-rosy-deep">"every time i look — i fall again"</p>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 font-serif italic text-xl md:text-2xl text-rosy-deep/80 max-w-2xl mx-auto leading-relaxed"
        >
          Mumu — your eyes hold entire universes. Soft, deep, kind, mischievous.
          They know me better than words ever could. And i, my love, am very happily lost in them.
        </motion.p>
      </div>
    </section>
  );
};
