import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { Search } from 'lucide-react';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-cyan-500 selection:text-white font-sans antialiased overflow-x-hidden light-bg-mesh relative">
      <Navbar onOpenSearch={() => setIsCommandPaletteOpen(true)} />
      
      <main className="relative z-10">
        <Hero onOpenSearch={() => setIsCommandPaletteOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Floating Quick Command Palette Button */}
      <button
        onClick={() => setIsCommandPaletteOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white shadow-xl shadow-cyan-600/30 border border-cyan-400/50 backdrop-blur-md transition-all hover:scale-110 flex items-center justify-center group"
        title="Open Command Palette (Ctrl+K)"
      >
        <Search className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
