import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  className?: string;
}

export function Particles({ 
  count = 50, 
  color = '#27A9E1', 
  size = 2,
  speed = 3,
  className = ''
}: ParticlesProps) {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    scale: number;
    opacity: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 2
      }));
    };

    setParticles(generateParticles());

    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            width: size,
            height: size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ 
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
            scale: [particle.scale, particle.scale * 1.2, particle.scale],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: speed,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}