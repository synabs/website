import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const navLinks = [
  { href: '/about',        label: 'About' },
  { href: '/pricing',      label: 'Pricing' },
  { href: '/performance',  label: 'Performance' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/technology',   label: 'Technology' },
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

        {/* Logo – aivan vasemmalle */}
        <a href="/" className="navbar__logo" aria-label="Home">
          <img
            src="/synabs-black.avif"
            alt="Synabs logo"
            className="navbar__logo-img"
          />
        </a>

        {/* Desktop nav – aivan oikealle */}
        <nav className="navbar__nav" aria-label="Päävalikko">
          <ul className="navbar__list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__link">{label}</a>
              </li>
            ))}
            <li>
              <a
                href="/apply"
                className="navbar__link navbar__link--cta btn btn--outline"
              >
                Become a Partner
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Avaa valikko"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Mobiilinavigaatio"
      >
        <ul className="navbar__mobile-list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__mobile-link" onClick={closeMenu}>{label}</a>
            </li>
          ))}
          <li>
            <a href="/apply" className="navbar__mobile-link navbar__mobile-link--cta" onClick={closeMenu}>
              Apply for tester
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
