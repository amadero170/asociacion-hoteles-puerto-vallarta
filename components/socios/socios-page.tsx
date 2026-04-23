"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";

const hotels: { name: string; url: string; category: string; logo?: string }[] = [
  { name: "Velas Vallarta", url: "https://velasvallarta.com.mx", category: "Resort" },
  { name: "Grand Miramar", url: "https://grandmiramar.com", category: "Boutique" },
  { name: "Garza Blanca Preserve Resort", url: "https://garzablancaresort.com", category: "Resort", logo: "/logos-socios/logo-garza-blanca.jpg" },
  { name: "Hyatt Ziva", url: "https://hyatt.com", category: "Resort" },
  { name: "Marriott Puerto Vallarta", url: "https://marriott.com", category: "Resort" },
  { name: "The Westin Resort & Spa", url: "https://westinpuertovallarta.com", category: "Resort" },
  { name: "Hilton Riviera", url: "https://hilton.com", category: "Resort", logo: "/logos-socios/logo-hilton.jpg" },
  { name: "Casa Velas", url: "https://hotelcasavelas.com.mx", category: "Boutique" },
  { name: "Villa Premiere", url: "https://premiereonline.com.mx", category: "Boutique" },
  { name: "Barceló Puerto Vallarta", url: "https://barcelo.com", category: "Resort" },
  { name: "Sheraton Vallarta", url: "https://sheratonvallarta.com", category: "Resort" },
  { name: "Secrets Vallarta Bay", url: "https://secretsresorts.com.mx", category: "Resort", logo: "/logos-socios/logo-secrets-vallarta-bay.jpg" },
  { name: "Fiesta Americana", url: "https://fiestamericana.com", category: "Resort" },
  { name: "Krystal Grand", url: "https://krystalgrand-puertovallarta.com", category: "Resort" },
  { name: "Meliá Puerto Vallarta", url: "https://melia.com", category: "Resort" },
  { name: "Crown Paradise Club", url: "https://hotelcrownparadiseclubpuertovallarta.com", category: "Resort" },
  { name: "Crown Paradise Golden", url: "https://hotelcrownparadisegoldenpuertovallarta.com", category: "Resort" },
  { name: "Hacienda Buenaventura", url: "https://haciendaonline.com.mx", category: "Hotel", logo: "/logos-socios/logo-hacienda-buenaventura.jpg" },
  { name: "Villa del Palmar", url: "https://villagroupresorts.com.mx", category: "Resort", logo: "/logos-socios/logo-villa del-palmar.jpg" },
  { name: "Sunscape Puerto Vallarta", url: "https://sunscaperesorts.mx", category: "Resort" },
  { name: "Almar Resort", url: "https://almarresort.com", category: "Resort" },
  { name: "Plaza Pelicanos Grand", url: "https://plazapelicanosgrand.com", category: "Hotel" },
  { name: "Hotel Flamingo Vallarta", url: "https://flamingovallarta.com", category: "Hotel" },
  { name: "Hotel Rosita", url: "https://hotelrosita.com", category: "Hotel", logo: "/logos-socios/logo-hotel-rosita.jpg" },
  { name: "Buenaventura Grand", url: "https://hotelbuenaventura.com.mx", category: "Hotel" },
  { name: "Hotel Playa Los Arcos", url: "https://playalosarcos.com", category: "Hotel", logo: "/logos-socios/logo-los-arcos.jpg" },
  { name: "Hotel Los Arcos Suites", url: "https://arcossuites.com", category: "Hotel" },
  { name: "Hotel Friendly Vallarta", url: "https://friendlyvallarta.com", category: "Resort", logo: "/logos-socios/logo-friendly.jpg" },
  { name: "Hotel Gaviota Vallarta", url: "https://hotelgaviota.com", category: "Hotel" },
  { name: "Loft Hotel Malecón Vallarta", url: "https://lofthotelmaleconvallarta.com", category: "Boutique" },
  { name: "Hotel Comfort Inn", url: "https://civallarta.com", category: "Hotel" },
  { name: "Hotel Krystal", url: "https://krystalhotels.com.mx", category: "Hotel" },
  { name: "City Express Plus", url: "https://cityexpress.com", category: "Hotel" },
  { name: "River Park Hotel", url: "https://riverparkhotel.mx", category: "Hotel" },
  { name: "Casa Doña Susana", url: "https://casadonasusana.com", category: "Boutique", logo: "/logos-socios/logo-casa-susana.jpg" },
  { name: "Hotel El Pescador", url: "https://hotelelpescador.com", category: "Hotel" },
  { name: "Hotel MIO", url: "https://hotelmiovallarta.com.mx", category: "Boutique" },
];

