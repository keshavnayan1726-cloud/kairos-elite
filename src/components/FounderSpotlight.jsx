import React from 'react';
import { ShieldCheck, Award, Rocket, Zap, MessageCircle, MapPin, CheckCircle, ExternalLink, Terminal, Code2 } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyInfo';
import { METRICS } from '../data/metricsData';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function FounderSpotlight() {
  const { founder } = AGENCY_CONFIG;

  return (
    <section id="founder" className="relative py-24 bg-[#080a12] border-y border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-yellow-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXECUTIVE LEADERSHIP & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Leadership Behind the Growth
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-status engineering combined with ruthless execution. Founded and operated directly out of Gurugram's prime business district.
          </p>
        </div>

        {/* High-Status Founder Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Glassmorphism Founder Profile Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300">
              
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-yellow-500/10 via-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Founder Badge & Status */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Direct Active Operator</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                    <span>DLF Phase 1, Gurugram</span>
                  </div>
                </div>

                {/* Founder Identity Header */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Founder Visual Avatar Seal with Kairos Crest */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 via-cyan-500 to-indigo-600 p-[2px] shadow-xl shadow-cyan-500/20">
                      <div className="w-full h-full rounded-[14px] bg-[#0A0D18] flex flex-col items-center justify-center overflow-hidden relative">
                        <img 
                          src="./assets/kairos-logo.jpg" 
                          alt="Keshav Vatsa" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded shadow">
                      CEO
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      {founder.name}
                      <CheckCircle className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                    </h3>
                    <div className="text-xs font-mono text-cyan-300 mb-1">{founder.role}</div>
                    <div className="text-xs text-slate-400">Young Entrepreneur & Systems Architect</div>
                  </div>
                </div>

                {/* Profile Bio */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {founder.bio}
                </p>

                {/* Key Attributes */}
                <div className="space-y-2.5 mb-8 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Specialization: Full-Stack React, WebGL & Workflow Scrapers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Philosophy: Zero-Bloatware, Free Static CI/CD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>HQ: DLF Phase 1, Gurugram (NCR Tech Corridor)</span>
                  </div>
                </div>
              </div>

              {/* Founder Philosophy Quote Block */}
              <div className="mt-4 p-5 rounded-2xl bg-[#0a0d18]/90 border border-white/10 relative">
                <div className="text-xs font-mono text-yellow-400 mb-1 tracking-wider uppercase">Founder's Mandate</div>
                <blockquote className="text-sm italic text-slate-200 leading-snug">
                  "{founder.quote}"
                </blockquote>
                <div className="mt-2 text-right text-xs font-bold text-slate-400">— {founder.name}</div>
              </div>

              {/* Direct Founder Contact Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <a
                  href={getWhatsAppLink("Hello Keshav! I'm reviewing Kairos Elite and would love to connect directly regarding an architecture and growth plan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Connect with Keshav</span>
                </a>

                <a
                  href="#contact"
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all"
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
                  className="p-6 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group hover:border-cyan-400/30 hover:bg-[#121626] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                      {metric.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {metric.value}
                  </div>

                  <div className="text-sm font-semibold text-slate-200 mb-1">
                    {metric.title}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Systems Architecture & Execution Blueprint Banner */}
            <div className="p-7 rounded-3xl bg-gradient-to-r from-[#0d1222] via-[#10172d] to-[#0d1222] border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[90px] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-yellow-300 mb-2">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    <span>THE KAIROS OPERATING ADVANTAGE</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Why Keshav Vatsa's Architecture Outperforms Traditional Agencies
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                    Instead of delegating your growth to inexperienced junior account managers, every project is spearheaded by Keshav Vatsa. You get custom React/Vite engineering, direct API scrapers, and sub-second page performance that scales with zero server debt.
                  </p>
                </div>

                <a
                  href="#scope-estimator"
                  className="shrink-0 px-5 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-yellow-300 to-amber-400 hover:from-yellow-200 hover:to-amber-300 transition-all shadow-lg shadow-yellow-500/20 flex items-center gap-2"
                >
                  <span>Build With Keshav</span>
                  <Rocket className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* DLF Phase 1, Gurugram Location Footprint Pill */}
            <div className="p-4 rounded-2xl glass-panel border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-white">Physical Location: DLF Phase 1, Gurugram</span>
                  <p className="text-slate-400 text-[11px]">Available for in-person strategic alignment in Cyber City / Golf Course Road / DLF Phase 1-5.</p>
                </div>
              </div>
              <a
                href={getWhatsAppLink("Hi Keshav! Let's arrange a strategic meeting in DLF Phase 1, Gurugram.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-mono text-xs flex items-center gap-1 shrink-0"
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
