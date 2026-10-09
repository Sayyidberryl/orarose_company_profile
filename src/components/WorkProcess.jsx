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
      title: 'Pemahaman Masalah & Proses Bisnis',
      sub: 'Mengidentifikasi akar hambatan alur kerja nyata sebelum menentukan solusi teknologi',
      desc: 'Kami mendengarkan konteks operasional, mewawancarai pengelola proses bisnis harian, dan meninjau kondisi sistem yang ada untuk merumuskan akar masalah serta kriteria keberhasilan yang disepakati.',
      icon: Search,
      timing: 'Fase Awal • 1–2 Pekan',
      activities: [
        'Wawancara mendalam dengan pemangku kepentingan & operator alur kerja',
        'Peninjauan sistem existing, format data, dan hambatan operasional tim',
        'Pemetaan titik bottleneck waktu kerja dan risiko kesalahan manual'
      ],
      deliverable: 'Business Process Map & Problem Definition Document',
      clientOutcome: 'Kejelasan akar masalah operasional & kriteria solusi yang tepat sasaran'
    },
    {
      id: 'assessment',
      number: '02',
      phase: 'ASSESSMENT',
      title: 'Identifikasi Akar Masalah & Peluang',
      sub: 'Analisis kelayakan teknis, integrasi sistem, dan potensi efisiensi terukur',
      desc: 'Tahap bedah teknis untuk mengevaluasi kelayakan integrasi, keamanan aliran data, dan menentukan apakah pendekatan modular, refactoring, atau otomasi AI yang paling efisien.',
      icon: Target,
      timing: 'Analisis Kelayakan • Terukur',
      activities: [
        'Audit kelayakan integrasi API, database, dan protokol keamanan',
        'Identifikasi titik otomasi alur kerja yang memberikan dampak nyata',
        'Penyusunan trade-offs arsitektur teknis dengan mitigasi risiko terencana'
      ],
      deliverable: 'Feasibility Analysis & Optimization Scope',
      clientOutcome: 'Rekomendasi teknis yang masuk akal dan aman untuk diadopsi organisasi'
    },
    {
      id: 'proposal',
      number: '03',
      phase: 'TECHNICAL PROPOSAL',
      title: 'Desain Arsitektur, Ruang Lingkup & Jadwal',
      icon: GitBranch,
      timing: 'Spesifikasi & Rencana Kerja',
      sub: 'Spesifikasi teknis transparan, roadmap bertahap, dan komitmen deliverable',
      desc: 'Menyusun proposal teknis yang berisi technical blueprint arsitektur, batasan deliverable yang eksplisit, pembagian milestone sprint, dan estimasi waktu yang dapat dipertanggungjawabkan.',
      activities: [
        'Desain technical architecture blueprint, skema data, dan antarmuka sistem',
        'Pembagian milestone implementasi ke dalam sprint terukur yang jelas',
        'Penetapan batasan ruang lingkup (scope) resmi tanpa biaya tersembunyi'
      ],
      deliverable: 'Architecture Blueprint & Project Roadmap Agreement',
      clientOutcome: 'Kepastian ruang lingkup, jadwal rilis, dan transparansi komitmen kerja'
    },
    {
      id: 'engineering',
      number: '04',
      phase: 'ENGINEERING',
      title: 'Pengembangan, Integrasi & Pengujian',
      sub: 'Eksekusi kode bersih, integrasi aman, dan pengujian performa ketat',
      desc: 'Fase rekayasa perangkat lunak dengan standar kode bersih, modularitas sistem, integrasi API terproteksi, serta pengujian berkala pada lingkungan staging sebelum siap diluncurkan.',
      icon: Code2,
      timing: 'Sprint Bertahap • Iteratif',
      activities: [
        'Pembangunan modul perangkat lunak berbasis arsitektur teruji',
        'Integrasi API aman dengan enkripsi data dan kontrol otorisasi ketat',
        'Pengujian beban, validasi integritas data, dan simulasi skenario gagal'
      ],
      deliverable: 'Modular Sprints, Secure Integration & QA Reports',
      clientOutcome: 'Sistem yang teruji stabil dan berfungsi optimal sebelum masuk produksi'
    },
    {
      id: 'handover',
      number: '05',
      phase: 'HANDOVER',
      title: 'Aktivasi, Onboarding & Transfer Pengetahuan',
      sub: 'Aktivasi sistem, penyediaan akses/kode, dan pelatihan tim internal klien',
      desc: 'Peluncuran resmi sistem baik melalui aktivasi platform SaaS maupun serah terima kode aplikasi kustom. Kami menyertakan dokumentasi teknis komprehensif dan sesi pelatihan agar tim internal Anda mampu mengoperasikan solusi secara optimal.',
      icon: FileCheck2,
      timing: 'Peluncuran Resmi & Onboarding',
      activities: [
        'Aktivasi deployment, penyediaan akses kredensial, dan konfigurasi sesuai paket',
        'Dokumentasi teknis arsitektur dan panduan penggunaan lengkap',
        'Sesi transfer pengetahuan (knowledge transfer) dan pelatihan tim operasional'
      ],
      deliverable: 'System Access / Deliverables, Technical Documentation & Training',
      clientOutcome: 'Kesiapan operasional penuh dengan dukungan dokumentasi dan kapabilitas tim'
    },
    {
      id: 'support',
      number: '06',
      phase: 'SUPPORT',
      title: 'Pemeliharaan & Pendampingan Berkelanjutan',
      sub: 'Dukungan teknis responsif dan pemantauan stabilitas sistem pasca-rilis',
      desc: 'Pendampingan berkelanjutan untuk menjamin stabilitas sistem, pemantauan performa rutin, dan penanganan kendala teknis secara terstruktur sesuai kesepakatan tingkat layanan (SLA).',
      icon: Headphones,
      timing: 'Pendampingan Operasional',
      activities: [
        'Pemantauan stabilitas sistem dan evaluasi performa berkala',
        'Bantuan teknis responsif dan perbaikan kendala operasional',
        'Konsultasi peningkatan fungsionalitas seiring pertumbuhan kapasitas bisnis'
      ],
      deliverable: 'Maintenance Agreement, System Health Reports & SLA Support',
      clientOutcome: 'Ketenangan operasional dengan pendampingan teknis yang dapat diandalkan'
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
            HOW WE ENGAGE // MODEL KERJA SAMA
          </span>
          <h2 className="section-title">
            Alur Kerja Sama yang <span className="text-highlight">Jelas &amp; Transparan</span>
          </h2>
          <p className="section-description">
            Bagaimana organisasi Anda berkolaborasi dengan OraRose Tech. Enam tahapan terstruktur dari identifikasi awal hingga solusi beroperasi penuh di tangan tim Anda.
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
                    TAHAP {current.number} • {current.phase}
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
                  <span className="activities-header-label">Aktivitas Utama pada Tahap Ini:</span>
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
                    <span>OUTPUT &amp; KELUARAN TAHAP INI</span>
                  </div>

                  <div className="panel-deliverable-item">
                    <span className="deliv-sub-label">Deliverable Resmi:</span>
                    <strong className="deliv-main-val">{current.deliverable}</strong>
                  </div>

                  <div className="panel-outcome-item">
                    <span className="deliv-sub-label">Dampak untuk Klien:</span>
                    <p className="deliv-outcome-text">{current.clientOutcome}</p>
                  </div>

                  <div className="panel-cta-box">
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(`Konsultasi Tahap ${current.number} (${current.phase})`)}
                      className="btn btn-primary"
                    >
                      <span>Mulai Tahap Ini</span>
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
                      {isSelected ? 'Sedang Ditampilkan' : 'Lihat Rincian'}
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
            <h4>Siap Memulai dari Tahap Discovery?</h4>
            <p>Konsultasikan kendala alur kerja atau kebutuhan modernisasi sistem Anda tanpa komitmen di awal.</p>
          </div>
          <button
            onClick={() => onOpenConsultation('Konsultasi Tahap 01 Discovery')}
            className="btn btn-primary"
          >
            <span>Mulai Sesi Discovery</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
