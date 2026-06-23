'use client';

import { motion } from 'framer-motion';
import { Shield, Layers, Cpu } from 'lucide-react';

const pillars = [
  {
    icon: <Shield className="text-[#8B5CF6]" size={24} />,
    title: 'Backend Engineering',
    description: 'Developing clean, secure, and scalable server-side systems using Python and the Django framework.'
  },
  {
    icon: <Layers className="text-[#8B5CF6]" size={24} />,
    title: 'Data Structures & Algorithms',
    description: 'Implementing efficient data arrangements and solving complex problems with optimized algorithmic performance.'
  },
  {
    icon: <Cpu className="text-[#8B5CF6]" size={24} />,
    title: 'Web & Version Control',
    description: 'Building modern interfaces with JavaScript, HTML, CSS, and managing project workflows collaboratively using Git.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden px-6 md:px-12 border-t border-white/5">
      {/* Background grid details */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block mb-3 font-semibold">
              01 // CONCEPT
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Crafting Smart <br />
              <span className="font-normal text-zinc-300">Systems.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed font-sans max-w-2xl">
              Kalavakuri Tulasi is an independent and self-motivating graduation aspirant in Computer Science. Specialized in Python and Django backend engineering, her work is driven by a passion for learning new technologies, developing innovative solutions, and working collaboratively in dynamic environments.
            </p>
          </div>
        </div>

        {/* Brand Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            {/* Visual Glassmorphic Frame resembling a blueprints schematic */}
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 relative p-8 flex flex-col justify-between overflow-hidden bg-white/[0.02]">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">PROJECTED ACADEMICS</span>
                <span className="font-mono text-[9px] text-[#8B5CF6] tracking-widest font-semibold uppercase">2027 // GRAD</span>
              </div>

              <div className="my-auto flex flex-col gap-2">
                <p className="font-serif italic text-3xl md:text-4xl text-zinc-200 font-light leading-snug">
                  &ldquo;Software is not just execution. <br />It is the logic of human adaptability.&rdquo;
                </p>
                <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-mono mt-3">
                  — K. TULASI
                </p>
              </div>

              <div className="flex justify-between items-end border-t border-white/5 pt-4">
                <div className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
                  SYSTEM CORE: <span className="text-zinc-300">PYTHON / DJANGO / JS / GIT</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="text-2xl md:text-3xl font-serif text-zinc-200 font-light">
              Engineering Diligence at the Core
            </h3>
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed font-sans">
              As an engineering student at Tirumala Institute of Technology and Sciences, I design clean backend architectures and solve algorithmic challenges. By combining backend development with problem-solving skills, I create scalable web systems.
            </p>
            
            {/* Minimal Stat counter list */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-4xl md:text-5xl font-serif text-zinc-100 font-extralight tracking-tighter">
                  8.00
                </p>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#8B5CF6] font-mono mt-2 font-medium">
                  B.Tech CGPA (Third Year)
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-serif text-zinc-100 font-extralight tracking-tighter">
                  96%
                </p>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#8B5CF6] font-mono mt-2 font-medium">
                  SSC Percentage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Key Focus Area Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border border-white/10 p-8 rounded-xl flex flex-col gap-5 bg-white/[0.01]"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-serif italic text-zinc-200 font-light">
                {pillar.title}
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed font-sans">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
