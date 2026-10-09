import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import SpecularButton from './reactbits/SpecularButton';

export default function ProjectEstimator({ onOpenConsultationWithData }) {
  const [segment, setSegment] = useState('enterprise');
  const [serviceFocus, setServiceFocus] = useState('ai-operations');
  const [scale, setScale] = useState('medium');
  const [compliance, setCompliance] = useState('iso');

  // Dynamic calculations based on enterprise matrix
  const getEstimation = () => {
    let tierName = 'Enterprise Grade Architecture';
    let timeline = '8 - 14 Minggu';
    let teamComposition = '1 Principal Architect, 2 Senior AI Engineers, 2 Fullstack Devs, 1 SRE';
    let deliverables = 'Dokumen Blueprint Sistem, Source Code Lengkap, Dokumentasi API, Training Tim';

    if (segment === 'startup') {
      tierName = 'High-Velocity Startup Squad';
      timeline = '6 - 10 Minggu (Fase MVP ke Skala)';
      teamComposition = '1 Solutions Architect, 2 Fullstack Engineers, 1 AI/ML Specialist';
      deliverables = 'Production-Ready MVP, Arsitektur Cloud Siap Scale, Investor Tech Memo';
    } else if (segment === 'sme') {
      tierName = 'Mid-Market Scale-Up Engine';
      timeline = '7 - 12 Minggu';
      teamComposition = '1 Lead Systems Architect, 2 Senior Developers, 1 Automation Engineer';
      deliverables = 'Sistem Terpadu Kustom, Integrasi AI Otomasi, Pelatihan Operasional Internal';
    }

    if (scale === 'high') {
      timeline = segment === 'startup' ? '8 - 12 Minggu' : '10 - 16 Minggu';
    }

    return { tierName, timeline, teamComposition, deliverables };
  };

  const est = getEstimation();

  const handleProceed = () => {
    const data = {
      segment,
      serviceFocus,
      scale,
      compliance,
      summary: `${est.tierName} (${est.timeline})`
    };
    onOpenConsultationWithData(data);
  };

  return (
    <section className="section-padding estimator-section" id="estimator">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            04 // SCOPING & ARCHITECTURE SIZING
          </span>
          <h2 className="section-title">
            Kalkulator Blueprint & <span className="text-highlight">Estimasi Solusi</span>
          </h2>
          <p className="section-description">
            Dapatkan estimasi awal cakupan rekayasa, komposisi tim arsitek, dan linimasa implementasi sesuai profil dan skala organisasi Anda.
          </p>
        </div>

        <div className="estimator-layout card-modern">
          {/* Left Column: Form Controls */}
          <div className="estimator-inputs">
            {/* Step 1: Segment */}
            <div className="input-group-box">
              <label className="input-label">1. Profil Organisasi / Perusahaan:</label>
              <div className="choice-grid">
                <button
                  type="button"
                  className={`choice-btn ${segment === 'enterprise' ? 'selected' : ''}`}
                  onClick={() => setSegment('enterprise')}
                >
                  <span className="choice-title">Enterprise / Korporasi</span>
                  <span className="choice-desc">Skala besar, kepatuhan ketat, jutaan pengguna</span>
                </button>
                <button
                  type="button"
                  className={`choice-btn ${segment === 'sme' ? 'selected' : ''}`}
                  onClick={() => setSegment('sme')}
                >
                  <span className="choice-title">Mid-Market / Komersial</span>
                  <span className="choice-desc">Ekspansi skala, otomatisasi proses & efisiensi</span>
                </button>
                <button
                  type="button"
                  className={`choice-btn ${segment === 'startup' ? 'selected' : ''}`}
                  onClick={() => setSegment('startup')}
                >
                  <span className="choice-title">High-Growth Startup</span>
                  <span className="choice-desc">Kecepatan rilis, MVP ke skala, siap pendanaan</span>
                </button>
              </div>
            </div>

            {/* Step 2: Service Focus */}
            <div className="input-group-box">
              <label className="input-label">2. Fokus Utama Rekayasa:</label>
              <div className="choice-grid">
                <button
                  type="button"
                  className={`choice-btn ${serviceFocus === 'ai-operations' ? 'selected' : ''}`}
                  onClick={() => setServiceFocus('ai-operations')}
                >
                  <span className="choice-title">AI-Driven Operations</span>
                  <span className="choice-desc">Autonomous workflow, LLM privat, RAG</span>
                </button>
                <button
                  type="button"
                  className={`choice-btn ${serviceFocus === 'legacy-modernization' ? 'selected' : ''}`}
                  onClick={() => setServiceFocus('legacy-modernization')}
                >
                  <span className="choice-title">Legacy Modernization</span>
                  <span className="choice-desc">Dekonstruksi monolitik & cloud migration</span>
                </button>
                <button
                  type="button"
                  className={`choice-btn ${serviceFocus === 'enterprise-web' ? 'selected' : ''}`}
                  onClick={() => setServiceFocus('enterprise-web')}
                >
                  <span className="choice-title">Web & Mobile Architecture</span>
                  <span className="choice-desc">Platform berkecepatan tinggi kustom</span>
                </button>
                <button
                  type="button"
                  className={`choice-btn ${serviceFocus === 'full-suite' ? 'selected' : ''}`}
                  onClick={() => setServiceFocus('full-suite')}
                >
                  <span className="choice-title">Full Enterprise Overhaul</span>
                  <span className="choice-desc">Kombinasi AI + Modernisasi + Web/App</span>
                </button>
              </div>
            </div>

            {/* Step 3: Concurrency Scale */}
            <div className="input-group-box">
              <label className="input-label">3. Skala Transaksi / Pengguna Harian:</label>
              <div className="choice-pills">
                <button
                  type="button"
                  className={`pill-btn ${scale === 'standard' ? 'selected' : ''}`}
                  onClick={() => setScale('standard')}
                >
                  &lt; 25.000 Transaksi / Hari
                </button>
                <button
                  type="button"
                  className={`pill-btn ${scale === 'medium' ? 'selected' : ''}`}
                  onClick={() => setScale('medium')}
                >
                  25.000 - 150.000 Transaksi / Hari
                </button>
                <button
                  type="button"
                  className={`pill-btn ${scale === 'high' ? 'selected' : ''}`}
                  onClick={() => setScale('high')}
                >
                  &gt; 150.000 (Misi Kritis / Masif)
                </button>
              </div>
            </div>

            {/* Step 4: Security Standard */}
            <div className="input-group-box">
              <label className="input-label">4. Standar Keamanan & Tata Kelola:</label>
              <div className="choice-pills">
                <button
                  type="button"
                  className={`pill-btn ${compliance === 'standard' ? 'selected' : ''}`}
                  onClick={() => setCompliance('standard')}
                >
                  Enkripsi Standard & Role-Based Auth
                </button>
                <button
                  type="button"
                  className={`pill-btn ${compliance === 'iso' ? 'selected' : ''}`}
                  onClick={() => setCompliance('iso')}
                >
                  Kepatuhan Standar ISO 27001 / OJK / Bank
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Scope Preview & Conversion Box */}
          <div className="estimator-summary-card">
            <div className="summary-card-inner card-dark">
              <div className="summary-badge">
                <Sparkles size={14} color="#FF823A" />
                <span>PREDIKSI REKAYASA SISTEM</span>
              </div>

              <h3 className="summary-tier-title">{est.tierName}</h3>
              <p className="summary-subtitle">Spesifikasi Arsitektur yang Direkomendasikan OraRose Tech</p>

              <div className="summary-specs-list">
                <div className="spec-row">
                  <div className="spec-icon-wrap">
                    <Clock size={18} className="text-orange" />
                  </div>
                  <div>
                    <span className="spec-label">Estimasi Linimasa Eksekusi:</span>
                    <strong className="spec-val">{est.timeline}</strong>
                  </div>
                </div>

                <div className="spec-row">
                  <div className="spec-icon-wrap">
                    <Users size={18} className="text-orange" />
                  </div>
                  <div>
                    <span className="spec-label">Formasi Squad Engineering:</span>
                    <strong className="spec-val">{est.teamComposition}</strong>
                  </div>
                </div>

                <div className="spec-row">
                  <div className="spec-icon-wrap">
                    <FileCheck size={18} className="text-orange" />
                  </div>
                  <div>
                    <span className="spec-label">Paket Luaran Deliverable:</span>
                    <strong className="spec-val">{est.deliverables}</strong>
                  </div>
                </div>

                <div className="spec-row">
                  <div className="spec-icon-wrap">
                    <ShieldCheck size={18} className="text-green" />
                  </div>
                  <div>
                    <span className="spec-label">Jaminan Kualitas:</span>
                    <strong className="spec-val">Jaminan Kualitas & SLA Dukungan Enterprise</strong>
                  </div>
                </div>
              </div>

              <div className="summary-cta-block">
                <SpecularButton
                  type="button"
                  onClick={handleProceed}
                  size="lg"
                  baseColor="#FF823A"
                  lineColor="#FFFFFF"
                  tint="#FF823A"
                  tintOpacity={0.92}
                  textColor="#FFFFFF"
                  intensity={1.4}
                  autoAnimate={true}
                  radius={16}
                  className="w-full-btn"
                >
                  <span>Dapatkan Dokumen Penawaran Resmi</span>
                  <ArrowRight size={18} />
                </SpecularButton>

                <p className="summary-guarantee-note">
                  <CheckCircle2 size={13} className="text-green" />
                  Kerahasiaan data terjamin di bawah Non-Disclosure Agreement (NDA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
