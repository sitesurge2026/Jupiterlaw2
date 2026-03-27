import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const practices = [
  { id: '01', title: 'Civil Law', desc: 'Precision resolution of corporate conflict, asset protection, and contract defense.' },
  { id: '02', title: 'Personal Injury', desc: 'Aggressive claiming and maximum value extraction for severe injuries.' },
  { id: '03', title: 'Immigration', desc: 'Impermeable visa protocols and strategic naturalization clearance.' }
];

export default function Philosophy() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.fromTo('.practice-item', 
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="relative w-full py-40 bg-primary overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          className="parallax-bg w-full h-[130%] object-cover opacity-20 mix-blend-overlay"
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2600&auto=format&fit=crop"
          alt="Dark marble texture"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="practice-item font-mono text-sm tracking-widest text-accent uppercase mb-6 text-center">
          Areas of Practice
        </h2>
        
        <h3 className="practice-item font-drama italic text-5xl md:text-7xl text-background mb-20 text-center">
          Our core jurisdictions.
        </h3>

        <div className="flex flex-col w-full max-w-4xl gap-6">
          {practices.map((item, i) => (
            <div key={i} className="practice-item group relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-accent/30 transition-all duration-500">
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="font-mono text-2xl text-accent/50 group-hover:text-accent transition-colors">
                  {item.id}
                </span>
                <h4 className="font-sans font-bold text-3xl text-background">
                  {item.title}
                </h4>
              </div>
              <p className="font-sans text-slate md:max-w-xs text-background/70 group-hover:text-background transition-colors leading-relaxed">
                {item.desc}
              </p>
              
              {/* Hover sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
