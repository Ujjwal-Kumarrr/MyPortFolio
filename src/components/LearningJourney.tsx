import React from 'react';
import { Route, CheckCircle2, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { learningJourneyStages } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cyber-pill mb-4">
            <Route className="w-3.5 h-3.5 text-violet-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Evolution Roadmap</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            The Technical Learning Journey
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400 rounded-full mt-4 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-2xl">
            A systematic roadmap illustrating my evolution from foundational coding syntax to full-stack engineering and deep neural network deployment.
          </p>

          {/* Mini Flow Pipeline Preview */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-2 mt-10 max-w-4xl p-4 rounded-3xl bg-slate-900/80 border border-white/10 text-xs font-tech font-semibold text-slate-400 shadow-xl">
            {learningJourneyStages.map((stage, idx) => (
              <React.Fragment key={stage.step}>
                <span
                  className={`${
                    stage.status === 'Completed'
                      ? 'text-emerald-400 font-bold'
                      : stage.status === 'In Progress'
                      ? 'text-cyan-300 font-extrabold glow-text-cyan'
                      : 'text-slate-500'
                  }`}
                >
                  {stage.title}
                </span>
                {idx < learningJourneyStages.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Vertical Stepper Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -ml-[1.5px] w-[3px] bg-gradient-to-b from-emerald-400 via-cyan-400 via-indigo-500 to-violet-500 opacity-50 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

          <div className="space-y-8 sm:space-y-12">
            {learningJourneyStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = stage.status === 'Completed';
              const isInProgress = stage.status === 'In Progress';

              return (
                <div
                  key={stage.step}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-125 transition-transform duration-300">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : isInProgress ? (
                      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 sm:ml-0 sm:w-[45%] ${isEven ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 backdrop-blur-2xl transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-white/5 text-cyan-400 border border-cyan-500/25">
                          STAGE 0{stage.step}
                        </span>
                        <span
                          className={`text-[10px] font-tech font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                            isCompleted
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : isInProgress
                              ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                              : 'bg-white/5 text-slate-500 border-white/10'
                          }`}
                        >
                          {stage.status}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors mt-2">
                        {stage.title}
                      </h3>
                      
                      <p className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400/90 mt-0.5">
                        {stage.subtitle}
                      </p>

                      <p className="font-sans text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                        {stage.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
                        {stage.skillsGained.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.04] text-slate-200 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
