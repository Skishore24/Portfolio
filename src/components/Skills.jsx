import React from 'react';
import { Cpu, Code, Wrench, Sparkles, Terminal } from 'lucide-react';
import { skillsData, marqueeTech } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-50">
      {/* Light Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest bg-cyan-100/80 border border-cyan-200 px-3.5 py-1 rounded-full font-semibold">
            Technical Skillset
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-900">
            Skills & <span className="gradient-text-purple">Technology Stack</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Hands-on technical competencies across programming languages, machine learning frameworks, full-stack web technologies, and developer tools.
          </p>
        </div>

        {/* Dark Theme Accent Marquee Ticker Banner ("dark as some area") */}
        <div className="relative overflow-hidden py-4 border border-slate-800 bg-[#0B0F19] backdrop-blur-md rounded-2xl shadow-xl">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee flex gap-8 whitespace-nowrap">
            {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-default"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((categoryGroup, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 p-6 rounded-3xl space-y-6 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${categoryGroup.color} p-0.5 shadow-md`}>
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white">
                    {index === 0 ? <Cpu className="w-5 h-5" /> : index === 1 ? <Code className="w-5 h-5" /> : <Wrench className="w-5 h-5" />}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base font-outfit text-slate-900">{categoryGroup.category}</h3>
                  <span className="text-[10px] text-cyan-700 font-mono font-semibold">Core Competencies</span>
                </div>
              </div>

              {/* Progress Bar List */}
              <div className="space-y-4">
                {categoryGroup.skills.map((sk, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-700 font-semibold">{sk.name}</span>
                      <span className="text-cyan-700 font-mono font-bold">{sk.level}%</span>
                    </div>
                    
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${categoryGroup.color} transition-all duration-1000`}
                        style={{ width: `${sk.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
