import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { Activity, Compass } from 'lucide-react';
import './GlobalNetworkGlobe.css';

/**
 * Modern 3D Interactive WebGL Global Network (cobe engine)
 * Executive & Futuristic Architecture:
 * - High-density luminous data nodes on deep celestial midnight sphere
 * - Pulsing laser arcs connecting continental innovation and cloud hubs
 * - Pure, borderless presentation: zero bulky cards below the globe
 * - Clean aerospace-grade telemetry HUD and smooth orbital dynamics
 */

const HUBS = [
  {
    id: 'jkt',
    name: 'Jakarta (HQ)',
    flag: '🇮🇩',
    country: 'Indonesia',
    region: 'Engineering Core',
    location: [-6.2088, 106.8456],
    lon: 106.8456,
    size: 0.09,
    latency: '< 5ms',
    status: 'Core HQ',
    color: '#FF823A'
  },
  {
    id: 'sgp',
    name: 'Singapore',
    flag: '🇸🇬',
    country: 'Singapore',
    region: 'SEA Edge',
    location: [1.3521, 103.8198],
    lon: 103.8198,
    size: 0.075,
    latency: '< 2ms',
    status: 'Edge Gateway',
    color: '#38BDF8'
  },
  {
    id: 'tyo',
    name: 'Tokyo',
    flag: '🇯🇵',
    country: 'Japan',
    region: 'East Asia',
    location: [35.6762, 139.6503],
    lon: 139.6503,
    size: 0.075,
    latency: '< 12ms',
    status: 'State Sync',
    color: '#FF823A'
  },
  {
    id: 'sfo',
    name: 'Silicon Valley',
    flag: '🇺🇸',
    country: 'United States',
    region: 'North America',
    location: [37.7749, -122.4194],
    lon: -122.4194,
    size: 0.08,
    latency: '< 18ms',
    status: 'AI Compute',
    color: '#FFAA66'
  },
  {
    id: 'fra',
    name: 'Frankfurt',
    flag: '🇩🇪',
    country: 'Germany',
    region: 'Europe Core',
    location: [50.1109, 8.6821],
    lon: 8.6821,
    size: 0.075,
    latency: '< 22ms',
    status: 'Security Vault',
    color: '#38BDF8'
  },
  {
    id: 'lon',
    name: 'London',
    flag: '🇬🇧',
    country: 'United Kingdom',
    region: 'Europe Financial',
    location: [51.5074, -0.1278],
    lon: -0.1278,
    size: 0.065,
    latency: '< 24ms',
    status: 'FinTech Relay',
    color: '#38BDF8'
  }
];

// Laser conduits connecting global innovation nodes
const GLOBAL_ARCS = [
  { from: [-6.2088, 106.8456], to: [1.3521, 103.8198] },   // Jakarta -> Singapore
  { from: [1.3521, 103.8198], to: [35.6762, 139.6503] },   // Singapore -> Tokyo
  { from: [35.6762, 139.6503], to: [37.7749, -122.4194] }, // Tokyo -> Silicon Valley
  { from: [37.7749, -122.4194], to: [50.1109, 8.6821] },   // Silicon Valley -> Frankfurt
  { from: [50.1109, 8.6821], to: [51.5074, -0.1278] },     // Frankfurt -> London
  { from: [51.5074, -0.1278], to: [1.3521, 103.8198] },    // London -> Singapore
  { from: [1.3521, 103.8198], to: [-6.2088, 106.8456] },   // Singapore -> Jakarta
];

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
  const thetaRef = useRef(0.22);
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

    const markers = HUBS.map((hub) => ({
      location: hub.location,
      size: hub.size
    }));

    try {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: 860,
        height: 860,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: 1, // Deep Dark Midnight Sphere
        diffuse: 1.25,
        scale: 1.04,
        mapSamples: 12000, // Optimized for 60fps across all devices
        mapBrightness: 6.8,
        mapBaseBrightness: 0.032,
        baseColor: [0.38, 0.70, 0.98], // Ultra-crisp Luminous Ice-Blue Matrix
        markerColor: [1.0, 0.52, 0.22], // Radiant OraRose Amber-Orange
        glowColor: [0.14, 0.32, 0.65], // Electric Sapphire Atmospheric Glow Rim
        markers: markers,
        arcs: GLOBAL_ARCS,
        arcColor: [1.0, 0.58, 0.24], // Glowing Energetic Laser Conduits
        arcWidth: 0.78,
        arcHeight: 0.30,
        markerElevation: 0.045,
      });

      const render = () => {
        if (!isVisible) {
          // Pause RAF loop completely when scrolled away to other sections
          return;
        }

        if (pointerInteracting.current === null) {
          if (targetPhiRef.current !== null) {
            const diff = targetPhiRef.current - phiRef.current;
            if (Math.abs(diff) > 0.001) {
              phiRef.current += diff * 0.055;
            } else {
              targetPhiRef.current = null;
            }
          } else {
            phiRef.current += 0.0024;
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

      const observer = new IntersectionObserver(
        ([entry]) => {
          const wasVisible = isVisible;
          isVisible = entry.isIntersecting;
          if (isVisible && !wasVisible) {
            animId = requestAnimationFrame(render);
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(container);

      if (isVisible) {
        animId = requestAnimationFrame(render);
      }

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

  const handleSelectHub = (hub) => {
    setSelectedHub(hub);
    targetPhiRef.current = lonToPhi(hub.lon);
  };

  return (
    <div className="global-globe-wrapper" ref={containerRef}>
      {/* Cinematic Ambient Halo behind Globe */}
      <div className="globe-ambient-aura" aria-hidden="true" />
      <div className="globe-aurora-glow" aria-hidden="true" />



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
          width={860}
          height={860}
        />

        {/* Dual Concentric Holographic Orbital Rings */}
        <div className="globe-ring-accent inner-ring" aria-hidden="true" />
        <div className="globe-ring-accent outer-ring" aria-hidden="true" />


      </div>

      {/* Ultra-Clean Modern Floating Hub Pills Dock (No Bulky Card Below Globe) */}
      <div className="globe-hubs-dock">
        <div className="globe-dock-inner">
          {HUBS.map((hub) => (
            <button
              key={hub.id}
              type="button"
              className={`dock-hub-btn ${selectedHub.id === hub.id ? 'active' : ''}`}
              onClick={() => handleSelectHub(hub)}
              title={`Rotasi ke ${hub.name}`}
            >
              <span className="dock-flag">{hub.flag}</span>
              <span className="dock-label">{hub.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Subtle Micro-Interaction Hint */}
      <div className="globe-interactive-hint">
        <Compass size={12} className="hint-icon" />
        <span>Drag the globe to explore global network nodes</span>
      </div>
    </div>
  );
}
