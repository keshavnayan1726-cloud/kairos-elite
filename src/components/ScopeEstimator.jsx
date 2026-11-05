import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Send, 
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
      desc: 'Bespoke 3D asset, interactive cursor physics & dynamic shaders',
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
      desc: 'Instant WhatsApp / Telegram alerts + automated lead capture to CRM',
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

  const baseCost = 18000;
  const perPageCost = 3500;
  
  const calculatedEstimate = useMemo(() => {
    const pagesCost = (pageCount - 1) * perPageCost;
    const addonsCost = selectedAddonIds.reduce((sum, id) => {
      const addon = ADDONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const totalInr = baseCost + pagesCost + addonsCost;
    
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

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4B06A', '#B89047', '#121316', '#FBF9F5'],
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
    <section id="scope-estimator" className="relative py-24 bg-[#F5F1E8] border-t border-[#E8E2D5] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#C5A059]/[0.05] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#B89047]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#D4AF37]/30 text-[#8C6B28] text-xs font-mono mb-4 shadow-sm font-semibold">
            <Sliders className="w-3.5 h-3.5 text-[#B89047]" />
            <span>INTERACTIVE SCOPE & COST ENGINE</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Configure Your Custom System
          </h2>
          <p className="text-[#4B5161] text-base sm:text-lg">
            No ambiguous estimates or hidden agency retainers. Select your architecture needs and receive an instant, transparent quote with zero lock-in.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders and Addon Toggles */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Page Count Slider Card */}
            <div className="p-6 sm:p-8 rounded-3xl cream-card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#121316]">
                    1. Website Page Count & Core Structure
                  </h3>
                  <p className="text-xs text-[#707684]">
                    Includes ultra-fast Vite/React boilerplate, mobile responsive design, and free static cloud hosting setup.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-serif-luxury text-3xl font-bold text-[#B89047]">
                    {pageCount}
                  </span>
                  <span className="text-xs text-[#707684] font-mono block">Page{pageCount > 1 ? 's' : ''}</span>
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
                  className="w-full h-2.5 bg-[#E8E2D5] rounded-lg appearance-none cursor-pointer accent-[#B89047]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#707684]">
                  <span>1 Page (High-Converting Landing)</span>
                  <span>5 Pages (Standard Brand)</span>
                  <span>15+ Pages (Enterprise Portal)</span>
                </div>
              </div>
            </div>

            {/* 2. Optional Architectural Modules */}
            <div className="p-6 sm:p-8 rounded-3xl cream-card">
              <div className="mb-6">
                <h3 className="font-serif-luxury text-xl font-bold text-[#121316] mb-1">
                  2. Select High-Throughput Power Modules
                </h3>
                <p className="text-xs text-[#707684]">
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
                          ? 'bg-[#FFFFFF] border-[#B89047] shadow-sm shadow-[#B89047]/15 ring-1 ring-[#B89047]'
                          : 'bg-[#FAF7F2] border-[#E8E2D5] hover:border-[#D4AF37]/50 hover:bg-[#FFFFFF]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-2 rounded-xl border ${
                            isSelected 
                              ? 'bg-[#F7F2E7] text-[#8C6B28] border-[#D4AF37]/40' 
                              : 'bg-[#FAF7F2] text-[#707684] border-[#E8E2D5]'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFFFFF] border border-[#E8E2D5] text-[#707684]">
                              {addon.tag}
                            </span>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              isSelected
                                ? 'bg-[#B89047] border-[#B89047] text-white'
                                : 'border-[#D8D1C3] bg-white'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                        </div>

                        <h4 className="text-xs font-bold text-[#121316] mb-1 leading-snug">
                          {addon.name}
                        </h4>
                        <p className="text-[11px] text-[#707684] leading-relaxed mb-3">
                          {addon.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-mono font-semibold">
                        <span className={isSelected ? 'text-[#8C6B28]' : 'text-[#707684]'}>
                          +{formatINR(addon.price)}
                        </span>
                        <span className="text-[10px] text-[#A0A5B1]">
                          (~{formatUSD(addon.price)})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Company / Brand Name Input */}
            <div className="p-4 rounded-2xl cream-card flex flex-col sm:flex-row items-center gap-3">
              <span className="text-xs font-mono text-[#707684] shrink-0 font-medium">Company / Brand Name:</span>
              <input
                type="text"
                placeholder="e.g. Acme Capital, DLF Realty, Nova Tech"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-3.5 py-2 text-xs text-[#121316] placeholder-[#A0A5B1] focus:outline-none focus:border-[#B89047]"
              />
            </div>

          </div>

          {/* Right Column: Live Dynamic Quote Summary & CTAs */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl cream-card p-6 sm:p-8 shadow-sm relative overflow-hidden">
              
              {/* Top ambient badge */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E2D5]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B89047]" />
                  <span className="text-xs font-mono text-[#707684]">ESTIMATED INVESTMENT</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Fixed Price • Guaranteed
                </span>
              </div>

              {/* Real-time Display */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#707684] mb-1">
                  Estimated Total
                </div>
                <div className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#121316] tracking-tight mb-1">
                  {calculatedEstimate.formattedInr}
                </div>
                <div className="text-sm font-mono text-[#8C6B28] flex items-center gap-2">
                  <span>Approx. {calculatedEstimate.formattedUsd}</span>
                  <span>•</span>
                  <span>Zero hidden retainers</span>
                </div>
              </div>

              {/* Delivery Speed / Timeline */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#B89047]" />
                  <div>
                    <span className="text-xs font-semibold text-[#121316] block">Projected Sprint Delivery</span>
                    <span className="text-[11px] text-[#707684]">Direct founder-led execution</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#8C6B28] bg-[#F7F2E7] px-2.5 py-1 rounded border border-[#D4AF37]/30">
                  {calculatedEstimate.timeline}
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 mb-8 text-xs font-mono border-t border-b border-[#E8E2D5] py-4">
                <div className="flex justify-between text-[#4B5161]">
                  <span>Core Architecture ({pageCount} Pages):</span>
                  <span className="text-[#121316] font-semibold">
                    {formatINR(baseCost + (pageCount - 1) * perPageCost)}
                  </span>
                </div>
                <div className="flex justify-between text-[#4B5161]">
                  <span>Selected Power Modules ({selectedAddonIds.length}):</span>
                  <span className="text-[#121316] font-semibold">
                    {formatINR(
                      selectedAddonIds.reduce((sum, id) => {
                        const addon = ADDONS.find((a) => a.id === id);
                        return sum + (addon ? addon.price : 0);
                      }, 0)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Static Cloud Deployment (GitHub Pages/Vercel):</span>
                  <span className="font-bold">₹0 (Free Forever)</span>
                </div>
              </div>

              {/* Main Conversion CTAs */}
              <div className="space-y-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-satin w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-[#121316] flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Scope to Keshav on WhatsApp</span>
                </a>

                {/* Blueprint Email Intake */}
                {!isSubmitted ? (
                  <form onSubmit={handleClaimBlueprint} className="mt-3">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Enter email to get architecture blueprint"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="flex-1 bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-3.5 py-2.5 text-xs text-[#121316] placeholder-[#A0A5B1] focus:outline-none focus:border-[#B89047]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FBF9F5] bg-[#121316] hover:bg-[#1E2129] border border-[#121316] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Send</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono text-center animate-in fade-in">
                    ✓ Blueprint sent! Keshav Vatsa will follow up within 2 hours.
                  </div>
                )}
              </div>

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-mono text-[#707684]">
                <ShieldCheck className="w-4 h-4 text-[#B89047]" />
                <span>100% Code Ownership • Zero Hostage Traps</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
