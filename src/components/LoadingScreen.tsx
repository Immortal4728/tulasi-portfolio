'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [activeWord, setActiveWord] = useState(0);
  const words = ['M. KOWSALYA', 'PYTHON DEVELOPER', 'VERSION 2026'];

  useEffect(() => {
    // Increment progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        // Speed up near the end
        const increment = prev > 70 ? Math.floor(Math.random() * 8) + 3 : Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    // Rotate words
    const wordTimer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, [onComplete, words.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#030303] p-8 md:p-16 select-none"
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />

      {/* Top Section */}
      <div className="flex justify-between items-start z-10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">portfolio system</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF55] animate-ping" />
            <span className="text-xs uppercase tracking-[0.1em] text-[#00FF55] font-mono">initializing</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">location</span>
          <p className="text-xs font-mono text-zinc-300 mt-1">127.0.0.1 // LOCAL</p>
        </div>
      </div>

      {/* Middle Section - Word Cycling */}
      <div className="flex flex-col items-center justify-center flex-grow z-10">
        <div className="h-16 relative w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeWord}
              initial={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -20, opacity: 0, filter: 'blur(5px)' }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-2xl md:text-4xl font-serif italic text-zinc-100 tracking-wider text-center"
            >
              {words[activeWord]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Section - Large counter */}
      <div className="flex justify-between items-end z-10 border-t border-white/5 pt-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">author</span>
          <p className="text-sm font-mono text-zinc-300 mt-1">M. KOWSALYA</p>
        </div>
        <div className="flex items-baseline font-serif">
          <motion.span 
            className="text-8xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800 leading-none"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {progress.toString().padStart(2, '0')}
          </motion.span>
          <span className="text-xl md:text-3xl text-[#00FF55] font-sans font-semibold ml-2">%</span>
        </div>
      </div>
    </motion.div>
  );
}
