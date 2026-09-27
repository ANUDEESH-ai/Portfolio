import React, { useState } from 'react';
import {
  FileDown,
  Sparkles,
  Eye,
  X,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ResumeCTA: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section className="py-20 relative bg-dark-900/50 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-card border border-brand-indigo/30 overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-indigo/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Want to know more?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                "Explore my resume to learn more about my education, technical skills, projects, certifications, and experience."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`/${PORTFOLIO_DATA.personal.resumeFileName}`}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-cyan hover:opacity-95 shadow-xl shadow-brand-indigo/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                title={`Download ${PORTFOLIO_DATA.personal.resumeFileName}`}
              >
                <FileDown className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-brand-cyan" />
                <span>Preview Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Quick Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="w-full max-w-2xl bg-dark-900 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-dark-950 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Resume Preview — {PORTFOLIO_DATA.personal.shortName}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Target File: {PORTFOLIO_DATA.personal.resumeFileName}
                </span>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6 text-xs sm:text-sm">
              <div className="space-y-1">
                <h4 className="text-white font-bold text-base">{PORTFOLIO_DATA.personal.name}</h4>
                <p className="text-slate-400 font-mono text-xs">
                  {PORTFOLIO_DATA.personal.location} • {PORTFOLIO_DATA.personal.email}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider block font-bold">
                  Education
                </span>
                {PORTFOLIO_DATA.education.map((e, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs">
                    <div>
                      <strong className="text-white block">{e.degree}</strong>
                      <span className="text-slate-400">{e.institution}</span>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-emerald-400 font-semibold block">{e.scoreLabel}: {e.score}</span>
                      <span className="text-slate-400">{e.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider block font-bold">
                  Projects &amp; Innovation
                </span>
                {PORTFOLIO_DATA.projects.map((p, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <strong className="text-white">{p.title}</strong>
                      {p.badge && <span className="font-mono text-amber-300">[{p.badge}]</span>}
                    </div>
                    <p className="text-slate-400">{p.shortDescription}</p>
                    <p className="text-slate-400 font-mono text-[11px]">
                      Tech: {p.technologies.join(', ')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider block font-bold">
                  Internship
                </span>
                {PORTFOLIO_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <strong className="text-white block">{exp.role} — {exp.organization}</strong>
                    <span className="text-slate-400 font-mono block">{exp.duration}</span>
                    <p className="text-slate-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-dark-950 border-t border-white/10 flex items-center justify-between">
              <a
                href={`/${PORTFOLIO_DATA.personal.resumeFileName}`}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-indigo hover:bg-brand-blue text-xs font-semibold text-white transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                Download PDF
              </a>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-2 rounded-lg bg-white/10 text-xs text-white"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
