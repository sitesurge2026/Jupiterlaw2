import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const articles = [
    { title: "Understanding Corporate Liability in 2026", date: "Mar 12, 2026", category: "Corporate" },
    { title: "The New Era of Asset Protection", date: "Feb 28, 2026", category: "Wealth" },
    { title: "Strategic Immigration Protocols", date: "Jan 15, 2026", category: "Immigration" }
];

export default function Articles() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.article-card',
        { opacity: 0, y: 40 },
        { 
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="articles" ref={sectionRef} className="py-32 px-6 md:px-16 bg-background relative z-10 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="font-mono text-sm tracking-widest text-accent uppercase mb-4">Insights</h2>
                    <h3 className="font-sans font-bold text-4xl text-primary">Latest Articles</h3>
                </div>
                <button className="text-sm font-bold text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                    View All Insights
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                    <div key={i} className="article-card group cursor-pointer border border-slate/10 rounded-[2rem] p-8 hover:bg-white transition-colors duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-mono text-xs text-accent uppercase">{article.category}</span>
                            <span className="font-sans text-xs text-slate/50">{article.date}</span>
                        </div>
                        <h4 className="font-sans font-bold text-xl text-primary mb-6 group-hover:text-accent transition-colors">
                            {article.title}
                        </h4>
                        <div className="flex justify-end">
                            <div className="w-10 h-10 rounded-full border border-slate/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
