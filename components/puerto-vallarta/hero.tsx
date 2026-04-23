"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PVHero() {
  return (
    <section className="relative min-h-[65dvh] overflow-hidden flex items-end bg-deep-950">
      <div className="absolute inset-0">
        <Image
          src="/arcos.avif"
          alt="Vista panorámica de Puerto Vallarta"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        {/* Overlay oscuro para mejorar legibilidad del texto sin alterar el color de la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      {/* Tropical orb */}
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-aqua-400/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-36 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-400/35 bg-aqua-500/15 mb-6"
        >
          <span className="text-[10px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
            Jalisco · México
          </span>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-5xl md:text-7xl font-normal text-white leading-tight mb-4"
        >
          Puerto Vallarta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="font-sans text-white/65 text-lg max-w-lg leading-relaxed"
        >
          El Pacífico mexicano en su máxima expresión: playas turquesas,
          Sierra Madre, gastronomía y cultura en perfecta armonía.
        </motion.p>
      </div>
    </section>
  );
}
