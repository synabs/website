import { useEffect, useRef, useState } from 'react'
import '../styles/Scrollprogress.css'

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

  useEffect(() => {
    function updateFill() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0
      setFillPercent(pct)
      rafRef.current = null
    }

    function onScroll() {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(updateFill)
      }
    }

    updateFill()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setFilledMap((prev) => {
              if (prev[id]) return prev
              setPoppingId(id)
              window.setTimeout(() => {
                setPoppingId((cur) => (cur === id ? null : cur))
              }, 420)
              return { ...prev, [id]: true }
            })
          }
        })
      },
      { threshold: [0, 0.3, 1] }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__track">
        <div
          className="scroll-progress__fill"
          style={{ width: `${fillPercent}%` }}
        />
      </div>
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
                  strokeWidth="2"
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
  )
}
