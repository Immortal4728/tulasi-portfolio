'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  // Animation presets
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const lineDraw = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030303] px-6 py-20 select-none">
      
      {/* Background Geometric Grid & Faint Lines */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.04] pointer-events-none" />
      
      {/* Precision Diagonal Construction Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
        <motion.line 
          x1="0" y1="100%" x2="100%" y2="0" 
          stroke="rgba(255,255,255,0.04)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.line 
          x1="15%" y1="0" x2="85%" y2="100%" 
          stroke="rgba(255,255,255,0.03)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="28%" cy="65%" r="150" 
          fill="none" 
          stroke="rgba(255,255,255,0.015)" 
          strokeWidth="0.5"
        />
      </svg>

      {/* TOP HEADER LINE & BADGE */}
      <div className="absolute top-8 left-0 w-full px-8 md:px-16 flex items-center z-20">
        <div className="w-2 h-2 rounded-full bg-[#00FF55] mr-4 neon-glow" />
        <div className="flex-grow h-[1px] bg-white/5 relative">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#00FF55] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* LEFT VERTICAL TEXT - M. KOWSALYA */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-6 z-20 mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-zinc-500 whitespace-nowrap -rotate-90 origin-center translate-y-[-40px]">
          M. KOWSALYA
        </span>
        <div className="h-10 w-[1px] bg-white/10" />
        <Sparkles size={12} className="text-[#00FF55] animate-pulse" />
      </div>

      {/* RIGHT VERTICAL TEXT - PYTHON DEVELOPER */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-6 z-20 mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-zinc-500 whitespace-nowrap rotate-90 origin-center translate-y-[40px]">
          PYTHON DEVELOPER
        </span>
        <div className="h-10 w-[1px] bg-white/10" />
        <div className="flex flex-col gap-1 text-[#00FF55]">
          <Sparkles size={12} className="animate-pulse" />
        </div>
      </div>

      {/* MAIN HERO TYPOGRAPHY BLOCK */}
      <div className="relative flex flex-col justify-center items-center w-full max-w-7xl z-10">
        
        {/* Neon Green Accent Year Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="absolute top-[-40px] md:top-[-60px] left-[15%] sm:left-[22%] z-30"
        >
          <div className="bg-[#00FF55] text-[#030303] text-xs font-mono font-bold px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,255,85,0.4)] tracking-wider">
            2027
          </div>
        </motion.div>

        {/* Text Container */}
        <div className="flex flex-col select-none text-center sm:text-left relative">
          
          {/* Top Line Name Word 1 */}
          <h1 className="text-7xl sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-serif italic font-light leading-[0.85] text-zinc-100 tracking-tight relative pr-12 md:pr-24">
            <span className="text-textured drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Mogili Venkata
            </span>
          </h1>

          {/* Bottom Line Name Word 2 */}
          <h1 className="text-7xl sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-serif italic font-bold leading-[0.85] text-zinc-300 tracking-tighter pl-12 sm:pl-32 md:pl-48 mt-[-10px] md:mt-[-25px] relative">
            <span className="text-textured drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Kowsalya
            </span>
            <span className="absolute top-[30%] right-[-15px] sm:right-[-35px] text-[10px] md:text-sm font-mono border border-zinc-500/30 rounded-full px-2 py-0.5 font-normal tracking-normal text-zinc-500 bg-black/50">
              ®
            </span>
          </h1>

          {/* Calligraphic Green SVG Stroke Weaving Integrated Into Typography */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full overflow-visible opacity-90 filter drop-shadow-[0_0_15px_rgba(0,255,85,0.9)]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FF55" />
                  <stop offset="50%" stopColor="#00FFaa" />
                  <stop offset="100%" stopColor="#05ff54" />
                </linearGradient>
              </defs>
              {/* This curve represents the cursive 'y' loop / 'f' ligature style curve from the original layout */}
              <motion.path
                d="M 290,460 C 180,480 220,380 380,310 C 580,220 620,60 550,50 C 470,40 430,220 380,300 C 330,380 250,420 580,260"
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="5.5"
                strokeLinecap="round"
                variants={lineDraw}
                initial="initial"
                animate="animate"
              />
            </svg>
          </div>
        </div>

        {/* FLOATING UI ELEMENTS SECTION */}
        <div className="w-full mt-16 md:mt-24 px-4 sm:px-12 md:px-24 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 z-30">
          
          {/* Bottom Left Floating Box: VERSION / 2027 */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.1 }}
            className="flex items-start gap-3"
          >
            <span className="text-xl md:text-2xl text-zinc-400 font-light mt-0.5">↘</span>
            <div className="font-mono">
              <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">VERSION /</p>
              <p className="text-sm font-semibold tracking-wider text-[#00FF55] mt-0.5">2027</p>
            </div>
          </motion.div>

          {/* Bottom Right Floating Box: DESIGN EXECUTED BY M. KOWSALYA */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.2 }}
            className="flex items-start gap-4"
          >
            <div className="w-9 h-9 rounded-full border border-white/20 hover:border-[#00FF55] hover:bg-[#00FF55]/10 flex items-center justify-center text-zinc-400 hover:text-[#00FF55] transition-all duration-300 cursor-pointer">
              <span className="text-lg">↗</span>
            </div>
            <div className="text-left font-mono">
              <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">PORTFOLIO EXECUTED</p>
              <p className="text-xs text-zinc-300 font-light mt-0.5">
                by <span className="text-zinc-100 font-semibold tracking-widest">M. KOWSALYA</span>
              </p>
              {/* Thin accent line matching the original Atikur Rahman text decoration */}
              <div className="mt-2 flex items-center gap-1.5">
                <div className="h-[1px] w-8 bg-zinc-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <div className="h-[1px] w-8 bg-zinc-600" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating Mouse Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-mono">scroll down</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>

    </section>
  );
}
