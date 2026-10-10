import React from 'react';
import { 
  Code2, 
  Target, 
  ShieldCheck, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';
import './AboutOraRose.css';

export default function AboutOraRose({ onOpenConsultation }) {
  const philosophies = [
    {
      icon: Code2,
      title: 'Business-First Engineering',
      tagline: 'Systems designed for business processes, not just technology trends.',
      desc: 'We initiate development from a deep understanding of your operational bottlenecks. Architecture is purpose-built to solve real-world friction, rather than forcing the latest tech-stack which risks becoming unnecessary overhead.'
    },
    {
      icon: Target,
      title: 'AI with Purpose',
      tagline: 'Intelligent automation at high-impact operational nodes.',
      desc: 'Artificial Intelligence at OraRose Tech is never applied as a marketing gimmick. We integrate AI as an automation layer that concretely accelerates data reconciliation, eliminates repetitive tasks, and eradicates human error.'
    },
    {
      icon: FileCheck2,
      title: 'Client-Owned Deliverables',
      tagline: 'Full intellectual property rights with zero vendor lock-in.',
      desc: 'We do not monopolize your growth. Every piece of source code, infrastructure, and intellectual property (IP) developed is handed over entirely to the client, equipped with comprehensive documentation for seamless internal team handovers.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade Security',
      tagline: 'Uncompromising data integrity with flexible deployment.',
      desc: 'From custom applications to ready-to-use SaaS, we enforce Zero-Trust Security standards. Our systems support deployment across public cloud, private cloud, or on-premise environments, strictly adhering to your industry\'s data privacy regulations.'
    }
  ];

  return (
    <section className="section-padding philosophy-section" id="philosophy">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="philosophy-header">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            THE ORAROSE STANDARD
          </span>
          <h2 className="section-title">
            The Engineering Philosophy of <span className="text-highlight">OraRose Tech</span>
          </h2>
          <p className="philosophy-lead">
            We don't build software just to check a box. We engineer strategic digital assets that are measurable, self-manageable, and specifically designed to drive enterprise-scale efficiency.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="philosophy-grid">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard 
                key={idx} 
                className="philosophy-card"
                spotlightColor="rgba(255, 130, 58, 0.12)"
              >
                <div className="philosophy-card-inner">
                  <div className="philosophy-icon-wrap">
                    <Icon size={28} className="text-orange" />
                  </div>
                  <h3 className="philosophy-title">{item.title}</h3>
                  <p className="philosophy-tagline">{item.tagline}</p>
                  <p className="philosophy-desc">{item.desc}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Action Bottom */}
        <div className="philosophy-cta-row">
          <button
            onClick={() => onOpenConsultation && onOpenConsultation('Engineering Approach Consultation')}
            className="btn btn-secondary"
          >
            <span>Discuss Your Infrastructure</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
