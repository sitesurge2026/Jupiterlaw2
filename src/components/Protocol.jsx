import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Case Architecture',
    desc: "We don't just review facts; we engineer the legal framework to dictate the terms of engagement.",
    Anim: () => (
      <div className="w-full h-full flex items-center justify-center relative">
        <svg viewBox="0 0 100 100" className="w-full h-full p-12 max-w-md opacity-20 animate-[spin_30s_linear_infinite]">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 15 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 85 L20 20 L80 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    )
  },
  {
    num: '02',
    title: 'Strategic Injunction',
    desc: "Deploying aggressive, calculated motions to secure early leverage and compel rapid compliance.",
    Anim: () => (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-12 opacity-30">
        <div className="w-full max-w-md aspect-video relative flex flex-wrap gap-2 justify-center">
            {Array.from({length: 40}).map((_, i) => (
              <div key={i} className="w-6 h-6 border border-current rounded-sm opacity-20" />
            ))}
        </div>
        <div className="absolute left-0 right-0 h-0.5 bg-accent shadow-[0_0_15px_#C9A84C] top-0 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] z-10" 
             style={{ top: '50%', transform: 'translateY(-50%)' }} />
      </div>
    )
  },
  {
    num: '03',
    title: 'Absolute Resolution',
    desc: "Extracting maximum value through relentless negotiation, arbitration, or definitive trial victory.",
    Anim: () => (
      <div className="w-full h-full flex items-center justify-center relative p-12 opacity-30">
        <svg viewBox="0 0 200 50" className="w-full max-w-md h-auto">
          <path 
            className="animate-[dash_3s_linear_infinite]"
            d="M0,25 L50,25 L60,5 L70,45 L80,25 L200,25" 
            fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        </svg>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dash {
            0% { stroke-dasharray: 0, 250; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 250, 0; stroke-dashoffset: 0; }
            100% { stroke-dasharray: 0, 250; stroke-dashoffset: -250; }
          }
        `}} />
      </div>
    )
  }
];

export default function Protocol() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Last card doesn't scale down
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          endTrigger: '.protocol-container',
          end: 'bottom bottom',
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(20px)',
            ease: 'none',
          }),
          scrub: true,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" className="relative w-full protocol-container" ref={containerRef}>
      {steps.map((step, i) => (
        <div key={i} className="protocol-card w-full h-[100dvh] sticky top-0 bg-background text-primary border-t border-slate/10 overflow-hidden flex flex-col md:flex-row shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
          
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8 md:p-24 relative z-10">
            <div className="font-mono text-xl text-accent mb-6 font-bold">{step.num}</div>
            <h2 className="font-sans font-bold text-4xl md:text-6xl tracking-tight mb-6 text-balance">
                {step.title}
            </h2>
            <p className="font-sans text-lg md:text-xl text-slate max-w-md leading-relaxed text-balance">
                {step.desc}
            </p>
          </div>
          
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-slate/5 relative flex items-center justify-center overflow-hidden border-l border-slate/10 text-primary">
            <step.Anim />
          </div>

        </div>
      ))}
    </section>
  );
}
