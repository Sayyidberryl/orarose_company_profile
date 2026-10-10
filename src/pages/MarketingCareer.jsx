import React from 'react';
import { ArrowRight, CheckCircle2, Briefcase, Globe, UserPlus, HeartHandshake } from 'lucide-react';
import './MarketingCareer.css';

export default function MarketingCareer() {
  return (
    <main className="career-page">
      <div className="section-container">
        
        {/* Brand Header */}
        <div className="career-brand-header">
          <img src="/Orarose_logo.png" alt="OraRose Logo" className="career-brand-logo" />
          <div className="company-legal-badge">PT. ORAROSE INTELEGENT TECHNOLOGY</div>
        </div>

        <div className="career-grid">
          
          {/* Left Column: Typography & Content */}
          <div className="career-content">
            <div className="section-header-badge">
              <span className="badge-dot"></span>
              Join OraRose Tech
            </div>
            
            <h1 className="career-hero-title">
              MARKETING
            </h1>
            
            <p className="career-hero-subtitle">
              We are looking for exceptional marketing talent to join our team. 
              Help us connect our enterprise AI solutions and software engineering excellence with the businesses that need them most.
            </p>

            <div className="role-meta-tags">
              <div className="meta-tag">
                <Briefcase size={16} /> Project-Based / Flexible
              </div>
              <div className="meta-tag">
                <Globe size={16} /> Remote Work
              </div>
            </div>

            <div className="cta-container">
              <a 
                href="https://wa.me/6283157317380" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg apply-btn"
              >
                Apply Now <ArrowRight size={20} />
              </a>

            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="career-visuals">
             <div className="image-wrapper">
                <img src="/gambar_marketing.webp" alt="Marketing Career at OraRose Tech" className="career-image" />
                <div className="decorative-element shape-1"></div>
                <div className="decorative-element shape-2"></div>
             </div>
          </div>

        </div>

        {/* Requirements Section */}
        <div className="requirements-section">
          <div className="requirements-header">
            <h2 className="section-title">Who we are looking for</h2>
            <p className="section-description">We value drive, capability, and real-world skills over traditional educational backgrounds.</p>
          </div>
          
          <div className="requirements-grid">
            <div className="req-card card-modern">
              <div className="req-icon-wrap"><HeartHandshake size={24} /></div>
              <h3>Communication</h3>
              <p>Strong communication and interpersonal skills. You know how to build meaningful connections.</p>
            </div>
            <div className="req-card card-modern">
              <div className="req-icon-wrap"><Briefcase size={24} /></div>
              <h3>Experience</h3>
              <p>Prior experience in marketing, sales, or business development is a significant plus.</p>
            </div>
            <div className="req-card card-modern">
              <div className="req-icon-wrap"><UserPlus size={24} /></div>
              <h3>Networking</h3>
              <p>Strong networking abilities. You thrive on expanding reach and creating partnerships.</p>
            </div>
            <div className="req-card card-modern highlight-card">
              <div className="req-icon-wrap"><CheckCircle2 size={24} /></div>
              <h3>Initiative</h3>
              <p>Educational background is not our primary requirement. Your capability and initiative matter more.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
