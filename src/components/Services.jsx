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
  Clock, 
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-[#B89047]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#B89047]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#B89047]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#B89047]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B89047]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#FBF9F5] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C5A059]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#B89047]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#D4AF37]/30 text-[#8C6B28] text-xs font-mono mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#B89047]" />
            <span>CORE REVENUE CAPABILITIES</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            High-Impact Digital Solutions
          </h2>
          <p className="text-[#4B5161] text-base sm:text-lg">
            No bloated retainers. No cookie-cutter templates. Every capability is engineered for quantifiable business growth and transparent ROI.
          </p>
        </div>

        {/* 4 Interactive Service Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SERVICES.map((service) => {
            const isActive = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between border cursor-pointer ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#B89047] shadow-md shadow-[#B89047]/10 ring-1 ring-[#B89047]'
                    : 'bg-[#FAF7F2] border-[#E8E2D5] hover:border-[#D4AF37]/50 hover:bg-[#FFFFFF]'
                }`}
              >
                {/* Active Indicator Top Accent */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#B89047]" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#F7F2E7] border border-[#D4AF37]/30">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFFFFF] text-[#8C6B28] border border-[#E8E2D5] font-semibold">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#121316] mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#707684] line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E2D5] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C6B28]">
                    {service.pricing.inr}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#B89047] translate-x-1' : 'text-[#A0A5B1]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Panel */}
        <div className="rounded-3xl cream-card overflow-hidden shadow-sm relative">
          
          {/* Header of Active Service */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E8E2D5] bg-[#FAF7F2] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8C6B28] mb-2 font-semibold">
                <span>{activeService.category}</span>
                <span>•</span>
                <span className="text-[#B89047]">{activeService.badge}</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#121316] tracking-tight mb-3">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4B5161] leading-relaxed font-normal">
                {activeService.valuePitch}
              </p>
            </div>

            {/* Quick Price Badge */}
            <div className="shrink-0 p-5 rounded-2xl bg-[#FFFFFF] border border-[#D4AF37]/30 text-left lg:text-right shadow-sm">
              <span className="text-[11px] font-mono uppercase text-[#707684] tracking-wider block">Investment Tier</span>
              <div className="font-serif-luxury text-2xl font-bold text-[#121316]">
                {activeService.pricing.inr}
              </div>
              <div className="text-xs font-mono text-[#8C6B28]">
                ({activeService.pricing.usd}) • {activeService.pricing.structure}
              </div>
            </div>
          </div>

          {/* Deep Dive Body: How It Works & Deliverables */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#FFFFFF]">
            
            {/* Left 7 Columns: Step-by-Step Pipeline ("How It Works") */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8C6B28] px-2.5 py-0.5 rounded-full bg-[#F7F2E7] border border-[#D4AF37]/30 font-semibold">
                  EXECUTION PIPELINE
                </span>
                <h4 className="font-serif-luxury text-xl font-bold text-[#121316]">How It Works</h4>
              </div>

              <div className="space-y-4">
                {activeService.howItWorks.map((step) => (
                  <div 
                    key={step.step}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] hover:border-[#D4AF37]/40 transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/40 flex items-center justify-center font-mono text-[#8C6B28] font-bold shrink-0 text-sm shadow-sm">
                      {step.step}
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-[#121316] mb-1">
                        {step.name}
                      </h5>
                      <p className="text-xs sm:text-sm text-[#4B5161] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-8 pt-6 border-t border-[#E8E2D5]">
                <div className="text-xs font-mono text-[#707684] mb-3 uppercase tracking-wider">
                  Engineered With:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#E8E2D5] text-xs font-mono text-[#2E323B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Tier Breakdown & Direct Booking Action */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] mb-6">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E2D5]">
                  <h4 className="text-base font-bold text-[#121316]">
                    {activeService.pricing.tier1.name}
                  </h4>
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified Scope
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif-luxury text-2xl font-bold text-[#121316]">
                    {activeService.pricing.tier1.priceInr}
                  </span>
                  <span className="text-xs font-mono text-[#707684]">
                    ({activeService.pricing.tier1.priceUsd})
                  </span>
                  <span className="ml-auto text-xs font-mono text-[#8C6B28] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B89047]" />
                    {activeService.pricing.tier1.timeline}
                  </span>
                </div>

                <div className="space-y-2.5 mb-6">
                  {activeService.pricing.tier1.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#2E323B]">
                      <CheckCircle2 className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {activeService.pricing.tier2 && (
                  <div className="mt-4 pt-4 border-t border-[#E8E2D5]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#8C6B28]">{activeService.pricing.tier2.name}</span>
                      <span className="font-mono text-[#121316] font-bold">{activeService.pricing.tier2.priceInr}</span>
                    </div>
                    <p className="text-[11px] text-[#707684]">
                      Full multi-page enterprise portal with custom interactive physics & dedicated post-launch support.
                    </p>
                  </div>
                )}
              </div>

              {/* Conversion Actions */}
              <div className="space-y-3">
                <a
                  href="#scope-estimator"
                  className="btn-gold-satin w-full py-3.5 px-4 rounded-xl font-bold text-xs text-[#121316] text-center flex items-center justify-center gap-2"
                >
                  <span>Customize in Scope Estimator</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppLink(`Hello Keshav! I am interested in ${activeService.title} (${activeService.pricing.inr}). Can we discuss the technical scope?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs text-[#121316] bg-[#FFFFFF] border border-[#E8E2D5] hover:border-[#D4AF37] hover:bg-[#F9F6F0] transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#B89047]" />
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
