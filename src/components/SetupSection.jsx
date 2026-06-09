'use client';

import { useRef, useState, useEffect } from 'react';
import './SetupSection.css';
import BtnPrimary from '@/components/ui/BtnPrimary';

const CODE_LINES = [
  { type: 'comment', text: '<!-- Paste before </body> -->' },
  { type: 'tag',     text: '<script' },
  { type: 'attr',    text: '  src=',  val: '"https://cdn.tia.ai/embed.js"' },
  { type: 'attr',    text: '  data-id=', val: '"YOUR_BOT_ID"' },
  { type: 'attr',    text: '  defer', val: '' },
  { type: 'tag',     text: '></script>' },
];

export default function SetupSection() {
  const ref = useRef(null);
  const [lineCount, setLineCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          let i = 0;
          const tick = () => {
            i++;
            setLineCount(i);
            if (i < CODE_LINES.length) setTimeout(tick, 340);
            else setTimeout(() => setShowSuccess(true), 400);
          };
          setTimeout(tick, 200);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ss-section">
      <div className="ss-section__bg" aria-hidden="true" />

      <div className="ss-inner">
        {/* LEFT */}
        <div className="ss-left">
          <p className="ss-label">Setup</p>
          <h2 className="ss-heading">
            2 minute<br /><em>install.</em>
          </h2>
          <p className="ss-body">
            One line of code. Add it yourself or we'll do it together.
            Your AI agent goes live instantly — no configuration,
            no onboarding call, no waiting.
          </p>
          <BtnPrimary href="#">Try it free 14 days</BtnPrimary>
        </div>

        {/* RIGHT — terminal */}
        <div className="ss-terminal-wrap" ref={ref}>
          <div className="ss-terminal">
            <div className="ss-terminal__bar">
              <span className="ss-terminal__dot" />
              <span className="ss-terminal__dot" />
              <span className="ss-terminal__dot" />
              <span className="ss-terminal__title">embed.sh</span>
            </div>

            <div className="ss-terminal__body">
              {CODE_LINES.slice(0, lineCount).map((line, i) => (
                <div
                  className={`ss-line ss-line--${line.type} ss-line--in`}
                  key={i}
                >
                  {line.type === 'comment' && (
                    <span className="ss-c">{line.text}</span>
                  )}
                  {line.type === 'tag' && (
                    <span className="ss-t">{line.text}</span>
                  )}
                  {line.type === 'attr' && (
                    <>
                      <span className="ss-a">{line.text}</span>
                      <span className="ss-v">{line.val}</span>
                    </>
                  )}
                  {i === lineCount - 1 && lineCount < CODE_LINES.length && (
                    <span className="ss-cursor" aria-hidden="true" />
                  )}
                </div>
              ))}

              {showSuccess && (
                <div className="ss-success">
                  <span className="ss-success__dot" />
                  Agent live. Learning started.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
