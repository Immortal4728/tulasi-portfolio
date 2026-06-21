'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Tirumala Institute of Technology & Sciences',
    period: '2023 — 2027',
    description: 'Currently in the third year of B.Tech. Gaining specialized hands-on training in Python programming, machine learning classifications, and relational database schemas with MySQL. Aggregate score: 76%.'
  },
  {
    role: 'Professional Technical Certifications',
    company: 'Infosys Springboard & Scrimba',
    period: 'MAY 2025',
    description: 'Completed certification in C Programming by Infosys Springboard, validating core algorithmic reasoning and array management. Certified in HTML & CSS by Scrimba, covering semantic interfaces and responsive layouts.'
  },
  {
    role: 'Board of Intermediate (MPC)',
    company: 'AP Model Junior College, Dechavaram',
    period: '2021 — 2023',
    description: 'Completed senior secondary school course under Mathematics, Physics, and Chemistry (MPC) stream. Aggregate score: 63%.'
  },
  {
    role: 'Secondary School Certificate (SSC)',
    company: 'AP Model School, Nekarikallu',
    period: '2020 — 2021',
    description: 'Graduated secondary school curriculum with an outstanding aggregate score of 97%.'
  }
];

export default function Experience() {
  return (
    <section id="education" className="relative w-full py-24 md:py-32 bg-[#030303] overflow-hidden px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#00FF55] block mb-3 font-semibold">
              04 // CHRONOLOGY
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Academic <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">Timeline.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans">
              A historical trace of educational achievements, technical training milestones, and professional programming certifications.
            </p>
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative mt-12 pl-6 sm:pl-12 border-l border-white/10 flex flex-col gap-16">
          {/* Vertical line glow overlay */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-[#00FF55] to-transparent opacity-30" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Pulsing glow node at the left line junction */}
              <div className="absolute left-[-30px] sm:left-[-54px] top-1.5 w-3 h-3 rounded-full bg-zinc-900 border border-white/20 group-hover:border-[#00FF55] group-hover:bg-[#00FF55]/10 flex items-center justify-center transition-colors duration-300">
                <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-[#00FF55] group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Period Left Column */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-zinc-500 font-semibold tracking-widest block mt-1">
                    {exp.period}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#00FF55]/60 mt-1 block">
                    {exp.company}
                  </span>
                </div>

                {/* Role Details Right Column */}
                <div className="md:col-span-9">
                  <h3 className="text-xl md:text-2xl font-serif italic text-zinc-100 group-hover:text-[#00FF55] transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed font-sans mt-4 max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
