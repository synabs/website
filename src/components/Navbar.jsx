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

        {/* Oikealle: linkit + Start free trial -nappi + hamburger */}
        <div className="navbar__right">
          <ul className={`navbar__desktop-list${menuOpen ? ' navbar__desktop-list--open' : ''}`}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__desktop-link">{label}</a>
              </li>
            ))}
          </ul>

          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Avaa valikko"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="navbar__hamburger-svg"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Kolme viivaa – hamburger */}
              <line className="navbar__hb-line navbar__hb-line--top"    x1="7" y1="6"  x2="21" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line className="navbar__hb-line navbar__hb-line--mid"    x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line className="navbar__hb-line navbar__hb-line--bottom" x1="7" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              {/* Kuusiokulma – open-tilassa */}
              <polygon
                className="navbar__hb-hex"
                points="14,1 26,7.5 26,20.5 14,27 2,20.5 2,7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>

          <a href="/trial" className="navbar__trial-link">
            Start free trial
          </a>
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
        </ul>
      </div>
    </nav>
  )
}
