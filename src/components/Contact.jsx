import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  ArrowRight,
  Check,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Quote,
  Send
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GitHubLogo, LinkedInLogo, GmailLogo, ResumePDFLogo } from './TechLogos';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) validate();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'N/A',
          _subject: `Portfolio Contact: ${form.subject}`,
          message: form.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setTouched({ name: false, email: false, phone: false, subject: false, message: false });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        // Fallback: Open mailto client directly
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`)}`;
        setIsSuccess(true);
      }
    } catch (err) {
      // Fallback: Open mailto client directly
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`)}`;
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Shared input class builder */
  const inputClass = (field) =>
    `w-full h-10 pl-9 pr-3 rounded-xl bg-white/[0.04] border text-xs text-white font-medium placeholder:text-slate-500 placeholder:font-normal focus:outline-none focus:bg-white/[0.07] transition-all ${
      touched[field] && errors[field]
        ? 'border-rose-500 ring-2 ring-rose-500/20'
        : touched[field] && !errors[field] && form[field]
        ? 'border-emerald-500'
        : 'border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
    }`;

  return (
    <section id="contact" className="font-poppins py-14 sm:py-18 relative z-10 overflow-hidden bg-[#060918] border-t border-white/[0.06]">
      {/* Background Orbs — teal/rose identity */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-teal-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-rose-500/6 blur-[140px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge & Title */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[11px] font-bold backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="tracking-wider uppercase">GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
          >
            Crafting Digital Ideas Into Production Reality
          </motion.h2>
        </div>

        {/* Main Outer Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative rounded-2xl bg-[#0B1120]/90 border border-white/10 backdrop-blur-2xl p-5 sm:p-7 lg:p-8 shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Glass Top Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* LEFT COLUMN: Contact Details & Persona */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-4">
                
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-slate-400 leading-relaxed">
                    Have an ambitious AI model, RAG engine, or web app in mind? Reach out and let's craft standard-setting software.
                  </p>
                </div>

                {/* Developer Avatar Card */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-3 backdrop-blur-md">
                  <div className="relative">
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-10 h-10 rounded-full object-cover object-[35%_15%] ring-2 ring-indigo-500"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#0B1120]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{personalInfo.name}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 font-bold">Available</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      AI &amp; Web Developer
                    </div>
                  </div>
                </div>

                {/* Direct Contact Action Cards */}
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <GmailLogo className="h-4.5 w-4.5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                        {personalInfo.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="h-4.5 w-4.5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phone / WhatsApp</div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Social Icon Grid Row */}
                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white hover:-translate-y-0.5 transition-all shadow-xs flex items-center justify-center flex-1 group"
                    title="GitHub Profile"
                  >
                    <GitHubLogo className="h-4.5 w-4.5" />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white hover:-translate-y-0.5 transition-all shadow-xs flex items-center justify-center flex-1 group"
                    title="LinkedIn Profile"
                  >
                    <LinkedInLogo className="h-4.5 w-4.5" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:bg-rose-500 hover:border-rose-500 hover:text-white hover:-translate-y-0.5 transition-all shadow-xs flex items-center justify-center flex-1 group"
                    title="Send Email"
                  >
                    <GmailLogo className="h-4.5 w-4.5" />
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    download="Kishore_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:-translate-y-0.5 transition-all shadow-xs flex items-center justify-center flex-1 group"
                    title="Resume PDF"
                  >
                    <ResumePDFLogo className="h-4.5 w-4.5" />
                  </a>
                </div>

                {/* Bottom Quote Banner */}
                <div className="pt-1 flex items-center space-x-2 text-[11px] text-slate-500 font-medium italic">
                  <Quote className="h-3.5 w-3.5 text-indigo-400 shrink-0 not-italic" />
                  <span>"Great engineering products begin with great conversations."</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Modern Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Success Notification Alert */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Thank you! Your message has been dispatched successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold text-slate-300 mb-1">
                      Your Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. John Doe"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={inputClass('name')}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p className="text-[10px] text-rose-400 font-semibold flex items-center space-x-1 pt-0.5">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold text-slate-300 mb-1">
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Mail className="h-3.5 w-3.5" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={inputClass('email')}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-[10px] text-rose-400 font-semibold flex items-center space-x-1 pt-0.5">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Input Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-bold text-slate-300 mb-1">
                      Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className="w-full h-10 pl-9 pr-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white font-medium placeholder:text-slate-500 placeholder:font-normal focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-bold text-slate-300 mb-1">
                      Subject <span className="text-indigo-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Sparkles className="h-3.5 w-3.5" />
                      </div>
                      <input
                        id="subject"
                        type="text"
                        placeholder="e.g. AI Model Development / Inquiry"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        className={inputClass('subject')}
                      />
                    </div>
                    {touched.subject && errors.subject && (
                      <p className="text-[10px] text-rose-400 font-semibold flex items-center space-x-1 pt-0.5">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Input Row 3: Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-slate-300 mb-1">
                    Your Message <span className="text-indigo-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-2.5 left-3 flex items-start pointer-events-none text-slate-500">
                      <MessageSquare className="h-3.5 w-3.5" />
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Write your project details or inquiry here..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white font-medium placeholder:text-slate-500 placeholder:font-normal focus:outline-none focus:bg-white/[0.07] transition-all resize-none ${
                        touched.message && errors.message
                          ? 'border-rose-500 ring-2 ring-rose-500/20'
                          : touched.message && !errors.message && form.message
                          ? 'border-emerald-500'
                          : 'border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                      }`}
                    />
                  </div>
                  {touched.message && errors.message && (
                    <p className="text-[10px] text-rose-400 font-semibold flex items-center space-x-1 pt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Glowing Send Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full h-11 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white font-poppins text-xs font-bold tracking-wide shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.005] active:scale-98 transition-all flex items-center justify-center space-x-2 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                        <span>Message Dispatched!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
