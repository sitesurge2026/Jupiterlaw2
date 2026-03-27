import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Scale, MousePointer2, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Card 1: Diagnostic Shuffler (Civil Law)
const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Corporate Dispute', desc: 'Precision resolution of shareholder conflict.' },
        { id: 2, title: 'Commercial Contracts', desc: 'Impermeable agreements engineered for defense.' },
        { id: 3, title: 'Asset Protection', desc: 'Strategic shielding of high-value portfolios.' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-72 flex items-center justify-center">
            {cards.map((card, i) => {
                return (
                    <div 
                        key={card.id}
                        className={`absolute w-full p-8 rounded-[2rem] border border-slate/5 bg-background shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
                        style={{
                            transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                            opacity: 1 - i * 0.2,
                            zIndex: 10 - i,
                        }}
                    >
                        <div className="flex items-center gap-3 mb-6 text-accent">
                            <Scale size={20} />
                            <span className="font-mono text-xs uppercase tracking-widest text-slate/50 font-semibold">Civil Law</span>
                        </div>
                        <h3 className="font-sans font-bold text-2xl mb-2 text-primary">{card.title}</h3>
                        <p className="font-sans text-sm text-slate/70">{card.desc}</p>
                    </div>
                );
            })}
        </div>
    );
};

// Card 2: Telemetry Typewriter (Immigration Law)
const TypewriterCard = () => {
    const [text, setText] = useState('');
    const fullText = "> PREPARING IMMIGRATION FILING...\n> VERIFYING CLEARANCE...\n> STATUS: EXECUTING.";
    
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; }, 4000);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-72 rounded-[2rem] border border-slate/5 bg-background shadow-xl p-8 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-slate/50 font-semibold">Immigration Feed</span>
                </div>
                <div className="font-mono text-sm text-slate leading-relaxed whitespace-pre-wrap">
                    {text}<span className="inline-block w-2 bg-accent animate-pulse ml-1">&nbsp;</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                 <div className="w-full bg-slate/5 h-1 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[80%] rounded-full animate-pulse"></div>
                 </div>
                 <div className="flex items-center justify-between text-[10px] font-mono text-slate/40">
                    <span>SYS.OP.NATURALIZATION</span>
                    <span>SECURE</span>
                 </div>
            </div>
        </div>
    );
};

// Card 3: Cursor Protocol Scheduler (Personal Injury)
const ProtocolCard = () => {
    const days = ['S','M','T','W','T','F','S'];
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            
            tl.set('.anim-cursor', { x: 30, y: 150, opacity: 0, scale: 1 });
            
            tl.to('.anim-cursor', { x: 180, y: 55, opacity: 1, duration: 1, ease: "power2.inOut" })
              .to('.anim-cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
              .to('.day-3', { backgroundColor: '#C9A84C', color: '#0D0D12', borderColor: '#C9A84C', duration: 0.2 }, "-=0.1")
              .to('.anim-cursor', { x: 260, y: 190, duration: 1, ease: "power2.inOut", delay: 0.5 })
              .to('.anim-cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
              .to('.save-btn', { backgroundColor: '#0D0D12', color: '#FAF8F5', duration: 0.2 }, "-=0.1")
              .to('.anim-cursor', { opacity: 0, duration: 0.3, delay: 0.5 })
              .to('.day-3, .save-btn', { clearProps: "all", duration: 0.1 });
              
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-72 rounded-[2rem] border border-slate/5 bg-background shadow-xl p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6 text-accent">
                <Shield size={20} />
                <span className="font-mono text-xs uppercase tracking-widest text-slate/50 font-semibold">Personal Injury</span>
            </div>
            
            <div className="flex justify-between gap-1 mb-8">
                {days.map((d, i) => (
                    <div key={i} className={`day-${i} flex items-center justify-center w-8 h-8 rounded border border-slate/10 font-mono text-xs text-slate transition-colors`}>
                        {d}
                    </div>
                ))}
            </div>

            <div className="mt-auto flex justify-end">
                <button className="save-btn px-4 py-2 border border-slate/20 rounded-xl font-mono text-xs hover-lift bg-slate/5">
                    FILE CLAIM
                </button>
            </div>

            <MousePointer2 className="anim-cursor absolute text-primary fill-background drop-shadow-md z-20 pointer-events-none" size={24} />
        </div>
    );
};

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.feature-card-wrapper',
                { opacity: 0, y: 60 },
                { 
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="practice-areas" ref={sectionRef} className="py-32 px-6 md:px-16 bg-background relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
                    <div className="flex flex-col gap-6 sticky top-32">
                        <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight">Areas of Practice.</h2>
                        <p className="font-sans text-slate text-lg leading-relaxed">
                            Precision-engineered legal frameworks. We operate not as a traditional firm, but as an executing legal system. Every interaction is mapped, calibrated, and optimized for success.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="feature-card-wrapper w-full relative z-30">
                            <ShufflerCard />
                        </div>
                        <div className="feature-card-wrapper w-full relative z-20">
                            <TypewriterCard />
                        </div>
                        <div className="feature-card-wrapper md:col-span-2 w-full max-w-[50%] ml-auto mt-6 relative z-10">
                            <ProtocolCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
