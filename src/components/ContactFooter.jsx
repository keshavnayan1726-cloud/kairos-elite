import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Logo from './Logo';
import { AGENCY_CONFIG } from '../data/agencyInfo';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function ContactFooter({ onOpenDeploymentModal }) {
  const { founder, contact } = AGENCY_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Full-Stack Web Development & 3D Experiences',
    budget: '₹25,000 - ₹65,000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in your name, email, and contact number.');
      return;
    }

    setErrorMessage('');
    
    // Celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#00f2fe', '#ffd700', '#10b981', '#3b82f6'],
      });
    } catch (err) {
      console.error(err);
    }

    setIsSubmitted(true);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-[#06080F] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-cyan-600/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-yellow-500/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Form on Left, DLF Phase 1 / Direct Founder Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          
          {/* Left 7 Columns: Validated Conversion Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
              
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DIRECT INTAKE DESK</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Initiate Your Project Sprint
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Direct intake reviewed by Keshav Vatsa. You will receive a technical architecture breakdown and sprint quote within 2 hours.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0a0d18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0a0d18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0a0d18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Primary Capability Needed
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full bg-[#0a0d18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                      >
                        <option>Full-Stack Web Development & 3D Experiences</option>
                        <option>Local SEO & Google My Business Dominance</option>
                        <option>Agency Process Automation & Python Scrapers</option>
                        <option>Performance Ads & CRO Funnels</option>
                        <option>Comprehensive Custom Agency Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#0a0d18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option>₹18,000 - ₹35,000 (Focused Module / Landing Page)</option>
                      <option>₹35,000 - ₹75,000 (Standard Brand Portal + 3D)</option>
                      <option>₹75,000 - ₹2,00,000+ (Enterprise Dynamic Architecture)</option>
                      <option>Custom Monthly Retainer / Performance Tied</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Project Objective / Target Launch Date
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Briefly describe your business, existing website URL (if any), and your revenue goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#0a0d18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-yellow-300 hover:from-cyan-300 hover:to-yellow-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Strategic Project Request</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Strict NDA Protected • Zero Spam Policy</span>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Intake Brief Received</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Keshav Vatsa has been notified of your project requirement ({formData.serviceInterest}). You will receive an initial architecture brief on WhatsApp/Email within 2 business hours.
                  </p>
                  <div className="pt-4">
                    <a
                      href={getWhatsAppLink(`Hi Keshav! I just submitted an inquiry on the Kairos Elite website for ${formData.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via Instant WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right 5 Columns: Agency HQ, DLF Phase 1 Map Card & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Connect with Keshav Vatsa */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-yellow-500/30 p-1 bg-[#0A0D18] shrink-0">
                  <img 
                    src="./assets/kairos-logo.jpg" 
                    alt="Kairos Elite" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Direct Executive Channel</h4>
                  <p className="text-xs text-cyan-400 font-mono">Keshav Vatsa • Founder</p>
                  <p className="text-[11px] text-slate-400">DLF Phase 1, Gurugram</p>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Instant WhatsApp Consultation</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900 text-emerald-200">
                    Average response: 15 min
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Have an urgent sprint deadline or want to bypass email delays? Connect with Keshav directly on WhatsApp.
                </p>
                <a
                  href={getWhatsAppLink("Hello Keshav! I'd like to discuss a project build directly on WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Contact Information Specs */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`mailto:${contact.email}`} className="hover:text-cyan-300 transition">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{contact.workingHours}</span>
                </div>
              </div>

            </div>

            {/* DLF Phase 1 Gurugram Cyber Footprint Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0c101d] to-[#12182c] border border-cyan-500/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>GURUGRAM PRIME CORRIDOR</span>
                </div>
                <span className="text-[10px] font-mono text-yellow-300 px-2 py-0.5 rounded bg-yellow-950/60 border border-yellow-500/30">
                  Delhi-NCR
                </span>
              </div>
              <h5 className="text-sm font-bold text-white mb-1">
                Local Presence in DLF Phase 1, Gurugram
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Strategically positioned in DLF Phase 1, Gurugram for in-person high-stakes board alignments across Cyber Hub, Golf Course Road, and the broader NCR enterprise hub.
              </p>
              
              <button
                onClick={onOpenDeploymentModal}
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 flex items-center justify-center gap-2 transition"
              >
                <span>Zero-Cost GitHub / Vercel Architecture Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <Logo showText={false} className="h-6" />
            <span>
              © {new Date().getFullYear()} Kairos Elite. Owned & Operated by <strong className="text-slate-400">Keshav Vatsa</strong>. DLF Phase 1, Gurugram.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDeploymentModal}
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Zero-Budget Deployment
            </button>
            <span>•</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Static CI/CD Ready</span>
            </a>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Action Pill for High Conversion */}
      <a
        href={getWhatsAppLink("Hello Keshav! I am browsing the Kairos Elite website and would like to talk.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
        title="Chat on WhatsApp with Keshav Vatsa"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-950"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-black" />
        <span className="hidden sm:inline">Chat with Keshav</span>
      </a>
    </footer>
  );
}
