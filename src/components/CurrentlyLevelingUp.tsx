import React from 'react';
import { BrainCircuit, Bot, Terminal, TrendingUp, Sparkles, Check, Clock } from 'lucide-react';
import { levelingUpTracks } from '../data/portfolioData';

const trackIcons: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
  Bot: <Bot className="w-6 h-6 text-violet-400" />,
  Terminal: <Terminal className="w-6 h-6 text-emerald-400" />,
};

const stateColors: Record<string, { badge: string; dot: string; border: string }> = {
  'Core Focus': {
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
    dot: 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]',
    border: 'hover:border-cyan-500/40'
  },
  'Practicing': {
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/40',
    dot: 'bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]',
    border: 'hover:border-violet-500/40'
  },
  'Exploring': {
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
    dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]',
    border: 'hover:border-emerald-500/40'
  }
};

export const CurrentlyLevelingUp: React.FC = () => {
  return (
    <section id="level-up" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cyber-pill mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Growth Mindset & Mastery</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Currently Leveling Up
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 rounded-full mt-4 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-2xl">
            A transparent view into my active learning pipeline. I believe in demonstrating curiosity, daily discipline, and real continuous improvement over inflated vanity claims.
          </p>
        </div>

        {/* 3 Interactive Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {levelingUpTracks.map((track) => (
            <div
              key={track.id}
              className="rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 backdrop-blur-2xl p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                    {trackIcons[track.icon]}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-tech font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-cyan-300 shadow-sm">
                    {track.badge}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-white group-hover:text-cyan-300 transition-colors">
                  {track.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2 mb-6 leading-relaxed">
                  {track.description}
                </p>

                {/* Topics List */}
                <div className="space-y-3">
                  {track.items.map((item) => {
                    const statusMeta = stateColors[item.state] || stateColors['Core Focus'];
                    return (
                      <div
                        key={item.name}
                        className={`p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 ${statusMeta.border} transition-all duration-200 flex items-center justify-between`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${statusMeta.dot}`} />
                          <div>
                            <span className="font-tech font-bold text-sm text-slate-100 block">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                                {item.tag}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-tech font-bold uppercase tracking-wider border ${statusMeta.badge}`}>
                          {item.state}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-tech font-bold uppercase tracking-wider text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Clock className="w-4 h-4" />
                  <span>Daily Repetition</span>
                </span>
                <span className="text-cyan-400">[ {track.items.length} Modules ]</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
