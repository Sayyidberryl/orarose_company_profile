import React from 'react';
import { 
  Bot, 
  RefreshCw, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function CoreServices({ onSelectService }) {
  const services = [
    {
      id: 'ai-operations',
      badge: 'ARTIFICIAL INTELLIGENCE',
      icon: Bot,
      title: 'AI & Operational Automation',
      subtitle: 'Intelligent Workflow Automation',
      desc: 'Transforming manual processes into automated workflows integrated with corporate data, ensuring strict data governance and isolated deployment.',
      features: [
        'Automation of routine workflows & operational tasks',
        'Private data-driven intelligent AI assistants',
        'Targeted predictive analysis for rapid decision-making'
      ],
      metric: 'Elimination of repetitive bottlenecks & manual errors'
    },
    {
      id: 'legacy-modernization',
      badge: 'INFRASTRUCTURE UPGRADE',
      icon: RefreshCw,
      title: 'Legacy System Modernization',
      subtitle: 'Cloud-Native Upgrades',
      desc: 'Revitalizing sluggish legacy applications and databases into highly scalable, reliable modern systems with zero operational downtime.',
      features: [
        'Zero-downtime system & secure data migration',
        'Highly efficient & stable cloud-native architecture',
        'Massive improvements in system response & resilience'
      ],
      metric: 'Infrastructure cost efficiency & maximum uptime'
    },
    {
      id: 'enterprise-architecture',
      badge: 'DIGITAL PLATFORMS',
      icon: Smartphone,
      title: 'Web & Mobile Platforms',
      subtitle: 'Enterprise-Scale Applications',
      desc: 'Engineering high-performance custom web and mobile platforms with stringent corporate security standards, built for massive scalability.',
      features: [
        'Modern web & mobile applications with native performance',
        'API integrations with robust auth, encryption, and audit logging',
        'Flexible deployment: ready-to-use SaaS or fully custom builds'
      ],
      metric: 'Responsive stability under extreme computational loads'
    }
  ];

  return (
    <section className="section-padding services-section" id="services">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            CORE CAPABILITIES // ENGINEERING SOLUTIONS
          </span>
          <h2 className="section-title">
            Engineering Solutions: <span className="text-highlight">AI &amp; Modern Systems</span>
          </h2>
          <p className="section-description">
            A targeted engineering approach to automate workflows, revitalize legacy systems, and build resilient digital platforms ready to accelerate your enterprise growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <SpotlightCard 
                key={service.id} 
                className="service-card"
                spotlightColor="rgba(255, 130, 58, 0.16)"
              >
                <div>
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <Icon size={26} />
                    </div>
                    <span className="service-badge-pill">{service.badge}</span>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <h4 className="service-subheading">{service.subtitle}</h4>
                  <p className="service-desc">{service.desc}</p>

                  <div className="service-features-list">
                    <ul>
                      {service.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} className="feature-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-card-footer">
                  <div className="service-impact-badge">
                    <span className="impact-label">Target:</span>
                    <span className="impact-val">{service.metric}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="btn btn-secondary service-action-btn"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
