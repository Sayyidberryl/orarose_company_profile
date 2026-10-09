import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { Navigation, Globe2, Activity, Zap, Compass } from 'lucide-react';
import './GlobalNetworkGlobe.css';

/**
 * Modern 3D Interactive WebGL Global Network (cobe engine)
 * Upgraded with Stripe / GitHub / Linear modern cyber aesthetics:
 * - Ultra-crisp luminous ice-blue matrix dots on deep midnight sphere
 * - High-tech sapphire atmospheric glow rim & glowing laser arcs
 * - Interactive Hub Selector pills with smooth camera fly-to animation
 * - Floating glassmorphic telemetry cards with real-time ping indicators
 * - Concentric holographic orbital rings with 3D perspective
 */

const HUBS = [
  {
    id: 'jkt',
    name: 'Jakarta (HQ)',
    flag: '🇮🇩',
    country: 'Indonesia',
    region: 'APAC Engineering Core',
    desc: 'Pusat orkestrasi produk SaaS cerdas dan arsitektur piranti lunak enterprise.',
    location: [-6.2088, 106.8456],
    lon: 106.8456,
    size: 0.09,
    latency: '2.4ms',
    status: 'Engineering Core',
    color: '#FF823A'
  },
  {
    id: 'tyo',
    name: 'Tokyo',
    flag: '🇯🇵',
    country: 'Japan',
    region: 'ASIA State Sync',
    desc: 'Sinkronisasi status database terdistribusi ultra-rendah latensi.',
    location: [35.6762, 139.6503],
    lon: 139.6503,
    size: 0.075,
    latency: '4.8ms',
    status: 'State Sync',
    color: '#FF823A'
  },
  {
    id: 'sfo',
    name: 'Silicon Valley',
    flag: '🇺🇸',
    country: 'United States',
    region: 'AMER AI Compute',
    desc: 'Kluster akselerasi model AI dan inferensi kognitif cerdas.',
    location: [37.7749, -122.4194],
    lon: -122.4194,
    size: 0.08,
    latency: '8.1ms',
    status: 'AI Enclave',
    color: '#FFAA66'
  },
  {
    id: 'fra',
    name: 'Frankfurt',
    flag: '🇩🇪',
    country: 'Germany',
    region: 'EMEA Gateway',
    desc: 'Penegakan enkripsi tingkat tinggi sesuai standar kepatuhan ISO 27001.',
    location: [50.1109, 8.6821],
    lon: 8.6821,
    size: 0.075,
    latency: '11.6ms',
    status: 'Security Vault',
    color: '#38BDF8'
  },
  {
    id: 'lon',
    name: 'London',
    flag: '🇬🇧',
    country: 'United Kingdom',
    region: 'EMEA Financial Hub',
    desc: 'Gerbang integrasi perbankan dan transaksi internasional.',
    location: [51.5074, -0.1278],
    lon: -0.1278,
    size: 0.065,
    latency: '13.9ms',
    status: 'Active Relay',
    color: '#38BDF8'
  }
];

// Global Laser Conduits connecting continental tech clusters
const GLOBAL_ARCS = [
  { from: [-6.2088, 106.8456], to: [35.6762, 139.6503] }, // Jakarta -> Tokyo
  { from: [35.6762, 139.6503], to: [37.7749, -122.4194] }, // Tokyo -> Silicon Valley
  { from: [37.7749, -122.4194], to: [50.1109, 8.6821] }, // Silicon Valley -> Frankfurt
  { from: [50.1109, 8.6821], to: [51.5074, -0.1278] }, // Frankfurt -> London
  { from: [51.5074, -0.1278], to: [-6.2088, 106.8456] }, // London -> Jakarta
];

// Helper to convert longitude (deg) to target phi (radians) facing viewer directly
function lonToPhi(lon) {
  return -(lon * Math.PI) / 180 - Math.PI / 2;
}

