import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { PaintBrushIcon } from './icons/PaintBrushIcon';
import { useLanguage } from '../contexts/LanguageContext';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onArtisanSignupClick: () => void;
  onBuyerSignupClick: () => void;
}

const ChoiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; onClick: () => void }> = ({ icon, title, description, onClick }) => (
    <button 
        onClick={onClick}
        className="bg-gray-700/50 p-6 rounded-lg text-left border-2 border-gray-600 hover:border-brand-primary hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-gray-800"
    >
        <div className="flex items-center mb-4">
            <div className="text-brand-primary mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
    </button>
);

const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, onArtisanSignupClick, onBuyerSignupClick }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="join-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-2xl w-full mx-4 relative transform animate-scale-in border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="join-modal-title" className="text-3xl font-bold text-center text-white mb-2">{t('joinModal.title')}</h2>
        <p className="text-center text-gray-400 mb-8">{t('joinModal.subtitle')}</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <ChoiceCard
            icon={<PaintBrushIcon className="w-10 h-10" />}
            title={t('joinModal.artisan.title')}
            description={t('joinModal.artisan.description')}
            onClick={onArtisanSignupClick}
          />
          <ChoiceCard
            icon={<ShoppingCartIcon className="w-10 h-10" />}
            title={t('joinModal.buyer.title')}
            description={t('joinModal.buyer.description')}
            onClick={onBuyerSignupClick}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default JoinModal;