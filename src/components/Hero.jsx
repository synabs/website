import { useEffect, useRef } from 'react'
import '../styles/Hero.css'

export default function Hero() {
  const iframeRef = useRef(null)

  useEffect(() => {
    let blobUrl = null

    fetch('/api/demo')
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized')
        return res.text()
      })
      .then((html) => {
        const blob = new Blob([html], { type: 'text/html' })
        blobUrl = URL.createObjectURL(blob)
        if (iframeRef.current) {
          iframeRef.current.src = blobUrl
        }
      })
      .catch((err) => console.error('Demo load failed:', err))

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl)
    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <img
            src="/synabs-hero.avif"
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            EVOLVING<br />
            AI<br />
            AGENTS
          </h1>
          <p className="hero__lead">
            We transform organizations and boost leads with next generation self-learning AI agents.
          </p>
          <div className="hero__buttons">
            <a href="/contact" className="btn btn--white">See it live</a>
            <a href="/join"    className="btn btn--outline">Start free trial</a>
          </div>
        </div>
      </section>

      <section className="hero-video">
        <iframe
          ref={iframeRef}
          title="Synbot Demo"
          scrolling="no"
          style={{
            width: '320px',
            height: '540px',
            border: 'none',
            display: 'block',
            borderRadius: '8px',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.15)',
            transform: 'scale(1.28)',
            transformOrigin: 'center center',
          }}
        />
      </section>
    </>
  )
}
