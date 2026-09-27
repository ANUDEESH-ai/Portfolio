import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-dark-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal engineering education and foundational coursework in computer science.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-indigo to-brand-violet -translate-x-1/2 opacity-40 hidden sm:block" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Marker on Desktop */}
                  <div className="hidden sm:flex absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-brand-cyan items-center justify-center z-10 shadow-lg shadow-brand-cyan/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                  </div>

                  {/* Spacer for the other column */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-brand-indigo/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
                          <Calendar className="w-3 h-3" />
                          {edu.duration}
                        </span>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                          <Award className="w-3.5 h-3.5" />
                          <span>
                            {edu.scoreLabel}: {edu.score}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold font-heading text-white group-hover:text-brand-cyan transition-colors">
                        {edu.degree}
                      </h3>

                      <p className="text-sm font-medium text-slate-300 mt-1">
                        {edu.institution}
                      </p>

                      {edu.location && (
                        <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 font-mono">
                          <MapPin className="w-3 h-3 text-brand-cyan" />
                          <span>{edu.location}</span>
                        </div>
                      )}

                      {edu.highlights && (
                        <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                          {edu.highlights.map((h, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
