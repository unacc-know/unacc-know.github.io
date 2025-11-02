
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Divider = () => (
  <div className="w-full h-[2px]" style={{
    background: 'linear-gradient(to right, transparent 0%, rgba(201, 162, 39, 1) 10%, rgba(201, 162, 39, 1) 90%, transparent 100%)',
    filter: 'blur(1px)'
  }}></div>
);

const Research: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="research" className="pt-12 sm:pt-20 pb-2 sm:pb-6">
      <div className="container mx-auto px-6">
        <div className="w-full max-w-[92rem] mx-auto mb-16">
          <Divider />
        </div>
        <h2 className="font-serif text-4xl font-bold text-center mb-12 text-brand-gold uppercase tracking-[0.2em]">
          {translations.research_title[language]}
        </h2>
        
        <div className="max-w-[92rem] mx-auto">
          <div className="bg-brand-dark/30 border-2 border-brand-gold/20 rounded-xl p-8 md:p-12 transition-all duration-300 hover:shadow-gold-glow hover:border-brand-gold">
            <h3 className={`font-serif text-2xl md:text-3xl font-bold text-brand-gold-light mb-8 text-center leading-snug ${language === 'en' ? 'tracking-wider' : ''}`}>
              {translations.research_guide_title[language]}
            </h3>
            <div className="text-xl md:text-2xl space-y-6 text-brand-beige text-justify leading-relaxed">
              <p>
                {translations.research_p1[language]}
              </p>
              <p>
                {translations.research_p2[language]}
              </p>
              <ol className="list-decimal list-inside space-y-2 my-4 text-left pl-4">
                <li>{translations.research_li1[language]}</li>
                <li>{translations.research_li2[language]}</li>
                <li>{translations.research_li3[language]}</li>
                <li>{translations.research_li4[language]}</li>
              </ol>
              <p>
                {translations.research_p3[language]}
              </p>
              <p>
                {translations.research_p4[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
