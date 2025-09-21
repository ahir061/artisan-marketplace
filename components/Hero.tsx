import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center animate-bg-pulse"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1726931535415-edbc43d42c28?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif mb-4 leading-tight">
          {t('hero.title.line1')} <span className="text-brand-primary">{t('hero.title.line2')}</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            data-action="join"
            className="bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-110"
          >
            {t('hero.cta.join')}
          </a>
          <a
            href="#features"
            className="bg-transparent border-2 border-brand-light text-brand-light font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-light hover:text-brand-dark transition-all duration-300 transform hover:scale-110"
          >
            {t('hero.cta.explore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;