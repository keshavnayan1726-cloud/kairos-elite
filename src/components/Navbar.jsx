import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import Logo from './Logo';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Navbar({ onOpenDeploymentModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Founder", href: "#founder" },
    { name: "Scope Estimator", href: "#scope-estimator" },
    { name: "ROI Calculator", href: "#roi-calculator" },
    { name: "Why Kairos", href: "#why-us" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#07080e]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0e1220]/70 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={onOpenDeploymentModal}
              className="ml-1 px-3 py-1 text-[11px] font-mono text-yellow-400 hover:text-yellow-300 bg-yellow-400/10 hover:bg-yellow-400/20 rounded-full border border-yellow-400/20 transition-all"
            >
              Zero-Budget CI/CD
            </button>
          </nav>

          {/* Right Header CTAs & Location Badge */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Location Pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] text-slate-400 font-mono">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>DLF Phase 1, Gurugram</span>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={getWhatsAppLink("Hello Keshav! I'm reviewing Kairos Elite systems and want to consult on an upcoming project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl hover:bg-emerald-900/50 hover:border-emerald-400/50 transition-all duration-200 shadow-lg shadow-emerald-950/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat with Keshav</span>
            </a>

            {/* Main Action Button */}
            <a
              href="#scope-estimator"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-yellow-300 hover:opacity-95 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Build Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppLink("Hello Keshav! I'm reaching out from the Kairos Elite website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#0a0d18] border border-cyan-500/20 rounded-2xl shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> DLF Phase 1, Gurugram
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-mono">
                  Online
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeploymentModal();
                }}
                className="text-left px-3 py-2 text-xs font-mono text-yellow-300 hover:bg-yellow-400/10 rounded-lg border border-yellow-400/20 transition"
              >
                Zero-Budget CI/CD Deployment Guide
              </button>

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#scope-estimator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-yellow-300 rounded-xl shadow-lg"
                >
                  Configure Project Scope & Price
                </a>
                <a
                  href={getWhatsAppLink("Hi Keshav! Let's connect regarding Kairos Elite services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp with Keshav Vatsa</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
