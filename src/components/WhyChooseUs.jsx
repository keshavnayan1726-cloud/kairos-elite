import React from 'react';
import { Terminal, Gauge, FileCheck2, CloudLightning, Check, ShieldCheck, Cpu } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/metricsData';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-yellow-400" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-emerald-400" />;
      case 'CloudLightning':
        return <CloudLightning className="w-6 h-6 text-violet-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#080b15] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARCHITECTURAL INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why High-Growth Brands Choose Kairos Elite
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't build generic brochure sites. We engineer high-velocity digital assets engineered for maximum conversion throughput.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/30 hover:bg-[#101526] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#090d1a] border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Production-tested on live client workloads</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Ticker Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0d1222] via-[#10172e] to-[#0d1222] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-300 font-serif font-black text-xl shrink-0">
              KE
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Compare Against Traditional Retainer Agencies:</h4>
              <p className="text-xs text-slate-400">No ₹1,50,000/mo baseline retainers for doing basic updates. You get autonomous, low-maintenance code.</p>
            </div>
          </div>

          <a
            href="#scope-estimator"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 hover:bg-cyan-900/60 transition-all"
          >
            Review Transparent Pricing →
          </a>
        </div>

      </div>
    </section>
  );
}
