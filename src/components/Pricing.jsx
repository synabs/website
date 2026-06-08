import '../styles/Pricing.css'

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing__inner">
        <h2 className="pricing__title">The AI agent that evolves</h2>

        <div className="pricing__guarantee">
          <span className="pricing__guarantee-check">✓</span>
          <span className="pricing__guarantee-text" style={{color: '#fff'}}>CANCEL ANYTIME</span>
          <a href="/terms" className="pricing__guarantee-link" aria-label="Learn more">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="pricing__grid">
          {/* Card 1 */}
          <div className="pricing__card">
            <div className="pricing__card-top">
              <h3 className="pricing__card-title">AI Agent with your<br />current setup</h3>
              <p className="pricing__card-desc" style={{color: '#555'}}>AI Agent works seamlessly with your existing tools, website, and workflows.</p>
            </div>
            <div className="pricing__card-price">
              <span className="pricing__amount">349€</span>
              <span className="pricing__per">PER<br />MONTH</span>
            </div>
            <div className="pricing__card-actions">
              <a href="/trial" className="btn btn--outline">Free 14 day trial</a>
              <a href="/demo" className="pricing__link">Get a demo</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pricing__card">
            <div className="pricing__card-top">
              <h3 className="pricing__card-title">AI Agent and<br />Full Suite</h3>
              <p className="pricing__card-desc" style={{color: '#555'}}>Includes AI Agent and the full platform working together.</p>
            </div>
            <div className="pricing__card-price">
              <span className="pricing__from">From</span>
              <span className="pricing__amount">349€</span>
              <span className="pricing__per">PER<br />MONTH</span>
            </div>
            <div className="pricing__price-plus">
              <span className="pricing__plus-sign">+</span>
              <span className="pricing__amount pricing__amount--secondary">Placeholder</span>
              <span className="pricing__per">ADD-ON<br /><a href="/plans" className="pricing__plans-link">SEE ALL PLANS</a></span>
            </div>
            <div className="pricing__card-actions">
              <a href="/trial" className="btn btn--outline">Free 14 day trial</a>
              <a href="/demo" className="pricing__link">Get a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
