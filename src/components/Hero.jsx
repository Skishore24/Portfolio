import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Code, ChevronRight, ShieldCheck, GraduationCap, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TYPING_TITLES = [
  "AI & Data Science Student",
  "Full-Stack Web Developer",
  "Machine Learning Engineer",
  "Plant Pathology AI Specialist"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPING_TITLES[titleIndex];
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Light Radial Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-200/40 via-blue-200/30 to-indigo-200/30 rounded-full blur-[130px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Action Buttons */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-200/80 text-cyan-900 text-xs font-mono font-semibold shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for AI / ML Roles & Full-Stack Projects</span>
          </div>

          {/* Name & Animated Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-outfit leading-tight">
              Hi, I'm <span className="gradient-text-cyan">{personalInfo.name}</span>
            </h1>
            
            <div className="text-xl sm:text-3xl font-semibold text-slate-700 min-h-[44px] flex items-center justify-center lg:justify-start gap-2">
              <span className="text-slate-500 font-normal">I build</span>
              <span className="gradient-text-purple border-b-2 border-indigo-400 pb-0.5 font-bold">
                {currentText}
              </span>
              <span className="w-0.5 h-7 bg-cyan-600 animate-cursor inline-block"></span>
            </div>
          </div>

          {/* Bio Short Description */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            {personalInfo.bioShort}
          </p>

          {/* Action Buttons & Social Icons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-600/25 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore AI Projects & Live Demos</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm flex items-center gap-2 border border-slate-300 shadow-xs transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 text-cyan-600" />
              <span>Resume</span>
            </a>

            {/* Quick Social Icon Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-cyan-500 shadow-xs transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-800" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-500 shadow-xs transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Key Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="bento-card p-3.5 text-center lg:text-left">
                <div className="text-2xl font-bold font-outfit text-cyan-700">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dark Contrast Profile Showcase Card ("dark as some area") */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-72 sm:w-80 lg:w-96 group">
            {/* Ambient Halo Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-700"></div>

            {/* Dark Profile Image Frame Accent */}
            <div className="relative bg-[#0B0F19] border border-slate-800 rounded-3xl overflow-hidden p-2.5 shadow-2xl">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/70 to-transparent p-4 flex flex-col justify-end">
                <div className="text-sm font-bold text-white">{personalInfo.name}</div>
                <div className="text-xs text-cyan-400 font-mono flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>B.Tech AI & Data Science (MCET)</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Technology Badges */}
            <div className="absolute -top-4 -right-4 bg-slate-900/95 border border-cyan-500/40 p-2.5 rounded-2xl backdrop-blur-xl shadow-xl flex items-center gap-2 text-xs font-mono text-cyan-300 animate-bounce">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack & ML</span>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-slate-900/95 border border-emerald-500/40 p-2.5 rounded-2xl backdrop-blur-xl shadow-xl flex items-center gap-2 text-xs font-mono text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CNN & Plant AI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
