import React from 'react';
import { motion } from 'framer-motion';

export function Button({ children, href, variant = 'primary', className = '', icon: Icon, onClick, type = 'button' }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-background shadow-lg hover:shadow-xl hover:bg-white hover:-translate-y-1",
    outline: "border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:-translate-y-1",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };

  const Element = href ? 'a' : 'button';
  const props = href ? { href } : { onClick, type };

  return (
    <Element 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} />}
    </Element>
  );
}
