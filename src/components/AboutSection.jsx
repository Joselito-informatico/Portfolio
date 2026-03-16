import { motion, useReducedMotion } from 'framer-motion'
import { Award, MapPin, Wifi, ArrowRight } from 'lucide-react'

const CERTIFICATIONS = [
  { id: 1, title: 'Power BI Master', issuer: 'Platzi', date: 'Dic 2025', detail: 'Modelado de datos, DAX y RLS' },
  { id: 2, title: 'Excel Intermedio', issuer: 'Platzi', date: 'Dic 2025', detail: 'Gestión avanzada de datos' },
  { id: 3, title: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: '2024', detail: 'Fundamentos de redes' },
  { id: 4, title: 'Junior Cybersecurity Analyst', issuer: 'Cisco', date: '2024', detail: 'Análisis de seguridad informática' },
  { id: 5, title: 'Acelerador de Carrera con Power BI', issuer: 'Zakidata', date: 'Feb 2024', detail: '8 horas — taller intensivo' },
]

const AVAILABILITY = [
  { label: 'Arica', icon: 'map' },
  { label: 'Santiago', icon: 'map' },
  { label: 'Puerto Montt', icon: 'map' },
  { label: 'Remoto', icon: 'wifi' },
  { label: 'Traslado inmediato', icon: 'arrow' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

function AvailabilityIcon({ type }) {
  if (type === 'wifi') return <Wifi size={11} />
  if (type === 'arrow') return <ArrowRight size={11} />
  return <MapPin size={11} />
}

export default function AboutSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="about" className="px-5 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28 lg:py-36">

      {/* Label */}
      <motion.div
        className="flex items-center gap-4 mb-16"
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

      {/* Grid principal: 5 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

        {/* ── Columna izquierda ── */}
        <motion.div
          className="md:col-span-1 lg:col-span-2 flex flex-col gap-7"
          variants={shouldReduce ? undefined : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Foto con efecto */}
          <motion.div variants={shouldReduce ? undefined : fadeUp} className="relative group">
            {/* Marco decorativo offset */}
            <div
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-full h-full pointer-events-none transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3 sm:group-hover:-bottom-4 sm:group-hover:-right-4"
              style={{ border: '1px solid rgba(0,255,136,0.2)' }}
            />
            <div className="relative overflow-hidden">
              <img
                src="/foto-perfil.png"
                alt="José Le Blanc — Ingeniero Civil en Computación e Informática"
                loading="lazy"
                className="w-full object-cover object-top transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]"
                style={{ maxHeight: '320px', display: 'block' }}
              />
              {/* Overlay sutil */}
              <div
                className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.3) 0%, transparent 60%)' }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={shouldReduce ? undefined : fadeUp}>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black leading-[1.05] mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
            >
              Construyo software
              <br />
              <span style={{ color: 'var(--color-accent)' }}>que resuelve</span>
              <br />
              problemas reales.
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Ingeniero Civil en Computación e Informática egresado de la Universidad de Tarapacá,
              Arica — graduado en 2025 con distinción en el título de Ejecución y aprobado por
              unanimidad en el grado Civil.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Me especializo en Full-Stack MERN y analítica con Power BI. Me interesa la
              intersección entre ingeniería de software y decisiones estratégicas: sistemas
              que no solo funcionan, sino que generan información útil.
            </p>
          </motion.div>

          {/* Disponibilidad */}
          <motion.div
            variants={shouldReduce ? undefined : fadeUp}
            className="p-5"
            style={{ border: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'var(--color-surface)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <span
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Disponible ahora
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {AVAILABILITY.map(({ label, icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5"
                  style={{
                    color: 'var(--color-text)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    fontFamily: 'DM Sans, sans-serif',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <span style={{ color: 'var(--color-accent)' }}>
                    <AvailabilityIcon type={icon} />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Columna derecha ── */}
        <motion.div
          className="md:col-span-1 lg:col-span-3 flex flex-col gap-5"
          variants={shouldReduce ? undefined : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Rally — logro destacado */}
          <motion.div
            variants={shouldReduce ? undefined : fadeUp}
            className="relative overflow-hidden p-6"
            style={{ backgroundColor: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.2)' }}
          >
            {/* Línea acento top */}
            <div className="absolute top-0 left-0 w-16 h-px" style={{ backgroundColor: 'var(--color-accent)' }} />
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-11 h-11 flex items-center justify-center text-lg font-black"
                style={{
                  backgroundColor: 'rgba(0,255,136,0.1)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  color: 'var(--color-accent)',
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                3°
              </div>
              <div>
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase block mb-1"
                  style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Logro destacado — 2025
                </span>
                <h3 className="text-base font-black mb-1.5" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>
                  Rally Latinoamericano de Innovación
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                  3er lugar en categoría Impacto Social. Solución tecnológica para problemas
                  sociales complejos desarrollada bajo condiciones de alta presión.
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
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Educación — Universidad de Tarapacá · 2025
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { degree: 'Ingeniero Civil en Computación e Informática', note: 'Aprobado por unanimidad', highlight: true },
                { degree: 'Ingeniero de Ejecución en Computación e Informática', note: 'Aprobado con distinción', highlight: false },
                { degree: 'Licenciado en Ciencias de la Ingeniería', note: null, highlight: false },
              ].map(({ degree, note, highlight }) => (
                <div
                  key={degree}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 pb-4"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-1 h-1 rounded-full mt-2"
                      style={{ backgroundColor: highlight ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)' }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: highlight ? 'var(--color-text)' : 'rgba(232,232,232,0.7)',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: highlight ? '500' : '400',
                      }}
                    >
                      {degree}
                    </span>
                  </div>
                  {note && (
                    <span
                      className="text-xs shrink-0 px-2 py-0.5"
                      style={{
                        color: 'var(--color-accent)',
                        border: '1px solid rgba(0,255,136,0.2)',
                        fontFamily: 'DM Sans, sans-serif',
                        whiteSpace: 'nowrap',
                      }}
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
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Certificaciones
            </h4>
            <ul className="flex flex-col">
              {CERTIFICATIONS.map((cert, i) => (
                <li
                  key={cert.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4"
                  style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-px h-full min-h-[32px] mt-1"
                      style={{ backgroundColor: 'rgba(0,255,136,0.25)' }}
                    />
                    <div>
                      <span
                        className="text-sm font-medium block leading-snug"
                        style={{ color: 'var(--color-text)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {cert.title}
                      </span>
                      <span
                        className="text-xs mt-0.5 block"
                        style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {cert.issuer} · {cert.detail}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-xs shrink-0 mt-0.5"
                    style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans, sans-serif' }}
                  >
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