'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ThanksSection() {
  const [likes, setLikes] = useState(1420);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1);
      setLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setLiked(true);
    }
  };

  return (
    <section className="relative w-full bg-[#030303] overflow-hidden pt-24 border-t border-white/5 select-none">
      
      {/* Background blueprint lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
        <line x1="0" y1="80%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* THANKS FOR READING BOARD CONTAINER */}
        <div className="relative w-full max-w-4xl py-12 md:py-20 flex flex-col justify-center items-center">
          
          {/* Main Title Layout */}
          <div className="flex flex-col relative select-none z-10 text-center">
            {/* Thanks */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-7xl sm:text-[8rem] md:text-[10rem] font-serif italic text-zinc-100 font-light leading-[0.9] tracking-tight text-textured"
            >
              Thanks
            </motion.h2>

            {/* Cursive green "for" */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-script text-[#00FF55] text-6xl sm:text-7xl md:text-8xl tracking-normal inline-block select-none rotate-[-6deg] lowercase relative z-20 my-2 filter drop-shadow-[0_0_15px_rgba(0,255,85,0.4)]"
            >
              for
            </motion.span>

            {/* Reading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-7xl sm:text-[8rem] md:text-[10rem] font-serif italic text-zinc-200 font-bold leading-[0.9] tracking-tighter text-textured mt-1"
            >
              Reading
            </motion.h2>
          </div>

          {/* Squiggly handwritten arrow pointing left under "for" */}
          <div className="absolute left-[15%] sm:left-[25%] bottom-[12%] w-24 h-16 pointer-events-none hidden md:block z-30">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-zinc-600 stroke-current">
              <motion.path 
                d="M 90,80 Q 50,60 20,40 T 10,10" 
                strokeWidth="1.5" 
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.path 
                d="M 22,12 L 10,10 L 12,22" 
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
              />
            </svg>
          </div>

          {/* Pink CSE sticker on the right */}
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 14 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", delay: 0.8 }}
            className="absolute right-[5%] sm:right-[15%] top-[25%] bg-gradient-to-br from-pink-500 to-rose-600 text-white font-mono font-black text-xs py-2 px-5 tracking-[0.2em] rounded-lg shadow-2xl border border-pink-400/40 uppercase rotate-[14deg] select-none z-20"
          >
            CSE
          </motion.div>

        </div>

        {/* LEFT REPEATED SOCIAL LINKS */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/5 py-10 gap-8 mt-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-[10px] tracking-wider text-zinc-500">
            <a 
              href="mailto:venkatakowsalyamogili@gmail.com" 
              className="flex items-center justify-center gap-2 hover:text-[#00FF55] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>VENKATAKOWSALYAMOGILI@GMAIL.COM</span>
            </a>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <a 
              href="https://www.linkedin.com/in/venkata-kowsalyamogili-5b71b3354" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-[#00FF55] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LN.COM/IN/VENKATA-KOWSALYAMOGILI-5B71B3354</span>
            </a>
          </div>

          <div className="font-mono text-[9px] text-zinc-600 tracking-[0.2em] uppercase">
            M. Kowsalya // Nekarikallu 2026
          </div>
        </div>

      </div>

      {/* BEHANCE STYLE FOOTER */}
      <footer className="w-full bg-[#0a0a0a] border-t border-white/5 py-12 px-6 flex flex-col items-center gap-6">
        <p className="font-mono text-[10px] text-zinc-500 tracking-[0.15em] uppercase">
          Follow me on: <a href="https://www.linkedin.com/in/venkata-kowsalyamogili-5b71b3354" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF55] underline transition-colors">LINKEDIN</a>
        </p>

        {/* Blue Behance-like Like Button */}
        <motion.div 
          onClick={handleLike}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 ${
            liked ? 'bg-[#00FF55] text-[#030303] shadow-[0_0_20px_rgba(0,255,85,0.4)]' : 'bg-[#0055ff] text-white hover:bg-[#1a66ff]'
          }`}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M2 10.5a1.5 1.5 0 1 1 3 0v9a1.5 1.5 0 1 1-3 0v-9zm18.25-1.07a1.5 1.5 0 0 0-1.02-.43H14.1l.9-4.5.02-.26a1.5 1.5 0 0 0-.44-1.06L13.52 2 7.76 7.76a1.5 1.5 0 0 0-.43 1.06v9.18A1.5 1.5 0 0 0 8.83 19.5h7.26a1.5 1.5 0 0 0 1.39-.98l2.97-6.93c.08-.2.12-.41.12-.62v-1.12a1.5 1.5 0 0 0-.32-.42z" />
          </svg>
        </motion.div>

        {/* Title */}
        <h3 className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] text-zinc-300 uppercase text-center mt-2">
          CSE &amp; MACHINE LEARNING PORTFOLIO 2026 | MOGILI VENKATA KOWSALYA
        </h3>

        {/* Statistics Row */}
        <div className="flex gap-8 mt-2 text-zinc-500 font-mono text-[10px] tracking-wider">
          <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.75 0 1.41-.41 1.75-1.03l3.58-8.35c.09-.23.15-.47.15-.73v-1.91z"/>
            </svg>
            <span>{likes}</span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>24.8K</span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>182</span>
          </div>
        </div>

        {/* Publication Date */}
        <p className="font-mono text-[9px] text-zinc-600 tracking-wider mt-4">
          Published: June 21st 2026
        </p>
      </footer>
    </section>
  );
}
