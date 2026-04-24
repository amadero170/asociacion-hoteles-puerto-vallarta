"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/puerto-vallarta", label: "Puerto Vallarta" },
  { href: "/socios", label: "Socios" },
  { href: "/actividades", label: "Actividades" },
  { href: "/bolsa-de-trabajo", label: "Bolsa de Trabajo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isLight = scrolled;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="flex justify-center pt-5 px-4">
          {/* Desktop Nav */}
          <nav
            className={`
              hidden lg:flex pointer-events-auto
              items-center justify-between gap-2
              transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
              ${isLight
                ? "w-full max-w-5xl px-4 py-2.5 rounded-2xl bg-sand-50/96 backdrop-blur-xl border border-sand-200 shadow-[0_8px_32px_-4px_rgba(4,31,42,0.10)]"
                : "w-full max-w-5xl px-6 py-3.5 rounded-full bg-deep-950/55 backdrop-blur-md border border-white/10"
              }
            `}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                <Image src="/logo.png" alt="Logo Asociación de Hoteles PV" width={36} height={36} className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <p className={`font-display text-sm font-semibold leading-tight tracking-wide transition-colors duration-500 ${isLight ? "text-deep-900" : "text-white"}`}>
                  Asociación de Hoteles
                </p>
                <p className={`text-[10px] font-sans uppercase tracking-[0.15em] leading-none transition-colors duration-500 ${isLight ? "text-aqua-700/70" : "text-aqua-300/80"}`}>
                  Puerto Vallarta
                </p>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="flex items-center gap-1">
              {links.slice(0, 6).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`
                    px-3 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide
                    transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${pathname === l.href
                      ? isLight
                        ? "bg-aqua-100 text-aqua-700 border border-aqua-200"
                        : "bg-aqua-500/20 text-aqua-300 border border-aqua-500/30"
                      : isLight
                        ? "text-deep-900/60 hover:text-deep-900 hover:bg-deep-900/5"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <Link
                href="/contacto"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-coral-500 hover:bg-coral-400 text-white text-xs font-sans font-700 tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] group shadow-[0_4px_16px_-4px_rgba(244,114,79,0.5)]"
              >
                <span>Contáctanos</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden absolute top-5 right-4 pointer-events-auto">
          <button
            onClick={() => setOpen(!open)}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 relative ${
              isLight || open 
                ? "bg-white/90 backdrop-blur-md border border-deep-900/10 text-deep-900 shadow-[0_4px_16px_-4px_rgba(4,31,42,0.10)] hover:bg-white" 
                : "bg-deep-900/30 backdrop-blur-md border border-white/15 text-white hover:bg-deep-900/50"
            }`}
            aria-label="Menú"
          >
            <span className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "opacity-0 scale-0 rotate-90 absolute" : "opacity-100 scale-100"}`}>
              <List weight="light" size={20} />
            </span>
            {open && <X weight="light" size={20} className="absolute" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay — warm tropical */}
      <div
        className={`
          fixed inset-0 z-30
          bg-gradient-to-b from-deep-950 via-deep-900 to-aqua-900/90
          backdrop-blur-3xl
          transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col justify-center items-start h-full px-8 pt-24 pb-12 gap-2">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`
                font-display text-4xl sm:text-5xl font-normal text-white/85 hover:text-white
                transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
                hover:translate-x-2
                ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
              `}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
            >
              {l.label}
              {pathname === l.href && (
                <span className="ml-3 inline-block w-2 h-2 rounded-full bg-aqua-400 align-middle" />
              )}
            </Link>
          ))}
          <div
            className={`mt-8 transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: open ? "520ms" : "0ms" }}
          >
            <p className="text-aqua-300/50 text-sm font-sans">
              luceromayen@vallartahoteles.mx
            </p>
            <p className="text-aqua-300/50 text-sm font-sans mt-1">
              (322) 225-0904
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
