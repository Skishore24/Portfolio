import React, { useState } from 'react';
import { Cpu, Code2, Wrench, Sparkles, Terminal, CheckCircle2, Layers, ShieldCheck, Zap } from 'lucide-react';
import { skillsData, marqueeTech } from '../data/portfolioData';
import { TECH_LOGO_MAP } from './TechLogos';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'web-db', name: 'Web & Databases' },
    { id: 'tools-devops', name: 'Tools & DevOps' }
  ];

  // Helper to render dynamic SVG logo
  const renderLogo = (logoKey, className = "w-6 h-6") => {
    const LogoComponent = TECH_LOGO_MAP[logoKey];
    if (LogoComponent) {
      return <LogoComponent className={className} />;
    }
    return <Code2 className={`${className} text-cyan-400`} />;
  };

  // Flatten or filter skills based on category
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillsData.flatMap(group => 
        group.skills.map(sk => ({ ...sk, groupCategory: group.category, color: group.color }))
      );
    }
    const group = skillsData.find(g => g.categoryId === activeCategory);
    if (!group) return [];
    return group.skills.map(sk => ({ ...sk, groupCategory: group.category, color: group.color }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200/80">
      {/* Ambient Background Glow Blobs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-200/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-200/25 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest bg-cyan-100/80 border border-cyan-200 px-3.5 py-1 rounded-full font-semibold">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-900">
            Skills & <span className="gradient-text-cyan">Technology Stack</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hands-on technical mastery across machine learning frameworks, computer vision pipelines, full-stack web engineering, and version control.
          </p>
        </div>

        {/* Continuous Tech Logo Scroll Marquee (No plain text pills) */}
        <div className="relative overflow-hidden py-5 border border-slate-800 bg-[#0B0F19] rounded-3xl shadow-2xl">
          {/* Edge Glow Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee flex gap-6 whitespace-nowrap items-center">
            {[...marqueeTech, ...marqueeTech, ...marqueeTech].map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/90 transition-all duration-300 group cursor-default shadow-md"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform">
                  {renderLogo(tech.logo, "w-5 h-5")}
                </div>
                <span className="text-xs font-mono font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white font-bold shadow-md shadow-slate-900/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dribbble Bento Skill Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((sk, idx) => (
            <div
              key={idx}
              className="bento-card p-6 flex flex-col justify-between space-y-4 hover:border-cyan-400/60 transition-all group"
            >
              <div className="space-y-4">
                {/* Header: Brand Logo & Badges */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 p-2.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {renderLogo(sk.logo, "w-7 h-7")}
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/90 border border-cyan-200 px-3 py-1 rounded-full">
                    {sk.badge}
                  </span>
                </div>

                {/* Title & Proficiency Pill */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold font-outfit text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {sk.name}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{sk.proficiency}</span>
                  </div>
                </div>

                {/* Sub-Feature Highlight Bullet Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {sk.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[10px] bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg font-medium flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-600" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Domain Tag */}
              <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                <span>Domain: {sk.groupCategory}</span>
                <Sparkles className="w-3 h-3 text-cyan-500 opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Mastery Bento Banner (Bottom Accent Widget) */}
        <div className="bento-card-dark p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Zap className="w-3.5 h-3.5" />
              <span>Full-Stack Engineering Standards</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-outfit text-slate-100">
              Clean Architecture, Production Pipelines & Version Control
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              Experienced in training Deep Learning models, structuring scalable Express REST APIs, designing relational/NoSQL database schemas, and maintaining clean Git commits.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xl font-bold text-cyan-400 font-outfit">100%</div>
              <div className="text-[10px] text-slate-400 font-mono uppercase">Version Controlled</div>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xl font-bold text-emerald-400 font-outfit">REST / ML</div>
              <div className="text-[10px] text-slate-400 font-mono uppercase">API Integrated</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
