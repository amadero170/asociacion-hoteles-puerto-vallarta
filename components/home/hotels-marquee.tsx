const hotels = [
  "Velas Vallarta",
  "Grand Miramar",
  "Garza Blanca Preserve Resort",
  "Hyatt Ziva",
  "Marriott Puerto Vallarta",
  "Westin Resort & Spa",
  "Hilton Riviera",
  "Casa Velas",
  "Villa Premiere",
  "Barceló Puerto Vallarta",
  "Sheraton Vallarta",
  "Secrets Vallarta Bay",
  "Fiesta Americana",
  "Krystal Grand",
  "Meliá Puerto Vallarta",
  "Crown Paradise Club",
  "Hacienda Buenaventura",
  "Villa del Palmar",
  "Sunscape Puerto Vallarta",
  "Almar Resort",
  "Plaza Pelicanos Grand",
  "Hotel Flamingo Vallarta",
  "Hotel Rosita",
  "Buenaventura Grand",
];

const doubled = [...hotels, ...hotels];

export default function HotelsMarquee() {
  return (
    /* Warm teal band instead of dark navy */
    <section className="py-14 overflow-hidden bg-gradient-to-r from-aqua-900 via-deep-800 to-aqua-900">
      {/* Top wave edge */}
      <div className="mb-4">
        <div className="flex items-center gap-0" style={{ width: "max-content" }}>
          <div className="flex items-center gap-10 animate-marquee">
            {doubled.map((name, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-display text-xl font-normal text-white/75 hover:text-white transition-colors duration-300 cursor-default">
                  {name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-aqua-400/60 shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-0" style={{ width: "max-content" }}>
          <div className="flex items-center gap-10 animate-marquee-reverse">
            {doubled.map((name, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-display text-xl italic font-normal text-aqua-300/50 hover:text-aqua-200/80 transition-colors duration-300 cursor-default">
                  {name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400/40 shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <span className="text-[11px] text-aqua-200/35 font-sans uppercase tracking-[0.2em]">
          37 hoteles asociados · Puerto Vallarta y Bahía de Banderas
        </span>
      </div>
    </section>
  );
}
