import { motion, useReducedMotion } from 'framer-motion'
import { Award } from 'lucide-react'

const CERTIFICATIONS = [
  { id: 1, title: 'Power BI Master', issuer: 'Platzi', date: 'Dic 2025', detail: 'Modelado de datos, DAX y RLS' },
  { id: 2, title: 'Excel Intermedio', issuer: 'Platzi', date: 'Dic 2025', detail: 'Gestión avanzada de datos' },
  { id: 3, title: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: '2024', detail: 'Fundamentos de redes' },
  { id: 4, title: 'Junior Cybersecurity Analyst', issuer: 'Cisco', date: '2024', detail: 'Análisis de seguridad informática' },
  { id: 5, title: 'Acelerador de Carrera con Power BI', issuer: 'Zakidata', date: 'Feb 2024', detail: '8 horas — taller intensivo' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function AboutSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-28 md:py-36">
      {/* Label */}
      <motion.div
        className="flex items-center gap-4 mb-14"
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="text-xs font-semibold tracking-[0.22em] uppercase"
          style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
        >
          03 — Sobre mí
        </span>
        <div className="h-px w-12" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      </motion.div>

      {/* Grid 2 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

        {/* Izquierda: foto + bio */}
        <motion.div
          className="lg:col-span-2 flex flex-col gap-8"
          variants={shouldReduce ? undefined : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Foto */}
          <motion.div variants={shouldReduce ? undefined : fadeUp} className="relative">
            <div className="absolute -inset-[1px]" style={{ border: '1px solid rgba(0,255,136,0.15)' }} />
            <img
              src="/foto-perfil.png"
              alt="José Le Blanc — Ingeniero Civil en Computación e Informática"
              loading="lazy"
              className="w-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              style={{ maxHeight: '420px' }}
            />
          </motion.div>

          {/* Bio */}
          <motion.div variants={shouldReduce ? undefined : fadeUp}>
            <h2
              className="text-3xl md:text-4xl font-black leading-tight mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
            >
              Construyo software
              <br />
              <span style={{ color: 'var(--color-accent)' }}>que resuelve problemas.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Soy Ingeniero Civil en Computación e Informática egresado de la Universidad de
              Tarapacá, Arica, en 2025 — con distinción en el título de Ingeniero de Ejecución
              y aprobado por unanimidad en el grado Civil.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Me especializo en desarrollo Full-Stack con stack MERN y analítica con Power BI.
              Me interesa la intersección entre ingeniería de software y decisiones estratégicas:
              sistemas que no solo funcionan, sino que generan información útil.
            </p>
          </motion.div>
        </motion.div>

        {/* Derecha: logro + educación + certs */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-6"
          variants={shouldReduce ? undefined : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Rally */}
          <motion.div
            variants={shouldReduce ? undefined : fadeUp}
            className="relative overflow-hidden p-6"
            style={{ backgroundColor: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.18)' }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,255,136,0.1)' }}>
                <Award size={18} style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase block mb-1" style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}>
                  Logro — 2025
                </span>
                <h3 className="text-base font-black mb-1" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>
                  3er Lugar — Rally Latinoamericano de Innovación
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                  Categoría Impacto Social. Solución tecnológica para problemas sociales complejos
                  desarrollada bajo condiciones de alta presión.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div
            variants={shouldReduce ? undefined : fadeUp}
            className="p-6"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Educación — Universidad de Tarapacá
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { degree: 'Ingeniero Civil en Computación e Informática', note: 'Aprobado por unanimidad' },
                { degree: 'Ingeniero de Ejecución en Computación e Informática', note: 'Aprobado con distinción' },
                { degree: 'Licenciado en Ciencias de la Ingeniería', note: null },
              ].map(({ degree, note }) => (
                <div key={degree} className="flex items-start justify-between gap-4">
                  <span className="text-sm" style={{ color: 'var(--color-text)', fontFamily: 'DM Sans, sans-serif' }}>
                    {degree}
                  </span>
                  {note && (
                    <span
                      className="text-xs shrink-0 px-2 py-0.5"
                      style={{ color: 'var(--color-accent)', border: '1px solid rgba(0,255,136,0.2)', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }}
                    >
                      {note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificaciones */}
          <motion.div
            variants={shouldReduce ? undefined : fadeUp}
            className="p-6"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Certificaciones
            </h4>
            <ul className="flex flex-col" style={{ gap: 0 }}>
              {CERTIFICATIONS.map((cert, i) => (
                <li
                  key={cert.id}
                  className="py-3 flex items-start justify-between gap-4"
                  style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div>
                    <span className="text-sm font-medium block" style={{ color: 'var(--color-text)', fontFamily: 'DM Sans, sans-serif' }}>
                      {cert.title}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                      {cert.issuer} · {cert.detail}
                    </span>
                  </div>
                  <span className="text-xs shrink-0 mt-0.5" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                    {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
