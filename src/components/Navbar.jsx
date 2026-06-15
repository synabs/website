import { useState } from 'react'
import '../styles/Navbar.css'

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#pricing',    label: 'Pricing' },
  { href: '#technology', label: 'Technology' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => setMenuOpen(false)

  const navClass = [
    'navbar',
    menuOpen ? 'navbar--menu-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <nav className={navClass} id="navbar">
      <div className="navbar__inner">

        {/* Logo – vasemmalle */}
        <a href="/" className="navbar__logo" aria-label="Home">
          <img
            src="/synabs-black.avif"
            alt="Synabs logo"
            className="navbar__logo-img"
          />
        </a>

        {/* Oikealle: Start free trial -linkki + hamburger */}
        <div className="navbar__right">
          <a href="/trial" className="navbar__trial-link">
            Start free trial
          </a>

          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Avaa valikko"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ylin viiva – kapea (suipuva) */}
              <line x1="7" y1="2" x2="21" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              {/* Keskiviiva – leveä */}
              <line x1="2" y1="10" x2="26" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              {/* Alaviiva – sama kuin ylin */}
              <line x1="7" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu – sekä mobile että desktop */}
      <div
        className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Navigaatio"
      >
        <ul className="navbar__mobile-list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__mobile-link" onClick={closeMenu}>{label}</a>
            </li>
          ))}
          <li>
            <a href="/demo" className="navbar__mobile-link navbar__mobile-link--cta" onClick={closeMenu}>
              Get a demo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
