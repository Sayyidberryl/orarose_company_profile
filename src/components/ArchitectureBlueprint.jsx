import React from 'react';
import { ArrowRight, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import './ArchitectureBlueprint.css';

export default function ArchitectureBlueprint({ onOpenConsultation }) {
  const stats = [
    { value: 'Up to 70%', label: 'Reduction in Operational Overhead' },
    { value: 'Up to 10x', label: 'Faster Workflow Execution' },
    { value: '100%', label: 'Source Code Ownership' },
  ];

  const painPoints = [
    {
      Icon: Clock,
      title: 'Hours Wasted on Repetitive Tasks',
      desc: 'Manual data entry and repetitive reporting drain your team\'s energy away from core business value.',
    },
    {
      Icon: TrendingDown,
      title: 'Human Errors that Compound',
      desc: 'Manual processes breed inconsistency. A single overlooked metric in a spreadsheet can cost more than you realize.',
    },
    {
      Icon: ShieldCheck,
      title: 'Legacy Systems Bottlenecking Scale',
      desc: 'Disconnected infrastructure forces your team into silos, fragmenting data and delaying critical decisions.',
    },
  ];

  return (
    <section className="blueprint-section" id="problem-solutions">

      {/* Statement Block — full-width photo with dark overlay */}
      <div className="blueprint-statement-block">
        <div className="bsb-photo-wrap" aria-hidden="true">
          <img
            src="/foto_orang_opt.webp"
            onError={(e) => { e.currentTarget.src = '/foto_orang_opt.jpg'; }}
            alt=""
            className="bsb-photo"
          />
          <div className="bsb-overlay" />
          <div className="bsb-gradient-bottom" />
        </div>
        <div className="bsb-content section-container">
          <p className="bsb-eyebrow">OPERATIONAL TRANSFORMATION</p>
          <h2 className="bsb-headline">
            The World Has Moved<br />
            to the Intelligent Era.
          </h2>
          <p className="bsb-sub">Why are your operations still manual?</p>
        </div>
      </div>

      {/* Stats band */}
      <div className="blueprint-stats-band">
        <div className="section-container">
          <div className="bsb-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="bsb-stat">
                <span className="bsb-stat-value">{s.value}</span>
                <span className="bsb-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="blueprint-body section-container">
        <div className="blueprint-manifesto">
          <div className="manifesto-side">
            <div className="manifesto-line" aria-hidden="true" />
            <span className="manifesto-label">THE CORE PROBLEM</span>
          </div>
          <div className="manifesto-body">
            <p className="manifesto-problem">
              Many organizations lose dozens of productive hours every week—not because their teams lack competence, but because
              <em> their systems were never designed for the scale and velocity of modern business.</em>
            </p>
            <p className="manifesto-solution">
              <strong>OraRose Tech</strong> engineers intelligent software systems that automate repetitive processes, 
              integrate cross-departmental data, and deliver absolute visibility across your entire operation.
            </p>
          </div>
        </div>

        <div className="blueprint-pain-grid">
          {painPoints.map((p, i) => {
            const Icon = p.Icon;
            return (
              <div key={i} className="blueprint-pain-card">
                <h3 className="bpc-title">
                  <span className="bpc-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span>{p.title}</span>
                </h3>
                <p className="bpc-desc">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="blueprint-cta-block">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => onOpenConsultation && onOpenConsultation('Operational Transformation Consultation')}
            id="blueprint-cta-btn"
          >
            <span>Discuss Your Systems</span>
            <ArrowRight size={18} />
          </button>
          <p className="blueprint-cta-note">
            30-minute technical session · No commitment · With our Solution Architects
          </p>
        </div>
      </div>
    </section>
  );
}
