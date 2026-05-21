import React, { useState, useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { navItems } from './data/portfolioData';

// Layout
import { Background } from './components/layout/Background';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Sections
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

// UI & Layout
import { MouseGlow } from './components/ui/MouseGlow';
import { Scene3D } from './components/layout/Scene3D';

export default function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });

  useEffect(() => {
    const sections = navItems
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      // Detect when a section crosses the exact center of the screen
      { rootMargin: '-50% 0px -49% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-slate-200">
      <Scene3D />
      <MouseGlow />
      <Background scaleX={scaleX} />
      <Navbar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
