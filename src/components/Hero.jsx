import '../styles/Hero.css'

export default function Hero() {
  return (
    <>
      <section className="hero">
        {/* Background image */}
        <div className="hero__bg" aria-hidden="true">
          <img
            src="/synabs-hero.avif"
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Content */}
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

      {/* Stats + video section */}
      <section className="hero-stat">
        <div className="hero-stat__inner">
          {/* Left: text */}
          <div className="hero-stat__text">
            <h2 className="hero-stat__heading">
              88% of Finns have used AI in their daily lives
            </h2>
            <p className="hero-stat__body">
              AI is changing how people buy.
            </p>
            <p className="hero-stat__body">
              More customers now use AI to discover, compare, and evaluate
              products before making decisions.
            </p>
            <a href="/insights" className="hero-stat__link">
              <span className="hero-stat__link-icon">→</span>
              READ MORE
            </a>
          </div>

          {/* Right: video */}
          <div className="hero-stat__media">
            <video
              src="/synbot.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>
    </>
  )
}