const categories = ["Todos", "Resort", "Boutique", "Hotel"];

const categoryColors: Record<string, string> = {
  Resort:   "bg-aqua-100 text-aqua-700",
  Boutique: "bg-coral-100 text-coral-600",
  Hotel:    "bg-palm-100 text-palm-700",
};

export default function SociosPage() {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = hotels.filter((h) => {
    const matchCat = filter === "Todos" || h.category === filter;
    const matchSearch = h.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  }).sort((a, b) => {
    if (a.logo && !b.logo) return -1;
    if (!a.logo && b.logo) return 1;
    return 0;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-deep-950 via-aqua-900 to-deep-950 pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-aqua-500/8 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-64 rounded-full bg-coral-500/8 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-400/35 bg-aqua-500/15 mb-6"
          >
            <span className="text-[10px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
              {hotels.length} hoteles asociados
            </span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl font-normal text-white leading-tight mb-4"
          >
            Hoteles socios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="font-sans text-white/55 text-base max-w-xl leading-relaxed"
          >
            Desde grandes resorts internacionales hasta hoteles boutique únicos,
            nuestra red agrupa lo mejor de la hotelería de Puerto Vallarta.
          </motion.p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-16 px-6 bg-sand-50" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <div className="relative flex-1 max-w-sm">
              <MagnifyingGlass weight="light" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-deep-900/35 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar hotel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-sand-300 bg-white font-sans text-sm text-deep-900 placeholder:text-deep-900/30 focus:outline-none focus:ring-2 focus:ring-aqua-400/30 focus:border-aqua-400/50 transition-all duration-300"
              />
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-500 tracking-wide transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${filter === cat
                      ? "bg-aqua-600 text-white shadow-[0_4px_12px_-4px_rgba(13,154,152,0.45)]"
                      : "bg-white border border-sand-300 text-deep-900/60 hover:border-aqua-300 hover:text-aqua-700"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <p className="font-sans text-xs text-deep-900/35 mb-6 tracking-wide">
            Mostrando {filtered.length} de {hotels.length} hoteles
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((hotel, i) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.4), ease: [0.32, 0.72, 0, 1] }}
              >
                <a
                  href={hotel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-sand-200 hover:border-aqua-300 bg-white hover:shadow-[0_6px_24px_-8px_rgba(23,184,182,0.2)] transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <div className="px-6 py-5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-sand-100 border border-sand-200 flex items-center justify-center overflow-hidden shrink-0">
                          {hotel.logo ? (
                            <Image src={hotel.logo} alt={`Logo de ${hotel.name}`} width={40} height={40} className="w-full h-full object-cover" />
                          ) : (
                            <span className="font-display text-lg font-normal text-aqua-600/50">
                              {hotel.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <span className={`text-[10px] font-sans uppercase tracking-[0.15em] px-2 py-0.5 rounded-full ${categoryColors[hotel.category] || "bg-sand-100 text-deep-700"}`}>
                          {hotel.category}
                        </span>
                      </div>
                      <p className="font-sans font-600 text-sm text-deep-900 group-hover:text-aqua-800 transition-colors duration-300">
                        {hotel.name}
                      </p>
                      <p className="font-sans text-[11px] text-deep-900/40 mt-0.5">
                        Puerto Vallarta, México
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-sand-200 flex items-center justify-center text-deep-900/25 group-hover:border-aqua-400 group-hover:text-aqua-600 group-hover:bg-aqua-50 transition-all duration-300 shrink-0">
                      <ArrowUpRight weight="light" size={14} />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-sans text-deep-900/40 text-sm">
                No se encontraron hoteles con esa búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
