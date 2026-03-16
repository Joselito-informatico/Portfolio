import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const CARD_BASE = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid rgba(255,255,255,0.06)',
}

// ── Tech chip ────────────────────────────────────────────────────────
function TechChip({ label }) {
  return (
    <li
      className="text-xs font-medium px-3 py-1 clr-muted"
      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {label}
    </li>
  )
}

// ── Card destacada (featured) ────────────────────────────────────────
function FeaturedCard({ title, tagline, description, tech, github, live }) {
  return (
    <motion.article
      variants={cardVariants}
      className="relative group overflow-hidden"
      style={CARD_BASE}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <div className="p-5 sm:p-8 md:p-10">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 block clr-accent">
              Proyecto destacado
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl md:text-4xl font-black leading-tight clr-text">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-3 shrink-0 pt-1">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio GitHub de ${title}`}
              className="clr-muted hover-text"
            >
              <Github size={18} />
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo en vivo de ${title}`}
                className="clr-muted hover-accent"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-base font-medium mb-4 clr-text" style={{ opacity: 0.7 }}>
          {tagline}
        </p>

        <p className="text-sm leading-relaxed mb-8 max-w-2xl clr-muted">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
            {tech.map((t) => <TechChip key={t} label={t} />)}
          </ul>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity duration-200 hover:opacity-80 clr-accent"
            >
              Ver demo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ── Card normal (grid) ───────────────────────────────────────────────
function NormalCard({ title, tagline, description, tech, github, live }) {
  return (
    <motion.article
      variants={cardVariants}
      className="relative group flex flex-col overflow-hidden"
      style={CARD_BASE}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-syne text-xl font-black leading-tight clr-text">
            {title}
          </h3>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio GitHub de ${title}`}
              className="clr-muted hover-text"
            >
              <Github size={16} />
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo en vivo de ${title}`}
                className="clr-muted hover-accent"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm font-medium mb-3 clr-text" style={{ opacity: 0.65 }}>
          {tagline}
        </p>

        <p className="text-sm leading-relaxed flex-1 mb-6 clr-muted">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
          {tech.map((t) => <TechChip key={t} label={t} />)}
        </ul>
      </div>
    </motion.article>
  )
}

// ── Export principal ─────────────────────────────────────────────────
export default function ProjectCard({ featured = false, ...props }) {
  return featured ? <FeaturedCard {...props} /> : <NormalCard {...props} />
}

// ── WIP Card ─────────────────────────────────────────────────────────
export function WIPCard({ title, tagline, description, tech }) {
  return (
    <motion.article
      variants={cardVariants}
      className="relative flex flex-col overflow-hidden"
      style={{
        ...CARD_BASE,
        border: '1px solid rgba(255,255,255,0.04)',
        opacity: 0.7,
      }}
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase"
        style={{ backgroundColor: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', color: 'var(--color-accent)' }}
      >
        <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
        En desarrollo
      </div>

      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-syne text-xl font-black leading-tight clr-text mb-2 pr-28">
          {title}
        </h3>
        <p className="text-sm font-medium mb-3 clr-text" style={{ opacity: 0.55 }}>
          {tagline}
        </p>
        <p className="text-sm leading-relaxed flex-1 mb-6 clr-muted">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías planificadas">
          {tech.map((t) => (
            <li key={t} className="text-xs font-medium px-3 py-1 clr-muted" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}