import React, { useEffect, useRef, useState } from 'react';
import './KineticSculpture.css';

/**
 * Kinetic Bauhaus Sculpture
 * An interactive, gallery-grade 3D kinetic installation celebrating
 * architectural harmony, tactile engineering, and the convergence of
 * organic intelligence & sovereign structure.
 * 
 * Inspired by Bauhaus, Dieter Rams (Braun), and Teenage Engineering.
 */
export default function KineticSculpture() {
  const containerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const timeRef = useRef(0);

  // Smooth mouse tracking and kinetic physics loop
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

      // Target angles (max ~18 deg)
      targetRotation.current = {
        x: -y * 22,
        y: x * 26
      };
    };

    const handleMouseLeave = () => {
      targetRotation.current = { x: 0, y: 0 };
      setActiveItem(null);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation physics loop: smooth spring-damping + ambient breathing
    const animate = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;

      // Ambient idle breathing oscillation (very subtle harmonic motion)
      const idleX = Math.sin(t * 0.8) * 3.5;
      const idleY = Math.cos(t * 0.6) * 4.5;

      // Smooth lerp damping towards mouse target + idle wave
      currentRotation.current.x += ((targetRotation.current.x + idleX) - currentRotation.current.x) * 0.06;
      currentRotation.current.y += ((targetRotation.current.y + idleY) - currentRotation.current.y) * 0.06;

      const stage = container?.querySelector('.sculpture-stage');
      if (stage) {
        stage.style.transform = `rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg)`;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="sculpture-wrapper" ref={containerRef}>
      {/* Ambient Caustic Light Ground (Pedestal) */}
      <div className="sculpture-caustic-ground" aria-hidden="true" />

      {/* 3D Kinetic Stage */}
      <div className="sculpture-stage">
        {/* HAIRLINE SUSPENSION AXES (Bauhaus Balance Wire) */}
        <div className="sculpture-axis axis-vertical" />
        <div className="sculpture-axis axis-horizontal" />

        {/* 1. THE AMBER PRISM CUBE (Cognitive Intelligence) */}
        <div 
          className={`sculpture-primitive primitive-amber-cube ${activeItem === 'cube' ? 'is-focused' : ''}`}
          onMouseEnter={() => setActiveItem('cube')}
          onMouseLeave={() => setActiveItem(null)}
          tabIndex={0}
          role="button"
          aria-label="Amber Crystal Prism: Cognitive Architecture"
        >
          <div className="cube-3d-box">
            <div className="cube-facet facet-front" />
            <div className="cube-facet facet-back" />
            <div className="cube-facet facet-left" />
            <div className="cube-facet facet-right" />
            <div className="cube-facet facet-top" />
            <div className="cube-facet facet-bottom" />
            {/* Radiant Quantum Core */}
            <div className="cube-inner-core" />
          </div>
          {/* Specular glint reflection */}
          <div className="primitive-specular-glint" />
        </div>

        {/* 2. THE TITANIUM PILLAR (Sovereign Infrastructure) */}
        <div 
          className={`sculpture-primitive primitive-titanium-pillar ${activeItem === 'pillar' ? 'is-focused' : ''}`}
          onMouseEnter={() => setActiveItem('pillar')}
          onMouseLeave={() => setActiveItem(null)}
          tabIndex={0}
          role="button"
          aria-label="Titanium Pillar: Sovereign Infrastructure"
        >
          <div className="pillar-column">
            <div className="pillar-top-cap">
              <span className="pillar-gauge-notch" />
            </div>
            <div className="pillar-cylinder-body">
              <div className="pillar-groove-line" />
              <div className="pillar-groove-line" />
            </div>
            <div className="pillar-bottom-base" />
          </div>
        </div>

        {/* 3. THE GOLDEN ORBITAL RING (Zero-Trust Boundary) */}
        <div 
          className={`sculpture-primitive primitive-orbital-ring ${activeItem === 'ring' ? 'is-focused' : ''}`}
          onMouseEnter={() => setActiveItem('ring')}
          onMouseLeave={() => setActiveItem(null)}
          tabIndex={0}
          role="button"
          aria-label="Orbital Ring: Zero-Trust Security Boundary"
        >
          <div className="ring-torus">
            <div className="ring-pulse-bead" />
          </div>
        </div>

        {/* 4. THE FROSTED GLASS SPHERE (Continuous Flow & Data Harmony) */}
        <div 
          className={`sculpture-primitive primitive-glass-orb ${activeItem === 'orb' ? 'is-focused' : ''}`}
          onMouseEnter={() => setActiveItem('orb')}
          onMouseLeave={() => setActiveItem(null)}
          tabIndex={0}
          role="button"
          aria-label="Frosted Glass Orb: Data Flow"
        >
          <div className="glass-orb-body">
            <div className="glass-orb-specular" />
          </div>
        </div>

        {/* 5. PRECISION CALIBRATION POINTS */}
        <div className="sculpture-datum-point datum-top">
          <span className="datum-crosshair">+</span>
          <span className="datum-coord">REF. 01/K</span>
        </div>
        <div className="sculpture-datum-point datum-bottom">
          <span className="datum-crosshair">+</span>
          <span className="datum-coord">100% OWNED</span>
        </div>
      </div>

      {/* GALLERY-GRADE MINIMALIST CAPTION (Clean & Quiet) */}
      <div className="sculpture-gallery-caption">
        <div className="caption-badge">
          <span className="caption-dot" />
          <span className="caption-title">
            {activeItem === 'cube' && 'PRISMA KOGNITIF // AGENTIC AI'}
            {activeItem === 'pillar' && 'PILAR KEDAULATAN // PRIVATE INFRASTRUCTURE'}
            {activeItem === 'ring' && 'ORBIT KEAMANAN // ZERO-TRUST BOUNDARY'}
            {activeItem === 'orb' && 'ALIRAN DATA // SYNCHRONOUS STREAM'}
            {!activeItem && 'KINETIC SCULPTURE // MODULAR HARMONY'}
          </span>
        </div>
        <p className="caption-subtext">
          {activeItem === 'cube' && 'Rekayasa agen cerdas mandiri yang memecah kompleksitas data manual.'}
          {activeItem === 'pillar' && 'Infrastruktur tangguh dengan skalabilitas tinggi dan arsitektur adaptif.'}
          {activeItem === 'ring' && 'Isolasi data ketat dengan enkripsi privat berstandar enterprise.'}
          {activeItem === 'orb' && 'Alur kerja terpadu yang mengalir mulus tanpa hambatan operasional.'}
          {!activeItem && 'Keseimbangan bentuk geometris: intelegensi adaptif dalam struktur sistem yang kokoh.'}
        </p>
      </div>
    </div>
  );
}
