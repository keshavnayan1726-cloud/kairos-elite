import React from 'react';
import { ArrowRight, Calculator, Check, Sparkles, MapPin, MessageCircle } from 'lucide-react';
import Hero3D from './Hero3D';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center bg-[#FBF9F5]">
      {/* Delicate Gold Accent Lines & Warm Lighting Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C5A059]/[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#B89047]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle Fine Accent Geometric Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#B89047 1px, transparent 1px), linear-gradient(90deg, #B89047 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Bespoke Typography, Elegant Headline & Dual CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Live Social Proof Tag with Delicate Gold Accent */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8E2D5] shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89047] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B89047]"></span>
              </span>
              <span className="text-xs font-medium text-[#2E323B]">
                Trusted by <strong className="text-[#121316] font-semibold">12+ Brands</strong> across high-stakes verticals
              </span>
              <span className="text-[#D8D1C3]">|</span>
              <span className="text-[11px] font-mono text-[#8C6B28] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#B89047]" /> DLF Phase 1, Gurugram
              </span>
            </div>

            {/* Main Headline: Sophisticated High-End Serif with Delicate Serifs in Deep Obsidian & Rich Gold */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.85rem] font-bold tracking-[-0.02em] text-[#121316] leading-[1.08] mb-6">
              Digital Dominance for{' '}
              <span className="italic font-normal text-[#B89047]">
                High-Growth
              </span>{' '}
              Brands.
            </h1>

            {/* Paragraph: Premium Geometric Sans-serif in Deep Charcoal & Warm Gray */}
            <p className="text-base sm:text-lg text-[#4B5161] leading-[1.7] max-w-xl mb-9 font-normal">
              Elite engineering, performance SEO, and automated workflows designed to scale revenue. 
              Founded and spearheaded by <strong className="text-[#121316] font-semibold">Keshav Vatsa</strong> in DLF Phase 1, Gurugram.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Button: Luxurious Gold with Gentle Satin Sheen */}
              <a
                href="#services"
                className="btn-gold-satin inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide text-[#121316] group active:scale-95"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Button: Dark Obsidian with Thin Sophisticated Border */}
              <a
                href="#roi-calculator"
                className="btn-obsidian inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-[#FBF9F5] active:scale-95 group"
              >
                <Calculator className="w-4 h-4 mr-2 text-[#C5A059] group-hover:rotate-12 transition-transform" />
                <span>Calculate Project ROI</span>
              </a>
            </div>

            {/* Bottom 3 Trust Badges with Tiny Fine Gold Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#E8E2D5] w-full text-xs text-[#2E323B] font-medium">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#F7F2E7] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#B89047] stroke-[3]" />
                </div>
                <span>Zero Bloatware Code</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#F7F2E7] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#B89047] stroke-[3]" />
                </div>
                <span>Sub-800ms Edge Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#F7F2E7] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#B89047] stroke-[3]" />
                </div>
                <span>Direct Founder Access</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: 3D Transformer Robot AI Assistant & Holographic Station */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Background Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/10 via-[#F7F4EE] to-transparent rounded-3xl blur-2xl -z-10" />

            {/* 3D Visualizer Card */}
            <div className="w-full relative rounded-3xl cream-card p-2 overflow-hidden">
              
              {/* Subtle Elegant Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E8E2D5] bg-[#FAF7F2]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#121316]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B89047]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B89047]" />
                  <span className="text-[11px] font-mono text-[#707684] ml-2">kairos_ai_chassis.v2</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8C6B28] bg-[#F7F2E7] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                  <Sparkles className="w-3 h-3 text-[#B89047]" /> Brushed Gold & Brass
                </div>
              </div>

              {/* Three.js Transformer Robot Interactive Canvas */}
              <Hero3D />

              {/* Sub-label: Interactive AI Assistant • Drag to Inspect */}
              <div className="text-center py-2 bg-[#FAF7F2] border-t border-[#E8E2D5]">
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#8C6B28] font-semibold">
                  Interactive AI Assistant • Drag to Inspect
                </span>
              </div>

              {/* Metrics Boxes in Premium Delicate Gold & Deep Charcoal */}
              <div className="p-4 sm:p-5 bg-[#FFFFFF] border-t border-[#E8E2D5] grid grid-cols-2 gap-4">
                <div className="border-r border-[#E8E2D5] pr-3">
                  <div className="text-[10px] uppercase tracking-wider text-[#707684] font-mono mb-1">
                    CLIENT BUDGETS DEPLOYED
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#121316]">
                    ₹13.64+ <span className="text-[#B89047] font-semibold text-lg">Lakhs</span>
                  </div>
                </div>

                <div className="pl-3">
                  <div className="text-[10px] uppercase tracking-wider text-[#707684] font-mono mb-1">
                    CLIENT RETENTION
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#B89047]">
                    100.0% <span className="text-[#2E323B] font-mono text-xs font-normal">Reliability</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
