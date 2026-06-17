import '../styles/SetupSection.css';
export default function SetupSection() {
  return (
    <section className="ss-section" id="setup-section">
      <div className="ss-section__bg" aria-hidden="true" />
      <div className="ss-inner">
        <div className="ss-left">
          <p className="ss-label">Setup</p>
          <h2 className="ss-heading">
            2 minute setup
          </h2>
          <p className="ss-body">
            One line of code. Your AI agent goes live instantly,
            whether you set it up yourself or with our help.
          </p>
          <a href="#" className="btn btn--white">Try it free 14 days</a>
        </div>
        <div className="ss-right" aria-hidden="true">
          <img
            className="ss-bg-image"
            src="/setup.avif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
