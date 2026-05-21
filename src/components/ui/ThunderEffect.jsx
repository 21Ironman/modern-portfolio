import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper to generate a jagged lightning SVG path
const generateLightningPath = (length = 300, segments = 15) => {
  let path = "M 0 0";
  let currentX = 0;
  let currentY = 0;
  const stepY = length / segments;
  
  for (let i = 1; i <= segments; i++) {
    currentY += stepY + (Math.random() * 10 - 5);
    // Add sharp, random jagged offsets for the Thor look
    currentX += (Math.random() - 0.5) * 80; 
    path += ` L ${currentX} ${currentY}`;
  }
  
  return path;
};

export function ThunderEffect() {
  const [strikes, setStrikes] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Generate 4 to 6 random lightning bolts
      const numBolts = Math.floor(Math.random() * 3) + 4;
      const bolts = Array.from({ length: numBolts }).map(() => ({
        path: generateLightningPath(Math.random() * 400 + 200, 20),
        angle: Math.random() * 360,
      }));

      const newStrike = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        bolts
      };

      setStrikes((current) => [...current, newStrike]);

      // Remove the strike after animation completes
      setTimeout(() => {
        setStrikes((current) => current.filter(s => s.id !== newStrike.id));
      }, 700);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {strikes.map((strike) => (
          <React.Fragment key={strike.id}>
            {/* FULL SCREEN THOR FLASH (Flickering) */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 0.9, 0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="absolute inset-0 bg-sky-100 mix-blend-screen"
            />
            
            {/* Lightning Bolts Origin */}
            <div
              style={{
                position: 'absolute',
                left: strike.x,
                top: strike.y,
              }}
            >
              {/* Render the jagged lightning bolts using SVG */}
              {strike.bolts.map((bolt, i) => (
                <motion.svg
                  key={i}
                  width="1"
                  height="1"
                  style={{
                    position: 'absolute',
                    overflow: 'visible',
                    rotate: `${bolt.angle}deg`,
                    transformOrigin: '0 0'
                  }}
                  className="drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 1, 0, 1, 0] }}
                  transition={{ duration: 0.6, ease: "linear" }}
                >
                  {/* Outer Glow Path */}
                  <motion.path
                    d={bolt.path}
                    fill="transparent"
                    stroke="#38bdf8"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    className="blur-[6px]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  />
                  {/* Inner White Core Path */}
                  <motion.path
                    d={bolt.path}
                    fill="transparent"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  />
                </motion.svg>
              ))}

              {/* Energy Core at the click center */}
              <motion.div 
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 2, 0], opacity: [1, 1, 0] }}
                transition={{ duration: 0.4 }}
                className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[12px] shadow-[0_0_80px_rgba(56,189,248,1)]" 
              />
            </div>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
}
