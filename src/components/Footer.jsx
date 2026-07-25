import React from 'react';
import { ArrowUp, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#0B0F19] py-10 relative text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-outfit font-bold text-white text-base">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-cyan-400 font-mono bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 font-semibold">
              AI & Data Science • B.Tech 2023-2027
            </span>
          </div>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Dr. Mahalingam College of Engineering & Technology.
          </p>
        </div>

        {/* Center: Social Badges */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all group cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
