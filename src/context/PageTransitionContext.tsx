// app/context/PageTransitionContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)

const WIPER_EASE = CustomEase.create('wiperEase', '0.104,0.204,0.492,1')
const WIPER_EASE_OUT = CustomEase.create('wiperEaseOut', '0.508,0,0.896,0.796')

interface PageTransitionContextType {
  isTransitioning: boolean
  startTransition: (callback: () => void) => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext)
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider')
  }
  return context
}

function wiperPath(
  cx: number,
  cy: number,
  radius: number,
  startDeg: number,
  endDeg: number
): string {
  const toRad = (d: number) => (d * Math.PI) / 180
  const x1 = cx + radius * Math.cos(toRad(startDeg))
  const y1 = cy + radius * Math.sin(toRad(startDeg))
  const x2 = cx + radius * Math.cos(toRad(endDeg))
  const y2 = cy + radius * Math.sin(toRad(endDeg))
  const angleDiff = ((endDeg - startDeg) + 360) % 360
  const largeArc = angleDiff > 180 ? 1 : 0
  return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`
}

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startTransition = (callback: () => void) => {
    if (isTransitioning) return
    setIsTransitioning(true)

    const svgWrapper = document.getElementById('transition-svg')
    const path       = document.getElementById('transition-path')
    const logo       = document.getElementById('transition-logo')
    const boxes      = document.querySelectorAll<HTMLElement>('.logo-box')

    if (!svgWrapper || !path) {
      callback()
      setIsTransitioning(false)
      return
    }

    const W = window.innerWidth
    const H = window.innerHeight
    const radius = Math.max(W, H) * Math.sqrt(2)

    // Durasi lebih pendek di mobile agar terasa konsisten secara visual
    const wiperDuration = W < 768 ? 0.5 : 1

    svgWrapper.style.display = 'block'
    svgWrapper.style.pointerEvents = 'all'

    const svgEl = svgWrapper.querySelector('svg')
    if (svgEl) svgEl.setAttribute('viewBox', `0 0 ${W} ${H}`)

    // Reset logo
    if (logo) gsap.set(logo, { opacity: 0 })
    boxes.forEach(box => gsap.set(box, { clipPath: 'inset(100% 0 0 0)' }))

    // ── ENTER — pivot pojok kiri bawah (0, H)
    // Seperempat lingkaran menyapu dari 270° (atas) → 360°/0° (kanan)
    const enterProxy = { angle: 270 }
    path.setAttribute('d', wiperPath(0, H, radius, 270, 270.01))

    const master = gsap.timeline()

    master
      // ── PHASE 1: Enter wiper ─────────────────────────────────────────────
      .to(enterProxy, {
        angle: 360,
        duration: wiperDuration,
        ease: WIPER_EASE,
        onUpdate() {
          path.setAttribute('d', wiperPath(0, H, radius, 270, enterProxy.angle))
        },
        onComplete() {
          path.setAttribute('d', wiperPath(0, H, radius, 270, 360))
        },
      })

      // ── PHASE 2: Logo reveal ─────────────────────────────────────────────
      .call(() => { if (logo) gsap.set(logo, { opacity: 1 }) })
      .to(boxes, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.12,
      })

      // ── PHASE 3: Diam + navigasi di background ─────────────────────────
      .call(() => { callback() })
      .to({}, { duration: 0.6 })

      // ── PHASE 4: Logo exit ───────────────────────────────────────────────
      .to(boxes, {
        clipPath: 'inset(0% 0 100% 0)',
        duration: 0.4,
        ease: 'power2.in',
        stagger: 0.1,
        onComplete() {
          if (logo) gsap.set(logo, { opacity: 0 })
        },
      })

      // ── PHASE 5: Exit wiper ───────────────────────────────────────────────
      .call(() => {

        // EXIT — pivot pojok kanan bawah (W, H)
        // arc mengecil dari sisi kiri (180°) menuju atas (270°) → overlay menyingkir ke kiri atas
        const exitProxy = { angle: 180 }
        path.setAttribute('d', wiperPath(W, H, radius, 180, 270))

        gsap.to(exitProxy, {
          angle: 270,
          duration: wiperDuration,
          ease: WIPER_EASE_OUT,
          onUpdate() {
            path.setAttribute('d', wiperPath(W, H, radius, exitProxy.angle, 270))
          },
          onComplete() {
            svgWrapper.style.display = 'none'
            svgWrapper.style.pointerEvents = 'none'
            setIsTransitioning(false)
          },
        })
      })
  }

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </PageTransitionContext.Provider>
  )
}