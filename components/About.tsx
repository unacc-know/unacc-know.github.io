
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Divider = () => (
  <div className="w-full h-[2px]" style={{
    background: 'linear-gradient(to right, transparent 0%, rgba(201, 162, 39, 1) 10%, rgba(201, 162, 39, 1) 90%, transparent 100%)',
    filter: 'blur(1px)'
  }}></div>
);


const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="pt-12 sm:pt-20 pb-6 sm:pb-12">
      <div className="container mx-auto px-6">
        <div className="w-full max-w-[92rem] mx-auto mb-16">
          <Divider />
        </div>

        <h2 className="font-serif text-4xl font-bold text-center mb-12 text-brand-gold uppercase tracking-[0.2em]">
          {translations.about_title[language]}
        </h2>
        
        <div className="max-w-[92rem] mx-auto">
          <div className="bg-brand-dark/30 border-2 border-brand-gold/20 rounded-xl p-8 md:p-12 transition-all duration-300 hover:shadow-gold-glow hover:border-brand-gold">
            <p className="text-2xl md:text-3xl leading-[2.2] text-brand-beige text-justify">
              {translations.about_text[language]}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
