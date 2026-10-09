import React, { useState } from 'react';
import { 
  FileText, 
  RefreshCw, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Workflow
} from 'lucide-react';

export default function ReferenceArchitectures({ onOpenConsultation }) {
  const [activeBlueprint, setActiveBlueprint] = useState('doc-intelligence');

  const blueprints = {
    'doc-intelligence': {
      id: 'doc-intelligence',
      badge: 'PIPELINE 01',
      title: 'Document Intelligence & Extraction Pipeline',
      tagline: 'Otomasi ekstraksi dokumen operasional tanpa kebocoran data',
      icon: FileText,
      overview:
        'Arsitektur pemrosesan dokumen yang menggabungkan OCR, ekstraksi data cerdas berbasis model bahasa, aturan validasi bisnis, dan penyimpanan terstruktur untuk mengeliminasi pekerjaan verifikasi manual yang rentan salah.',
      steps: [
        { label: 'Document Input', sub: 'PDF, Scan, Email' },
        { label: 'OCR Engine', sub: 'Layout & Text Parsing' },
        { label: 'AI Extraction', sub: 'Schema-Guided Parsing' },
        { label: 'Validation Rules', sub: 'Confidence Scoring' },
        { label: 'Business Logic', sub: 'ERP / System Routing' },
        { label: 'Secure Storage', sub: 'Relational DB' },
        { label: 'Dashboard', sub: 'Audit & Review' }
      ],
      architecturalSpecs: [
        { label: 'Akurasi Ekstraksi', desc: 'Validasi skema ketat dengan fallback review jika confidence score di bawah threshold.' },
        { label: 'Keamanan Data', desc: 'Pemrosesan dokumen dilakukan di lingkungan terisolasi tanpa pengiriman data ke server publik.' },
        { label: 'Integrasi', desc: 'Menghasilkan output JSON terstandarisasi yang langsung dapat diserap sistem ERP / database existing.' }
      ]
    },
    'legacy-decoupling': {
      id: 'legacy-decoupling',
      badge: 'PIPELINE 02',
      title: 'Legacy Modernization & Event-Driven Decoupling',
      tagline: 'Pembaruan sistem lama secara modular dengan minim gangguan operasional',
      icon: RefreshCw,
      overview:
        'Pola rekayasa untuk mendekomposisi sistem monolitik tua secara bertahap menggunakan Strangler Fig Pattern dan antrean asinkron, memastikan bisnis tetap berjalan normal selama proses migrasi.',
      steps: [
        { label: 'Legacy Core', sub: 'Monolith DB / App' },
        { label: 'Change Capture', sub: 'CDC / DB Trigger' },
        { label: 'Event Broker', sub: 'Kafka / RabbitMQ' },
        { label: 'Modular Services', sub: 'Go / Node Microservices' },
        { label: 'Dual-Write Sync', sub: 'Data Reconciliation' },
        { label: 'Target Datastore', sub: 'Modern PostgreSQL' },
        { label: 'API Gateway', sub: 'Secure Routing' }
      ],
      architecturalSpecs: [
        { label: 'Minim Gangguan', desc: 'Sistem lama tetap beroperasi penuh sementara modul baru diuji coba paralel.' },
        { label: 'Toleransi Kegagalan', desc: 'Antrean pesan asinkron mencegah kegagalan sistem domino saat lonjakan trafik.' },
        { label: 'Maintainability', desc: 'Kode sumber terpisah ke dalam modul-modul independen yang mudah dikembangkan.' }
      ]
    },
    'private-ai': {
      id: 'private-ai',
      badge: 'PIPELINE 03',
      title: 'Private Knowledge Assistant Architecture',
      tagline: 'Asisten pengetahuan internal berbasis data privat perusahaan',
      icon: Cpu,
      overview:
        'Sistem pencarian semantik dan temu kembali informasi (Retrieval) yang menghubungkan SOP, dokumen legal, dan basis pengetahuan perusahaan dengan model bahasa privat di dalam perimeter server mandiri.',
      steps: [
        { label: 'User Query', sub: 'Role-Authenticated' },
        { label: 'Semantic Search', sub: 'Vector Similarity' },
        { label: 'Context Filter', sub: 'Permission & ACL' },
        { label: 'Private Model', sub: 'Air-Gapped / VPC' },
        { label: 'Output Guard', sub: 'Safety & Fact Check' },
        { label: 'Audit Logging', sub: 'Traceability & Log' },
        { label: 'User Response', sub: 'Cited Information' }
      ],
      architecturalSpecs: [
        { label: 'Privasi Mutlak', desc: 'Seluruh embedding dan model berjalan di infrastruktur privat klien tanpa koneksi keluar.' },
        { label: 'Akses Berbasis Hak', desc: 'Karyawan hanya dapat memperoleh jawaban dari dokumen yang sesuai hak aksesnya (RBAC).' },
        { label: 'Audit Trail', desc: 'Setiap interaksi dicatat lengkap untuk pemantauan kepatuhan tata kelola data perusahaan.' }
      ]
    }
  };

  const current = blueprints[activeBlueprint];
  const CurrentIcon = current.icon;

  return (
    <section className="section-padding blueprints-section" id="blueprints">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            REFERENCE ARCHITECTURES // HOW WE ENGINEER
          </span>
          <h2 className="section-title">
            Cetak Biru Rekayasa &amp; <span className="text-highlight">Arsitektur Solusi</span>
          </h2>
          <p className="section-description">
            Kami membuktikan kompetensi teknis bukan lewat klaim bombastis, melainkan melalui kejernihan rancang bangun arsitektur sistem yang modular, aman, dan dapat dipertanggungjawabkan.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="blueprint-tabs-bar">
          {Object.values(blueprints).map((bp) => {
            const Icon = bp.icon;
            const isActive = activeBlueprint === bp.id;
            return (
              <button
                key={bp.id}
                onClick={() => setActiveBlueprint(bp.id)}
                className={`blueprint-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{bp.title}</span>
              </button>
            );
          })}
        </div>

        {/* Blueprint Interactive Display Card */}
        <div className="blueprint-showcase-card card-modern">
          <div className="blueprint-header-row">
            <div className="blueprint-title-wrap">
              <span className="blueprint-badge">{current.badge}</span>
              <h3 className="blueprint-name">{current.title}</h3>
              <p className="blueprint-tagline">{current.tagline}</p>
            </div>
            <div className="blueprint-icon-circle">
              <CurrentIcon size={28} />
            </div>
          </div>

          <p className="blueprint-overview">{current.overview}</p>

          {/* Visual Step-by-Step Architecture Diagram */}
          <div className="blueprint-diagram-wrapper">
            <div className="diagram-label-bar">
              <Workflow size={14} className="text-orange" />
              <span>ALUR ARSITEKTUR SISTEM (DATA &amp; PROCESSING PIPELINE)</span>
            </div>

            <div className="diagram-flow-container">
              {current.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flow-node">
                    <span className="node-index">{idx + 1}</span>
                    <strong className="node-label">{step.label}</strong>
                    <span className="node-sub">{step.sub}</span>
                  </div>
                  {idx < current.steps.length - 1 && (
                    <div className="flow-arrow">
                      <span>→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Architectural Specifications Grid */}
          <div className="blueprint-specs-grid">
            {current.architecturalSpecs.map((spec, i) => (
              <div key={i} className="spec-card">
                <div className="spec-title-row">
                  <CheckCircle2 size={16} className="text-orange" />
                  <strong>{spec.label}</strong>
                </div>
                <p className="spec-desc">{spec.desc}</p>
              </div>
            ))}
          </div>

          <div className="blueprint-cta-row">
            <button
              onClick={() => onOpenConsultation(`Diskusi Cetak Biru: ${current.title}`)}
              className="btn btn-primary"
            >
              <span>Diskusikan Implementasi Arsitektur Ini</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
