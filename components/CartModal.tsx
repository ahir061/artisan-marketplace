import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CartItem } from '../App';
import { XIcon } from './icons/XIcon';
import { MinusIcon } from './icons/MinusIcon';
import { PlusIcon } from './icons/PlusIcon';
import { TrashIcon } from './icons/TrashIcon';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cart-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full mx-4 relative transform animate-scale-in border border-gray-700 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-6 border-b border-gray-700 flex-shrink-0">
          <h2 id="cart-modal-title" className="text-2xl font-bold text-white">{t('cart.title')}</h2>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label={t('common.close')}>
            <XIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">{t('cart.empty')}</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-700">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center py-4 gap-4">
                  <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1.5 bg-gray-700 rounded-full hover:bg-gray-600"><MinusIcon className="w-4 h-4"/></button>
                    <input type="number" value={item.quantity} readOnly className="w-10 bg-transparent text-center font-bold" />
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1.5 bg-gray-700 rounded-full hover:bg-gray-600"><PlusIcon className="w-4 h-4"/></button>
                  </div>
                  <p className="font-bold text-white w-20 text-right">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  <button onClick={() => onRemoveItem(item.id)} className="text-gray-500 hover:text-red-500 p-2" aria-label={`${t('cart.remove')} ${item.title}`}>
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <footer className="p-6 border-t border-gray-700 bg-gray-800/50 flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-300">{t('cart.total')}:</span>
              <span className="text-2xl font-bold text-brand-secondary">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300"
            >
              {t('cart.checkout')}
            </button>
          </footer>
        )}
      </div>
    </div>,
    document.body
  );
};

export default CartModal;