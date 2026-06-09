import { useEffect, useRef, useState } from 'react'
import '../styles/Features.css'

const features = [
  { number: '1', title: 'Captures every customer live chat.' },
  { number: '2', title: 'Detects patterns in every conversation.' },
  { number: '3', title: 'Studies patterns and optimizes responses.' },
  { number: '4', title: 'Predicts conversation flow to maximize value.' },
]

const TERMINAL_TEXT = 'Fully autonomous, requires no user input'

function TerminalLine({ trigger }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!trigger) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(TERMINAL_TEXT.slice(0, i + 1))
      i++
      if (i >= TERMINAL_TEXT.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 38)
    return () => clearInterval(interval)
  }, [trigger])

  return (
    <div className="features__terminal">
      <span className="features__terminal-prompt">~$</span>
      <span className="features__terminal-text">{displayed}</span>
      <span className={`features__terminal-cursor${done ? ' features__terminal-cursor--blink' : ''}`}>_</span>
    </div>
  )
}

export default function Features() {
  const sectionRef = useRef(null)
  const [visibleRows, setVisibleRows] = useState([])
  const [terminalTrigger, setTerminalTrigger] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          features.forEach((_, i) => {
            setTimeout(() => {
              setVisibleRows(prev => [...prev, i])
            }, i * 600)
          })
          setTimeout(() => setTerminalTrigger(true), features.length * 600 + 200)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Arrow shape: left vertical edge + top + point + bottom
  // viewBox 0 0 260 80 — taller arrows, no overlap
  const ARROW_POINTS = "0,0 238,0 260,40 238,80 0,80"
  const STROKE_POINTS = "0,1 238,1 259,40 238,79 0,79"

  return (
    <section className="features" ref={sectionRef}>
      <div className="features__header">
        <p className="fr-label">Features</p>
        <h2 className="fr-heading">
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

                {/* Background fill */}
                <polygon
                  points={ARROW_POINTS}
                  fill="var(--color-black)"
                />

                {/* Background image clipped to arrow shape */}
                <image
                  href={`/${i + 1}.avif`}
                  x="0" y="0"
                  width="260" height="80"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#${clipId})`}
                  opacity="0.25"
                />

                {/* Border — all 4 sides including left vertical */}
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

      <TerminalLine trigger={terminalTrigger} />
    </section>
  )
}
