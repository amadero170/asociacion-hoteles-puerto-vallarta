"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Waves, Mountains, ForkKnife, Palette } from "@phosphor-icons/react";

const highlights = [
  { icon: Waves,     label: "42 km de playas",          description: "Aguas turquesa del Pacífico",    bg: "bg-aqua-100",  color: "text-aqua-700"  },
  { icon: Mountains, label: "Sierra Madre",              description: "Ecoturismo y biodiversidad",     bg: "bg-palm-100",  color: "text-palm-700"  },
  { icon: ForkKnife, label: "Gastronomía de primer nivel", description: "Sabores del Pacífico mexicano", bg: "bg-coral-100", color: "text-coral-600" },
  { icon: Palette,   label: "Arte y cultura",            description: "Galerías y teatro al aire libre", bg: "bg-sun-100",   color: "text-sun-600"   },
];

export default function DestinationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 bg-sand-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            {/* Double bezel — warm toned */}
            <div className="p-2 rounded-[2rem] bg-gradient-to-b from-aqua-200/40 to-sand-200/20 shadow-[0_24px_64px_-16px_rgba(7,37,53,0.12)]">
              <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[4/3]">
                <Image
                  src="/pacifico.avif"
                  alt="El Pacífico te recibe en Puerto Vallarta"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating overlay card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl shadow-[0_8px_32px_-8px_rgba(7,37,53,0.18)] border border-white/80 overflow-hidden">
              <div className="bg-white/95 backdrop-blur-sm p-5 w-52">
                <div className="rounded-xl overflow-hidden aspect-video mb-3">
                  <Image
                    src="/centro-historico.webp"
                    alt="Centro Histórico de Puerto Vallarta"
                    width={400}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-sans text-xs font-600 text-deep-900">
                  Centro Histórico
                </p>
                <p className="font-sans text-[11px] text-deep-900/50 leading-tight mt-0.5">
                  A 15 min del aeropuerto
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-500/30 bg-aqua-500/10 mb-5">
              <span className="text-[10px] text-aqua-700 font-sans uppercase tracking-[0.2em] font-medium">
                El destino
              </span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-900 leading-tight mb-6">
              Puerto Vallarta,<br />
              <span className="italic text-aqua-700">donde el Pacífico</span><br />
              te recibe
            </h2>
            <p className="font-sans text-deep-900/55 text-base leading-relaxed mb-8 max-w-md">
              Ubicado en la costa del Pacífico mexicano, Puerto Vallarta goza de
              un clima cálido tropical todo el año. Sus 42 kilómetros de playas
              turquesas, su arquitectura colonial y su gastronomía de talla
              internacional lo convierten en uno de los destinos más deseados de México.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-sand-200"
                  >
                    <div className={`w-8 h-8 rounded-xl ${h.bg} flex items-center justify-center shrink-0`}>
                      <Icon weight="regular" size={16} className={h.color} />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-600 text-deep-900 leading-tight">
                        {h.label}
                      </p>
                      <p className="font-sans text-[11px] text-deep-900/45 mt-0.5 leading-tight">
                        {h.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/puerto-vallarta"
              className="group inline-flex items-center gap-2.5 text-deep-900 font-sans font-500 text-sm hover:text-aqua-700 transition-colors duration-300"
            >
              <span>Descubrir Puerto Vallarta</span>
              <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
