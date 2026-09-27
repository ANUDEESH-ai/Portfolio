import React, { useState } from 'react';
import {
  Code2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { ProjectFlowDiagram } from './ProjectFlowDiagram';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-dark-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world systems applying edge artificial intelligence, computer vision pipelines, and interactive web technologies.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-brand-indigo/30 hover:shadow-2xl shadow-black/40 relative overflow-hidden group"
            >
              {/* Subtle Ambient Backlight */}
              <div
                className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -z-10 ${
                  index === 0 ? 'bg-brand-blue/10' : 'bg-brand-violet/10'
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Overview, Tech & Action */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-md text-xs font-mono bg-brand-indigo/15 text-brand-cyan border border-brand-indigo/30">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-3 py-1 rounded-md text-xs font-mono bg-amber-400/15 text-amber-300 border border-amber-400/30 font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      "{project.shortDescription}"
                    </p>
                  </div>

                  {/* Additional Highlights */}
                  <div className="space-y-2.5 pt-1">
                    {project.additionalDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Key Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-brand-indigo/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-indigo to-brand-blue hover:from-brand-violet hover:to-brand-cyan transition-all duration-200 shadow-md shadow-brand-indigo/25 hover:scale-[1.02]"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>{project.links.statusText}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Animated System-Flow Architecture Visualization */}
                <div className="lg:col-span-7 w-full space-y-4">
                  <ProjectFlowDiagram projectId={project.id} />

                  {/* Quick Feature Callouts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300"
                      >
                        <span className="text-brand-cyan font-bold block mb-1">
                          Highlight 0{fIdx + 1}
                        </span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for In-depth Project Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
