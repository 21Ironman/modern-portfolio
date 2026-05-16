import React from 'react';
import { motion } from 'framer-motion';
import { Code2, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function About() {
  const highlights = [
    'Healthcare dashboards', 
    'Reusable component systems', 
    'Performance optimization', 
    'Accessible responsive UX'
  ];

  return (
    <section id="about" className="relative px-6 py-24 sm:py-28 max-w-7xl mx-auto">
      <SectionHeading label="About" title="Frontend work with taste, speed, and care." />
      
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card index={0} className="p-8">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Code2 className="text-primary" size={28} />
          </div>
          <p className="text-lg leading-8 text-slate-300">
            I’m a results-driven frontend developer from Kakinada, Andhra Pradesh, with 4 years of experience engineering scalable web applications. My work spans reusable component libraries, REST API integration, RxJS and Redux state management, unit testing, CI/CD, and Core Web Vitals improvements.
          </p>
        </Card>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <Card key={item} index={index + 1} className="p-6 flex flex-col justify-center gap-4">
              <CheckCircle2 className="text-accent" size={28} />
              <span className="font-semibold text-slate-100 text-lg">{item}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
