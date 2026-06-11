import '../styles/Table.css'

const rows = [
  {
    situation: 'First response',
    chatbot: 'Answers the question',
    synabs: 'Answers and guides the visitor forward',
  },
  {
    situation: 'Lead capture',
    chatbot: 'None, or a separate form',
    synabs: 'Asks and collects details naturally in conversation',
  },
  {
    situation: 'Sales intent',
    chatbot: 'Does not recognise buying signals',
    synabs: 'Identifies purchase intent and acts on it',
  },
  {
    situation: 'Follow-up',
    chatbot: 'No memory between conversations',
    synabs: 'Uses conversation history to improve over time',
  },
  {
    situation: 'Booking',
    chatbot: 'Not supported',
    synabs: 'Books meetings directly via calendar integration',
  },
  {
    situation: 'Optimisation',
    chatbot: 'Manual updates only',
    synabs: 'Improves automatically based on real data',
  },
]

export default function Table() {
  return (
    <section className="comptable">
      <div className="comptable__inner">
        <p className="comptable__label">Comparison</p>
        <h2 className="comptable__heading">
          Not just a chatbot.<br />
          <em>An agent that works.</em>
        </h2>

        <div className="comptable__wrap">
          <table className="comptable__table">
            <thead>
              <tr>
                <th className="comptable__th comptable__th--situation">Situation</th>
                <th className="comptable__th comptable__th--chatbot">Regular chatbot</th>
                <th className="comptable__th comptable__th--synabs">Synabs AI agent</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="comptable__row">
                  <td className="comptable__td comptable__td--situation">{row.situation}</td>
                  <td className="comptable__td comptable__td--chatbot">{row.chatbot}</td>
                  <td className="comptable__td comptable__td--synabs">{row.synabs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
