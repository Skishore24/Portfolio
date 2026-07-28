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
    message: '',
    agreed: false
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
    agreed: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    if (!form.agreed) errs.agreed = 'You must agree to the privacy policy';

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
    setTouched({ name: true, email: true, phone: true, subject: true, message: true, agreed: true });
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
        setForm({ name: '', email: '', phone: '', subject: '', message: '', agreed: false });
        setTouched({ name: false, email: false, phone: false, subject: false, message: false, agreed: false });
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

  return (
    <section id="contact" className="font-poppins py-20 relative z-10 overflow-hidden bg-[#050816]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge & Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="tracking-wider uppercase">GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Crafting Digital Ideas Into Production Reality
          </motion.h2>
        </div>

        {/* Main Figma Outer Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative rounded-[28px] bg-[#0B1120]/90 border border-white/12 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-indigo-950/40 overflow-hidden"
        >
          {/* Glass Top Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Contact Details & Persona */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-5">
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-sm font-normal text-slate-300 leading-relaxed">
                    Have an ambitious AI model, RAG engine, or web app in mind? Reach out and let's craft standard-setting software.
                  </p>
                </div>

                {/* Developer Avatar Card */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center space-x-3.5 backdrop-blur-md">
                  <div className="relative">
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-[#0B1120]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{personalInfo.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">Available</span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      AI Lead & Full Stack Architect
                    </div>
                  </div>
                </div>

                {/* Direct Contact Action Cards */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <GmailLogo className="h-5 w-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Email Address</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                        {personalInfo.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Phone / WhatsApp</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Social Icon Grid Row */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center flex-1"
                    title="GitHub Profile"
                  >
                    <GitHubLogo className="h-5 w-5" />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center flex-1"
                    title="LinkedIn Profile"
                  >
                    <LinkedInLogo className="h-5 w-5" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-rose-500/20 hover:border-rose-500/40 hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center flex-1"
                    title="Send Email"
                  >
                    <GmailLogo className="h-5 w-5" />
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    download="Kishore_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-rose-500/20 hover:border-rose-500/40 hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center flex-1"
                    title="Resume PDF"
                  >
                    <ResumePDFLogo className="h-5 w-5" />
                  </a>
                </div>

                {/* Bottom Quote Banner */}
                <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400 italic">
                  <Quote className="h-4 w-4 text-cyan-400 shrink-0 not-italic" />
                  <span>"Great engineering products begin with great conversations."</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Modern Form with Clean Labels & Input Icons */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Success Notification Alert */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center space-x-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Thank you! Your message has been dispatched successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        placeholder="Kishore Kumar"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.04] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/[0.06] transition-all ${
                          touched.name && errors.name
                            ? 'border-rose-500 ring-2 ring-rose-500/20'
                            : touched.name && !errors.name && form.name
                            ? 'border-emerald-500'
                            : 'border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                        }`}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p className="text-[11px] text-rose-400 flex items-center space-x-1 pt-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="h-4 w-4" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="kishoresenthil2405@gmail.com"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.04] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/[0.06] transition-all ${
                          touched.email && errors.email
                            ? 'border-rose-500 ring-2 ring-rose-500/20'
                            : touched.email && !errors.email && form.email
                            ? 'border-emerald-500'
                            : 'border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                        }`}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center space-x-1 pt-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Input Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 6382501599"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <input
                        id="subject"
                        type="text"
                        placeholder="AI Model Development / Project Inquiry"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        className={`w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.04] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/[0.06] transition-all ${
                          touched.subject && errors.subject
                            ? 'border-rose-500 ring-2 ring-rose-500/20'
                            : touched.subject && !errors.subject && form.subject
                            ? 'border-emerald-500'
                            : 'border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                        }`}
                      />
                    </div>
                    {touched.subject && errors.subject && (
                      <p className="text-[11px] text-rose-400 flex items-center space-x-1 pt-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Input Row 3: Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 flex items-start pointer-events-none text-slate-400">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Hi Kishore, I'd like to discuss an AI project..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/[0.06] transition-all resize-none ${
                        touched.message && errors.message
                          ? 'border-rose-500 ring-2 ring-rose-500/20'
                          : touched.message && !errors.message && form.message
                          ? 'border-emerald-500'
                          : 'border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                      }`}
                    />
                  </div>
                  {touched.message && errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center space-x-1 pt-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Checkbox Agreement */}
                <div>
                  <label className="flex items-center space-x-2.5 cursor-pointer select-none group">
                    <div
                      onClick={() => handleChange('agreed', !form.agreed)}
                      className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-all shrink-0 ${
                        form.agreed
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'bg-white/[0.04] border-white/20 group-hover:border-white/40'
                      }`}
                    >
                      {form.agreed && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                      I agree to the Privacy Policy and consent to being contacted regarding this inquiry.
                    </span>
                  </label>
                  {touched.agreed && errors.agreed && (
                    <p className="text-[11px] text-rose-400 flex items-center space-x-1 pt-1 pl-7">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.agreed}</span>
                    </p>
                  )}
                </div>

                {/* Glowing Send Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-poppins text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.005] active:scale-98 transition-all flex items-center justify-center space-x-2 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                        <span>Message Dispatched!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
