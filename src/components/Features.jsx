import { useEffect, useRef, useState } from 'react'
import '../styles/Features.css'

const features = [
  { number: '1', title: 'Captures every customer live chat.' },
  { number: '2', title: 'Detects patterns in every conversation.' },
  { number: '3', title: 'Studies patterns and optimizes responses.' },
  { number: '4', title: 'Predicts conversation flow to maximize value.' },
]

const sources = [
  {
    citation: 'Oldroyd, J.B., McElheran, K., & Elkington, D. (2011). The Short Life of Online Sales Leads.',
    label: 'Harvard Business Review',
    url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=39955',
  },
  {
    citation: 'Lead Response Time Insights (2025).',
    label: 'HubSpot',
    url: 'https://www.hubspot.com/reduce-lead-response-time',
  },
]

function SourcesModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="sources-overlay" onClick={onClose}>
      <div className="sources-box" onClick={e => e.stopPropagation()}>
        <div className="sources-box__header">
          <span className="sources-box__title">Sources</span>
          <button className="sources-box__close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <ol className="sources-box__list">
          {sources.map((s, i) => (
            <li key={i} className="sources-box__item">
              <span className="sources-box__citation">{s.citation}</span>{' '}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="sources-box__link">
                {s.label}
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default function Features() {
  const sectionRef = useRef(null)
  const [visibleRows, setVisibleRows] = useState([])
  const [showSources, setShowSources] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          features.forEach((_, i) => {
            setTimeout(() => {
              setVisibleRows(prev => [...prev, i])
            }, i * 600)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const ARROW_POINTS = "0,0 238,0 260,40 238,80 0,80"

  return (
    <section className="features" ref={sectionRef}>
      <div className="features__header">
        <h2 className="features__heading">
          Agents get smarter<br />
          <em>with every conversation</em>
        </h2>
      </div>

      <div className="features__arrows">
        {features.map((f, i) => {
          const isVisible = visibleRows.includes(i)
          const clipId = `arrow-clip-${i}`
          return (
            <div
              className={`features__arrow-wrap features__arrow-wrap--${i + 1}${isVisible ? ' features__arrow-wrap--visible' : ''}`}
              key={f.number}
            >
              <svg
                className="features__arrow-svg"
                viewBox="0 0 260 80"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <clipPath id={clipId}>
                    <polygon points={ARROW_POINTS} />
                  </clipPath>
                </defs>

                <polygon
                  points={ARROW_POINTS}
                  fill="var(--color-black)"
                />

                <image
                  href={`/${i + 1}.avif`}
                  x="0" y="0"
                  width="260" height="80"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#${clipId})`}
                  opacity="0.15"
                />

                <polygon
                  points={ARROW_POINTS}
                  fill="none"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="1.5"
                  strokeLinejoin="miter"
                />
              </svg>

              <div className="features__arrow-content">
                <span className="features__arrow-number">{f.number}</span>
                <div className="features__arrow-text">
                  <h3 className="features__arrow-title">{f.title}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="features__footer">
        <button className="features__sources-btn" onClick={() => setShowSources(true)}>
          Harvard Business Review
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {showSources && <SourcesModal onClose={() => setShowSources(false)} />}
    </section>
  )
}
