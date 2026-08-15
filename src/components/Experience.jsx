import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, GraduationCap, CheckCircle2, Flame } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

/* Each experience entry gets its own color theme */
const entryTheme = [
  {
    dot: 'border-blue-500 shadow-blue-500/40',
    dotInner: 'bg-blue-400',
    dotHover: 'group-hover:border-cyan-400',
    typeBadge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    titleHover: 'group-hover:text-blue-300',
    check: 'text-blue-400',
    calIcon: 'text-blue-400',
    line: 'border-blue-500/20',
  },
  {
    dot: 'border-purple-500 shadow-purple-500/40',
    dotInner: 'bg-purple-400',
    dotHover: 'group-hover:border-violet-400',
    typeBadge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    titleHover: 'group-hover:text-purple-300',
    check: 'text-purple-400',
    calIcon: 'text-purple-400',
    line: 'border-purple-500/20',
  },
];

const typeIconMap = {
  'Internship':   Briefcase,
  'Academic Lead': GraduationCap,
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30, filter: 'blur(6px)' },
  show:   { opacity: 1, x: 0,   filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 relative z-10 bg-[#050816] overflow-hidden">
      {/* Amber/orange accent orbs — unique identity */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-amber-500/6 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-500/6 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold backdrop-blur-md">
            <Flame className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Career Path</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Practical hands-on engineering experience in full-stack web applications and academic deep learning research leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative border-l-2 border-white/[0.08] ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10"
        >
          {experienceData.map((item, idx) => {
            const theme = entryTheme[idx % entryTheme.length];
            const TypeIcon = typeIconMap[item.type] || Briefcase;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative group"
              >
                {/* Animated Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.35 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`absolute -left-[35px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-[#050816] border-2 ${theme.dot} ${theme.dotHover} flex items-center justify-center transition-all shadow-md`}
                >
                  <div className={`w-2 h-2 rounded-full ${theme.dotInner}`} />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="glass-card p-5 sm:p-6 space-y-3.5 relative overflow-hidden"
                >
                  {/* Top gradient shimmer on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.07] pb-3">
                    <div className="space-y-1.5">
                      <span className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${theme.typeBadge}`}>
                        <TypeIcon className="h-3 w-3" />
                        <span>{item.type}</span>
                      </span>
                      <h3 className={`text-base font-bold text-white ${theme.titleHover} transition-colors`}>
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5 text-slate-200">
                          <Building2 className="h-3.5 w-3.5 text-slate-400" />
                          {item.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-slate-600" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono ${theme.calIcon}`}>
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  {item.responsibilities && (
                    <div className="space-y-1.5">
                      {item.responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07, duration: 0.3 }}
                          className="flex items-start space-x-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className={`h-3.5 w-3.5 ${theme.check} shrink-0 mt-0.5`} />
                          <span>{resp}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.06 }}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-300 text-[11px] font-medium hover:border-white/15 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
