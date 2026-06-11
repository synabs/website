import { useState } from 'react'
import '../styles/FAQ.css'

const faqs = [
  {
    q: 'How does the AI get smarter over time?',
    a: 'Every conversation helps improve the Cortex Engine. The system analyzes conversation outcomes, buying signals, customer behavior, and quality signals to identify what drives better results. These insights are used to continuously optimize how the AI qualifies leads, answers questions, and guides visitors toward conversion.',
  },
  {
    q: 'What makes Synabs different from traditional AI chatbots?',
    a: 'Traditional chatbots follow fixed rules and scripts. Synabs is built around a continuously evolving Cortex Engine that reviews conversation performance, identifies opportunities for improvement, and adapts its behavior over time. The result is an AI agent that becomes more effective as it learns from real customer interactions.',
  },
  {
    q: 'How does the Cortex Engine work?',
    a: 'The Cortex Engine analyzes intent, context, sentiment, customer behavior, and quality signals in real time. It reviews conversation outcomes, benchmarks performance, identifies failures, deploys improvements, and injects targeted prompts designed to increase lead quality and conversions.',
  },
  {
    q: 'Is my data shared with other customers?',
    a: 'No. Your conversations, customer information, and business data remain private to your organization. Each customer has their own dedicated data environment. Synabs may use anonymized and aggregated learning signals to improve the Cortex Engine, but your business data is never exposed to other customers.',
  },
  {
    q: "Does the AI learn from my company's conversations?",
    a: 'Yes. The AI learns from interactions on your website to better understand your customers, products, services, and buying patterns. This helps the agent improve performance for your specific business while also contributing anonymized insights that help improve the Cortex Engine overall.',
  },
  {
    q: "What happens if the AI doesn't know the answer?",
    a: 'The AI is trained on your website, documents, and business information to answer questions accurately. If it encounters a question outside its knowledge, it can gather lead information, guide the visitor to the appropriate next step, or help connect them with your team.',
  },
  {
    q: 'Can I see how the AI is performing?',
    a: 'Yes. Monthly performance reports provide visibility into conversations, captured leads, qualification activity, and insights discovered by the AI, helping you understand performance and track ROI.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'Most customers can get their AI agent live in just a few minutes. Simply add one line of code to your website and provide your business information. We handle the setup and training process for you.',
  },
  {
    q: 'How is AI Agent different from a regular chatbot?',
    a: 'Traditional chatbots follow predefined rules and scripted flows. Synabs AI Agents use the Cortex Engine to analyze conversations, identify patterns that drive conversions, and continuously improve their performance over time. Instead of following static scripts, the agent adapts based on real customer interactions.',
  },
  {
    q: 'What exactly does "evolving" mean?',
    a: '"Evolving" means the AI continuously learns from conversation data, customer behavior, and performance signals. The Cortex Engine reviews outcomes, identifies successful patterns, detects failures, and deploys improvements designed to increase lead quality and conversion rates over time.',
  },
  {
    q: 'What CRM integrations are available?',
    a: 'Synabs supports CRM integrations through Zapier, allowing you to connect with thousands of popular tools and platforms. This enables automatic lead syncing, workflow automation, and customer data management across your existing systems. HubSpot is fully supported today — and we are happy to work with you on any other integration you need.',
  },
  {
    q: 'What happens if the AI gives incorrect information?',
    a: 'The AI is trained on your website, documents, FAQs, and business information to provide accurate responses. If it encounters a question outside its knowledge, it will attempt to guide the visitor appropriately, gather lead information, or direct them to the next best step.',
  },
  {
    q: 'What happens after 5,000 messages?',
    a: 'Your subscription includes 5,000 messages per month. Additional messages are billed at €0.06 per message, ensuring your AI Agent continues operating without interruption as your traffic grows. Need more volume? You can purchase additional message packages at any time by contacting us.',
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
                <svg
                  className="faq__icon"
                  width="16" height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
