import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, FolderGit2, Mail, ArrowDown, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { personalInfo, heroFloatingIcons } from '../data/portfolioData';
import TechIcon, { GitHubLogo, LinkedInLogo } from './TechLogos';

export default function Hero() {
  const roles = ['AI Engineer', 'Machine Learning Engineer', 'Full Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => setDisplayedText((prev) => prev.substring(0, prev.length - 1)), 50);
    } else {
      timer = setTimeout(() => setDisplayedText((prev) => currentRole.substring(0, prev.length + 1)), 100);
    }

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{personalInfo.greeting}</span>
              </span>
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{personalInfo.availability}</span>
              </span>
            </div>

            {/* Heading & Typing */}
            <div className="space-y-2">
              <h1 className="font-hero-title text-white">
                {personalInfo.name}
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gradient-accent">
                  {displayedText}
                </span>
                <span className="w-0.5 h-7 ml-1 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* High Contrast Description */}
            <p className="font-body-text text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-button-text text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Projects</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Kishore_Kumar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white font-button-text text-xs sm:text-sm hover:bg-white/10 transition-all"
              >
                <FileText className="h-4 w-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-button-text text-xs sm:text-sm hover:bg-indigo-500/20 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Hire Me</span>
              </a>

              {/* Socials */}
              <div className="flex items-center space-x-2 pl-2 border-l border-white/10">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-all" title="GitHub">
                  <GitHubLogo className="h-4 w-4" />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-all" title="LinkedIn">
                  <LinkedInLogo className="h-4 w-4" />
                </a>
              </div>
            </div>


          </motion.div>

          {/* RIGHT COLUMN: Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 blur-3xl -z-10" />

            <div className="relative w-full max-w-sm rounded-[32px] bg-[#0B1120]/90 border border-white/15 p-3.5 shadow-2xl shadow-indigo-500/20 backdrop-blur-xl group overflow-hidden">
              <div className="relative w-full h-[380px] sm:h-[420px] rounded-[24px] overflow-hidden bg-slate-950">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#050816]/85 border border-white/10 backdrop-blur-md flex items-center justify-between shadow-lg">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-white">{personalInfo.name}</div>
                      <div className="text-[10px] text-slate-300 font-mono">AI Lead & Full Stack Architect</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-cyan-400">
                    <Code2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <div className="w-full flex flex-wrap justify-center gap-2 pt-6">
              {heroFloatingIcons.slice(0, 10).map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + (idx % 3), repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200 flex items-center space-x-2 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all shadow-sm"
                >
                  <TechIcon name={tech.name} className="w-4 h-4 shrink-0" />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="pt-16 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <a href="#about" className="flex flex-col items-center space-y-1 text-slate-400 hover:text-indigo-400 text-xs">
            <span>Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
