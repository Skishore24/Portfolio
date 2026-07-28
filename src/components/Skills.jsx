import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Brain,
  Sparkles,
  Database,
  Wrench,
  Cpu
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import TechIcon from './TechLogos';

const categoryIconMap = {
  Layout: Layout,
  Server: Server,
  Brain: Brain,
  Sparkles: Sparkles,
  Database: Database,
  Wrench: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#050816]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full badge-glass">
            <Cpu className="h-4 w-4 text-purple-400" />
            <span className="font-badge-text uppercase tracking-wider text-xs">Technical Arsenal</span>
          </div>

          <h2 className="font-section-title text-gradient-primary">
            Technologies & Frameworks
          </h2>

          <p className="font-body-text text-sm sm:text-base max-w-2xl mx-auto">
            Categorized technical capabilities spanning AI deep learning, RAG systems, full-stack web platforms, and DevOps workflows.
          </p>
        </div>

        {/* 6 Category Skill Cards Grid (NO progress bars! Authentic Colored Logos for Every Skill!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, idx) => {
            const IconComponent = categoryIconMap[category.icon] || Layout;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-6 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Background Ambient Glow */}
                <div
                  className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ background: category.glowColor }}
                />

                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-card-title text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Chips with Official Colored SVG Logos! */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-medium hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white hover:scale-105 transition-all duration-200 shadow-sm cursor-default group/chip"
                      >
                        <TechIcon name={skill} className="w-4 h-4 shrink-0 transition-transform group-hover/chip:scale-110" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{category.skills.length} Core Technologies</span>
                  <span className="text-blue-400 font-mono">Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
