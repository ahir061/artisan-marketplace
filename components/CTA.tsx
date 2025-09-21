import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-gray-800 to-brand-dark border-2 border-brand-primary/30 rounded-lg p-10 md:p-16 max-w-4xl mx-auto animate-glow">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {t('cta.subtitle')}
          </p>
          <a
            href="#"
            data-action="join"
            className="bg-brand-primary text-brand-dark font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-110 inline-block"
          >
            {t('cta.button')}
          </a>
          <p className="text-sm text-gray-400 mt-4">{t('cta.note')}</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;