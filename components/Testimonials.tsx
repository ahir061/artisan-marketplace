import React from 'react';
import { QuoteIcon } from './icons/QuoteIcon';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialCardProps {
  quote: string;
  name: string;
  craft: string;
  imageUrl: string;
  style?: React.CSSProperties;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, craft, imageUrl, style }) => (
  <div style={style} className="relative bg-brand-dark/50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 h-full animate-on-scroll overflow-hidden">
    <QuoteIcon className="absolute -top-2 -left-2 w-24 h-24 text-gray-800" />
    <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-brand-primary/50 relative z-10" />
    <p className="text-gray-300 italic mb-6 flex-grow relative z-10">"{quote}"</p>
    <div className="mt-auto relative z-10">
      <h4 className="font-bold text-lg text-white">{name}</h4>
      <p className="text-brand-primary">{craft}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonialData = [
    {
      quote: t('testimonials.card1.quote'),
      name: t('testimonials.card1.name'),
      craft: t('testimonials.card1.craft'),
      imageUrl: "https://plus.unsplash.com/premium_photo-1757260019141-458516170c6c?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: t('testimonials.card2.quote'),
      name: t('testimonials.card2.name'),
      craft: t('testimonials.card2.craft'),
      imageUrl: "https://picsum.photos/seed/woman1/200/200"
    },
    {
      quote: t('testimonials.card3.quote'),
      name: t('testimonials.card3.name'),
      craft: t('testimonials.card3.craft'),
      imageUrl: "https://picsum.photos/seed/woman2/200/200"
    },
    {
        quote: t('testimonials.card4.quote'),
        name: t('testimonials.card4.name'),
        craft: t('testimonials.card4.craft'),
        imageUrl: "https://picsum.photos/seed/man2/200/200"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 animate-on-scroll">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-on-scroll" style={{transitionDelay: '100ms'}}>
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} style={{ transitionDelay: `${200 + index * 100}ms` }}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;