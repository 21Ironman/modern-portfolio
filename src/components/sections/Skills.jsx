import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { skills } from '../../data/portfolioData';

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-28 max-w-7xl mx-auto">
      <SectionHeading label="Skills" title="Tools I use to ship polished frontend experiences." />
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <Card key={skill.name} index={index} className="p-6 border-transparent hover:border-primary/50 transition-colors">
            <div className="mb-6 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary shadow-glow">
                {skill.icon}
              </span>
              <span className="text-lg font-bold text-slate-300">{skill.value}%</span>
            </div>
            <h3 className="font-bold text-white text-lg mb-4">{skill.name}</h3>
            <div className="h-2 w-full rounded-full bg-surface2 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.1 }}
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
