import { useEffect, useRef } from 'react'
import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Abilities from './components/Abilities'
import FeaturesResults from './components/FeaturesResults'
import SetupSection from './components/SetupSection'
import Demo from './components/Demo'
import Setup from './components/Setup'
import Evolve from './components/Evolve'
import Prototype from './components/Prototype'
import About from './components/About'
import Cortex from './components/Cortex'
import Table from './components/Table'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

export default function App() {
  const hexCanvasRef = useRef(null)

  useEffect(() => {
    const canvas = hexCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const HEX_SIZE = 28, HEX_GAP = 4, MAX_OPACITY = 0.18
    const FADE_SPEED = 0.012, APPEAR_SPEED = 0.025
    let hexes = [], targetOpacity = 0, scrollTimer = null, animFrame = null
    let t = 0, elapsed = 0, lastTime = 0

    function hexPoint(cx, cy, size, i) {
      const a = Math.PI / 180 * (60 * i - 30)
      return [cx + size * Math.cos(a), cy + size * Math.sin(a)]
    }

    function buildHexes() {
      hexes = []
      const w = canvas.width
      const hx = HEX_SIZE * 2 + HEX_GAP
      const hy = Math.sqrt(3) * HEX_SIZE + HEX_GAP
      const cols = Math.ceil(w / hx) + 1
      const rows = 6
      const startX = HEX_SIZE
      const startY = HEX_SIZE + 4
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = startX + col * hx + (row % 2) * (hx / 2)
          const y = startY + row * hy
          hexes.push({
            x, y, baseY: y, op: 0,
            delay: row * 0.12 + col * 0.03 + Math.random() * 0.08,
            floatOffset: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.16
      buildHexes()
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.016
      hexes.forEach(h => {
        const op = h.op * MAX_OPACITY
        if (op < 0.005) return
        const floatY = h.baseY + Math.sin(t * 0.8 + h.floatOffset) * 3.5
        ctx.save()
        ctx.globalAlpha = op
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1
        ctx.beginPath()
        const pts = Array.from({ length: 6 }, (_, i) => hexPoint(h.x, floatY, HEX_SIZE, i))
        ctx.moveTo(pts[0][0], pts[0][1])
        pts.slice(1).forEach(p => ctx.lineTo(p[0], p[1]))
        ctx.closePath()
        ctx.stroke()
        ctx.restore()
      })
    }

    function loop(ts) {
      const dt = (ts - lastTime) / 1000
      lastTime = ts
      if (targetOpacity > 0) elapsed += dt; else elapsed = 0
      hexes.forEach(h => {
        if (elapsed < h.delay) return
        h.op = targetOpacity > 0
          ? Math.min(1, h.op + APPEAR_SPEED)
          : Math.max(0, h.op - FADE_SPEED)
      })
      draw()
      animFrame = requestAnimationFrame(loop)
    }

    function onScroll() {
      targetOpacity = 1
      elapsed = 0
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => { targetOpacity = 0 }, 1500)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    animFrame = requestAnimationFrame(ts => { lastTime = ts; loop(ts) })

    return () => {
      cancelAnimationFrame(animFrame)
      clearTimeout(scrollTimer)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <canvas
        ref={hexCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          pointerEvents: 'none',
          zIndex: 40,
        }}
      />
      <Navbar />
      <Hero />
      <FeaturesResults />
      <Cortex />
      <Abilities />
      <SetupSection />
      <About />
      <Table />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
