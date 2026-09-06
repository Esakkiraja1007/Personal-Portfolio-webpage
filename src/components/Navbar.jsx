import { useState } from 'react';

import '../style/Navbar.css';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-box">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          
          <span className="logo-text">Esakki</span>
          
        </a>

        {/* Desktop Menu & Mobile Dropdown */}
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((item) => (
            <li key={item.label} className="nav-item">
              <a href={item.href} className="nav-link" onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
          {/* Mobile-only CTA */}
          <li className="mobile-cta-item">
            <a href="#contact" className="hire-btn" onClick={handleLinkClick}>
              Hire Me
            </a>
          </li>
        </ul>

        {/* Desktop-only CTA */}
        <a href="#contact" className="hire-btn desktop-cta">
          Hire Me
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
}