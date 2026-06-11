import { useEffect, useRef, useState } from "react";
import "../styles/FeaturesResults.css";
import Demo from "./Demo";
import Abilities from "./Abilities";

const statsConfig = [
  {
    target: 2,
    start: 10,
    prefix: "<",
    suffix: "s",
    lbl: "Average response time for every conversation",
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

const stages = [
  {
    num: "S1",
    title: "Trained on your business from day one",
    desc: "Share your website, documents, and FAQs with us. We upload everything and configure the agent to understand your products, brand voice, and customer questions.",
  },
  {
    num: "S2",
    title: "Detects patterns that lead to conversions",
    desc: "Analyzes conversation history to identify common buying signals and recommend higher-converting responses.",
  },
  {
    num: "S3",
    title: "Predicts intent and acts before you ask",
    desc: "After months of data, the agent learns visitor behavior, predicts their needs, and identifies the best opportunities to present your services and guide them toward a decision.",
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

const sources = [
  {
    citation: 'Oldroyd, J.B., McElheran, K., & Elkington, D. (2011). The Short Life of Online Sales Leads.',
    label: 'Harvard Business Review',
    url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=39955',
  },
  {
    citation: 'Lead Response Time Insights (2025).',
    label: 'HubSpot',
    url: 'https://www.hubspot.com/reduce-lead-response-time',
  },
];

function SourcesModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="fr-sources-overlay" onClick={onClose}>
      <div className="fr-sources-box" onClick={e => e.stopPropagation()}>
        <div className="fr-sources-header">
          <span className="fr-sources-title">Sources</span>
          <button className="fr-sources-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <ol className="fr-sources-list">
          {sources.map((s, i) => (
            <li key={i} className="fr-sources-item">
              <span className="fr-sources-citation">{s.citation}</span>{' '}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="fr-sources-link">
                {s.label}
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function FeaturesResults() {
  const statsRef = useRef(null);
  const ngRef = useRef(null);
  const progressRef = useRef(null);

  const [statsVisible, setStatsVisible] = useState(false);
  const [stageCount, setStageCount] = useState(0);
  const [progressActive, setProgressActive] = useState(false);
  const [showSources, setShowSources] = useState(false);

  useEffect(() => {
    const o1 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); o1.disconnect(); } },
      { threshold: 0.1 }
    );
    if (statsRef.current) o1.observe(statsRef.current);

    const o3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          o3.disconnect();
          let i = 0;
          const tick = () => {
            i++;
            setStageCount(i);
            if (i < stages.length) setTimeout(tick, 180);
            else setTimeout(() => setProgressActive(true), 200);
          };
          setTimeout(tick, 100);
        }
      },
      { threshold: 0.1 }
    );
    if (ngRef.current) o3.observe(ngRef.current);

    return () => { o1.disconnect(); o3.disconnect(); };
  }, []);

  return (
    <>
      {/* ── Results ── */}
      <section className="fr-section fr-section--results" ref={statsRef}>
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
                <strong>7× more likely</strong> to qualify them compared to
                those that wait just two hours.
              </p>
              <button className="fr-harvard-source fr-harvard-source--btn" onClick={() => setShowSources(true)}>
                Harvard Business Review · Speed-to-lead study
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Demo ── */}
      <Demo />

      {/* ── Next Generation ── */}
      <section className="fr-section fr-section--nextgen">
        <div className="fr-inner">
          <p className="fr-label">Next generation</p>
          <h2 className="fr-heading">
            Evolves every week,<br />
            <em>outplays competitors</em>
          </h2>

          <div className="fr-ng-stages" ref={ngRef}>
            {stages.map((s, i) => (
              <div
                key={s.num}
                className={`fr-ng-stage${i < stageCount ? " fr-ng-stage--visible" : ""}`}
              >
                <span className="fr-ng-stage-num">{s.num}</span>
                <div className="fr-ng-stage-title-col">
                  <h3 className="fr-ng-stage-title">{s.title}</h3>
                </div>
                <div className="fr-ng-stage-desc-col">
                  <p className="fr-ng-stage-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="fr-ng-progress" ref={progressRef}>
            <div className={`fr-ng-progress-fill${progressActive ? " fr-ng-progress-fill--active" : ""}`} />
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <Abilities />

      {showSources && <SourcesModal onClose={() => setShowSources(false)} />}
    </>
  );
}
