"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Handshake,
  Briefcase,
  Strategy,
  Users,
  Buildings,
  ChartLineUp,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Handshake,
    title: "Asesoría",
    description:
      "Asistencia especializada para los asuntos propios de nuestros socios, brindando orientación personalizada para cada necesidad.",
    iconBg: "bg-aqua-100",
    iconColor: "text-aqua-700",
    hoverBorder: "hover:border-aqua-200",
    hoverIcon: "group-hover:bg-aqua-100 group-hover:text-aqua-700",
  },
  {
    icon: Briefcase,
    title: "Bolsa de Trabajo",
    description:
      "Coordinamos la colocación de personal calificado con los hoteles afiliados, conectando talento con oportunidades reales.",
    iconBg: "bg-coral-100",
    iconColor: "text-coral-600",
    hoverBorder: "hover:border-coral-200",
    hoverIcon: "group-hover:bg-coral-100 group-hover:text-coral-600",
  },
  {
    icon: Strategy,
    title: "Estrategia",
    description:
      "Gestión de planes y programas gubernamentales que impulsan el crecimiento y desarrollo turístico del destino.",
    iconBg: "bg-palm-100",
    iconColor: "text-palm-600",
    hoverBorder: "hover:border-palm-200",
    hoverIcon: "group-hover:bg-palm-100 group-hover:text-palm-600",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description:
      "Resolución de problemáticas comunitarias y comunicación efectiva con todos los actores del sector turístico.",
    iconBg: "bg-sun-100",
    iconColor: "text-sun-600",
    hoverBorder: "hover:border-sun-200",
    hoverIcon: "group-hover:bg-sun-100 group-hover:text-sun-600",
  },
  {
    icon: Buildings,
    title: "Red Hotelera",
    description:
      "Una red sólida de más de 37 hoteles asociados que trabajan de forma coordinada para elevar la calidad del destino.",
    iconBg: "bg-aqua-100",
    iconColor: "text-aqua-700",
    hoverBorder: "hover:border-aqua-200",
    hoverIcon: "group-hover:bg-aqua-100 group-hover:text-aqua-700",
  },
  {
    icon: ChartLineUp,
    title: "Promoción del Destino",
    description:
      "Participamos activamente en foros y organismos de turismo para posicionar a Puerto Vallarta en mercados nacionales e internacionales.",
    iconBg: "bg-coral-100",
    iconColor: "text-coral-600",
    hoverBorder: "hover:border-coral-200",
    hoverIcon: "group-hover:bg-coral-100 group-hover:text-coral-600",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className="group"
    >
      <div className={`border border-sand-200 ${service.hoverBorder} rounded-[1.75rem] p-8 h-full flex flex-col bg-white shadow-[0_2px_16px_-8px_rgba(7,37,53,0.06)] group-hover:shadow-[0_8px_32px_-8px_rgba(7,37,53,0.1)] transition-all duration-500`}>
        <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 transition-all duration-500`}>
          <Icon weight="regular" size={22} className={`${service.iconColor}`} />
        </div>
        <h3 className="font-display text-xl font-medium text-deep-900 mb-3">
          {service.title}
        </h3>
        <p className="font-sans text-sm text-deep-900/55 leading-relaxed flex-1">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-coral-400/30 bg-coral-500/8 mb-5">
              <span className="text-[10px] text-coral-600 font-sans uppercase tracking-[0.2em] font-medium">
                Lo que hacemos
              </span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-900 leading-tight">
              Servicios para<br />
              <span className="italic text-coral-600">nuestros asociados</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-sans text-deep-900/50 text-base leading-relaxed"
          >
            Trabajamos por consenso para establecer objetivos comunes, impulsar
            el turismo de forma sostenible y defender los intereses de cada
            hotel miembro ante las autoridades y la comunidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
