import React from 'react';

export default function Logo({ className = "h-10", showText = true, variant = "glow" }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* High-status Monogram Seal */}
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-yellow-400 to-blue-600 opacity-40 blur-sm group-hover:opacity-80 transition duration-500" />
        
        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-yellow-500/30 bg-[#0B0E17] flex items-center justify-center p-1 shadow-lg shadow-yellow-500/10">
          <img 
            src="./assets/kairos-logo.jpg" 
            alt="Kairos Elite Logo" 
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            onError={(e) => {
              // Fallback to elegant SVG crest if image doesn't load
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div class="flex flex-col items-center justify-center text-yellow-400 font-serif font-black text-xs leading-none">
                  <span class="text-[9px] tracking-widest text-cyan-400">👑</span>
                  <span class="tracking-tighter">KE</span>
                </div>
              `;
            }}
          />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-extrabold tracking-wider text-base md:text-lg bg-gradient-to-r from-white via-slate-100 to-yellow-200 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-yellow-300 transition-all duration-300">
              KAIROS ELITE
            </span>
            <span className="px-1.5 py-0.2 text-[9px] font-mono tracking-widest bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 rounded font-semibold">
              EST. 2026
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-slate-400 group-hover:text-cyan-400 transition-colors">
            Digital Agency • Gurugram
          </span>
        </div>
      )}
    </div>
  );
}
