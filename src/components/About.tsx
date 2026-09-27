import React from 'react';
import {
  GraduationCap,
  MapPin,
  Award,
  Sparkles,
  Code,
  Brain,
  Eye,
  Globe,
  Database,
  Layers,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  const interestIcons: Record<string, React.ReactNode> = {
    'Software Development': <Code className="w-4 h-4 text-brand-blue" />,
    'Artificial Intelligence': <Brain className="w-4 h-4 text-brand-violet" />,
    'Computer Vision': <Eye className="w-4 h-4 text-brand-cyan" />,
    'Web Development': <Globe className="w-4 h-4 text-emerald-400" />,
    'Data Structures & Algorithms': <Layers className="w-4 h-4 text-amber-400" />,
    'Database Systems': <Database className="w-4 h-4 text-rose-400" />,
    'Emerging Technologies': <Cpu className="w-4 h-4 text-sky-400" />,
  };

  return (
    <section id="about" className="py-24 relative bg-dark-900/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A look into my academic journey, core computing interests, and technological focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Areas of Interest */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2.5">
                <span>Engineering the Future with Code &amp; AI</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PORTFOLIO_DATA.personal.aboutBio}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                My approach to computer science combines rigorous fundamentals in algorithms and systems with pragmatic experimentation in computer vision and artificial intelligence. I enjoy decomposing complex real-world workflows into modular, scalable, and intelligent software components.
              </p>

              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Core Engineering Interests
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {PORTFOLIO_DATA.personal.interests.map((interest) => (
                    <div
                      key={interest}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-950/70 border border-white/10 hover:border-brand-indigo/40 text-xs sm:text-sm text-slate-200 transition-all duration-200 hover:scale-[1.02] shadow-sm"
                    >
                      {interestIcons[interest] || <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />}
                      <span className="font-medium">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Strong Theoretical Base</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Data structures, algorithms, databases, and OS fundamentals.
                  </p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Applied AI &amp; Vision</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Hands-on edge-AI pipelines, YOLOv8 object detection, and NLP.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Highlight Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 space-y-6 relative overflow-hidden">
              {/* Decorative Accent Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-brand-indigo/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan p-[1.5px]">
                    <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-brand-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      Academic Overview
                    </h3>
                    <span className="text-xs font-mono text-emerald-400">
                      Active Student • 2024–2028
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-extrabold font-heading text-white">9.35</span>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono">Current CGPA</span>
                </div>
              </div>

              {/* Explicit Specifications from prompt */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-blue">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Education</span>
                    <span className="font-semibold text-white">
                      B.E. Computer Science Engineering
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-violet">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">College</span>
                    <span className="font-semibold text-white">
                      Chaitanya Bharathi Institute of Technology
                    </span>
                    <span className="text-xs text-slate-400 block font-mono">
                      Hyderabad, Telangana
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Previous Qualification</span>
                    <span className="font-semibold text-white">
                      Alphores Junior College — Intermediate
                    </span>
                    <span className="text-xs text-emerald-400 font-mono block">
                      Marks: 987 / 1000 (98.7%)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Location</span>
                    <span className="font-semibold text-white">
                      Kokapet, Hyderabad
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact direct snippet */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Direct Email</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-brand-cyan hover:underline font-mono"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
