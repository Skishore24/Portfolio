import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Boxes, Briefcase, Award, Sparkles, ArrowUpRight, Brain, Cpu, Layout, Server } from 'lucide-react';
import { aboutCards, statsData, personalInfo } from '../data/portfolioData';

const cardIconMap = {
  'ai-developer': Brain,
  'ml-engineer': Cpu,
  'frontend-developer': Layout,
  'backend-developer': Server
};

/* Each card has its own distinct color palette */
const cardTheme = {
  'ai-developer':      { icon: 'text-cyan-400',    glow: 'from-cyan-500/20 to-blue-500/10',    ring: 'group-hover:border-cyan-500/50',    hover: 'group-hover:bg-cyan-500',   label: 'text-cyan-400' },
  'ml-engineer':       { icon: 'text-purple-400',  glow: 'from-purple-500/20 to-pink-500/10',  ring: 'group-hover:border-purple-500/50',  hover: 'group-hover:bg-purple-500', label: 'text-purple-400' },
  'frontend-developer':{ icon: 'text-indigo-400',  glow: 'from-indigo-500/20 to-blue-500/10',  ring: 'group-hover:border-indigo-500/50',  hover: 'group-hover:bg-indigo-500', label: 'text-indigo-400' },
  'backend-developer': { icon: 'text-emerald-400', glow: 'from-emerald-500/20 to-teal-500/10', ring: 'group-hover:border-emerald-500/50', hover: 'group-hover:bg-emerald-500',label: 'text-emerald-400' },
};

const statIconMap = {
  'Projects Completed':       Code2,
  'Technologies Mastered':    Boxes,
  'Enterprise Internships':   Briefcase,
  'Certifications':           Award,
  'Years Learning & Building':Sparkles
};

const statTheme = [
  { accent: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    hover: 'hover:border-cyan-500/40 hover:bg-cyan-500/5'    },
  { accent: 'text-purple-400',  bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  hover: 'hover:border-purple-500/40 hover:bg-purple-500/5'  },
  { accent: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   hover: 'hover:border-amber-500/40 hover:bg-amber-500/5'   },
  { accent: 'text-rose-400',    bg: 'bg-rose-500/10',    border: 'border-rose-500/20',    hover: 'hover:border-rose-500/40 hover:bg-rose-500/5'    },
  { accent: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', hover: 'hover:border-emerald-500/40 hover:bg-emerald-500/5' },
];

/* Animation variants */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 16 },
  show:   { opacity: 1, scale: 1,    y: 0,  transition: { type: 'spring', stiffness: 260, damping: 24 } }
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 relative z-10 overflow-hidden bg-[#060918] border-y border-white/[0.06]">
      {/* Ambient orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-cyan-500/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-purple-500/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-bold backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">About Me</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Building Intelligent AI Systems &amp; Web Architecture
          </h2>

          <p className="text-xs sm:text-sm max-w-2xl mx-auto text-slate-400 font-normal leading-relaxed">
            {personalInfo.bioShort}
          </p>
        </motion.div>

        {/* 4 Bento Cards — staggered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-12"
        >
          {aboutCards.map((card, idx) => {
            const IconComponent = cardIconMap[card.id] || Brain;
            const theme = cardTheme[card.id] || cardTheme['ai-developer'];
            const isFeatured = idx === 0;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`p-4 sm:p-5 flex flex-col justify-between group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#0B1120]/90 border border-white/10 shadow-lg shadow-black/40 ${theme.ring} transition-all duration-300 ${
                  isFeatured ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                }`}
              >
                {/* Ambient corner glow */}
                <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl bg-gradient-radial ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                     style={{ background: card.glowColor, opacity: undefined }}
                />
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                     style={{ background: card.glowColor }}
                />

                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${theme.hover} group-hover:border-transparent transition-all duration-300`}
                  >
                    <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${theme.icon} group-hover:text-white transition-colors`} />
                  </motion.div>

                  <div className="space-y-1">
                    <h3 className={`text-xs sm:text-base font-bold text-white ${theme.label.replace('text-', 'group-hover:text-')} transition-colors`}>
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className={`pt-3 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-600 ${theme.label.replace('text-', 'group-hover:text-')} font-semibold transition-colors`}>
                  <span>Core Specialization</span>
                  <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Row — spring pop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5"
        >
          {statsData.map((stat, idx) => {
            const StatIcon = statIconMap[stat.label] || Code2;
            const theme = statTheme[idx % statTheme.length];
            return (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover={{ scale: 1.04, y: -2, transition: { duration: 0.2 } }}
                className={`p-4 rounded-xl bg-[#0B1120]/90 border border-white/10 flex flex-col items-center justify-center text-center space-y-2 ${theme.hover} transition-all shadow-sm shadow-black/30`}
              >
                <div className={`p-1.5 rounded-lg ${theme.bg} border ${theme.border} ${theme.accent} transition-colors`}>
                  <StatIcon className="h-4 w-4" />
                </div>

                <div className={`text-xl sm:text-2xl font-extrabold text-white ${theme.accent.replace('text-', 'group-hover:text-')} transition-colors tabular-nums`}>
                  {stat.value}{stat.suffix}
                </div>

                <div className="text-[11px] text-slate-400 font-semibold line-clamp-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
