import '../styles/Features.css'

const features = [
  {
    number: '01',
    title: 'Captures Every Customer Interaction',
    offset: 0,
  },
  {
    number: '02',
    title: 'Detects Patterns in Successful Conversations',
    offset: 1,
  },
  {
    number: '03',
    title: 'Optimizes Responses Automatically',
    offset: 2,
  },
  {
    number: '04',
    title: 'Generates More Qualified Leads Over Time',
    offset: 3,
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
          <div
            className="features__arrow-wrap"
            key={f.number}
            style={{ '--offset': f.offset }}
          >
            {/* SVG arrow outline — last card flat right edge */}
            <svg
              className="features__arrow-svg"
              viewBox="0 0 240 56"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {i < features.length - 1 ? (
                <polygon
                  points="0,1 212,1 239,28 212,55 0,55"
                  fill="transparent"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="1.5"
                />
              ) : (
                <polygon
                  points="0,1 239,1 239,55 0,55"
                  fill="transparent"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="1.5"
                />
              )}
            </svg>
            <div className="features__arrow-content">
              <span className="features__arrow-number">{f.number}</span>
              <h3 className="features__arrow-title">{f.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
