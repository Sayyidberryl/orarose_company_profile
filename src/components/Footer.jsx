import React from 'react';
import Logo from './Logo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock,
  Sparkles
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="footer-wrapper">
      {/* High-Impact Pre-Footer Conversion Banner */}
      <div className="section-container">
        <div className="pre-footer-cta-card card-dark">
          <div className="pre-footer-content">
            <span className="section-header-badge" style={{ background: 'rgba(255, 130, 58, 0.2)' }}>
              <Sparkles size={14} color="#FF823A" />
              TECHNOLOGY &amp; AUTOMATION CONSULTATION
            </span>
            <h2 className="pre-footer-title">
              Ready to Build Systems that Drive <span className="text-highlight">Real Growth?</span>
            </h2>
            <p className="pre-footer-subtitle">
              Discuss your technology needs today with OraRose Tech to actualize reliable, secure, and efficient software infrastructure.
            </p>
          </div>
          <div className="pre-footer-actions">
            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="btn btn-primary btn-lg"
              id="footer-primary-cta"
            >
              <span>Discuss Your Needs</span>
              <ArrowUpRight size={18} />
            </button>
            <a
              href="mailto:business@orarose.id"
              className="btn btn-secondary btn-lg"
            >
              <Mail size={18} />
              <span style={{marginLeft: '8px'}}>Contact Business Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="section-container footer-main-grid">
        {/* Brand Column */}
        <div className="footer-col-brand">
          <Logo size="normal" />
          <p className="footer-brand-bio">
            <strong>OraRose Tech</strong> is an engineering studio focused on building intelligent systems, AI integrations, and modern software infrastructure to drive business efficiency and resilience.
          </p>

          <div className="footer-motto-box">
            <em>"The Architect of Intelligent Systems"</em>
            <p className="footer-slogan">
              OraRose: Engineering Intelligent Software and Modern Digital Infrastructure.
            </p>
          </div>
        </div>

        {/* Navigation Column: Solutions */}
        <div className="footer-col-nav">
          <h4 className="footer-nav-heading">Main Navigation</h4>
          <ul className="footer-links">
            <li><a href="#about">Philosophy (Who We Are)</a></li>
            <li><a href="#services">AI &amp; Software Engineering</a></li>
            <li><a href="#process">Engagement (How We Work)</a></li>
            <li><a href="#solutions">Sector Strategy</a></li>
            <li><a href="#problem-solutions">Value Proposition</a></li>
          </ul>
        </div>

        {/* Navigation Column: Market Segments */}
        <div className="footer-col-nav">
          <h4 className="footer-nav-heading">Standards &amp; Governance</h4>
          <ul className="footer-links">
            <li><a href="#about">Zero-Trust Architecture</a></li>
            <li><a href="#about">ISO 27001 Security Principles</a></li>
            <li><a href="#about">Client-Owned Deliverables</a></li>
            <li><a href="#engagement">Transparent Engagement Model</a></li>
          </ul>
        </div>

        {/* Contact & Legal Entity Column */}
        <div className="footer-col-contact">
          <h4 className="footer-nav-heading">Corporate Identity &amp; Contact</h4>
          <div className="footer-contact-items">
            <div className="contact-item">
              <Building size={16} className="contact-icon text-orange" />
              <span>PT. ORAROSE INTELEGENT TECHNOLOGY</span>
            </div>
            <div className="contact-item">
              <Mail size={16} className="contact-icon text-orange" />
              <a href="mailto:business@orarose.id">business@orarose.id</a>
            </div>
            <div className="contact-item">
              <Phone size={16} className="contact-icon text-orange" />
              <a href="tel:+6281234567890">+62 812-3456-7890</a>
            </div>
            <div className="contact-item">
              <Clock size={16} className="contact-icon text-orange" />
              <span>Monday - Friday: 08:30 - 18:00 WIB</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} className="contact-icon text-orange" />
              <span>Indonesia — Remote Engineering Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-inner">
          <div className="footer-copy">
            © {CURRENT_YEAR} <strong>PT. ORAROSE INTELEGENT TECHNOLOGY</strong>. All Rights Reserved.
          </div>

          <div className="footer-standards">
            <div className="standard-item">
              <ShieldCheck size={14} className="text-orange" />
              <span>Zero-Trust Architecture</span>
            </div>
            <div className="standard-item">
              <ShieldCheck size={14} className="text-orange" />
              <span>Aligned with ISO 27001 Principles</span>
            </div>
            <div className="standard-item">
              <ShieldCheck size={14} className="text-orange" />
              <span>100% Code Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Building(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
