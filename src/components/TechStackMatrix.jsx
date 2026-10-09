import React, { useState } from 'react';
import { Cpu, Terminal, Layers, Cloud, ShieldCheck, Check } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = {
    ai: {
      label: 'Kecerdasan Buatan & AI Integration',
      icon: Cpu,
      items: [
        { name: 'Private LLM Inference Engine', role: 'Eksekusi Model Terisolasi & Kontrol Data Penuh' },
        { name: 'AI Workflow Orchestration', role: 'Otomasi Alur Kerja Terstruktur & Terkontrol' },
        { name: 'Vector Search & Knowledge Retrieval', role: 'Pencarian Cerdas Dokumen & Basis Data Internal' },
        { name: 'Private AI Deployment', role: 'Penerapan Model pada Lingkungan Terisolasi Sesuai Privasi Data' },
        { name: 'Document & OCR Processing Pipeline', role: 'Ekstraksi Data Dokumen Otomatis' },
        { name: 'Secure API Service Layer', role: 'Integrasi Aman ke Sistem Bisnis Existing' }
      ]
    },
    backend: {
      label: 'Backend & Arsitektur Terdistribusi',
      icon: Terminal,
      items: [
        { name: 'Go (Golang) & Node.js', role: 'Layanan Backend Berkecepatan Tinggi' },
        { name: 'PostgreSQL Relational Core', role: 'Penyimpanan Data Terstruktur & Transaksional' },
        { name: 'Message Broker & Event Queue', role: 'Antrean Asinkron untuk Mencegah Beban Puncak' },
        { name: 'Distributed Caching (Redis)', role: 'Akselerasi Kecepatan Akses Data' },
        { name: 'Database Clustering & Replication', role: 'Ketahanan Basis Data & High Availability' },
        { name: 'REST & GraphQL Gateways', role: 'Protokol Komunikasi Sistem yang Terstandarisasi' }
      ]
    },
    frontend: {
      label: 'Platform Web & Mobile',
      icon: Layers,
      items: [
        { name: 'React & Next.js Modern', role: 'Aplikasi Web Berperforma Tinggi & Responsif' },
        { name: 'TypeScript Strict Mode', role: 'Kualitas Kode Andal & Minim Bug' },
        { name: 'React Native & Flutter', role: 'Aplikasi Mobile Lintas Platform iOS & Android' },
        { name: 'Design Tokens & UI Component Systems', role: 'Antarmuka Pengguna Konsisten & Ergonomis' },
        { name: 'Optimistic State Management', role: 'Pengalaman Pengguna Instan Tanpa Lag' },
        { name: 'Real-time WebSocket Sync', role: 'Pembaruan Data Dua Arah Secara Langsung' }
      ]
    },
    cloud: {
      label: 'Cloud, Deployment & Ketahanan',
      icon: Cloud,
      items: [
        { name: 'Containerization (Docker)', role: 'Standardisasi Lingkungan Aplikasi yang Stabil' },
        { name: 'Container Orchestration (Kubernetes)', role: 'Manajemen Skalabilitas Otomatis' },
        { name: 'Infrastructure as Code (IaC)', role: 'Konfigurasi Infrastruktur yang Terdokumentasi' },
        { name: 'Automated CI/CD Pipelines', role: 'Deployment Bertahap Tanpa Mengganggu Sistem Aktif' },
        { name: 'Multi-Cloud & On-Premise Support', role: 'Fleksibilitas AWS, Google Cloud, atau Server Mandiri' },
        { name: 'Observability & Monitoring', role: 'Pemantauan Metrik Kesehatan Sistem 24/7' }
      ]
    },
    security: {
      label: 'Keamanan & Tata Kelola Sistem',
      icon: ShieldCheck,
      items: [
        { name: 'Zero-Trust Architecture', role: 'Prinsip Verifikasi Ketat pada Setiap Titik Akses' },
        { name: 'Security Architecture Aligned with ISO 27001 Principles', role: 'Penerapan Praktik Terbaik Tata Kelola Keamanan' },
        { name: 'Data Encryption (At-Rest & In-Transit)', role: 'Enkripsi Data dengan Standar AES-256 & TLS 1.3' },
        { name: 'OAuth 2.0 & Role-Based Access Control', role: 'Otorisasi Akses Bertingkat Sesuai Hak Akses Pengguna' },
        { name: 'Automated Code Security Scanning', role: 'Pemeriksaan Kerentanan Rutin Sebelum Rilis' },
        { name: 'Audit Logging & Activity Tracking', role: 'Pencatatan Jejak Aktivitas Sistem yang Dapat Diaudit' }
      ]
    }
  };

  return (
    <section className="section-padding techstack-section" id="tech-stack">
      <div className="section-container">
        <div className="section-center">
          <span className="section-header-badge">
            <span className="badge-dot"></span>
            INFRASTRUCTURE &amp; STANDARDS // TECH MATRIX
          </span>
          <h2 className="section-title">
            Teknologi Terpilih untuk <span className="text-highlight">Sistem yang Andal &amp; Terukur</span>
          </h2>
          <p className="section-description">
            Kami memilih tumpukan teknologi modern yang mengutamakan stabilitas operasional, kemudahan pemeliharaan jangka panjang, dan kepatuhan standar keamanan data.
          </p>

          {/* Category Tabs */}
          <div className="tech-cat-tabs">
            {Object.keys(categories).map((key) => {
              const cat = categories[key];
              const Icon = cat.icon;
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  className={`tech-tab-button ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="tech-matrix-grid">
          {categories[activeCategory].items.map((item, idx) => (
            <SpotlightCard 
              key={idx} 
              className="tech-matrix-card"
              spotlightColor="rgba(255, 130, 58, 0.2)"
            >
              <div className="matrix-check-box">
                <Check size={16} color="#FF823A" />
              </div>
              <div className="matrix-info">
                <h4 className="matrix-tech-name">{item.name}</h4>
                <p className="matrix-tech-role">{item.role}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
