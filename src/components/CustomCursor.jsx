import { useCustomCursor } from '../hooks/useCustomCursor'

export default function CustomCursor() {
  const { dotRef, followerRef } = useCustomCursor()

  return (
    <>
      {/* Punto principal — sigue el mouse de inmediato */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor-dot"
      />
      {/* Follower con lag */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="custom-cursor-follower"
      />
    </>
  )
}
