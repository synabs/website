import '../styles/SetupSection.css';

export default function SetupSection() {
  return (
    <section className="ss-section">
      <div className="ss-section__bg" aria-hidden="true" />
      <img
        className="ss-bg-image"
        src="/setup.avif"
        alt=""
        aria-hidden="true"
      />

      <div className="ss-inner">
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
          <a href="#" className="btn btn--white">Try it free 14 days</a>
        </div>
      </div>
    </section>
  );
}
