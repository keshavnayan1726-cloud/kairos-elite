import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Logo from './Logo';
import { AGENCY_CONFIG } from '../data/agencyInfo';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function ContactFooter({ onOpenDeploymentModal }) {
  const { contact } = AGENCY_CONFIG;

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
    
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#D4B06A', '#B89047', '#121316', '#FBF9F5'],
      });
    } catch (err) {
      console.error(err);
    }

    setIsSubmitted(true);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-[#F5F1E8] border-t border-[#E8E2D5] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-[#C5A059]/[0.05] blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-[#B89047]/[0.04] blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Form on Left, DLF Phase 1 / Direct Founder Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[#E8E2D5]">
          
          {/* Left 7 Columns: Validated Conversion Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl cream-card p-6 sm:p-10 relative overflow-hidden shadow-sm">
              
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#8C6B28] text-xs font-mono mb-3 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
                  <span>DIRECT INTAKE DESK</span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#121316] tracking-tight mb-2">
                  Initiate Your Project Sprint
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5161] leading-relaxed">
                  Direct intake reviewed by Keshav Vatsa. You will receive a technical architecture breakdown and sprint quote within 2 hours.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#2E323B] mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-4 py-3 text-xs text-[#121316] placeholder-[#A0A5B1] focus:outline-none focus:border-[#B89047] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#2E323B] mb-1.5 font-medium">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-4 py-3 text-xs text-[#121316] placeholder-[#A0A5B1] focus:outline-none focus:border-[#B89047] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#2E323B] mb-1.5 font-medium">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-4 py-3 text-xs text-[#121316] placeholder-[#A0A5B1] focus:outline-none focus:border-[#B89047] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#2E323B] mb-1.5 font-medium">
                        Primary Capability Needed
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-4 py-3 text-xs text-[#121316] focus:outline-none focus:border-[#B89047] transition"
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
                    <label className="block text-xs font-mono text-[#2E323B] mb-1.5 font-medium">
                      Estimated Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-4 py-3 text-xs text-[#121316] focus:outline-none focus:border-[#B89047] transition"
                    >
                      <option>₹18,000 - ₹35,000 (Focused Module / Landing Page)</option>
                      <option>₹35,000 - ₹75,000 (Standard Brand Portal + 3D)</option>
                      <option>₹75,000 - ₹2,00,000+ (Enterprise Dynamic Architecture)</option>
                      <option>Custom Monthly Retainer / Performance Tied</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#2E323B] mb-1.5 font-medium">
                      Project Objective / Target Launch Date
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Briefly describe your business, existing website URL (if any), and your revenue goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl px-4 py-3 text-xs text-[#121316] placeholder-[#A0A5B1] focus:outline-none focus:border-[#B89047] transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold-satin w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-[#121316] flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Strategic Project Request</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#707684] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B89047]" />
                    <span>Strict NDA Protected • Zero Spam Policy</span>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-bold text-[#121316]">Intake Brief Received</h4>
                  <p className="text-xs text-[#4B5161] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#121316]">{formData.name}</strong>. Keshav Vatsa has been notified of your project requirement ({formData.serviceInterest}). You will receive an initial architecture brief on WhatsApp/Email within 2 business hours.
                  </p>
                  <div className="pt-4">
                    <a
                      href={getWhatsAppLink(`Hi Keshav! I just submitted an inquiry on the Kairos Elite website for ${formData.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold-satin inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#121316]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via Instant WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right 5 Columns: Agency HQ, DLF Phase 1 Card & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Connect with Keshav Vatsa */}
            <div className="p-6 sm:p-8 rounded-3xl cream-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#D4AF37]/40 p-1 bg-[#FAF7F2] shrink-0 shadow-sm">
                  <img 
                    src="./assets/kairos-logo.jpg" 
                    alt="Kairos Elite" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#121316]">Direct Executive Channel</h4>
                  <p className="text-xs text-[#8C6B28] font-mono font-semibold">Keshav Vatsa • Founder</p>
                  <p className="text-[11px] text-[#707684]">DLF Phase 1, Gurugram</p>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#121316] flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#B89047]" />
                    <span>Instant WhatsApp Consultation</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Active Online
                  </span>
                </div>
                <p className="text-xs text-[#4B5161] leading-relaxed mb-3">
                  Have an urgent sprint deadline or want to bypass email delays? Connect with Keshav directly on WhatsApp.
                </p>
                <a
                  href={getWhatsAppLink("Hello Keshav! I'd like to discuss a project build directly on WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-satin w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#121316] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Contact Information Specs */}
              <div className="space-y-3 font-mono text-xs text-[#2E323B]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#B89047] shrink-0" />
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#8C6B28] shrink-0" />
                  <a href={`mailto:${contact.email}`} className="hover:text-[#B89047] transition">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{contact.workingHours}</span>
                </div>
              </div>

            </div>

            {/* DLF Phase 1 Gurugram Card */}
            <div className="p-6 rounded-3xl cream-card relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C6B28] font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>GURUGRAM PRIME CORRIDOR</span>
                </div>
                <span className="text-[10px] font-mono text-[#8C6B28] px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/30">
                  Delhi-NCR
                </span>
              </div>
              <h5 className="font-serif-luxury text-lg font-bold text-[#121316] mb-1">
                Local Presence in DLF Phase 1, Gurugram
              </h5>
              <p className="text-xs text-[#707684] leading-relaxed mb-4">
                Strategically positioned in DLF Phase 1, Gurugram for in-person strategic alignments across Cyber Hub, Golf Course Road, and the broader NCR enterprise hub.
              </p>
              
              <button
                onClick={onOpenDeploymentModal}
                className="w-full py-2.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EFE6] border border-[#E8E2D5] text-xs font-mono text-[#8C6B28] flex items-center justify-center gap-2 transition cursor-pointer font-semibold"
              >
                <span>Zero-Cost GitHub / Vercel Architecture Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B89047]" />
              </button>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#707684]">
          <div className="flex items-center gap-3">
            <Logo showText={false} className="h-6" />
            <span>
              © {new Date().getFullYear()} KAIROS ELITE. Owned & Operated by <strong className="text-[#121316]">Keshav Vatsa</strong>. DLF Phase 1, Gurugram.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDeploymentModal}
              className="text-[#707684] hover:text-[#B89047] transition cursor-pointer"
            >
              Zero-Budget Deployment
            </button>
            <span>•</span>
            <a 
              href="https://github.com/keshavnayan1726-cloud/kairos-elite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#707684] hover:text-[#121316] transition"
            >
              <Code2 className="w-3.5 h-3.5 text-[#B89047]" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

      </div>

      {/* Organic "Chat with Keshav" Pill-Shaped Button at Bottom Right */}
      <a
        href={getWhatsAppLink("Hello Keshav! I am browsing the Kairos Elite website and would like to talk.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 rounded-full btn-gold-satin text-[#121316] font-bold text-xs active:scale-95 duration-200 group"
        title="Chat on WhatsApp with Keshav Vatsa"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
        </span>
        <MessageCircle className="w-4 h-4 text-[#121316]" />
        <span>Chat with Keshav</span>
      </a>
    </footer>
  );
}
