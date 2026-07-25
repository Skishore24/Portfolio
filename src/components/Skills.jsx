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
    return <Code2 className={`${className} text-cyan-600`} />;
  };

  // Filter skills based on category
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
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-200/80 bg-white">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest bg-cyan-100/80 border border-cyan-200 px-3.5 py-1.5 rounded-full font-semibold">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-900">
            Skills & <span className="gradient-text-cyan">Technology Stack</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hands-on technical mastery across machine learning frameworks, computer vision pipelines, full-stack web engineering, and version control.
          </p>
        </div>

        {/* Continuous Tech Logo Carousel Marquee */}
        <div className="relative overflow-hidden py-5 border border-slate-800 bg-[#090D16] rounded-3xl shadow-xl">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090D16] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090D16] to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee flex gap-6 whitespace-nowrap items-center">
            {[...marqueeTech, ...marqueeTech, ...marqueeTech].map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group cursor-default shadow-md"
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
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white font-bold shadow-md shadow-slate-900/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bento-card p-6 space-y-4 bg-white border-slate-200/90 hover:border-cyan-400 group transition-all"
            >
              {/* Top Row: Logo & Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                  {renderLogo(skill.logo, "w-7 h-7")}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/90 border border-cyan-200 px-3 py-1 rounded-full">
                  {skill.badge}
                </span>
              </div>

              {/* Skill Title & Proficiency Indicator */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold font-outfit text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {skill.name}
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Proficiency Status</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {skill.proficiency}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="pt-2 border-t border-slate-200/80 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Core Capability Highlights</div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg font-mono flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-600" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
