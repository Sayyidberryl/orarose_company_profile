import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Globe, Shield, Zap, Sparkles, Activity } from 'lucide-react';
import './NeuralTopology.css';

/**
 * 3D Neural Core & Global Edge Topology
 * An interactive, frameless 3D architectural installation representing:
 * 1. AI (Central Cognitive Neural Engine & Autonomous Agent Kernel)
 * 2. Modernisasi (High-throughput laser conduits replacing legacy bottlenecks)
 * 3. Technology Global (Synchronized low-latency edge nodes spanning 4 continents)
 */
export default function NeuralTopology() {
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [isBursting, setIsBursting] = useState(false);
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const timeRef = useRef(0);

  // Global Edge Node Specifications across major continental hubs
  const EDGE_NODES = [
    {
      id: 'apac',
      code: 'APAC // JKT',
      city: 'Jakarta (HQ)',
      role: 'Primary Sovereign Core',
      region: 'Asia Pacific',
      latency: '2.4ms',
      icon: Cpu,
      pos: { x: -145, y: -75, z: 25 },
      glowColor: '#FF823A',
      status: 'Sovereign'
    },
    {
      id: 'amer',
      code: 'AMER // SFO',
      city: 'Silicon Valley',
      role: 'AI Compute Enclave',
      region: 'North America',
      latency: '8.1ms',
      icon: Sparkles,
      pos: { x: 145, y: -80, z: 30 },
      glowColor: '#FF9E5A',
      status: 'Inference'
    },
    {
      id: 'emea',
      code: 'EMEA // FRA',
      city: 'Frankfurt',
      role: 'Zero-Trust Gateway',
      region: 'Europe / ISO 27001',
      latency: '11.6ms',
      icon: Shield,
      pos: { x: -135, y: 85, z: 20 },
      glowColor: '#38BDF8',
      status: 'Encrypted'
    },
    {
      id: 'asia',
      code: 'ASIA // TYO',
      city: 'Tokyo',
      role: 'Distributed State Sync',
      region: 'East Asia',
      latency: '4.8ms',
      icon: Globe,
      pos: { x: 140, y: 80, z: 25 },
      glowColor: '#FF823A',
      status: 'Synchronized'
    }
  ];

  // Mouse tilt tracking & physics loop
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetRot.current = {
        x: -y * 22, // Tilt up/down
        y: x * 26   // Rotate left/right
      };
    };

    const handleMouseLeave = () => {
      targetRot.current = { x: 0, y: 0 };
      setActiveNode(null);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation physics loop
    const animate = () => {
      timeRef.current += 0.018;
      const t = timeRef.current;

      // Subtle ambient harmonic breathing
      const idleX = Math.sin(t * 0.8) * 2.8;
      const idleY = Math.cos(t * 0.6) * 3.6;

      currentRot.current.x += ((targetRot.current.x + idleX) - currentRot.current.x) * 0.08;
      currentRot.current.y += ((targetRot.current.y + idleY) - currentRot.current.y) * 0.08;

      const stage = container?.querySelector('.topology-3d-stage');
      if (stage) {
        stage.style.transform = `rotateX(${currentRot.current.x}deg) rotateY(${currentRot.current.y}deg)`;
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

  // Trigger pulse burst when user clicks center core
  const handleTriggerBurst = () => {
    setIsBursting(true);
    setTimeout(() => setIsBursting(false), 1200);
  };

  return (
    <div className="neural-topology-wrapper" ref={containerRef}>
      {/* Ambient Caustic Energy Field (Pedestal) */}
      <div className="topology-ambient-caustic" aria-hidden="true" />

      {/* 3D Perspective Stage */}
      <div className="topology-3d-stage">
        {/* BACKGROUND PERSPECTIVE GRID PLANE */}
        <div className="topology-grid-plane" aria-hidden="true" />

        {/* LASER DATA PATHWAYS & PLANETARY ORBITS (SVG) */}
        <svg className="topology-svg-pathways" viewBox="-200 -150 400 300">
          <defs>
            <linearGradient id="laserGradAmber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF823A" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FFAA66" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FF823A" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="laserGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF823A" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Planetary Global Latitudinal Orbits */}
          <g className="topology-planetary-orbits">
            <ellipse cx="0" cy="0" rx="95" ry="34" className="orbit-ellipse orbit-inner" />
            <ellipse cx="0" cy="0" rx="140" ry="52" className="orbit-ellipse orbit-outer" />
            {/* Cross-Continental Mesh Arcs */}
            <path
              d="M -145 -75 Q -10 10 140 80"
              className="mesh-sync-arc arc-transpacific"
            />
            <path
              d="M 145 -80 Q 15 15 -135 85"
              className="mesh-sync-arc arc-transatlantic"
            />
          </g>

          {/* 2. Direct Laser Conduits & Bidirectional Data Packets */}
          {EDGE_NODES.map((node) => {
            const isHovered = activeNode === node.id;
            return (
              <g key={`path-${node.id}`} className={isHovered ? 'conduit-group-active' : ''}>
                {/* Background Conduit Line */}
                <line
                  x1="0"
                  y1="0"
                  x2={node.pos.x}
                  y2={node.pos.y}
                  className={`laser-conduit ${isHovered ? 'conduit-highlight' : ''}`}
                  stroke={node.id === 'emea' ? 'url(#laserGradCyan)' : 'url(#laserGradAmber)'}
                  strokeWidth={isHovered ? '2.5' : '1.5'}
                  strokeDasharray="4 4"
                />

                {/* Outward Data Packet (Core -> Edge) */}
                <circle
                  className={`data-laser-packet packet-outward ${isBursting ? 'burst-speed' : ''}`}
                  r={isHovered ? '3.8' : '2.6'}
                  fill="#FFFFFF"
                  filter="url(#glowFilter)"
                >
                  <animateMotion
                    path={`M 0 0 L ${node.pos.x} ${node.pos.y}`}
                    dur={isBursting ? '0.45s' : '2.0s'}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Inward Sensory Packet (Edge -> Core) */}
                <circle
                  className="data-laser-packet packet-inward"
                  r={isHovered ? '3.2' : '2.2'}
                  fill={node.id === 'emea' ? '#38BDF8' : '#FFAA66'}
                  filter="url(#glowFilter)"
                >
                  <animateMotion
                    path={`M ${node.pos.x} ${node.pos.y} L 0 0`}
                    dur={isBursting ? '0.65s' : '2.8s'}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* ========================================================
            1. THE CENTRAL AI NEURAL ENGINE (Cognitive Core)
            ======================================================== */}
        <div 
          className={`topology-center-core ${isBursting ? 'is-bursting' : ''}`}
          onClick={handleTriggerBurst}
          role="button"
          tabIndex={0}
          aria-label="Central Neural AI Core: Klik untuk trigger transmisi data global"
        >
          {/* Orbital Halo Rings */}
          <div className="core-orbital-ring ring-outer" />
          <div className="core-orbital-ring ring-middle" />
          <div className="core-orbital-ring ring-inner" />

          {/* 3D Polyhedral Processor Prism */}
          <div className="core-octahedron-crystal">
            <div className="crystal-facet facet-front" />
            <div className="crystal-facet facet-back" />
            <div className="crystal-facet facet-left" />
            <div className="crystal-facet facet-right" />
            <div className="core-quantum-spark">
              <Zap size={22} className="spark-icon" />
            </div>
          </div>

          {/* Core Label Pill */}
          <div className="core-label-pill">
            <span className="core-pulse-dot" />
            <span className="core-code">ORAROSE KERNEL</span>
          </div>

          {/* Shockwave Emitter */}
          {isBursting && <div className="core-shockwave-wave" />}
        </div>

        {/* ========================================================
            2. THE GLOBAL EDGE SATELLITE NODES (4 Continents)
            ======================================================== */}
        {EDGE_NODES.map((node) => {
          const Icon = node.icon;
          const isHovered = activeNode === node.id;

          return (
            <div
              key={node.id}
              className={`topology-edge-node node-${node.id} ${isHovered ? 'is-active' : ''}`}
              style={{
                transform: `translate3d(${node.pos.x}px, ${node.pos.y}px, ${node.pos.z}px)`
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              tabIndex={0}
              role="button"
              aria-label={`${node.city} Global Edge Node`}
            >
              {/* Central Beacon Anchor Point */}
              <div className="edge-node-beacon">
                <span className="beacon-ping" style={{ borderColor: node.glowColor }} />
                <div className="beacon-chip" style={{ borderColor: node.glowColor }}>
                  <Icon size={14} className="node-icon" />
                </div>
              </div>

              {/* Frosted Glass Information Pill */}
              <div className="edge-node-card">
                <div className="node-card-top">
                  <span className="node-code">{node.code}</span>
                  <span className="node-latency-badge">
                    <span className="latency-dot" />
                    {node.latency}
                  </span>
                </div>
                <strong className="node-city">{node.city}</strong>
                <span className="node-role">{node.role}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* GALLERY-GRADE CURATORIAL TELEMETRY (Clean, Simple, Prestigious) */}
      <div className="topology-curatorial-footer">
        <div className="topology-pill-badge">
          <Activity size={13} className="text-orange" />
          <span className="pill-title">
            {activeNode 
              ? EDGE_NODES.find(n => n.id === activeNode)?.role.toUpperCase()
              : 'AUTONOMOUS ARCHITECTURE // GLOBAL TOPOLOGY'
            }
          </span>
        </div>

        <p className="topology-desc-text">
          {activeNode === 'apac' && 'Jakarta Engineering HQ — Inti orkestrasi solusi SaaS cerdas dan platform digital enterprise lokal.'}
          {activeNode === 'amer' && 'Silicon Valley Enclave — Kluster akselerasi model AI dan inferensi kognitif mandiri berkinerja tinggi.'}
          {activeNode === 'emea' && 'Frankfurt Gateway — Penegakan standar keamanan ketat selaras prinsip kepatuhan ISO 27001.'}
          {activeNode === 'asia' && 'Tokyo Ledger — Sinkronisasi status data terdistribusi dengan toleransi kegagalan tingkat tinggi.'}
          {!activeNode && 'Satu arsitektur terintegrasi: Kecerdasan AI di inti sistem, modernisasi alur kerja, dan komputasi edge berjangkauan global.'}
        </p>

        <span className="topology-hint-caption">
          🖱️ Gerakkan kursor untuk navigasi 3D · Sorot simpul edge untuk detail · Klik Inti AI untuk transmisi data
        </span>
      </div>
    </div>
  );
}
