import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const container = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.currentTime = 5;
    }
  }, []);

  const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 20) {
          videoRef.current.currentTime = 5;
          videoRef.current.play();
      }
  };

  return (
    <section ref={container} className="relative w-full h-[100dvh] bg-primary flex flex-col justify-end pb-32 px-6 md:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-primary">
        <video 
          ref={videoRef}
          src="/manchester-night.mp4" 
          autoPlay 
          muted 
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-end pb-12">
        <div className="flex flex-col items-start gap-4">
          <h1 className="flex flex-col gap-1 w-full relative">
            <span className="font-sans font-bold text-5xl md:text-7xl text-background tracking-tight translate-y-6 md:translate-y-8 relative z-20">
              Trust meets
            </span>
            <span className="font-drama italic text-7xl md:text-[9rem] lg:text-[11rem] text-accent leading-[0.85] pr-8 -ml-2 drop-shadow-2xl relative z-10">
              Assurance.
            </span>
          </h1>
          
          <p className="font-sans text-background/80 text-lg md:text-xl max-w-sm mt-8 text-balance font-light">
            Jupiter Law — precision legal strategy and definitive action for those who demand absolute resolution.
          </p>

          <button className="magnetic-btn mt-8 bg-accent text-primary px-8 py-4 rounded-full font-sans font-bold text-lg hover:bg-background transition-colors flex items-center justify-center gap-3 group">
            <span className="relative z-10 w-full text-center">Enquiry</span>
            <span className="relative z-10 bg-primary/10 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
               <ArrowUpRight strokeWidth={2.5} size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
