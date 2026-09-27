import React, { useEffect } from 'react';
import {
  X,
  Layers,
  Cpu,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-dark-900 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-dark-950/80 border-b border-white/10 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-brand-indigo/20 text-brand-cyan border border-brand-indigo/30">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/30 flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  {project.badge}
                </span>
              )}
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm">{project.shortDescription}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8 scrollbar-thin">
          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-5 rounded-2xl border border-rose-500/20 bg-rose-950/10 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>The Implemented Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Workflow & Pipeline */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-cyan" />
              <span>Architectural Data Flow Pipeline</span>
            </h3>
            <div className="p-4 rounded-xl bg-dark-950 border border-white/10 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max py-2 text-xs font-mono">
                {project.workflowNodes.map((node, i) => (
                  <React.Fragment key={i}>
                    <div className="px-3 py-2 rounded-lg bg-slate-800/90 border border-white/10 text-white font-medium shadow-sm">
                      {node}
                    </div>
                    {i < project.workflowNodes.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-brand-cyan shrink-0 animate-pulse" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              Key System Features &amp; Implementation Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-indigo" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-dark-950 border border-white/10 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Status */}
        <div className="p-5 sm:p-6 bg-dark-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Repository &amp; Live Demo:</span>
            <span className="text-amber-300 font-semibold">{project.links.statusText}</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold transition-colors ml-auto"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
