import { useEffect, useRef, useState } from 'react'
import '../styles/Features.css'

const features = [
  { number: '01', title: 'Captures Every Customer Interaction' },
  { number: '02', title: 'Detects Patterns in Successful Conversations' },
  { number: '03', title: 'Optimizes Responses Automatically' },
  { number: '04', title: 'Generates More Qualified Leads Over Time' },
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
          Agents that get<br />
          <em>smarter every day</em>
        </h2>
      </div>

      <div className="features__arrows">
        {features.map((f, i) => {
          const isLast = i === features.length - 1
          const isVisible = visibleRows.includes(i)

          return (
            <div
              className={`features__arrow-wrap${isVisible ? ' features__arrow-wrap--visible' : ''}`}
              key={f.number}
            >
              <svg
                className="features__arrow-svg"
                viewBox="0 0 1000 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <polygon
                  points={
                    isLast
                      ? '0,1 999,1 999,99 0,99'
                      : '0,1 940,1 990,50 940,99 0,99'
                  }
                  fill="transparent"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.5"
                  strokeLinejoin="miter"
                />
              </svg>
              <div className="features__arrow-content">
                <span className="features__arrow-number">{f.number}</span>
                <h3 className="features__arrow-title">{f.title}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
