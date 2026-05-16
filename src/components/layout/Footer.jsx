import React, { useMemo } from 'react';
import { profile } from '../../data/portfolioData';

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="border-t border-white/5 bg-surface/30 px-6 py-8 text-center text-sm text-slate-400 glass mt-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-primary">React</span> & <span className="text-accent">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
