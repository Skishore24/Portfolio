import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Code, ChevronRight, ShieldCheck, GraduationCap, Github, Linkedin, Terminal, Play, CheckCircle2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TYPING_TITLES = [
  "AI & Data Science Student",
  "Full-Stack Web Developer",
  "Machine Learning Engineer",
  "Plant Pathology AI Specialist"
];

export default function Hero({ onOpenSearch }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'profile'
  const [terminalOutput, setTerminalOutput] = useState([
    "$ kishore --version",
    "v2.4.0 (AI & Full-Stack Engine)",
    "$ python run_pipeline.py --model PlantPathologyCNN",
    "[✓] Loading dataset: 10,000+ leaf images",
    "[✓] Accuracy: 98.4% | Architecture: ResNet-CNN",
    "[✓] RAG Engine: Active (Semantic Vector Retrieval)"
  ]);

  useEffect(() => {
    const fullText = TYPING_TITLES[titleIndex];
    const speed = isDeleting ? 35 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const handleRunTerminal = () => {
    setTerminalOutput(prev => [
      ...prev,
      `$ execute --test-live-demo`,
      `[✓] Status: All systems operational. 3 Core projects online!`
    ]);
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Light Radial Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-200/40 rounded-full blur-[140px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-indigo-200/35 rounded-full blur-[140px] pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Action Buttons */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-200/90 text-cyan-900 text-xs font-mono font-semibold shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for AI / ML Roles & Full-Stack Projects</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-outfit leading-tight">
              Hi, I'm <span className="gradient-text-cyan">{personalInfo.name}</span>
            </h1>
            
            <div className="text-xl sm:text-3xl font-semibold text-slate-700 min-h-[48px] flex items-center justify-center lg:justify-start gap-2">
              <span className="text-slate-500 font-normal">I build</span>
              <span className="gradient-text-purple border-b-2 border-indigo-500/80 pb-0.5 font-bold">
                {currentText}
              </span>
              <span className="w-0.5 h-7 bg-cyan-600 animate-cursor inline-block"></span>
            </div>
          </div>

          {/* Bio Short Description */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            {personalInfo.bioShort}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-600/25 hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-100" />
              <span>Explore Projects & Live Demos</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenSearch}
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm flex items-center gap-2 border border-slate-300 shadow-xs transition-all hover:scale-105 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-cyan-600" />
              <span>Quick Command (Ctrl K)</span>
            </button>

            {/* Quick Social Icon Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-cyan-500 shadow-xs transition-all hover:scale-110"
                title="GitHub Profile"
              >
                <Github className="w-4.5 h-4.5" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-blue-500 shadow-xs transition-all hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Key Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-slate-200/90">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="bento-card p-3.5 text-center lg:text-left bg-white border-slate-200">
                <div className="text-2xl font-bold font-outfit text-cyan-700">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Switchable Interactive Terminal & Profile Card */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          
          {/* Card View Switcher Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-white border border-slate-300 shadow-xs mb-4 z-20">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Terminal IDE
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Profile Visual
            </button>
          </div>

          <div className="relative w-full max-w-md">
            {/* Ambient Halo Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

            {activeTab === 'code' ? (
              /* Terminal Window Widget */
              <div className="relative terminal-window p-4 font-mono text-xs text-slate-300 space-y-3 z-10 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    <span className="text-[11px] text-slate-400 ml-2">kishore-ai-engine.sh</span>
                  </div>
                  <button
                    onClick={handleRunTerminal}
                    className="flex items-center gap-1 text-[10px] bg-cyan-950 border border-cyan-800 text-cyan-400 px-2 py-0.5 rounded hover:bg-cyan-900 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3" />
                    <span>Run</span>
                  </button>
                </div>

                <div className="space-y-1.5 h-64 overflow-y-auto pr-1">
                  {terminalOutput.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.startsWith('$')
                          ? 'text-cyan-400 font-bold'
                          : line.includes('[✓]')
                          ? 'text-emerald-400'
                          : 'text-slate-300'
                      }
                    >
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-cyan-400">
                    <span>$</span>
                    <span className="w-2 h-4 bg-cyan-400 animate-cursor inline-block"></span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-cyan-400" /> Python 3.11 • CNN • React
                  </span>
                  <span className="text-emerald-400">● Systems Online</span>
                </div>
              </div>
            ) : (
              /* Profile Image Visual Card */
              <div className="relative bg-[#090D16] border border-slate-800 rounded-3xl overflow-hidden p-3 shadow-2xl z-10">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-80 object-cover rounded-2xl transition-all duration-500 transform hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090D16] via-[#090D16]/80 to-transparent p-5 flex flex-col justify-end">
                  <div className="text-base font-bold text-white">{personalInfo.name}</div>
                  <div className="text-xs text-cyan-400 font-mono flex items-center gap-1.5 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>B.Tech AI & Data Science (MCET)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-white border border-slate-300 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-mono text-slate-800 z-20 animate-bounce">
              <Code className="w-4 h-4 text-cyan-600" />
              <span>Full-Stack & ML</span>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white border border-slate-300 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-mono text-slate-800 z-20">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>CNN & Plant AI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
