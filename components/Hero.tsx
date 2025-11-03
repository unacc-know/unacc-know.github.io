import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const LOGO_URL = 'https://raw.githubusercontent.com/UnacceptableKnowledge/test_for_teenagers_identifying_signs_of_domestic_violence/main/Final_2.png';

const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto mb-10">
        <div className="absolute top-1/2 left-1/2 h-[96%] w-[96%] -translate-x-[50.5%] -translate-y-1/2 rounded-full animate-pulse-glow-outer" />
        <img
          src={LOGO_URL}
          alt="Unacceptable Knowledge Logo"
          className="relative z-10 w-full h-full object-contain animate-fade-in"
        />
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-brand-beige text-center animate-fade-in-up delay-200">
        {translations.hero_title[language]}
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-brand-gold-light tracking-wide text-center px-4 animate-fade-in-up delay-400">
        {translations.hero_subtitle[language]}
      </p>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes pulse-glow-outer {
          0%, 100% {
            box-shadow: 0 0 25px 5px rgba(201, 162, 39, 0.3);
          }
          50% {
            box-shadow: 0 0 40px 10px rgba(228, 201, 110, 0.5);
          }
        }
        .animate-pulse-glow-outer {
            animation: pulse-glow-outer 4s infinite ease-in-out;
            animation-delay: 1.5s; /* Start after fade-in */
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default Hero;
