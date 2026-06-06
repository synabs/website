import '../styles/Evolve.css'

export default function Evolve() {
  return (
    <>
      <section className="evolve">
        <div className="evolve__content">
          <h2 className="evolve__title">Evolves every week, outplays competitors</h2>
          <p className="evolve__lead">
            Synbot learns from every interaction, predicts customer intent, and continuously optimizes your funnel for higher conversions.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
        <div className="evolve__image evolve__image--large">
          <video
            src="/evo-vid.mp4"
            className="evolve__img"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      <section className="evolve-cards">
        <h2 className="evolve-cards__heading">Human was a prototype</h2>
        <div className="evolve-card">
          <div className="evolve-card__image">
            <img src="/complex-bg.avif" alt="" className="evolve__img" />
          </div>
          <h3 className="evolve-card__title">Built for complexity</h3>
          <p className="evolve-card__text">
            Combining customer support, sales, and strategic intelligence, Synbot handles complex conversations and turns them into results.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>

        <div className="evolve-card">
          <div className="evolve-card__image">
            <div className="evolve__placeholder" />
          </div>
          <h3 className="evolve-card__title">Works any website</h3>
          <p className="evolve-card__text">
            Placeholder text for this feature goes here. Synbot integrates seamlessly into any stack.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>

        <div className="evolve-card">
          <div className="evolve-card__image">
            <div className="evolve__placeholder" />
          </div>
          <h3 className="evolve-card__title">Cortex Engine</h3>
          <p className="evolve-card__text">
            Placeholder text for this feature goes here. The Cortex Engine powers every decision.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
      </section>
    </>
  )
}
