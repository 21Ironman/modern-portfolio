import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../../data/portfolioData';

export function Navbar({ active, menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 text-lg font-bold font-display group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow group-hover:shadow-glow-accent transition-all duration-300">
            {profile.name.charAt(0)}
          </span>
          <span className="tracking-wide">{profile.shortName}</span>
        </a>
        <div className="hidden items-center gap-2 md:flex p-1 rounded-full border border-white/5 bg-white/5 glass">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                active === item ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === item && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full bg-white/10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-100 md:hidden hover:bg-white/5 transition-colors"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-surface/95 px-6 py-4 md:hidden glass"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block rounded-lg px-4 py-3 text-sm font-medium capitalize text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
