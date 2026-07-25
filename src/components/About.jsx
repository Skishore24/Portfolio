import React from 'react';
import { Briefcase, GraduationCap, Award, Building2, CheckCircle2 } from 'lucide-react';
import { educationData, internshipData, certificationsData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden border-y border-slate-200/80 bg-slate-50">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest bg-cyan-100/80 border border-cyan-200 px-3.5 py-1.5 rounded-full font-semibold">
            Background & Qualifications
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-900">
            About <span className="gradient-text-cyan">{personalInfo.name}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Passionate AI & Data Science student dedicated to building innovative web applications, deep learning models, and intelligent user experiences.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: Education Journey Card (Span 7) */}
          <div className="md:col-span-7 bento-card p-6 space-y-6 flex flex-col justify-between bg-white border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900">Education Timeline</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Academic History & Degrees</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {educationData.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/90 p-4.5 rounded-2xl space-y-2 hover:border-cyan-400/60 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-cyan-800 font-bold bg-cyan-100/90 px-2.5 py-0.5 rounded-full border border-cyan-200">
                      {item.period}
                    </span>
                    {item.score && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        {item.score}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-outfit">
                    {item.degree}
                  </h4>

                  <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-700" />
                    <span>{item.institution}</span>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Item 2: Internship & Certifications Column (Span 5) */}
          <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Internship Card */}
            <div className="bento-card p-6 space-y-4 flex-1 bg-white border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-outfit text-slate-900">Internship Experience</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Industry Experience</p>
                </div>
              </div>

              {internshipData.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/90 p-4 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 font-outfit">{item.role}</span>
                    <span className="text-[11px] font-mono text-indigo-800 font-bold bg-indigo-100/90 px-2 py-0.5 rounded border border-indigo-200">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-cyan-700 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-mono bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="bento-card p-6 space-y-4 bg-white border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-outfit text-slate-900">Certifications</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Professional Credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/90 p-3 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cyan-700 shrink-0 shadow-2xs">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 font-outfit line-clamp-1">{cert.title}</div>
                      <div className="text-[10px] text-cyan-700 font-mono">{cert.issuer}</div>
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
