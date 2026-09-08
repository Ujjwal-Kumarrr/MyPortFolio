import React from 'react';
import { Github, Code2, ExternalLink, Activity, Flame, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { codingStatsPlaceholder, socialLinks } from '../data/portfolioData';

export const GitHubStats: React.FC = () => {
  return (
    <section id="coding" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cyber-pill mb-4">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Metrics & Practice</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            {codingStatsPlaceholder.headline}
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full mt-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-xl">
            {codingStatsPlaceholder.subtitle}
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* GitHub Activity Card */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-2xl p-7 sm:p-9 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Github className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-white">GitHub Repository Activity</h3>
                    <p className="font-tech text-xs font-bold text-cyan-400 uppercase tracking-wider mt-0.5">@ujjwalkumar</p>
                  </div>
                </div>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="font-sans text-sm text-slate-300 mb-6 leading-relaxed">
                Houses full-stack repos, machine learning exploratory notebooks, coursework labs, and algorithmic implementations.
              </p>

              {/* Realistic Visual Contribution Matrix Placeholder */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 mb-5 shadow-inner">
                <div className="flex items-center justify-between text-xs font-tech font-bold uppercase tracking-wider text-slate-400 mb-3">
                  <span>Contribution Activity Grid</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Continuous Pushes
                  </span>
                </div>
                
                {/* Heatmap grid */}
                <div className="grid grid-flow-col grid-rows-4 gap-1.5 overflow-x-auto pb-2">
                  {Array.from({ length: 90 }).map((_, i) => {
                    const shades = [
                      'bg-slate-800/40',
                      'bg-emerald-950',
                      'bg-emerald-800',
                      'bg-emerald-600',
                      'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
                    ];
                    const seed = (i * 19) % shades.length;
                    return (
                      <div
                        key={i}
                        className={`w-3.5 h-3.5 rounded-[4px] ${shades[seed]} transition-transform duration-200 hover:scale-125 cursor-pointer`}
                        title={`Day ${i + 1} activity commit`}
                      />
                    );
                  })}
                </div>
                
                <div className="flex items-center justify-between text-[11px] font-tech text-slate-500 mt-2 font-medium">
                  <span>Less Active</span>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-[3px] bg-slate-800/40"></span>
                    <span className="w-3 h-3 rounded-[3px] bg-emerald-950"></span>
                    <span className="w-3 h-3 rounded-[3px] bg-emerald-800"></span>
                    <span className="w-3 h-3 rounded-[3px] bg-emerald-600"></span>
                    <span className="w-3 h-3 rounded-[3px] bg-emerald-400"></span>
                  </div>
                  <span>High Activity</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-tech font-bold uppercase tracking-wider text-slate-400">
              <span>Public Repos: Active</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LeetCode Practice Card */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-2xl p-7 sm:p-9 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30">
                    <Code2 className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-white">LeetCode & Problem Solving</h3>
                    <p className="font-tech text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5">@ujjwalkumar</p>
                  </div>
                </div>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="font-sans text-sm text-slate-300 mb-6 leading-relaxed">
                Targeting solid foundational data structures: Arrays, Two Pointers, Linked Lists, Stack, Binary Search, and Tree traversals.
              </p>

              {/* Problem Categories Breakdown */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                {codingStatsPlaceholder.categories.map((cat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all">
                    <span className="font-tech text-xs font-semibold text-slate-400 block">{cat.name}</span>
                    <span className="font-display font-black text-xl sm:text-2xl text-white block mt-1">{cat.count} Solved</span>
                    <span className="text-[11px] font-mono text-amber-400/90 block mt-1">{cat.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-tech font-bold uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Flame className="w-4 h-4" />
                <span>Daily Practice Streak</span>
              </span>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1.5"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Authenticity Guarantee Note */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-cyan-500/[0.06] border border-cyan-500/30 text-center shadow-md">
          <p className="font-mono text-xs text-cyan-300 font-medium">
            ℹ️ {codingStatsPlaceholder.statsNote}
          </p>
        </div>

      </div>
    </section>
  );
};
