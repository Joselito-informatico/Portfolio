import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Sobre mí',  href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Contacto', href: '#contact' },
]

export default function NavBar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('hero')
  const [menuOpen,       setMenuOpen]       = useState(false)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Cerrar menú con Escape o click fuera
  useEffect(() => {
    if (!menuOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const handleOutsideClick = (e) => {
      if (!e.target.closest('header')) setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [menuOpen])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div
        className="px-5 sm:px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          backdropFilter:   scrolled ? 'blur(14px)' : 'none',
          borderBottom:     scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-black tracking-tight select-none font-syne clr-text"
        >
          JL<span className="clr-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const id       = href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                className="relative text-sm font-medium tracking-wide transition-colors duration-200 pb-1"
                style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-muted)' }}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* CV download */}
        <a
          href="/CV_Jos%C3%A9_Le_Blanc.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 border transition-all duration-200 clr-accent hover:bg-[var(--color-accent)] hover:text-[#0a0a0a]"
          style={{ borderColor: 'var(--color-accent)' }}
        >
          CV ↓
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-200 origin-center clr-text"
              style={{
                transform:
                  i === 0 && menuOpen ? 'rotate(45deg) translateY(10px)'
                  : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-10px)'
                  : 'none',
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col px-6 pb-8 pt-4 gap-6"
            style={{
              backgroundColor: 'rgba(10,10,10,0.96)',
              backdropFilter:  'blur(14px)',
              borderBottom:    '1px solid rgba(255,255,255,0.05)',
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-base font-medium clr-text"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="/CV_Jos%C3%A9_Le_Blanc.pdf"
              download
              className="text-sm font-semibold w-fit clr-accent"
              onClick={() => setMenuOpen(false)}
            >
              Descargar CV ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}