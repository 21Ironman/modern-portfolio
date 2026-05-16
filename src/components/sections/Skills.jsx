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
          <Card key={skill.name} index={index} className="p-6 flex flex-col items-center justify-center text-center border-transparent hover:border-emerald-500/30 transition-all hover:-translate-y-1">
            <span className="mb-4 grid h-14 w-14 place-items-center rounded-xl bg-emerald-500/10 text-base font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              {skill.icon}
            </span>
            <h3 className="font-bold text-slate-200 text-base">{skill.name}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
}
