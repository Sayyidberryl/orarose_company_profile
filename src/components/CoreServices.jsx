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
      title: 'AI & Otomasi Operasional',
      subtitle: 'Otomasi Cerdas Alur Kerja Bisnis',
      desc: 'Mentransformasi proses manual menjadi alur kerja otomatis yang terintegrasi dengan data internal perusahaan dengan kontrol data dan deployment terisolasi.',
      features: [
        'Otomasi alur kerja & tugas operasional rutin',
        'Asisten AI cerdas berbasis data privat perusahaan',
        'Analisis prediktif terarah untuk percepatan keputusan'
      ],
      metric: 'Target: Pengurangan waktu proses repetitif & eliminasi kesalahan manual'
    },
    {
      id: 'legacy-modernization',
      badge: 'INFRASTRUCTURE UPGRADE',
      icon: RefreshCw,
      title: 'Modernisasi Sistem Kritis',
      subtitle: 'Pembaruan Sistem Lama ke Cloud',
      desc: 'Memperbarui aplikasi dan database lama yang lambat menjadi sistem modern yang andal dan terukur dengan minim gangguan terhadap operasional.',
      features: [
        'Migrasi sistem & data dengan minim gangguan operasional',
        'Arsitektur cloud modern yang lebih efisien & stabil',
        'Peningkatan performa respon dan ketahanan sistem'
      ],
      metric: 'Target: Efisiensi biaya infrastruktur & sistem lebih tangguh'
    },
    {
      id: 'enterprise-architecture',
      badge: 'DIGITAL PLATFORMS',
      icon: Smartphone,
      title: 'Platform Web & Mobile',
      subtitle: 'Aplikasi Bisnis Skala Besar',
      desc: 'Membangun platform web dan aplikasi mobile kustom berkinerja tinggi dengan standar keamanan korporasi yang siap mendukung skalabilitas bisnis Anda.',
      features: [
        'Aplikasi web & mobile modern dengan performa responsif',
        'Integrasi API dengan authentication, authorization, encryption, dan audit logging',
        'Pilihan model fleksibel: platform siap pakai (SaaS) maupun kustom'
      ],
      metric: 'Target: Performa responsif dan stabil pada beban tinggi'
    }
  ];

  return (
    <section className="section-padding services-section" id="services">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            SOLUSI REKAYASA // CORE CAPABILITIES
          </span>
          <h2 className="section-title">
            Solusi Rekayasa: <span className="text-highlight">AI &amp; Sistem Modern</span> untuk Bisnis
          </h2>
          <p className="section-description">
            Pendekatan rekayasa terarah untuk mengotomasi alur kerja, meremajakan sistem lama, dan membangun platform digital tangguh yang siap mendukung pertumbuhan perusahaan Anda.
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
                    <span className="impact-label">Fokus:</span>
                    <span className="impact-val">{service.metric}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="btn btn-secondary service-action-btn"
                  >
                    <span>Diskusikan Solusi Ini</span>
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
