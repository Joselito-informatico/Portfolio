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

// ── Card destacada (featured) ──────────────────────────────────────────────
function FeaturedCard({ title, tagline, description, tech, github, live }) {
  return (
    <motion.article
      variants={cardVariants}
      className="relative group overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <div className="p-5 sm:p-8 md:p-10">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
              style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Proyecto destacado
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
            >
              {title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 shrink-0 pt-1">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio GitHub de ${title}`}
              className="transition-colors duration-200"
              style={{ color: 'var(--color-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              <Github size={18} />
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo en vivo de ${title}`}
                className="transition-colors duration-200"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-base font-medium mb-4"
          style={{ color: 'var(--color-text)', fontFamily: 'DM Sans, sans-serif', opacity: 0.7 }}
        >
          {tagline}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-8 max-w-2xl"
          style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
        >
          {description}
        </p>

        {/* Footer: tech + CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
            {tech.map((t) => (
              <li
                key={t}
                className="text-xs font-medium px-3 py-1"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--color-muted)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {t}
              </li>
            ))}
          </ul>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity duration-200 hover:opacity-80"
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Ver demo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ── Card normal (grid) ─────────────────────────────────────────────────────
function NormalCard({ title, tagline, description, tech, github, live }) {
  return (
    <motion.article
      variants={cardVariants}
      className="relative group flex flex-col overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3
            className="text-xl font-black leading-tight"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
          >
            {title}
          </h3>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio GitHub de ${title}`}
              className="transition-colors duration-200"
              style={{ color: 'var(--color-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              <Github size={16} />
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo en vivo de ${title}`}
                className="transition-colors duration-200"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-sm font-medium mb-3"
          style={{ color: 'var(--color-text)', fontFamily: 'DM Sans, sans-serif', opacity: 0.65 }}
        >
          {tagline}
        </p>

        {/* Description — crece para empujar tech al fondo */}
        <p
          className="text-sm leading-relaxed flex-1 mb-6"
          style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
        >
          {description}
        </p>

        {/* Tech */}
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
          {tech.map((t) => (
            <li
              key={t}
              className="text-xs font-medium px-3 py-1"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'var(--color-muted)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

// ── Export principal ───────────────────────────────────────────────────────
export default function ProjectCard({ featured = false, ...props }) {
  return featured ? <FeaturedCard {...props} /> : <NormalCard {...props} />
}