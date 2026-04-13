// app/components/TransitionOverlay.tsx
'use client'

import Image from 'next/image'
import { logo } from '@/assets'

export const TransitionOverlay = () => {
  return (
    <div
      id="transition-svg"
      className="fixed inset-0 z-[9999] w-full h-full top-0 left-0"
      style={{ display: 'none', pointerEvents: 'none' }}
    >
      {/* SVG Wiper */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          id="transition-path"
          d="M 0 0 L 0 0 L 0 0 Z"
          fill="#000"
        />
      </svg>

      {/* Logo */}
      <div
        id="transition-logo"
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        <div
          className="logo-box"
          style={{ clipPath: 'inset(100% 0 0 0)' }}
        >
          <Image src={logo} alt="Logo Tri Mula Karya" className="w-20 lg:w-28 h-auto" />
        </div>
      </div>
    </div>
  )
}