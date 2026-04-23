"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  PaperPlaneTilt,
  UserCheck,
  Buildings,
  CheckCircle,
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: PaperPlaneTilt,
    title: "Envía tu CV",
    description: "Manda tu curriculum a luceromayen@vallartahoteles.mx desde casa. No necesitas presentarte en persona.",
    iconBg: "bg-aqua-100",
    iconColor: "text-aqua-700",
    numColor: "text-aqua-500",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Revisamos tu perfil",
    description: "Nuestro equipo revisa tu candidatura y la hace llegar a los hoteles asociados que buscan perfiles como el tuyo.",
    iconBg: "bg-coral-100",
    iconColor: "text-coral-600",
    numColor: "text-coral-500",
  },
  {
    number: "03",
    icon: Buildings,
    title: "Los hoteles te contactan",
    description: "Los hoteles interesados se pondrán en contacto contigo directamente para avanzar en el proceso de selección.",
    iconBg: "bg-palm-100",
    iconColor: "text-palm-600",
    numColor: "text-palm-500",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "¡A trabajar!",
    description: "Una vez seleccionado, inicias tu carrera en uno de los mejores hoteles de Puerto Vallarta.",
    iconBg: "bg-sun-100",
    iconColor: "text-sun-600",
    numColor: "text-sun-500",
  },
];

const areas = [
  "Recepción y Atención al Cliente",
  "Alimentos y Bebidas",
  "Housekeeping",
  "Spa y Bienestar",
  "Animación y Entretenimiento",
  "Ventas y Reservaciones",
  "Mantenimiento",
  "Administración y RRHH",
  "Cocina y Pastelería",
  "Seguridad",
];

export default function BolsaContent() {
  const ref = useRef(null);
  const stepsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-950 via-aqua-900 to-deep-900 pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-aqua-400/12 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-48 rounded-full bg-coral-400/8 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-400/35 bg-aqua-500/15 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 animate-pulse-soft" />
            <span className="text-[10px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
              Oportunidades disponibles
            </span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl font-normal text-white leading-tight mb-4"
          >
            Trabaja en los mejores<br />
            <span className="italic text-aqua-300">hoteles de Puerto Vallarta</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="font-sans text-white/55 text-lg max-w-xl leading-relaxed mb-10"
          >
            Tenemos contacto directo con la mayoría de los hoteles de Puerto Vallarta.
            Envía tu CV y te conectamos con quien busca tu perfil.
          </motion.p>
          <motion.a
            href="mailto:luceromayen@vallartahoteles.mx?subject=Candidatura%20Bolsa%20de%20Trabajo"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-coral-500 hover:bg-coral-400 text-white font-sans font-600 text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shadow-[0_6px_24px_-4px_rgba(244,114,79,0.5)]"
          >
            <span>Enviar mi CV ahora</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 bg-sand-50" ref={stepsRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-500/30 bg-aqua-500/10 mb-5">
              <span className="text-[10px] text-aqua-700 font-sans uppercase tracking-[0.2em] font-medium">
                El proceso
              </span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-900 leading-tight">
              Así de simple es<br />
              <span className="italic text-aqua-700">encontrar tu próximo trabajo</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="border border-sand-200 rounded-[1.75rem] p-7 h-full bg-white shadow-[0_2px_16px_-8px_rgba(7,37,53,0.06)]">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`font-display text-3xl font-normal ${step.numColor}`}>
                        {step.number}
                      </span>
                      <div className={`w-9 h-9 rounded-xl ${step.iconBg} flex items-center justify-center`}>
                        <Icon weight="regular" size={18} className={step.iconColor} />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-medium text-deep-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-deep-900/55 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 px-6 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-coral-400/30 bg-coral-500/8 mb-5">
                <span className="text-[10px] text-coral-600 font-sans uppercase tracking-[0.2em] font-medium">
                  Áreas de oportunidad
                </span>
              </span>
              <h2 className="font-display text-4xl font-normal text-deep-900 leading-tight mb-5">
                Buscamos talento en<br />
                <span className="italic text-coral-600">todas las áreas</span>
              </h2>
              <p className="font-sans text-deep-900/55 text-base leading-relaxed mb-8 max-w-sm">
                Nuestros hoteles asociados buscan constantemente personas
                proactivas y apasionadas por la hospitalidad en múltiples
                departamentos.
              </p>
              <div className="border border-aqua-200/60 rounded-[1.5rem] bg-sand-50 p-7">
                <p className="font-sans font-600 text-sm text-deep-900 mb-1">
                  Envía tu CV a:
                </p>
                <a
                  href="mailto:luceromayen@vallartahoteles.mx"
                  className="font-sans text-base text-aqua-700 hover:text-aqua-600 transition-colors duration-300 font-500"
                >
                  luceromayen@vallartahoteles.mx
                </a>
                <p className="font-sans text-xs text-deep-900/40 mt-2 leading-relaxed">
                  Incluye en el asunto el área a la que aplicas.<br />
                  Sin costo ni intermediarios.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-2.5">
              {areas.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-sand-200 bg-sand-50 text-sm font-sans text-deep-900/70 hover:border-aqua-300 hover:text-aqua-700 hover:bg-aqua-50 transition-all duration-300 cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
