import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-background rounded-t-[4rem] px-8 md:px-16 py-20 relative z-30 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <h2 className="font-sans font-bold text-3xl mb-4 tracking-tight">JUPITER LAW</h2>
          <p className="font-sans text-background/80 max-w-sm text-sm leading-relaxed">
            A private legal atelier specializing in high-stakes resolution, unparalleled defense, and precise execution.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Navigation</h3>
          {['About Us', 'Practice Areas', 'Articles', 'Enquiry'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-sans text-sm text-background/80 hover:text-white transition-colors hover-lift w-fit">
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Legal</h3>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
            <a key={item} href="#" className="font-sans text-sm text-background/80 hover:text-white transition-colors hover-lift w-fit">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate/10 pt-8">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="flex relative w-2.5 h-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500"></span>
          </div>
          <span className="font-mono text-xs text-background/80 tracking-widest uppercase">System Operational</span>
        </div>
        
        <p className="font-mono text-xs text-background/60 border border-white/10 px-3 py-1.5 rounded-md">
          © {new Date().getFullYear()} JUPITER LAW. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
