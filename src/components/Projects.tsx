'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const projects = [
  {
    num: '01',
    title: 'Driver Drowsiness Detection',
    category: 'MACHINE LEARNING & WEB',
    tech: ['Python', 'HTML', 'Pandas', 'Matplotlib', 'MySQL'],
    description: 'Developed a machine learning system using facial behavioral analysis and blink-frequency thresholds with a real-time alert mechanism to prevent road safety hazards.',
    link: '#',
    demo: '#',
    graphic: (
      <svg className="w-full h-full opacity-35 group-hover:opacity-60 transition-opacity duration-700" viewBox="0 0 400 200">
        {/* Facial outline placeholder schematic */}
        <circle cx="200" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        {/* Left eye tracker */}
        <ellipse cx="170" cy="90" rx="15" ry="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="170" cy="90" r="3" fill="#00FF55" className="animate-pulse" />
        {/* Right eye tracker */}
        <ellipse cx="230" cy="90" rx="15" ry="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="230" cy="90" r="3" fill="#00FF55" className="animate-pulse" />
        {/* Scanning lines */}
        <line x1="120" y1="130" x2="280" y2="130" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        {/* Facial Landmark Tracking Grid */}
        <line x1="200" y1="30" x2="200" y2="170" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="3 3" />
        {/* Animated flow lines */}
        <motion.path 
          d="M 100,100 L 150,90 L 170,120 L 200,90 L 230,120 L 250,90 L 300,100" 
          fill="none" 
          stroke="url(#projGrad1)" 
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="projGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="50%" stopColor="#00FF55" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Stress Level Detection',
    category: 'DATA ANALYSIS & ML',
    tech: ['Python', 'HTML', 'CSS', 'Scikit-Learn'],
    description: 'Built a predictive machine learning model to classify and predict human stress metrics using advanced data analysis techniques, returning stress zone flags.',
    link: '#',
    demo: '#',
    graphic: (
      <svg className="w-full h-full opacity-35 group-hover:opacity-60 transition-opacity duration-700" viewBox="0 0 400 200">
        <rect x="80" y="40" width="240" height="120" rx="8" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        {/* Cardiac/ECG Pulse line schematic */}
        <path d="M 90,100 L 150,100 L 160,80 L 170,130 L 180,95 L 190,105 L 200,100 L 270,100" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <motion.path 
          d="M 90,100 L 150,100 L 160,80 L 170,130 L 180,95 L 190,105 L 200,100 L 270,100" 
          fill="none" 
          stroke="#00FF55" 
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        />
        {/* Stress status indicator marker */}
        <motion.circle 
          cx="200" cy="100" r="6" 
          fill="#00FF55" 
          className="neon-glow"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#00FF55] block mb-3 font-semibold">
              03 // PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Crafted <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">Architectures.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans max-w-xl">
              A curated collection of machine learning algorithms and interactive web systems, built for predictive accuracy and fast real-time analysis.
            </p>
          </div>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="glass-panel group rounded-3xl overflow-hidden flex flex-col justify-between border-white/5 hover:border-[#00FF55]/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,255,85,0.02)]"
            >
              {/* Graphic Area */}
              <div className="relative aspect-[16/9] w-full bg-[#030303] border-b border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10" />
                
                {/* Tech Blueprint Wireframe Grid overlay inside graphic */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_80%)]" />
                
                {proj.graphic}

                <div className="absolute top-6 left-6 z-20 font-mono text-[10px] tracking-[0.2em] text-[#00FF55] border border-[#00FF55]/20 rounded-full px-3 py-1 bg-black/60 backdrop-blur-md font-semibold">
                  {proj.category}
                </div>

                <div className="absolute top-6 right-6 z-20 font-serif italic text-3xl font-light text-zinc-600/70">
                  {proj.num}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif italic text-zinc-100 group-hover:text-[#00FF55] transition-colors duration-300">
                    {proj.title}
                  </h3>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono tracking-wider uppercase border border-white/5 text-zinc-400 bg-white/[0.02] px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed font-sans mb-8">
                    {proj.description}
                  </p>
                </div>

                {/* Footer Links */}
                <div className="flex justify-between items-center border-t border-white/5 pt-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Python &amp; ML System
                  </span>
                  <a
                    href={proj.demo}
                    className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#00FF55] hover:text-[#00FFaa] transition-colors interactive-hover font-semibold"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
