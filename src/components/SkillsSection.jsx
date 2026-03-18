import { motion, useReducedMotion } from 'framer-motion'
import { SKILLS } from '../constants/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

const ICONS = {
  'React.js':   <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="2.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg>,
  'TypeScript': <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M3 3h18v18H3V3zm10.5 9.5h2v5h-2v-5zm-1-1.5h4v1.5h-4V11zm-3.5 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/></svg>,
  'Node.js':    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5v7L12 19.82 4 15.5v-7L12 4.18z"/></svg>,
  'MongoDB':    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2C8.5 6 7 9 7 12c0 2.76 2.24 5 5 5s5-2.24 5-5c0-3-1.5-6-5-10zm0 14.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.2 1.1-4.5 3.5-7.8 2.4 3.3 3.5 5.6 3.5 7.8 0 1.93-1.57 3.5-3.5 3.5z"/></svg>,
  'Power BI':   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M3 3h4v18H3V3zm5 6h4v12H8V9zm5-3h4v15h-4V6zm5 5h3v10h-3V11z"/></svg>,
  'Git':        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M21.7 11.29l-9-9a1 1 0 0 0-1.41 0l-9 9a1 1 0 0 0 0 1.41l9 9a1 1 0 0 0 1.41 0l9-9a1 1 0 0 0 0-1.41zM12 18.17L5.83 12 12 5.83 18.17 12 12 18.17z"/></svg>,
  'MySQL':      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2C8 2 4 3.5 4 6v12c0 2.5 4 4 8 4s8-1.5 8-4V6c0-2.5-4-4-8-4zm0 2c3.3 0 6 1.1 6 2s-2.7 2-6 2-6-1.1-6-2 2.7-2 6-2zm6 12c0 .9-2.7 2-6 2s-6-1.1-6-2v-2.2c1.4.8 3.5 1.2 6 1.2s4.6-.4 6-1.2V16zm0-5c0 .9-2.7 2-6 2s-6-1.1-6-2V8.8C7.4 9.6 9.5 10 12 10s4.6-.4 6-1.2V11z"/></svg>,
}

export default function SkillsSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="skills" className="px-5 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28 lg:py-36">

      {/* Label */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-semibold tracking-[0.22em] uppercase clr-accent">
          05 — Skills
        </span>
        <div className="h-px w-12" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="font-display font-bold leading-tight mb-16 max-w-xl clr-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        initial={shouldReduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        Herramientas con las que{' '}
        <span className="clr-accent">trabajo.</span>
      </motion.h2>

      {/* Grupos */}
      <div className="flex flex-col gap-0">
        {SKILLS.map((group) => (   // gi eliminado — no se usaba
          <motion.div
            key={group.category}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            variants={shouldReduce ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-start pt-0.5">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase clr-muted">
                {group.category}
              </span>
            </div>

            <motion.ul
              className="flex flex-wrap gap-2"
              variants={shouldReduce ? undefined : stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={shouldReduce ? undefined : chipVariants}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium cursor-default select-none transition-all duration-200 clr-muted hover:clr-text"
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor     = 'rgba(0,255,136,0.3)'
                    e.currentTarget.style.color           = 'var(--color-text)'
                    e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor     = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color           = 'var(--color-muted)'
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                  }}
                >
                  {ICONS[item] && (
                    <span className="clr-accent" style={{ opacity: 0.7 }}>
                      {ICONS[item]}
                    </span>
                  )}
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
      </div>

      <motion.p
        className="mt-10 text-xs"
        style={{ color: 'rgba(255,255,255,0.18)' }}
        initial={shouldReduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Siempre aprendiendo — la lista crece.
      </motion.p>
    </section>
  )
}