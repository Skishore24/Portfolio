import React, { useState } from 'react';
import { ExternalLink, Github, Play, Leaf, Folder, Bot, Layers, Calendar, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & ML', 'Web Dev'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'plant-disease':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'mcet-file-manager':
        return <Folder className="w-5 h-5 text-cyan-600" />;
      case 'ai-chatbot':
        return <Bot className="w-5 h-5 text-indigo-600" />;
      default:
        return <Layers className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-200/80 bg-slate-50">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-cyan-100/40 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest bg-cyan-100/80 border border-cyan-200 px-3.5 py-1.5 rounded-full font-semibold">
            Featured Projects & Demos
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-900">
            Interactive <span className="gradient-text-cyan">Projects & AI Demos</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Click <strong className="text-cyan-700 font-bold">"Try Live Demo"</strong> to launch the interactive in-browser leaf pathology scanner, MCET campus file manager simulator, or AI chatbot playground!
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-bold shadow-md shadow-slate-900/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card flex flex-col justify-between group bg-white border-slate-200/90 hover:border-cyan-400 transition-all duration-300 shadow-sm"
            >
              {/* Card Header & Preview Image */}
              <div className="relative overflow-hidden aspect-video bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] bg-slate-950/90 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full font-mono backdrop-blur-md font-semibold">
                    {project.badge}
                  </span>
                </div>

                {/* Quick Icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/95 border border-slate-200 flex items-center justify-center shadow-md backdrop-blur-md">
                  {getProjectIcon(project.id)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/90">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-cyan-700 font-outfit truncate">{m.value}</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-tight font-mono truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-50 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer hover:scale-102"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Try Live Demo</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-cyan-400 transition-colors shadow-2xs"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View for Live Demos */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
