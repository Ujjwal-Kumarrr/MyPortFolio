import React, { useState } from 'react';
import { Sparkles, Github, ExternalLink, Info, ArrowUpRight, Code, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

const categories: ProjectCategory[] = ['All', 'AI/ML', 'Full Stack', 'Python', 'Java', 'Other'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category.includes(selectedCategory);
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="cyber-pill mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Featured Engineering</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Featured Projects & Systems
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full mt-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-2xl">
            Real software and applied AI/ML applications turning theoretical concepts into deployable, production-ready experiences.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-tech font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-slate-900/70 border border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.category.filter(c => c !== 'All').map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 rounded-full text-xs font-tech font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40 shadow-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Top Right Quick View Info Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors shadow-sm"
                    title="View System Architecture"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlight Pill */}
                  <div className="p-3.5 rounded-2xl bg-cyan-500/[0.08] border border-cyan-500/30 mb-6">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="font-tech text-xs sm:text-sm text-cyan-200 font-semibold tracking-wide">
                        {project.keyHighlight}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] border border-white/10 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-7 py-4 bg-white/[0.02] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-xs font-tech font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-emerald-400 text-xs font-tech font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                    <span>Live Demo</span>
                  </a>
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-slate-900/50 border border-white/10 max-w-md mx-auto">
            <Code className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="font-display font-bold text-slate-200 text-base">No projects in this category yet.</p>
            <p className="font-sans text-slate-400 text-xs mt-1">Upcoming repositories currently in development.</p>
          </div>
        )}

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
