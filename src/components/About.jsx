import React from 'react';
import { Briefcase, GraduationCap, Award, Cpu, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData, internshipData, certificationsData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
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

        {/* 2 Column Layout: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-200 flex items-center justify-center text-cyan-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-outfit text-slate-900">Education Journey</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6">
              {educationData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-cyan-600 group-hover:bg-cyan-600 transition-colors"></div>

                  <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2 hover:shadow-md hover:border-cyan-300 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-cyan-800 font-bold bg-cyan-100 px-2.5 py-0.5 rounded-full border border-cyan-200">
                        {item.period}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        {item.score}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-outfit">
                      {item.degree}
                    </h4>

                    <p className="text-xs font-semibold text-slate-700">
                      {item.institution}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Internship Experience & Certifications */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Internship Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-slate-900">Internship Experience</h3>
              </div>

              {internshipData.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-3 hover:shadow-md hover:border-blue-300 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-blue-800 font-bold bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{item.company}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-outfit">
                    {item.role} - <span className="text-blue-700">{item.company}</span>
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-2">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] bg-white text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg font-medium shadow-2xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-600" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-200 flex items-center justify-center text-purple-700">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-slate-900">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex items-start gap-3 hover:border-purple-300 transition-all shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
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
