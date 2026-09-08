import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Terminal, Sparkles, Code, Cpu, Brain, CheckCircle2, ChevronRight } from 'lucide-react';
import { personalData, socialLinks } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [terminalStep, setTerminalStep] = useState(0);

  const terminalLogs = [
    { cmd: "python -m model.train --epochs 100 --cuda", out: "Epoch [100/100] Loss: 0.0381 | Accuracy: 97.4% [OPTIMAL]" },
    { cmd: "git commit -m 'feat: optimize neural inference graph'", out: "[main e4b29a0] 4 files changed, 62 insertions(+)" },
    { cmd: "node server.js --status", out: "REST Gateway active on port 5000 [PostgreSQL / MongoDB Connected]" },
    { cmd: "dsa.solve(problem='BinaryTreeMaxPath')", out: "Time Complexity: O(N) | Space Complexity: O(H) -> Passed All Cases" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalStep((prev) => (prev + 1) % terminalLogs.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [terminalLogs.length]);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Cyber Status Pill */}
            <div className="cyber-pill group cursor-default">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="font-tech font-bold uppercase tracking-wider text-cyan-300">
                {personalData.hero.badge}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-bold tracking-wide">Class of 2026</span>
            </div>

            {/* Main Headline with Luxury Syne Display Font & Shimmer Gradients */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl xl:text-7xl tracking-tight text-white leading-[1.08]">
              <span className="block text-slate-100 drop-shadow-md">
                {personalData.hero.headlinePart1}
              </span>
              <span className="block text-shimmer glow-text-cyan">
                {personalData.hero.headlinePart2}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 glow-text-emerald">
                {personalData.hero.headlinePart3}
              </span>
            </h1>

            {/* Tech Subheading */}
            <div className="flex items-center gap-2 text-cyan-300/90 font-tech font-bold text-sm sm:text-base tracking-widest uppercase">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>{personalData.hero.subheading}</span>
            </div>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalData.hero.description}
            </p>

            {/* Action Buttons with Advanced Styling & Hover Animation */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              {/* Primary View Projects */}
              <a
                href="#projects"
                className="relative group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-tech font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">{personalData.hero.primaryCta}</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Download Resume */}
              <a
                href="/resume.pdf"
                download="Ujjwal_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-cyan-500/30 hover:border-cyan-400 font-tech font-semibold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>{personalData.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Social Icons & Status */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-tech font-bold text-slate-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  aria-label="Email Ujjwal"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 ml-auto text-xs font-tech font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalData.hero.statusText}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Cybernetic AI Frame & Interactive Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Ambient Background Glowing Blobs */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-emerald-500/30 rounded-3xl blur-3xl -z-10 opacity-75 animate-pulse-slow"></div>

            {/* Rotating Conic Gradient Outer Box */}
            <div className="cyber-glow-box w-full max-w-md p-[2px] shadow-2xl">
              <div className="cyber-glow-inner p-5 sm:p-6 backdrop-blur-2xl">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-cyan-400 ml-2 font-semibold">ujjwal@lpu-ai-engine:~$</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-500/40">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <span>CUDA v12.4</span>
                  </div>
                </div>

                {/* Portrait with Glowing Frame & Hover Sweep */}
                <div className="relative mb-5 flex justify-center">
                  <div className="relative group">
                    {/* Pulsing neon halo */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-600 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>
                    
                    {/* Portrait Image Container */}
                    <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl bg-slate-950">
                      <img
                        src="/assets/ujjwal-kumar.jpg"
                        alt="Ujjwal Kumar - AI/ML & Full-Stack Developer"
                        className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Sweeping Cyber Scanline */}
                      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-scan pointer-events-none" />

                      {/* Vignette bottom gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                      {/* Bottom Banner */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-center">
                        <p className="text-xs font-display font-black text-white uppercase tracking-wider">
                          UJJWAL KUMAR
                        </p>
                        <p className="text-[10px] font-tech font-bold text-cyan-300 uppercase tracking-widest mt-0.5">
                          AI / ML • FULL-STACK • DSA
                        </p>
                      </div>
                    </div>

                    {/* Floating Tech Badges with Floating Animation */}
                    <div className="absolute -top-3 -right-4 px-3 py-1 rounded-xl bg-slate-950/90 border border-cyan-500/50 text-[11px] font-tech font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-1.5 animate-float">
                      <Brain className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Neural Networks</span>
                    </div>

                    <div className="absolute -bottom-3 -left-4 px-3 py-1 rounded-xl bg-slate-950/90 border border-violet-500/50 text-[11px] font-tech font-bold text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.4)] flex items-center gap-1.5 animate-float-slow">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      <span>Full-Stack Ready</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Terminal Output with Typing Feel */}
                <div className="bg-slate-950 rounded-xl p-3.5 border border-white/10 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5 text-cyan-300">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>active_process.sh</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      LIVE
                    </span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-cyan-400 text-xs">
                      <ChevronRight className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-100 font-semibold">{terminalLogs[terminalStep].cmd}</span>
                    </div>
                    <div className="text-xs text-emerald-300/95 pl-3 border-l-2 border-cyan-400 animate-in fade-in duration-300">
                      {terminalLogs[terminalStep].out}
                    </div>
                  </div>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-center font-tech">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Stack</span>
                    <span className="text-xs font-bold text-cyan-400">MERN + Py</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Focus</span>
                    <span className="text-xs font-bold text-violet-400">AI / ML / DSA</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Campus</span>
                    <span className="text-xs font-bold text-emerald-400">LPU India</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
