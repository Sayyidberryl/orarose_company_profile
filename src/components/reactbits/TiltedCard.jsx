import React, { useRef, useState } from 'react';
import './TiltedCard.css';

/**
 * TiltedCard Component from React Bits
 * A clean 3D interactive card with physics tilt, glare highlight, and scale effects.
 */
export default function TiltedCard({
  imageSrc,
  altText = 'OraRose System Architecture',
  containerHeight = '440px',
  containerWidth = '100%',
  imageHeight = '100%',
  imageWidth = '100%',
  scaleOnHover = 1.04,
  rotateAmplitude = 12,
  captionText = '',
  overlayContent,
  className = ''
}) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotX = (-offsetY / (rect.height / 2)) * rotateAmplitude;
    const rotY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.35 });
  }

  function handleMouseEnter() {
    setScale(scaleOnHover);
  }

  function handleMouseLeave() {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    setGlare(prev => ({ ...prev, opacity: 0 }));
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="tilted-card-inner"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{ width: imageWidth, height: imageHeight }}
        />
        <div
          className="tilted-card-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 130, 58, 0.35) 0%, rgba(255,255,255,0.2) 25%, transparent 65%)`,
            opacity: glare.opacity
          }}
        />
        {overlayContent && (
          <div className="tilted-card-overlay">
            {overlayContent}
          </div>
        )}
      </div>
      {captionText && (
        <figcaption className="tilted-card-caption">
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
