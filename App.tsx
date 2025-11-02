
import React, { useRef } from 'react';
import Header from './components/Header';
// Fix: Import NavLink type for explicit typing
import type { NavLink } from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Principles from './components/Principles';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Fix: Add explicit type annotation to navLinks to prevent type widening
  const navLinks: NavLink[] = [
    { nameKey: 'nav_about', ref: aboutRef },
    { nameKey: 'nav_principles', ref: principlesRef },
    { nameKey: 'nav_research', ref: researchRef },
    { nameKey: 'nav_contact', ref: contactRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <LanguageProvider>
      <div className="bg-brand-dark-secondary font-sans text-brand-beige min-h-screen">
        <Header navLinks={navLinks} onNavLinkClick={scrollToSection} />
        <main>
          <Hero />
          <div ref={aboutRef}><About /></div>
          <div ref={principlesRef}><Principles /></div>
          <div ref={researchRef}><Research /></div>
          <div ref={contactRef}><Contact /></div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
