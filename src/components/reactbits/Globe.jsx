import React, { useEffect, useRef, useState } from 'react';
import './Globe.css';

// Global Hub Locations (Lat, Long in degrees)
const HUBS = [
  { name: 'JKT', label: 'Jakarta (HQ)', lat: -6.2088, lon: 106.8456, isHQ: true },
  { name: 'SGP', label: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'TYO', label: 'Tokyo', lat: 35.6762, lon: 139.6503 },
  { name: 'SFO', label: 'San Francisco', lat: 37.7749, lon: -122.4194 },
  { name: 'NYC', label: 'New York', lat: 40.7128, lon: -74.006 },
  { name: 'LON', label: 'London', lat: 51.5074, lon: -0.1278 },
  { name: 'FRA', label: 'Frankfurt', lat: 50.1109, lon: 8.6821 },
  { name: 'SYD', label: 'Sydney', lat: -33.8688, lon: 151.2093 }
];

// Interconnected data arcs between hubs
const ARCS = [
  { from: 0, to: 1 }, // JKT -> SGP
  { from: 1, to: 2 }, // SGP -> TYO
  { from: 2, to: 3 }, // TYO -> SFO
  { from: 3, to: 4 }, // SFO -> NYC
  { from: 4, to: 5 }, // NYC -> LON
  { from: 5, to: 6 }, // LON -> FRA
  { from: 6, to: 1 }, // FRA -> SGP
  { from: 1, to: 7 }, // SGP -> SYD
  { from: 0, to: 7 }  // JKT -> SYD
];

// Convert Lat/Lon to 3D Cartesian coordinates on unit sphere
function latLonTo3D(lat, lon) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return {
    x: -(Math.sin(phi) * Math.cos(theta)),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.sin(theta)
  };
}

/**
 * Interactive 3D Neural Globe & Global Mesh
 * Pure Canvas 3D Fibonacci sphere with realistic depth projection,
 * connecting orbital arcs, pulsing global tech hubs, and inertia mouse dragging.
 * 100% reliable, zero DOM conflicts with React 19.
 */
