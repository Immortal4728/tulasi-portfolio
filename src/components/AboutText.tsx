'use client';

import { motion } from 'framer-motion';

export default function AboutText() {
  return (
    <section className="relative w-full bg-[#030303] py-16 md:py-24 px-6 md:px-12 select-none overflow-hidden">
      {/* Continuing diagonal lines for background consistency */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" aria-hidden="true">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      </svg>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="pl-0 sm:pl-12 md:pl-24 flex flex-col gap-8 text-zinc-400 font-sans font-light leading-relaxed text-sm md:text-base tracking-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m Mogili Venkata Kowsalya – a Computer Science and Engineering student at Tirumala Institute of Technology and Sciences, specialized in Python and Web Technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I am currently in the third year of my Bachelor of Technology program (2023 – 2027), based in Nekarikallu, Narasaraopet, Andhra Pradesh, India. I maintain a strong academic foundation with a B.Tech percentage of 76%, following a score of 63% in Intermediate Board exams (AP Model Junior College, Dechavaram) and 97% in SSC (AP Model School, Nekarikallu).
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I specialize in Python and C programming, and I am certified in C Programming by Infosys Springboard and HTML &amp; CSS by Scrimba. I am highly motivated to design smart systems, classify predictive data metrics, and engineer machine learning classifications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-300 font-normal"
          >
            At the core of my career, I am seeking a challenging position in an organization where I can learn new skills, broaden my knowledge, and contribute to the company&apos;s success by achieving its goals through dedicated teamwork and hard work.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
