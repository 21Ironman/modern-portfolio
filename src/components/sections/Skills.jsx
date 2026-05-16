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
          <Card key={skill.name} index={index} className="p-6 border-transparent hover:border-emerald-500/20 transition-colors">
            <div className="mb-6 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-sm font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                {skill.icon}
              </span>
              {/* Removed the number percentage as requested */}
            </div>
            <h3 className="font-bold text-white text-lg mb-4">{skill.name}</h3>
            <div className="h-1.5 w-full rounded-full bg-surface2 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500/80 to-teal-400/80"
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
