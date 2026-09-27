import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileDown,
  Mail,
  Sparkles,
  MapPin,
  GraduationCap,
  Cpu,
  Code2,
  ChevronDown
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Terminal } from './Terminal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-dark-950 bg-grid-pattern"
    >
      {/* Dynamic Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-brand-indigo/15 via-brand-blue/15 to-brand-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 20}px), calc(-50% + ${mousePos.y * 20}px))`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-violet/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating Ambient Tech Badges (Desktop) */}
      <div
        className="hidden xl:flex absolute top-36 left-12 glass-card px-3.5 py-2 rounded-xl items-center gap-2.5 text-xs text-slate-300 shadow-xl border border-white/10 animate-float pointer-events-none"
        style={{ animationDelay: '0s' }}
      >
        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
        <Code2 className="w-3.5 h-3.5 text-brand-cyan" />
        <span>Edge-AI &amp; Computer Vision</span>
      </div>

      <div
        className="hidden xl:flex absolute bottom-36 left-16 glass-card px-3.5 py-2 rounded-xl items-center gap-2.5 text-xs text-slate-300 shadow-xl border border-white/10 animate-float-reverse pointer-events-none"
        style={{ animationDelay: '1.5s' }}
      >
        <Cpu className="w-3.5 h-3.5 text-brand-violet" />
        <span>CBIT • CGPA 9.35</span>
      </div>

      <div
        className="hidden xl:flex absolute top-40 right-16 glass-card px-3.5 py-2 rounded-xl items-center gap-2.5 text-xs text-slate-300 shadow-xl border border-white/10 animate-float pointer-events-none"
        style={{ animationDelay: '1s' }}
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>SIH Prototype Innovator</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-slate-300 font-medium tracking-wide">
                Aspiring AI &amp; Software Developer
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                <MapPin className="w-3 h-3 text-brand-cyan" />
                Kokapet, Hyderabad
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  {PORTFOLIO_DATA.personal.shortName.split(' ')[0]}
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-cyan">
                  {PORTFOLIO_DATA.personal.shortName.split(' ')[1]}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight font-heading flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-brand-cyan font-semibold">Computer Science Engineering Student</span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-slate-300">AI &amp; Software Developer</span>
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              "{PORTFOLIO_DATA.personal.heroSupportingText}"
            </p>

            {/* Academic pill indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 font-mono pt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                <GraduationCap className="w-3.5 h-3.5 text-brand-blue" />
                <span>B.E. CSE @ CBIT (2024–2028)</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                <span className="text-emerald-400 font-bold">CGPA 9.35</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                <span>Intermediate: 987/1000</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Primary: View My Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-indigo/25 hover:shadow-brand-cyan/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              {/* Primary: Download Resume */}
              <a
                href={`/${PORTFOLIO_DATA.personal.resumeFileName}`}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-500 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                title="Download Anudeesh Paidi's Resume"
              >
                <FileDown className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </a>

              {/* Secondary: Let's Connect */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Icons with Tooltips */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 select-none">
                Connect:
              </span>

              <a
                href={PORTFOLIO_DATA.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-brand-blue/20 text-slate-400 hover:text-brand-blue border border-white/10 hover:border-brand-blue/40 transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn (Placeholder Link)"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub (Placeholder Link)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-brand-cyan/20 text-slate-400 hover:text-brand-cyan border border-white/10 hover:border-brand-cyan/40 transition-all duration-200"
                aria-label="Send Email"
                title={`Email: ${PORTFOLIO_DATA.personal.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: AI Developer Terminal Component */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative">
              {/* Subtle back decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-indigo/30 via-brand-cyan/20 to-brand-violet/30 rounded-3xl blur-xl opacity-70" />
              <Terminal />
            </div>

            {/* Quick summary strip below terminal */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="glass-card p-2.5 rounded-xl border border-white/5">
                <div className="text-base sm:text-lg font-bold font-heading text-white">9.35</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">CBIT CGPA</div>
              </div>
              <div className="glass-card p-2.5 rounded-xl border border-white/5">
                <div className="text-base sm:text-lg font-bold font-heading text-brand-cyan">SIH</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Prototype AI</div>
              </div>
              <div className="glass-card p-2.5 rounded-xl border border-white/5">
                <div className="text-base sm:text-lg font-bold font-heading text-brand-indigo">987/1K</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Intermediate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-slate-400 hover:text-white transition-colors"
        aria-label="Scroll to About Section"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
