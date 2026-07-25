import React from 'react';
import { X, Github, Play, Sparkles } from 'lucide-react';
import PlantDiseaseDemo from './Demos/PlantDiseaseDemo';
import FileManagerDemo from './Demos/FileManagerDemo';
import AIChatbotDemo from './Demos/AIChatbotDemo';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const renderDemoContent = () => {
    switch (project.demoType) {
      case 'plant-disease':
        return <PlantDiseaseDemo />;
      case 'file-manager':
        return <FileManagerDemo />;
      case 'ai-chatbot':
        return <AIChatbotDemo />;
      default:
        return (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
            <Sparkles className="w-8 h-8 text-cyan-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-100">Live Project Preview</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              This application was built and tested with modern full-stack frameworks and responsive UI design.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0B0F19] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.badge}
            </span>
            <h3 className="text-xl font-bold font-outfit text-slate-100">{project.title}</h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Subtitle & Description */}
          <div className="space-y-2">
            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold font-outfit text-cyan-400">{m.value}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>

          {/* Interactive In-Browser Live Demo Area */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-3">
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <h4 className="text-sm font-bold text-slate-100 font-outfit uppercase tracking-wider">
                Live In-Browser Interactive Playground
              </h4>
            </div>
            {renderDemoContent()}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-90 text-slate-950 font-bold text-xs transition-all cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
