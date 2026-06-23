'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Tirumala Institute of Technology & Sciences',
    period: '2023 — 2027',
    description: 'Currently in the third year (B.Tech in Computer Science and Engineering). Gaining core programming knowledge in Python, JavaScript, and backend architectures using Django. Current CGPA: 8.00.'
  },
  {
    role: 'Professional Technical Certifications',
    company: 'Infosys Springboard & Simplilearn',
    period: '2025 — 2026',
    description: 'Completed Cloud Computing Course by Infosys Springboard (23rd May 2025). Certified in Python Online Course by Simplilearn (20th Feb 2026) and Data Structures & Algorithms (DSA) by Simplilearn (28th May 2026).'
  },
  {
    role: 'Board of Intermediate (MPC)',
    company: 'Vagdavi Junior College, Narasaraopet',
    period: '2021 — 2023',
    description: 'Completed senior secondary school course under Mathematics, Physics, and Chemistry (MPC) stream. Aggregate score: 70%.'
  },
  {
    role: 'Secondary School Certificate (SSC)',
    company: 'SBR High School, Narasaraopet',
    period: '2020 — 2021',
    description: 'Graduated secondary school curriculum with an aggregate score of 96%.'
  }
];

export default function Experience() {
  return (
    <section id="education" className="relative w-full py-24 md:py-32 bg-[#05040a] overflow-hidden px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block mb-3 font-semibold">
              04 // CHRONOLOGY
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Academic <br />
              <span className="font-normal text-zinc-300">Timeline.</span>
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
          {/* Vertical line - simple and clean */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Minimalist timeline tick */}
              <div className="absolute left-[-29px] sm:left-[-53px] top-2 w-1.5 h-1.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-white" />

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Period Left Column */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-zinc-500 font-semibold tracking-widest block mt-1">
                    {exp.period}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#8B5CF6]/60 mt-1 block">
                    {exp.company}
                  </span>
                </div>

                {/* Role Details Right Column */}
                <div className="md:col-span-9">
                  <h3 className="text-xl md:text-2xl font-serif italic text-zinc-100">
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
