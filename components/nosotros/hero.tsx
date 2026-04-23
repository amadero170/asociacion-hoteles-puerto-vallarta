"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NosotrosHero() {
  return (
    <section className="relative min-h-[60dvh] overflow-hidden flex items-end bg-deep-950">
      <div className="absolute inset-0">
        <Image
          src="/playa-bonita.avif"
          alt="Asociación de Hoteles de Puerto Vallarta"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-36 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-400/35 bg-aqua-500/15 mb-6"
        >
          <span className="text-[10px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
            Nuestra historia
          </span>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-5xl md:text-6xl font-normal text-white leading-tight"
        >
          Quiénes somos
        </motion.h1>
      </div>
    </section>
  );
}
