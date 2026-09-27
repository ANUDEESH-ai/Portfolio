import React, { useState } from 'react';
import {
  Code2,
  Brain,
  Globe,
  Database,
  Layers,
  Wrench,
  CheckCircle,
  Terminal,
  Cpu,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 className="w-5 h-5 text-brand-blue" />,
    'AI & Emerging Technology': <Brain className="w-5 h-5 text-brand-violet" />,
    'Web Technologies': <Globe className="w-5 h-5 text-brand-cyan" />,
    'Databases & Backend': <Database className="w-5 h-5 text-emerald-400" />,
    'Core Computer Science': <Layers className="w-5 h-5 text-amber-400" />,
    'Developer Tools': <Wrench className="w-5 h-5 text-rose-400" />,
  };

  const categoryAccents: Record<string, string> = {
    'Programming Languages': 'from-blue-500/10 to-indigo-500/10 border-blue-500/20 group-hover:border-blue-500/40',
    'AI & Emerging Technology': 'from-violet-500/10 to-purple-500/10 border-violet-500/20 group-hover:border-violet-500/40',
    'Web Technologies': 'from-cyan-500/10 to-teal-500/10 border-cyan-500/20 group-hover:border-cyan-500/40',
    'Databases & Backend': 'from-emerald-500/10 to-green-500/10 border-emerald-500/20 group-hover:border-emerald-500/40',
    'Core Computer Science': 'from-amber-500/10 to-orange-500/10 border-amber-500/20 group-hover:border-amber-500/40',
    'Developer Tools': 'from-rose-500/10 to-pink-500/10 border-rose-500/20 group-hover:border-rose-500/40',
  };

  const filteredCategories =
    activeCategory === 'all'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((c) => c.title.toLowerCase().includes(activeCategory));

  return (
    <section id="skills" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Organized across core computer science disciplines, programming languages, and intelligent systems.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/25'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Skills ({PORTFOLIO_DATA.skills.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'ai'
                  ? 'bg-brand-indigo text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              AI &amp; Emerging
            </button>
            <button
              onClick={() => setActiveCategory('programming')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'programming'
                  ? 'bg-brand-indigo text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'web'
                  ? 'bg-brand-indigo text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Web Tech
            </button>
            <button
              onClick={() => setActiveCategory('data')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'data'
                  ? 'bg-brand-indigo text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Databases &amp; Backend
            </button>
            <button
              onClick={() => setActiveCategory('core')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'core'
                  ? 'bg-brand-indigo text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Core CS
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'tools'
                  ? 'bg-brand-indigo text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className={`group glass-card p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                categoryAccents[category.title] || 'border-white/10'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-200">
                  {categoryIcons[category.title] || <Terminal className="w-5 h-5 text-brand-cyan" />}
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-white group-hover:text-brand-cyan transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {category.skills.length} competencies
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                {category.description}
              </p>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950/80 border border-white/10 hover:border-white/20 text-xs text-slate-200 hover:text-white transition-all duration-200 hover:bg-slate-800/80 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 group-hover:bg-brand-cyan transition-colors" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notice on integrity */}
        <div className="mt-12 p-4 rounded-xl bg-dark-900/60 border border-white/5 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              All listed technologies reflect authentic academic coursework, projects, and self-directed engineering practice.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
