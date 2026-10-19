import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Cpu,
  Database,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import './AboutOraRose.css';
import DriftWall from './reactbits/DriftWall';

/* ── Relevant Real Photography Curated for Drift Wall ── */
const DRIFT_ITEMS = [
  {
    image: '/unsplash_architecture_skyscraper.jpg',
    title: 'Enterprise Architecture & Cloud Scale'
  },
  {
    image: '/unsplash_highrise.jpg',
    title: 'Modular Systems & Microservices'
  },
  {
    image: '/unsplash_server_1.jpg',
    title: 'High-Availability Infrastructure'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    title: 'Modern Software Engineering Lab'
  },
  {
    image: '/unsplash_microchip.jpg',
    title: 'Precision Data Processing Cores'
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    title: 'Global Cloud Network Telemetry'
  },
  {
    image: '/unsplash_tech_office_2.jpg',
    title: 'Dedicated Engineering Operations'
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    title: 'Secure Enterprise Data Vault'
  },
  {
    image: '/unsplash_meeting_arch.jpg',
    title: 'Collaborative Systems Architecture'
  },
  {
    image: 'https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&w=600&q=80',
    title: 'Scalable Digital Monolith'
  },
  {
    image: '/unsplash_arch_planning.jpg',
    title: 'Agile Systems Design & Topology'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    title: 'Full-Stack Solution Engineering'
  }
];

/* ── Intersection Observer Hook for Smooth Fade-In ────── */
function useInView(ref, threshold = 0.05) {
  const [inView, setInView] = useState(true);
  return inView;
}

/* ── 4 Disciplines Derived from Philosophy Manifesto ─── */
const disciplines = [
  {
    number: '01',
    name: 'System Engineering',
    category: 'Modular Architecture',
    Icon: Cpu,
    desc: 'Robust, modular, and scalable software architecture designed for long-term infrastructure stability without technical bottlenecks.',
  },
  {
    number: '02',
    name: 'Data Intelligence',
    category: 'Real-Time Pipelines',
    Icon: Database,
    desc: 'Structured data foundations and real-time pipelines that transform raw metrics into operational clarity and precision decision-making.',
  },
  {
    number: '03',
    name: 'Artificial Intelligence',
    category: 'Applied Automation',
    Icon: Sparkles,
    desc: 'Purposeful AI integration to eliminate manual repetitive overhead, accelerate key business workflows, and minimize human error.',
  },
  {
    number: '04',
    name: 'Sustainable Innovation',
    category: 'Future-Proof Investment',
    Icon: TrendingUp,
    desc: 'Adaptive development guaranteeing enterprise asset value with 100% full source code ownership and zero vendor lock-in.',
  },
];

export default function AboutOraRose({ onOpenConsultation }) {
  const rootRef = useRef(null);
  const inView = useInView(rootRef);

  return (
    <section className="philo-section" id="philosophy" ref={rootRef}>
      {/* Background Architectural Blueprint Grid Texture */}
      <div className="philo-bg-grid" aria-hidden="true" />
      <div className="philo-ambient-glow" aria-hidden="true" />

      <div className="section-container philo-container">

        {/* ── TOP: EDITORIAL SHOWCASE (2 Columns) ─────────────────── */}
        <div className={`philo-showcase ${inView ? 'philo-visible' : ''}`}>

          {/* Left Column: Manifesto & Narrative */}
          <div className="philo-content-col">
            <div className="philo-eyebrow">
              <span className="philo-eyebrow-line" />
              <span className="philo-eyebrow-text">OUR PHILOSOPHY</span>
              <span className="philo-eyebrow-badge">OraRose Tech</span>
            </div>

            <h2 className="philo-headline">
              The Architect of <br />
              <span className="philo-headline-gradient">Intelligent Systems</span>
            </h2>

            {/* Core Manifesto Card */}
            <div className="philo-manifesto-card">
              <div className="philo-quote-indicator" aria-hidden="true">“</div>
              <blockquote className="philo-quote-text">
                We believe technology must be engineered around{' '}
                <span className="philo-highlight">real business problems</span>, never
                implemented merely to chase industry trends.
              </blockquote>
            </div>

            {/* Supporting Methodology Narrative */}
            <p className="philo-narrative">
              Through system engineering, unified data pipelines, machine intelligence, and
              sustainable innovation, <strong>OraRose</strong> transforms complex operational hurdles
              into dependable solutions that generate lasting enterprise value.
            </p>

            {/* Consultation CTA */}
            <div className="philo-actions">
              <button
                type="button"
                className="philo-cta-button"
                onClick={() => onOpenConsultation?.('Systems Architecture Consultation')}
                id="philosophy-cta-btn"
              >
                <span>Consult Your Architecture Needs</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Schema Architecture Showcase — Drift Wall */}
          <div className="philo-visual-col">
            <div className="philo-visual-frame">
              <DriftWall
                items={DRIFT_ITEMS}
                columns={3}
                tileWidth={175}
                tileHeight={120}
                gap={16}
                radius={14}
                tilt={0}
                turn={-18}
                roll={0}
                perspective={1000}
                speed={34}
                dim={0.85}
                lift={48}
                overlayColor="#0B192C"
                pauseOnHover={true}
              />
            </div>
          </div>

        </div>

        {/* ── BOTTOM: 4 CORE DISCIPLINES MATRIX ──────────────────── */}
        <div className={`philo-disciplines-wrap ${inView ? 'philo-visible' : ''}`}>
          <div className="philo-disciplines-header">
            <h3 className="philo-disciplines-title">
              Our Four Engineering Pillars
            </h3>
            <span className="philo-disciplines-subtitle">
              A holistic foundation for architecting intelligent enterprise systems
            </span>
          </div>

          <div className="philo-disciplines-grid">
            {disciplines.map(({ number, name, category, Icon, desc }, idx) => (
              <div key={idx} className="philo-discipline-card" style={{ '--card-idx': idx }}>
                <div className="philo-card-top">
                  <span className="philo-card-num">{number}</span>
                  <div className="philo-card-icon-box">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="philo-card-body">
                  <h4 className="philo-card-name">{name}</h4>
                  <div className="philo-card-en">{category}</div>
                  <p className="philo-card-desc">{desc}</p>
                </div>

                <div className="philo-card-accent-bar" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
