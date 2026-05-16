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
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-glow"
          >
            <Sparkles size={16} className="text-primary" />
            4+ years building healthcare web apps
          </motion.div>
          <h1 className="font-display max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-3 block bg-gradient-to-r from-primary via-sky-300 to-accent bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build high-performance, accessible web applications with Angular, Next.js, React, and TypeScript, with deep experience in healthcare product interfaces.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href="#contact" variant="outline" icon={Mail}>
              Contact Me
            </Button>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Abstract Premium Visual Component */}
          <div className="portfolio-visual relative p-6">
            <div className="visual-toolbar absolute top-0 left-0 right-0">
              <span />
              <span />
              <span />
            </div>
            <div className="mt-12 grid gap-6 h-full">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-32 rounded-xl bg-gradient-to-br from-primary/80 via-sky-400/50 to-accent/80 backdrop-blur shadow-glow"
              />
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="h-24 rounded-xl bg-white/10 glass border border-white/5"
                  />
                ))}
              </div>
              <div className="space-y-4">
                <span className="block h-4 w-4/5 rounded-full bg-slate-400/20" />
                <span className="block h-4 w-2/3 rounded-full bg-slate-500/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
