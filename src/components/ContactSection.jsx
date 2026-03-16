import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Copy, Check } from 'lucide-react'

// Mail removido — no se usaba en JSX

const EMAIL = 'ji.leblanc.aravena@gmail.com'

const LINKS = [
  {
    id:     'github',
    label:  'GitHub',
    handle: '@Joselito-informatico',
    href:   'https://github.com/Joselito-informatico',
    icon:   <Github size={16} />,
  },
  {
    id:     'linkedin',
    label:  'LinkedIn',
    handle: 'j-leblanc-ing',
    href:   'https://www.linkedin.com/in/j-leblanc-ing/',
    icon:   <Linkedin size={16} />,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ContactSection() {
  const shouldReduce = useReducedMotion()
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  return (
    <section id="contact" className="px-5 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28 lg:py-36">

      {/* Label */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-semibold tracking-[0.22em] uppercase clr-accent">
          05 — Contacto
        </span>
        <div className="h-px w-12" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      </motion.div>

      {/* Grid 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

        {/* Izquierda */}
        <motion.div
          variants={shouldReduce ? undefined : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={shouldReduce ? undefined : fadeUp}
            className="font-syne text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight mb-6 clr-text"
          >
            Hablemos<span className="clr-accent">.</span>
          </motion.h2>

          <motion.p
            variants={shouldReduce ? undefined : fadeUp}
            className="text-sm md:text-base leading-relaxed mb-10 max-w-sm clr-muted"
          >
            Estoy disponible para posiciones full-time, freelance o proyectos puntuales.
            Si tienes algo en mente, escríbeme — respondo rápido.
          </motion.p>

          <motion.div variants={shouldReduce ? undefined : fadeUp}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 clr-muted">
              Email
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm sm:text-base font-medium clr-text hover-accent"
              >
                {EMAIL}
              </a>
              <button
                onClick={handleCopy}
                aria-label="Copiar email al portapapeles"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all duration-200"
                style={{
                  border:          `1px solid ${copied ? 'rgba(0,255,136,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  color:           copied ? 'var(--color-accent)' : 'var(--color-muted)',
                  backgroundColor: copied ? 'rgba(0,255,136,0.05)' : 'transparent',
                }}
              >
                {copied
                  ? <><Check size={11} /> Copiado</>
                  : <><Copy  size={11} /> Copiar</>
                }
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Derecha */}
        <motion.div
          className="flex flex-col gap-5"
          variants={shouldReduce ? undefined : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {LINKS.map(({ id, label, handle, href, icon }) => (
            <motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={shouldReduce ? undefined : fadeUp}
              className="group flex items-center justify-between p-5 transition-all duration-200"
              style={{
                border:          '1px solid rgba(255,255,255,0.06)',
                backgroundColor: 'var(--color-surface)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor     = 'rgba(0,255,136,0.25)'
                e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.03)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor     = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.backgroundColor = 'var(--color-surface)'
              }}
            >
              <div className="flex items-center gap-4">
                <span className="clr-muted">{icon}</span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-0.5 clr-muted">
                    {label}
                  </p>
                  <p className="text-sm font-medium clr-text">
                    {handle}
                  </p>
                </div>
              </div>
              <span
                className="text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 clr-accent"
              >
                ↗
              </span>
            </motion.a>
          ))}

          {/* Disponibilidad */}
          <motion.div
            variants={shouldReduce ? undefined : fadeUp}
            className="p-5"
            style={{ border: '1px solid rgba(0,255,136,0.15)', backgroundColor: 'rgba(0,255,136,0.03)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase clr-accent">
                Disponible ahora
              </span>
            </div>
            <p className="text-sm leading-relaxed clr-muted">
              Arica · Santiago · Puerto Montt · Remoto · Traslado inmediato
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-24 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        initial={shouldReduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
          © {new Date().getFullYear()} José Le Blanc — Diseñado y construido con React + Vite + Tailwind
        </span>
        <a href="#hero" className="text-xs font-medium clr-muted hover-accent">
          Volver arriba ↑
        </a>
      </motion.div>
    </section>
  )
}