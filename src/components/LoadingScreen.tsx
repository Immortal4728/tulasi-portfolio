'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const panelVariants = {
  initial: { y: '0%' },
  exit: (i: number) => ({
    y: '-100%',
    transition: {
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: i * 0.08
    }
  })
};

const textFade = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], 
      delay: 0.1 
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { 
      duration: 0.4, 
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number] 
    }
  }
};

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600); // Trigger page reveal
          return 100;
        }
        const increment = prev > 75 
          ? Math.floor(Math.random() * 2) + 1 
          : Math.floor(Math.random() * 4) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Determine current status message based on progress
  let statusMessage = '[ INIT ] ESTABLISHING SERVER CONTEXT...';
  if (progress > 85) {
    statusMessage = '[ READY ] SYSTEM STABILIZED. REVEALING PORTFOLIO.';
  } else if (progress > 60) {
    statusMessage = '[ SYNC ] RUNNING COMPILATION CHECKS...';
  } else if (progress > 35) {
    statusMessage = '[ BUILD ] INJECTING INTERACTIVE INTERFACES...';
  } else if (progress > 15) {
    statusMessage = '[ LOAD ] PARSING SYSTEM ROUTING & DB SCHEMA...';
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden select-none pointer-events-none flex flex-col justify-between p-6 md:p-12">
      {/* 4 Staggered column panels */}
      <div className="absolute inset-0 flex pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={panelVariants}
            initial="initial"
            exit="exit"
            className="h-full flex-grow bg-[#05040a] border-r border-white/[0.02] last:border-r-0"
          />
        ))}
      </div>

      {/* Loading Screen Contents (Fades out when leaving) */}
      <AnimatePresence>
        {progress < 100 && (
          <motion.div 
            className="w-full h-full flex flex-col justify-between z-10 pointer-events-none"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textFade}
          >
            {/* Header: Issue Code & Location */}
            <div className="flex justify-between items-start font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500">
              <div className="flex flex-col gap-1">
                <span>K. TULASI // PORTFOLIO</span>
                <span className="text-zinc-650 font-medium">SYS-2027 // PROT-V2</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span>VOL. 27 // ISSUE 01</span>
                <span className="text-zinc-650 font-medium">LOC // Narasaraopet AP</span>
              </div>
            </div>

            {/* Center Section: Beautiful Serif Display Name */}
            <div className="flex flex-col items-center text-center max-w-xl mx-auto my-auto gap-4">
              <h1 className="text-4xl md:text-6xl font-serif italic text-zinc-200 tracking-tight leading-tight">
                Kalavakuri Tulasi
              </h1>
              <div className="h-[1px] w-12 bg-white/20 my-1" />
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-400 leading-relaxed">
                Python &amp; Django Backend Architecture
              </p>
            </div>

            {/* Footer: Live Logs & Numeric Counter */}
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-6 gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-zinc-650 font-medium">STATUS MONITOR</span>
                <span className="text-[#8B5CF6] transition-all duration-300 font-semibold">{statusMessage}</span>
              </div>
              <div className="flex items-baseline gap-1 text-right">
                <span className="text-zinc-650 font-medium">LDR //</span>
                <span className="text-2xl md:text-3xl font-light text-zinc-200" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {progress.toString().padStart(3, '0')}
                </span>
                <span className="text-[#8B5CF6] font-semibold">%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
