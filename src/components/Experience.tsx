import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical roles and internship engagements in software and web engineering.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="max-w-3xl mx-auto">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-brand-violet/30 hover:shadow-xl hover:shadow-brand-violet/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-brand-violet/15 text-brand-violet border border-brand-violet/30">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-cyan">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>{exp.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Exact Description from Resume */}
              <div className="pt-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  "{exp.description}"
                </p>

                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200">Core Focus:</strong> Practical web development tasks and project-based learning under the AICTE internship program.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
