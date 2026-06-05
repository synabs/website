import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const navLinks = [
  { href: '/about',      label: 'About Us' },
  { href: '/services',   label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/cases',      label: 'Cases' },
  { href: '/news',       label: 'News & Insights' },
  { href: '/join',       label: 'Join Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => setMenuOpen(false)

  const navClass = [
    'navbar',
    scrolled  ? 'navbar--scrolled'   : '',
    menuOpen  ? 'navbar--menu-open'  : '',
  ].filter(Boolean).join(' ')

  return (
    <nav className={navClass} id="navbar">
      <div className="navbar__inner">

        {/* Logo */}
        <a href="/" className="navbar__logo" aria-label="Home">
          <span className="navbar__logo-text">LOGO</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Päävalikko">
          <ul className="navbar__list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__link">{label}</a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                className="navbar__link navbar__link--cta btn btn--white"
              >
                Contact Us
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
            <a href="/contact" className="navbar__mobile-link" onClick={closeMenu}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
