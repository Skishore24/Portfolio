import React from 'react';
import { motion } from 'framer-motion';
import { heroFloatingIcons } from '../data/portfolioData';
import TechIcon from './TechLogos';

/* Split icons into two rows scrolling in opposite directions */
const half = Math.ceil(heroFloatingIcons.length / 2);
const row1Icons = [...heroFloatingIcons, ...heroFloatingIcons, ...heroFloatingIcons, ...heroFloatingIcons];
const row2Icons = [...heroFloatingIcons.slice(half), ...heroFloatingIcons.slice(0, half),
                   ...heroFloatingIcons.slice(half), ...heroFloatingIcons.slice(0, half)];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-4 bg-[#0B1120] border-y border-white/[0.06] relative z-10 space-y-3">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
          Technologies I Work With
        </span>
      </motion.div>

      {/* Row 1 — left to right */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10" />
        <div className="animate-marquee flex items-center space-x-4 whitespace-nowrap">
          {row1Icons.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-semibold hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-white transition-all cursor-default shrink-0"
            >
              <TechIcon name={item.name} className="w-3.5 h-3.5 shrink-0" />
              <span>{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left (reverse) */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10" />
        <div className="animate-marquee-reverse flex items-center space-x-4 whitespace-nowrap">
          {row2Icons.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-slate-400 text-xs font-semibold hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-white transition-all cursor-default shrink-0"
            >
              <TechIcon name={item.name} className="w-3.5 h-3.5 shrink-0" />
              <span>{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
