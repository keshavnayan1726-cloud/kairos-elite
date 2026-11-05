import React, { useState } from 'react';
import { X, Copy, Check, CloudLightning, Code2, ShieldCheck } from 'lucide-react';

export default function DeploymentModal({ isOpen, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: "Step 1: Relative Base Path Pre-Configured",
      desc: "In vite.config.js, base: './' is already configured. This guarantees all 3D assets, fonts, and scripts load flawlessly on any sub-path (like username.github.io/kairos-elite/).",
      command: `// vite.config.js\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n  base: './',\n})`,
    },
    {
      title: "Step 2: Instant Build for Static Output",
      desc: "Run the high-speed Vite production bundler. The compiled artifacts are generated into the /dist directory in under 1 second.",
      command: `npm run build`,
    },
    {
      title: "Step 3: 1-Click Zero-Cost Deployment to GitHub Pages",
      desc: "Deploy the dist folder directly to GitHub Pages for ₹0 / $0 monthly hosting with infinite scalability.",
      command: `npx gh-pages -d dist`,
    },
    {
      title: "Alternative: 1-Click Zero-Cost Deployment on Vercel",
      desc: "Connect your GitHub repository to Vercel. Output directory: dist. Zero server maintenance required.",
      command: `npx vercel --prod`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl cream-card p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E2D5]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#F7F2E7] border border-[#D4AF37]/30 text-[#8C6B28]">
              <CloudLightning className="w-5 h-5 text-[#B89047]" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#121316]">Zero-Budget CI/CD Deployment Guide</h3>
              <p className="text-xs text-[#707684]">1-Click Static Cloud Hosting (GitHub Pages / Vercel)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#707684] hover:text-[#121316] rounded-xl bg-[#FAF7F2] hover:bg-[#F3EFE6] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto pr-1 space-y-6">
          <div className="p-4 rounded-2xl bg-[#F7F2E7] border border-[#D4AF37]/30 text-xs text-[#2E323B] leading-relaxed">
            <span className="font-bold text-[#8C6B28]">Zero Server Maintenance:</span> The entire Kairos Elite architecture compiles into pure static HTML/CSS/JS bundles. You can host it on GitHub Pages, Cloudflare Pages, or Vercel with 100% uptime and <strong>₹0 recurring cloud bills</strong>.
          </div>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5]">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#121316]">
                    {step.title}
                  </h4>
                  <button
                    onClick={() => copyToClipboard(step.command, idx)}
                    className="flex items-center gap-1 text-[11px] font-mono text-[#8C6B28] hover:text-[#121316] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E8E2D5] transition-colors cursor-pointer"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#B89047]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-[#707684] mb-2 leading-relaxed">
                  {step.desc}
                </p>

                <pre className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E8E2D5] text-xs font-mono text-[#8C6B28] overflow-x-auto">
                  <code>{step.command}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-mono text-[#707684]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Ready for instant production deploy</span>
          </div>
          <button
            onClick={onClose}
            className="btn-gold-satin px-5 py-2 rounded-xl text-xs font-bold text-[#121316] cursor-pointer"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
}
