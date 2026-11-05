import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, CloudLightning, Code2, ShieldCheck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl glass-panel border border-cyan-500/30 bg-[#0A0D18] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[90px] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <CloudLightning className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Zero-Budget CI/CD Deployment Guide</h3>
              <p className="text-xs text-slate-400">1-Click Static Cloud Hosting (GitHub Pages / Vercel)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto pr-1 space-y-6">
          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-cyan-300">Zero Server Maintenance:</span> The entire Kairos Elite architecture compiles into pure static HTML/CSS/JS bundles. You can host it on GitHub Pages, Cloudflare Pages, or Vercel with 100% uptime and <strong>₹0 recurring cloud bills</strong>.
          </div>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0e1220] border border-white/5">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {step.title}
                  </h4>
                  <button
                    onClick={() => copyToClipboard(step.command, idx)}
                    className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40 transition-colors"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                  {step.desc}
                </p>

                <pre className="p-2.5 rounded-xl bg-[#06080e] border border-white/10 text-xs font-mono text-cyan-300 overflow-x-auto">
                  <code>{step.command}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ready for instant production deploy</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
}
