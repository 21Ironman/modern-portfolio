import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ label, title }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="mb-12">
      <motion.div 
        variants={fadeUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-4 mb-4"
      >
        <span className="h-px w-8 bg-primary"></span>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          {label}
        </p>
      </motion.div>
      <motion.h2 
        variants={fadeUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl max-w-3xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
