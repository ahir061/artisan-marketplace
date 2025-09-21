import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from './ArtisanDashboard';
import { XIcon } from './icons/XIcon';
import { InfoIcon } from './icons/InfoIcon';
import { StoryIcon } from './icons/StoryIcon';
import { MinusIcon } from './icons/MinusIcon';
import { PlusIcon } from './icons/PlusIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { CartItem } from '../App';

interface ProductPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
}

const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({ isOpen, onClose, product, onAddToCart, onBuyNow }) => {
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1); // Reset quantity when modal opens
    } else {
        // Delay reset to allow closing animation
        setTimeout(() => {
            setShowAddedMessage(false);
        }, 300);
    }
  }, [isOpen]);

  const handleAddToCartClick = () => {
    if (product && quantity > 0) {
        onAddToCart(product, quantity);
        setShowAddedMessage(true);
        setTimeout(() => {
             setShowAddedMessage(false);
             onClose();
        }, 1500);
    }
  };
  
  const handleBuyNowClick = () => {
    if (product && quantity > 0) {
        onBuyNow(product, quantity);
    }
  };

  if (!isOpen || !product) return null;

  return ReactDOM.createPortal(
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="product-preview-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full mx-4 relative transform animate-scale-in border border-gray-700 flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-black/20 rounded-full p-1" aria-label={t('common.close')}>
          <XIcon className="w-6 h-6" />
        </button>
        
        <div className="md:w-1/2 flex-shrink-0">
            <img src={product.imageUrl} alt={product.title} className="w-full h-64 md:h-full object-cover" />
        </div>

        <div className="md:w-1/2 p-8 overflow-y-auto flex flex-col">
            <h2 id="product-preview-modal-title" className="text-3xl font-bold text-white font-serif mb-2">{product.title}</h2>
            <p className="text-3xl font-bold text-brand-secondary mb-6">₹{product.price.toLocaleString('en-IN')}</p>

            <div className="space-y-6 mb-8 flex-grow">
                <div>
                    <div className="flex items-center gap-3 mb-2"><InfoIcon className="w-6 h-6 text-brand-primary"/><h4 className="text-lg font-bold text-gray-200">{t('dashboard.addProductModal.step3.labels.description')}</h4></div>
                    <p className="pl-9 text-gray-400 leading-relaxed text-sm">{product.description}</p>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-2"><StoryIcon className="w-6 h-6 text-brand-primary" /><h4 className="text-lg font-bold text-gray-200">{t('dashboard.addProductModal.step3.labels.story')}</h4></div>
                    <p className="pl-9 text-gray-400 leading-relaxed text-sm">{product.story}</p>
                </div>
            </div>
            
            <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="quantity" className="font-bold text-gray-300">{t('customerDashboard.quantity')}</label>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"><MinusIcon className="w-5 h-5"/></button>
                        <input id="quantity" type="number" value={quantity} readOnly className="w-12 bg-transparent text-center font-bold text-lg" />
                        <button onClick={() => setQuantity(q => q + 1)} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"><PlusIcon className="w-5 h-5"/></button>
                    </div>
                </div>

                {showAddedMessage ? (
                     <div className="w-full text-center text-green-400 font-semibold flex items-center justify-center gap-2 py-3 bg-green-500/10 rounded-full">
                        <CheckCircleIcon className="w-6 h-6" />
                        {t('cart.itemAdded')}
                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={handleBuyNowClick} className="flex-1 bg-transparent border-2 border-brand-primary text-brand-primary font-bold py-3 px-6 rounded-full hover:bg-brand-primary hover:text-brand-dark transition-all duration-300">
                            {t('customerDashboard.buyNow')}
                        </button>
                        <button onClick={handleAddToCartClick} disabled={quantity <= 0} className="flex-1 bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-amber-400 transition-all duration-300">
                            {t('customerDashboard.addToCart')}
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProductPreviewModal;
