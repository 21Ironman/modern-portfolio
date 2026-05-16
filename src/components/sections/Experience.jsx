import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { timeline } from '../../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-28 max-w-4xl mx-auto">
      <SectionHeading label="Experience" title="A practical timeline of growth and shipped work." />
      
      <div className="relative mt-16">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2" aria-hidden="true" />
        
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative grid gap-6 sm:grid-cols-2 ${index % 2 === 0 ? '' : 'sm:[&>div]:col-start-2'}`}
            >
              <div className="absolute left-4 top-6 h-4 w-4 rounded-full bg-primary shadow-glow ring-4 ring-background sm:left-1/2 sm:-ml-2 z-10" />
              
              <Card index={index} hover={false} className="ml-12 sm:ml-0 p-8 border-l-2 border-l-primary sm:border-l-0">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4">
                  {item.period}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.role}</h3>
                <p className="leading-relaxed text-slate-300">{item.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
