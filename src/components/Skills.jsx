import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Brain,
  Sparkles,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";
import { skillsCategories } from "../data/portfolioData";
import TechIcon from "./TechLogos";

/* Each category gets its own distinct color identity */
const categoryTheme = {
  frontend: {
    icon: Layout,
    accent: "text-blue-400",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    pill:  "hover:bg-blue-500/10 hover:border-blue-400/40",
    glow:  "group-hover:border-blue-500/40",
    iconBg: "group-hover:bg-blue-500/20 group-hover:border-blue-500/30",
    titleHover: "group-hover:text-blue-300",
    stat: "text-blue-400 font-mono",
  },
  backend: {
    icon: Server,
    accent: "text-violet-400",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    pill:  "hover:bg-violet-500/10 hover:border-violet-400/40",
    glow:  "group-hover:border-violet-500/40",
    iconBg: "group-hover:bg-violet-500/20 group-hover:border-violet-500/30",
    titleHover: "group-hover:text-violet-300",
    stat: "text-violet-400 font-mono",
  },
  "machine-learning": {
    icon: Brain,
    accent: "text-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    pill:  "hover:bg-cyan-500/10 hover:border-cyan-400/40",
    glow:  "group-hover:border-cyan-500/40",
    iconBg: "group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30",
    titleHover: "group-hover:text-cyan-300",
    stat: "text-cyan-400 font-mono",
  },
  "ai-genai": {
    icon: Sparkles,
    accent: "text-purple-400",
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    pill:  "hover:bg-purple-500/10 hover:border-purple-400/40",
    glow:  "group-hover:border-purple-500/40",
    iconBg: "group-hover:bg-purple-500/20 group-hover:border-purple-500/30",
    titleHover: "group-hover:text-purple-300",
    stat: "text-purple-400 font-mono",
  },
  "databases-cloud": {
    icon: Database,
    accent: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    pill:  "hover:bg-emerald-500/10 hover:border-emerald-400/40",
    glow:  "group-hover:border-emerald-500/40",
    iconBg: "group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30",
    titleHover: "group-hover:text-emerald-300",
    stat: "text-emerald-400 font-mono",
  },
  "tools-devops": {
    icon: Wrench,
    accent: "text-amber-400",
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-300",
    pill:  "hover:bg-amber-500/10 hover:border-amber-400/40",
    glow:  "group-hover:border-amber-500/40",
    iconBg: "group-hover:bg-amber-500/20 group-hover:border-amber-500/30",
    titleHover: "group-hover:text-amber-300",
    stat: "text-amber-400 font-mono",
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 relative z-10 bg-[#050816] overflow-hidden">
      {/* Ambient orbs — purple section identity */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-purple-600/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[11px] font-bold backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Technical Arsenal</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technologies &amp; Frameworks
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Categorized technical capabilities spanning AI deep learning, RAG
            systems, full-stack web platforms, and DevOps workflows.
          </p>
        </motion.div>

        {/* 6 Category Skill Cards — staggered grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {skillsCategories.map((category) => {
            const theme = categoryTheme[category.id] || categoryTheme.frontend;
            const IconComponent = theme.icon;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`bg-[#0B1120]/90 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 relative overflow-hidden group flex flex-col justify-between shadow-lg shadow-black/40 ${theme.glow} transition-all duration-300`}
              >
                {/* Category ambient glow */}
                <div
                  className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-3xl opacity-15 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                  style={{ background: category.glowColor }}
                />

                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${theme.accent} ${theme.iconBg} transition-all duration-300`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h3 className={`text-base font-bold text-white ${theme.titleHover} transition-colors`}>
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill chips with matching color accent */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: sIdx * 0.04, duration: 0.3 }}
                        whileHover={{ scale: 1.06 }}
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white text-xs font-semibold ${theme.pill} transition-all duration-200 shadow-xs cursor-default group/chip`}
                      >
                        <TechIcon
                          name={skill}
                          className="w-3.5 h-3.5 shrink-0 transition-transform group-hover/chip:scale-110"
                        />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{category.skills.length} Core Technologies</span>
                  <span className={`${theme.stat} font-bold`}>
                    Production Ready
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
