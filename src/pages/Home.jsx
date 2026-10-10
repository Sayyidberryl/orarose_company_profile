import React from 'react';
import Hero from '../components/Hero';
import ArchitectureBlueprint from '../components/ArchitectureBlueprint';
import AboutOraRose from '../components/AboutOraRose';
import CoreServices from '../components/CoreServices';
import WorkProcess from '../components/WorkProcess';
import MarketSegments from '../components/MarketSegments';

export default function Home({ onOpenConsultation }) {
  return (
    <main id="main-content">
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={() => onOpenConsultation()} />

      {/* 2. Bento Grid: Transformasi Bisnis (Realitas Modern & Nilai Solusi) */}
      <ArchitectureBlueprint onOpenConsultation={(problem) => onOpenConsultation(`Solution For: ${problem}`)} />

      {/* 3. Who We Are & Why OraRose (Comparison Table: Vendor Biasa vs OraRose) */}
      <AboutOraRose onOpenConsultation={() => onOpenConsultation()} />

      {/* 5. Core Engineering Services */}
      <CoreServices onSelectService={(service) => onOpenConsultation(`Service Needed: ${service}`)} />

      {/* 6. How We Engage (6-Step Transparent Collaboration Model) */}
      <WorkProcess onOpenConsultation={(phase) => onOpenConsultation(phase)} />

      {/* 6. Segmented Sector Solutions */}
      <MarketSegments onSelectSegment={(segment) => onOpenConsultation(`Client Category: ${segment}`)} />
    </main>
  );
}
