import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#050816]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full badge-glass">
            <Briefcase className="h-3.5 w-3.5 text-blue-400" />
            <span className="font-badge-text uppercase tracking-wider text-xs">Career Path</span>
          </div>

          <h2 className="font-section-title text-gradient-primary">
            Professional Experience
          </h2>

          <p className="font-body-text text-sm sm:text-base max-w-2xl mx-auto">
            Practical hands-on engineering experience in full-stack web applications and academic deep learning research leadership.
          </p>
        </div>

        {/* Vertical Timeline with Animated Glowing Line */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#050816] border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all shadow-md shadow-blue-500/50">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-cyan-300" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 space-y-4 relative overflow-hidden">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                      {item.type}
                    </span>
                    <h3 className="font-card-title text-white group-hover:text-blue-300 transition-colors pt-1">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium pt-0.5">
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Building2 className="h-3.5 w-3.5 text-purple-400" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-cyan-400 font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description Paragraph */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Bullet Responsibilities */}
                {item.responsibilities && (
                  <div className="space-y-2 pt-2">
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
