'use client';

import { motion } from 'framer-motion';
import { Shield, Layers, Cpu } from 'lucide-react';

const pillars = [
  {
    icon: <Shield className="text-[#00FF55]" size={24} />,
    title: 'Python Engineering',
    description: 'Designing data pipelines, database tables with MySQL, and writing clean, object-oriented solutions for predictive analysis.'
  },
  {
    icon: <Layers className="text-[#00FF55]" size={24} />,
    title: 'Machine Learning Systems',
    description: 'Building classifiers for behavioral analysis, predicting human stress metrics, and tracking driver drowsiness in real-time.'
  },
  {
    icon: <Cpu className="text-[#00FF55]" size={24} />,
    title: 'Web Technologies',
    description: 'Developing semantic markup with HTML, clean CSS styling configurations, and linking frontend inputs with ML algorithms.'
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
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#00FF55] block mb-3 font-semibold">
              01 // CONCEPT
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Crafting Smart <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">Systems.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed font-sans max-w-2xl">
              Mogili Venkata Kowsalya is a motivated Computer Science student specializing in Machine Learning, predictive analytics, and clean programming structures. Operating at the intersection of modern Python software models and light interface design, her work establishes a core foundation of adaptability, data accuracy, and diligent time management.
            </p>
          </div>
        </div>

        {/* Brand Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            {/* Visual Glassmorphic Frame resembling a blueprints schematic */}
            <div className="aspect-[4/3] w-full rounded-2xl glass-panel relative p-8 flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF55]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-[#00FF55] transition-colors" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-[#00FF55] transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-[#00FF55] transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-[#00FF55] transition-colors" />

              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-zinc-500 tracking-wider">PROJECTED ACADEMICS</span>
                <span className="font-mono text-xs text-[#00FF55] tracking-widest neon-glow-text font-bold">2027 // GRAD</span>
              </div>

              <div className="my-auto flex flex-col gap-2">
                <p className="font-serif italic text-4xl text-zinc-200">
                  &ldquo;Software is not just execution. <br />It is the logic of human adaptability.&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono mt-3">
                  — M. KOWSALYA
                </p>
              </div>

              <div className="flex justify-between items-end border-t border-white/5 pt-4">
                <div className="font-mono text-[10px] text-zinc-500">
                  SYSTEM CORE: <span className="text-zinc-300">PYTHON 3 / MACHINE LEARNING / HTML</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF55] neon-glow" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="text-2xl md:text-3xl font-serif text-zinc-200 font-light">
              Engineering Diligence at the Core
            </h3>
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed font-sans">
              As an engineering student at Tirumala Institute of Technology, I develop algorithms that classify patterns and solve real-world problems. By combining Python data analysis with clean web structures, I create tools that feel both analytical and functional.
            </p>
            
            {/* Minimal Stat counter list */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-3xl md:text-4xl font-serif text-zinc-100 font-semibold tracking-tight">
                  76%
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#00FF55] font-mono mt-1">
                  B.Tech Aggregate Score
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-zinc-100 font-semibold tracking-tight">
                  97%
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#00FF55] font-mono mt-1">
                  SSC School Top Percentage
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col gap-5 group transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-[#00FF55] group-hover:bg-[#00FF55]/5 transition-all duration-300">
                {pillar.icon}
              </div>
              <h4 className="text-xl font-serif italic text-zinc-200 font-light group-hover:text-zinc-100">
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
