import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'React Specialist',
  'Power BI Developer',
]

// Variantes definidas fuera del componente para evitar re-renders
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion()
  const role = useTypewriter(ROLES, { speed: 75, pause: 2200 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden pt-24 md:pt-0"
    >
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,255,136,0.14) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* Soft accent glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-16 w-[32rem] h-[32rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        variants={shouldReduce ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Available badge */}
        <motion.p
          variants={shouldReduce ? undefined : itemVariants}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase mb-8"
          style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
        >
          <span
            className="block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
          Disponible para trabajar
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={shouldReduce ? undefined : itemVariants}
          className="text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-none tracking-tight mb-5"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
        >
          José
          <br />
          <span style={{ color: 'var(--color-accent)' }}>Le Blanc</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="flex items-center h-8 sm:h-9 mb-6 sm:mb-7"
        >
          <span
            className="text-lg sm:text-xl md:text-2xl font-medium"
            style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
          >
            {role}
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-5 ml-1 align-middle animate-pulse"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={shouldReduce ? undefined : itemVariants}
          className="text-sm md:text-base lg:text-lg max-w-lg leading-relaxed mb-8 md:mb-10"
          style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
        >
          Ingeniero Civil en Computación e Informática, Universidad de Tarapacá 2025.
          Construyo productos web completos — desde la arquitectura hasta el deploy en producción.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 md:mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: '#0a0a0a',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Ver proyectos <ArrowDown size={13} />
          </a>
          <a
            href="https://github.com/Joselito-informatico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border transition-colors duration-200"
            style={{
              borderColor: 'rgba(255,255,255,0.12)',
              color: 'var(--color-text)',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
            }}
          >
            <Github size={13} /> GitHub
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="flex items-center gap-3 sm:gap-4 flex-wrap"
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Conectar
          </span>
          <div className="h-px w-8" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          <a
            href="https://www.linkedin.com/in/j-leblanc-ing/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: 'var(--color-muted)' }}
            aria-label="LinkedIn de José Le Blanc"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:ji.leblanc.aravena@gmail.com"
            className="hidden sm:inline text-xs font-medium transition-colors duration-200"
            style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            ji.leblanc.aravena@gmail.com
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        aria-hidden="true"
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans, sans-serif' }}
        >
          scroll
        </span>
        <motion.div
          className="w-px h-8 origin-top"
          style={{ backgroundColor: 'var(--color-accent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}