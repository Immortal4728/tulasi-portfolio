'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const projects = [
  {
    num: '01',
    title: 'Drowsiness Alert Web System',
    category: 'BACKEND & PYTHON',
    tech: ['Python', 'Django', 'JavaScript', 'Git', 'CSS'],
    description: 'Developed a Django web application that integrates a real-time Python drowsiness detection system using blink-frequency thresholds to log alerts and manage session reports.',
    link: '#',
    demo: '#',
    footerLabel: 'Python & ML System',
    graphic: (
      <svg className="w-full h-full opacity-35 group-hover:opacity-60 transition-opacity duration-700" viewBox="0 0 400 200">
        {/* Facial outline placeholder schematic */}
        <circle cx="200" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        {/* Left eye tracker */}
        <ellipse cx="170" cy="90" rx="15" ry="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="170" cy="90" r="2.5" fill="white" />
        {/* Right eye tracker */}
        <ellipse cx="230" cy="90" rx="15" ry="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="230" cy="90" r="2.5" fill="white" />
        {/* Scanning lines */}
        <line x1="120" y1="130" x2="280" y2="130" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        {/* Facial Landmark Tracking Grid */}
        <line x1="200" y1="30" x2="200" y2="170" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="3 3" />
        {/* Animated flow lines */}
        <motion.path 
          d="M 100,100 L 150,90 L 170,120 L 200,90 L 230,120 L 250,90 L 300,100" 
          fill="none" 
          stroke="url(#projGrad1)" 
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="projGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Stress Metrics Analysis Platform',
    category: 'WEB SYSTEM & DATA',
    tech: ['Python', 'Django', 'Git', 'Data Structures'],
    description: 'Built an interactive Python-Django analytics dashboard to monitor, classify, and report student stress metrics, leveraging custom data structures for log optimization.',
    link: '#',
    demo: '#',
    footerLabel: 'Django & Analytics',
    graphic: (
      <svg className="w-full h-full opacity-35 group-hover:opacity-60 transition-opacity duration-700" viewBox="0 0 400 200">
        <rect x="80" y="40" width="240" height="120" rx="8" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        {/* Cardiac/ECG Pulse line schematic */}
        <path d="M 90,100 L 150,100 L 160,80 L 170,130 L 180,95 L 190,105 L 200,100 L 270,100" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <motion.path 
          d="M 90,100 L 150,100 L 160,80 L 170,130 L 180,95 L 190,105 L 200,100 L 270,100" 
          fill="none" 
          stroke="rgba(255,255,255,0.5)" 
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        />
        {/* Stress status indicator marker */}
        <motion.circle 
          cx="200" cy="100" r="4" 
          fill="white" 
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    )
  },
  {
    num: '03',
    title: 'FarmLink Marketplace',
    category: 'FULL-STACK WEB APP',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript', 'Router'],
    description: 'Developed a B2B/B2C agricultural supply chain and marketplace featuring distinct interactive workspaces/portals for farmers, customers, employees, and administrators.',
    link: 'https://farmlink-fe1f7.web.app/',
    demo: 'https://farmlink-fe1f7.web.app/',
    footerLabel: 'React & Firebase',
    graphic: (
      <svg className="w-full h-full opacity-35 group-hover:opacity-60 transition-opacity duration-700" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="farmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.05)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.3)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.05)" />
          </linearGradient>
        </defs>
        
        {/* Connection Network Paths */}
        <path d="M 80,100 Q 140,40 200,100 T 320,100" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <path d="M 80,100 Q 140,160 200,100 T 320,100" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        
        {/* Animated flow along supply chain */}
        <motion.path 
          d="M 80,100 Q 140,40 200,100 T 320,100" 
          fill="none" 
          stroke="url(#farmGrad)" 
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <motion.path 
          d="M 320,100 Q 260,160 200,100 T 80,100" 
          fill="none" 
          stroke="url(#farmGrad)" 
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />

        {/* Left Node: Farm Node */}
        <circle cx="80" cy="100" r="14" fill="rgba(16, 185, 129, 0.08)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
        <path d="M 76,104 L 80,95 L 84,104 Z" fill="rgba(16, 185, 129, 0.6)" />
        <circle cx="80" cy="97" r="1.5" fill="#10b981" />
        
        {/* Center Node: Marketplace Hub */}
        <circle cx="200" cy="100" r="20" fill="rgba(139, 92, 246, 0.08)" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
        <line x1="200" y1="82" x2="200" y2="118" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.8" />
        <line x1="182" y1="100" x2="218" y2="100" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.8" />
        <motion.circle 
          cx="200" cy="100" r="4.5" 
          fill="#8B5CF6" 
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />

        {/* Right Node: Consumer Terminal */}
        <circle cx="320" cy="100" r="14" fill="rgba(59, 130, 246, 0.08)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
        <rect x="314" y="95" width="12" height="10" rx="1" fill="rgba(59, 130, 246, 0.6)" />
        <path d="M 312,95 L 320,89 L 328,95 Z" fill="rgba(59, 130, 246, 0.6)" />

        {/* Telemetry Labels */}
        <text x="80" y="76" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace" textAnchor="middle">FARM_PROD</text>
        <text x="200" y="70" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace" textAnchor="middle">MARKET_HUB</text>
        <text x="320" y="76" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace" textAnchor="middle">CONSUMER</text>
        
        {/* Analytics line graph schematic */}
        <line x1="140" y1="155" x2="260" y2="155" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        <path d="M 140,155 L 160,142 L 180,146 L 200,132 L 220,138 L 240,126 L 260,132" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.5" />
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
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block mb-3 font-semibold">
              03 // PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Crafted <br />
              <span className="font-normal text-zinc-300">Architectures.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans max-w-xl">
              A curated collection of custom backend architectures and interactive web systems, built for optimized server-side logic and real-time operations.
            </p>
          </div>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="border border-white/10 group rounded-2xl overflow-hidden flex flex-col justify-between bg-white/[0.01] hover:border-white/20 transition-all duration-500"
            >
              {/* Graphic Area */}
              <div className="relative aspect-[16/9] w-full bg-[#05040a] border-b border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10" />
                
                {/* Tech Blueprint Wireframe Grid overlay inside graphic */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_80%)]" />
                
                {proj.graphic}

                <div className="absolute top-6 left-6 z-20 font-mono text-[9px] tracking-[0.2em] text-zinc-300 border border-white/10 rounded-md px-3 py-1 bg-zinc-950/80 backdrop-blur-md uppercase">
                  {proj.category}
                </div>

                <div className="absolute top-6 right-6 z-20 font-serif italic text-3xl font-light text-zinc-600/70">
                  {proj.num}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif italic text-zinc-100 group-hover:text-[#8B5CF6] transition-colors duration-300">
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
                    {proj.footerLabel}
                  </span>
                  <a
                    href={proj.demo}
                    target={proj.demo.startsWith('http') ? '_blank' : undefined}
                    rel={proj.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#8B5CF6] hover:text-[#EC4899] transition-colors interactive-hover font-semibold"
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
