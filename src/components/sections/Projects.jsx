import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { projects, profile } from '../../data/portfolioData';

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-28 max-w-7xl mx-auto">
      <SectionHeading label="Projects" title="Selected builds with real product energy." />
      
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={project.title} index={index} className="group flex flex-col h-full border-transparent hover:border-primary/50 transition-colors">
            <div className="aspect-[16/10] overflow-hidden bg-surface2 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
              <img 
                src={project.image} 
                alt={`${project.title} preview`} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-display text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <Button href="#contact" variant="primary" icon={ExternalLink} className="flex-1 text-sm py-2 px-4">
                  Live Demo
                </Button>
                <Button href={profile.github} target="_blank" variant="outline" icon={Github} className="flex-1 text-sm py-2 px-4">
                  GitHub
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
