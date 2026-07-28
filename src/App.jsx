import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import CommandPalette from './components/CommandPalette';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white font-sans antialiased selection:bg-indigo-600 selection:text-white relative overflow-x-hidden bg-mesh-dark bg-grid-pattern bg-noise">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgress />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorSpotlight />

      {/* Command Palette Modal (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        setIsOpen={setCommandPaletteOpen}
      />

      {/* Sticky Header Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections Flow */}
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
