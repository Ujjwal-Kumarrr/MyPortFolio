import React from 'react';
import { GraduationCap, BookOpen, MapPin, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cyber-pill mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Academic Foundation</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Education & University Focus
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full mt-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-xl">
            Formal theoretical computer science training coupled with rigorous laboratory practice and project-driven evaluation.
          </p>
        </div>

        {/* Timeline Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/75 border border-white/10 hover:border-cyan-500/40 backdrop-blur-2xl p-7 sm:p-12 shadow-2xl overflow-hidden group transition-all duration-300">
            
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-7 border-b border-white/10">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{educationData.duration} • {educationData.status}</span>
                </span>
                
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight pt-1">
                  {educationData.degree}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 pt-0.5">
                  <span className="font-tech font-bold uppercase tracking-wider text-cyan-400 text-sm sm:text-base">
                    {educationData.institution}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-sans">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{educationData.location}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 self-start md:self-auto group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-sm">
                <Award className="w-9 h-9 text-cyan-400" />
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed py-7">
              {educationData.description}
            </p>

            {/* Coursework Grid */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-tech font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Curricular Coursework & Core Focus</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {educationData.coreSubjects.map((subject, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="font-tech font-bold text-xs sm:text-sm text-slate-200">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* University Highlights */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
              <h4 className="text-xs font-tech font-bold text-slate-400 uppercase tracking-widest">
                Academic & Practical Pillars
              </h4>
              <ul className="space-y-2">
                {educationData.highlights.map((highlight, idx) => (
                  <li key={idx} className="font-sans text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
