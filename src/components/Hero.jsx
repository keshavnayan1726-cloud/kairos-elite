import React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Zap, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import Hero3D from './Hero3D';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center">
      {/* Background Ambience Gradients & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,242,254,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-yellow-500/10 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Subtle Matrix Cyber Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00f2fe 1px, transparent 1px), linear-gradient(90deg, #00f2fe 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Conversion Copy & Authority CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Social Proof Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111625]/90 border border-cyan-500/30 shadow-lg shadow-cyan-950/40 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200">
                Trusted by <span className="text-cyan-400 font-bold">12+ Brands</span> across high-stakes verticals
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] font-mono text-yellow-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-yellow-400" /> DLF Phase 1, Gurugram
              </span>
            </div>

            {/* Bold Hook */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Architecting <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-yellow-300 bg-clip-text text-transparent">
                Digital Dominance
              </span> <br />
              for High-Growth Brands.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Elite engineering, performance SEO, and automated workflows designed to scale revenue. 
              Founded & spearheaded by <strong className="text-white font-semibold">Keshav Vatsa</strong> in Gurugram.
            </p>

            {/* Dual CTAs & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300 hover:from-cyan-300 hover:to-yellow-200 transition-all duration-300 shadow-xl shadow-cyan-500/25 active:scale-95"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#roi-calculator"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#121727] hover:bg-[#182035] border border-white/10 hover:border-cyan-500/40 transition-all duration-200 shadow-lg active:scale-95 group"
              >
                <Calculator className="w-4 h-4 mr-2 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Calculate Project ROI</span>
              </a>
            </div>

            {/* Key Quality Seals Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Bloatware Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sub-800ms Edge Speed</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Direct Founder Access</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-yellow-500/10 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="w-full relative rounded-3xl glass-panel p-2 border border-white/10 overflow-hidden shadow-2xl shadow-black">
              {/* Top Bar for 3D Visualizer Window */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#090C16]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">kairos_3d_engine.v1</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  <Sparkles className="w-3 h-3" /> 60 FPS WebGL
                </div>
              </div>

              {/* Three.js Interactive Component */}
              <Hero3D />

              {/* Bottom Quick Metric Card floating on 3D */}
              <div className="p-4 bg-gradient-to-r from-[#0c101d] to-[#141b2e] border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Client Budgets Deployed</div>
                  <div className="text-xl font-bold text-white flex items-center gap-1.5">
                    <span className="text-gradient-cyan">₹13.64+ Lakhs</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Client Retention</div>
                  <div className="text-xl font-bold text-emerald-400">100.0%</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
