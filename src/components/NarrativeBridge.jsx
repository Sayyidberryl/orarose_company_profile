import React, { useState } from 'react';
import { ArrowRight, Zap, CheckCircle2, XCircle } from 'lucide-react';
import './NarrativeBridge.css';

/**
 * THE AUTONOMOUS SHIFT - Bespoke Editorial Reality Check
 * Luxury Dark Obsidian split-screen console.
 * Stark contrast, authoritative typography, and live telemetry manifest.
 */
export default function NarrativeBridge({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('ops');

  const comparisonData = {
    ops: {
      label: 'Kecepatan Alur Kerja',
      conventional: {
        title: '3–5 Hari Kerja / Divisi',
        desc: 'Rekap spreadsheet manual, pengecekan berkas berulang, dan lembur tak berujung saat tutup buku.'
      },
      autonomous: {
        title: '0.8 Detik Real-Time',
        desc: 'Pipeline AI & RPA mengeksekusi verifikasi silang otomatis seketika saat data masuk, 24/7 tanpa henti.'
      },
      metric: 'Efisiensi Waktu: +85%'
    },
    quality: {
      label: 'Akurasi & Human Error',
      conventional: {
        title: '5–12% Potensi Salah Input',
        desc: 'Kelelahan staf memicu salah entri angka penting, selisih laporan stok, dan komplain pelanggan.'
      },
      autonomous: {
        title: '99.98% Presisi Terstandar',
        desc: 'Validasi berlapis berbasis logika komputasi mandiri. Zero human-error pada transaksi krusial.'
      },
      metric: 'Akurasi Operasional: 99.9%'
    },
    ownership: {
      label: 'Model Solusi & Efisiensi',
      conventional: {
        title: 'Sistem Terfragmentasi & Kaku',
        desc: 'Aplikasi terpisah-pisah, data tidak sinkron, dan sulit disesuaikan dengan kebutuhan alur operasional unik.'
      },
      autonomous: {
        title: 'Ekosistem Fleksibel & Terintegrasi',
        desc: 'Pilihan platform cloud (SaaS) siap pakai maupun aplikasi kustom dengan integrasi data menyeluruh dan kontrol penuh.'
      },
      metric: 'Efisiensi Biaya & Implementasi: Terukur'
    }
  };

  const current = comparisonData[activeTab];

  return (
    <section className="autonomous-shift-section" id="autonomous-reality">
      <div className="section-container">
        <div className="shift-terminal-canvas">
          {/* Ambient Corner Plasma Aura */}
          <div className="terminal-corner-aura" aria-hidden="true" />
          <div className="terminal-grid-texture" aria-hidden="true" />

          <div className="shift-split-layout">
            {/* Left Column: Bold Editorial Provocation */}
            <div className="shift-editorial-col">
              <div className="shift-meta-badge">
                <span className="meta-pulse-dot" />
                <span>SYSTEM REALITY CHECK // 2026 SHIFT</span>
              </div>

              <h2 className="shift-editorial-headline">
                Dunia bisnis sudah bergerak ke era{' '}
                <span className="shift-text-glow">AI &amp; Sistem Otonom</span>.
                <br />
                Mengapa operasional Anda masih tertahan di alur konvensional?
              </h2>

              <p className="shift-editorial-lead">
                Saat kompetitor mengeksekusi ribuan alur kerja dan analisis data dalam hitungan milidetik, 
                setiap dokumen manual dan rekap spreadsheet yang diketik ulang tim Anda adalah 
                <span className="text-white-highlight"> kebocoran margin yang tak terlihat</span>.
              </p>

              <p className="shift-editorial-statement">
                <strong>OraRose Tech merekayasa solusi SaaS cerdas dan sistem terintegrasi</strong> untuk membebaskan tim Anda 
                dari friksi operasional—membantu bisnis Anda menarik efisiensi radikal dan 
                nilai maksimal dengan arsitektur yang siap bertumbuh.
              </p>

              <div className="shift-action-group">
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation('Konsultasi Transformasi Otonom')}
                  className="shift-cta-button"
                  id="autonomous-shift-cta"
                >
                  <span>Bedah Bottleneck Alur Kerja Anda</span>
                  <ArrowRight size={17} className="shift-cta-arrow" />
                </button>
                <span className="shift-guarantee-note">
                  Audit awal 30 menit • Tanpa komitmen • Langsung identifikasi titik optimasi
                </span>
              </div>
            </div>

            {/* Right Column: High-End Live Reality Manifest Console */}
            <div className="shift-console-col">
              <div className="reality-console-frame">
                {/* Console Top Bar */}
                <div className="console-top-bar">
                  <div className="console-title-group">
                    <span className="console-terminal-tag">AUDIT KESENJANGAN OPERASIONAL</span>
                    <span className="console-live-pill">LIVE BENCHMARK</span>
                  </div>
                  <div className="console-window-dots" aria-hidden="true">
                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-dot" />
                  </div>
                </div>

                {/* Console Interactive Selector Tabs */}
                <div className="console-nav-tabs">
                  <button
                    type="button"
                    className={`console-tab ${activeTab === 'ops' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('ops')}
                  >
                    <span>01 / Kecepatan</span>
                  </button>
                  <button
                    type="button"
                    className={`console-tab ${activeTab === 'quality' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('quality')}
                  >
                    <span>02 / Presisi</span>
                  </button>
                  <button
                    type="button"
                    className={`console-tab ${activeTab === 'ownership' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('ownership')}
                  >
                    <span>03 / Kedaulatan</span>
                  </button>
                </div>

                {/* The Duality Display */}
                <div className="console-duality-body">
                  {/* State 1: Cara Konvensional (The Drag) */}
                  <div className="duality-state-box state-conventional">
                    <div className="state-header">
                      <span className="state-badge-danger">
                        <XCircle size={13} />
                        CARA KONVENSIONAL (LAMBAT)
                      </span>
                      <span className="state-meta-dim">Status Quo</span>
                    </div>
                    <div className="state-main-value text-muted-red">{current.conventional.title}</div>
                    <p className="state-desc-text">{current.conventional.desc}</p>
                  </div>

                  {/* Divergence Connector Indicator */}
                  <div className="duality-divider-beam">
                    <span className="beam-line" />
                    <span className="beam-badge">
                      <Zap size={12} className="beam-icon" />
                      TRANSFORMASI ORAROSE
                    </span>
                    <span className="beam-line" />
                  </div>

                  {/* State 2: Cara OraRose (The Leap) */}
                  <div className="duality-state-box state-autonomous">
                    <div className="state-header">
                      <span className="state-badge-success">
                        <CheckCircle2 size={13} />
                        OTOMASI ORAROSE TECH
                      </span>
                      <span className="state-metric-highlight">{current.metric}</span>
                    </div>
                    <div className="state-main-value text-luminous-orange">{current.autonomous.title}</div>
                    <p className="state-desc-text">{current.autonomous.desc}</p>
                  </div>
                </div>

                {/* Console Bottom Telemetry Status */}
                <div className="console-footer-telemetry">
                  <div className="telemetry-pill-mono">
                    <span className="telemetry-dot-cyan" />
                    <span>FLEXIBLE DEPLOYMENT • SAAS &amp; CUSTOM ARCHITECTURE</span>
                  </div>
                  <span className="telemetry-code-snippet">ARCH: ENTERPRISE_V2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