export default function Globe({
  className = '',
  size = 540,
  autoRotateSpeed = 0.003
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: autoRotateSpeed, y: 0 });
  const rotationRef = useRef({ x: 0.25, y: -0.8 }); // initial tilt
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Generate 450 Fibonacci surface dots
    const NUM_DOTS = 480;
    const dots = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < NUM_DOTS; i++) {
      const y = 1 - (i / (NUM_DOTS - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = 2 * Math.PI * i / goldenRatio;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      dots.push({ x, y, z });
    }

    // Convert hubs to 3D
    const hubNodes = HUBS.map(hub => ({
      ...hub,
      pos: latLonTo3D(hub.lat, hub.lon)
    }));

    let pulseTime = 0;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 2, 2);
      const w = canvas.clientWidth || size;
      const h = canvas.clientHeight || size;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const centerX = w / 2;
      const centerY = h / 2;
      const globeRadius = Math.min(w, h) * 0.40;

      // Update rotation
      if (!isDraggingRef.current) {
        rotationRef.current.y += velocityRef.current.x;
        rotationRef.current.x += velocityRef.current.y;
        // Dampen manual drag velocity back to default auto-orbit
        velocityRef.current.x += (autoRotateSpeed - velocityRef.current.x) * 0.05;
        velocityRef.current.y *= 0.95;
      }

      const rotX = rotationRef.current.x;
      const rotY = rotationRef.current.y;

      // 3D Rotation helper
      const project = (p3) => {
        // Rotate around Y axis
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = p3.x * cosY - p3.z * sinY;
        const z1 = p3.z * cosY + p3.x * sinY;

        // Rotate around X axis
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = p3.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p3.y * sinX;

        // Orthographic/weak perspective projection
        const scale = 1 / (1 - z2 * 0.15);
        return {
          x: centerX + x1 * globeRadius * scale,
          y: centerY - y2 * globeRadius * scale,
          z: z2,
          scale
        };
      };

      pulseTime += 0.035;

      // 1. Draw Globe Atmospheric Halo Ring
      const auraGradient = ctx.createRadialGradient(
        centerX, centerY, globeRadius * 0.75,
        centerX, centerY, globeRadius * 1.15
      );
      auraGradient.addColorStop(0, 'rgba(255, 130, 58, 0.18)');
      auraGradient.addColorStop(0.5, 'rgba(37, 59, 96, 0.12)');
      auraGradient.addColorStop(1, 'rgba(255, 130, 58, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.15, 0, Math.PI * 2);
      ctx.fillStyle = auraGradient;
      ctx.fill();

      // 2. Draw Latitude / Longitude Guidance Rings (Subtle Cybernetic Wireframe)
      ctx.strokeStyle = 'rgba(30, 58, 95, 0.18)';
      ctx.lineWidth = 1;
      [-0.4, 0, 0.4].forEach(ringY => {
        ctx.beginPath();
        const rRing = Math.sqrt(1 - ringY * ringY) * globeRadius;
        const ringCenter = project({ x: 0, y: ringY, z: 0 });
        ctx.ellipse(
          centerX, ringCenter.y,
          rRing, rRing * Math.abs(Math.sin(rotX) || 0.35),
          0, 0, Math.PI * 2
        );
        ctx.stroke();
      });

      // 3. Draw All Dots sorted by Z (painter's algorithm)
      const projectedDots = dots.map(dot => ({
        ...dot,
        proj: project(dot)
      })).sort((a, b) => a.proj.z - b.proj.z);

      // Back dots (faint dark navy/grey)
      projectedDots.forEach(dot => {
        const { x, y, z } = dot.proj;
        if (z < 0) {
          const alpha = Math.max(0.08, (z + 1) * 0.22);
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(37, 59, 96, ${alpha})`;
          ctx.fill();
        }
      });

      // 4. Draw 3D Connecting Data Arcs
      ARCS.forEach(arc => {
        const h1 = hubNodes[arc.from];
        const h2 = hubNodes[arc.to];
        if (!h1 || !h2) return;

        const p1 = project(h1.pos);
        const p2 = project(h2.pos);

        // Only draw arc if at least one hub is on the visible hemisphere
        if (p1.z > -0.2 || p2.z > -0.2) {
          const midX = (h1.pos.x + h2.pos.x) * 0.65;
          const midY = (h1.pos.y + h2.pos.y) * 0.65;
          const midZ = (h1.pos.z + h2.pos.z) * 0.65;
          const midLength = Math.hypot(midX, midY, midZ) || 1;
          const elevatedMid = {
            x: (midX / midLength) * 1.28,
            y: (midY / midLength) * 1.28,
            z: (midZ / midLength) * 1.28
          };
          const pMid = project(elevatedMid);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(pMid.x, pMid.y, p2.x, p2.y);
          
          const arcAlpha = Math.max(0.12, Math.min(0.85, (pMid.z + 1) * 0.45));
          ctx.strokeStyle = `rgba(255, 130, 58, ${arcAlpha})`;
          ctx.lineWidth = 1.4;
          ctx.setLineDash([4, 4]);
          ctx.lineDashOffset = -pulseTime * 15;
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // Front dots (bright amber and crisp cyan-white)
      projectedDots.forEach(dot => {
        const { x, y, z } = dot.proj;
        if (z >= 0) {
          const brightness = Math.min(1, z * 1.2 + 0.2);
          const dotRadius = 1.4 + z * 1.1;

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          // Highlight nodes near amber spectrum
          if (dot.y > 0.3 || Math.sin(dot.x * 5) > 0.6) {
            ctx.fillStyle = `rgba(255, 130, 58, ${brightness * 0.85})`;
          } else {
            ctx.fillStyle = `rgba(240, 245, 255, ${brightness * 0.75})`;
          }
          ctx.fill();
        }
      });

      // 5. Draw Hub Nodes with Radar Beacon Waves & Badges
      hubNodes.forEach(hub => {
        const p = project(hub.pos);
        if (p.z > -0.15) {
          const depthAlpha = Math.max(0.2, (p.z + 0.15) / 1.15);

          // Pulsing radar ripple
          const rippleRadius = 6 + (Math.sin(pulseTime * 2.5 + hub.lat) + 1) * 6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, rippleRadius, 0, Math.PI * 2);
          ctx.strokeStyle = hub.isHQ
            ? `rgba(255, 130, 58, ${0.85 * depthAlpha})`
            : `rgba(255, 175, 100, ${0.45 * depthAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Hub core dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, hub.isHQ ? 5 : 3.5, 0, Math.PI * 2);
          ctx.fillStyle = hub.isHQ ? '#FF823A' : '#FFAA66';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          // Hub Monospace Label
          if (p.z > 0.25) {
            ctx.font = `700 9px "JetBrains Mono", monospace`;
            ctx.fillStyle = hub.isHQ ? 'rgba(255, 130, 58, 0.95)' : 'rgba(30, 58, 95, 0.85)';
            ctx.fillText(hub.name, p.x + 8, p.y + 3);
          }
        }
      });

      ctx.restore();
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [size, autoRotateSpeed]);

  // Pointer drag interactions
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsGrabbing(true);
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) {
      canvasRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastMousePosRef.current.x;
    const deltaY = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    rotationRef.current.y += deltaX * 0.006;
    rotationRef.current.x -= deltaY * 0.006;

    // Cap vertical tilt to prevent upside-down flip
    rotationRef.current.x = Math.max(-0.8, Math.min(0.8, rotationRef.current.x));

    velocityRef.current = {
      x: deltaX * 0.003,
      y: -deltaY * 0.003
    };
  };

  const handlePointerUp = (e) => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
    if (canvasRef.current && canvasRef.current.hasPointerCapture(e.pointerId)) {
      canvasRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`globe-container ${className} ${isGrabbing ? 'is-grabbing' : ''}`}
    >
      <div className="globe-ambient-glow" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="globe-canvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />
    </div>
  );
}
