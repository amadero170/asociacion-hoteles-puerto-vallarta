"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 800], [0, 110]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex flex-col bg-deep-950">
      {/* Background image with parallax — foto real de Puerto Vallarta con playa y mar */}
      <motion.div
        className="absolute left-0 right-0"
        style={{ top: -110, bottom: -110, y: imageParallax }}
      >
        <Image
          src="/hero.jpg"
          alt="Playa de Puerto Vallarta con palmeras y el Océano Pacífico"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay oscuro para mejorar legibilidad del texto sin alterar el color de la foto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
          <div className="max-w-2xl max-md:hidden">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-aqua-400/40 bg-aqua-500/15 mb-8"
            >
              <span className="text-[11px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
                Puerto Vallarta · Bahía de Banderas
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-white leading-[1.08] tracking-tight mb-6"
            >
              La voz de la{" "}
              <span className="italic text-aqua-300">hotelería</span>
              <br />
              de Puerto Vallarta
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-white/75 font-sans text-lg leading-relaxed max-w-lg mb-10"
            >
              Representamos a los principales hoteles del destino, trabajando
              juntos para impulsar el turismo, defender el sector y proyectar a
              Puerto Vallarta en el mundo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/socios"
                className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-coral-500 hover:bg-coral-400 text-white font-sans font-600 text-base tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shadow-[0_8px_28px_-4px_rgba(244,114,79,0.60)]"
              >
                <span>Ver hoteles asociados</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <Link
                href="/nosotros"
                className="flex items-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white/85 hover:text-white hover:border-white/50 hover:bg-white/8 font-sans text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Conoce la asociación
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom info strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 justify-between">
          <div className="flex items-center gap-6 sm:gap-10">
            <div>
              <p className="font-display text-2xl text-white font-normal">37+</p>
              <p className="text-[11px] text-aqua-300/60 font-sans uppercase tracking-[0.15em]">Hoteles asociados</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <p className="font-display text-2xl text-white font-normal">42 km</p>
              <p className="text-[11px] text-aqua-300/60 font-sans uppercase tracking-[0.15em]">De playas</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <p className="font-display text-2xl text-white font-normal">27°C</p>
              <p className="text-[11px] text-aqua-300/60 font-sans uppercase tracking-[0.15em]">Clima promedio</p>
            </div>
          </div>
          <p className="hidden sm:block text-[11px] text-white/30 font-sans uppercase tracking-[0.15em]">
            Desplázate para explorar
          </p>
        </div>
      </motion.div>
    </section>
  );
}
