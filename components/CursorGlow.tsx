'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.left = `${e.clientX}px`
      ref.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[1] w-[300px] h-[300px] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0.03) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 80ms linear, top 80ms linear',
        willChange: 'left, top',
      }}
    />
  )
}
