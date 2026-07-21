import React, { useState, useEffect } from 'react';

export const MouseGlowBackground: React.FC = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(250, 204, 21, 0.05), transparent 80%)`,
      }}
    />
  );
};
