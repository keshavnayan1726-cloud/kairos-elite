import React, { useState } from 'react';
import { 
  Boxes, 
  MapPin, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  DollarSign, 
  Clock, 
  ChevronRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Services({ onSelectServiceForEstimator }) {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-cyan-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-yellow-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-violet-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#070911] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE REVENUE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            High-Impact Digital Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No bloated retainers. No cookie-cutter templates. Every capability is engineered for quantifiable business growth and transparent ROI.
          </p>
        </div>

        {/* 4 Interactive Service Selector Pills (Desktop & Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SERVICES.map((service) => {
            const isActive = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between border ${
                  isActive
                    ? 'bg-[#11172a] border-cyan-400/60 shadow-xl shadow-cyan-500/15 ring-1 ring-cyan-400/40'
                    : 'glass-panel border-white/10 hover:border-white/20 hover:bg-[#0c101d]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-yellow-300" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#090c16] border border-white/10">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-cyan-300">
                    {service.pricing.inr}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Panel */}
        <div className="rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl relative">
          
          {/* Header of Active Service */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-white/10 bg-gradient-to-r from-[#0d1222] via-[#10172e] to-[#0c101e] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>{activeService.category}</span>
                <span>•</span>
                <span className="text-yellow-400">{activeService.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {activeService.valuePitch}
              </p>
            </div>

            {/* Quick Price Badge */}
            <div className="shrink-0 p-5 rounded-2xl bg-[#080b15] border border-cyan-500/30 text-left lg:text-right">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">Investment Tier</span>
              <div className="text-2xl font-black text-white text-gradient-cyan">
                {activeService.pricing.inr}
              </div>
              <div className="text-xs font-mono text-slate-400">
                ({activeService.pricing.usd}) • {activeService.pricing.structure}
              </div>
            </div>
          </div>

          {/* Deep Dive Body: How It Works & Deliverables */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Columns: Step-by-Step Pipeline ("How It Works") */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                  EXECUTION PIPELINE
                </span>
                <h4 className="text-lg font-bold text-white">How It Works</h4>
              </div>

              <div className="space-y-4">
                {activeService.howItWorks.map((step, idx) => (
                  <div 
                    key={step.step}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0d1120] border border-white/5 hover:border-cyan-500/20 transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center font-mono text-cyan-300 font-bold shrink-0 text-sm shadow">
                      {step.step}
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-white mb-1">
                        {step.name}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                  Engineered With:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-lg bg-[#0e1424] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Tier Breakdown & Direct Booking Action */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div className="p-6 rounded-2xl bg-[#0c101c] border border-white/10 mb-6">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <h4 className="text-base font-bold text-white">
                    {activeService.pricing.tier1.name}
                  </h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    Verified Scope
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-black text-white">
                    {activeService.pricing.tier1.priceInr}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    ({activeService.pricing.tier1.priceUsd})
                  </span>
                  <span className="ml-auto text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeService.pricing.tier1.timeline}
                  </span>
                </div>

                <div className="space-y-2.5 mb-6">
                  {activeService.pricing.tier1.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {activeService.pricing.tier2 && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-yellow-300">{activeService.pricing.tier2.name}</span>
                      <span className="font-mono text-white font-bold">{activeService.pricing.tier2.priceInr}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Full multi-page enterprise portal with custom interactive physics & dedicated post-launch support.
                    </p>
                  </div>
                )}
              </div>

              {/* Conversion Actions */}
              <div className="space-y-3">
                <a
                  href="#scope-estimator"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-yellow-300 hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Customize in Scope Estimator</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppLink(`Hello Keshav! I am interested in ${activeService.title} (${activeService.pricing.inr}). Can we discuss the technical scope?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Lock In This Service on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
