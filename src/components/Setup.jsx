import '../styles/Setup.css'

export default function Setup() {
  return (
    <section className="setup">
      <div className="setup__fullbleed">
        <img src="/setup.avif" alt="" className="setup__bg" />
        <div className="setup__overlay">
          <p className="evolve-stats__label evolve-stats__label--light">SETUP</p>
          <h2 className="setup__title">2 minute install</h2>
          <p className="setup__text">
            One line of code. Add it yourself or we'll do it together. Your AI agent goes live instantly.
          </p>
          <a href="/join" className="setup__cta">Try free 14 days</a>
        </div>
      </div>
    </section>
  )
}
