import React, { useState } from 'react';
import { Code2, Sparkles, Globe, Database, Wrench, Binary, Filter, CheckCircle2, BookOpen, Compass } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';
import { SkillLevel } from '../types';

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-violet-400" />,
  Globe: <Globe className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-blue-400" />,
  Binary: <Binary className="w-5 h-5 text-fuchsia-400" />,
};

const levelBadgeStyles: Record<SkillLevel, { bg: string; text: string; border: string; glow: string; icon: React.ReactNode }> = {
  Comfortable: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    glow: 'hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
    icon: <CheckCircle2 className="w-3 h-3 text-emerald-400" />
  },
  Learning: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    icon: <BookOpen className="w-3 h-3 text-cyan-400" />
  },
  Exploring: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/30',
    glow: 'hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]',
    icon: <Compass className="w-3 h-3 text-violet-400" />
  }
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<SkillLevel | 'All'>('All');

  const filteredGroups = skillGroups.filter((group) => {
    if (activeCategory === 'all') return true;
    return group.id === activeCategory;
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="cyber-pill mb-4">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Technical Capabilities</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Technical Skills & Tooling
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 rounded-full mt-4 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-2xl">
            Real skills categorized by real proficiency — strictly eliminating artificial percentages in favor of transparent competency tiers.
          </p>

          {/* Level Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="text-xs font-tech font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Proficiency Filter:</span>
            </span>
            {(['Comfortable', 'Learning', 'Exploring'] as SkillLevel[]).map((level) => {
              const style = levelBadgeStyles[level];
              const isSelected = levelFilter === level;
              return (
                <button
                  key={level}
                  onClick={() => setLevelFilter(isSelected ? 'All' : level)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider border transition-all duration-300 ${
                    isSelected
                      ? `${style.bg} ${style.text} ${style.border} ring-2 ring-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105`
                      : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {style.icon}
                  <span>{level}</span>
                </button>
              );
            })}
            {levelFilter !== 'All' && (
              <button
                onClick={() => setLevelFilter('All')}
                className="text-xs font-tech font-bold text-cyan-400 hover:underline ml-2"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-tech font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105'
                : 'bg-slate-900/70 border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
            }`}
          >
            All Disciplines
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveCategory(group.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-tech font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === group.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105'
                : 'bg-slate-900/70 border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const visibleSkills = group.skills.filter(
              (s) => levelFilter === 'All' || s.level === levelFilter
            );

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={group.id}
                className="rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 backdrop-blur-2xl p-7 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-white/10">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                      {categoryIcons[group.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs font-sans text-slate-400 line-clamp-1 mt-0.5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pill List */}
                  <div className="space-y-3">
                    {visibleSkills.map((skill) => {
                      const levelStyle = levelBadgeStyles[skill.level];
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-500/30 transition-all duration-200"
                        >
                          <div>
                            <span className="font-tech font-bold text-sm text-slate-100 block">
                              {skill.name}
                            </span>
                            {skill.tag && (
                              <span className="text-[11px] font-mono text-cyan-300/80 block mt-0.5">
                                {skill.tag}
                              </span>
                            )}
                          </div>
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-tech font-bold uppercase tracking-wider border ${levelStyle.bg} ${levelStyle.text} ${levelStyle.border} ${levelStyle.glow} transition-all`}
                          >
                            {levelStyle.icon}
                            <span>{skill.level}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-xs font-tech font-bold uppercase tracking-wider text-slate-500 flex justify-between">
                  <span>{visibleSkills.length} competencies</span>
                  <span className="text-cyan-400">Active Curriculum</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
