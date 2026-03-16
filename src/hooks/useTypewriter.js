import { useState, useEffect } from 'react'

/**
 * Cicla por un array de palabras con efecto typewriter.
 * @param {string[]} words - Palabras a mostrar en ciclo
 * @param {object} options
 * @param {number} options.speed       - ms entre cada carácter al escribir (default 80)
 * @param {number} options.deleteSpeed - ms entre cada carácter al borrar (default 45)
 * @param {number} options.pause       - ms de pausa cuando la palabra está completa (default 2000)
 */
export function useTypewriter(words, { speed = 80, deleteSpeed = 45, pause = 2000 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const isComplete = !isDeleting && displayed === current
    const isEmpty = isDeleting && displayed === ''

    if (isComplete) {
      const t = setTimeout(() => setIsDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (isEmpty) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const delta = isDeleting ? deleteSpeed : speed
    const t = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      )
    }, delta)

    return () => clearTimeout(t)
  }, [displayed, isDeleting, wordIndex, words, speed, deleteSpeed, pause])

  return displayed
}
