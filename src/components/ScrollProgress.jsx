import { useEffect, useRef, useState } from 'react'
import '../styles/ScrollProgress.css'

const POINT_COUNT = 11

export default function ScrollProgress() {
  const [fillPercent, setFillPercent] = useState(0)
  const [filledMap, setFilledMap] = useState({})
  const [poppingId, setPoppingId] = useState(null)
  const rafRef = useRef(null)
  const popTimeoutRef = useRef(null)
  const filledRef = useRef({})

  useEffect(() => {
    function update() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0
      setFillPercent(pct)

      let changed = false
      const nextFilled = { ...filledRef.current }

      for (let i = 0; i < POINT_COUNT; i++) {
        // Checkpointin sijainti palkilla, sama skaala kuin fillPercent (0–100)
        const checkpointPct = (i / (POINT_COUNT - 1)) * 100
        const isPast = pct >= checkpointPct - 0.5 // pieni toleranssi 100%:lle

        const wasFilled = !!filledRef.current[i]
        if (isPast && !wasFilled) {
          nextFilled[i] = true
          changed = true
          setPoppingId(i)
          if (popTimeoutRef.current) clearTimeout(popTimeoutRef.current)
          popTimeoutRef.current = window.setTimeout(() => {
            setPoppingId((cur) => (cur === i ? null : cur))
          }, 380)
        } else if (!isPast && wasFilled) {
          delete nextFilled[i]
          changed = true
        }
      }

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

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__frame">
        <div className="scroll-progress__rail-line scroll-progress__rail-line--top" />
        <div className="scroll-progress__track">
          <div
            className="scroll-progress__fill"
            style={{ width: `${fillPercent}%` }}
          />
        </div>
        <div className="scroll-progress__rail-line scroll-progress__rail-line--bottom" />
        <div className="scroll-progress__points">
          {Array.from({ length: POINT_COUNT }, (_, i) => i).map((i) => {
            const isFilled = !!filledMap[i]
            const isPopping = poppingId === i
            return (
              <div
                key={i}
                className={[
                  'scroll-progress__point',
                  isFilled ? 'scroll-progress__point--filled' : '',
                  isPopping ? 'scroll-progress__point--pop' : '',
                ].filter(Boolean).join(' ')}
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
