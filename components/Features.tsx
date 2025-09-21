import React from 'react';
import { StoryIcon } from './icons/StoryIcon';
import { VoiceIcon } from './icons/VoiceIcon';
import { TranslateIcon } from './icons/TranslateIcon';
import { PriceTagIcon } from './icons/PriceTagIcon';
import { useLanguage } from '../contexts/LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, style }) => (
  <div style={style} className="bg-brand-dark/50 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-xl hover:border-brand-primary/80 transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll h-full flex flex-col items-center text-center">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 text-brand-primary mb-6 ring-4 ring-brand-primary/10">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const { t } = useLanguage();

  const featuresData = [
    {
      icon: <VoiceIcon />,
      title: t('features.card1.title'),
      description: t('features.card1.description'),
    },
    {
      icon: <TranslateIcon />,
      title: t('features.card2.title'),
      description: t('features.card2.description'),
    },
    {
      icon: <StoryIcon />,
      title: t('features.card3.title'),
      description: t('features.card3.description'),
    },
    {
      icon: <PriceTagIcon />,
      title: t('features.card4.title'),
      description: t('features.card4.description'),
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 animate-on-scroll">{t('features.title')}</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 animate-on-scroll" style={{transitionDelay: '100ms'}}>
          {t('features.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} style={{ transitionDelay: `${200 + index * 100}ms` }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;