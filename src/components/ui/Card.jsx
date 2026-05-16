import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function Card({ children, className = '', index = 0, hover = true }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Ultra-smooth, heavy spring physics for Apple-like feel
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  // Very subtle rotation (max 5 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!hover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the card's top-left
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to range [-0.5, 0.5]
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const hoverStyle = hover ? {
    rotateX,
    rotateY,
    transformPerspective: 1000,
  } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-2xl overflow-hidden relative ${className}`}
      style={{ ...hoverStyle, zIndex: hover ? 10 : 1 }}
      whileHover={hover ? { scale: 1.02, zIndex: 20 } : {}}
    >
      {children}
    </motion.div>
  );
}
