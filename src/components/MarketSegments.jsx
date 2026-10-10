import React, { useState } from 'react';
import { Building2, Store, Rocket, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function MarketSegments({ onSelectSegment }) {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      id: 'enterprise',
      title: 'Enterprise & Corporate',
      tag: 'MISSION-CRITICAL & STRICT COMPLIANCE',
      icon: Building2,
      subtitle: 'Distributed Architecture Without Compromise',
      focus: 'Organizations requiring high system reliability, closed data governance, and strict adherence to internal security standards.',
      challenges: [
        'Decades-old legacy systems that are difficult to integrate',
        'Requirements for strict data governance and robust encryption',
        'Constantly inflating maintenance costs of monolithic infrastructure'
      ],
      solutions: [
        'Private AI Deployment with isolated data controls',
        'Microservices re-architecture via the Strangler Fig Pattern',
        'Dedicated Engineering Support & Disaster Recovery Planning'
      ],
      deliverableHighlight: 'Documented SLA Guidelines • Designed for Regulated Environments • High Availability Architecture'
    },
    {
      id: 'sme-scaleup',
      title: 'Mid-Market & Commercial',
      tag: 'HIGH OPERATIONAL EFFICIENCY',
      icon: Store,
      subtitle: 'Intelligent Automation for Scaling Businesses',
      focus: 'Mid-sized businesses experiencing rapid expansion but bottlenecked by manual processes, human error, and fragmented data silos.',
      challenges: [
        'Limited in-house IT capacity for advanced AI implementation',
        'Manual operational bottlenecks capping order capacity',
        'Prohibitively expensive and inflexible imported enterprise software'
      ],
      solutions: [
        'Customized Intelligent ERP & CRM integrated directly with Omnichannel',
        'AI Intelligent Document Processing for invoices, stock, and purchasing',
        'Cost-efficient cloud architecture with measurable monthly OPEX'
      ],
      deliverableHighlight: 'Intelligent ERP/CRM Suite • AI Automation Workflows • Flexible System Controls'
    },
    {
      id: 'startup',
      title: 'High-Growth Startups',
      tag: 'SPEED-TO-MARKET & INVESTOR READY',
      icon: Rocket,
      subtitle: 'Resilient Engineering Foundations',
      focus: 'Early-stage to Series A/B tech startups needing rapid product velocity built upon clean architectural foundations that pass VC Tech Due Diligence.',
      challenges: [
        'Demands to launch MVPs in weeks without generating spaghetti code',
        'Server crash anxiety during post-launch viral traffic spikes',
        'The need for Senior/Principal Architect-level technical guidance'
      ],
      solutions: [
        'Full-Stack Rapid Development with modern stacks (React/Next.js, Go/Node, Postgres)',
        'Elastic auto-scaling cloud architecture designed for cost efficiency and burst traffic',
        'Fractional CTO guidance & code quality guarantees ready for VC audits'
      ],
      deliverableHighlight: 'Production-Grade MVP • Clean Scalable Codebase • Investor Tech Audit Passed'
    }
  ];

  const current = segments[activeSegment];

  return (
    <section className="section-padding segments-section" id="solutions">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            02 // SECTOR STRATEGY & DEPLOYMENT
          </span>
          <h2 className="section-title">
            A Curated Approach for Every <span className="text-highlight">Organizational Scale</span>
          </h2>
          <p className="section-description">
            Every growth phase presents unique dynamics. OraRose Tech engineers technology solutions precisely tailored to your business capacity and operational challenges.
          </p>
        </div>

        {/* 3 Pillar Segment Cards */}
        <div className="segments-selector-grid">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            const isSelected = activeSegment === idx;
            return (
              <SpotlightCard
                key={seg.id}
                spotlightColor="rgba(255, 130, 58, 0.16)"
                className={`segment-card-item ${isSelected ? 'active' : ''}`}
              >
                <div 
                  onClick={() => setActiveSegment(idx)}
                  role="button"
                  tabIndex={0}
                  style={{ width: '100%', height: '100%' }}
                >
                  <div className="segment-card-top-header">
                    <div className={`segment-icon-box ${isSelected ? 'icon-active' : ''}`}>
                      <Icon size={26} />
                    </div>
                    <span className="segment-status-tag">{seg.tag}</span>
                  </div>
                  <h3 className="segment-card-name">{seg.title}</h3>
                  <p className="segment-card-lead">{seg.subtitle}</p>
                  <div className="segment-select-indicator">
                    <span>View Specific Solution</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Dynamic Detail Presentation */}
        <div className="segment-detail-showcase card-modern">
          <div className="segment-detail-grid">
            <div className="segment-detail-left">
              <span className="segment-detail-badge">{current.tag}</span>
              <h3 className="segment-detail-title">{current.title}</h3>
              <p className="segment-detail-focus">{current.focus}</p>

              <div className="segment-deliverable-badge">
                <span className="deliv-label">Deliverable Standard:</span>
                <span className="deliv-text">{current.deliverableHighlight}</span>
              </div>

              <div className="segment-action-wrap">
                <button
                  onClick={() => onSelectSegment(current.title)}
                  className="btn btn-primary"
                >
                  <span>Discuss Needs for this Segment</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="segment-detail-right">
              {/* Challenges Box */}
              <div className="segment-compare-box challenges-box">
                <div className="box-header">
                  <ShieldAlert size={18} className="text-navy" />
                  <h4>Critical Challenges Faced:</h4>
                </div>
                <ul>
                  {current.challenges.map((c, i) => (
                    <li key={i}>
                      <span className="bullet-minus">✕</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Box */}
              <div className="segment-compare-box solutions-box">
                <div className="box-header">
                  <CheckCircle size={18} className="text-orange" />
                  <h4>OraRose Tech Engineering Architecture:</h4>
                </div>
                <ul>
                  {current.solutions.map((s, i) => (
                    <li key={i}>
                      <span className="bullet-check">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
