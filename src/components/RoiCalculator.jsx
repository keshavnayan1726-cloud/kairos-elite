import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  ArrowUpRight, 
  MessageCircle, 
  Zap, 
  DollarSign, 
  Percent, 
  Users 
} from 'lucide-react';
import { formatINR, formatCompactINR } from '../utils/currency';
import { generateRoiWhatsApp } from '../utils/whatsapp';

export default function RoiCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000);
  const [currentConversionRate, setCurrentConversionRate] = useState(1.2);
  const [averageDealValue, setAverageDealValue] = useState(25000);

  // Calculations
  const stats = useMemo(() => {
    const currentMonthlyConversions = Math.max(1, Math.round(monthlyVisitors * (currentConversionRate / 100)));
    const currentRevenue = currentMonthlyConversions * averageDealValue;

    // Optimized Conversion Rate with Kairos Elite
    const optimizedConversionRate = Math.min(6.5, parseFloat((currentConversionRate * 2.4).toFixed(1)));
    const projectedConversions = Math.round(monthlyVisitors * (optimizedConversionRate / 100));
    const projectedRevenue = projectedConversions * averageDealValue;

    const monthlyLeakage = Math.max(0, projectedRevenue - currentRevenue);
    const annualGains = monthlyLeakage * 12;

    return {
      currentMonthlyConversions,
      currentRevenue,
      optimizedConversionRate,
      projectedConversions,
      projectedRevenue,
      monthlyLeakage,
      annualGains,
      formattedCurrentRevenue: formatINR(currentRevenue),
      formattedMonthlyLeakage: formatINR(monthlyLeakage),
      formattedProjectedRevenue: formatINR(projectedRevenue),
      formattedAnnualGains: formatCompactINR(annualGains),
    };
  }, [monthlyVisitors, currentConversionRate, averageDealValue]);

  const whatsappHref = generateRoiWhatsApp({
    monthlyVisitors,
    currentConversionRate,
    averageDealValue: formatINR(averageDealValue),
    currentRevenue: stats.formattedCurrentRevenue,
    estimatedMonthlyLoss: stats.formattedMonthlyLeakage,
    projectedGrowth: stats.formattedMonthlyLeakage,
  });

  return (
    <section id="roi-calculator" className="relative py-24 bg-[#FBF9F5] border-t border-[#E8E2D5] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#C5A059]/[0.05] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#B89047]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#D4AF37]/30 text-[#8C6B28] text-xs font-mono mb-4 shadow-sm font-semibold">
            <Calculator className="w-3.5 h-3.5 text-[#B89047]" />
            <span>REVENUE LEAKAGE AUDIT</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Digital ROI & Leakage Calculator
          </h2>
          <p className="text-[#4B5161] text-base sm:text-lg">
            Slow pages, confusing navigation, and generic layouts silently bleed conversions. See how much pipeline revenue your current website is leaving on the table each month.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Metric Sliders */}
          <div className="lg:col-span-6 rounded-3xl cream-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E2D5]">
                <span className="text-xs font-mono text-[#8C6B28] uppercase tracking-wider font-semibold">
                  Current Traffic & Conversion Baseline
                </span>
                <span className="text-[11px] font-mono text-[#A0A5B1]">Real-time Simulation</span>
              </div>

              {/* Slider 1: Monthly Visitors */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-[#121316] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#B89047]" />
                    <span>Monthly Website Visitors</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-bold text-[#121316]">
                    {monthlyVisitors.toLocaleString()} <span className="text-xs text-[#707684]">visitors</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-[#E8E2D5] rounded-lg appearance-none cursor-pointer accent-[#B89047]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#707684] mt-1">
                  <span>500</span>
                  <span>25,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Slider 2: Current Conversion Rate */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-[#121316] flex items-center gap-2">
                    <Percent className="w-4 h-4 text-[#8C6B28]" />
                    <span>Current Conversion Rate</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-bold text-[#8C6B28]">
                    {currentConversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-[#E8E2D5] rounded-lg appearance-none cursor-pointer accent-[#B89047]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#707684] mt-1">
                  <span>0.2% (Sub-optimal)</span>
                  <span>1.5% (Industry Avg)</span>
                  <span>5.0% (Elite Funnel)</span>
                </div>
              </div>

              {/* Slider 3: Average Deal Value */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-[#121316] flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#B89047]" />
                    <span>Average Deal / Customer Lifetime Value</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-bold text-[#121316]">
                    {formatINR(averageDealValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="250000"
                  step="1000"
                  value={averageDealValue}
                  onChange={(e) => setAverageDealValue(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-[#E8E2D5] rounded-lg appearance-none cursor-pointer accent-[#B89047]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#707684] mt-1">
                  <span>₹2,000</span>
                  <span>₹50,000</span>
                  <span>₹2,50,000+</span>
                </div>
              </div>
            </div>

            {/* Current Baseline Card */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] flex items-center justify-between text-xs font-mono">
              <span className="text-[#707684]">Current Monthly Revenue Run-Rate:</span>
              <span className="text-[#121316] font-bold text-sm font-serif-luxury">{stats.formattedCurrentRevenue}</span>
            </div>

          </div>

          {/* Right Column: Leakage Analysis & Kairos Lift Display */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl cream-card p-6 sm:p-8 relative overflow-hidden shadow-sm">
            
            <div>
              {/* Estimated Revenue Leaked */}
              <div className="p-5 rounded-2xl bg-[#FFF5F5] border border-red-200 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-red-700 mb-1 font-semibold">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>ESTIMATED REVENUE LEAKING EVERY MONTH</span>
                </div>
                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-red-700 tracking-tight mb-1">
                  {stats.formattedMonthlyLeakage}
                </div>
                <p className="text-xs text-[#707684] leading-relaxed">
                  Lost to slow load times, unoptimized mobile layouts, and unclear conversion pathways.
                </p>
              </div>

              {/* Kairos Projected Engine Lift */}
              <div className="p-5 rounded-2xl bg-[#FBF7EE] border border-[#D4AF37]/40 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C6B28] mb-2 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-[#B89047]" />
                    <span>PROJECTED MONTHLY REVENUE WITH KAIROS ELITE</span>
                  </div>
                  <span className="text-emerald-700 font-bold">
                    {stats.optimizedConversionRate}% Target CRO
                  </span>
                </div>

                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#121316] tracking-tight mb-2">
                  {stats.formattedProjectedRevenue}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#2E323B] pt-3 border-t border-[#E8E2D5]">
                  <div>
                    <span className="text-[#707684] block text-[10px]">Monthly Revenue Lift:</span>
                    <span className="text-emerald-700 font-bold">+{formatINR(stats.monthlyLeakage)}/mo</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#707684] block text-[10px]">Projected Annual Net:</span>
                    <span className="text-[#8C6B28] font-bold">+{stats.formattedAnnualGains} / yr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Trigger */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-satin w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-[#121316] flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fix This Revenue Leakage with Keshav</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#707684]">
                <Zap className="w-3.5 h-3.5 text-[#B89047]" />
                <span>Average client sees positive ROI within the first 30 days of deployment</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
