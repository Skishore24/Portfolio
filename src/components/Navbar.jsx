import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-md shadow-slate-200/40' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 p-0.5 shadow-md shadow-cyan-600/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span className="font-outfit font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 text-lg">
                KK
              </span>
            </div>
          </div>
          <div>
            <span className="font-outfit font-bold text-slate-900 text-base sm:text-lg tracking-tight block group-hover:text-cyan-600 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-cyan-600 font-mono font-semibold block -mt-1 tracking-wider uppercase">
              AI & Data Science Student
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-cyan-700 shadow-md shadow-slate-200/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Contact CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-cyan-600/20 transition-all hover:scale-105"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 shadow-sm cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-cyan-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-sm text-center block shadow-md"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
