import React from 'react';
import { ShieldCheck, Award, Rocket, Zap, MessageCircle, MapPin, CheckCircle, ExternalLink, Terminal, Code2 } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyInfo';
import { METRICS } from '../data/metricsData';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function FounderSpotlight() {
  const { founder } = AGENCY_CONFIG;

  return (
    <section id="founder" className="relative py-24 bg-[#F5F1E8] border-y border-[#E8E2D5] overflow-hidden">
      {/* Background Warm Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/[0.08] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#B89047]/[0.06] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#D4AF37]/30 text-[#8C6B28] text-xs font-mono mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89047]" />
            <span>EXECUTIVE LEADERSHIP & TRACK RECORD</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            The Leadership Behind the Growth
          </h2>
          <p className="text-[#4B5161] text-base sm:text-lg">
            High-status engineering combined with ruthless execution. Founded and operated directly out of Gurugram's prime business corridor.
          </p>
        </div>

        {/* High-Status Founder Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Glassmorphism / Ivory Cream Founder Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-3xl cream-card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group cream-card-hover">
              
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E2D5]">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Direct Active Operator</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#707684]">
                    <MapPin className="w-3.5 h-3.5 text-[#B89047]" />
                    <span>DLF Phase 1, Gurugram</span>
                  </div>
                </div>

                {/* Founder Identity Header */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Founder Visual Avatar Seal with Kairos Crest */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#F3EFE6] to-[#121316] p-[2px] shadow-md shadow-[#B89047]/15">
                      <div className="w-full h-full rounded-[14px] bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden relative">
                        <img 
                          src="./assets/kairos-logo.jpg" 
                          alt="Keshav Vatsa" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-[#B89047] text-[#FFFFFF] text-[9px] font-black px-1.5 py-0.5 rounded shadow">
                      CEO
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#121316] tracking-tight flex items-center gap-2">
                      {founder.name}
                      <CheckCircle className="w-5 h-5 text-[#B89047] fill-[#B89047]/20" />
                    </h3>
                    <div className="text-xs font-mono text-[#8C6B28] mb-1 font-semibold">{founder.role}</div>
                    <div className="text-xs text-[#707684]">Young Entrepreneur & Systems Architect</div>
                  </div>
                </div>

                {/* Profile Bio */}
                <p className="text-[#4B5161] text-sm leading-relaxed mb-6 font-normal">
                  {founder.bio}
                </p>

                {/* Key Attributes */}
                <div className="space-y-2.5 mb-8 font-mono text-xs text-[#2E323B]">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#B89047] shrink-0" />
                    <span>Specialization: Full-Stack React, WebGL & Workflow Scrapers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#8C6B28] shrink-0" />
                    <span>Philosophy: Zero-Bloatware, Free Static CI/CD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>HQ: DLF Phase 1, Gurugram (NCR Tech Hub)</span>
                  </div>
                </div>
              </div>

              {/* Founder Philosophy Quote Block */}
              <div className="mt-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] relative">
                <div className="text-xs font-mono text-[#8C6B28] mb-1 tracking-wider uppercase font-semibold">Founder's Mandate</div>
                <blockquote className="font-serif-luxury text-base italic text-[#121316] leading-snug">
                  "{founder.quote}"
                </blockquote>
                <div className="mt-2 text-right text-xs font-bold text-[#707684]">— {founder.name}</div>
              </div>

              {/* Direct Founder Contact Actions */}
              <div className="mt-8 pt-6 border-t border-[#E8E2D5] flex items-center gap-3">
                <a
                  href={getWhatsAppLink("Hello Keshav! I'm reviewing Kairos Elite and would love to connect directly regarding an architecture and growth plan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-satin flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#121316]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with Keshav</span>
                </a>

                <a
                  href="#contact"
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-[#121316] bg-[#FFFFFF] hover:bg-[#FAF7F2] border border-[#E8E2D5] hover:border-[#D4AF37] transition-all"
                >
                  Schedule Audit
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Track Record Metrics & Verification Breakdown */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Top Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {METRICS.map((metric, idx) => (
                <div 
                  key={metric.id}
                  className="p-6 rounded-2xl cream-card cream-card-hover relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C6B28] px-2.5 py-0.5 rounded-full bg-[#F7F2E7] border border-[#D4AF37]/30 font-semibold">
                      {metric.tag}
                    </span>
                    <span className="text-xs font-mono text-[#A0A5B1]">0{idx + 1}</span>
                  </div>

                  <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#121316] mb-2 tracking-tight group-hover:text-[#B89047] transition-colors">
                    {metric.value}
                  </div>

                  <div className="text-sm font-bold text-[#121316] mb-1">
                    {metric.title}
                  </div>

                  <p className="text-xs text-[#4B5161] leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Systems Architecture & Execution Blueprint Banner */}
            <div className="p-7 rounded-3xl bg-[#FAF7F2] border border-[#D4AF37]/30 relative overflow-hidden shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8C6B28] mb-2 font-semibold">
                    <Zap className="w-3.5 h-3.5 text-[#B89047]" />
                    <span>THE KAIROS OPERATING ADVANTAGE</span>
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-bold text-[#121316] mb-2">
                    Why Keshav Vatsa's Architecture Outperforms Traditional Agencies
                  </h4>
                  <p className="text-xs text-[#4B5161] max-w-xl leading-relaxed">
                    Instead of delegating your growth to junior account managers, every project is spearheaded by Keshav Vatsa. You get custom React/Vite engineering, direct API scrapers, and sub-second page performance that scales with zero server debt.
                  </p>
                </div>

                <a
                  href="#scope-estimator"
                  className="btn-gold-satin shrink-0 px-5 py-3 rounded-xl text-xs font-bold text-[#121316] flex items-center gap-2"
                >
                  <span>Build With Keshav</span>
                  <Rocket className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* DLF Phase 1, Gurugram Location Footprint Pill */}
            <div className="p-4 rounded-2xl cream-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F7F2E7] border border-[#D4AF37]/30 flex items-center justify-center text-[#B89047] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#121316]">Physical Location: DLF Phase 1, Gurugram</span>
                  <p className="text-[#707684] text-[11px]">Available for in-person strategic alignment in Cyber City / Golf Course Road / DLF Phase 1-5.</p>
                </div>
              </div>
              <a
                href={getWhatsAppLink("Hi Keshav! Let's arrange a strategic meeting in DLF Phase 1, Gurugram.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C6B28] hover:text-[#121316] font-mono text-xs flex items-center gap-1 shrink-0 font-semibold"
              >
                <span>Request On-Site Meetup</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
