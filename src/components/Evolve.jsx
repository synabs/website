import '../styles/Evolve.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer, Area, AreaChart } from 'recharts'

const data = [
  { week: 'Week 1',  without: 100, with: 101 },
  { week: 'Week 2',  without: 101, with: 102 },
  { week: 'Week 3',  without: 100, with: 103 },
  { week: 'Week 4',  without: 102, with: 104 },
  { week: 'Week 5',  without: 101, with: 105 },
  { week: 'Week 6',  without: 103, with: 106 },
  { week: 'Week 7',  without: 102, with: 107 },
  { week: 'Week 8',  without: 103, with: 108 },
  { week: 'Week 9',  without: 104, with: 110 },
  { week: 'Week 10', without: 103, with: 112 },
  { week: 'Week 11', without: 104, with: 115 },
  { week: 'Week 12', without: 105, with: 118 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '10px 16px', fontSize: 13 }}>
        <p style={{ fontWeight: 700, marginBottom: 4 }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color, margin: '2px 0' }}>
            {p.name === 'with' ? 'With AI Agent' : 'Without AI Agent'}: {p.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function Evolve() {
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

      <section className="evolve-stats">
        <p className="evolve-stats__label">EARLY RESULTS</p>
        <h2 className="evolve-stats__title">Early testers saw an average 40% increase in leads within 3 months.</h2>
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
              <Tooltip content={<CustomTooltip />} />
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
            <span className="evolve-stats__desc">Of conversations handled without human intervention</span>
          </div>
          <div className="evolve-stats__number">
            <span className="evolve-stats__value">+18%</span>
            <span className="evolve-stats__desc">Avg. increase in qualified leads within 90 days</span>
          </div>
          <div className="evolve-stats__number">
            <span className="evolve-stats__value">0</span>
            <span className="evolve-stats__desc">Leads missed during the test phase</span>
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
