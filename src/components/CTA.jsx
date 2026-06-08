import '../styles/CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__bg" aria-hidden="true">
        <img src="/cta.avif" alt="" />
      </div>
      <div className="cta__overlay">
        <div className="cta__content">
          <h2 className="cta__title">Get started with the AI agent that evolves</h2>
          <div className="cta__buttons">
            <a href="/contact" className="btn btn--white">Watch Demo</a>
            <a href="/join" className="btn btn--outline">Try it free 14 days</a>
          </div>
          <p className="cta__quote"><em>Too good to be true? Test yourself</em></p>
        </div>
      </div>
    </section>
  )
}
