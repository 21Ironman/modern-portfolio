import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Github, Linkedin } from 'lucide-react';
import { profile } from '../../data/portfolioData';
import { Button } from '../ui/Button';

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center py-20 z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 shadow-lg backdrop-blur-md"
          >
            <Sparkles size={16} className="text-primary" />
            4+ years building healthcare web apps
          </motion.div>
          <h1 className="font-display text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-4 block bg-gradient-to-r from-primary via-slate-300 to-accent bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            I build high-performance, accessible web applications with Angular, Next.js, React, and TypeScript, with deep experience in healthcare product interfaces.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href="#contact" variant="outline" icon={Mail}>
              Contact Me
            </Button>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
