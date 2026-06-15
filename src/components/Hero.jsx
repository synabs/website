import { useEffect, useRef } from 'react'
import '../styles/Hero.css'

export default function Hero() {
  const hexCanvasRef = useRef(null)

  useEffect(() => {
    const canvas = hexCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const HEX_SIZE = 28, HEX_GAP = 4, MAX_OPACITY = 0.13
    const FADE_SPEED = 0.006, APPEAR_SPEED = 0.015
    let hexes = [], targetOpacity = 1, scrollTimer = null, animFrame = null
    let t = 0, elapsed = 0, lastTime = 0

    function hexPoint(cx, cy, size, i) {
      const a = Math.PI / 180 * (60 * i - 30)
      return [cx + size * Math.cos(a), cy + size * Math.sin(a)]
    }

    function buildHexes() {
      hexes = []
      const w = canvas.width
      const h = canvas.height
      const hx = HEX_SIZE * 2 + HEX_GAP
      const hy = Math.sqrt(3) * HEX_SIZE + HEX_GAP
      const cols = Math.ceil(w / hx) + 1
      const rows = Math.ceil(h / hy) + 1
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = HEX_SIZE + col * hx + (row % 2) * (hx / 2)
          const y = HEX_SIZE + row * hy
          hexes.push({
            x, y, baseY: y, op: 0,
            delay: row * 0.08 + col * 0.02 + Math.random() * 0.06,
            floatOffset: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    function resize() {
      const parent = canvas.parentElement
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      buildHexes()
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.016
      hexes.forEach(h => {
        const op = h.op * MAX_OPACITY
        if (op < 0.005) return
        const floatY = h.baseY + Math.sin(t * 0.25 + h.floatOffset) * 3.5
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
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    animFrame = requestAnimationFrame(ts => { lastTime = ts; loop(ts) })

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img
          src="/synabs-hero.avif"
          alt=""
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <canvas
        ref={hexCanvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div className="hero__content" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="hero__title">
          EVOLVING<br />
          AI<br />
          AGENTS
        </h1>
        <p className="hero__lead">
          The first AI agents designed to adapt and improve over time to qualify leads, answer questions, and drive conversions.
        </p>
        <div className="hero__buttons">
          <a href="/contact" className="btn btn--white">Get a demo</a>
          <a href="/join"    className="btn btn--outline">Try it free 14 days</a>
        </div>
      </div>
    </section>
  )
}
