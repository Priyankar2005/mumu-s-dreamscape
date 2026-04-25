import { motion } from "motion/react";
import photo1 from "@/assets/mumu/photo1.jpg";
import photo2 from "@/assets/mumu/photo2.jpg";
import photo3 from "@/assets/mumu/photo3.jpg";
import photo4 from "@/assets/mumu/photo4.jpg";
import photo5 from "@/assets/mumu/photo5.jpg";
import photo6 from "@/assets/mumu/photo6.jpg";
import photo7 from "@/assets/mumu/photo7.jpg";
import photo8 from "@/assets/mumu/photo8.jpg";

const items = [
  { img: photo1, caption: "the smile that owns me 🌷", rotate: -3, flower: "🌷" },
  { img: photo2, caption: "my queen in red 🌹", rotate: 2, flower: "🌹" },
  { img: photo3, caption: "ethereal, my Mumu 💕", rotate: -2, flower: "🌺" },
  { img: photo4, caption: "stole my heart again ✨", rotate: 3, flower: "💮" },
  { img: photo5, caption: "those eyes... again 💗", rotate: -4, flower: "🥀" },
  { img: photo6, caption: "calm of my chaos 🤍", rotate: 2, flower: "🌸" },
  { img: photo7, caption: "yellow looks like sunshine on you ☀️", rotate: -2, flower: "🌻" },
  { img: photo8, caption: "the prettiest soul i know 💖", rotate: 4, flower: "🌷" },
];

export const Memories = () => {
  return (
    <section id="memories" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-petal opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-rosy mb-2">a little gallery</p>
          <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-rosy-deep leading-[0.95]">
            every photo of you <br />
            is my <span className="shimmer-text">favourite</span>.
          </h2>
          <p className="mt-6 font-sans text-base md:text-lg text-rosy-deep/70 max-w-2xl mx-auto">
            i could fill a hundred albums and it still wouldn't be enough, mumu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: it.rotate }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
              className="polaroid card-3d cursor-pointer relative"
            >
              <span className="absolute -top-3 -right-3 text-3xl float-medium z-10" style={{ animationDelay: `${i * 0.2}s` }}>
                {it.flower}
              </span>
              <div className="overflow-hidden rounded-sm">
                <img src={it.img} alt={it.caption} className="w-full h-72 object-cover" loading="lazy" />
              </div>
              <p className="font-script text-xl text-rosy-deep text-center mt-3">{it.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
