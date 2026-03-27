import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.founder-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 70%',
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 px-6 md:px-16 bg-background relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl founder-reveal">
          <img 
            src="/founder.jpg" 
            alt="Aatif Iqbal - Founder" 
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 border border-slate/10 rounded-[2rem]"></div>
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-white/20">
             <p className="font-mono text-xs tracking-widest text-slate/60 uppercase mb-1">Founder & Managing Partner</p>
             <h3 className="font-sans font-bold text-2xl text-primary">Aatif Iqbal</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center founder-reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent"></div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">Leadership</span>
          </div>
          
          <h2 className="font-drama italic text-5xl md:text-6xl text-primary leading-tight mb-8">
            "We engineer outcomes. We do not leave resolution to chance."
          </h2>
          
          <div className="space-y-6 font-sans text-slate text-lg leading-relaxed">
            <p>
              Aatif Iqbal founded Jupiter Law on a singular premise: premium legal representation should operate with the precision of a heavily systematized operation, devoid of the archaic inefficiencies plaguing traditional firms.
            </p>
            <p>
              With a background rooted in high-stakes resolution and absolute defense, Aatif ensures that every protocol deployed by the firm is aggressive, calculated, and exclusively optimized to vindicate our clients' positions.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
             <div className="w-12 h-12 rounded-full border border-slate/20 flex items-center justify-center font-drama italic text-xl text-primary">
                AI
             </div>
             <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Signature_of_a_person.svg/200px-Signature_of_a_person.svg.png" className="h-8 opacity-40 mix-blend-multiply" alt="Signature" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
