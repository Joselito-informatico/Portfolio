import { motion, useReducedMotion } from 'framer-motion'

const EXPERIENCE = [
  {
    id: 1,
    company: 'TI-Impulso',
    role: 'Desarrollador de Sistema de Tickets',
    type: 'Práctica profesional',
    period: 'Feb 2025 — Abr 2025',
    bullets: [
      'Desarrollé una plataforma MERN completa de gestión de incidencias con chatbot inteligente integrado.',
      'Diseñé esquemas NoSQL y optimicé consultas para visualizar métricas operativas en tiempo real.',
      'Entregué documentación técnica completa y manual de usuario.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Joselito-informatico/SistemaTickets',
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Desarrollador Full-Stack',
    type: 'Proyecto independiente',
    period: 'Sept 2024 — Oct 2024',
    bullets: [
      'Construí un sistema HelpDesk en PHP + MySQL para automatizar el seguimiento de solicitudes técnicas.',
      'Reduje los tiempos de respuesta promedio mediante un flujo de atención estructurado.',
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
    bullets: [
      'Realicé diagnóstico y mantención preventiva de la infraestructura informática del liceo.',
      'Reacondicioné equipos en desuso y actualicé sistemas operativos y controladores.',
      'Elaboré un informe técnico detallado con el estado inicial y recomendaciones de mejora.',
    ],
    tech: ['Linux', 'Hardware', 'Redes'],
    github: null,
  },
]

const fadeUp = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
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
        className="font-display font-bold leading-tight mb-16 clr-text"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        initial={shouldReduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        Dónde he <span className="clr-accent">trabajado.</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical — desktop */}
        <div
          className="absolute left-0 top-2 bottom-8 w-px hidden md:block"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
        />

        <div className="flex flex-col">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative md:pl-10 pb-6 sm:pb-10 last:pb-0"
              variants={shouldReduce ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Dot — desktop */}
              <div
                className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] hidden md:block"
                style={{ backgroundColor: 'rgba(0,255,136,0.4)', border: '1px solid rgba(0,255,136,0.6)' }}
              />

              {/* Card con border-left en mobile como indicador de timeline */}
              <div
                className="p-5 sm:p-6 md:border-l-0"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: '2px solid rgba(0,255,136,0.35)',
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase clr-accent block mb-1">
                      {item.type}
                    </span>
                    <h3 className="font-display font-semibold text-base sm:text-lg clr-text leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-sm mt-0.5 clr-muted">{item.company}</p>
                  </div>
                  <span
                    className="text-xs mt-1 sm:mt-0 shrink-0"
                    style={{ color: 'rgba(255,255,255,0.28)' }}
                  >
                    {item.period}
                  </span>
                </div>

                <div className="mb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-5">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-sm clr-muted leading-relaxed">
                      <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(0,255,136,0.5)' }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech + link */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <li key={t} className="text-xs font-medium px-2.5 py-1 clr-muted" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium clr-muted hover-accent py-1"
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