import { createContext, useCallback, useContext, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, X, Info, AlertTriangle } from 'lucide-react'

// ── Context ───────────────────────────────────────────────────────────
const ToastContext = createContext(null)

let _id = 0

// ── Iconos por tipo ───────────────────────────────────────────────────
const ICONS = {
  success: <Check       size={13} />,
  error:   <X          size={13} />,
  info:    <Info        size={13} />,
  warning: <AlertTriangle size={13} />,
}

const ACCENT = {
  success: 'rgba(0,255,136,0.9)',
  error:   'rgba(255,80,80,0.9)',
  info:    'rgba(100,180,255,0.9)',
  warning: 'rgba(255,200,60,0.9)',
}

const BORDER = {
  success: 'rgba(0,255,136,0.2)',
  error:   'rgba(255,80,80,0.2)',
  info:    'rgba(100,180,255,0.2)',
  warning: 'rgba(255,200,60,0.2)',
}

// ── Toast individual ──────────────────────────────────────────────────
function Toast({ id, message, type = 'success', onDismiss }) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      layout
      key={id}
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
      animate={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0,  scale: 1    }}
      exit={shouldReduce    ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.96 }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-center gap-3 px-4 py-3 min-w-[220px] max-w-[340px] w-full"
      style={{
        backgroundColor: 'var(--color-surface)',
        border:          `1px solid ${BORDER[type]}`,
        boxShadow:       '0 8px 32px rgba(0,0,0,0.4)',
      }}
      role="alert"
      aria-live="polite"
    >
      {/* Icono */}
      <span
        className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full"
        style={{
          backgroundColor: `${ACCENT[type].replace('0.9', '0.12')}`,
          color:            ACCENT[type],
        }}
      >
        {ICONS[type]}
      </span>

      {/* Mensaje */}
      <p className="text-xs font-medium leading-snug flex-1 clr-text">
        {message}
      </p>

      {/* Botón cerrar */}
      <button
        onClick={() => onDismiss(id)}
        aria-label="Cerrar notificación"
        className="shrink-0 clr-muted transition-colors duration-150 hover-text"
      >
        <X size={12} />
      </button>
    </motion.div>
  )
}

// ── Provider ──────────────────────────────────────────────────────────
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  /**
   * @param {string} message
   * @param {{ type?: 'success'|'error'|'info'|'warning', duration?: number }} options
   */
  const toast = useCallback((message, { type = 'success', duration = 3000 } = {}) => {
    const id = ++_id
    setToasts((prev) => [...prev, { id, message, type }])
    if (duration > 0) {
      setTimeout(() => dismiss(id), duration)
    }
    return id
  }, [dismiss])

  return (
    <ToastContext.Provider value={toast}>
      {children}

      {/* Portal de toasts — esquina inferior derecha en desktop, inferior en mobile */}
      <div
        aria-label="Notificaciones"
        className="fixed bottom-6 right-4 sm:right-6 z-[9999] flex flex-col gap-2 items-end pointer-events-none"
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <div key={t.id} className="pointer-events-auto">
              <Toast {...t} onDismiss={dismiss} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────────────
export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast debe usarse dentro de <ToastProvider>')
  return ctx
}
