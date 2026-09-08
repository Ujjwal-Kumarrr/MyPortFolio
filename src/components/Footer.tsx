import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal, Sparkles } from 'lucide-react';
import { personalData, socialLinks } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#03050a] py-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo & Motto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider uppercase">
                {personalData.name}
              </span>
            </div>
            <p className="font-sans text-sm text-cyan-200/80 italic max-w-md">
              "Building today. Learning every day. Engineering the future."
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3.5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-2xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech font-bold uppercase tracking-wider text-slate-500">
          <p>© 2026 {personalData.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-cyan-400/80">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Systems & Modern Full-Stack Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
