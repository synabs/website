import '../styles/Prototype.css'

export default function PrototypeSection() {
  return (
    <section className="evolve-cards">
      <h2 className="evolve-cards__heading">Human was a prototype</h2>
      <div className="evolve-cards__grid">
        <div className="evolve-card evolve-card--featured">
          <div className="evolve-card__image">
            <img src="/complex-bg.avif" alt="" className="evolve-card__img" />
          </div>
          <div className="evolve-card__body">
            <h3 className="evolve-card__title">Built for complexity</h3>
            <p className="evolve-card__text">
              Combining customer support, sales, and strategic intelligence, AI agent handles it all.
            </p>
          </div>
        </div>
        <div className="evolve-cards__stack">
          <div className="evolve-card evolve-card--small">
            <div className="evolve-card__image">
              <img src="/website.avif" alt="" className="evolve-card__img" />
            </div>
            <div className="evolve-card__body">
              <h3 className="evolve-card__title">Works on any website</h3>
              <p className="evolve-card__text">
                Compatible with WordPress, Shopify and custom websites. Works with a single line of code.
              </p>
            </div>
          </div>
          <div className="evolve-card evolve-card--small">
            <div className="evolve-card__image">
              <img src="/cortex.avif" alt="" className="evolve-card__img" />
            </div>
            <div className="evolve-card__body">
              <h3 className="evolve-card__title">Powered by Cortex Engine</h3>
              <p className="evolve-card__text">
                The brain behind every conversation. Analyzes intent, context, and sentiment in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
