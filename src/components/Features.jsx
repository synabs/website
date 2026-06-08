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
          // trigger terminal after all arrows have animated in
          setTimeout(() => setTerminalTrigger(true), features.length * 600 + 200)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

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

          return (
            <div
              className={`features__arrow-wrap features__arrow-wrap--${i + 1}${isVisible ? ' features__arrow-wrap--visible' : ''}`}
              key={f.number}
            >
              <svg
                className="features__arrow-svg"
                viewBox="0 0 260 64"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 238,0 260,32 238,64 0,64"
                  fill="var(--color-black)"
                  stroke="none"
                />
                <polyline
                  points="0,1 238,1 259,32 238,63 0,63"
                  fill="none"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="1.5"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                />
                {i === 0 && (
                  <line x1="0" y1="1" x2="0" y2="63"
                    stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
                )}
              </svg>
              <div className="features__arrow-content">
                <div className="features__arrow-text">
                  <h3 className="features__arrow-title">{f.title}</h3>
                </div>
                <span className="features__arrow-number">{f.number}</span>
              </div>
            </div>
          )
        })}
      </div>

      <TerminalLine trigger={terminalTrigger} />
    </section>
  )
}
