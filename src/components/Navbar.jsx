import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300">
      <nav className={`
        flex items-center justify-between px-6 py-4 rounded-[2.5rem] transition-all duration-500
        ${scrolled 
          ? 'bg-background/80 backdrop-blur-xl border border-slate/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] text-primary' 
          : 'bg-transparent text-white'}
      `}>
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
            <path d="M12 2L2 22H22L12 2Z" fill="currentColor"/>
          </svg>
          <div className="font-sans font-bold text-xl tracking-tight">JUPITER LAW</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-sans font-medium text-sm">
          {['About Us', 'Practice Areas', 'Articles'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover-lift hover:text-accent transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className={`
          magnetic-btn rounded-full px-6 py-2.5 font-sans font-semibold text-sm transition-colors overflow-hidden relative group
          ${scrolled ? 'bg-accent text-primary hover:bg-primary hover:text-white' : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-primary'}
        `}>
          <span className="relative z-10">Enquiry</span>
        </button>
      </nav>
    </div>
  );
}
