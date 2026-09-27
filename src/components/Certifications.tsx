import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous specialized course completions in programming paradigms and data science.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                  {cert.category}
                </span>
              </div>

              <div className="mt-5 space-y-2">
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-slate-400">Issued by:</span>
                  <span className="font-semibold text-white bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5 font-mono">
                    {cert.provider}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
                <span>Curriculum Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
