"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, EnvelopeSimple, FacebookLogo } from "@phosphor-icons/react";

export default function ContactContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    hotel: "",
    asunto: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Implement form submission (e.g. Resend, EmailJS, or a server action)
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-950 via-aqua-900 to-deep-900 pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-aqua-400/12 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-aqua-400/35 bg-aqua-500/15 mb-6"
          >
            <span className="text-[10px] text-aqua-200 font-sans uppercase tracking-[0.2em] font-medium">
              Estamos aquí para ayudarte
            </span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl font-normal text-white leading-tight"
          >
            Contáctanos
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6 bg-sand-50" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-3xl font-normal text-deep-900 leading-tight mb-8">
                Información de<br />
                <span className="italic text-aqua-700">contacto</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    Icon: MapPin,
                    label: "Dirección",
                    content: (
                      <p className="font-sans text-sm text-deep-900/55 leading-relaxed">
                        Centro Internacional de Convenciones<br />
                        Villa Las Flores 505, Villa Las Flores<br />
                        Puerto Vallarta, Jalisco, México
                      </p>
                    ),
                    bg: "bg-aqua-100", color: "text-aqua-700",
                  },
                  {
                    Icon: Phone,
                    label: "Teléfono",
                    content: (
                      <>
                        <a href="tel:+13222250904" className="font-sans text-sm text-deep-900/55 hover:text-aqua-700 transition-colors block">(322) 225-0904</a>
                        <a href="tel:+13222242939" className="font-sans text-sm text-deep-900/55 hover:text-aqua-700 transition-colors block">(322) 224-2939</a>
                      </>
                    ),
                    bg: "bg-coral-100", color: "text-coral-600",
                  },
                  {
                    Icon: EnvelopeSimple,
                    label: "Correo electrónico",
                    content: (
                      <a href="mailto:luceromayen@vallartahoteles.mx" className="font-sans text-sm text-deep-900/55 hover:text-aqua-700 transition-colors">
                        luceromayen@vallartahoteles.mx
                      </a>
                    ),
                    bg: "bg-palm-100", color: "text-palm-600",
                  },
                  {
                    Icon: FacebookLogo,
                    label: "Redes sociales",
                    content: (
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-deep-900/55 hover:text-aqua-700 transition-colors">
                        Facebook — Asociación de Hoteles PV
                      </a>
                    ),
                    bg: "bg-aqua-100", color: "text-aqua-700",
                  },
                ].map(({ Icon, label, content, bg, color }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                      <Icon weight="regular" size={18} className={color} />
                    </div>
                    <div>
                      <p className="font-sans font-600 text-sm text-deep-900 mb-1">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-sand-200">
                <p className="font-sans text-[11px] text-deep-900/35 uppercase tracking-[0.2em] mb-4">Equipo</p>
                <div className="space-y-3">
                  {[
                    { name: "Lic. Alejandro Torres Magaña", role: "Dirección General" },
                    { name: "Lic. Lucero Mayen Álvarez", role: "Atención a Socios" },
                  ].map((p) => (
                    <div key={p.name}>
                      <p className="font-sans text-sm font-500 text-deep-900">{p.name}</p>
                      <p className="font-sans text-xs text-aqua-700/60">{p.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-3"
            >
              <div className="border border-aqua-200/50 rounded-[2rem] bg-white p-8 md:p-10 shadow-[0_4px_32px_-12px_rgba(23,184,182,0.12)]">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-aqua-100 border border-aqua-200 flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13L9 17L19 7" stroke="#17B8B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-normal text-deep-900 mb-3">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="font-sans text-sm text-deep-900/55 max-w-xs leading-relaxed">
                      Nos pondremos en contacto contigo a la brevedad. Gracias por escribirnos.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <p className="font-display text-2xl font-normal text-deep-900 mb-1">
                        Envíanos un mensaje
                      </p>
                      <p className="font-sans text-sm text-deep-900/40">
                        Respondemos en menos de 48 horas hábiles.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs font-500 text-deep-900/65">
                          Nombre completo <span className="text-coral-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 font-sans text-sm text-deep-900 placeholder:text-deep-900/30 focus:outline-none focus:ring-2 focus:ring-aqua-400/30 focus:border-aqua-400/50 transition-all duration-300"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs font-500 text-deep-900/65">
                          Correo electrónico <span className="text-coral-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 font-sans text-sm text-deep-900 placeholder:text-deep-900/30 focus:outline-none focus:ring-2 focus:ring-aqua-400/30 focus:border-aqua-400/50 transition-all duration-300"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-xs font-500 text-deep-900/65">
                        Hotel o empresa (opcional)
                      </label>
                      <input
                        type="text"
                        value={form.hotel}
                        onChange={(e) => setForm({ ...form, hotel: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 font-sans text-sm text-deep-900 placeholder:text-deep-900/30 focus:outline-none focus:ring-2 focus:ring-aqua-400/30 focus:border-aqua-400/50 transition-all duration-300"
                        placeholder="Nombre de tu hotel o empresa"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-xs font-500 text-deep-900/65">
                        Asunto <span className="text-coral-500">*</span>
                      </label>
                      <select
                        required
                        value={form.asunto}
                        onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 font-sans text-sm text-deep-900 focus:outline-none focus:ring-2 focus:ring-aqua-400/30 focus:border-aqua-400/50 transition-all duration-300"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="afiliacion">Afiliación a la asociación</option>
                        <option value="bolsa">Bolsa de trabajo</option>
                        <option value="asesoria">Asesoría</option>
                        <option value="prensa">Prensa y medios</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-xs font-500 text-deep-900/65">
                        Mensaje <span className="text-coral-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 font-sans text-sm text-deep-900 placeholder:text-deep-900/30 focus:outline-none focus:ring-2 focus:ring-aqua-400/30 focus:border-aqua-400/50 transition-all duration-300 resize-none"
                        placeholder="Escribe tu mensaje aquí..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-aqua-600 hover:bg-aqua-500 text-white font-sans font-600 text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_6px_24px_-4px_rgba(23,184,182,0.4)]"
                    >
                      <span>Enviar mensaje</span>
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
