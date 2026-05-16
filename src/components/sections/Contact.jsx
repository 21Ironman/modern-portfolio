import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { profile } from '../../data/portfolioData';

export function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-28 max-w-7xl mx-auto">
      <SectionHeading label="Contact" title="Have a frontend idea worth making real?" />
      
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card index={0} hover={false} className="p-8 lg:p-10 border-transparent hover:border-primary/30 transition-colors">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-8 shadow-glow">
            <BriefcaseBusiness className="text-primary" size={32} />
          </div>
          <p className="text-lg leading-8 text-slate-300 mb-8">
            I’m open to frontend roles and product teams that need strong Angular, Next.js, React, TypeScript, and UI engineering experience. Send a note and I’ll reply with next steps.
          </p>
          
          <div className="space-y-6">
            <ContactLink icon={Mail} href={`mailto:${profile.email}`} text={profile.email} />
            <ContactLink icon={Phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} text={profile.phone} />
            <ContactLink icon={MapPin} text={profile.location} />
          </div>

          <div className="mt-12 flex gap-4">
             <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                <Github size={20} />
             </a>
             <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-all">
                <Linkedin size={20} />
             </a>
          </div>
        </Card>
        
        <Card index={1} hover={false} className="p-8 lg:p-10">
          <form aria-label="Contact form" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2 mb-6">
              <Field label="Name" id="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
              <Field label="Email" id="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <Field label="Subject" id="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry" className="mb-6" />
            
            <label className="block mb-8">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
              <textarea 
                required
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[160px] w-full rounded-xl border border-white/10 bg-surface2/50 px-5 py-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-primary focus:bg-surface2 focus:shadow-glow resize-y" 
                placeholder="Tell me about your project..." 
              />
            </label>
            
            <Button type="submit" variant="primary" icon={isLoading ? Loader2 : Send} disabled={isLoading} className="w-full sm:w-auto disabled:opacity-70">
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
            
            {status.message && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className={`mt-6 text-sm flex items-center gap-2 ${status.type === 'success' ? 'text-primary' : 'text-red-400'}`} 
                role="status"
              >
                <span className={`h-2 w-2 rounded-full ${status.type === 'success' ? 'bg-primary animate-pulse' : 'bg-red-400'}`} />
                {status.message}
              </motion.p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, href, text }) {
  const content = (
    <>
      <div className="h-10 w-10 rounded-lg bg-surface2 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
         <Icon size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
      </div>
      <span className="text-slate-300 group-hover:text-white transition-colors">{text}</span>
    </>
  );

  return href ? (
    <a href={href} className="flex items-center gap-4 group">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4 group">
      {content}
    </div>
  );
}

function Field({ label, id, type = 'text', value, onChange, placeholder, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
      <input
        required
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-surface2/50 px-5 py-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-primary focus:bg-surface2 focus:shadow-glow"
      />
    </label>
  );
}
