import { useEffect, useRef, useState } from "react";
import "../styles/Abilities.css";

const features = [
  {
    icon: "ti-brain",
    title: "Evolves every week",
    desc: "Reviews every conversation, finds what drives conversions, and updates its own responses. No manual tuning.",
  },
  {
    icon: "ti-clock-24",
    title: "Never misses a lead",
    desc: "Responds in under 2 seconds, day or night. Every visitor gets an answer before they leave.",
  },
  {
    icon: "ti-filter",
    title: "Lead qualification",
    desc: "Asks the right questions, captures contact details, and scores leads without a human in the loop.",
  },
  {
    icon: "ti-calendar-check",
    title: "Calendly booking",
    desc: "Books meetings directly into your calendar. Lead captured, qualified, and booked in one conversation.",
  },
  {
    icon: "ti-world",
    title: "Language detection",
    desc: "Detects the visitor's language and switches instantly. No config needed. Works across every market.",
  },
  {
    icon: "ti-chart-bar",
    title: "Monthly reports",
    desc: "Clear monthly summaries of conversations, captured leads, and agent insights, so you can track ROI with confidence.",
  },
];

export default function Abilities() {
  const featRef = useRef(null);
  const [featCount, setFeatCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          let i = 0;
          const tick = () => {
            i++;
            setFeatCount(i);
            if (i < features.length) setTimeout(tick, 700);
          };
          setTimeout(tick, 100);
        }
      },
      { threshold: 0.1 }
    );
    if (featRef.current) observer.observe(featRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ab-section" id="abilities">
      <div className="ab-inner">
        <p className="ab-label">Capabilities</p>
        <h2 className="ab-heading">
          Convert more visitors,<br />
          <em>automatically</em>
        </h2>

        <div className="ab-feat-grid" ref={featRef}>
          {features.map((f, i) => (
            <div
              className={`ab-feat-cell${i < featCount ? " ab-feat-cell--visible" : ""}`}
              key={f.title}
            >
              <i className={`ti ${f.icon} ab-feat-icon`} aria-hidden="true" />
              <p className="ab-feat-title">{f.title}</p>
              <p className="ab-feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
