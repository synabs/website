import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Background image */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="/public/synabs-hero.avif"
          alt=""
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title">
          MAKE<br />
          AI<br />
          REAL
        </h1>
        <p className="hero__lead">
          We transform organizations and create new business opportunities
          with elite talent trained in AI.
        </p>
        <div className="hero__buttons">
          <a href="/contact" className="btn btn--white">Let's talk</a>
          <a href="/join"    className="btn btn--outline">Join the team</a>
        </div>
      </div>
    </section>
  )
}
