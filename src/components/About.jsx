import '../styles/About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__header">
          <p className="evolve-stats__label">ABOUT</p>
          <h2 className="about__title">Evolving AI is the next step beyond traditional chatbots.</h2>
        </div>
        <div className="about__mission">
          <p className="about__mission-text">
            We believe customer conversations are one of the most overlooked growth opportunities. That's why we built evolving AI agents that learn, adapt, and actually understand what customers need instead of just responding to them.
          </p>
        </div>
        <div className="about__team">
          <div className="about__member">
            <img src="/jani.avif" alt="Jani Karkulahti" className="about__photo" />
            <div className="about__member-info">
              <p className="about__member-name">Jani Karkulahti</p>
              <p className="about__member-role">FOUNDER</p>
              <p className="about__member-bio">
                Jani is an AI engineer specializing in automation, workflows, and system architecture, with a proven track record of building scalable technology platforms.
              </p>
            </div>
          </div>
          <div className="about__member">
            <img src="/santeri.avif" alt="Santeri Koskinen" className="about__photo" />
            <div className="about__member-info">
              <p className="about__member-name">Santeri Koskinen</p>
              <p className="about__member-role">CO-FOUNDER</p>
              <p className="about__member-bio">
                Santeri is a serial entrepreneur with a proven track record of building successful startups and leading the strategic vision behind growing businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
