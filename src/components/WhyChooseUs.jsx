import React from 'react';
import { Terminal, Gauge, FileCheck2, CloudLightning, Check, ShieldCheck, Cpu } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/metricsData';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-[#B89047]" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-[#B89047]" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-[#B89047]" />;
      case 'CloudLightning':
        return <CloudLightning className="w-6 h-6 text-[#B89047]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#B89047]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#F5F1E8] border-t border-[#E8E2D5] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C5A059]/[0.05] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#D4AF37]/30 text-[#8C6B28] text-xs font-mono mb-4 shadow-sm font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89047]" />
            <span>ARCHITECTURAL INTEGRITY</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Why High-Growth Brands Choose Kairos Elite
          </h2>
          <p className="text-[#4B5161] text-base sm:text-lg">
            We don't build generic brochure sites. We engineer high-velocity digital assets engineered for maximum conversion throughput.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl cream-card cream-card-hover relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#F7F2E7] border border-[#D4AF37]/30 shadow-sm group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E8E2D5] text-[#8C6B28] font-semibold">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#121316] mb-3 group-hover:text-[#B89047] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4B5161] leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D5] flex items-center gap-2 text-xs font-mono text-[#707684]">
                <Check className="w-4 h-4 text-[#B89047]" />
                <span>Production-tested on live client workloads</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Ticker Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E2D5] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#F7F2E7] border border-[#D4AF37]/30 flex items-center justify-center text-[#8C6B28] font-cinzel font-bold text-xl shrink-0">
              KE
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-bold text-[#121316]">Compare Against Traditional Retainer Agencies:</h4>
              <p className="text-xs text-[#707684]">No ₹1,50,000/mo baseline retainers for basic updates. You get autonomous, low-maintenance code.</p>
            </div>
          </div>

          <a
            href="#scope-estimator"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-[#8C6B28] bg-[#F7F2E7] border border-[#D4AF37]/40 hover:bg-[#EFE6D2] transition-all"
          >
            Review Transparent Pricing →
          </a>
        </div>

      </div>
    </section>
  );
}
