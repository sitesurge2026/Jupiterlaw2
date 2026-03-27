import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const container = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.about-text', 
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: container.current, start: 'top 70%' }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about-us" ref={container} className="py-32 px-6 md:px-16 bg-primary text-background relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="about-text font-mono text-sm tracking-widest text-accent uppercase mb-6">About Us</h2>
            <h3 className="about-text font-drama italic text-4xl md:text-6xl mb-8 leading-tight">
                A legacy built on precision, trust, and unwavering dedication to our clients.
            </h3>
            <p className="about-text font-sans text-lg text-background/80 leading-relaxed">
                At Jupiter Law, we transcend traditional legal representation. Our foundation is built on deep expertise and an unyielding commitment to securing the best possible outcomes. We understand that behind every case is a human story, and we approach each matter with the gravity and focus it deserves.
            </p>
        </div>
    </section>
  );
}
