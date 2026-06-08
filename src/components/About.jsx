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
            Many businesses miss valuable revenue opportunities by failing to engage with visitors and leads outside business hours, leaving significant potential untapped. Our mission is to help businesses capture these opportunities with AI. By building adaptive AI agents that continuously learn and improve, we transform customer data into smarter engagement, better targeting, and measurable growth. Over time, these systems become increasingly effective at personalizing interactions, identifying opportunities, and driving results around the clock.
          </p>
        </div>
        <div className="about__team">
          <div className="about__member">
            <img src="/jani.avif" alt="Jani Karkulahti" className="about__photo" />
            <div className="about__member-info">
              <p className="about__member-name">Jani Karkulahti</p>
              <p className="about__member-role">Founder & AI Engineer</p>
              <p className="about__member-bio">
                The nerd of the team. Passionate about engineering, technology, and all things IT. Always eager to learn, build, and try something new.
              </p>
            </div>
          </div>
          <div className="about__member">
            <img src="/santeri.avif" alt="Santeri Koskinen" className="about__photo" />
            <div className="about__member-info">
              <p className="about__member-name">Santeri Koskinen</p>
              <p className="about__member-role">Co-Founder & Head of Business</p>
              <p className="about__member-bio">
                The startup strategist of the team. Passionate about business development, partnerships, and growth. Always eager to identify opportunities and help bring ideas to market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
