import { useEffect, useRef } from 'react'

/**
 * Cursor personalizado con punto principal + lag suave.
 * Retorna ref para el dot y el follower.
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
      // Dot sigue inmediatamente
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onEnterLink = () => {
      dot.classList.add('cursor-expanded')
      follower.classList.add('cursor-expanded')
    }

    const onLeaveLink = () => {
      dot.classList.remove('cursor-expanded')
      follower.classList.remove('cursor-expanded')
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

    // Expandir en links, botones y cards
    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    raf.current = requestAnimationFrame(animate)
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', onMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
      cancelAnimationFrame(raf.current)
      document.body.style.cursor = ''
    }
  }, [])

  return { dotRef, followerRef }
}
