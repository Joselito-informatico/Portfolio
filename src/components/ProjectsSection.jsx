import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../constants/projects'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function ProjectsSection() {
  const shouldReduce = useReducedMotion()

  const [featured, ...rest] = PROJECTS

  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-24 py-28 md:py-36"
    >
      {/* Section header */}
      <motion.div
        className="mb-14"
        initial={shouldReduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span
            className="text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
          >
            02 — Proyectos
          </span>
          <div
            className="h-px flex-1 max-w-[48px]"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          />
        </div>

        <h2
          className="text-4xl md:text-5xl font-black leading-tight"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
        >
          Lo que he construido
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={shouldReduce ? undefined : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col gap-4"
      >
        {/* Featured — fila completa */}
        <ProjectCard featured {...featured} />

        {/* Grid 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </motion.div>

      {/* Footer link a GitHub */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={shouldReduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a
          href="https://github.com/Joselito-informatico"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
        >
          Ver todos los repositorios en GitHub →
        </a>
      </motion.div>
    </section>
  )
}
