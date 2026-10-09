import React, { useState } from 'react';
import { Lightbulb, TrendingUp, Cpu, Smile, Shield, Check, Sparkles } from 'lucide-react';

export default function BrandPhilosophy() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'innovation',
      title: 'Kreativitas & Inovasi',
      subtitle: 'Energi Jingga yang Melahirkan Terobosan',
      color: '#FF823A',
      icon: Lightbulb,
      description:
        'Warna jingga murni (#FF823A) merangsang aktivitas kognitif, ketajaman analisis, dan keberanian melahirkan gagasan disruptif. Di OraRose Tech, inovasi bukan sekadar jargon, melainkan algoritma dan arsitektur nyata yang memecahkan hambatan kompleks komputasi enterprise.',
      keyTakeaways: [
        'Eksplorasi berani pada arsitektur AI dan agentic workflows',
        'Riset mendalam sebelum implementasi teknologi baru',
        'Solusi kreatif yang menyeimbangkan kecanggihan dan kemudahan pakai'
      ]
    },
    {
      id: 'growth',
      title: 'Pertumbuhan yang Dinamis',
      subtitle: 'Mawar Mekar Menuju Puncak Keberhasilan',
      color: '#FF823A',
      icon: TrendingUp,
      description:
        'Bentuk kelopak mawar yang mekar melambangkan organisme bisnis yang terus bertumbuh, beradaptasi dengan disrupsi pasar, dan secara konsisten bergerak menuju puncak kesuksesan. Kami merancang sistem yang tidak pernah usang—arsitektur yang siap diskalakan dari ribuan menjadi puluhan juta pengguna tanpa refactoring besar.',
      keyTakeaways: [
        'Arsitektur cloud-native yang elastis terhadap lonjakan trafik',
        'Roadmap teknologi bertahap yang selaras dengan fase pendanaan & omset',
        'Skalabilitas horizontal dengan efisiensi biaya infrastruktur maksimal'
      ]
    },
    {
      id: 'productivity',
      title: 'Semangat & Produktivitas',
      subtitle: 'Kelopak Rapi sebagai Struktur Rekayasa Tangguh',
      color: '#253B60',
      icon: Cpu,
      description:
        'Kelopak mawar yang tersusun rapi secara simetris dan geometris menyimbolkan sistem kerja engineering yang sangat terstruktur, terdokumentasi, dan presisi. Dipadukan dengan etos kerja berenergi tinggi, kami memastikan deliverables diserahkan tepat waktu dengan kode standar korporasi multinasional.',
      keyTakeaways: [
        'Penerapan clean architecture, automated testing, dan CI/CD pipeline ketat',
        'Dokumentasi komprehensif untuk kemandirian tim internal klien',
        'Siklus sprint gesit dengan visibilitas progres transparan 100%'
      ]
    },
    {
      id: 'accessible',
      title: 'Pendekatan yang Ramah',
      subtitle: 'Accessible, Hangat, & Human-Centric Tech',
      color: '#FF823A',
      icon: Smile,
      description:
        'Berbeda dengan mawar merah yang berjarak atau mawar hitam yang dingin dan intimidatif, mawar jingga memancarkan kehangatan, keramahan, dan keterbukaan. Kami menghilangkan kerumitan bahasa teknis yang membingungkan dan membangun kemitraan setara yang nyaman bagi para pemangku kepentingan.',
      keyTakeaways: [
        'Komunikasi transparan tanpa jargon teknis berlebihan',
        'Sesi transfer ilmu dan pendampingan pasca-deployment',
        'Dukungan responsif dengan waktu tanggap prioritas tinggi'
      ]
    },
    {
      id: 'hexagon',
      title: 'Fondasi Heksagonal',
      subtitle: 'Stabilitas & Keamanan Korporat (#253B60)',
      color: '#253B60',
      icon: Shield,
      description:
        'Bingkai heksagonal luar dengan warna Navy Blue (#253B60) merepresentasikan struktur molekuler paling stabil di alam semesta. Ini adalah pondasi integritas institusional, kepatuhan tata kelola, dan keamanan data tingkat perbankan yang menopang seluruh kreativitas di dalamnya.',
      keyTakeaways: [
        'Zero-trust security protocol & enkripsi data tingkat enterprise',
        'Komitmen kepatuhan regulasi lokal & standar internasional',
        'Ketahanan sistem (fault tolerance) dengan mitigasi risiko otomatis'
      ]
    }
  ];

  const currentPillar = pillars[activeTab];

  return (
    <section className="section-padding philosophy-section" id="brand-story">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <Sparkles size={14} />
            FILOSOFI & IDENTITAS BRAND
          </span>
          <h2 className="section-title">
            Makna di Balik <span className="text-highlight">OraRose Tech</span>
          </h2>
          <p className="section-description">
            Nama <em>OraRose</em> memadukan <strong>Orange Rose</strong> dan <strong>Intelligent Technology</strong>. Kami percaya bahwa teknologi masa depan harus bertenaga tinggi, presisi layaknya rekayasa heksagonal, namun tetap hangat dan memberdayakan manusia.
          </p>
        </div>

        <div className="philosophy-layout">
          {/* Visual Brand Card */}
          <div className="philosophy-visual-card card-modern">
            <div className="emblem-container">
              <img 
                src="/Orarose_logo.png" 
                alt="Logo Resmi OraRose Tech" 
                className="emblem-img emblem-official-img"
              />
              <div className="emblem-badge-overlay">
                <span className="emblem-tag">BRAND EMBLEM RESMI</span>
                <span className="emblem-corp">OraRose Tech</span>
              </div>
            </div>

            <div className="color-palette-bar">
              <span className="palette-label">Karakter Spektrum Warna:</span>
              <div className="color-swatches">
                <div className="color-swatch-item">
                  <span className="swatch-bubble" style={{ background: '#FF823A' }}></span>
                  <div className="swatch-info">
                    <strong>#FF823A</strong>
                    <span>Utama Oranye (Inovasi & Mawar)</span>
                  </div>
                </div>
                <div className="color-swatch-item">
                  <span className="swatch-bubble" style={{ background: '#253B60' }}></span>
                  <div className="swatch-info">
                    <strong>#253B60</strong>
                    <span>Navy Blue (Heksagon & Otoritas)</span>
                  </div>
                </div>
                <div className="color-swatch-item">
                  <span className="swatch-bubble" style={{ background: '#F8F5F0', border: '1px solid #CBD5E1' }}></span>
                  <div className="swatch-info">
                    <strong>#F8F5F0</strong>
                    <span>Ivory Canvas (Latar Elegan)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Pillars Explorer */}
          <div className="philosophy-interactive">
            {/* Nav Pill Tabs */}
            <div className="pillar-tabs-list">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(idx)}
                    className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <IconComponent size={18} className="tab-icon" />
                    <span>{pillar.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card Detail */}
            <div className="pillar-detail-card card-modern">
              <div className="pillar-detail-header">
                <div 
                  className="pillar-icon-box"
                  style={{ 
                    backgroundColor: currentPillar.color === '#FF823A' ? 'var(--primary-orange-light)' : 'var(--navy-soft)',
                    color: currentPillar.color 
                  }}
                >
                  {React.createElement(currentPillar.icon, { size: 26 })}
                </div>
                <div>
                  <h3 className="pillar-headline">{currentPillar.title}</h3>
                  <span className="pillar-subhead">{currentPillar.subtitle}</span>
                </div>
              </div>

              <p className="pillar-text">{currentPillar.description}</p>

              <div className="pillar-takeaways">
                <span className="takeaways-title">Manifestasi Rekayasa:</span>
                <ul className="takeaways-list">
                  {currentPillar.keyTakeaways.map((item, i) => (
                    <li key={i} className="takeaway-item">
                      <div className="check-bullet">
                        <Check size={14} color="#FFFFFF" />
                      </div>
                      <span>{item}</span>
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
