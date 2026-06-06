import '../styles/Hero.css'

export default function Hero() {
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
          src="/synabs-demo.html"
          title="Synbot Demo"
          scrolling="no"
          style={{
            width: '380px',
            height: '580px',
            border: 'none',
            display: 'block',
          }}
        />
      </section>
    </>
  )
}
