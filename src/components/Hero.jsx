import '../styles/Hero.css'

export default function Hero() {
  return (
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
          Highly advanced live AI agents that never take a break on their shift.
        </p>
        <div className="hero__buttons">
          <a href="/contact" className="btn btn--white">See it live</a>
          <a href="/join"    className="btn btn--outline">Start free trial</a>
        </div>
      </div>
    </section>
  )
}
