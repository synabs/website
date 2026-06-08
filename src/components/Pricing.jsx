import '../styles/Pricing.css'
export default function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing__inner">
        <h2 className="pricing__title">Get the AI agent that evolves<br />with every customer chat</h2>
        <div className="pricing__guarantee" style={{marginLeft: '-1px'}}>
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
              <h3 className="pricing__card-title">Evolving AI agent</h3>
              {/* Muutettu teksti, väri valkoinen */}
              <p className="pricing__card-desc" style={{color: '#fff'}}>Set up in minutes on any website</p>
            </div>
            {/* Lisätty Monthly AI insights, siirretty oikealle */}
            <ul className="pricing__features">
              <li>✓ Understands your business</li>
              <li>✓ Lead capture</li>
              <li>✓ Lead qualification</li>
              <li>✓ Calendly booking</li>
              <li>✓ Monthly AI insights</li>
              <li>✓ Powered by Cortex Engine</li>
            </ul>
            <div className="pricing__card-price">
              <span className="pricing__amount">349€</span>
              <span className="pricing__per">PER<br />MONTH</span>
            </div>
            <p className="pricing__messages">Max 5,000 messages / month<br /><span>+€0.06 / message overage</span></p>
            <div className="pricing__card-actions">
              <a href="/trial" className="btn btn--outline">Free 14 day trial</a>
              <a href="/demo" className="pricing__link">Get a demo</a>
            </div>
          </div>
          {/* Card 2 — ei checklistaa, ei Cortex Engine -tekstiä */}
          <div className="pricing__card">
            <div className="pricing__card-top">
              <h3 className="pricing__card-title">Evolving AI agent</h3>
            </div>
            <div className="pricing__card-price">
              <span className="pricing__from">From</span>
              <span className="pricing__amount">349€</span>
              <span className="pricing__per">PER<br />MONTH</span>
            </div>
            <div className="pricing__price-plus">
              <span className="pricing__plus-sign">+</span>
              <span className="pricing__amount pricing__amount--secondary">xxx€ Synabs Intelligence</span>
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
