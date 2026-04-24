import Link from "next/link";
import Image from "next/image";
import { FacebookLogo, EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/puerto-vallarta", label: "Puerto Vallarta" },
  { href: "/socios", label: "Socios" },
  { href: "/actividades", label: "Actividades" },
  { href: "/bolsa-de-trabajo", label: "Bolsa de Trabajo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-950 text-white">
      {/* Warm gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-aqua-500/50 to-coral-500/30" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0">
                <Image src="/logo.png" alt="Logo Asociación" width={40} height={40} className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-white leading-tight">
                  Asociación de Hoteles
                </p>
                <p className="text-[11px] text-aqua-300/70 font-sans uppercase tracking-[0.18em]">
                  Puerto Vallarta
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed max-w-xs">
              Representamos y promovemos a los principales hoteles de Puerto
              Vallarta y Bahía de Banderas A.C., impulsando el turismo
              sostenible del destino.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-aqua-300 hover:border-aqua-500/30 hover:bg-aqua-500/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookLogo weight="light" size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-aqua-300/60 font-sans font-medium mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-aqua-300 font-sans transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[11px] uppercase tracking-[0.2em] text-aqua-300/60 font-sans font-medium mb-5">
              Contacto
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin weight="light" size={16} className="text-aqua-400/60 mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 font-sans leading-relaxed">
                  Centro Internacional de Convenciones,<br />
                  Villa Las Flores 505, Puerto Vallarta, Jal.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone weight="light" size={16} className="text-aqua-400/60 shrink-0" />
                <a href="tel:+13222250904" className="text-sm text-white/50 hover:text-aqua-300 font-sans transition-colors duration-300">
                  (322) 225-0904 / 224-2939
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple weight="light" size={16} className="text-aqua-400/60 shrink-0" />
                <a href="mailto:luceromayen@vallartahoteles.mx" className="text-sm text-white/50 hover:text-aqua-300 font-sans transition-colors duration-300">
                  luceromayen@vallartahoteles.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-sans">
            © {new Date().getFullYear()} Asociación de Hoteles de Puerto Vallarta y Bahía de Banderas A.C.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-white/25 font-sans text-center sm:text-right">
            <span className="hidden sm:inline">Todos los derechos reservados</span>
            <span className="hidden sm:inline">•</span>
            <span>
              Desarrollado por{" "}
              <a 
                href="https://kairosautomation.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-aqua-500/80 hover:text-aqua-400 transition-colors duration-300 font-medium"
              >
                KairosAutomation.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
