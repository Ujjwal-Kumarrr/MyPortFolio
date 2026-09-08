import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl shadow-cyan-500/10 text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.category.filter(c => c !== 'All').map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
            >
              {cat}
            </span>
          ))}
          <span className="text-xs font-mono text-slate-400 ml-auto mr-8">
            Detailed Architecture Breakdown
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-cyan-300 mt-1 mb-5">
          {project.headline}
        </p>

        {/* Project Image Banner */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-6 bg-slate-950 shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Key Highlight: {project.keyHighlight}</span>
          </div>
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center font-mono">
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</span>
                <span className="text-xs sm:text-sm font-bold text-cyan-300">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Narrative */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>System Context & Problem Solved</span>
          </h4>
          <p>{project.longDescription}</p>
        </div>

        {/* Key Features */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Key Capabilities & Implementations</span>
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-violet-400" />
            <span>Engineering Architecture</span>
          </h4>
          <div className="space-y-2">
            {project.architectureDetails.map((arch, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-violet-500/5 border border-violet-500/10 text-xs sm:text-sm text-slate-300">
                {arch}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Technologies Utilized</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
          >
            <span>Live Interactive Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Source Code (GitHub)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