export default function GlobalNetworkGlobe() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [selectedHub, setSelectedHub] = useState(HUBS[0]);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Motion physics refs
  const phiRef = useRef(lonToPhi(HUBS[0].lon));
  const targetPhiRef = useRef(lonToPhi(HUBS[0].lon));
  const thetaRef = useRef(0.24);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  // Initialize COBE 3D WebGL Globe
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let globe = null;
    let animId = null;
    let isVisible = true;

    // Prepare markers
    const markers = HUBS.map((hub) => ({
      location: hub.location,
      size: hub.size
    }));

    try {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: 840,
        height: 840,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: 1, // Deep Dark Midnight Sphere
        diffuse: 1.25,
        scale: 1,
        mapSamples: 18000,
        mapBrightness: 6.2,
        mapBaseBrightness: 0.028,
        baseColor: [0.38, 0.70, 0.98], // Ultra-crisp Luminous Ice-Blue Matrix
        markerColor: [1.0, 0.54, 0.22], // Radiant OraRose Amber-Orange
        glowColor: [0.16, 0.34, 0.68], // Electric Sapphire Atmospheric Glow Rim
        markers: markers,
        arcs: GLOBAL_ARCS,
        arcColor: [1.0, 0.58, 0.24], // Glowing Energetic Laser Conduits
        arcWidth: 0.72,
        arcHeight: 0.28,
        markerElevation: 0.045,
      });

      const render = () => {
        if (!isVisible) {
          animId = requestAnimationFrame(render);
          return;
        }

        if (pointerInteracting.current === null) {
          if (targetPhiRef.current !== null) {
            const diff = targetPhiRef.current - phiRef.current;
            if (Math.abs(diff) > 0.001) {
              phiRef.current += diff * 0.06;
            } else {
              targetPhiRef.current = null;
            }
          } else {
            phiRef.current += 0.0022;
          }
        } else {
          phiRef.current += pointerInteractionMovement.current;
          pointerInteractionMovement.current = 0;
        }

        globe.update({
          phi: phiRef.current,
          theta: thetaRef.current,
        });

        animId = requestAnimationFrame(render);
      };

      // Pause WebGL rendering when scrolled out of view to save GPU cycles
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.05 }
      );
      observer.observe(container);

      animId = requestAnimationFrame(render);

      return () => {
        observer.disconnect();
        if (animId) {
          cancelAnimationFrame(animId);
        }
        if (globe) {
          globe.destroy();
        }
      };
    } catch (err) {
      console.error('Failed to initialize cobe WebGL globe:', err);
    }
  }, []);

  // Pointer drag interaction handlers
  const handlePointerDown = (e) => {
    pointerInteracting.current = e.clientX;
    targetPhiRef.current = null;
    setIsUserInteracting(true);
  };

  const handlePointerMove = (e) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = deltaX * 0.006;
      pointerInteracting.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    pointerInteracting.current = null;
    setIsUserInteracting(false);
  };

  // Switch to specific hub on button click
  const handleSelectHub = (hub) => {
    setSelectedHub(hub);
    targetPhiRef.current = lonToPhi(hub.lon);
  };

  return (
    <div className="global-globe-wrapper" ref={containerRef}>
      {/* Cinematic Ambient Halo behind Globe */}
      <div className="globe-ambient-aura" aria-hidden="true" />
      <div className="globe-aurora-glow" aria-hidden="true" />

      {/* Floating Status Badge (Top-Left) */}
      <div className="globe-hud-header">
        <span className="globe-live-indicator">
          <span className="live-pulse-dot" />
          <span>NETWORK ONLINE</span>
        </span>
        <span className="globe-hud-divider">/</span>
        <span className="globe-hud-title">5 GLOBAL HUBS ACTIVE</span>
      </div>

      {/* Floating Latency Chip (Top-Right) */}
      <div className="globe-telemetry-chip">
        <Activity size={12} className="text-orange" />
        <span>AVG LATENCY: <strong>{selectedHub.latency}</strong></span>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div 
        className={`globe-canvas-container ${isUserInteracting ? 'is-dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        role="region"
        aria-label="Interactive 3D WebGL Global Network Globe"
      >
        <canvas
          ref={canvasRef}
          className="globe-webgl-canvas"
          width={840}
          height={840}
        />

        {/* Dual Concentric Holographic Orbital Rings */}
        <div className="globe-ring-accent inner-ring" aria-hidden="true" />
        <div className="globe-ring-accent outer-ring" aria-hidden="true" />
      </div>

      {/* Active Hub Details Glass Card */}
      <div className="globe-active-hub-card">
        <div className="hub-card-header">
          <div className="hub-card-title-group">
            <span className="hub-flag">{selectedHub.flag}</span>
            <strong className="hub-name">{selectedHub.name}</strong>
            <span className="hub-status-badge">{selectedHub.status}</span>
          </div>
          <span className="hub-ping-metric">
            <span className="ping-dot" />
            <span>{selectedHub.latency}</span>
          </span>
        </div>
        <p className="hub-card-description">{selectedHub.desc}</p>
      </div>

      {/* Quick Interactive Hub Selector Pills */}
      <div className="globe-hub-selector-row">
        <span className="hub-selector-label">Fokus Hub:</span>
        <div className="hub-pills-list">
          {HUBS.map((hub) => (
            <button
              key={hub.id}
              type="button"
              className={`hub-pill-btn ${selectedHub.id === hub.id ? 'is-active' : ''}`}
              onClick={() => handleSelectHub(hub)}
              title={`Fokus ke ${hub.name}`}
            >
              <span className="pill-flag">{hub.flag}</span>
              <span className="pill-name">{hub.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Minimal Instruction Hint */}
      <div className="globe-interactive-hint">
        <Compass size={13} className="hint-icon" />
        <span>Geser bola dunia atau klik hub untuk memutar secara interaktif</span>
      </div>
    </div>
  );
}
