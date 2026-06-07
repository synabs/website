import '../styles/Evolve.css'

export default function Evolve() {
  return (
    <>
      <section className="evolve">
        <div className="evolve__content">
          <h2 className="evolve__title">Evolves every week, outplays competitors</h2>
          <p className="evolve__lead">
            AI agent learns from every interaction, predicts customer intent, and continuously optimizes your funnel for higher conversions.
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
            Combining customer support, sales, and strategic intelligence, AI agent handles it all.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>

        <div className="evolve-card">
          <div className="evolve-card__image">
            <img src="/website.avif" alt="" className="evolve__img" />
          </div>
          <h3 className="evolve-card__title">Works on any website</h3>
          <p className="evolve-card__text">
            Compatible with WordPress, Shopify and custom websites. Works with a single line of code.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>

        <div className="evolve-card">
          <div className="evolve-card__image">
            <img src="/cortex.avif" alt="" className="evolve__img" />
          </div>
          <h3 className="evolve-card__title">Powered by Cortex Engine</h3>
          <p className="evolve-card__text">
            The brain behind every conversation. Analyzes intent, context, and sentiment in real time.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
      </section>
    </>
  )
}
