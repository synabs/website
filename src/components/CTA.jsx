import { useEffect, useRef } from 'react'
import '../styles/CTA.css'

export default function CTA() {
  const glitchRef = useRef(null)
  const hexCanvasRef = useRef(null)

  useEffect(() => {
    const letters = ['\u00A0', 'R', '\u00A0', 'R', '\u00A0', '\u00A0', 'R']
    let timeout

    const glitch = () => {
      const el = glitchRef.current
      if (!el) return
      const random = letters[Math.floor(Math.random() * letters.length)]
      el.textContent = random
      const next = Math.random() * 2000 + 400
      timeout = setTimeout(glitch, next)
    }

    timeout = setTimeout(glitch, 1200)
    return () => clearTimeout(timeout)
  }, [])

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
            fadeStart: 0.55 + Math.random() * 0.3,
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
        // Reversed vs Hero: fade out toward the TOP instead of the bottom.
        const yRatio = 1 - h.baseY / canvas.height
        const edgeFade = yRatio < h.fadeStart ? 1 : Math.max(0, 1 - (yRatio - h.fadeStart) / (1 - h.fadeStart))
        const op = h.op * MAX_OPACITY * edgeFade
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
    <section className="cta" id="cta">
      <div className="cta__bg" aria-hidden="true">
        <img src="/cta.avif" alt="" />
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
      <div className="cta__overlay" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta__content">
          <h2 className="cta__title">
            START THE<br />
            <span className="cta__glitch" ref={glitchRef}>R</span>EVOLUTION
          </h2>
          <p className="cta__quote">Stop managing chatbots, start growing with AI.</p>
          <div className="cta__buttons">
            <a href="/contact" className="btn btn--white">Get a demo</a>
            <a href="/join" className="btn btn--outline">Try it free 14 days</a>
          </div>
        </div>
      </div>
    </section>
  )
}
