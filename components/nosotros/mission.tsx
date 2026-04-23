"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Star } from "@phosphor-icons/react";

const pillars = [
  {
    icon: Target,
    title: "Misión",
    body: "Representar y defender los intereses y necesidades de nuestros socios, promoviendo el destino y los hoteles afiliados, contribuyendo al crecimiento económico sostenible y al bienestar social de Puerto Vallarta y Bahía de Banderas.",
    iconBg: "bg-aqua-100",
    iconColor: "text-aqua-700",
    accent: "border-aqua-200/60",
  },
  {
    icon: Eye,
    title: "Visión",
    body: "Ser la asociación hotelera de referencia en México, reconocida por su capacidad de representación, la calidad de sus servicios a socios y su aportación al posicionamiento de Puerto Vallarta como destino turístico de clase mundial.",
    iconBg: "bg-coral-100",
    iconColor: "text-coral-600",
    accent: "border-coral-200/60",
  },
  {
    icon: Star,
    title: "Valores",
    body: "Trabajamos bajo principios de consenso, transparencia, trabajo en equipo y compromiso con el desarrollo sostenible del destino turístico, la comunidad local y el medio ambiente.",
    iconBg: "bg-palm-100",
    iconColor: "text-palm-600",
    accent: "border-palm-200/60",
  },
];

export default function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 bg-sand-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-500/30 bg-aqua-500/10 mb-5">
              <span className="text-[10px] text-aqua-700 font-sans uppercase tracking-[0.2em] font-medium">
                La asociación
              </span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-900 leading-tight">
              Unidos por el<br />
              <span className="italic text-aqua-700">turismo de Puerto Vallarta</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col justify-end"
          >
            <p className="font-sans text-deep-900/55 text-base leading-relaxed mb-4">
              La <strong className="text-deep-900 font-600">Asociación de Hoteles de Puerto Vallarta y Bahía de Banderas A.C.</strong>{" "}
              nació con la convicción de que la colaboración entre hoteles es la
              herramienta más poderosa para impulsar el destino.
            </p>
            <p className="font-sans text-deep-900/55 text-base leading-relaxed">
              Desde nuestra fundación, hemos crecido en número de socios,
              calidad, actividades y reconocimiento. Hoy representamos a más de
              37 hoteles y participamos activamente en los principales foros de
              turismo de México.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className={`border ${p.accent} rounded-[1.75rem] p-8 h-full bg-white shadow-[0_2px_16px_-8px_rgba(7,37,53,0.06)]`}>
                  <div className={`w-12 h-12 rounded-2xl ${p.iconBg} flex items-center justify-center mb-6`}>
                    <Icon weight="regular" size={22} className={p.iconColor} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-deep-900 mb-4">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-deep-900/55 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
