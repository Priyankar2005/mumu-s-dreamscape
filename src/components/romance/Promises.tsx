import { motion } from "motion/react";

const promises = [
  { icon: "🌹", title: "Forever Yours", text: "Through every season — spring tulips to winter roses — i'm yours." },
  { icon: "🌷", title: "Your Safe Place", text: "Your tears, your laughs, your silences — they all have a home with me." },
  { icon: "🌺", title: "Patience, always", text: "I'll listen twice and speak softer. You deserve gentle, mumu." },
  { icon: "💮", title: "Endless Effort", text: "I'll keep growing — for you, for us, for the love we're building." },
  { icon: "🧸", title: "Plushie hugs", text: "When i'm not there, may every plushie hug feel like mine. 🐻" },
  { icon: "💗", title: "Choose you. Always.", text: "Not a doubt, not a maybe. You. Today, tomorrow, every day after." },
];

export const Promises = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-petal opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-3xl text-rosy">six little promises</p>
          <h2 className="font-serif italic text-5xl md:text-6xl text-rosy-deep leading-[0.95]">
            the things i promise <span className="shimmer-text">you</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: 1 }}
              className="glass-rose rounded-3xl p-7 card-3d"
            >
              <div className="w-14 h-14 rounded-full glass-rose-strong flex items-center justify-center text-3xl mb-4 float-medium" style={{ animationDelay: `${i * 0.15}s` }}>
                {p.icon}
              </div>
              <h3 className="font-serif italic text-2xl text-rosy-deep mb-2">{p.title}</h3>
              <p className="font-sans text-rosy-deep/75 text-base leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
