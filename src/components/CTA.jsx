import { useEffect, useRef } from 'react'
import '../styles/CTA.css'

export default function CTA() {
  const glitchRef = useRef(null)

  useEffect(() => {
    const letters = ['\u00A0', 'R', '\u00A0', 'R', '\u00A0', '\u00A0', 'R']
    let timeout

    const glitch = () => {
      const el = glitchRef.current
      if (!el) return
      const random = letters[Math.floor(Math.random() * letters.length)]
      el.textContent = random
      const next = Math.random() * 2000 + 400
      timeout = setTimeout(glitch, next)
    }

    timeout = setTimeout(glitch, 1200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="cta">
      <div className="cta__bg" aria-hidden="true">
        <img src="/cta.avif" alt="" />
      </div>
      <div className="cta__overlay">
        <div className="cta__content">
          <h2 className="cta__title">
            START THE<br />
            <span className="cta__glitch" ref={glitchRef}>R</span>EVOLUTION
          </h2>
          <p className="cta__quote">Stop managing chatbots, start growing with AI.</p>
          <div className="cta__buttons">
            <a href="/contact" className="btn btn--white">Get a demo</a>
            <a href="/join" className="btn btn--outline">Try it free 14 days</a>
          </div>
        </div>
      </div>
    </section>
  )
}
