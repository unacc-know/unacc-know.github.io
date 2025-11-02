
import React, { useState, useEffect } from 'react';
import PrincipleCard from './PrincipleCard';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Divider = () => (
  <div className="w-full h-[2px]" style={{
    background: 'linear-gradient(to right, transparent 0%, rgba(201, 162, 39, 1) 10%, rgba(201, 162, 39, 1) 90%, transparent 100%)',
    filter: 'blur(1px)'
  }}></div>
);

const Principles: React.FC = () => {
  const { language } = useLanguage();
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const getColumns = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) return 3;
      if (window.matchMedia('(min-width: 640px)').matches) return 2;
      return 1;
    };

    const handleResize = () => {
      const currentColumns = getColumns();
      setColumns(prevColumns => {
        if (prevColumns !== currentColumns) {
          setOpenRow(null); // Сбросить открытый ряд при изменении макета
          return currentColumns;
        }
        return prevColumns;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (cardIndex: number) => {
    const rowIndex = Math.floor(cardIndex / columns);
    setOpenRow(prevOpenRow => (prevOpenRow === rowIndex ? null : rowIndex));
  };

  return (
    <section id="principles" className="bg-brand-dark-secondary/50 pt-12 sm:pt-20 pb-6 sm:pb-12">
      <div className="px-6">
        <div className="w-full max-w-[92rem] mx-auto mb-16">
          <Divider />
        </div>
        <h2 className="font-serif text-4xl font-bold text-center mb-12 text-brand-gold uppercase tracking-[0.2em]">
          {translations.principles_title[language]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[92rem] mx-auto">
          {translations.principles.map((principle, index) => {
            const rowIndex = Math.floor(index / columns);
            const isOpen = openRow === rowIndex;
            return (
              <PrincipleCard
                key={index}
                title={principle.title[language]}
                description={principle.description[language]}
                isOpen={isOpen}
                onClick={() => handleCardClick(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Principles;
