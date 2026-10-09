import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchitectureBlueprint from './components/ArchitectureBlueprint';
import AboutOraRose from './components/AboutOraRose';
import CoreServices from './components/CoreServices';
import WorkProcess from './components/WorkProcess';
import MarketSegments from './components/MarketSegments';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { PhoneCall } from 'lucide-react';
import './App.css';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState(null);

  const handleOpenConsultation = (initialData = null) => {
    setConsultationContext(initialData);
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
    setConsultationContext(null);
  };

  return (
    <div className="app-container">
      {/* CSS-only ambient glow — performance-safe, no WebGL overhead */}
      <div className="global-ambient-bg" aria-hidden="true" />

      {/* Subtle architectural dot grid */}
      <div className="bg-grid-ambient" aria-hidden="true" />

      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Bento Grid: Transformasi Bisnis (Realitas Modern & Nilai Solusi) */}
        <ArchitectureBlueprint onOpenConsultation={(problem) => handleOpenConsultation(`Solusi Masalah: ${problem}`)} />

        {/* 3. Who We Are & Why OraRose (Comparison Table: Vendor Biasa vs OraRose) */}
        <AboutOraRose onOpenConsultation={() => handleOpenConsultation()} />

        {/* 5. Core Engineering Services */}
        <CoreServices onSelectService={(service) => handleOpenConsultation(`Kebutuhan Layanan: ${service}`)} />

        {/* 6. How We Engage (6-Step Transparent Collaboration Model) */}
        <WorkProcess onOpenConsultation={(phase) => handleOpenConsultation(phase)} />

        {/* 6. Segmented Sector Solutions */}
        <MarketSegments onSelectSegment={(segment) => handleOpenConsultation(`Kategori Klien: ${segment}`)} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20Tim%20OraRose%20Tech,%20saya%20ingin%20mendiskusikan%20kebutuhan%20teknologi/otomasi%20untuk%20bisnis%20kami."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Hubungi Tim OraRose Tech via WhatsApp"
        id="floating-wa-button"
      >
        <span className="wa-pulse-dot"></span>
        <PhoneCall size={18} />
        <span>Chat Tim Kami</span>
      </a>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialData={consultationContext}
      />
    </div>
  );
}
