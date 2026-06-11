import '../styles/Cortex.css'

const stats = [
  { number: '200+', label: 'Optimized prompts injected' },
  { number: '75+',  label: 'Quality signals analyzed' },
]

export default function Cortex() {
  return (
    <section className="cortex">
      <div className="cortex__inner">
        <h2 className="cortex__heading">The Cortex Engine</h2>

        <div className="cortex__body">
          <div className="cortex__text-cell">
            <p className="cortex__text">
              The brain behind every conversation. The advanced AI Cortex engine analyzes intent,
              context, sentiment, customer behavior, and quality signals in real time. It continuously
              optimizes performance by identifying failures, benchmarking results, deploying
              improvements, and injecting targeted prompts. Every interaction contributes to the
              model's evolution, enabling our team to refine the Cortex engine and continuously
              enhance system intelligence.
            </p>
          </div>

          <div className="cortex__stats-cell">
            {stats.map(s => (
              <div className="cortex__stat" key={s.label}>
                <span className="cortex__stat-number">{s.number}</span>
                <span className="cortex__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
