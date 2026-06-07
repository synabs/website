import '../styles/Evolve.css'
export default function EvolveSection() {
  return (
    <>
      <section className="evolve">
        <div className="evolve__content">
          <h2 className="evolve__title">Evolves every week, outplays competitors</h2>
          <p className="evolve__lead">
            AI agent learns from every interaction, predicts customer intent, and continuously optimizes your funnel for higher conversions.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
        <div className="evolve__image evolve__image--large">
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

      <section className="evolve-speed">
        <p className="evolve-stats__label">RESEARCH</p>
        <div className="evolve-speed__inner">
          <div className="evolve-speed__right">
            <h2 className="evolve-speed__title">Speed drives conversions.</h2>
            <p className="evolve-speed__text">Harvard Business Review found that companies responding within one hour are nearly 7× more likely to qualify a lead. AI agent captures and qualifies leads from your website chat, instantly, around the clock.</p>
            <div className="evolve-speed__sources">
              <p className="evolve-speed__source">Oldroyd, J.B., McElheran, K., & Elkington, D. (2011). The Short Life of Online Sales Leads. <a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=39955" target="_blank" rel="noopener">Harvard Business Review.</a></p>
              <p className="evolve-speed__source">HubSpot. <a href="https://www.hubspot.com/reduce-lead-response-time" target="_blank" rel="noopener">Lead Response Time Insights (2025).</a></p>
            </div>
          </div>
          <div className="evolve-speed__image">
            <div className="evolve__placeholder" />
          </div>
        </div>
      </section>

      <section className="evolve-costs">
        <p className="evolve-stats__label">ESTIMATED COST COMPARISON</p>
        <div className="evolve-speed__inner">
          <div className="evolve-speed__image">
            <div className="evolve__placeholder" />
          </div>
          <div className="evolve-speed__right">
            <h2 className="evolve-costs__title">Most businesses spend over 2 000€ a month on what AI agent does for 249€.</h2>
            <p className="evolve-speed__text">Customer support staff, time spent answering routine inquiries, leads lost outside office hours — it adds up fast. AI agent handles all of it, 24/7, at a fraction of the cost.</p>

          </div>
        </div>
      </section>

      <section className="evolve-stats">
        <p className="evolve-stats__label">EARLY RESULTS</p>
        <h2 className="evolve-stats__title">Early testers saw an average 23% increase in leads within 3 months.</h2>
        <p className="evolve-stats__lead">Based on data from early testers, leads increased by 13%–32% during the first three months after implementation, with results varying depending on company size, industry, and website traffic. <em>Long-term performance data is still being collected.</em></p>
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

      <section className="evolve-cards">
        <h2 className="evolve-cards__heading">Human was a prototype</h2>
        <div className="evolve-card">
          <div className="evolve-card__image">
            <img src="/complex-bg.avif" alt="" className="evolve__img" />
          </div>
          <h3 className="evolve-card__title">Built for complexity</h3>
          <p className="evolve-card__text">
            Combining customer support, sales, and strategic intelligence, AI agent handles it all.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
        <div className="evolve-card">
          <div className="evolve-card__image">
            <img src="/website.avif" alt="" className="evolve__img" />
          </div>
          <h3 className="evolve-card__title">Works on any website</h3>
          <p className="evolve-card__text">
            Compatible with WordPress, Shopify and custom websites. Works with a single line of code.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
        <div className="evolve-card">
          <div className="evolve-card__image">
            <img src="/cortex.avif" alt="" className="evolve__img" />
          </div>
          <h3 className="evolve-card__title">Powered by Cortex Engine</h3>
          <p className="evolve-card__text">
            The brain behind every conversation. Analyzes intent, context, and sentiment in real time.
          </p>
          <a href="/about" className="evolve__readmore">Read more</a>
        </div>
      </section>
    </>
  )
}
