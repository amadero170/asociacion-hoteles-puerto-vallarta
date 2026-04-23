"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Lic. Álvaro Garciarce Monraz",
    role: "Asesor de la Presidencia",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    imageAlt: "Foto de Lic. Álvaro Garciarce Monraz",
  },
  {
    name: "Lic. Alejandro Torres Magaña",
    role: "Dirección General",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    imageAlt: "Foto de Lic. Alejandro Torres Magaña",
  },
  {
    name: "Lic. Lucero Mayen Álvarez",
    role: "Atención a Socios",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    imageAlt: "Foto de Lic. Lucero Mayen Álvarez",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-coral-400/30 bg-coral-500/8 mb-5">
            <span className="text-[10px] text-coral-600 font-sans uppercase tracking-[0.2em] font-medium">
              Nuestro equipo
            </span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-900 leading-tight">
            Las personas detrás<br />
            <span className="italic text-coral-600">de la asociación</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Warm bezel */}
              <div className="p-1.5 rounded-[1.75rem] bg-gradient-to-b from-aqua-200/50 to-sand-200/30">
                <div className="bg-sand-50 rounded-[calc(1.75rem-6px)] overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    {/* PLACEHOLDER: Replace with professional headshots */}
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <p className="font-sans font-600 text-sm text-deep-900 leading-tight">
                      {member.name}
                    </p>
                    <p className="font-sans text-xs text-aqua-700/70 mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Address card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="mt-16 max-w-lg border border-aqua-200/60 rounded-[1.5rem] bg-sand-50"
        >
          <div className="p-8">
            <p className="text-[10px] text-aqua-700/50 font-sans uppercase tracking-[0.2em] mb-3">
              Oficinas
            </p>
            <p className="font-display text-xl font-medium text-deep-900 mb-2">
              Centro Internacional de Convenciones
            </p>
            <p className="font-sans text-sm text-deep-900/55 leading-relaxed">
              Villa Las Flores 505, Villa Las Flores<br />
              Puerto Vallarta, Jalisco, México
            </p>
            <div className="mt-4 pt-4 border-t border-deep-900/8 flex flex-col gap-1.5">
              <a href="tel:+13222250904" className="font-sans text-sm text-deep-900/55 hover:text-aqua-700 transition-colors duration-300">
                (322) 225-0904 / 224-2939
              </a>
              <a href="mailto:luceromayen@vallartahoteles.mx" className="font-sans text-sm text-deep-900/55 hover:text-aqua-700 transition-colors duration-300">
                luceromayen@vallartahoteles.mx
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
