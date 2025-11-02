
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

// Fix: Export NavLink interface to be used in App.tsx
export interface NavLink {
  nameKey: keyof typeof translations;
  ref: React.RefObject<HTMLDivElement>;
}

interface HeaderProps {
  navLinks: NavLink[];
  onNavLinkClick: (ref: React.RefObject<HTMLDivElement>) => void;
}

const LOGO_URL = 'https://raw.githubusercontent.com/UnacceptableKnowledge/test_for_teenagers_identifying_signs_of_domestic_violence/main/Final_2.png';

const Header: React.FC<HeaderProps> = ({ navLinks, onNavLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
    onNavLinkClick(ref);
    setIsMenuOpen(false);
  };

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <button
          key={link.nameKey}
          onClick={() => handleLinkClick(link.ref)}
          className="text-brand-beige hover:text-brand-gold-light transition-colors duration-300 py-2 md:py-0"
        >
          {translations[link.nameKey as keyof typeof translations][language]}
        </button>
      ))}
    </>
  );
  
  const LangSwitcher = ({ mobile = false }) => (
    <div className={`flex items-center space-x-4 uppercase ${mobile ? 'pt-4' : ''}`}>
      <button 
        className={language === 'ru' ? "text-brand-gold font-bold" : "text-brand-beige/70 hover:text-brand-gold-light"}
        onClick={() => setLanguage('ru')}
      >
        RU
      </button>
      <button 
        className={language === 'en' ? "text-brand-gold font-bold" : "text-brand-beige/70 hover:text-brand-gold-light"}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-2 border-brand-gold/30 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-lg shadow-gold-glow' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={LOGO_URL} alt="Unacceptable Knowledge Logo" className="h-14 w-auto" />
          <span className="ml-4 font-serif text-2xl hidden lg:block tracking-widest uppercase text-brand-beige">
            {translations.header_title[language]}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-8 text-xl uppercase tracking-wider">
            <NavItems />
          </nav>
          <LangSwitcher />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="text-brand-gold h-7 w-7" /> : <Menu className="text-brand-gold h-7 w-7" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-6 py-8 text-2xl uppercase tracking-wider">
            <NavItems />
            <LangSwitcher mobile={true} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
