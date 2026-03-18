import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'React Specialist',
  'Power BI Developer',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion()
  const role = useTypewriter(ROLES, { speed: 75, pause: 2200 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden pt-24 md:pt-0"
    >
      {/* Dot grid — reducido para no interferir con legibilidad */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,136,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 30% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 30% 50%, black 10%, transparent 100%)',
        }}
      />

      {/* Glow sutil */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-24 w-[36rem] h-[36rem] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 65%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Contenido */}
      <motion.div
        className="relative z-10 max-w-4xl"
        variants={shouldReduce ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.p
          variants={shouldReduce ? undefined : itemVariants}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-8 clr-accent"
        >
          <span className="block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
          Disponible para trabajar
        </motion.p>

        {/* Nombre — dos apellidos, tracking normal */}
        <motion.h1
          variants={shouldReduce ? undefined : itemVariants}
          className="font-display font-bold leading-[0.95] tracking-normal mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
        >
          <span className="clr-text block">José</span>
          <span className="clr-accent block">Le Blanc</span>
          <span className="clr-text block" style={{ fontSize: 'clamp(1.8rem, 5.5vw, 4.5rem)' }}>
            Aravena
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="flex items-center h-8 sm:h-9 mb-6"
        >
          <span className="text-base sm:text-lg md:text-xl font-medium clr-muted">
            {role}
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-4 ml-1 align-middle animate-pulse"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </span>
        </motion.div>

        {/* Bio — primera persona, consistente */}
        <motion.p
          variants={shouldReduce ? undefined : itemVariants}
          className="text-sm md:text-base max-w-md leading-relaxed mb-8 md:mb-10 clr-muted"
        >
          Soy Ingeniero Civil en Computación e Informática de la Universidad de Tarapacá.
          Construyo productos web completos — desde la arquitectura de datos hasta el deploy en producción.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="flex flex-wrap items-center gap-3 mb-10 md:mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{ backgroundColor: 'var(--color-accent)', color: '#0a0a0a' }}
          >
            Ver proyectos <ArrowDown size={13} />
          </a>
          <a
            href="https://github.com/Joselito-informatico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border transition-colors duration-200 clr-text hover:border-white/35"
            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
          >
            <Github size={13} /> GitHub
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="flex items-center gap-4 flex-wrap"
        >
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Conectar
          </span>
          <div className="h-px w-6" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          <a
            href="https://www.linkedin.com/in/j-leblanc-ing/"
            target="_blank"
            rel="noopener noreferrer"
            className="clr-muted hover-accent"
            aria-label="LinkedIn de José Le Blanc Aravena"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:ji.leblanc.aravena@gmail.com"
            className="hidden sm:inline text-xs font-medium clr-muted hover-text"
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
        <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>
          scroll
        </span>
        <motion.div
          className="w-px h-7 origin-top"
          style={{ backgroundColor: 'var(--color-accent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}