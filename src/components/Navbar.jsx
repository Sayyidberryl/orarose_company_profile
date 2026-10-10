import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ArrowUpRight, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Challenges & Solutions', href: '#problem-solutions' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Engineering Capabilities', href: '#services' },
    { label: 'Engagement Model', href: '#engagement' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-container navbar-inner">
        <a href="#" className="nav-brand-link" aria-label="OraRose Tech Home">
          <Logo size="small" showTagline={false} />
        </a>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="nav-item-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a
            href="mailto:business@orarose.id"
            className="nav-chat-minimal"
            title="Email our Business Desk"
          >
            <PhoneCall size={14} />
            <span>Email</span>
          </a>

          <button
            onClick={() => onOpenConsultation()}
            className="nav-cta-minimal"
            id="nav-consultation-btn"
          >
            <span>Discuss Your Needs</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-modal">
          <ul className="mobile-nav-list">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="mobile-item-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Discuss Your Needs</span>
              <ArrowUpRight size={16} />
            </button>
            <a
              href="mailto:business@orarose.id"
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '10px' }}
            >
              <PhoneCall size={16} />
              <span>Contact Business Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
