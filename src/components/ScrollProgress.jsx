import { useEffect, useRef, useState } from 'react'
import '../styles/ScrollProgress.css'

const sectionIds = [
  'navbar',
  'hero',
  'features-results',
  'cortex',
  'abilities',
  'setup-section',
  'about',
  'table',
  'pricing',
  'faq',
  'cta',
]

export default function ScrollProgress() {
  const [fillPercent, setFillPercent] = useState(0)
  const [checkpoints, setCheckpoints] = useState([]) // [{ id, pct }]
  const [filledMap, setFilledMap] = useState({})
  const [poppingId, setPoppingId] = useState(null)
  const rafRef = useRef(null)
  const popTimeoutRef = useRef(null)
  const filledRef = useRef({})
  const checkpointsRef = useRef([])

  // Lasketaan jokaisen sektion todellinen scroll-% sijainti dokumentissa.
  // Tehdään uudelleen kun ikkuna resaitaan (layout voi muuttua).
  useEffect(() => {
    function computeCheckpoints() {
      const doc = document.documentElement
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      if (scrollHeight <= 0) return

      const next = sectionIds
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return null
          const rect = el.getBoundingClientRect()
          const currentScroll = doc.scrollTop || document.body.scrollTop
          const elTop = rect.top + currentScroll
          const pct = Math.min(100, Math.max(0, (elTop / scrollHeight) * 100))
          return { id, pct }
        })
        .filter(Boolean)

      checkpointsRef.current = next
      setCheckpoints(next)
    }

    computeCheckpoints()
    window.addEventListener('resize', computeCheckpoints)
    // Layoutin asettuminen (kuvat, fontit) voi siirtää sektioita; tarkistetaan vielä kerran pian latauksen jälkeen.
    const settleTimeout = window.setTimeout(computeCheckpoints, 800)
    return () => {
      window.removeEventListener('resize', computeCheckpoints)
      clearTimeout(settleTimeout)
    }
  }, [])

  useEffect(() => {
    function update() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0
      setFillPercent(pct)

      let changed = false
      const nextFilled = { ...filledRef.current }

      checkpointsRef.current.forEach(({ id, pct: checkpointPct }) => {
        const isPast = pct >= checkpointPct - 0.3

        const wasFilled = !!filledRef.current[id]
        if (isPast && !wasFilled) {
          nextFilled[id] = true
          changed = true
          setPoppingId(id)
          if (popTimeoutRef.current) clearTimeout(popTimeoutRef.current)
          popTimeoutRef.current = window.setTimeout(() => {
            setPoppingId((cur) => (cur === id ? null : cur))
          }, 380)
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

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__frame">
        <div className="scroll-progress__rail-line" />
        <div className="scroll-progress__track">
          <div
            className="scroll-progress__fill"
            style={{ width: `${fillPercent}%` }}
          />
        </div>
        <div className="scroll-progress__points">
          {checkpoints.map(({ id, pct }) => {
            const isFilled = !!filledMap[id]
            const isPopping = poppingId === id
            return (
              <div
                key={id}
                className={[
                  'scroll-progress__point',
                  isFilled ? 'scroll-progress__point--filled' : '',
                  isPopping ? 'scroll-progress__point--pop' : '',
                ].filter(Boolean).join(' ')}
                style={{ left: `${pct}%` }}
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
