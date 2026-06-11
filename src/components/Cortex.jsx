import { useEffect, useRef, useState } from 'react'
import '../styles/Cortex.css'

const stats = [
  { number: '200+', label: 'Prompt injections' },
  { number: '75+',  label: 'Quality signals' },
]

export default function Cortex() {
  const sectionRef = useRef(null)
  const [imgOpacity, setImgOpacity] = useState(0)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowH = window.innerHeight
      const progress = Math.min(Math.max((windowH - rect.top) / (windowH + rect.height), 0), 1)

      // Image: 0→1 in first 30%, stays 1 until 65%, then fades to 0.25
      let opacity
      if (progress < 0.30) {
        opacity = progress / 0.30
      } else if (progress < 0.65) {
        opacity = 1
      } else {
        opacity = 1 - ((progress - 0.65) / 0.35) * 0.75
      }
      setImgOpacity(Math.max(opacity, 0.25))

      // Content appears at 55%
      setContentVisible(progress >= 0.55)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="cortex" ref={sectionRef}>
      <img
        src="/cortex.avif"
        alt=""
        className="cortex__image"
        style={{ opacity: imgOpacity }}
      />
      <div className="cortex__inner">

        <div className={`cortex__content${contentVisible ? ' cortex__content--visible' : ''}`}>

          {/* Heading — slides in from left */}
          <div className="cortex__heading-row cortex__slide-left">
            <h2 className="cortex__heading">The Cortex Engine™</h2>
          </div>

          {/* Body text — slides in from right */}
          <div className="cortex__top">
            <div className="cortex__text-cell cortex__slide-right">
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
            {stats.map(s => (
              <div className="cortex__stat cortex__slide-left" key={s.label}>
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
