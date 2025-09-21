import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VerticalStep = ({ number, title, description, style }: { number: string; title:string; description: string; style?: React.CSSProperties; }) => (
    <div className="flex items-start space-x-6 animate-on-scroll group" style={style}>
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-brand-dark font-bold text-3xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-primary/40 group-hover:scale-110">
            {number}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-1 text-gray-400">{description}</p>
        </div>
    </div>
);

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="how-it-works" 
      className="py-20 md:py-28 bg-brand-dark"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '2rem 2rem'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 animate-on-scroll">{t('howItWorks.title')}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-on-scroll" style={{transitionDelay: '100ms'}}>
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* For Artisans */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-brand-primary mb-8 text-center md:text-left animate-on-scroll" style={{transitionDelay: '200ms'}}>{t('howItWorks.artisans.title')}</h3>
            <div className="relative space-y-10 border-l-2 border-dashed border-gray-700/50 ml-8 pl-12">
              <VerticalStep 
                number="1" 
                title={t('howItWorks.artisans.step1.title')} 
                description={t('howItWorks.artisans.step1.description')} 
                style={{transitionDelay: '300ms'}}
              />
              <VerticalStep 
                number="2" 
                title={t('howItWorks.artisans.step2.title')}
                description={t('howItWorks.artisans.step2.description')}
                style={{transitionDelay: '400ms'}}
              />
              <VerticalStep 
                number="3" 
                title={t('howItWorks.artisans.step3.title')}
                description={t('howItWorks.artisans.step3.description')}
                style={{transitionDelay: '500ms'}}
              />
            </div>
          </div>

          {/* For Customers */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-brand-secondary mb-8 text-center md:text-left animate-on-scroll" style={{transitionDelay: '200ms'}}>{t('howItWorks.customers.title')}</h3>
            <div className="relative space-y-10 border-l-2 border-dashed border-gray-700/50 ml-8 pl-12">
              <VerticalStep 
                number="1" 
                title={t('howItWorks.customers.step1.title')}
                description={t('howItWorks.customers.step1.description')}
                style={{transitionDelay: '300ms'}}
              />
              <VerticalStep 
                number="2" 
                title={t('howItWorks.customers.step2.title')}
                description={t('howItWorks.customers.step2.description')}
                style={{transitionDelay: '400ms'}}
              />
              <VerticalStep 
                number="3" 
                title={t('howItWorks.customers.step3.title')}
                description={t('howItWorks.customers.step3.description')}
                style={{transitionDelay: '500ms'}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;