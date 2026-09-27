import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface CommandOutput {
  command: string;
  output: string | string[];
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      output: 'Computer Science Engineering Student',
    },
    {
      command: 'interests',
      output: 'AI • Software Development • Computer Vision • Web Development',
    },
    {
      command: 'projects',
      output: [
        '1. Urban Mobile Sensing Edge-AI Platform (SIH Prototype)',
        '2. AI Voice Assistant Web Application',
      ],
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    'whoami',
    'interests',
    'projects',
    'skills',
    'education',
    'contact',
    'help',
    'clear',
  ];

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputResult: string | string[] = '';

    switch (trimmed) {
      case 'whoami':
        outputResult = `${PORTFOLIO_DATA.personal.shortName} — Computer Science Engineering Student @ CBIT`;
        break;
      case 'interests':
        outputResult = PORTFOLIO_DATA.personal.interests.slice(0, 4).join(' • ');
        break;
      case 'projects':
        outputResult = PORTFOLIO_DATA.projects.map((p, i) => `${i + 1}. ${p.title}${p.badge ? ` [${p.badge}]` : ''}`);
        break;
      case 'skills':
        outputResult = 'Python, C++, Java, JavaScript, TypeScript, OpenCV, YOLOv8, NLP, Node.js, SQL, DSA';
        break;
      case 'education':
        outputResult = [
          '• B.E. Computer Science Engineering, CBIT (2024-2028) | CGPA: 9.35',
          '• Intermediate, Alphores Junior College (2022-2024) | 987/1000',
        ];
        break;
      case 'contact':
        outputResult = `Email: ${PORTFOLIO_DATA.personal.email} | Location: ${PORTFOLIO_DATA.personal.location}`;
        break;
      case 'help':
        outputResult = [
          'Available commands:',
          '  whoami     - Display role & profile',
          '  interests  - Display primary engineering focus areas',
          '  projects   - List featured projects',
          '  skills     - Core tech stack & tools',
          '  education  - Academic credentials',
          '  contact    - Contact details',
          '  clear      - Clear terminal window',
        ];
        break;
      default:
        outputResult = `command not found: "${trimmed}". Type "help" to see available commands.`;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputResult }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const resetTerminal = () => {
    setHistory([
      {
        command: 'whoami',
        output: 'Computer Science Engineering Student',
      },
      {
        command: 'interests',
        output: 'AI • Software Development • Computer Vision • Web Development',
      },
      {
        command: 'projects',
        output: [
          '1. Urban Mobile Sensing Edge-AI Platform (SIH Prototype)',
          '2. AI Voice Assistant Web Application',
        ],
      },
    ]);
  };

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-dark-900/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-dark-950/80 border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-100 transition-opacity" />
          <div className="ml-2 flex items-center gap-1.5 text-slate-400 text-xs font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-slate-300">anudeesh@ai-core</span>
            <span className="text-slate-600">:</span>
            <span className="text-brand-cyan/80">~</span>
          </div>
        </div>

        {/* Quick pill action */}
        <div className="flex items-center gap-2">
          <button
            onClick={resetTerminal}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title="Reset Terminal"
            aria-label="Reset Terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5 hidden sm:inline-block">
            zsh / interactive
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="p-4 sm:p-5 max-h-[300px] overflow-y-auto space-y-3 scrollbar-thin select-text text-left"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-slate-400 text-[11px] leading-relaxed pb-1 border-b border-white/5 flex items-center justify-between">
          <span>AI Developer Environment v2.6.4 • Type commands or click below</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            online
          </span>
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-200">
              <span className="text-brand-cyan font-bold select-none">anudeesh@portfolio:~$</span>
              <span className="text-amber-300 font-semibold">{item.command}</span>
            </div>
            <div className="text-slate-300 pl-4 border-l-2 border-brand-indigo/40 py-0.5">
              {Array.isArray(item.output) ? (
                <div className="space-y-0.5">
                  {item.output.map((line, lIdx) => (
                    <p key={lIdx} className="text-slate-300 leading-relaxed font-sans sm:font-mono text-xs">
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-slate-300 leading-relaxed font-sans sm:font-mono text-xs">
                  {item.output}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Input prompt */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-brand-cyan font-bold select-none">anudeesh@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs sm:text-sm font-mono caret-brand-cyan"
            aria-label="Terminal command input"
          />
          <button
            type="submit"
            className="p-1 text-slate-500 hover:text-brand-cyan transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
        <div ref={terminalEndRef} />
      </div>

      {/* Suggested Quick Commands Bar */}
      <div className="px-4 py-2 bg-dark-950/60 border-t border-white/5 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-slate-400 mr-1 select-none">Quick:</span>
        {availableCommands.slice(0, 6).map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 hover:bg-brand-indigo/20 text-slate-300 hover:text-brand-cyan border border-white/5 hover:border-brand-indigo/30 transition-all font-mono"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
