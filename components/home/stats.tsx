"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "37",
    suffix: "+",
    label: "Hoteles asociados",
    description: "Desde boutiques hasta grandes cadenas internacionales",
    accent: "aqua",
  },
  {
    value: "500",
    suffix: "+",
    label: "Amarres en marina",
    description: "Marina Vallarta, una de las más modernas del Pacífico",
    accent: "coral",
  },
  {
    value: "42",
    suffix: " km",
    label: "De litoral",
    description: "De playas junto a las aguas esmeralda del Pacífico",
    accent: "palm",
  },
  {
    value: "27",
    suffix: "°C",
    label: "Temperatura promedio",
    description: "Clima cálido tropical todo el año",
    accent: "sun",
  },
];

const accentMap: Record<string, { num: string; dot: string; border: string; bg: string }> = {
  aqua:  { num: "text-aqua-600",  dot: "bg-aqua-400",  border: "from-aqua-400/25",  bg: "bg-aqua-50/40" },
  coral: { num: "text-coral-500", dot: "bg-coral-400", border: "from-coral-400/25", bg: "bg-coral-50/30" },
  palm:  { num: "text-palm-600",  dot: "bg-palm-400",  border: "from-palm-400/25",  bg: "bg-palm-50/30" },
  sun:   { num: "text-sun-600",   dot: "bg-sun-400",   border: "from-sun-400/25",   bg: "bg-sun-50/30" },
};

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const a = accentMap[stat.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
    >
      <div className={`p-px rounded-[1.5rem] bg-gradient-to-b ${a.border} to-transparent`}>
        <div className={`${a.bg} rounded-[calc(1.5rem-1px)] p-8 bg-white/70 backdrop-blur-sm`}>
          <div className="flex items-start justify-between mb-4">
            <p className={`font-display text-5xl md:text-6xl font-normal tracking-tight leading-none ${a.num}`}>
              {stat.value}
              <span className="text-[0.7em]">{stat.suffix}</span>
            </p>
            <span className={`w-2.5 h-2.5 rounded-full ${a.dot} mt-2 animate-pulse-soft`} />
          </div>
          <p className="font-sans font-600 text-deep-900 text-sm tracking-wide mb-2">
            {stat.label}
          </p>
          <p className="font-sans text-sm text-deep-900/50 leading-relaxed">
            {stat.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 px-6 bg-sand-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-500/30 bg-aqua-500/10 mb-4">
              <span className="text-[10px] text-aqua-700 font-sans uppercase tracking-[0.2em] font-medium">
                El destino en cifras
              </span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-900 leading-tight">
              Puerto Vallarta,<br />
              <span className="italic text-aqua-700">un destino de clase mundial</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-deep-900/50 font-sans text-sm leading-relaxed max-w-xs md:text-right"
          >
            Clima cálido tropical todo el año, con temperaturas promedio de 27°C
            y más de 42 kilómetros de hermosas playas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
