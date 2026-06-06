import '../styles/Evolve.css'

export default function Evolve() {
  return (
    <>
      <section className="evolve">
        <div className="evolve__content">
          <h2 className="evolve__title">Synbot resolves even the most complex queries</h2>
          <p className="evolve__lead">
            Your AI agent handles the hard questions and the unexpected ones. It thinks like a salesman, supports like a pro and strategies like an expert. It learns and adapts with every conversation.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
        <div className="evolve__image">
          <div className="evolve__placeholder" />
        </div>
      </section>

      <section className="evolve evolve--reverse">
        <div className="evolve__image">
          <div className="evolve__placeholder" />
        </div>
        <div className="evolve__content">
          <h2 className="evolve__title">Evolves every week, outplays competitors</h2>
          <p className="evolve__lead">
            Synbot learns from every interaction, predicts customer intent, and continuously optimizes your funnel for higher conversions.
          </p>
        </div>
      </section>

      <section className="evolve">
        <div className="evolve__content">
          <h2 className="evolve__title">Built for complexity</h2>
          <p className="evolve__lead">
            Combining customer support, sales, and strategic intelligence, Synbot handles complex conversations and turns them into results.
          </p>
        </div>
        <div className="evolve__image">
          <div className="evolve__placeholder" />
        </div>
      </section>
    </>
  )
}
