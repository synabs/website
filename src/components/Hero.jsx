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
        const yRatio = h.baseY / canvas.height
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
        <div className="hero__inner">
          <div className="hero__left">
            <h1 className="hero__title">
              EVOLVING<br />
              AI<br />
              AGENTS
            </h1>
            <p className="hero__lead">
              The first AI agents designed to adapt and improve over time to qualify leads, answer questions, and drive conversions.
            </p>

          </div>
          <div className="hero__right">
            <div className="hero__quote">
              <div className="hero__quote-stars" aria-label="5 tähteä">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="hero__quote-text">
                "We were honored to be early testers. The value was so good it felt almost illegal to use for free."
              </blockquote>
              <div className="hero__quote-author">
                <div className="hero__quote-avatar" aria-hidden="true">MA</div>
                <div>
                  <p className="hero__quote-name">Mirko Asell</p>
                  <p className="hero__quote-role">CEO at Somesankarit Oy</p>
                </div>
              </div>
            </div>
            <div className="hero__cta">
              <div className="hero__quote-stars" aria-hidden="true" style={{ visibility: 'hidden' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="hero__cta-text">
                Start free and cancel anytime
              </p>
              <div className="hero__cta-row">
                <a href="/join" className="hero__cta-button">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
