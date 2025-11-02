import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  showUnderline?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', showUnderline = true }) => {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="px-6">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-8 text-brand-gold-light relative pb-4 uppercase">
          {title}
          {showUnderline && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gold"></span>
          )}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;