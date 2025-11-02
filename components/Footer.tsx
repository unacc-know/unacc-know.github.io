
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  return (
    <footer className="py-8 border-t-2 border-brand-gold/30">
      <div className="container mx-auto px-6 text-center text-brand-beige/60 text-base">
        <p>{translations.footer_copyright[language]}</p>
      </div>
    </footer>
  );
};

export default Footer;
