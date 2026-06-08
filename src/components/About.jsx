import '../styles/About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__header">
          <p className="evolve-stats__label">ABOUT</p>
          <h2 className="about__title">Built by people who believe AI should earn its keep</h2>
        </div>
        <div className="about__mission">
          <p className="about__mission-text">
            Evolving AI has always been at the core of what we do. Through continuous research, experimentation, and optimization, we're building AI agents that do more than respond. They learn, adapt, and improve over time, becoming more capable every week through automatic updates.
          </p>
        </div>
        <div className="about__team">
          <div className="about__member">
            <img src="/jani.avif" alt="Jani Karkulahti" className="about__photo" />
            <div className="about__member-info">
              <p className="about__member-name">Jani Karkulahti</p>
              <p className="about__member-role">Founder & AI Engineer</p>
              <p className="about__member-bio">
                Full-stack AI engineer with a background in building automated systems, data pipelines, and cloud infrastructure. Designed and deployed TIA end-to-end — from the Cortex Engine to the frontend.
              </p>
            </div>
          </div>
          <div className="about__member">
            <img src="/santeri.avif" alt="Santeri Koskinen" className="about__photo" />
            <div className="about__member-info">
              <p className="about__member-name">Santeri Koskinen</p>
              <p className="about__member-role">Co-Founder & Head of Business</p>
              <p className="about__member-bio">
                Placeholder — add Santeri's bio here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
