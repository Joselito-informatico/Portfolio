import { useEffect, useRef } from 'react'

/**
 * Cursor personalizado con punto principal + lag suave.
 * Usa event delegation en document para capturar elementos
 * renderizados dinámicamente por Framer Motion.
 */
export function useCustomCursor() {
  const dotRef      = useRef(null)
  const followerRef = useRef(null)
  const pos         = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })
  const raf         = useRef(null)

  useEffect(() => {
    // No activar en touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot      = dotRef.current
    const follower = followerRef.current
    if (!dot || !follower) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    // Event delegation — captura hover en cualquier elemento interactivo
    // independientemente de cuándo fue renderizado al DOM
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        dot.classList.add('cursor-expanded')
        follower.classList.add('cursor-expanded')
      }
    }

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        dot.classList.remove('cursor-expanded')
        follower.classList.remove('cursor-expanded')
      }
    }

    // Follower con lag via RAF
    const animate = () => {
      const ease = 0.1
      followerPos.current.x += (pos.current.x - followerPos.current.x) * ease
      followerPos.current.y += (pos.current.y - followerPos.current.y) * ease
      follower.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`
      raf.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    raf.current = requestAnimationFrame(animate)
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(raf.current)
      document.body.style.cursor = ''
    }
  }, [])

  return { dotRef, followerRef }
}