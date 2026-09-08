import React from 'react';
import { Download, FileText, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResumeCTA: React.FC = () => {
  const handleDownload = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#8b5cf6', '#10b981', '#38bdf8', '#ffffff']
    });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glow halo */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 rounded-3xl blur-2xl opacity-40 pointer-events-none animate-pulse-slow"></div>

        <div className="relative rounded-3xl bg-slate-900/85 border border-white/15 backdrop-blur-2xl p-8 sm:p-14 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-20 pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-4 max-w-xl text-center md:text-left relative z-10">
            <div className="cyber-pill">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-tech font-bold uppercase tracking-wider">Curriculum Vitae</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Want to know more about my journey?
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
              Take a closer look at my skills, projects, and academic coursework. Download my updated resume to review for engineering roles and internship opportunities.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-tech font-semibold text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified B.Tech CSE Coursework</span>
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <FileText className="w-4 h-4" />
                <span>PDF Format (Configurable)</span>
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex flex-col items-center gap-3 relative z-10 flex-shrink-0">
            <a
              href="/resume.pdf"
              download="Ujjwal_Kumar_Resume.pdf"
              onClick={handleDownload}
              className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-tech font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(6,182,212,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Download className="relative z-10 w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
              <span className="relative z-10">Download Resume</span>
              <ArrowRight className="relative z-10 w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <span className="text-xs font-mono text-slate-400">
              Configured path: <code className="text-cyan-300 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">public/resume.pdf</code>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
