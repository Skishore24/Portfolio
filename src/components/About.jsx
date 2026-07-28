import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Boxes, Briefcase, Award, Sparkles, ArrowUpRight } from 'lucide-react';
import { aboutCards, statsData, personalInfo } from '../data/portfolioData';
import { PyTorchLogo, ReactLogo, NodeLogo, AILogo, RAGLogo } from './TechLogos';

const cardIconMap = {
  'ai-developer': PyTorchLogo,
  'ml-engineer': RAGLogo,
  'frontend-developer': ReactLogo,
  'backend-developer': NodeLogo
};

const statIconMap = {
  'Projects Completed': Code2,
  'Technologies Mastered': Boxes,
  'Enterprise Internships': Briefcase,
  'Certifications': Award,
  'Years Learning & Building': Sparkles
};

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-section-title text-white"
          >
            Building Intelligent AI Systems & Web Architecture
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-text text-sm sm:text-base max-w-2xl mx-auto text-slate-300"
          >
            {personalInfo.bioShort}
          </motion.p>
        </div>

        {/* 4 Bento Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aboutCards.map((card, idx) => {
            const IconComponent = cardIconMap[card.id] || AILogo;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 flex flex-col justify-between group relative overflow-hidden rounded-[24px] border border-white/10 hover:border-indigo-500/40"
              >
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-opacity duration-300 opacity-20 group-hover:opacity-40 pointer-events-none"
                  style={{ background: card.glowColor }}
                />

                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} p-[1px] shadow-sm`}>
                    <div className="w-full h-full bg-[#0B1120] rounded-[15px] flex items-center justify-center">
                      <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-card-title text-white group-hover:text-indigo-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-slate-400 group-hover:text-indigo-400 font-medium">
                  <span>Core Specialization</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counter Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {statsData.map((stat, idx) => {
            const StatIcon = statIconMap[stat.label] || Code2;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#0B1120]/80 border border-white/10 flex flex-col items-center justify-center text-center space-y-2 group hover:border-indigo-500/30 hover:bg-indigo-600/5 transition-all shadow-sm"
              >
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-indigo-500/20 text-cyan-400 transition-colors">
                  <StatIcon className="h-5 w-5" />
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-gradient-accent">
                  {stat.value}{stat.suffix}
                </div>

                <div className="text-xs text-slate-400 font-medium line-clamp-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
