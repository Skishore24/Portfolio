import React from 'react';
import { Briefcase, GraduationCap, Award, Cpu, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData, internshipData, certificationsData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest bg-cyan-100/80 border border-cyan-200 px-3.5 py-1 rounded-full font-semibold">
            Background & Qualifications
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-900">
            About <span className="gradient-text-cyan">{personalInfo.name}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {personalInfo.summary || "Passionate AI & Data Science student dedicated to building innovative web applications, deep learning models, and intelligent user experiences."}
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: Academic Focus & Highlight Summary (Span 12) */}
          <div className="md:col-span-12 bento-card p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialized Domain & Technical Drive</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-slate-100">
                Bridging Machine Learning Precision with Modern Web Development
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Currently pursuing B.Tech in AI & Data Science at Dr. Mahalingam College of Engineering and Technology (MCET). Focused on building computer vision models (CNNs for plant pathology), full-stack node apps, and LLM/RAG engines with production-grade UI/UX.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center min-w-[120px]">
                <div className="text-2xl font-bold text-cyan-400 font-outfit">7.9</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Current CGPA</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center min-w-[120px]">
                <div className="text-2xl font-bold text-emerald-400 font-outfit">2027</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Graduation</div>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Education Journey Card (Span 7) */}
          <div className="md:col-span-7 bento-card p-6 space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900">Education Timeline</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Academic Achievements & History</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {educationData.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-2 hover:border-cyan-400/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-cyan-800 font-bold bg-cyan-100/90 px-2.5 py-0.5 rounded-full border border-cyan-200">
                      {item.period}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                      {item.score}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 font-outfit">
                    {item.degree}
                  </h4>

                  <p className="text-xs font-semibold text-slate-700">
                    {item.institution}
                  </p>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Item 3: Internship & Certifications Column (Span 5) */}
          <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Internship Card */}
            <div className="bento-card p-6 space-y-4 flex-1">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900">Industry Internship</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Professional Experience</p>
                </div>
              </div>

              {internshipData.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-blue-800 font-bold bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {item.period}
                    </span>
                    <span className="text-xs font-bold text-slate-700">{item.company}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 font-outfit">
                    {item.role}
                  </h4>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-600" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="bento-card p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900">Certifications</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Verified Credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl flex items-center gap-3 hover:border-purple-300 transition-all">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900">{cert.title}</h5>
                      <span className="text-[10px] font-mono text-purple-700 font-semibold">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
