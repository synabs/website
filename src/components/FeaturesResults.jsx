import { useEffect, useRef, useState } from "react";
import "../styles/FeaturesResults.css";

const features = [
  {
    icon: "ti-brain",
    title: "Evolves every week",
    desc: "Reviews every conversation, finds what drives conversions, and updates its own responses. No manual tuning.",
  },
  {
    icon: "ti-clock-24",
    title: "Zero leads missed",
    desc: "Responds in under 2 seconds — 2 AM or 2 PM. Every visitor gets an answer before they leave.",
  },
  {
    icon: "ti-filter",
    title: "Lead qualification",
    desc: "Asks the right questions, captures contact details, and scores leads — without a human in the loop.",
  },
  {
    icon: "ti-calendar-check",
    title: "Calendly booking",
    desc: "Books meetings directly into your calendar. Lead captured, qualified, and booked — one conversation.",
  },
  {
    icon: "ti-language",
    title: "Language detection",
    desc: "Detects the visitor's language and switches instantly. No config needed. Works across every market.",
  },
  {
    icon: "ti-chart-bar",
    title: "Monthly reports",
    desc: "Clear monthly summary of conversations, leads captured, and what the agent learned — so you see ROI.",
  },
];

// target, start, suffix, duration
const statsConfig = [
  {
    target: 2,
    start: 10,
    prefix: "<",
    suffix: "s",
    lbl: "Average response time — every conversation, every time",
    countDown: true,
  },
  {
    target: 96,
    start: 0,
    suffix: "%",
    lbl: "Of conversations handled without human escalation",
    countDown: false,
  },
  {
    target: 23,
    start: 0,
    prefix: "+",
    suffix: "%",
    lbl: "Average increase in qualified leads across early testers",
    countDown: false,
  },
];

function useCountUp({ target, start, duration = 1800, active, countDown }) {
  const [val, setVal] = useState(start);
  useEffect(() => {
    if (!active) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = countDown
        ? Math.round(start - eased * (start - target))
        : Math.round(start + eased * (target - start));
      setVal(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active]);
  return val;
}

function StatCell({ cfg, visible, delay }) {
  const val = useCountUp({
    target: cfg.target,
    start: cfg.start,
    active: visible,
    countDown: cfg.countDown,
  });
  return (
    <div
      className={`fr-stat-cell${visible ? " fr-stat-cell--visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="fr-stat-val">
        {cfg.prefix || ""}{val}{cfg.suffix}
      </p>
      <p className="fr-stat-lbl">{cfg.lbl}</p>
    </div>
  );
}

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
            {features.map((f, i) => (
              <div
                className="fr-feat-cell"
                key={f.title}
                style={{ animationDelay: `${i * 100}ms` }}
              >
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
            {statsConfig.map((s, i) => (
              <StatCell key={s.lbl} cfg={s} visible={statsVisible} delay={i * 120} />
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
