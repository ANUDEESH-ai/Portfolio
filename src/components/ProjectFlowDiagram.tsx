import React, { useState } from 'react';
import {
  Bus,
  Camera,
  Cpu,
  Eye,
  AlertTriangle,
  MapPin,
  BarChart3,
  Mic,
  AudioWaveform,
  Brain,
  Zap,
  Globe2,
  Volume2,
  ChevronRight,
  Activity,
} from 'lucide-react';

interface ProjectFlowDiagramProps {
  projectId: string;
}

export const ProjectFlowDiagram: React.FC<ProjectFlowDiagramProps> = ({ projectId }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (projectId === 'urban-mobile-sensing') {
    const steps = [
      {
        id: 0,
        title: 'BUS',
        desc: 'Transit Fleet Unit',
        icon: <Bus className="w-5 h-5 text-brand-blue" />,
        badge: 'Mobile Sensor',
      },
      {
        id: 1,
        title: 'MULTI-CAMERA',
        desc: 'Multi-stream Feed',
        icon: <Camera className="w-5 h-5 text-brand-cyan" />,
        badge: 'High-res Feed',
      },
      {
        id: 2,
        title: 'EDGE AI ENGINE',
        desc: 'Onboard Compute',
        icon: <Cpu className="w-5 h-5 text-brand-violet" />,
        badge: 'TF Lite Hardware',
      },
      {
        id: 3,
        title: 'COMPUTER VISION',
        desc: 'Frame-by-Frame',
        icon: <Eye className="w-5 h-5 text-emerald-400" />,
        badge: 'YOLOv8 & OpenCV',
      },
      {
        id: 4,
        title: 'HAZARD DETECTION',
        desc: 'Pothole & Flooding',
        icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
        badge: 'Anomaly Filter',
      },
      {
        id: 5,
        title: 'CENTRAL GIS',
        desc: 'Spatial Intelligence',
        icon: <MapPin className="w-5 h-5 text-rose-400" />,
        badge: 'Telemetry Sync',
      },
      {
        id: 6,
        title: 'TRAFFIC ANALYTICS',
        desc: 'Congestion Heat Maps',
        icon: <BarChart3 className="w-5 h-5 text-sky-400" />,
        badge: 'Municipal Decision',
      },
    ];

    return (
      <div className="w-full bg-dark-950/80 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-brand-cyan animate-pulse" />
            <span className="font-mono text-slate-300 font-semibold tracking-wide uppercase">
              System Pipeline Architecture
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Interactive Data Flow
          </span>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-stretch gap-2 min-w-max py-2">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between w-40 shrink-0 ${
                      isSelected
                        ? 'bg-slate-800/90 border-brand-cyan shadow-lg shadow-brand-cyan/15 scale-[1.02]'
                        : 'bg-dark-900/90 border-white/5 hover:border-white/20 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded-lg bg-white/5">{step.icon}</div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-heading text-white truncate">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 truncate">{step.desc}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <span className="text-[9px] font-mono text-brand-cyan truncate block">
                        {step.badge}
                      </span>
                    </div>
                  </button>

                  {idx < steps.length - 1 && (
                    <div className="flex items-center justify-center px-1 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-brand-cyan/60 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            <span className="text-slate-300">
              <strong className="text-white">{steps[activeStep].title}:</strong>{' '}
              {steps[activeStep].desc} ({steps[activeStep].badge})
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
            Step {activeStep + 1} of {steps.length}
          </span>
        </div>
      </div>
    );
  }

  // AI Voice Assistant Flow
  const stepsVoice = [
    {
      id: 0,
      title: 'USER VOICE',
      desc: 'Spoken Audio Stream',
      icon: <Mic className="w-5 h-5 text-brand-blue" />,
      badge: 'Microphone Input',
    },
    {
      id: 1,
      title: 'WEB SPEECH API',
      desc: 'Speech-to-Text',
      icon: <AudioWaveform className="w-5 h-5 text-brand-cyan" />,
      badge: 'Browser Engine',
    },
    {
      id: 2,
      title: 'NLP INTENT',
      desc: 'Command Parsing',
      icon: <Brain className="w-5 h-5 text-brand-violet" />,
      badge: 'Intent Extraction',
    },
    {
      id: 3,
      title: 'ASYNC API CALLS',
      desc: 'Non-blocking Ops',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      badge: 'External Services',
    },
    {
      id: 4,
      title: 'COMMAND EXECUTION',
      desc: 'Search & Reminders',
      icon: <Globe2 className="w-5 h-5 text-emerald-400" />,
      badge: 'Action Dispatcher',
    },
    {
      id: 5,
      title: 'SPOKEN RESPONSE',
      desc: 'Text-to-Speech Output',
      icon: <Volume2 className="w-5 h-5 text-rose-400" />,
      badge: 'Audio Feedback',
    },
  ];

  return (
    <div className="w-full bg-dark-950/80 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-4">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-brand-violet animate-pulse" />
          <span className="font-mono text-slate-300 font-semibold tracking-wide uppercase">
            Voice Command Execution Cycle
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Interactive Audio Flow
        </span>
      </div>

      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-stretch gap-2 min-w-max py-2">
          {stepsVoice.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between w-40 shrink-0 ${
                    isSelected
                      ? 'bg-slate-800/90 border-brand-violet shadow-lg shadow-brand-violet/15 scale-[1.02]'
                      : 'bg-dark-900/90 border-white/5 hover:border-white/20 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 rounded-lg bg-white/5">{step.icon}</div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-heading text-white truncate">
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">{step.desc}</p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/5">
                    <span className="text-[9px] font-mono text-brand-violet truncate block">
                      {step.badge}
                    </span>
                  </div>
                </button>

                {idx < stepsVoice.length - 1 && (
                  <div className="flex items-center justify-center px-1 text-slate-600">
                    <ChevronRight className="w-4 h-4 text-brand-violet/60 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-violet animate-ping" />
          <span className="text-slate-300">
            <strong className="text-white">{stepsVoice[activeStep].title}:</strong>{' '}
            {stepsVoice[activeStep].desc} ({stepsVoice[activeStep].badge})
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
          Step {activeStep + 1} of {stepsVoice.length}
        </span>
      </div>
    </div>
  );
};
