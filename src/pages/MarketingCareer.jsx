import React from 'react';
import { CheckCircle2, Megaphone, ArrowRight, UserSearch } from 'lucide-react';
import './MarketingCareer.css';

export default function MarketingCareer() {
  return (
    <main className="career-page">
      <div className="career-container section-container">
        <div className="career-grid">
          
          {/* Left Column: Typography & Content */}
          <div className="career-content">
            <div className="section-header-badge animate-float">
              <span className="badge-dot"></span>
              Join OraRose Tech
            </div>
            
            <h1 className="career-hero-title">
              <span className="text-highlight block-text">WE ARE</span>
              <span className="text-highlight block-text">HIRING</span>
            </h1>
            
            <p className="career-hero-subtitle">
              Take the next step in your career journey. <br/>
              We are hiring exceptional talent to shape a brighter future.
            </p>

            <div className="role-badge">
              <h2>MARKETING</h2>
              <span className="role-type">PROJECT-BASED / FLEXIBLE</span>
            </div>

            <div className="requirements-list">
              <div className="requirement-item">
                <CheckCircle2 className="req-icon" />
                <p>Strong communication and interpersonal skills</p>
              </div>
              <div className="requirement-item">
                <CheckCircle2 className="req-icon" />
                <p>Marketing, sales, or business development experience is a plus</p>
              </div>
              <div className="requirement-item">
                <CheckCircle2 className="req-icon" />
                <p>Strong networking and relationship-building abilities</p>
              </div>
              <div className="requirement-item">
                <CheckCircle2 className="req-icon" />
                <p>Educational background is not a primary requirement, capability and initiative matter more.</p>
              </div>
            </div>

            <div className="cta-container">
              <a 
                href="https://wa.me/6283157317380" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg apply-btn"
              >
                APPLY NOW ! <ArrowRight size={20} />
              </a>
              <p className="whatsapp-number">+62 831-5731-7380</p>
            </div>

            <div className="company-info-card">
              <div className="brand-official-logo-wrap">
                <span className="brand-name-ora" style={{fontWeight: 800, fontSize: '1.2rem'}}>Ora</span>
                <span className="brand-name-rose" style={{fontWeight: 800, fontSize: '1.2rem'}}>Rose</span>
                <span className="brand-name-tech">TECH</span>
              </div>
              <div className="company-legal">PT. ORAROSE INTELEGENT TECHNOLOGY</div>
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="career-visuals">
             <div className="visual-graphic card-modern">
                <div className="icon-wrapper megaphone-wrapper animate-float">
                  <Megaphone size={120} className="text-orange" />
                </div>
                <div className="icon-wrapper search-wrapper">
                  <UserSearch size={80} className="icon-navy" />
                </div>
                <div className="decorative-circle circle-1"></div>
                <div className="decorative-circle circle-2"></div>
                <div className="floating-badge top-badge">Join Our Team</div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}

