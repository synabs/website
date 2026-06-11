import { useState } from 'react'
import '../styles/FAQ.css'

const faqs = [
  {
    q: 'What exactly does "evolving" mean?',
    a: 'The AI continuously learns from your conversations, customer behavior, and performance signals. The Cortex Engine reviews outcomes, identifies successful patterns, detects failures, and deploys improvements making the agent more effective at qualifying leads and driving conversions over time.',
  },
  {
    q: 'How is Synabs different from a regular chatbot?',
    a: 'Traditional chatbots follow predefined scripts. Synabs uses the Cortex Engine to analyze conversations, identify patterns that drive conversions, and continuously improve. Instead of static flows, the agent adapts based on real customer interactions and gets smarter with every conversation.',
  },
  {
    q: 'How does the Cortex Engine work?',
    a: 'The Cortex Engine analyzes intent, context, sentiment, and customer behavior in real time. It benchmarks conversation outcomes, identifies what works and what doesn\'t, and deploys targeted improvements designed to increase lead quality and conversion rates.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'From your first demo to a live, trained agent: one day. We onboard your business data website content, documents, FAQs and the agent is ready. Installation on your site takes just a few minutes.',
  },
  {
    q: 'Can I see how the AI is performing?',
    a: 'Yes. Monthly performance reports give you visibility of key stats and the improvements the AI has made, so you can track ROI over time.',
  },
  {
    q: 'What happens if the AI gives incorrect information?',
    a: 'The AI is trained on your specific business data to stay accurate. When it encounters a question outside its knowledge, it guides the visitor to the next best step gathering lead info or directing them to your team rather than guessing.',
  },
  {
    q: 'What CRM integrations are available?',
    a: 'We connect to thousands of tools via Zapier. HubSpot is the first CRM we have fully integrated, and we are open to working with you on any other platform you use.',
  },
  {
    q: 'What happens after 5,000 messages?',
    a: 'Your subscription includes 5,000 messages per month. Additional messages are billed at €0.06 each, so your agent keeps running without interruption. If you consistently need more, we sell additional message packages and are happy to discuss a volume that fits your usage.',
  },
  {
    q: 'Is my data shared with other customers?',
    a: 'No. Your conversations and business data stay private to your organization in a dedicated data environment. Synabs may use anonymized, aggregated signals to improve the Cortex Engine, but your data is never exposed to other customers.',
  },
  {
    q: 'Is Synabs GDPR compliant?',
    a: 'Yes. Synabs is built with data protection as a foundation all data is encrypted at rest and in transit, stored in compliant cloud infrastructure, and can be deleted on request. We follow industry-standard security practices at all times.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq">
      <div className="faq__inner">
        <p className="faq__label">FAQ</p>
        <h2 className="faq__heading">
          Frequently asked<br />
          <em>questions</em>
        </h2>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item${open === i ? ' faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div className="faq__answer-wrapper">
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
