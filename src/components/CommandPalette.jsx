import React, { useState, useEffect } from 'react';
import { Search, Code, Sparkles, GraduationCap, Mail, FolderGit2, X, ArrowRight, User, Cpu } from 'lucide-react';
import { projectsData, skillsData, personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or trigger
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    { title: "Explore AI & Full-Stack Projects", href: "#projects", icon: FolderGit2, category: "Navigation" },
    { title: "View Tech Skills & ML Capabilities", href: "#skills", icon: Cpu, category: "Navigation" },
    { title: "Background & Education Timeline", href: "#about", icon: GraduationCap, category: "Navigation" },
    { title: "Get in Touch / Hire Kishore", href: "#contact", icon: Mail, category: "Navigation" },
  ];

  const filteredProjects = projectsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSkills = skillsData.flatMap(cat => cat.skills).filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.badge.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B0F19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden glass-card-dark">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800/80">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, tech stack, or actions..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!query && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-2 mb-2">
                Quick Navigation
              </div>
              <div className="space-y-1">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(action.href)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 hover:text-cyan-400 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <action.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{action.title}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-2 mb-2">
                Projects ({filteredProjects.length})
              </div>
              <div className="space-y-1.5">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleSelect('#projects')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 hover:text-white transition-all text-left group border border-transparent hover:border-slate-700"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-400">
                        {project.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">
                        {project.subtitle}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800 text-cyan-400 shrink-0">
                      {project.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Skills */}
          {filteredSkills.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-2 mb-2">
                Tech & Skills ({filteredSkills.length})
              </div>
              <div className="flex flex-wrap gap-2 p-1">
                {filteredSkills.map((skill, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect('#skills')}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 text-xs font-mono text-cyan-300 flex items-center gap-2 hover:scale-105 transition-all"
                  >
                    <Code className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{skill.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && filteredProjects.length === 0 && filteredSkills.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching projects or skills found for "<span className="text-cyan-400">{query}</span>"
            </div>
          )}
        </div>

        {/* Footer Hint Bar */}
        <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with query search</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">ESC to close</span>
        </div>
      </div>
    </div>
  );
}
