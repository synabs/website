import { useEffect, useRef, useState } from "react";
import "../styles/FeaturesResults.css";

const features = [
  {
    num: "01",
    icon: "ti-brain",
    title: "Evolves every week",
    desc: "Reviews every conversation, finds what drives conversions, and updates its own responses. No manual tuning.",
  },
  {
    num: "02",
    icon: "ti-clock-24",
    title: "Zero leads missed",
    desc: "Responds in under 2 seconds — 2 AM or 2 PM. Every visitor gets an answer before they leave.",
  },
  {
    num: "03",
    icon: "ti-filter",
    title: "Lead qualification",
    desc: "Asks the right questions, captures contact details, and scores leads — without a human in the loop.",
  },
  {
    num: "04",
    icon: "ti-calendar-check",
    title: "Calendly booking",
    desc: "Books meetings directly into your calendar. Lead captured, qualified, and booked — one conversation.",
  },
  {
    num: "05",
    icon: "ti-language",
    title: "Language detection",
    desc: "Detects the visitor's language and switches instantly. No config needed. Works across every market.",
  },
  {
    num: "06",
    icon: "ti-chart-bar",
    title: "Monthly reports",
    desc: "Clear monthly summary of conversations, leads captured, and what the agent learned — so you see ROI.",
  },
];

const stats = [
  {
    val: "<2s",
    lbl: "Average response time — every conversation, every time",
  },
  {
    val: "96%",
    lbl: "Of conversations handled without human escalation",
  },
  {
    val: "+23%",
    lbl: "Average increase in qualified leads across early testers",
  },
];

export default function FeaturesResults() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Capabilities ── */}
      <section className="fr-section">
        <div className="fr-inner">
          <p className="fr-label">Capabilities</p>
          <h2 className="fr-heading">
            Everything your sales<br />
            <em>team does. 24/7.</em>
          </h2>

          <div className="fr-feat-grid">
            {features.map((f) => (
              <div className="fr-feat-cell" key={f.num}>
                <p className="fr-feat-num">{f.num}</p>
                <i className={`ti ${f.icon} fr-feat-icon`} aria-hidden="true" />
                <p className="fr-feat-title">{f.title}</p>
                <p className="fr-feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="fr-section" ref={statsRef}>
        <div className="fr-inner">
          <p className="fr-label">Early results</p>
          <h2 className="fr-heading">
            Numbers that<br />
            <em>move the needle</em>
          </h2>

          <div className="fr-stats-grid">
            {stats.map((s, i) => (
              <div
                className={`fr-stat-cell${statsVisible ? " fr-stat-cell--visible" : ""}`}
                style={{ transitionDelay: `${i * 120}ms` }}
                key={s.val}
              >
                <p className="fr-stat-val">{s.val}</p>
                <p className="fr-stat-lbl">{s.lbl}</p>
              </div>
            ))}
          </div>

          <div className="fr-harvard">
            <div className="fr-harvard-bar" />
            <div>
              <p className="fr-harvard-quote">
                Companies that respond to leads within one hour are nearly{" "}
                <strong>7× more likely</strong> to qualify them — compared to
                those who wait just two hours.
              </p>
              <p className="fr-harvard-source">
                Harvard Business Review · Speed-to-lead study
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
