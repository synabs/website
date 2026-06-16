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

      const viewportCenter = window.innerHeight / 2
      let changed = false
      const nextFilled = { ...filledRef.current }

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2

        // Täyttyy kun sektion keskikohta on ohittanut (yli) viewportin keskikohdan
        // ja sektio on edelleen ainakin osittain näkyvissä tai ohitettu kokonaan.
        const isPast = sectionCenter <= viewportCenter

        const wasFilled = !!filledRef.current[id]
        if (isPast && !wasFilled) {
          nextFilled[id] = true
          changed = true
          setPoppingId(id)
          if (popTimeoutRef.current) clearTimeout(popTimeoutRef.current)
          popTimeoutRef.current = window.setTimeout(() => {
            setPoppingId((cur) => (cur === id ? null : cur))
          }, 420)
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
        <div className="scroll-progress__rail-line scroll-progress__rail-line--top" />
        <div className="scroll-progress__track">
          <div
            className="scroll-progress__fill"
            style={{ width: `${fillPercent}%` }}
          />
        </div>
        <div className="scroll-progress__rail-line scroll-progress__rail-line--bottom" />
        <div className="scroll-progress__points">
          {sectionIds.map((id) => {
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
              >
                <svg
                  className="scroll-progress__hex"
                  viewBox="0 0 28 28"
                  fill="none"
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
