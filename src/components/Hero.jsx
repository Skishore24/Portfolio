import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, FolderGit2, Mail, Sparkles, Code2 } from 'lucide-react';
import { personalInfo, heroFloatingIcons } from '../data/portfolioData';
import TechIcon, { GitHubLogo, LinkedInLogo } from './TechLogos';

const roles = ['AI Engineer', 'Machine Learning Engineer', 'Full Stack Developer'];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => setDisplayedText((p) => p.substring(0, p.length - 1)), 45);
    } else {
      timer = setTimeout(() => setDisplayedText((p) => currentRole.substring(0, p.length + 1)), 90);
    }
    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#050816]">

      {/* Hero section — indigo/purple accent identity */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[120px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.12, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/12 blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{personalInfo.greeting}</span>
              </span>
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{personalInfo.availability}</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-hero-title text-white">
                {personalInfo.name}
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gradient-accent">
                  {displayedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  className="w-0.5 h-7 ml-1 bg-cyan-400"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="font-body-text text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              {personalInfo.heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-button-text text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Projects</span>
              </motion.a>

              <motion.a
                href={personalInfo.resumeUrl}
                download="Kishore_Kumar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white font-button-text text-xs sm:text-sm hover:bg-white/10 transition-all"
              >
                <FileText className="h-4 w-4 text-cyan-400" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-button-text text-xs sm:text-sm hover:bg-indigo-500/20 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Hire Me</span>
              </motion.a>

              {/* Socials */}
              <div className="flex items-center space-x-2 pl-2 border-l border-white/10">
                <motion.a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-all"
                  title="GitHub"
                >
                  <GitHubLogo className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-all"
                  title="LinkedIn"
                >
                  <LinkedInLogo className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            {/* Rotating glow ring */}
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 rounded-full border border-dashed border-indigo-500/20 pointer-events-none"
            />
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600/25 to-purple-600/20 blur-3xl -z-10" />

            <div className="relative w-full max-w-sm rounded-[32px] bg-[#0B1120]/90 border border-white/15 p-3.5 shadow-2xl shadow-indigo-500/15 backdrop-blur-xl group overflow-hidden">
              <div className="relative w-full h-[380px] sm:h-[420px] rounded-[24px] overflow-hidden bg-slate-950">
                <motion.img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[35%_15%]"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />

                {/* Status bar */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#050816]/85 border border-white/10 backdrop-blur-md flex items-center justify-between shadow-lg">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-white">{personalInfo.name}</div>
                      <div className="text-[10px] text-slate-300 font-mono">AI &amp; Web Developer</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-cyan-400">
                    <Code2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <div className="w-full flex flex-wrap justify-center gap-2 pt-5">
              {heroFloatingIcons.slice(0, 10).map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
                  transition={{ duration: 3 + (idx % 3), repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                  whileHover={{ scale: 1.1, y: -8, transition: { duration: 0.2 } }}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200 flex items-center space-x-2 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all shadow-sm cursor-default"
                >
                  <TechIcon name={tech.name} className="w-4 h-4 shrink-0" />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
