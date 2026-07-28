import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, FolderGit2, User, Cpu, Mail, FileText, ArrowRight, X, ExternalLink, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  const actions = [
    { id: 'about', label: 'Jump to About Section', icon: User, type: 'nav', target: '#about' },
    { id: 'skills', label: 'Explore Skills & Tech Stack', icon: Cpu, type: 'nav', target: '#skills' },
    { id: 'projects', label: 'View Featured Projects', icon: FolderGit2, type: 'nav', target: '#projects' },
    { id: 'experience', label: 'Work Experience Timeline', icon: Sparkles, type: 'nav', target: '#experience' },
    { id: 'contact', label: 'Send a Message', icon: Mail, type: 'nav', target: '#contact' },
    { id: 'copy-email', label: `Copy Email (${personalInfo.email})`, icon: Copy, type: 'action', action: () => copyEmail() },
    { id: 'github', label: 'Open GitHub Profile', icon: ExternalLink, type: 'link', url: personalInfo.socials.github },
    { id: 'linkedin', label: 'Open LinkedIn Profile', icon: ExternalLink, type: 'link', url: personalInfo.socials.linkedin }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredActions = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    if (item.type === 'nav') {
      const el = document.querySelector(item.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (item.type === 'link') {
      window.open(item.url, '_blank');
      setIsOpen(false);
    } else if (item.type === 'action') {
      item.action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#050816]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#0B1120] border border-white/10 shadow-2xl shadow-blue-500/10 z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-white/10 px-4 py-3">
              <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-400">
                  No matching commands found.
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Quick Navigation & Actions
                  </div>
                  {filteredActions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-slate-300 hover:text-white hover:bg-blue-600/10 hover:border-blue-500/20 border border-transparent transition-all group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-blue-500/20 text-slate-400 group-hover:text-blue-400 transition-colors">
                            {copied && item.id === 'copy-email' ? (
                              <Check className="h-4 w-4 text-emerald-400" />
                            ) : (
                              <Icon className="h-4 w-4" />
                            )}
                          </div>
                          <span className="font-medium text-xs sm:text-sm">
                            {copied && item.id === 'copy-email' ? 'Email Copied!' : item.label}
                          </span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Banner */}
            <div className="border-t border-white/10 px-4 py-2 bg-white/[0.02] flex items-center justify-between text-[11px] text-slate-500">
              <span>Navigation Shortcut</span>
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono text-[10px]">ESC</kbd>
                <span>to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
