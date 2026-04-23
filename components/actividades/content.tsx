"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Briefcase,
  ShieldCheck,
  Handshake,
  Certificate,
  Buildings,
  Bank,
} from "@phosphor-icons/react";

const activities = [
  {
    icon: Briefcase,
    title: "Feria del Empleo CUC 2025",
    category: "Empleo",
    description:
      "Participamos activamente en la Feria del Empleo del Centro Universitario de la Costa, conectando a los mejores egresados con las oportunidades laborales de nuestra red hotelera.",
    image: "/hero.jpg",
    imageAlt: "Foto representativa de Feria del Empleo",
    badgeStyle: "bg-coral-100 text-coral-600 border-coral-200",
  },
  {
    icon: ShieldCheck,
    title: "Comité de Seguridad: temporada de huracanes",
    category: "Seguridad",
    description:
      "Nuestro Comité de Seguridad trabaja para preparar a los hoteles asociados ante la temporada de huracanes, coordinando protocolos y planes de contingencia con autoridades civiles.",
    image: "/arcos.avif",
    imageAlt: "Foto de seguridad y puerto vallarta",
    badgeStyle: "bg-aqua-100 text-aqua-700 border-aqua-200",
  },
  {
    icon: Handshake,
    title: "Colaboración con otras Cámaras",
    category: "Alianzas",
    description:
      "Trabajamos de la mano con otras cámaras empresariales y organismos del sector turístico para impulsar iniciativas que beneficien a Puerto Vallarta como destino.",
    image: "/pacifico.avif",
    imageAlt: "Foto de pacífico y alianzas",
    badgeStyle: "bg-palm-100 text-palm-700 border-palm-200",
  },
  {
    icon: Certificate,
    title: "Certificación White Belt",
    category: "Capacitación",
    description:
      "Impulsamos la certificación de nuestros socios en metodologías de mejora continua, comenzando con el programa White Belt para elevar los estándares de calidad hotelera.",
    image: "/playa-bonita.avif",
    imageAlt: "Foto representativo de certificación",
    badgeStyle: "bg-sun-100 text-sun-600 border-sun-200",
  },
  {
    icon: Buildings,
    title: "CUC Costa",
    category: "Educación",
    description:
      "Mantenemos un vínculo estratégico con el Centro Universitario de la Costa para promover la formación de profesionales del turismo y la hotelería en la región.",
    image: "/centro-historico.webp",
    imageAlt: "Foto del CUC Costa de Puerto Vallarta",
    badgeStyle: "bg-aqua-100 text-aqua-700 border-aqua-200",
  },
  {
    icon: Bank,
    title: "Vinculación con el Gobierno",
    category: "Gestión",
    description:
      "Mantenemos comunicación continua con las autoridades municipales, estatales y federales para gestionar planes y programas que favorezcan el desarrollo turístico sostenible.",
    image: "/sierra-madre.avif",
    imageAlt: "Foto representativa de la asociación con autoridades de Puerto Vallarta",
    badgeStyle: "bg-coral-100 text-coral-600 border-coral-200",
  },
];

export default function ActividadesContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-950 via-aqua-900 to-deep-900 pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-aqua-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-48 rounded-full bg-coral-400/8 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-400/35 bg-aqua-500/15 mb-6"
          >
            <span className="text-[10px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
              Lo que hacemos
            </span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl font-normal text-white leading-tight mb-4"
          >
            Actividades<br />
            <span className="italic text-aqua-300">y programas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="font-sans text-white/55 text-base max-w-xl leading-relaxed"
          >
            Desde ferias de empleo hasta comités de seguridad, la asociación
            trabaja sin parar para fortalecer el ecosistema hotelero de Puerto Vallarta.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 bg-sand-50" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, i) => {
              const Icon = act.icon;
              return (
                <motion.article
                  key={act.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                  className="group"
                >
                  <div className="border border-sand-200 group-hover:border-aqua-200 rounded-[1.75rem] overflow-hidden h-full flex flex-col bg-white shadow-[0_2px_16px_-8px_rgba(7,37,53,0.06)] group-hover:shadow-[0_8px_28px_-8px_rgba(23,184,182,0.15)] transition-all duration-500">
                    <div className="aspect-[16/9] overflow-hidden">
                      <Image
                        src={act.image}
                        alt={act.imageAlt}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-sand-100 border border-sand-200 flex items-center justify-center">
                          <Icon weight="regular" size={16} className="text-aqua-700" />
                        </div>
                        <span className={`text-[10px] font-sans uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border ${act.badgeStyle}`}>
                          {act.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-medium text-deep-900 mb-3 leading-tight">
                        {act.title}
                      </h3>
                      <p className="font-sans text-sm text-deep-900/55 leading-relaxed flex-1">
                        {act.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="text-center mt-12 font-sans text-xs text-deep-900/30 max-w-md mx-auto"
          >
            {/* PLACEHOLDER: Actualizar con las actividades más recientes de la asociación */}
            Las actividades se actualizan periódicamente. Para información sobre próximos eventos,
            contáctanos directamente.
          </motion.p>
        </div>
      </section>
    </>
  );
}
