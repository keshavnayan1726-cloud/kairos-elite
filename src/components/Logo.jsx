import React from 'react';

export default function Logo({ className = "h-10", showText = true }) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Tiny Authentic Crest Emblem */}
      <div className="relative flex items-center justify-center">
        <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-[#FAF7F2] flex items-center justify-center p-0.5 shadow-sm shadow-[#B89047]/10 transition-transform duration-300 group-hover:scale-105">
          <img 
            src="./assets/kairos-logo.jpg" 
            alt="Kairos Elite Emblem" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-cinzel font-bold tracking-[0.14em] text-base md:text-lg text-[#121316] group-hover:text-[#B89047] transition-colors duration-200">
              KAIROS ELITE
            </span>
            <span className="px-1.5 py-0.5 text-[9px] font-mono tracking-widest bg-[#F3EFE6] border border-[#D4AF37]/30 text-[#8C6B28] rounded font-semibold">
              EST. 2026
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-[0.22em] text-[#707684]">
            Private Club • Gurugram
          </span>
        </div>
      )}
    </div>
  );
}
