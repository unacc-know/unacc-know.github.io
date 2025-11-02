
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface PrincipleCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ title, description, isOpen, onClick }) => {
  return (
    <div 
      className="group border-2 border-brand-gold/20 bg-brand-dark/30 px-6 pt-10 pb-2 rounded-lg transition-all duration-300 hover:border-brand-gold hover:shadow-gold-glow hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-brand-beige group-hover:text-brand-gold-light transition-colors duration-300">
          {title}
        </h3>
        <ChevronDown 
          className={`w-6 h-6 text-brand-gold/50 group-hover:text-brand-gold-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} mt-2`} 
        />
      </div>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-brand-beige/80 text-xl text-left leading-relaxed pb-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PrincipleCard;
