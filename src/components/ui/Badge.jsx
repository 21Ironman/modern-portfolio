import React from 'react';

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: "border-white/10 bg-white/5 text-slate-300",
    primary: "border-primary/30 bg-primary/10 text-primary",
    accent: "border-accent/30 bg-accent/10 text-accent",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
