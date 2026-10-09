import React from 'react';

export default function Logo({ size = 'normal', showTagline = true, className = '' }) {
  const heights = {
    small: 30,
    normal: 40,
    large: 52,
  };

  const currentHeight = heights[size] || heights.normal;

  return (
    <div className={`brand-logo-container ${className}`}>
      <div className="brand-official-logo-wrap">
        <img 
          src="/Orarose_logo.png" 
          alt="OraRose Tech" 
          style={{ height: `${currentHeight}px`, width: 'auto', objectFit: 'contain', display: 'block' }}
          className="brand-official-logo-img"
        />
        {showTagline && (
          <span className="brand-legal-sub">The Architect of Intelligent Systems</span>
        )}
      </div>
    </div>
  );
}

