import { useEffect, useRef, useState } from 'react'
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
    synabs: 'Learns from data and improves',
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
  const [visible, setVisible] = useState([])
  const rowRefs = useRef([])

  useEffect(() => {
    const observers = rowRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => [...new Set([...prev, i])])
            obs.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  return (
    <section className="comptable" id="table">
      <div className="comptable__inner">
        <p className="comptable__label">Comparison</p>
        <h2 className="comptable__heading">
          The next generation of<br />
          <em>customer engagement</em>
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
                <tr
                  key={i}
                  ref={el => rowRefs.current[i] = el}
                  className={`comptable__row${visible.includes(i) ? ' comptable__row--visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
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
