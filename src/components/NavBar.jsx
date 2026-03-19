import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useToast } from './ToastProvider'

const NAV_LINKS = [
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos',   href: '#projects'   },
  { label: 'Sobre mí',   href: '#about'       },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Contacto',   href: '#contact'     },
]

export default function NavBar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen,      setMenuOpen]      = useState(false)
  const toast = useToast()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    const handleOut = (e) => { if (!e.target.closest('header')) setMenuOpen(false) }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('click', handleOut)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('click', handleOut)
    }
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleCVClick() {
    toast('Descargando CV...', { type: 'info', duration: 2500 })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div
        className="px-5 sm:px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter:   scrolled ? 'blur(16px)' : 'none',
          borderBottom:     scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-base tracking-tight select-none clr-text">
          JLB<span className="clr-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                className="relative text-xs font-medium tracking-wider uppercase transition-colors duration-200 pb-1"
                style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-muted)', letterSpacing: '0.06em' }}
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

        {/* CV — Desktop */}
        <a
          href="/CV_Jose_Le_Blanc.pdf"
          download="CV_Jose_Le_Blanc.pdf"
          onClick={handleCVClick}
          className="hidden md:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 border transition-all duration-200 clr-accent"
          style={{ borderColor: 'var(--color-accent)' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.color = '#0a0a0a' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)' }}
        >
          CV ↓
        </a>

        {/* Hamburger — 44×44px touch target */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className="flex flex-col gap-[5px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-5 transition-all duration-200 origin-center"
                style={{
                  backgroundColor: 'var(--color-text)',
                  transform: i === 0 && menuOpen ? 'rotate(45deg) translateY(6px)' : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col px-6 pb-8 pt-2 gap-1"
            style={{
              backgroundColor: 'rgba(10,10,10,0.97)',
              backdropFilter:  'blur(16px)',
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
                className="text-sm font-medium clr-text py-3 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.04)' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            {/* CV — Mobile */}
            <a
              href="/CV_Jose_Le_Blanc.pdf"
              download="CV_Jose_Le_Blanc.pdf"
              className="mt-4 text-sm font-semibold px-4 py-3 text-center transition-colors duration-200 clr-accent"
              style={{ border: '1px solid var(--color-accent)' }}
              onClick={() => { setMenuOpen(false); handleCVClick() }}
            >
              Descargar CV ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}