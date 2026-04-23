"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Outer shell — tropical gradient border */}
        <div className="p-px rounded-[2.5rem] bg-gradient-to-br from-aqua-400/40 via-coral-400/20 to-palm-400/15">
          {/* Inner — warm deep teal, not cold black */}
          <div className="relative overflow-hidden bg-gradient-to-br from-aqua-900 via-deep-900 to-deep-950 rounded-[calc(2.5rem-1px)] px-8 md:px-16 py-20 md:py-24 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            {/* Warm tropical blobs */}
            <div className="absolute top-0 left-1/3 w-96 h-72 bg-aqua-500/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-72 h-64 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-palm-500/8 rounded-full blur-3xl pointer-events-none" />

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-aqua-400/35 bg-aqua-500/15 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 animate-pulse-soft" />
              <span className="text-[11px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
                Únete a nosotros
              </span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-display text-4xl md:text-6xl font-normal text-white leading-tight mb-6 relative z-10"
            >
              ¿Tu hotel quiere formar<br />
              <span className="italic text-aqua-300">parte de la asociación?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="font-sans text-white/55 text-base leading-relaxed max-w-lg mx-auto mb-10 relative z-10"
            >
              Representamos la mayoría de los hoteles de Puerto Vallarta.
              Únete a nuestra red y accede a asesoría, bolsa de trabajo,
              representación gremial y mucho más.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-wrap items-center justify-center gap-3 relative z-10"
            >
              <Link
                href="/contacto"
                className="group flex items-center gap-2.5 px-7 py-4 rounded-full bg-coral-500 hover:bg-coral-400 text-white font-sans font-600 text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shadow-[0_6px_24px_-4px_rgba(244,114,79,0.5)]"
              >
                <span>Contactar ahora</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <Link
                href="/socios"
                className="flex items-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white/80 hover:text-white hover:border-white/45 hover:bg-white/8 font-sans text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Ver hoteles socios
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
