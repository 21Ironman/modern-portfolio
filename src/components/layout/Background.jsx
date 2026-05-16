import React from 'react';
import { motion } from 'framer-motion';

export function Background({ scaleX }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Scroll Progress Bar */}
      {scaleX && (
        <motion.div 
          className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-primary via-accent to-secondary" 
          style={{ scaleX }} 
        />
      )}

      {/* Layered premium gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.08),transparent_40%)]" />
      
      {/* Dynamic light streak */}
      <motion.div
        className="absolute left-0 right-0 top-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-[1px]"
        animate={{ opacity: [0.1, 0.5, 0.1], x: ['-20%', '20%', '-20%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  );
}
