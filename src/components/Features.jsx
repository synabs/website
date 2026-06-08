import '../styles/Features.css'

const features = [
  {
    number: '01',
    title: 'Captures Every\nCustomer Interaction',
  },
  {
    number: '02',
    title: 'Detects Patterns in\nSuccessful Conversations',
  },
  {
    number: '03',
    title: 'Optimizes Responses\nAutomatically',
  },
  {
    number: '04',
    title: 'Generates More\nQualified Leads Over Time',
  },
]

export default function Features() {
  return (
    <section className="features">
      <div className="features__header">
        <span className="features__eyebrow">How it works</span>
        <h2 className="features__heading">
          Agents that get<br />
          <em>smarter every day</em>
        </h2>
      </div>

      <div className="features__arrows">
        {features.map((f, i) => (
          <div className="features__arrow-wrap" key={f.number}>
            <div className="features__arrow">
              <svg
                className="features__arrow-svg"
                viewBox="0 0 320 160"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Last card: no arrow tip, flat right edge */}
                {i < features.length - 1 ? (
                  <polygon points="0,0 280,0 320,80 280,160 0,160" />
                ) : (
                  <polygon points="0,0 320,0 320,160 0,160" />
                )}
              </svg>
              <div className="features__arrow-content">
                <span className="features__arrow-number">{f.number}</span>
                <h3 className="features__arrow-title">
                  {f.title.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
