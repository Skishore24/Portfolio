import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Github, ArrowUpRight, Cpu, Layers, Globe } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import TechIcon from './TechLogos';

/* Category-specific color themes */
const catTheme = {
  'All':                   { pill: 'bg-indigo-600 text-white border-indigo-500',       icon: FolderGit2, color: 'text-indigo-400' },
  'Artificial Intelligence':{ pill: 'bg-purple-600 text-white border-purple-500',       icon: Cpu,        color: 'text-purple-400' },
  'Full-Stack':            { pill: 'bg-cyan-600 text-white border-cyan-500',           icon: Layers,     color: 'text-cyan-400' },
  'Frontend':              { pill: 'bg-emerald-600 text-white border-emerald-500',     icon: Globe,      color: 'text-emerald-400' },
};

const categoryBadgeColors = {
  'AI & ML':        'bg-purple-500/20 border-purple-500/30 text-purple-300',
  'Generative AI':  'bg-violet-500/20 border-violet-500/30 text-violet-300',
  'Healthcare AI':  'bg-rose-500/20 border-rose-500/30 text-rose-300',
  'Full Stack':     'bg-cyan-500/20 border-cyan-500/30 text-cyan-300',
  'UI/UX & Web':    'bg-emerald-500/20 border-emerald-500/30 text-emerald-300',
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Artificial Intelligence', 'Full-Stack', 'Frontend'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 relative z-10 overflow-hidden bg-[#060918] border-y border-white/[0.06]">
      {/* Ambient — indigo/cyan identity */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-indigo-500/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold backdrop-blur-md">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Featured Portfolio</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Selected Engineering Projects
          </h2>

          <p className="text-xs sm:text-sm max-w-xl mx-auto text-slate-400 font-normal leading-relaxed">
            Deep learning computer vision models, retrieval-augmented LLM architectures, and high-performance full-stack platforms.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const theme = catTheme[cat] || catTheme['All'];
              const CatIcon = theme.icon;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                    isActive
                      ? theme.pill
                      : 'bg-white/[0.04] border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  <CatIcon className={`h-3 w-3 ${isActive ? 'text-white' : theme.color}`} />
                  <span>{cat}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -16, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProjects.map((project, idx) => {
              const isFeatured = idx === 0;
              const badgeColor = categoryBadgeColors[project.categoryBadge] || 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300';
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className={`bg-[#0B1120]/90 overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-indigo-500/40 shadow-lg shadow-black/40 hover:shadow-indigo-500/10 transition-all duration-300 rounded-xl sm:rounded-[20px] ${
                    isFeatured ? 'col-span-1 sm:col-span-2 lg:col-span-1' : 'col-span-1'
                  }`}
                >
                  <div>
                    {/* Mockup window bar */}
                    <div className="bg-[#050816] border-b border-white/10 px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 font-semibold truncate max-w-[140px]">
                        {project.id}.app
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Image */}
                    <div className="relative h-36 sm:h-44 overflow-hidden bg-slate-950">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold backdrop-blur-md ${badgeColor}`}>
                          {project.categoryBadge}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold shadow-xs">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-2">
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-slate-400 leading-snug line-clamp-2">
                        {project.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.08 }}
                            className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 text-[11px] font-bold hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all"
                          >
                            <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                            <span>{tech}</span>
                          </motion.span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 text-[11px] font-bold">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="px-4 py-3 border-t border-white/[0.06] flex items-center justify-between">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white text-xs font-bold transition-all"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub Code</span>
                    </motion.a>

                    <motion.a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-xs font-extrabold text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors group/btn"
                    >
                      <span>Live Showcase</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
