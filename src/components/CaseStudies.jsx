import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CaseStudies({ onOpenConsultation }) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      clientSector: 'Fintech & Perbankan Digital',
      category: 'AI-DRIVEN OPERATIONS & ZERO DOWNTIME',
      title: 'Modernisasi Sistem Core Transaksi & Deteksi Fraud Berbasis AI Real-Time',
      description:
        'Klien perbankan menghadapi lonjakan jutaan transaksi harian yang membebani arsitektur monolitik mereka. OraRose Tech merancang ulang pipeline pembayaran dengan arsitektur microservices terdistribusi dan menyematkan model AI pendeteksi fraud otonom.',
      metrics: [
        { label: 'Reduksi False Positive Fraud', value: '-78%' },
        { label: 'Peningkatan Throughput Transaksi', value: '14x Lipat' },
        { label: 'Latensi Respon API Rata-Rata', value: '< 24ms' },
        { label: 'Downtime Selama Migrasi', value: '0 Detik' }
      ],
      techStack: ['Go', 'Kafka Cluster', 'FastAPI AI Engine', 'PostgreSQL HA', 'Kubernetes'],
      testimonial:
        '"OraRose Tech bukan sekadar agensi software biasa, mereka adalah arsitek sistem sejati. Migrasi jutaan transaksi tanpa downtime 1 detik pun adalah prestasi rekayasa yang luar biasa."'
    },
    {
      clientSector: 'Manufaktur & Rantai Pasok Skala Menengah (SME)',
      category: 'SCALE-UP SME MODERNIZATION',
      title: 'Transformasi Intelligent ERP & Otomasi Pemrosesan Faktur Mandiri',
      description:
        'Perusahaan distribusi skala menengah mengalami bottleneck parah dalam pemrosesan ribuan surat jalan dan rekonsiliasi manual. Kami mengimplementasikan platform terpadu dengan agen OCR kognitif dan otomatisasi alur kerja gudang.',
      metrics: [
        { label: 'Kecepatan Proses Order Gudang', value: '+320%' },
        { label: 'Efisiensi Biaya Operasional', value: 'Rp 850 Jt/Th' },
        { label: 'Tingkat Akurasi Rekonsiliasi', value: '99.9%' },
        { label: 'Waktu Onboarding Karyawan', value: '< 3 Hari' }
      ],
      techStack: ['React', 'Node.js', 'Python OCR Vision', 'Redis', 'Docker'],
      testimonial:
        '"Dengan pendekatan OraRose yang ramah dan solutif, digitalisasi menyeluruh berhasil kami wujudkan tanpa mengganggu operasional harian kami yang padat."'
    },
    {
      clientSector: 'Startup HealthTech Series A',
      category: 'ENTERPRISE WEB & AI ARCHITECTURE',
      title: 'Pembangunan Platform Telemedisin & Asisten Diagnostik Terenkripsi',
      description:
        'Startup telemedicine yang sedang mempersiapkan audit investor membutuhkan platform mobile dan web yang mampu menjaga privasi data pasien dengan latensi streaming konsultasi minimum dan asisten AI terakreditasi.',
      metrics: [
        { label: 'Kepuasan Pengguna (CSAT)', value: '4.9 / 5.0' },
        { label: 'Waktu Latensi Chat Medis', value: '< 80ms' },
        { label: 'Audit Kepatuhan Keamanan', value: '100% Passed' },
        { label: 'Waktu Peluncuran Produk', value: '7 Minggu' }
      ],
      techStack: ['React Native', 'Next.js', 'WebRTC', 'FastAPI', 'AWS HIPAA-Compliant'],
      testimonial:
        '"Kode yang rapi, terstruktur, dan arsitektur yang solid membuat proses due-diligence investor kami berjalan mulus tanpa catatan merah."'
    }
  ];

  const current = cases[activeCase];

  return (
    <section className="section-padding casestudies-section" id="case-studies">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            05 // VERIFIED ENTERPRISE CASE STUDIES
          </span>
          <h2 className="section-title">
            Transformasi Nyata dengan <span className="text-highlight">Hasil Terukur</span>
          </h2>
          <p className="section-description">
            Keberhasilan rekayasa kami tercermin dari efisiensi riil, kecepatan sistem terdistribusi, dan pertumbuhan profitabilitas mitra-mitra korporat OraRose Tech.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="case-study-nav">
          {cases.map((c, i) => (
            <button
              key={i}
              className={`case-nav-btn ${activeCase === i ? 'active' : ''}`}
              onClick={() => setActiveCase(i)}
            >
              <span className="case-nav-sector">{c.clientSector}</span>
              <span className="case-nav-badge">{c.category}</span>
            </button>
          ))}
        </div>

        {/* Main Case Study Spotlight */}
        <div className="case-study-spotlight card-modern">
          <div className="case-header-row">
            <div>
              <span className="case-cat-pill">{current.category}</span>
              <h3 className="case-title">{current.title}</h3>
              <p className="case-desc">{current.description}</p>
            </div>
          </div>

          {/* Metrics 4-Grid */}
          <div className="case-metrics-grid">
            {current.metrics.map((m, idx) => (
              <div key={idx} className="metric-box">
                <span className="metric-val text-orange">{m.value}</span>
                <span className="metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Testimonial Quote */}
          <div className="case-quote-box">
            <p className="quote-text">{current.testimonial}</p>
            <div className="quote-author-row">
              <span className="quote-role">— Head of Engineering & Digital Transformation</span>
              <div className="quote-badge">
                <ShieldCheck size={14} className="text-green" />
                <span>Verified Client Partnership</span>
              </div>
            </div>
          </div>

          <div className="case-footer-row">
            <div className="tech-used-wrap">
              <span className="tech-lbl">Stack Rekayasa:</span>
              <div className="tech-pill-list">
                {current.techStack.map((tech, ti) => (
                  <span key={ti} className="tech-mini-pill">{tech}</span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation(`Studi Kasus: ${current.title}`)}
              className="btn btn-primary"
            >
              <span>Diskusikan Kebutuhan Serupa</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
