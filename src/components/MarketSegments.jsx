import React, { useState } from 'react';
import { ArrowRight, Check, Minus } from 'lucide-react';
import './MarketSegments.css';

export default function MarketSegments({ onSelectSegment }) {
  const [active, setActive] = useState(0);

  const segments = [
    {
      num: '01',
      label: 'Enterprise & Corporate',
      sub: 'Governance, High Availability & Legacy Modernization',
      bgImage: '/segment_enterprise_skyscraper.webp',
      description: 'Organizations requiring high system reliability, closed data governance, and strict adherence to internal security standards.',
      problems: [
        'Legacy systems that resist integration with modern tooling',
        'Strict data governance and regulatory compliance requirements',
        'Monolithic infrastructure with mounting maintenance costs',
      ],
      solutions: [
        'Private AI deployment with fully isolated data controls',
        'Microservices re-architecture via the Strangler Fig Pattern',
        'Dedicated engineering support and disaster recovery planning',
      ],
      deliverables: ['Documented SLA', 'High Availability Architecture', 'Regulated Environment Design'],
    },
    {
      num: '02',
      label: 'Mid-Market & Commercial',
      sub: 'Workflow Automation, ERP/CRM & Revenue Throughput',
      bgImage: '/segment_commercial.webp',
      description: 'Mid-sized businesses expanding rapidly but bottlenecked by manual processes and fragmented data across departments.',
      problems: [
        'No in-house capacity for advanced automation or AI',
        'Manual workflows capping order processing and throughput',
        'Imported enterprise software that is expensive and inflexible',
      ],
      solutions: [
        'Custom ERP & CRM fully integrated with omnichannel operations',
        'AI document processing for invoices, inventory, and purchasing',
        'Cost-predictable cloud architecture with measurable monthly OPEX',
      ],
      deliverables: ['Intelligent ERP/CRM Suite', 'AI Automation Workflows', 'Flexible System Controls'],
    },
    {
      num: '03',
      label: 'High-Growth Startups',
      sub: 'Rapid Product Velocity & Investor-Grade Codebases',
      bgImage: '/segment_startup.webp',
      description: 'Early-stage to Series A/B startups needing fast product velocity on clean architectural foundations that pass VC technical due diligence.',
      problems: [
        'Pressure to launch MVPs in weeks without accumulating tech debt',
        'Infrastructure that buckles under viral post-launch traffic',
        'No access to senior architectural guidance at the right price',
      ],
      solutions: [
        'Full-stack rapid development on React/Next.js, Go/Node, Postgres',
        'Elastic auto-scaling cloud architecture built for burst traffic',
        'Fractional CTO guidance and code quality ready for VC audits',
      ],
      deliverables: ['Production-Grade MVP', 'Clean Scalable Codebase', 'Investor Tech Audit Passed'],
    },
  ];

  const seg = segments[active];

  return (
    <section className="seg-section" id="solutions">
      <div className="section-container">

        {/* Header */}
        <div className="seg-header">
          <span className="seg-eyebrow">02 — Sector Strategy</span>
          <h2 className="seg-title">
            The right approach<br />
            for <em>every scale.</em>
          </h2>
        </div>

        {/* Main layout: left nav + right content */}
        <div className="seg-layout">

          {/* Left: Vertical tab list */}
          <nav className="seg-nav" aria-label="Sector selector">
            <div className="seg-tabs-group">
              {segments.map((s, i) => (
                <button
                  key={s.num}
                  className={`seg-tab ${active === i ? 'seg-tab--active' : ''}`}
                  onClick={() => setActive(i)}
                  type="button"
                >
                  <div className="seg-tab-top">
                    <span className="seg-tab-num">{s.num}</span>
                    <span className="seg-tab-indicator" aria-hidden="true" />
                  </div>
                  <span className="seg-tab-label">{s.label}</span>
                  <span className="seg-tab-sub">{s.sub}</span>
                </button>
              ))}
            </div>

            <div className="seg-nav-footnote">
              <span className="seg-footnote-tag">PRACTICE STANDARD</span>
              <p className="seg-footnote-text">Direct collaboration with senior engineers. No junior intermediaries.</p>
            </div>
          </nav>

          {/* Right: Content panel */}
          <div className="seg-content" key={active}>
            {/* Full background image from internet relevant to the sector */}
            <div className="seg-bg-image-wrapper" aria-hidden="true">
              <img
                src={seg.bgImage}
                alt=""
                className="seg-bg-image"
                loading="eager"
              />
              <div className="seg-bg-overlay" />
            </div>

            <p className="seg-desc">{seg.description}</p>

            <div className="seg-columns">
              {/* Challenges */}
              <div className="seg-col">
                <h3 className="seg-col-title">Where companies get stuck</h3>
                <ul className="seg-list seg-list--problems">
                  {seg.problems.map((p, i) => (
                    <li key={i}>
                      <Minus size={14} className="seg-icon-minus" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="seg-col">
                <h3 className="seg-col-title">How OraRose solves it</h3>
                <ul className="seg-list seg-list--solutions">
                  {seg.solutions.map((s, i) => (
                    <li key={i}>
                      <Check size={13} className="seg-icon-check" strokeWidth={2.5} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deliverables */}
            <div className="seg-deliverables">
              <span className="seg-deliv-label">Deliverables</span>
              <div className="seg-deliv-list">
                {seg.deliverables.map((d, i) => (
                  <span key={i} className="seg-deliv-item">{d}</span>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="seg-cta"
              onClick={() => onSelectSegment(seg.label)}
            >
              Talk to us about {seg.label}
              <ArrowRight size={15} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Architectural Subtle Watermark SVGs
   Contextually rendered for each sector
   ──────────────────────────────────────────────────────────── */

function EnterpriseWatermark() {
  return (
    <svg
      className="seg-watermark-svg"
      viewBox="0 0 560 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="ent-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="0.75" fill="#0b1329" opacity="0.08" />
        </pattern>
        <radialGradient id="ent-glow" cx="85%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.06" />
          <stop offset="50%" stopColor="#0B132B" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <rect width="560" height="500" fill="url(#ent-glow)" />

      {/* Blueprint grid area */}
      <rect x="160" y="10" width="390" height="420" fill="url(#ent-grid)" />

      {/* Security Perimeter Concentric Circles */}
      <circle cx="410" cy="220" r="180" stroke="#0b1329" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.08" />
      <circle cx="410" cy="220" r="130" stroke="#0b1329" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.10" />
      <circle cx="410" cy="220" r="85" stroke="#F97316" strokeWidth="1" opacity="0.20" />

      {/* Blueprint Crosshairs */}
      <line x1="410" y1="20" x2="410" y2="420" stroke="#0b1329" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.08" />
      <line x1="180" y1="220" x2="550" y2="220" stroke="#0b1329" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.08" />

      {/* Central Security Enclave Diamond */}
      <path
        d="M 410 170 L 445 192 L 445 238 L 410 260 L 375 238 L 375 192 Z"
        stroke="#F97316"
        strokeWidth="1.2"
        fill="rgba(249, 115, 22, 0.02)"
        opacity="0.35"
      />
      <circle cx="410" cy="215" r="9" stroke="#F97316" strokeWidth="1" opacity="0.4" />
      <line x1="410" y1="210" x2="410" y2="220" stroke="#F97316" strokeWidth="1" opacity="0.5" />
      <line x1="405" y1="215" x2="415" y2="215" stroke="#F97316" strokeWidth="1" opacity="0.5" />

      {/* High-Availability Nodes - Transparent architectural wireframes */}
      <g opacity="0.25">
        {/* Node A: Primary Cluster */}
        <rect x="300" y="80" width="76" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="312" cy="96" r="3" fill="#F97316" opacity="0.6" />
        <line x1="322" y1="96" x2="362" y2="96" stroke="#0b1329" strokeWidth="0.8" />
        <line x1="376" y1="96" x2="410" y2="170" stroke="#0b1329" strokeWidth="0.6" strokeDasharray="2 3" />

        {/* Node B: Database Replica */}
        <rect x="460" y="90" width="80" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="473" cy="106" r="3" fill="#059669" opacity="0.6" />
        <line x1="483" y1="106" x2="526" y2="106" stroke="#0b1329" strokeWidth="0.8" />
        <line x1="460" y1="106" x2="445" y2="192" stroke="#0b1329" strokeWidth="0.6" strokeDasharray="2 3" />

        {/* Node C: Failover Recovery */}
        <rect x="450" y="295" width="80" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="463" cy="311" r="3" fill="#0b1329" opacity="0.6" />
        <line x1="473" y1="311" x2="516" y2="311" stroke="#0b1329" strokeWidth="0.8" />
        <line x1="450" y1="300" x2="430" y2="250" stroke="#0b1329" strokeWidth="0.6" strokeDasharray="2 3" />

        {/* Node D: Zero-Trust Gateway */}
        <rect x="290" y="285" width="80" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="303" cy="301" r="3" fill="#F97316" opacity="0.6" />
        <line x1="313" y1="301" x2="356" y2="301" stroke="#0b1329" strokeWidth="0.8" />
        <line x1="370" y1="290" x2="395" y2="250" stroke="#0b1329" strokeWidth="0.6" strokeDasharray="2 3" />
      </g>

      {/* Technical Schematic Annotations */}
      <g opacity="0.22" fontFamily="monospace" fontSize="8" fill="#0b1329" fontWeight="600">
        <text x="260" y="45" letterSpacing="1">SEC_ZONE_01 // 99.99% HIGH_AVAILABILITY</text>
        <text x="390" y="375" letterSpacing="0.8">ZERO-TRUST DATA GOVERNANCE</text>
        <text x="445" y="160" letterSpacing="0.6">SOC2 // ISO 27001</text>
        <text x="260" y="195" letterSpacing="0.6">AIR-GAPPED AI ENCLAVE</text>
      </g>
    </svg>
  );
}

function CommercialWatermark() {
  return (
    <svg
      className="seg-watermark-svg"
      viewBox="0 0 560 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="com-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M 22 0 L 0 0 0 22" fill="none" stroke="#0b1329" strokeWidth="0.5" opacity="0.05" />
        </pattern>
        <radialGradient id="com-glow" cx="85%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.06" />
          <stop offset="60%" stopColor="#059669" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="500" fill="url(#com-glow)" />
      <rect x="160" y="10" width="390" height="420" fill="url(#com-grid)" />

      {/* Workflow Automation Pipelines & Flowchart */}
      <g opacity="0.25">
        {/* Pipeline Arteries */}
        <path d="M 260 75 L 360 75 C 390 75 390 145 420 145 L 530 145" stroke="#F97316" strokeWidth="1.2" strokeDasharray="4 4" />
        <path d="M 360 75 C 390 75 390 225 420 225 L 530 225" stroke="#0b1329" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 290 75 C 290 185 330 185 360 300 L 510 300" stroke="#0b1329" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.7" />

        {/* Step 1: Inflow Stream */}
        <rect x="240" y="58" width="76" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="252" cy="74" r="3" fill="#F97316" opacity="0.6" />
        <rect x="262" y="71" width="42" height="6" rx="1" fill="#0b1329" opacity="0.2" />

        {/* Step 2: AI Parser Engine Diamond */}
        <path d="M 360 55 L 385 75 L 360 95 L 335 75 Z" stroke="#F97316" strokeWidth="1.2" fill="none" />
        <circle cx="360" cy="75" r="3" fill="#F97316" opacity="0.6" />

        {/* Step 3: ERP Integration Core */}
        <rect x="420" y="128" width="85" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="434" cy="144" r="3" fill="#059669" opacity="0.6" />
        <rect x="444" y="141" width="46" height="6" rx="1" fill="#0b1329" opacity="0.2" />

        {/* Step 4: Omnichannel Dispatch */}
        <rect x="420" y="208" width="85" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="434" cy="224" r="3" fill="#F97316" opacity="0.6" />
        <rect x="444" y="221" width="46" height="6" rx="1" fill="#0b1329" opacity="0.2" />

        {/* Step 5: Inventory & Real-Time Sync */}
        <rect x="380" y="283" width="90" height="32" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="394" cy="299" r="3" fill="#0b1329" opacity="0.6" />
        <rect x="404" y="296" width="50" height="6" rx="1" fill="#0b1329" opacity="0.2" />
      </g>

      {/* Throughput metrics bar chart */}
      <g opacity="0.18" transform="translate(280, 160)">
        <rect x="0" y="45" width="7" height="25" rx="1" fill="#0b1329" />
        <rect x="12" y="30" width="7" height="40" rx="1" fill="#0b1329" />
        <rect x="24" y="15" width="7" height="55" rx="1" fill="#F97316" />
        <rect x="36" y="0" width="7" height="70" rx="1" fill="#F97316" />
        <line x1="-5" y1="72" x2="48" y2="72" stroke="#0b1329" strokeWidth="0.8" />
      </g>

      {/* Technical Labels */}
      <g opacity="0.22" fontFamily="monospace" fontSize="8" fill="#0b1329" fontWeight="600">
        <text x="240" y="42" letterSpacing="1">AUTO_ENGINE // ERP_OMNICHANNEL</text>
        <text x="390" y="118" letterSpacing="0.8">AI_INVOICE_PROCESSING: OK</text>
        <text x="360" y="350" letterSpacing="0.8">REALTIME_THROUGHPUT_SYNC</text>
        <text x="250" y="250" letterSpacing="0.6">OPERATIONAL OPEX OPTIMIZED</text>
      </g>
    </svg>
  );
}

function StartupWatermark() {
  return (
    <svg
      className="seg-watermark-svg"
      viewBox="0 0 560 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="sup-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="0.75" fill="#0b1329" opacity="0.08" />
        </pattern>
        <radialGradient id="sup-glow" cx="85%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.07" />
          <stop offset="50%" stopColor="#2563EB" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="500" fill="url(#sup-glow)" />
      <rect x="160" y="10" width="390" height="420" fill="url(#sup-grid)" />

      {/* Auto-scaling Growth Curve & Burst Load Balancing */}
      <g opacity="0.25">
        {/* Coordinate Axis */}
        <line x1="260" y1="300" x2="520" y2="300" stroke="#0b1329" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="260" y1="50" x2="260" y2="300" stroke="#0b1329" strokeWidth="0.8" strokeDasharray="3 3" />

        {/* Growth Curve */}
        <path
          d="M 260 290 Q 360 280 410 195 T 500 65"
          stroke="#F97316"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Nodes along curve */}
        <circle cx="320" cy="285" r="3" fill="#0b1329" />
        <circle cx="410" cy="195" r="4" stroke="#F97316" strokeWidth="1.5" fill="none" />
        <circle cx="480" cy="95" r="5" stroke="#F97316" strokeWidth="1.5" fill="#F97316" opacity="0.8" />

        {/* Vector Burst Arrows */}
        <line x1="480" y1="95" x2="512" y2="60" stroke="#F97316" strokeWidth="1.2" strokeDasharray="2 2" />
        <polygon points="515,57 506,61 511,67" fill="#F97316" opacity="0.8" />

        {/* Modular Kubernetes Microservices Clusters */}
        <rect x="290" y="95" width="48" height="34" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="301" cy="109" r="2.5" fill="#2563EB" opacity="0.6" />
        <line x1="309" y1="109" x2="328" y2="109" stroke="#0b1329" strokeWidth="0.8" />
        <rect x="299" y="117" width="30" height="5" rx="1" fill="#0b1329" opacity="0.2" />

        <rect x="355" y="108" width="48" height="34" rx="4" stroke="#0b1329" strokeWidth="0.8" fill="none" />
        <circle cx="366" cy="122" r="2.5" fill="#F97316" opacity="0.6" />
        <line x1="374" y1="122" x2="393" y2="122" stroke="#0b1329" strokeWidth="0.8" />
        <rect x="364" y="130" width="30" height="5" rx="1" fill="#0b1329" opacity="0.2" />

        <line x1="338" y1="117" x2="355" y2="117" stroke="#0b1329" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* VC Technical Due Diligence Checkmark */}
        <circle cx="475" cy="235" r="14" stroke="#059669" strokeWidth="1" fill="none" />
        <path d="M 469 235 L 473 239 L 482 230" stroke="#059669" strokeWidth="1.2" fill="none" />
      </g>

      {/* Technical Labels */}
      <g opacity="0.22" fontFamily="monospace" fontSize="8" fill="#0b1329" fontWeight="600">
        <text x="270" y="42" letterSpacing="1">SCALE_VECTOR // BURST_AUTOSCALE</text>
        <text x="400" y="270" letterSpacing="0.8">VC_TECH_AUDIT: PASSED</text>
        <text x="280" y="230" letterSpacing="0.8">SERIES A/B ARCHITECTURE</text>
        <text x="420" y="80" letterSpacing="0.8">ELASTIC_BURST: 10X</text>
      </g>
    </svg>
  );
}
