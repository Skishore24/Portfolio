import React from 'react';
import { heroFloatingIcons } from '../data/portfolioData';
import TechIcon from './TechLogos';

export default function TechMarquee() {
  // Duplicate array multiple times for seamless infinite scroll looping
  const marqueeItems = [
    ...heroFloatingIcons,
    ...heroFloatingIcons,
    ...heroFloatingIcons,
    ...heroFloatingIcons
  ];

  return (
    <div className="w-full overflow-hidden py-6 bg-[#0B1120]/40 border-y border-white/5 relative z-10">
      {/* Left/Right Fade Gradient Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#050816] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#050816] to-transparent z-10" />

      <div className="animate-marquee flex items-center space-x-6 sm:space-x-8 whitespace-nowrap">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-medium backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white transition-all cursor-default shadow-sm shrink-0"
          >
            <TechIcon name={item.name} className="w-4 h-4 shrink-0" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
