import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Enquiry() {
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.cta-elem', 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 75%'
          }
        }
      );
    }, ctaRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} className="py-40 px-6 md:px-16 bg-background flex flex-col items-center justify-center text-center relative z-20">

      <p className="cta-elem font-sans text-xl text-slate max-w-xl mb-12 text-balance">
        Schedule a confidential consultation to architect your defensive or offensive legal strategy.
      </p>
      
      <button className="cta-elem magnetic-btn bg-primary text-background px-10 py-5 rounded-[2rem] font-sans font-bold text-xl hover:bg-accent hover:text-primary transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]">
        Press for Enquiry
        <span className="bg-background/10 rounded-full p-2 ml-2">
            <ChevronRight size={20} />
        </span>
      </button>
    </section>
  );
}
