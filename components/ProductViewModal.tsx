import React from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from './ArtisanDashboard';
import { XIcon } from './icons/XIcon';
import { InfoIcon } from './icons/InfoIcon';
import { StoryIcon } from './icons/StoryIcon';
import { TagIcon } from './icons/TagIcon';

interface ProductViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const DetailSection: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div>
        <div className="flex items-center gap-3 mb-2">
            <div className="text-brand-primary">{icon}</div>
            <h4 className="text-lg font-bold text-gray-200">{title}</h4>
        </div>
        <div className="pl-9 text-gray-400 leading-relaxed">
            {children}
        </div>
    </div>
);

const ProductViewModal: React.FC<ProductViewModalProps> = ({ isOpen, onClose, product }) => {
  const { t } = useLanguage();

  if (!isOpen || !product) return null;

  return ReactDOM.createPortal(
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="product-view-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl max-w-xl w-full mx-4 relative transform animate-scale-in border border-gray-700 flex flex-col overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-20" aria-label={t('common.close')}>
          <XIcon className="w-6 h-6" />
        </button>
        
        <div className="flex-shrink-0">
            <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover" />
        </div>

        <div className="p-8 overflow-y-auto">
            <h2 id="product-view-modal-title" className="text-3xl font-bold text-white font-serif mb-2">{product.title}</h2>
            <p className="text-3xl font-bold text-brand-primary mb-6">₹{product.price.toLocaleString('en-IN')}</p>

            <div className="space-y-6">
                <DetailSection icon={<InfoIcon className="w-6 h-6"/>} title={t('dashboard.addProductModal.step3.labels.description')}>
                   <p>{product.description}</p>
                </DetailSection>

                <DetailSection icon={<StoryIcon />} title={t('dashboard.addProductModal.step3.labels.story')}>
                    <p>{product.story}</p>
                </DetailSection>

                <DetailSection icon={<TagIcon className="w-6 h-6"/>} title={t('dashboard.addProductModal.step3.labels.tags')}>
                    <div className="flex flex-wrap gap-2">
                        {product.tags.map(tag => (
                            <span key={tag} className="bg-brand-primary/10 text-brand-primary text-sm font-medium px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </DetailSection>
            </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProductViewModal;