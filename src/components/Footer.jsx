import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 sm:py-8 bg-[#050816] border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#050816] rounded-[7px] flex items-center justify-center">
                <Terminal className="h-3.5 w-3.5 text-blue-400" />
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-white tracking-tight">
                {personalInfo.shortName}
              </span>
              <p className="text-[10px] text-slate-500 font-medium">
                AI Engineer & Full Stack Developer
              </p>
            </div>
          </div>

          {/* Aligned Quick Nav Links (3-cols grid on mobile for perfect 2-row balance) */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 sm:flex sm:items-center sm:gap-6 text-[11px] sm:text-xs text-slate-400 font-medium text-center">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="GitHub"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={personalInfo.socials.email}
                className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Email"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-xs"
              title="Back to Top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-5 pt-3.5 border-t border-white/5 text-center text-[10px] sm:text-xs text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Crafted with React, Vite & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
