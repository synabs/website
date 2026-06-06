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
          <h2 className="evolve__title">Built for complexity</h2>
          <p className="evolve__lead">
            Combining customer support, sales, and strategic intelligence, Synbot handles complex conversations and turns them into results.
          </p>
        </div>
      </section>
    </>
  )
}
