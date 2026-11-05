import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Send, 
  Zap, 
  Boxes, 
  Cpu, 
  Database, 
  Search, 
  TrendingUp, 
  Flame 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatINR, formatUSD } from '../utils/currency';
import { generateScopeQuoteWhatsApp } from '../utils/whatsapp';

export default function ScopeEstimator() {
  const [pageCount, setPageCount] = useState(3);
  const [businessName, setBusinessName] = useState('');
  const [selectedAddonIds, setSelectedAddonIds] = useState(['webgl', 'n8n']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState('');

  const ADDONS = [
    {
      id: 'webgl',
      name: 'Interactive 3D WebGL / Three.js Element',
      desc: 'Bespoke floating 3D geometry, interactive cursor physics & dynamic shaders',
      price: 12000,
      icon: Boxes,
      tag: 'High Conversion',
    },
    {
      id: 'cms',
      name: 'Custom Headless CMS & Admin Dashboard',
      desc: 'Intuitive blog, case-study and lead management portal without bloated plugins',
      price: 14000,
      icon: Database,
      tag: 'Full Control',
    },
    {
      id: 'n8n',
      name: 'Automated n8n / Python Lead Scraper & CRM Sync',
      desc: 'Instant WhatsApp / Telegram alerts + automated lead capture to Google Sheets/CRM',
      price: 9500,
      icon: Cpu,
      tag: 'Hands-off',
    },
    {
      id: 'seo',
      name: 'Hyperlocal Local SEO & Google Map Pack Setup',
      desc: 'Local schema injection, Google Business Profile optimization & citation audit',
      price: 8500,
      icon: Search,
      tag: 'Local Traffic',
    },
    {
      id: 'cro',
      name: 'Performance Ad Micro-Funnel & CRO Optimization',
      desc: 'High-converting ad landing pages, meta pixel CAPI tracking & A/B testing',
      price: 11000,
      icon: TrendingUp,
      tag: 'Revenue Max',
    },
    {
      id: 'sprint',
      name: 'Priority 7-Day Sprint Guarantee',
      desc: 'Accelerated development milestone with daily video check-ins and priority deployment',
      price: 7500,
      icon: Flame,
      tag: 'Express Delivery',
    },
  ];

  const toggleAddon = (id) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  // Calculations
  const baseCost = 18000; // Base 1-page high-converting system
  const perPageCost = 3500;
  
  const calculatedEstimate = useMemo(() => {
    const pagesCost = (pageCount - 1) * perPageCost;
    const addonsCost = selectedAddonIds.reduce((sum, id) => {
      const addon = ADDONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const totalInr = baseCost + pagesCost + addonsCost;
    
    // Timeline calculation
    let timelineDays = Math.max(5, Math.ceil(pageCount * 1.5) + (selectedAddonIds.length > 2 ? 3 : 1));
    if (selectedAddonIds.includes('sprint')) {
      timelineDays = Math.min(7, timelineDays);
    }

    const selectedAddonObjects = selectedAddonIds.map((id) => {
      const a = ADDONS.find((item) => item.id === id);
      return {
        name: a.name,
        priceInr: formatINR(a.price),
      };
    });

    return {
      totalInr,
      formattedInr: formatINR(totalInr),
      formattedUsd: formatUSD(totalInr),
      timeline: `${timelineDays} - ${timelineDays + 3} Business Days`,
      selectedAddonObjects,
    };
  }, [pageCount, selectedAddonIds]);

  const handleClaimBlueprint = (e) => {
    e.preventDefault();
    if (!clientEmail) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#4facfe', '#ffd700', '#ffffff'],
      });
    } catch (err) {
      console.error(err);
    }

    setIsSubmitted(true);
  };

  const whatsappHref = generateScopeQuoteWhatsApp({
    pageCount,
    selectedAddons: calculatedEstimate.selectedAddonObjects,
    estimatedInr: calculatedEstimate.formattedInr,
    estimatedUsd: calculatedEstimate.formattedUsd,
    timeline: calculatedEstimate.timeline,
    businessName,
  });

  return (
    <section id="scope-estimator" className="relative py-24 bg-[#080b14] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE SCOPE & COST ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Configure Your Custom System
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No ambiguous estimates or hidden agency fees. Select your architecture needs and receive an instant, transparent quote with zero lock-in.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders and Addon Toggles */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Page Count Slider Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    1. Website Page Count & Core Structure
                  </h3>
                  <p className="text-xs text-slate-400">
                    Includes ultra-fast Vite/React boilerplate, mobile responsive design, and free static cloud hosting setup.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                    {pageCount}
                  </span>
                  <span className="text-xs text-slate-400 font-mono block">Page{pageCount > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-3 pt-2">
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={pageCount}
                  onChange={(e) => setPageCount(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>1 Page (High-Converting Landing)</span>
                  <span>5 Pages (Standard Brand)</span>
                  <span>15+ Pages (Enterprise Web Portal)</span>
                </div>
              </div>
            </div>

            {/* 2. Optional Architectural Modules (Toggles) */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10">
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  2. Select High-Throughput Power Modules
                </h3>
                <p className="text-xs text-slate-400">
                  Click to add or remove specialized modules built specifically for your revenue pipeline.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddonIds.includes(addon.id);
                  const Icon = addon.icon;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#10172e] border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                          : 'bg-[#0a0d17]/80 border-white/5 hover:border-white/15 hover:bg-[#0e1220]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-2 rounded-xl border ${
                            isSelected 
                              ? 'bg-cyan-950 text-cyan-300 border-cyan-500/30' 
                              : 'bg-slate-900 text-slate-400 border-white/10'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                              {addon.tag}
                            </span>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              isSelected
                                ? 'bg-cyan-400 border-cyan-400 text-black'
                                : 'border-white/20 bg-black/40'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                        </div>

                        <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                          {addon.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                          {addon.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono font-semibold">
                        <span className={isSelected ? 'text-cyan-300' : 'text-slate-400'}>
                          +{formatINR(addon.price)}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          (~{formatUSD(addon.price)})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Optional Business Name Input for Personalization */}
            <div className="p-4 rounded-2xl bg-[#0a0d17] border border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <span className="text-xs font-mono text-slate-400 shrink-0">Company / Brand Name:</span>
              <input
                type="text"
                placeholder="e.g. Acme Capital, DLF Realty, Nova Tech"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-[#121626] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

          </div>

          {/* Right Column: Live Dynamic Quote Summary & CTAs */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Top ambient badge */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-300">ESTIMATED INVESTMENT</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  Fixed Price • Guaranteed
                </span>
              </div>

              {/* Real-time Display */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Estimated Total
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1 text-gradient-cyan">
                  {calculatedEstimate.formattedInr}
                </div>
                <div className="text-sm font-mono text-slate-400 flex items-center gap-2">
                  <span>Approx. {calculatedEstimate.formattedUsd}</span>
                  <span>•</span>
                  <span>Zero hidden costs</span>
                </div>
              </div>

              {/* Delivery Speed / Timeline */}
              <div className="p-4 rounded-2xl bg-[#0a0d18] border border-white/10 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Projected Sprint Delivery</span>
                    <span className="text-[11px] text-slate-400">Direct founder-led execution</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-yellow-300 bg-yellow-950/60 px-2.5 py-1 rounded border border-yellow-500/30">
                  {calculatedEstimate.timeline}
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 mb-8 text-xs font-mono border-t border-b border-white/10 py-4">
                <div className="flex justify-between text-slate-300">
                  <span>Core Vite + React Architecture ({pageCount} Pages):</span>
                  <span className="text-white font-semibold">
                    {formatINR(baseCost + (pageCount - 1) * perPageCost)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Selected Power Modules ({selectedAddonIds.length}):</span>
                  <span className="text-white font-semibold">
                    {formatINR(
                      selectedAddonIds.reduce((sum, id) => {
                        const addon = ADDONS.find((a) => a.id === id);
                        return sum + (addon ? addon.price : 0);
                      }, 0)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Static Cloud Deployment (GitHub Pages/Vercel):</span>
                  <span className="font-bold">₹0 (Free Forever)</span>
                </div>
              </div>

              {/* Main Conversion CTAs */}
              <div className="space-y-3">
                {/* Instant WhatsApp Lead Trigger */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Send Scope to Keshav on WhatsApp</span>
                </a>

                {/* Claim Technical Blueprint Form / Feedback */}
                {!isSubmitted ? (
                  <form onSubmit={handleClaimBlueprint} className="mt-3">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Enter email to get architecture blueprint"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="flex-1 bg-[#090c16] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono text-center animate-in fade-in">
                    ✓ Blueprint sent! Keshav Vatsa will follow up within 2 hours.
                  </div>
                )}
              </div>

              {/* Guarantee Pill */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>100% Code Ownership • No Recurring Vendor Lock-In</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
