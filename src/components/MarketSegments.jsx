import React, { useState } from 'react';
import { Building2, Store, Rocket, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function MarketSegments({ onSelectSegment }) {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      id: 'enterprise',
      title: 'Perusahaan & Korporasi',
      tag: 'MISI KRITIS & REGULASI KETAT',
      icon: Building2,
      subtitle: 'Kekuatan Arsitektur Terdistribusi Tanpa Kompromi',
      focus: 'Organisasi dan korporasi yang membutuhkan keandalan sistem tinggi, tata kelola data tertutup, dan kepatuhan standar keamanan data internal.',
      challenges: [
        'Sistem legacy puluhan tahun yang sulit diintegrasikan',
        'Kebutuhan standar tata kelola data yang ketat dan proteksi enkripsi',
        'Biaya pemeliharaan infrastruktur monolitik yang terus membengkak'
      ],
      solutions: [
        'Private AI Deployment dengan kontrol data dan deployment terisolasi',
        'Re-arsitektur Microservices dengan pendekatan Strangler Fig Pattern',
        'Dedicated Engineering Support & Disaster Recovery Planning'
      ],
      deliverableHighlight: 'Documented SLA Guidelines • Designed for Regulated Environments • High Availability Architecture'
    },
    {
      id: 'sme-scaleup',
      title: 'Bisnis Menengah & Komersial',
      tag: 'EFISIENSI OPERASIONAL TINGGI',
      icon: Store,
      subtitle: 'Otomatisasi Cerdas untuk Lompatan Skala Bisnis',
      focus: 'Bisnis skala menengah yang sedang mengalami ekspansi cepat namun terhambat oleh proses operasional manual, human error, dan sistem data yang terpisah-pisah.',
      challenges: [
        'Keterbatasan tim IT in-house untuk riset AI tingkat lanjut',
        'Bottleneck operasional manual yang membatasi kapasitas pesanan',
        'Biaya software enterprise impor yang terlampau mahal & tidak fleksibel'
      ],
      solutions: [
        'Kustomisasi Intelligent ERP & CRM yang terintegrasi langsung dengan WhatsApp/Omnichannel',
        'AI Intelligent Document Processing untuk faktur, stok, dan purchasing',
        'Arsitektur cloud efisien dengan biaya operasional bulanan yang terukur (lean OPEX)'
      ],
      deliverableHighlight: 'Intelligent ERP/CRM Suite • AI Automation Workflows • Kontrol Sistem Fleksibel'
    },
    {
      id: 'startup',
      title: 'High-Growth Startups',
      tag: 'SPEED-TO-MARKET & INVESTOR READY',
      icon: Rocket,
      subtitle: 'Fondasi Rekayasa Tangguh Siap Putaran Pendanaan',
      focus: 'Startup teknologi tahap awal hingga Series A/B yang membutuhkan kecepatan rilis produk (rapid velocity) dengan fondasi arsitektur bersih yang lolos audit teknis investor (VC Tech Due Diligence).',
      challenges: [
        'Tuntutan meluncurkan MVP dalam hitungan minggu tanpa menghasilkan spaghetti code',
        'Kekhawatiran server down saat pengguna melonjak tajam setelah peluncuran',
        'Kebutuhan akan advis arsitektur tingkat Senior/Principal Architect'
      ],
      solutions: [
        'Full-Stack Rapid Development dengan stack modern (React/Next.js, Go/Node, Postgres)',
        'Arsitektur cloud elastis (auto-scaling) yang hemat biaya di awal namun sanggup menahan viral traffic',
        'Fractional CTO guidance & code quality guarantee siap uji kelayakan VC'
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
            Pendekatan Terkurasi untuk Setiap <span className="text-highlight">Skala Organisasi</span>
          </h2>
          <p className="section-description">
            Setiap fase pertumbuhan memiliki tantangan dan dinamika unik. OraRose Tech merancang solusi teknologi yang disesuaikan secara presisi dengan kebutuhan dan kapasitas bisnis Anda.
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
                    <span>Lihat Solusi Spesifik</span>
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
                <span className="deliv-label">Standar Deliverable:</span>
                <span className="deliv-text">{current.deliverableHighlight}</span>
              </div>

              <div className="segment-action-wrap">
                <button
                  onClick={() => onSelectSegment(current.title)}
                  className="btn btn-primary"
                >
                  <span>Diskusikan Kebutuhan Segmen Ini</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="segment-detail-right">
              {/* Challenges Box */}
              <div className="segment-compare-box challenges-box">
                <div className="box-header">
                  <ShieldAlert size={18} className="text-navy" />
                  <h4>Tantangan Kritis yang Dihadapi:</h4>
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
                  <h4>Arsitektur Rekayasa OraRose Tech:</h4>
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
