import React from 'react';
import { Briefcase, FolderGit2, Binary, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const experienceIcons: Record<string, React.ReactNode> = {
  'academic-projects': <FolderGit2 className="w-5 h-5 text-cyan-400" />,
  'personal-projects': <Sparkles className="w-5 h-5 text-violet-400" />,
  'problem-solving': <Binary className="w-5 h-5 text-emerald-400" />,
  'continuous-learning': <Briefcase className="w-5 h-5 text-amber-400" />,
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cyber-pill mb-4">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Practical Discipline</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Experience & Practice
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full mt-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-xl">
            Honest student experience emphasizing rigorous project delivery, algorithmic discipline, and proactive experimentation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 backdrop-blur-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] group hover:-translate-y-1.5"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 pb-5 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                      {experienceIcons[item.id] || <Briefcase className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 mt-1">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-tech font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 flex-shrink-0">
                    {item.badge}
                  </span>
                </div>

                <p className="font-sans text-sm text-slate-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {item.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-sans text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies footer */}
              <div className="pt-5 border-t border-white/5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
