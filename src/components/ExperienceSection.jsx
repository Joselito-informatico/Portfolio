import { motion, useReducedMotion } from 'framer-motion'

const EXPERIENCE = [
  {
    id: 1,
    company: 'TI-Impulso',
    role: 'Desarrollador de Sistema de Tickets',
    type: 'Práctica profesional',
    period: 'Feb 2025 — Abr 2025',
    current: false,
    bullets: [
      'Plataforma MERN completa de gestión de incidencias con chatbot inteligente integrado.',
      'Diseñé esquemas NoSQL y optimicé consultas para visualización de métricas en tiempo real.',
      'Entregué documentación técnica completa y manual de usuario.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Joselito-informatico/SistemaTickets',
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Desarrollador Full-Stack',
    type: 'Proyecto freelance',
    period: 'Sept 2024 — Oct 2024',
    current: false,
    bullets: [
      'Sistema HelpDesk en PHP + MySQL para automatizar seguimiento de solicitudes técnicas.',
      'Reduje tiempos de respuesta promedio mediante flujo de atención estructurado.',
      'Entregué documentación técnica y manuales de usuario al cliente.',
    ],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: null,
  },
  {
    id: 3,
    company: 'Liceo Politécnico de Arica',
    role: 'Técnico en Mantención Informática',
    type: 'Actividad profesional universitaria',
    period: 'Jun 2025 — Ago 2025',
    current: false,
    bullets: [
      'Diagnóstico y mantención preventiva de infraestructura informática del liceo.',
      'Reacondicionamiento de equipos en desuso y actualización de sistemas operativos.',
      'Elaboración de informe técnico con recomendaciones de mejora continua.',
    ],
    tech: ['Linux', 'Hardware', 'Redes'],
    github: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function ExperienceSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="experience" className="px-5 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28 lg:py-36">

      {/* Label */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-semibold tracking-[0.22em] uppercase clr-accent">
          02 — Experiencia
        </span>
        <div className="h-px w-12" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      </motion.div>

      <motion.h2
        className="font-syne text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-16 clr-text"
        initial={shouldReduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        Dónde he{' '}
        <span className="clr-accent">trabajado.</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
        />

        <div className="flex flex-col gap-0">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative md:pl-12 pb-12 last:pb-0"
              variants={shouldReduce ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Dot en la línea */}
              <div
                className="absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[3px] hidden md:block"
                style={{ backgroundColor: item.current ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)' }}
              />
              {/* Dot pulsante si es current */}
              {item.current && (
                <div
                  className="absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[3px] animate-ping hidden md:block"
                  style={{ backgroundColor: 'var(--color-accent)', opacity: 0.4 }}
                />
              )}

              {/* Card */}
              <div
                className="p-6 transition-all duration-200 group"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase clr-accent block mb-1">
                      {item.type}
                    </span>
                    <h3 className="font-syne text-lg sm:text-xl font-black leading-tight clr-text">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium mt-0.5 clr-muted">
                      {item.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-medium shrink-0 mt-1 sm:mt-0"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-5">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-sm clr-muted">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(0,255,136,0.5)' }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Footer: tech + link */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <li
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 clr-muted"
                        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium clr-muted hover-accent"
                    >
                      Ver repositorio →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
