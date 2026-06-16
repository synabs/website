import { useEffect, useRef, useState } from 'react'
import '../styles/ScrollProgress.css'

const sectionIds = [
  'hero',
  'features-results',
  'cortex',
  'technology',
  'abilities',
  'setup-section',
  'about',
  'table',
  'pricing',
  'faq',
  'cta',
]

function getAbsoluteTop(el) {
  let top = 0
  let node = el
  while (node) {
    top += node.offsetTop || 0
    node = node.offsetParent
  }
  return top
}

export default function ScrollProgress() {
  const [fillPercent, setFillPercent] = useState(0)
  const [checkpoints, setCheckpoints] = useState([])
  const [filledMap, setFilledMap] = useState({})
  const [poppingId, setPoppingId] = useState(null)
  // Lasketaan hero-hexin pikselipaikka jotta fill ulottuu sinne asti alusta
  const [heroOffsetPx, setHeroOffsetPx] = useState(0)

  const rafRef = useRef(null)
  const popTimeoutRef = useRef(null)
  const filledRef = useRef({})
  const checkpointsRef = useRef([])
  const rangeRef = useRef({ start: 0, end: 1 })
  const frameRef = useRef(null)

  useEffect(() => {
    function computeCheckpoints() {
      const doc = document.documentElement
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      if (scrollHeight <= 0) return

      const positions = sectionIds
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return null
          return { id, absTop: getAbsoluteTop(el) }
        })
        .filter(Boolean)

      if (positions.length === 0) return

      const startTop = positions[0].absTop
      const endTop   = positions[positions.length - 1].absTop
      const span     = endTop - startTop || 1

      rangeRef.current = { start: startTop, end: endTop }

      const next = positions.map(({ id, absTop }) => ({
        id,
        absTop,
        railPct: Math.min(100, Math.max(0, ((absTop - startTop) / span) * 100)),
      }))

      checkpointsRef.current = next
      setCheckpoints(next)

      // Laske hero-hexin pikselipaikka: gutter + 0% points-containerista
      // Points-container alkaa frame-elementin vasemmasta reunasta + gutter
      if (frameRef.current) {
        const frameW = frameRef.current.offsetWidth
        // Haetaan --gutter CSS-muuttuja
        const gutter = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue('--gutter') || '0'
        )
        // Hero on points-containerin left:0% → pikselipaikkaan = gutter
        setHeroOffsetPx(gutter)
      }
    }

    computeCheckpoints()
    window.addEventListener('resize', computeCheckpoints)
    const t = window.setTimeout(computeCheckpoints, 800)
    return () => {
      window.removeEventListener('resize', computeCheckpoints)
      clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    function update() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const { start, end } = rangeRef.current
      const span = end - start || 1

      const fill = Math.min(100, Math.max(0, ((scrollTop - start) / span) * 100))
      setFillPercent(fill)

      let changed = false
      const nextFilled = { ...filledRef.current }

      checkpointsRef.current.forEach(({ id, railPct }) => {
        const isPast    = railPct === 0 ? true : fill >= railPct - 0.3
        const wasFilled = !!filledRef.current[id]

        if (isPast && !wasFilled) {
          nextFilled[id] = true
          changed = true
          if (railPct > 0) {
            setPoppingId(id)
            if (popTimeoutRef.current) clearTimeout(popTimeoutRef.current)
            popTimeoutRef.current = window.setTimeout(() => {
              setPoppingId((cur) => (cur === id ? null : cur))
            }, 380)
          }
        } else if (!isPast && wasFilled) {
          delete nextFilled[id]
          changed = true
        }
      })

      if (changed) {
        filledRef.current = nextFilled
        setFilledMap(nextFilled)
      }

      rafRef.current = null
    }

    function onScroll() {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (popTimeoutRef.current) clearTimeout(popTimeoutRef.current)
    }
  }, [])

  // Fill: alkaa left:0, minWidth ulottuu hero-hexiin, kasvaa scrollin mukaan
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__frame" ref={frameRef}>
        <div className="scroll-progress__rail-line" />
        <div className="scroll-progress__track">
          <div
            className="scroll-progress__fill"
            style={{
              width: `${fillPercent}%`,
              minWidth: heroOffsetPx > 0 ? `${heroOffsetPx}px` : '0px',
            }}
          />
        </div>
        <div className="scroll-progress__points">
          {checkpoints.map(({ id, railPct }) => {
            const isFilled  = !!filledMap[id]
            const isPopping = poppingId === id
            return (
              <div
                key={id}
                className={[
                  'scroll-progress__point',
                  isFilled  ? 'scroll-progress__point--filled' : '',
                  isPopping ? 'scroll-progress__point--pop'    : '',
                ].filter(Boolean).join(' ')}
                style={{ left: `${railPct}%` }}
              >
                <svg
                  className="scroll-progress__hex"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    className="scroll-progress__hex-outline"
                    points="14,1 26,7.5 26,20.5 14,27 2,20.5 2,7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <polygon
                    className="scroll-progress__hex-fill"
                    points="14,1 26,7.5 26,20.5 14,27 2,20.5 2,7.5"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
