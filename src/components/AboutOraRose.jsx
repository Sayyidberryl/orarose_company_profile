import React from 'react';
import { 
  Code2, 
  Target, 
  KeyRound, 
  Briefcase, 
  ShieldCheck, 
  Server, 
  FileCheck2,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function AboutOraRose({ onOpenConsultation }) {
  const principles = [
    {
      icon: Code2,
      title: 'Engineering First',
      tagline: 'Systems are designed around business requirements, not technology trends.',
      desc: 'Sistem dirancang berdasarkan kebutuhan alur kerja dan ketahanan operasional nyata perusahaan, bukan sekadar mengikuti tren teknologi sesaat.'
    },
    {
      icon: Target,
      title: 'AI with Purpose',
      tagline: 'AI is applied where it creates measurable operational value.',
      desc: 'AI diterapkan secara terarah pada titik-titik yang menghasilkan dampak efisiensi terukur dan menyelesaikan hambatan operasional nyata.'
    },
    {
      icon: KeyRound,
      title: 'Flexible Delivery & Data Control',
      tagline: 'Solusi siap pakai (SaaS) atau custom app dengan keamanan data terstandar.',
      desc: 'Baik melalui modul SaaS berbasis cloud maupun aplikasi pesanan kustom, privasi dan integritas data bisnis Anda dikelola dengan standar proteksi enterprise.'
    }
  ];

  const comparisons = [
    {
      dimension: 'Titik Awal Proyek',
      vendor: 'Mulai dari tren teknologi & framework baru',
      orarose: 'Mulai dari pemahaman proses bisnis & kendala riil'
    },
    {
      dimension: 'Fokus Solusi',
      vendor: 'Fokus sekadar membuat aplikasi selesai',
      orarose: 'Fokus menyelesaikan alur kerja (workflow) operasional'
    },
    {
      dimension: 'Model Solusi & Integrasi',
      vendor: 'Kaku, modul terbatas, dan tertutup untuk integrasi',
      orarose: 'Fleksibel (SaaS siap pakai atau Custom App) dengan integrasi API terbuka'
    },
    {
      dimension: 'Penerapan AI',
      vendor: 'AI sebagai fitur tempelan / gimmick marketing',
      orarose: 'AI sebagai automation layer yang fungsional & terukur'
    },
    {
      dimension: 'Fase Akhir Proyek',
      vendor: 'Deployment selesai lalu ditinggalkan',
      orarose: 'Dokumentasi lengkap, handover, & knowledge transfer'
    },
    {
      dimension: 'Pemeliharaan Kode',
      vendor: 'Spaghetti code & sulit dirawat tim internal',
      orarose: 'Arsitektur modular yang dirancang untuk maintainability'
    }
  ];

  const whyOraRose = [
    {
      icon: Briefcase,
      title: 'Business-First Engineering',
      desc: 'Kami memulai dari pemahaman mendalam atas masalah bisnis Anda, bukan memaksakan pilihan teknologi sebelum memahami konteks operasional.'
    },
    {
      icon: FileCheck2,
      title: 'Client-Owned Deliverables',
      desc: 'Source code dan hak kekayaan intelektual hasil pengembangan diserahkan kepada klien sesuai ketentuan kontrak tanpa lock-in.'
    },
    {
      icon: Server,
      title: 'Flexible Deployment',
      desc: 'Mendukung deployment di cloud publik, private cloud, hingga on-premise sesuai kepatuhan regulasi dan standar privasi data internal Anda.'
    },
    {
      icon: ShieldCheck,
      title: 'Engineering Transparency',
      desc: 'Arsitektur sistem, dokumentasi lengkap, dan setiap keputusan teknis disajikan terbuka agar mudah dipahami dan diaudit oleh tim internal klien.'
    }
  ];

  return (
    <section className="section-padding about-section" id="about">
      <div className="section-container">
        {/* Main Who We Are Statement */}
        <div className="section-center about-hero-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            ABOUT ORAROSE // WHO WE ARE
          </span>
          <h2 className="section-title">
            Rekayasa Perangkat Lunak Berbasis <span className="text-highlight">Kebutuhan Riil Bisnis</span>
          </h2>
          <p className="about-lead-statement">
            <strong>OraRose Tech</strong> adalah perusahaan rekayasa teknologi yang berfokus pada pembangunan sistem perangkat lunak cerdas, otomatisasi alur kerja berbasis AI, dan infrastruktur digital modern untuk organisasi yang mengutamakan efisiensi operasional dan ketahanan teknologi jangka panjang.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="about-principles-grid">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard 
                key={idx} 
                className="principle-card"
                spotlightColor="rgba(255, 130, 58, 0.15)"
              >
                <div className="principle-icon-wrapper">
                  <Icon size={24} />
                </div>
                <h3 className="principle-title">{item.title}</h3>
                <span className="principle-tagline">{item.tagline}</span>
                <p className="principle-desc">{item.desc}</p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Positioning Contrast Table: Vendor Biasa vs OraRose Tech */}
        <div className="comparison-table-wrapper card-modern">
          <div className="comparison-header">
            <span className="section-header-badge" style={{ marginBottom: 0 }}>
              <span className="badge-dot"></span>
              PENDEKATAN KAMI // WHY ORAROSE
            </span>
            <h3 className="comparison-title">
              Perbedaan Pendekatan Rekayasa <span className="text-highlight">OraRose Tech</span>
            </h3>
            <p className="comparison-desc">
              Bagaimana kami memposisikan tanggung jawab rekayasa dibanding vendor perangkat lunak konvensional.
            </p>
          </div>

          <div className="table-responsive-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="th-dimension">Dimensi Kerja</th>
                  <th className="th-vendor">Vendor Perangkat Lunak Biasa</th>
                  <th className="th-orarose">OraRose Tech</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i}>
                    <td className="td-dimension">{row.dimension}</td>
                    <td className="td-vendor">
                      <div className="td-content">
                        <X size={15} className="table-x-icon" />
                        <span>{row.vendor}</span>
                      </div>
                    </td>
                    <td className="td-orarose">
                      <div className="td-content">
                        <Check size={16} className="table-check-icon" />
                        <strong>{row.orarose}</strong>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why OraRose 4 Pillars Grid */}
        <div className="why-orarose-block">
          <div className="why-cards-grid">
            {whyOraRose.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div key={idx} className="why-point-card">
                  <div className="why-point-top">
                    <div className="why-point-icon">
                      <Icon size={20} />
                    </div>
                    <h4 className="why-point-title">{point.title}</h4>
                  </div>
                  <p className="why-point-desc">{point.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="why-cta-row">
            <button
              onClick={() => onOpenConsultation()}
              className="btn btn-secondary"
            >
              <span>Diskusikan Kebutuhan Organisasi Anda</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
