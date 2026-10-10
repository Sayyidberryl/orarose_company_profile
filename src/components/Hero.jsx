import React from 'react';
import { 
  ArrowRight, 
  Zap
} from 'lucide-react';
import GlobalNetworkGlobe from './GlobalNetworkGlobe';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="hero-section" id="hero">
      {/* High-performance CSS Ambient Glow (Zero GPU lag) */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="section-container hero-container">
        {/* Left Column: Value Proposition & CTA */}
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="section-header-badge">
              <span className="badge-dot"></span>
              INTELLIGENT SYSTEMS &amp; ENTERPRISE SOFTWARE ENGINEERING
            </span>
          </div>

          <h1 className="hero-headline">
            The Architect of <br />
            <span className="text-highlight">Intelligent Systems</span>
          </h1>

          <p className="hero-subtext">
            OraRose Tech engineers intelligent SaaS platforms and integrated enterprise software. 
            We help ambitious organizations modernize manual workflows, integrate AI-driven automation, 
            and accelerate business scaling with resilient digital ecosystems.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              onClick={() => onOpenConsultation && onOpenConsultation('Systems Architecture Consultation')}
              className="btn btn-primary btn-lg"
              id="hero-primary-cta"
            >
              <span>Discuss Your Infrastructure</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#problem-solutions" 
              className="btn btn-secondary btn-lg"
              id="hero-secondary-cta"
            >
              <Zap size={18} className="icon-orange" />
              <span>Core Challenges We Solve</span>
            </a>
          </div>

          {/* Compact inline trust signals */}
          <div className="hero-trust-signals">
            <span className="trust-signal-pill">SaaS &amp; Custom Platforms</span>
            <span className="trust-divider">·</span>
            <span className="trust-signal-pill">Zero-Trust Architecture</span>
            <span className="trust-divider">·</span>
            <span className="trust-signal-pill">Maintainability First</span>
          </div>
        </div>

        {/* Right Column: Visual Centerpiece — WebGL 3D Interactive Global Network */}
        <div className="hero-visual-wrapper">
          <GlobalNetworkGlobe />
        </div>
      </div>
    </section>
  );
}
