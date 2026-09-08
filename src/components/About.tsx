import React from 'react';
import { GraduationCap, Brain, Cpu, Layers, Rocket, Sparkles, MapPin, Compass, Quote } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const statIcons: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
  Brain: <Brain className="w-5 h-5 text-violet-400" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  Rocket: <Rocket className="w-5 h-5 text-amber-400" />,
};

export const About: React.FC = () => {
  const { about } = personalData;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cyber-pill mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase tracking-wider">{about.badge}</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            {about.heading}
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full mt-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          
          <div className="mt-6 flex items-center justify-center gap-2 max-w-2xl px-4">
            <Quote className="w-5 h-5 text-cyan-400 flex-shrink-0 rotate-180" />
            <p className="font-display font-semibold text-base sm:text-lg text-cyan-200/90 italic tracking-wide">
              {about.quote}
            </p>
            <Quote className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-6 flex">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 backdrop-blur-2xl shadow-2xl space-y-6 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-tech font-bold text-cyan-400 uppercase tracking-widest pb-3 border-b border-white/10">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>The Engineering Philosophy</span>
                </div>

                {about.paragraphs.map((p, idx) => (
                  <p key={idx} className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-3 border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-tech font-medium text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>LPU, Punjab, India</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-tech font-semibold text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Future AI/ML Engineer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.stats.map((stat, idx) => {
              const isFullSpan = idx === 4;
              return (
                <div
                  key={stat.id}
                  className={`p-6 rounded-3xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group ${
                    isFullSpan ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-sm">
                      {statIcons[stat.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-white/[0.04] text-cyan-400 border border-cyan-500/20">
                      [ 0{idx + 1} ]
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400/90 mt-1">
                    {stat.subtitle}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
