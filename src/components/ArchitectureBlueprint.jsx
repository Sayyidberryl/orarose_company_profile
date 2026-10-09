import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';
import './ArchitectureBlueprint.css';

/**
 * Clean & Unique Bento Grid Transformation Section
 * Inspired by React Bits & modern Linear/Apple bento design.
 * Human-designed, clean typography, generous whitespace, zero AI-gimmick clutter.
 */
export default function ArchitectureBlueprint({ onOpenConsultation }) {
  const [activeComparison, setActiveComparison] = useState('after');

  return (
    <section className="bento-blueprint-section" id="problem-solutions">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="bento-section-header">
          <div className="bento-eyebrow">
            <span className="bento-eyebrow-dot" />
            <span>REALITAS BISNIS MODERN</span>
          </div>
          <h2 className="bento-section-headline">
            Dunia Sudah Bergerak ke Era Cerdas.
            <br />
            <span className="text-highlight">Mengapa Operasional Anda Masih Manual?</span>
          </h2>
          <p className="bento-section-subheadline">
            Teknologi AI dan otomasi alur kerja kini memudahkan perusahaan memangkas pekerjaan rutin 
            dan mencegah human-error. Kami merekayasa sistem mandiri agar bisnis Anda berjalan lebih cepat, 
            hemat biaya, dan mengekstrak nilai maksimal.
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="bento-grid-container">
          
          {/* CARD 1: Large Narrative & Transformation Pill (Spans 2 columns / 8 of 12) */}
          <SpotlightCard 
            className="bento-card bento-card-hero"
            spotlightColor="rgba(255, 130, 58, 0.14)"
          >
            <div className="bento-hero-wrapper">
              <div className="bento-card-tag">
                <Sparkles size={14} className="text-orange" />
                <span>Transformasi Proses Bisnis</span>
              </div>

              <h3 className="bento-hero-title">
                Dari beban operasional yang menyita waktu, menuju sistem mandiri yang melipatgandakan profit.
              </h3>

              <p className="bento-hero-text">
                Banyak perusahaan kehilangan puluhan jam kerja per minggu karena staf masih berkutat 
                dengan rekap data manual, pengecekan berkas satu per satu, dan aplikasi lama yang sering bermasalah. 
                Kami hadir membantu Anda beralih ke cara kerja modern.
              </p>

              {/* Clean Interactive Comparison Widget */}
              <div className="bento-comparison-widget">
                <div className="comparison-tabs">
                  <button 
                    type="button"
                    className={`comparison-tab-btn ${activeComparison === 'before' ? 'active' : ''}`}
                    onClick={() => setActiveComparison('before')}
                  >
                    <AlertCircle size={15} />
                    <span>Sebelum (Cara Manual)</span>
                  </button>
                  <button 
                    type="button"
                    className={`comparison-tab-btn ${activeComparison === 'after' ? 'active' : ''}`}
                    onClick={() => setActiveComparison('after')}
                  >
                    <CheckCircle2 size={15} />
                    <span>Bersama OraRose (Sistem Cerdas)</span>
                  </button>
                </div>

                <div className="comparison-card-display">
                  {activeComparison === 'before' ? (
                    <div className="comparison-content comparison-before">
                      <div className="comparison-row">
                        <span className="comparison-bullet before-bullet" />
                        <div>
                          <strong>Rekap Manual 3–5 Hari:</strong> Staf lembur merekap data dari berbagai file spreadsheet yang terpisah.
                        </div>
                      </div>
                      <div className="comparison-row">
                        <span className="comparison-bullet before-bullet" />
                        <div>
                          <strong>Risiko Human-Error:</strong> Selisih angka saat input transaksi yang memicu komplain pelanggan.
                        </div>
                      </div>
                      <div className="comparison-row">
                        <span className="comparison-bullet before-bullet" />
                        <div>
                          <strong>Sistem Terfragmentasi &amp; Kaku:</strong> Aplikasi terpisah-pisah, data tidak sinkron, dan sulit disesuaikan dengan kebutuhan alur kerja nyata.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="comparison-content comparison-after">
                      <div className="comparison-row">
                        <span className="comparison-bullet after-bullet" />
                        <div>
                          <strong>Proses Otomatis 0.8 Detik:</strong> Validasi data, sinkronisasi, dan laporan terbit otomatis 24/7.
                        </div>
                      </div>
                      <div className="comparison-row">
                        <span className="comparison-bullet after-bullet" />
                        <div>
                          <strong>Presisi 99.9%:</strong> Standarisasi alur kerja mencegah salah hitung dan kebocoran operasional.
                        </div>
                      </div>
                      <div className="comparison-row">
                        <span className="comparison-bullet after-bullet" />
                        <div>
                          <strong>Solusi Cerdas &amp; Fleksibel:</strong> Opsi SaaS siap pakai untuk adopsi cepat, maupun aplikasi kustom yang terintegrasi penuh.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bento-hero-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenConsultation && onOpenConsultation('Konsultasi Optimasi Bisnis')}
                >
                  <span>Diskusikan Kebutuhan Bisnis Anda</span>
                  <ArrowRight size={16} />
                </button>
                <span className="bento-footer-note">Konsultasi langsung bersama Solution Architect kami</span>
              </div>
            </div>
          </SpotlightCard>

          {/* CARD 2: Workflow Automation (Spans 1 column / 4 of 12) */}
          <SpotlightCard 
            className="bento-card bento-card-stat"
            spotlightColor="rgba(255, 130, 58, 0.16)"
          >
            <div className="bento-stat-wrapper">
              <div className="bento-card-header">
                <div className="bento-icon-box bg-orange-subtle">
                  <Zap size={22} className="text-orange" />
                </div>
                <span className="bento-badge-pill">01 / Otomasi</span>
              </div>

              <div className="bento-metric-block">
                <div className="bento-metric-value">70%+</div>
                <div className="bento-metric-caption">Waktu kerja rutin dipangkas</div>
              </div>

              <h4 className="bento-card-title">Otomasi Alur Kerja</h4>
              <p className="bento-card-desc">
                Hentikan entri data berulang dan pengecekan berkas manual. Alur kerja otomatis 
                berjalan seketika dari input pelanggan hingga laporan keuangan.
              </p>

              <div className="bento-card-bottom">
                <button
                  type="button"
                  className="bento-action-link"
                  onClick={() => onOpenConsultation && onOpenConsultation('Solusi Otomasi Alur Kerja')}
                >
                  <span>Pelajari Solusi Otomasi</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </SpotlightCard>

          {/* CARD 3: Flexible Delivery Models (SaaS & Custom App) */}
          <SpotlightCard 
            className="bento-card bento-card-stat"
            spotlightColor="rgba(255, 130, 58, 0.16)"
          >
            <div className="bento-stat-wrapper">
              <div className="bento-card-header">
                <div className="bento-icon-box bg-navy-subtle">
                  <ShieldCheck size={22} className="text-navy" />
                </div>
                <span className="bento-badge-pill">02 / Model Solusi</span>
              </div>

              <div className="bento-metric-block">
                <div className="bento-metric-value">SaaS &amp; App</div>
                <div className="bento-metric-caption">Fleksibel sesuai skala bisnis</div>
              </div>

              <h4 className="bento-card-title">Solusi SaaS &amp; Aplikasi Kustom</h4>
              <p className="bento-card-desc">
                Pilih model yang paling tepat: gunakan platform SaaS berbasis cloud yang siap pakai untuk adopsi cepat, 
                atau kembangkan aplikasi kustom yang dirancang khusus untuk alur operasional unik bisnis Anda.
              </p>

              <div className="bento-card-bottom">
                <button
                  type="button"
                  className="bento-action-link"
                  onClick={() => onOpenConsultation && onOpenConsultation('Konsultasi Model Solusi (SaaS & App)')}
                >
                  <span>Pelajari Pilihan Solusi</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </SpotlightCard>

          {/* CARD 4: Modernization & Speed */}
          <SpotlightCard 
            className="bento-card bento-card-stat"
            spotlightColor="rgba(255, 130, 58, 0.16)"
          >
            <div className="bento-stat-wrapper">
              <div className="bento-card-header">
                <div className="bento-icon-box bg-amber-subtle">
                  <Layers size={22} className="text-amber" />
                </div>
                <span className="bento-badge-pill">03 / Keandalan</span>
              </div>

              <div className="bento-metric-block">
                <div className="bento-metric-value">10x</div>
                <div className="bento-metric-caption">Respon sistem lebih cepat</div>
              </div>

              <h4 className="bento-card-title">Modernisasi Tanpa Hambatan</h4>
              <p className="bento-card-desc">
                Sistem internal lama diperbarui secara bertahap tanpa menghentikan operasional harian. 
                Bebas macet dan error saat lonjakan transaksi pelanggan.
              </p>

              <div className="bento-card-bottom">
                <button
                  type="button"
                  className="bento-action-link"
                  onClick={() => onOpenConsultation && onOpenConsultation('Modernisasi Arsitektur')}
                >
                  <span>Pelajari Modernisasi</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </SpotlightCard>

          {/* CARD 5: Action & Direct Consultation */}
          <SpotlightCard 
            className="bento-card bento-card-cta"
            spotlightColor="rgba(255, 130, 58, 0.22)"
          >
            <div className="bento-cta-wrapper">
              <div className="bento-cta-top">
                <div className="bento-icon-box bg-orange-subtle">
                  <Sparkles size={22} className="text-orange" />
                </div>
                <span className="bento-badge-pill">Langkah Selanjutnya</span>
              </div>

              <h4 className="bento-cta-title">
                Mulai dari Masalah Nyata di Bisnis Anda
              </h4>

              <p className="bento-cta-desc">
                Tanpa komitmen awal. Ceritakan proses manual yang paling menyita waktu di perusahaan Anda, 
                dan tim kami akan memetakan solusi arsitektur terbaik.
              </p>

              <div className="bento-cta-btn-wrap">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => onOpenConsultation && onOpenConsultation('Konsultasi Cepat')}
                >
                  <span>Jadwalkan Diskusi Awal</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}
