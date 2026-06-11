import { useEffect, useRef, useState } from 'react'
import '../styles/Cortex.css'

const stats = [
  { number: '200+', label: 'Prompt injections' },
  { number: '75+',  label: 'Quality signals' },
]

export default function Cortex() {
  const sectionRef = useRef(null)
  const [imageVisible, setImageVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          // Image pops in
          setImageVisible(true)
          // After image has faded down to 0.65 opacity (~1.4s), show content
          setTimeout(() => setContentVisible(true), 900)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cortex" ref={sectionRef}>
      <img
        src="/cortex.avif"
        alt=""
        className={`cortex__image${imageVisible ? ' cortex__image--visible' : ''}`}
      />
      <div className="cortex__inner">
        <div className="cortex__content">

          {/* Heading — slides in from left */}
          <div className={`cortex__heading-row cortex__slide-left${contentVisible ? ' cortex__slide--visible' : ''}`}>
            <h2 className="cortex__heading">The Cortex Engine™</h2>
          </div>

          {/* Body text — slides in from right */}
          <div className="cortex__top">
            <div className={`cortex__text-cell cortex__slide-right${contentVisible ? ' cortex__slide--visible' : ''}`}>
              <p className="cortex__text">
                The brain behind every conversation. The advanced AI Cortex Engine analyzes intent,
                context, sentiment, customer behavior, and quality signals in real time. It continuously
                optimizes performance by identifying failures, benchmarking results, deploying
                improvements, and injecting targeted prompts. Every interaction contributes to the
                model's evolution, enabling our team to refine the Cortex Engine and continuously
                enhance system intelligence.
              </p>
            </div>
          </div>

          {/* Stats — slide in from left */}
          <div className="cortex__stats">
            {stats.map((s, i) => (
              <div
                className={`cortex__stat cortex__slide-left${contentVisible ? ' cortex__slide--visible' : ''}`}
                style={{ transitionDelay: contentVisible ? `${0.15 + i * 0.15}s` : '0s' }}
                key={s.label}
              >
                <span className="cortex__stat-number">{s.number}</span>
                <span className="cortex__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
