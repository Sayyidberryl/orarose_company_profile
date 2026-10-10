import React, { useState } from 'react';
import { 
  Search, 
  Target,
  GitBranch, 
  Code2, 
  FileCheck2, 
  Headphones, 
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function WorkProcess({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const engagementSteps = [
    {
      id: 'discovery',
      number: '01',
      phase: 'DISCOVERY',
      title: 'Problem & Workflow Discovery',
      sub: 'Identifying the root cause of operational friction before defining the technology solution.',
      desc: 'We listen to your operational context, interview daily workflow managers, and review your existing systems to formulate the root problems and agree on success criteria.',
      icon: Search,
      timing: 'Initial Phase • 1–2 Weeks',
      activities: [
        'In-depth interviews with stakeholders & workflow operators',
        'Review of existing systems, data formats, and team bottlenecks',
        'Mapping of time-wasting choke points and manual error risks'
      ],
      deliverable: 'Business Process Map & Problem Definition Document',
      clientOutcome: 'Clarity on operational root causes & targeted solution criteria.'
    },
    {
      id: 'assessment',
      number: '02',
      phase: 'ASSESSMENT',
      title: 'Root Cause & Feasibility Assessment',
      sub: 'Technical feasibility analysis, system integration, and measurable efficiency potential.',
      desc: 'A technical deep dive to evaluate integration feasibility, data security, and determine whether modular refactoring, custom development, or AI automation is the most efficient approach.',
      icon: Target,
      timing: 'Feasibility Analysis • Scaled',
      activities: [
        'Audit of API integration feasibility, databases, and security protocols',
        'Identification of workflow automation points that yield real impact',
        'Formulation of technical architecture trade-offs with risk mitigation'
      ],
      deliverable: 'Feasibility Analysis & Optimization Scope',
      clientOutcome: 'Logical, secure, and adoptable technical recommendations for your organization.'
    },
    {
      id: 'proposal',
      number: '03',
      phase: 'TECHNICAL PROPOSAL',
      title: 'Architecture Design & Roadmap',
      icon: GitBranch,
      timing: 'Specification & Planning',
      sub: 'Transparent technical specs, phased roadmap, and firm deliverable commitments.',
      desc: 'Formulating a technical proposal containing the architecture blueprint, explicit deliverable boundaries, sprint milestones, and accountable timeline estimations.',
      activities: [
        'Design of the technical architecture blueprint, data schema, and interfaces',
        'Structuring implementation milestones into clear, measurable sprints',
        'Defining the official project scope boundaries with no hidden costs'
      ],
      deliverable: 'Architecture Blueprint & Project Roadmap Agreement',
      clientOutcome: 'Certainty in project scope, release schedules, and work commitments.'
    },
    {
      id: 'engineering',
      number: '04',
      phase: 'ENGINEERING',
      title: 'Development, Integration & Testing',
      sub: 'Clean code execution, secure integration, and rigorous performance testing.',
      desc: 'The software engineering phase adhering to clean code standards, system modularity, protected API integrations, and continuous testing in a staging environment before launch.',
      icon: Code2,
      timing: 'Phased Sprints • Iterative',
      activities: [
        'Building software modules based on the proven architecture blueprint',
        'Secure API integration with data encryption and strict authorization controls',
        'Load testing, data integrity validation, and failure scenario simulations'
      ],
      deliverable: 'Modular Sprints, Secure Integration & QA Reports',
      clientOutcome: 'A stable, thoroughly tested, and optimally functioning system prior to production.'
    },
    {
      id: 'handover',
      number: '05',
      phase: 'HANDOVER',
      title: 'Activation & Knowledge Transfer',
      sub: 'System activation, code handover, and internal team training.',
      desc: 'The official system launch, whether via SaaS platform activation or custom application source code handover. We provide comprehensive technical documentation and training sessions.',
      icon: FileCheck2,
      timing: 'Official Launch & Onboarding',
      activities: [
        'Deployment activation, credential provisioning, and package configuration',
        'Comprehensive technical architecture documentation and user guides',
        'Knowledge transfer sessions and operational team training'
      ],
      deliverable: 'System Access / Deliverables, Technical Documentation & Training',
      clientOutcome: 'Full operational readiness backed by complete documentation and team capability.'
    },
    {
      id: 'support',
      number: '06',
      phase: 'SUPPORT',
      title: 'Ongoing Maintenance & Support',
      sub: 'Responsive technical support and post-release system stability monitoring.',
      desc: 'Continuous assistance to guarantee system stability, regular performance monitoring, and structured technical troubleshooting in accordance with the Service Level Agreement (SLA).',
      icon: Headphones,
      timing: 'Operational Support',
      activities: [
        'System stability monitoring and periodic performance evaluations',
        'Responsive technical assistance and operational troubleshooting',
        'Consultation for functional upgrades alongside business capacity growth'
      ],
      deliverable: 'Maintenance Agreement, System Health Reports & SLA Support',
      clientOutcome: 'Operational peace of mind with reliable, professional technical accompaniment.'
    }
  ];

  const current = engagementSteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="section-padding workprocess-section" id="engagement">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            HOW WE ENGAGE // ENGAGEMENT MODEL
          </span>
          <h2 className="section-title">
            A Clear &amp; Transparent <span className="text-highlight">Workflow</span>
          </h2>
          <p className="section-description">
            How your organization collaborates with OraRose Tech. Six structured stages from initial discovery to a fully operational solution in your team's hands.
          </p>
        </div>

        {/* 1. Interactive Step Navigator Rail (React Bits Style) */}
        <div className="engagement-stepper-rail">
          <div className="stepper-track-line" />
          <div className="stepper-nodes-row">
            {engagementSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isPast = activeStep > idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`stepper-node-pill ${isSelected ? 'active' : ''} ${isPast ? 'past' : ''}`}
                >
                  <span className="node-num-circle">
                    {step.number}
                  </span>
                  <span className="node-phase-name">{step.phase}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Deep-Dive Active Stage Showcase Card (SpotlightCard) */}
        <div className="engagement-showcase-wrapper">
          <SpotlightCard 
            className="engagement-stage-card card-modern"
            spotlightColor="rgba(255, 130, 58, 0.20)"
          >
            <div className="stage-card-watermark">{current.number}</div>

            <div className="stage-showcase-grid">
              {/* Left Column: Deep Dive Context & Actions */}
              <div className="stage-showcase-left">
                <div className="stage-top-meta">
                  <span className="stage-pill-badge">
                    <CurrentIcon size={14} className="text-orange" />
                    STAGE {current.number} • {current.phase}
                  </span>
                  <span className="stage-timing-pill">
                    <Clock size={12} />
                    {current.timing}
                  </span>
                </div>

                <h3 className="stage-main-title">{current.title}</h3>
                <h4 className="stage-sub-title">{current.sub}</h4>
                <p className="stage-narrative">{current.desc}</p>

                <div className="stage-activities-box">
                  <span className="activities-header-label">Key Activities in this Stage:</span>
                  <ul className="activities-list">
                    {current.activities.map((act, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="text-orange act-icon" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Deliverables & Action Panel */}
              <div className="stage-showcase-right">
                <div className="stage-deliverable-panel">
                  <div className="panel-badge-top">
                    <ShieldCheck size={16} className="text-orange" />
                    <span>STAGE OUTPUTS &amp; DELIVERABLES</span>
                  </div>

                  <div className="panel-deliverable-item">
                    <span className="deliv-sub-label">Official Deliverable:</span>
                    <strong className="deliv-main-val">{current.deliverable}</strong>
                  </div>

                  <div className="panel-outcome-item">
                    <span className="deliv-sub-label">Client Outcome:</span>
                    <p className="deliv-outcome-text">{current.clientOutcome}</p>
                  </div>

                  <div className="panel-cta-box">
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(`Consultation for Stage ${current.number} (${current.phase})`)}
                      className="btn btn-primary"
                    >
                      <span>Initiate This Stage</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* 3. Connected 6-Stage Overview Cards */}
        <div className="engagement-cards-grid">
          {engagementSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <SpotlightCard
                key={step.id}
                spotlightColor="rgba(255, 130, 58, 0.16)"
                className={`step-summary-card ${isSelected ? 'selected' : ''}`}
              >
                <div 
                  onClick={() => setActiveStep(idx)}
                  className="step-card-clickable"
                  role="button"
                  tabIndex={0}
                >
                  <div className="step-summary-top">
                    <span className="step-index-badge">{step.number}</span>
                    <div className="step-summary-icon">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="step-summary-phase">{step.phase}</span>
                  <h4 className="step-summary-title">{step.title}</h4>
                  <p className="step-summary-desc">{step.sub}</p>

                  <div className="step-summary-bottom">
                    <span className="step-inspect-text">
                      {isSelected ? 'Currently Viewing' : 'View Details'}
                    </span>
                    <ChevronRight size={14} className="inspect-arrow" />
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* 4. Bottom Action Banner */}
        <div className="process-bottom-banner">
          <div className="process-banner-text">
            <h4>Ready to Begin the Discovery Phase?</h4>
            <p>Consult your workflow bottlenecks or system modernization needs with zero initial commitment.</p>
          </div>
          <button
            onClick={() => onOpenConsultation('Stage 01 Discovery Consultation')}
            className="btn btn-primary"
          >
            <span>Start Discovery Session</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
