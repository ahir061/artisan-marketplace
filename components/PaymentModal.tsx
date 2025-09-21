import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CartItem } from '../App';
import { XIcon } from './icons/XIcon';
import { CardIcon } from './icons/CardIcon';
import { UpiIcon } from './icons/UpiIcon';
import { BankIcon } from './icons/BankIcon';
import { QrCodeIcon } from './icons/QrCodeIcon';
import { VisaIcon } from './icons/VisaIcon';
import { MastercardIcon } from './icons/MastercardIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { LockIcon } from './icons/LockIcon';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onPaymentSuccess: () => void;
}

type PaymentMethod = 'card' | 'upi' | 'netbanking';

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, items, onPaymentSuccess }) => {
  const { t } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Delay reset for closing animation
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(false);
        setSelectedMethod('card');
      }, 300);
    }
  }, [isOpen]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onPaymentSuccess();
      }, 2500); // Show success message for 2.5s
    }, 2500); // Simulate 2.5s processing time
  };
  
  if (!isOpen) return null;
  
  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'card':
        return <CardForm />;
      case 'upi':
        return <UpiForm />;
      case 'netbanking':
        return <NetbankingForm />;
      default:
        return null;
    }
  };

  const renderStateOverlay = () => {
    if (!isProcessing && !isSuccess) return null;
    
    return (
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-20 animate-fade-in-fast rounded-l-xl">
             {isProcessing ? (
                <>
                    <SpinnerIcon className="w-16 h-16 text-brand-primary animate-spin" />
                    <p className="mt-4 text-lg font-semibold text-gray-300">{t('payment.processing')}</p>
                </>
            ) : (
                <>
                    <CheckCircleIcon className="w-16 h-16 text-green-400" />
                    <p className="mt-4 text-2xl font-bold text-white">{t('payment.success')}</p>
                    <p className="mt-1 text-gray-400">{t('payment.successMessage')}</p>
                </>
            )}
        </div>
    );
  };


  return ReactDOM.createPortal(
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="payment-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in-fast"
    >
      <div 
        className="bg-gray-900/50 backdrop-blur-2xl rounded-xl shadow-2xl w-full max-w-4xl mx-4 relative transform animate-scale-in border border-white/10 flex flex-col md:grid md:grid-cols-5 max-h-[90vh] overflow-y-auto md:overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-30" aria-label={t('common.close')}>
          <XIcon className="w-6 h-6" />
        </button>
        
        {/* Left Side: Payment Details */}
        <div className="md:col-span-3 p-8 flex flex-col relative overflow-y-auto">
            {renderStateOverlay()}
            <h2 id="payment-modal-title" className="text-2xl font-bold text-white mb-2">{t('payment.secureCheckout')}</h2>
            <p className="text-gray-400 mb-6">Complete your payment securely.</p>
            
            <h3 className="text-lg font-semibold text-gray-200 mb-4">{t('payment.paymentMethod')}</h3>
            <div className="space-y-3 mb-6">
                <PaymentMethodSelector value="card" selected={selectedMethod} onSelect={setSelectedMethod} icon={<CardIcon className="w-6 h-6"/>}>{t('payment.methods.card')}</PaymentMethodSelector>
                <PaymentMethodSelector value="upi" selected={selectedMethod} onSelect={setSelectedMethod} icon={<UpiIcon className="w-6 h-6"/>}>{t('payment.methods.upi')}</PaymentMethodSelector>
                <PaymentMethodSelector value="netbanking" selected={selectedMethod} onSelect={setSelectedMethod} icon={<BankIcon className="w-6 h-6"/>}>{t('payment.methods.netbanking')}</PaymentMethodSelector>
            </div>
            
            <div className="flex-grow">
                {renderPaymentForm()}
            </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="md:col-span-2 bg-gray-800/50 p-8 flex flex-col rounded-r-xl border-l border-white/10">
           <h3 className="text-xl font-bold text-white mb-4">{t('payment.orderSummary')}</h3>
           <div className="flex-grow overflow-y-auto space-y-4 -mr-4 pr-4">
                {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm gap-4">
                        <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                        <div className="flex-grow">
                            <p className="text-gray-200 font-semibold">{item.title}</p>
                            <p className="text-gray-400">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-200 whitespace-nowrap">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                ))}
           </div>
           <div className="mt-6 border-t border-gray-700 pt-4 space-y-2 text-sm">
                <div className="flex justify-between items-center text-gray-300">
                    <p>{t('payment.subtotal')}:</p>
                    <p className="font-medium">₹{total.toLocaleString('en-IN')}</p>
                </div>
                 <div className="flex justify-between items-center text-gray-300">
                    <p>{t('payment.shipping')}:</p>
                    <p className="font-medium text-brand-secondary">{t('payment.shippingFree')}</p>
                </div>
                 <div className="flex justify-between items-center text-white text-lg font-bold mt-2 pt-2 border-t border-gray-700">
                    <p>{t('payment.total')}:</p>
                    <p>₹{total.toLocaleString('en-IN')}</p>
                </div>
           </div>
            <div className="mt-6">
                 <button
                    onClick={handlePayment}
                    disabled={isProcessing || isSuccess}
                    className="w-full flex items-center justify-center gap-2 bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    <LockIcon className="w-5 h-5" />
                    {t('payment.paySecurely')}
                </button>
            </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

// --- Sub-components for Forms and Selectors ---

const PaymentMethodSelector: React.FC<{value: PaymentMethod, selected: PaymentMethod, onSelect: (method: PaymentMethod) => void, children: React.ReactNode, icon: React.ReactNode}> = 
({ value, selected, onSelect, children, icon }) => (
    <div 
        onClick={() => onSelect(value)}
        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${selected === value ? 'bg-brand-primary/10 border-brand-primary' : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'}`}
    >
        <input type="radio" name="paymentMethod" value={value} checked={selected === value} onChange={() => onSelect(value)} className="w-4 h-4 text-brand-primary bg-gray-700 border-gray-600 focus:ring-brand-primary" />
        <div className={`ml-4 flex items-center gap-3 ${selected === value ? 'text-brand-primary' : 'text-gray-300'}`}>
            {icon}
            <span className="font-semibold">{children}</span>
        </div>
    </div>
);

const CardForm: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="space-y-4 animate-fade-in-fast mt-4">
            <input type="text" placeholder={t('payment.cardForm.number')} className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"/>
            <input type="text" placeholder={t('payment.cardForm.holder')} className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"/>
            <div className="flex gap-4">
              <input type="text" placeholder={t('payment.cardForm.expiry')} className="w-1/2 bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"/>
              <input type="text" placeholder={t('payment.cardForm.cvv')} className="w-1/2 bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"/>
            </div>
            <div className="flex items-center gap-2 pt-2">
                <VisaIcon className="h-8"/>
                <MastercardIcon className="h-8"/>
            </div>
        </div>
    );
};

const UpiForm: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="text-center animate-fade-in-fast mt-4">
            <QrCodeIcon className="w-32 h-32 mx-auto text-gray-400 bg-white p-2 rounded-lg"/>
            <p className="font-semibold mt-2 text-gray-300">{t('payment.upiForm.scan')}</p>
            <div className="flex items-center gap-4 my-3">
                <div className="flex-grow h-px bg-gray-600"></div>
                <span className="text-gray-400 font-bold">{t('payment.upiForm.or')}</span>
                <div className="flex-grow h-px bg-gray-600"></div>
            </div>
            <input type="text" placeholder={t('payment.upiForm.placeholder')} className="w-full text-center bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"/>
        </div>
    );
};

const NetbankingForm: React.FC = () => {
    const { t } = useLanguage();
    const banks: string[] = t('payment.netbankingForm.banks') as any;
    return (
        <div className="animate-fade-in-fast mt-4">
            <select className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none">
                <option>{t('payment.netbankingForm.select')}</option>
                {banks.map(bank => <option key={bank} value={bank}>{bank}</option>)}
            </select>
        </div>
    );
};

export default PaymentModal;