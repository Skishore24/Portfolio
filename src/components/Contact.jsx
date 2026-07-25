import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, RefreshCw, Github, Linkedin, Globe, GraduationCap, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      const data = new FormData();
      data.append("access_key", "9a5fe905-91c0-40b1-8eb8-9b159995ac98");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      if (res.ok) {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        setStatus({ submitting: false, success: false, error: true });
      }
    } catch (err) {
      console.error(err);
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-200/80 bg-white">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-100/30 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest bg-cyan-100/80 border border-cyan-200 px-3.5 py-1.5 rounded-full font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-900">
            Let's Build Something <span className="gradient-text-cyan">Exceptional</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have a project in mind, an AI/ML integration, or an engineering opportunity? Feel free to connect directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bento-card p-6 space-y-6 bg-white border-slate-200/90 shadow-sm">
              <h3 className="text-xl font-bold font-outfit text-slate-900">Contact Details</h3>
              
              <div className="space-y-4 text-xs">
                {/* Email */}
                <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 group">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-9 h-9 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-slate-500 text-[10px] uppercase font-mono font-semibold">Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-slate-900 font-semibold hover:text-cyan-700 truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-cyan-700 hover:border-cyan-300 transition-all cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 group">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] uppercase font-mono font-semibold">Phone</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-slate-900 font-semibold hover:text-blue-700">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-blue-700 hover:border-blue-300 transition-all cursor-pointer shrink-0 ml-2"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-mono font-semibold">Location</div>
                    <div className="text-slate-900 font-semibold">{personalInfo.location}</div>
                  </div>
                </div>

                {/* College */}
                <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-mono font-semibold">Institution</div>
                    <div className="text-slate-900 font-semibold text-[11px]">{personalInfo.college}</div>
                  </div>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">Connect Online:</div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-slate-900 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-700" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-slate-900 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bento-card p-8 space-y-4 bg-white border-slate-200/90 shadow-sm">
              {/* Success Toast */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Your message has been sent successfully! Kishore will respond to you shortly.</span>
                </div>
              )}

              {/* Error Toast */}
              {status.error && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Something went wrong sending your message. Please try again or email directly.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full glass-input-light rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. name@example.com"
                    className="w-full glass-input-light rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe your inquiry, project details, or open role..."
                  className="w-full glass-input-light rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all disabled:opacity-50 cursor-pointer hover:scale-102"
              >
                {status.submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
