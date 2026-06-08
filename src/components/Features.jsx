import '../styles/Features.css'

const features = [
  {
    number: '01',
    title: 'Captures Every\nCustomer Interaction',
    body: 'Every message, click, and hesitation is recorded — building a complete picture of how customers engage with your agents.',
  },
  {
    number: '02',
    title: 'Detects Patterns in\nSuccessful Conversations',
    body: 'AI surfaces what makes conversations convert: tone, timing, phrasing. Nothing that works is left unnoticed.',
  },
  {
    number: '03',
    title: 'Optimizes Responses\nAutomatically',
    body: 'No manual tuning. Agents rewrite themselves based on what actually drives results — continuously, in the background.',
  },
  {
    number: '04',
    title: 'Generates More\nQualified Leads Over Time',
    body: 'The longer your agents run, the sharper they get. Every interaction makes the next one more effective.',
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

      <div className="features__grid">
        {features.map((f) => (
          <article className="features__card" key={f.number}>
            <span className="features__card-number">{f.number}</span>
            <div className="features__card-bar" aria-hidden="true" />
            <h3 className="features__card-title">
              {f.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h3>
            <p className="features__card-body">{f.body}</p>
            <div className="features__card-glow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
