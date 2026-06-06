import '../styles/Evolve.css'

export default function Evolve() {
  return (
    <>
      <section className="evolve evolve--reversed">
          <h2 className="evolve__title">Evolves every week, outplays competitors</h2>
          <p className="evolve__lead">
            Synbot learns from every interaction, predicts customer intent, and continuously optimizes your funnel for higher conversions.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
        <div className="evolve__image">
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

      <section className="evolve">
        <div className="evolve__image">
          <img src="/complex-bg.avif" alt="" className="evolve__img" />
        </div>
        <div className="evolve__content">
          <h2 className="evolve__title">Built for complexity</h2>
          <p className="evolve__lead">
            Combining customer support, sales, and strategic intelligence, Synbot handles complex conversations and turns them into results.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
      </section>
    </>
  )
}
