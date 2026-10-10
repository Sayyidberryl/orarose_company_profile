import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import Home from './pages/Home';
import MarketingCareer from './pages/MarketingCareer';
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
      <Routes>
        <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
        <Route path="/career/marketing" element={<MarketingCareer />} />
      </Routes>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialData={consultationContext}
      />
    </div>
  );
}

