import React from 'react';
import { motion } from 'framer-motion';

export function Card({ children, className = '', index = 0, hover = true }) {
  const hoverProps = hover ? {
    whileHover: { y: -5, scale: 1.01 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-2xl overflow-hidden ${className}`}
      {...hoverProps}
    >
      {children}
    </motion.div>
  );
}
