import { useEffect, useRef, useState } from 'react'
import '../styles/Features.css'

const features = [
  { number: '01', title: 'Captures every customer live chat.' },
  { number: '02', title: 'Detects patterns in every conversation.' },
  { number: '03', title: 'Studies patterns and optimizes responses.' },
  { number: '04', title: 'Predicts conversation flow to maximize value.' },
]

export default function Features() {
  const sectionRef = useRef(null)
  const [visibleRows, setVisibleRows] = useState([])

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

  return (
    <section className="features" ref={sectionRef}>
      <div className="features__header">
        <span className="features__eyebrow">How it works</span>
        <h2 className="features__heading">
          AI agents get smarter<br />
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
                {/* Black cover strip to hide previous arrow's right-edge stroke */}
                {i > 0 && (
                  <rect x="0" y="0" width="4" height="64" fill="var(--color-black)" />
                )}
                <polygon
                  points="0,1 238,1 259,32 238,63 0,63"
                  fill="var(--color-black)"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="1.5"
                  strokeLinejoin="miter"
                />
                {/* Cover left edge stroke so arrows look seamlessly joined */}
                {i > 0 && (
                  <rect x="0" y="2" width="2" height="60" fill="var(--color-black)" />
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
    </section>
  )
}
