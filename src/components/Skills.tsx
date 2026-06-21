'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'languages', name: 'Programming Languages' },
  { id: 'webtech', name: 'Web Technologies' },
  { id: 'tools', name: 'Tools & Libraries' }
];

const skillData = [
  // Programming Languages
  { name: 'Python', level: 92, category: 'languages', tags: ['Object Oriented', 'Data Analysis', 'Scripting'] },
  { name: 'C Programming', level: 85, category: 'languages', tags: ['Variables & Pointers', 'Data Structures', 'Infosys Springboard'] },
  
  // Web Technologies
  { name: 'HTML', level: 95, category: 'webtech', tags: ['Semantic HTML5', 'Scrimba Certified', 'Forms & Elements'] },
  { name: 'CSS', level: 88, category: 'webtech', tags: ['Flexbox & Grid', 'Responsive Design', 'Custom Animations'] },
  
  // Tools & Libraries
  { name: 'Pandas', level: 82, category: 'tools', tags: ['DataFrames', 'Data Cleaning', 'Data Analysis'] },
  { name: 'Matplotlib', level: 80, category: 'tools', tags: ['Data Visualization', 'Line & Bar Charts', 'Plotting'] },
  { name: 'MySQL', level: 84, category: 'tools', tags: ['Relational Schema', 'SQL Queries', 'Database Integrity'] },
  { name: 'Machine Learning', level: 83, category: 'tools', tags: ['Classification', 'Facial Analysis', 'Behavioral Systems'] }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const filteredSkills = skillData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 bg-[#030303] overflow-hidden px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#00FF55] block mb-3 font-semibold">
              02 // EXPERTISE
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Technical <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">Weaponry.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans max-w-xl">
              Building smart machine learning applications requires robust Python algorithms and structured datasets, matched with responsive, clean web interfaces.
            </p>
          </div>
        </div>

        {/* Tab & Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Tabs Selector Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500 mb-2">CATEGORIES</p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full text-left px-6 py-4 rounded-xl font-mono text-xs uppercase tracking-[0.15em] border transition-all duration-300 flex justify-between items-center interactive-hover ${
                  activeTab === cat.id
                    ? 'bg-[#00FF55]/5 border-[#00FF55] text-[#00FF55] neon-glow'
                    : 'bg-transparent border-white/5 text-zinc-400 hover:text-zinc-200 hover:border-white/10'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${activeTab === cat.id ? 'bg-[#00FF55] animate-pulse' : 'bg-zinc-700'}`} />
              </button>
            ))}
          </div>

          {/* Skills Grid Right Column */}
          <div className="lg:col-span-8">
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="glass-panel p-6 rounded-2xl flex flex-col justify-between border-white/5 hover:border-[#00FF55]/20 group transition-colors duration-300"
                  >
                    <div>
                      {/* Title & Level */}
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-serif italic text-zinc-200 group-hover:text-zinc-100 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-xs text-[#00FF55] tracking-wider font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Mini Meter */}
                      <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden mb-6">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#00FF55] to-[#00FFaa]"
                        />
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-mono tracking-wider uppercase bg-white/[0.03] border border-white/[0.04] text-zinc-400 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
