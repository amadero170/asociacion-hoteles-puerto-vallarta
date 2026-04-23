"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const sections = [
  {
    id: "centro",
    label: "Centro Histórico",
    title: "El corazón colonial de Vallarta",
    body: "A solo 15 minutos del aeropuerto, el Centro Histórico enamora con su arquitectura colonial, calles adoquinadas y la icónica Parroquia de Nuestra Señora de Guadalupe. El Malecón y el arco de Los Arcos son símbolos inconfundibles del destino.",
    image: "/centro-historico.webp",
    imageAlt: "Foto del Centro Histórico de Puerto Vallarta con la Parroquia de Guadalupe",
    stat: { value: "15 min", label: "del aeropuerto" },
    accentBorder: "from-aqua-300/30",
    badgeLabel: "bg-aqua-100 text-aqua-700 border-aqua-200",
  },
  {
    id: "zona-hotelera",
    label: "Zona Hotelera",
    title: "El motor turístico del Pacífico",
    body: "La Zona Hotelera concentra la mayor oferta de hospedaje, gastronomía, entretenimiento y compras. Centros comerciales, restaurantes de todas las cocinas y kilómetros de playa accesible convierten esta área en el epicentro de la experiencia turística.",
    image: "/playa-bonita.avif",
    imageAlt: "Foto de una playa hermosa en Puerto Vallarta",
    stat: { value: "37+", label: "hoteles de lujo" },
    accentBorder: "from-coral-300/25",
    badgeLabel: "bg-coral-100 text-coral-600 border-coral-200",
  },
  {
    id: "marina",
    label: "Marina Vallarta",
    title: "Lujo náutico en el Pacífico",
    body: "Con más de 500 amarres para yates internacionales, Marina Vallarta es una de las marinas más modernas del Pacífico mexicano. Rodeada de campos de golf, restaurantes gourmet y boutiques de lujo.",
    image: "/hero.jpg",
    imageAlt: "El malecón de Puerto Vallarta",
    stat: { value: "500+", label: "amarres náuticos" },
    accentBorder: "from-aqua-300/30",
    badgeLabel: "bg-aqua-100 text-aqua-700 border-aqua-200",
  },
  {
    id: "playas",
    label: "Playas",
    title: "42 km de costa turquesa",
    body: "Alrededor de 42 kilómetros de hermosas playas se extienden junto a las aguas color turquesa del Pacífico. Desde playas bulliciosas hasta las más apartadas y vírgenes, Puerto Vallarta tiene un rincón para cada viajero.",
    image: "/pacifico.avif",
    imageAlt: "Foto del pacífico y playas de Puerto Vallarta",
    stat: { value: "42 km", label: "de litoral" },
    accentBorder: "from-palm-300/25",
    badgeLabel: "bg-palm-100 text-palm-700 border-palm-200",
  },
  {
    id: "ecoturismo",
    label: "Ecoturismo",
    title: "Sierra Madre y biodiversidad",
    body: "La Sierra Madre llega al mar en Puerto Vallarta, creando un ecosistema único. Selva tropical, ríos cristalinos, vida marina silvestre y flora protegida hacen del destino un paraíso para el ecoturismo.",
    image: "/arcos.avif",
    imageAlt: "Foto de los arcos y sierra de Puerto Vallarta",
    stat: { value: "27°C", label: "clima promedio" },
    accentBorder: "from-palm-300/25",
    badgeLabel: "bg-palm-100 text-palm-700 border-palm-200",
  },
];

function SectionBlock({ section, index }: { section: typeof sections[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index > 0 ? "pt-20 border-t border-sand-200" : ""}`}>
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -28 : 28 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className={isEven ? "lg:order-first" : "lg:order-last"}
      >
        <div className={`p-2 rounded-[2rem] bg-gradient-to-b ${section.accentBorder} to-transparent shadow-[0_20px_60px_-16px_rgba(7,37,53,0.10)] relative`}>
          <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[4/3]">
            <Image
              src={section.image}
              alt={section.imageAlt}
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            />
          </div>
          {/* Stat badge */}
          <div className="absolute -bottom-4 left-6 rounded-2xl shadow-[0_8px_24px_-8px_rgba(7,37,53,0.12)] border border-white/80 bg-white/95 backdrop-blur-sm px-5 py-3 flex items-center gap-3">
            <p className="font-display text-2xl font-normal text-deep-900">{section.stat.value}</p>
            <p className="font-sans text-xs text-deep-900/50 leading-tight max-w-[80px]">{section.stat.label}</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
        className={isEven ? "lg:order-last" : "lg:order-first"}
      >
        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 border ${section.badgeLabel} mb-5`}>
          <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-medium">
            {section.label}
          </span>
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-900 leading-tight mb-5">
          {section.title}
        </h2>
        <p className="font-sans text-deep-900/55 text-base leading-relaxed">
          {section.body}
        </p>
      </motion.div>
    </div>
  );
}

export default function PVSections() {
  return (
    <section className="py-24 px-6 bg-sand-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {sections.map((s, i) => (
          <SectionBlock key={s.id} section={s} index={i} />
        ))}
      </div>
    </section>
  );
}
