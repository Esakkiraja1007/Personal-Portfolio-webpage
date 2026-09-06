import '../style/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', label: 'G', href: 'https://github.com/Esakkiraja1007' },
    { name: 'LinkedIn', label: 'in', href: 'https://www.linkedin.com/in/esakki-raja1015/' },
    { name: 'Email', label: '✉', href: 'mailto:rajaesakki288@gmail.com' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Top Tier: Brand, Navigation, and Socials */}
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              
              <span className="logo-text">Esakki</span>
             
            </a>
            <p className="footer-tagline">
              Crafting responsive web interfaces with clean component architectures.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <ul className="footer-nav">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="footer-nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons & Back to Top */}
          <div className="footer-actions">
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  title={social.name}
                >
                  {social.label}
                </a>
              ))}
            </div>

            <button
              className="scroll-top-btn"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Scroll to top"
            >
              &uarr;
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Bottom Tier: Copyright & Role */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} <span className="highlight-name">Esakki Raja</span>. All rights reserved.
          </p>
          <p className="footer-status">Designed &amp; Built with React &amp; CSS</p>
        </div>
      </div>
    </footer>
  );
}