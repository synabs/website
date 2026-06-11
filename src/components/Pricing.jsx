import '../styles/Pricing.css'
export default function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing__inner">
        <p className="pricing__label">Pricing</p>
        <h2 className="pricing__title">
          Get the AI agent that<br />
          <em>learns what converts</em>
        </h2>
        <div className="pricing__guarantee">
          <a href="/terms" className="pricing__guarantee-link">
            <span className="pricing__guarantee-text" style={{color: '#fff'}}>CANCEL ANYTIME</span>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#fff', flexShrink: 0}}>
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="pricing__grid">
          {/* Card 1 */}
          <div className="pricing__card">
            <div className="pricing__card-top">
              <h3 className="pricing__card-title">AI agent</h3>
              <p className="pricing__card-desc" style={{color: '#fff'}}>Compatible with any website (WordPress, Shopify, custom).</p>
            </div>
            <div className="pricing__price-features-row">
              <div>
                <div className="pricing__card-price">
                  <span className="pricing__amount">349€</span>
                  <span className="pricing__per">PER<br />MONTH</span>
                </div>
                <p className="pricing__messages">5,000 messages / month<br /><span>+€0.06 / message overage</span></p>
              </div>
              <ul className="pricing__features">
                <li>✓ Evolving AI</li>
                <li>✓ Trained on your business</li>
                <li>✓ Lead capture & qualification</li>
                <li>✓ Calendly booking</li>
                <li>✓ Monthly performance reports</li>
                <li>✓ Automatic language detection</li>
                <li>✓ Powered by Cortex Engine</li>
              </ul>
            </div>
            <div className="pricing__card-actions">
              <a href="/trial" className="btn btn--outline">Free 14 day trial</a>
              <a href="/demo" className="pricing__link">Get demo</a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="pricing__card">
            <div className="pricing__card-top">
              <h3 className="pricing__card-title">AI agent + CRM integration</h3>
              <span className="pricing__from">From</span>
              <span className="pricing__amount">349€</span>
            </div>
            <div className="pricing__price-plus">
              <span className="pricing__plus-sign">+</span>
              <span className="pricing__amount pricing__amount--secondary">CRM Integration (via <img src="https://cdn.brandfetch.io/idNMs_nMA0/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668081098963" alt="Zapier" style={{height: '0.7em', verticalAlign: 'middle', display: 'inline'}} />)</span>
              <span className="pricing__per">ADD-ON<br />PER MONTH<br /><a href="/plans" className="pricing__plans-link">See details</a></span>
            </div>
            <div className="pricing__card-actions">
              <a href="/contact" className="btn btn--outline">Let's talk</a>
              <a href="/demo" className="pricing__link">Get demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
