
import React from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Divider = () => (
  <div className="w-full h-[2px]" style={{
    background: 'linear-gradient(to right, transparent 0%, rgba(201, 162, 39, 1) 10%, rgba(201, 162, 39, 1) 90%, transparent 100%)',
    filter: 'blur(1px)'
  }}></div>
);

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="pt-20 sm:pt-28 pb-32 bg-brand-dark-secondary/50">
      <div className="container mx-auto px-6">
        <div className="w-full max-w-[92rem] mx-auto mb-16">
          <Divider />
        </div>
        <h2 className="font-serif text-4xl font-bold text-center mb-12 text-brand-gold uppercase tracking-[0.2em]">
          {translations.contact_title[language]}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <form 
            action="mailto:unacc-know@protonmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">{translations.contact_form_name[language]}</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={translations.contact_form_name[language]}
                required
                className="w-full bg-brand-dark/50 border-2 border-brand-gold/20 rounded-md px-4 py-3 text-brand-beige placeholder-brand-beige/50 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold hover:border-brand-gold focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{translations.contact_form_email[language]}</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={translations.contact_form_email[language]}
                required
                className="w-full bg-brand-dark/50 border-2 border-brand-gold/20 rounded-md px-4 py-3 text-brand-beige placeholder-brand-beige/50 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold hover:border-brand-gold focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{translations.contact_form_message[language]}</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder={translations.contact_form_message[language]}
                required
                className="w-full bg-brand-dark/50 border-2 border-brand-gold/20 rounded-md px-4 py-3 text-brand-beige placeholder-brand-beige/50 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold hover:border-brand-gold focus:outline-none transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-md hover:bg-brand-gold-light hover:shadow-gold-glow-light transition-all duration-300 ease-in-out transform hover:-translate-y-1 uppercase text-lg tracking-wider"
            >
              {translations.contact_form_submit[language]}
            </button>
          </form>

          <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20 text-center">
            <a href="https://t.me/unacceptable_knowledge" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 text-brand-beige hover:text-brand-gold-light transition-colors duration-300 group">
              <Send className="w-12 h-12 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300" />
              <span className="font-bold tracking-widest">{translations.contact_telegram_channel[language]}</span>
            </a>
            <a href="https://t.me/dod_mayak" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 text-brand-beige hover:text-brand-gold-light transition-colors duration-300 group">
              <Send className="w-12 h-12 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300" />
              <span className="font-bold tracking-widest">{translations.contact_telegram_partners[language]}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
