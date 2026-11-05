import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
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
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D5] shadow-sm shadow-[#121316]/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Top-Left Logo Area */}
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#FFFFFF]/80 border border-[#E8E2D5] px-4 py-1.5 rounded-full shadow-sm shadow-black/[0.02]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[#4B5161] hover:text-[#B89047] hover:bg-[#F7F4EE] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={onOpenDeploymentModal}
              className="ml-1 px-3 py-1 text-[11px] font-mono text-[#8C6B28] hover:text-[#121316] bg-[#F7F2E7] hover:bg-[#EFE6D2] rounded-full border border-[#D4AF37]/30 transition-all"
            >
              Zero-Budget CI/CD
            </button>
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Location Tag */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E8E2D5] text-[11px] text-[#707684] font-mono shadow-sm">
              <MapPin className="w-3 h-3 text-[#B89047]" />
              <span>DLF Phase 1, Gurugram</span>
            </div>

            {/* "Chat with Keshav" Button with Active Online Dot */}
            <a
              href={getWhatsAppLink("Hello Keshav! I'm reviewing Kairos Elite systems and want to consult on an upcoming project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#121316] bg-[#FFFFFF] border border-[#E8E2D5] hover:border-[#D4AF37]/60 rounded-xl hover:bg-[#F9F6F0] transition-all duration-200 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Chat with Keshav</span>
            </a>

            {/* "Build Scope ↗" in Understated Warm Gold with Soft Organic Shadow */}
            <a
              href="#scope-estimator"
              className="btn-gold-satin px-4 py-2 rounded-xl text-xs font-bold text-[#121316] flex items-center gap-1.5"
            >
              <span>Build Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppLink("Hello Keshav! I'm reaching out from the Kairos Elite website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#121316] bg-[#FFFFFF] border border-[#E8E2D5] rounded-lg shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#B89047]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121316] bg-[#FFFFFF] border border-[#E8E2D5] rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 bg-[#FFFFFF] border border-[#E8E2D5] rounded-2xl shadow-xl shadow-black/5 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between pb-2 mb-1 border-b border-[#E8E2D5]">
                <span className="text-xs font-mono text-[#8C6B28] flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#B89047]" /> DLF Phase 1, Gurugram
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                  Online
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#2E323B] hover:text-[#B89047] hover:bg-[#F9F6F0] rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeploymentModal();
                }}
                className="text-left px-3 py-2 text-xs font-mono text-[#8C6B28] hover:bg-[#F7F2E7] rounded-lg border border-[#D4AF37]/30 transition"
              >
                Zero-Budget CI/CD Deployment Guide
              </button>

              <div className="pt-3 mt-2 border-t border-[#E8E2D5] flex flex-col gap-2">
                <a
                  href="#scope-estimator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold-satin w-full py-2.5 text-center text-xs font-bold text-[#121316] rounded-xl"
                >
                  Build Scope ↗
                </a>
                <a
                  href={getWhatsAppLink("Hi Keshav! Let's connect regarding Kairos Elite services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center text-xs font-semibold text-[#121316] bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#B89047]" />
                  <span>Chat with Keshav</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
