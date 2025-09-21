import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GlobeIcon } from './icons/GlobeIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t, languages } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth >= 768) {
              setIsMenuOpen(false);
          }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#features', key: 'nav.features' },
    { href: '#how-it-works', key: 'nav.howItWorks' },
    { href: '#testimonials', key: 'nav.testimonials' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-brand-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold font-serif text-brand-primary">Shilpo AI</a>
            
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map(link => (
                 <a key={link.href} href={link.href} className="text-gray-300 hover:text-brand-primary transition-colors duration-200 group relative">
                    <span>{t(link.key)}</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                 </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
               {/* Language Selector */}
              <div ref={langMenuRef} className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={isLangMenuOpen}
                >
                  <GlobeIcon className="w-5 h-5" />
                  <span>{languages[language].name}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 animate-fade-in-fast">
                    {Object.keys(languages).map((langCode) => (
                      <a
                        key={langCode}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setLanguage(langCode);
                          setIsLangMenuOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm ${language === langCode ? 'text-brand-primary' : 'text-gray-300'} hover:bg-gray-700`}
                      >
                        {languages[langCode].nativeName}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#"
                data-action="join"
                className="bg-brand-primary text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-110"
              >
                {t('common.getStarted')}
              </a>
            </div>

            <button className="md:hidden text-brand-light z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div 
        className={`md:hidden fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav 
            className="flex flex-col items-center justify-center h-full text-center"
            onClick={(e) => e.stopPropagation()}
        >
            <div className='flex flex-col space-y-8'>
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-gray-200 hover:text-brand-primary transition-colors duration-200">{t(link.key)}</a>
                ))}

                 {/* Mobile Language Selector */}
                 <div className="pt-4 border-t border-gray-700/50 w-full flex justify-center">
                    <div className="flex gap-4">
                    {Object.keys(languages).map((langCode) => (
                      <button
                        key={langCode}
                        onClick={(e) => {
                          e.preventDefault();
                          setLanguage(langCode);
                        }}
                        className={`px-3 py-1 text-lg rounded-md ${language === langCode ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-400'}`}
                      >
                        {languages[langCode].nativeName}
                      </button>
                    ))}
                    </div>
                 </div>

                 <a
                    href="#"
                    data-action="join"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-8 bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300"
                 >
                    {t('common.getStarted')}
                 </a>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Header;