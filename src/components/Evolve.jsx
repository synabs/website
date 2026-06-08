import { useState } from 'react'
import '../styles/Evolve.css'

function SourcesDropdown() {
  const [open, setOpen] = useState(false)
  return (
    <div className="evolve-speed__sources-wrapper">
      <button className="evolve__readmore evolve__readmore--sources" onClick={() => setOpen(o => !o)}>
        Sources
      </button>
      {open && (
        <div className="evolve-speed__sources-dropdown">
          <p className="evolve-speed__source">
            Oldroyd, J.B., McElheran, K., &amp; Elkington, D. (2011).<br />
            The Short Life of Online Sales Leads. <a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=39955" target="_blank" rel="noopener">Harvard Business Review.</a>
          </p>
          <p className="evolve-speed__source">
            HubSpot. <a href="https://www.hubspot.com/reduce-lead-response-time" target="_blank" rel="noopener">Lead Response Time Insights (2025).</a>
          </p>
        </div>
      )}
    </div>
  )
}

export default function EvolveSection() {
  return (
    <>
      {/* Hero feature — unchanged */}
      <section className="evolve">
        <div className="evolve__content">
          <p className="evolve-stats__label">NEXT GENERATION</p>
          <h2 className="evolve__title">Evolves every week, outplays competitors</h2>
          <p className="evolve__lead">
            AI agent learns from every interaction, predicts customer intent, and continuously optimizes your funnel for higher conversions.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
        <div className="evolve__image evolve__image--large">
          <img src="/evo-bg.avif" alt="" className="evolve__img" />
        </div>
      </section>

      {/* Speed — full-bleed image, text overlay bottom-left */}
      <section className="evolve-speed">
        <div className="evolve-speed__fullbleed">
          <img src="/loop.avif" alt="" className="evolve-speed__bg" />
          <div className="evolve-speed__overlay">
            <p className="evolve-stats__label evolve-stats__label--light">RESEARCH</p>
            <h2 className="evolve-speed__title">Speed drives conversions</h2>
            <p className="evolve-speed__text" style={{color: '#fff'}}>Harvard Business Review found that companies responding within one hour are nearly 7x more likely to qualify a lead. AI agent captures and qualifies leads from your website chat, instantly, around the clock.</p>
            <SourcesDropdown />
          </div>
        </div>
      </section>

      {/* Costs — image bleeds to edge right, text left with strong vertical rhythm */}
      <section className="evolve-costs">
        <p className="evolve-stats__label">ESTIMATED COST COMPARISON</p>
        <div className="evolve-costs__split">
          <div className="evolve-costs__left">
            <h2 className="evolve-costs__title">Most businesses spend over <br />2 000€ a month on what <br />AI agent does for 349€</h2>
            <p className="evolve-speed__text" style={{color: '#000'}}>Customer support staff, time spent answering routine inquiries, and leads lost outside office hours all add up fast. AI agent handles all of it, around the clock and at a fraction of the cost.</p>
            <a href="/contact" className="evolve__cta">Cut your costs</a>
          </div>
          <div className="evolve-costs__right">
            <img src="/money.avif" alt="" className="evolve-costs__img" />
          </div>
        </div>
      </section>

      {/* Stats — image as section background, numbers row below */}
      <section className="evolve-stats">
        <div className="evolve-stats__hero">
          <img src="/arrow.avif" alt="" className="evolve-stats__bg" />
          <div className="evolve-stats__hero-text">
            <p className="evolve-stats__label evolve-stats__label--light">EARLY RESULTS</p>
            <h2 className="evolve-stats__title">Early testers saw an average 23% increase in leads within 3 months</h2>
            <p className="evolve-stats__lead" style={{color: '#fff'}}>Based on data from early testers, leads increased by 13%–32% during the first three months after implementation, with results varying depending on company size, industry, and website traffic.</p>
            <a href="https://website-liart-nu-v6q749arlh.vercel.app/#" className="evolve__readmore evolve__readmore--light">Read more</a>
          </div>
        </div>
        <div className="evolve-stats__numbers">
          <div className="evolve-stats__number">
            <span className="evolve-stats__value">&lt;2s</span>
            <span className="evolve-stats__desc">Average response time</span>
          </div>
          <div className="evolve-stats__number">
            <span className="evolve-stats__value">96%</span>
            <span className="evolve-stats__desc">Of conversations handled</span>
          </div>
          <div className="evolve-stats__number">
            <span className="evolve-stats__value">+16%</span>
            <span className="evolve-stats__desc">Increase in qualified leads</span>
          </div>
          <div className="evolve-stats__number">
            <span className="evolve-stats__value">0</span>
            <span className="evolve-stats__desc">Leads missed</span>
          </div>
        </div>
      </section>

      {/* Cards — asymmetric editorial grid */}
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
              <a href="/about" className="evolve__readmore">Read more</a>
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
                <a href="/about" className="evolve__readmore">Read more</a>
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
                <a href="/about" className="evolve__readmore">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
