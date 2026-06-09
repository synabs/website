import { useEffect, useRef } from "react";
import "./Features.css";

const features = [
  { num: "01", icon: "ti-brain", title: "Evolves every week", desc: "Reviews every conversation, detects what drives conversions, and improves responses automatically." },
  { num: "02", icon: "ti-clock-24", title: "Zero leads missed", desc: "Responds in under 2 seconds — 2 AM or 2 PM. Every visitor gets an answer before they bounce." },
  { num: "03", icon: "ti-filter", title: "Lead qualification", desc: "Asks the right questions, captures contact details, and scores leads — without a human in the loop." },
  { num: "04", icon: "ti-calendar-check", title: "Calendly booking", desc: "Books meetings directly into your calendar. Lead captured, qualified, and booked in one conversation." },
  { num: "05", icon: "ti-language", title: "Auto language detection", desc: "Detects the visitor's language and switches instantly. No config. Works across all markets you reach." },
  { num: "06", icon: "ti-chart-bar", title: "Monthly performance reports", desc: "Clear monthly summary of conversations, leads captured, and what the agent learned — so you see ROI." },
];

const arrows = [
  { num: "01", text: "Captures every customer live chat" },
  { num: "02", text: "Detects patterns in every conversation" },
  { num: "03", text: "Studies patterns and optimizes responses" },
  { num: "04", text: "Predicts conversation flow to maximize value" },
];

const stats = [
  { val: "<2s", lbl: "Average response time — every conversation, every time" },
  { val: "96%", lbl: "Of conversations handled without human escalation" },
  { val: "+23%", lbl: "Average increase in qualified leads across early testers" },
];

export default function FeaturesResults() {
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    arrowRefs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.add("fr-arrow-visible");
      }, i * 150);
    });
  }, []);

  return (
    <>
      {/* ── Features ── */}
      <section className="fr-section">
        <p className="fr-label">Capabilities</p>
        <h2 className="fr-heading">Everything your sales team does. 24/7.</h2>
        <p className="fr-sub">
          One agent handles lead capture, qualification, booking, and support —
          learning from every conversation, no manual tuning.
        </p>

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
      </section>

      {/* ── Results ── */}
      <section className="fr-section">
        <p className="fr-label">Early results</p>
        <h2 className="fr-heading">Numbers that move the needle</h2>

        <div className="fr-arrow-row">
          {arrows.map((a, i) => (
            <div
              className="fr-arrow-item"
              key={a.num}
              ref={(el) => { arrowRefs.current[i] = el; }}
            >
              <div className={`fr-arrow-box${i === 0 ? " fr-arrow-box--first" : ""}${i === arrows.length - 1 ? " fr-arrow-box--last" : ""}`}>
                <span className="fr-arrow-num">{a.num}</span>
                <span className="fr-arrow-text">{a.text}</span>
              </div>
              {i < arrows.length - 1 && <div className="fr-arrow-chevron" />}
            </div>
          ))}
        </div>

        <div className="fr-stats-grid">
          {stats.map((s) => (
            <div className="fr-stat-cell" key={s.val}>
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
              Source: Harvard Business Review · Speed-to-lead study
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
