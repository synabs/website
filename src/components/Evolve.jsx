import '../styles/Evolve.css'
import { XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer, Area, AreaChart } from 'recharts'

const costData = [
  { month: 'Month 1', without: 2300, with: 249 },
  { month: 'Month 2', without: 2300, with: 249 },
  { month: 'Month 3', without: 2300, with: 249 },
]

const CostTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '10px 16px', fontSize: 13 }}>
        <p style={{ fontWeight: 700, marginBottom: 4 }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.fill === '#54D6FF' ? '#000' : p.fill, margin: '2px 0' }}>
            {p.name}: {p.value}€
          </p>
        ))}
        <p style={{ color: '#54D6FF', fontWeight: 700, marginTop: 4 }}>Save: {payload[0]?.value - payload[1]?.value}€</p>
      </div>
    )
  }
  return null
}

const data = [
  { week: 'Week 1',  without: 100, with: 108 },
  { week: 'Week 2',  without: 100, with: 110 },
  { week: 'Week 3',  without: 100, with: 110 },
  { week: 'Week 4',  without: 100, with: 114 },
  { week: 'Week 5',  without: 100, with: 116 },
  { week: 'Week 6',  without: 100, with: 113 },
  { week: 'Week 7',  without: 100, with: 117 },
  { week: 'Week 8',  without: 100, with: 118 },
  { week: 'Week 9',  without: 100, with: 122 },
  { week: 'Week 10', without: 100, with: 120 },
  { week: 'Week 11', without: 100, with: 121 },
  { week: 'Week 12', without: 100, with: 122 },
]

const LeadsTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const withVal = payload.find(p => p.name === 'with')?.value
    const pct = withVal ? `+${withVal - 100}%` : ''
    return (
      <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '10px 16px', fontSize: 13 }}>
        <p style={{ fontWeight: 700, marginBottom: 4 }}>{label}</p>
        <p style={{ color: '#000', margin: '2px 0' }}>With AI Agent: {pct}</p>
        <p style={{ color: '#ccc', margin: '2px 0' }}>Without: baseline</p>
      </div>
    )
  }
  return null
}

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

      <section className="evolve-stats">
        <p className="evolve-stats__label">EARLY RESULTS</p>
        <h2 className="evolve-stats__title">Early testers saw an average 16% increase in leads within 3 months.</h2>
        <div className="evolve-stats__legend">
          <span className="evolve-stats__legend-item evolve-stats__legend-item--with">With AI Agent</span>
          <span className="evolve-stats__legend-item evolve-stats__legend-item--without">Without AI Agent</span>
        </div>
        <div className="evolve-stats__chart">
          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorWith" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000" stopOpacity={0.08} />
                  <stop offset="95%" stopColor="#000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#999' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<LeadsTooltip />} />
              <ReferenceLine x="Week 4" stroke="#e5e5e5" strokeDasharray="4 4" label={{ value: 'Month 1', position: 'top', fontSize: 11, fill: '#bbb' }} />
              <ReferenceLine x="Week 8" stroke="#e5e5e5" strokeDasharray="4 4" label={{ value: 'Month 2', position: 'top', fontSize: 11, fill: '#bbb' }} />
              <ReferenceLine x="Week 12" stroke="#e5e5e5" strokeDasharray="4 4" label={{ value: 'Month 3', position: 'top', fontSize: 11, fill: '#bbb' }} />
              <Area type="monotone" dataKey="without" stroke="#ccc" strokeWidth={2} fill="none" dot={false} name="without" />
              <Area type="monotone" dataKey="with" stroke="#000" strokeWidth={2.5} fill="url(#colorWith)" dot={false} name="with" />
            </AreaChart>
          </ResponsiveContainer>
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

      <section className="evolve-costs">
        <p className="evolve-stats__label">ESTIMATED COST COMPARISON</p>
        <h2 className="evolve-costs__title">See what you could save every month.</h2>
        <p className="evolve-costs__sub">Based on average SMB costs. Estimates vary by business size and industry.</p>
        <div className="evolve-costs__chart">
          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={costData} margin={{ top: 20, right: 20, left: 60, bottom: 0 }}>
              <defs>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#54D6FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#54D6FF" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#999' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={v => `${v}€`} tick={{ fontSize: 12, fill: '#999' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CostTooltip />} />
              <Area type="monotone" dataKey="without" stroke="#000" strokeWidth={2.5} fill="none" dot={false} name="Estimated expenses" />
              <Area type="monotone" dataKey="with" stroke="#54D6FF" strokeWidth={2.5} fill="url(#savingsGradient)" dot={false} name="With AI Agent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="evolve-costs__breakdown">
          <div className="evolve-costs__item">
            <span className="evolve-costs__dot evolve-costs__dot--black" />
            <div>
              <strong>Without AI Agent ~2 300€/mo</strong>
              <p>Customer support staff ~1 500€, your own time answering inquiries ~500€, estimated lost leads outside office hours ~300€</p>
            </div>
          </div>
          <div className="evolve-costs__item">
            <span className="evolve-costs__dot evolve-costs__dot--blue" />
            <div>
              <strong>With AI Agent 249€/mo</strong>
              <p>Full coverage 24/7, no staff needed for routine inquiries, no leads missed</p>
            </div>
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
