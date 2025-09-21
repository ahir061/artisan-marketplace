

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
import { PhoneIcon } from './icons/PhoneIcon';
import { HomeIcon } from './icons/HomeIcon';
import { Address } from './CustomerDashboard';

interface CheckoutFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onCheckoutComplete: (address: Address) => void;
}

type Step = 'otp-phone' | 'otp-verify' | 'address' | 'payment';
type PaymentMethod = 'card' | 'upi' | 'netbanking';

const CheckoutFlowModal: React.FC<CheckoutFlowModalProps> = ({ isOpen, onClose, items, onCheckoutComplete }) => {
  const { t } = useLanguage();

  const [step, setStep] = useState<Step>('otp-phone');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [address, setAddress] = useState<Address>({ fullName: '', line1: '', city: '', state: '', pincode: '' });
  
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep('otp-phone');
        setMobileNumber('');
        setOtp('');
        setAddress({ fullName: '', line1: '', city: '', state: '', pincode: '' });
        setIsProcessing(false);
        setIsSuccess(false);
        setSelectedMethod('card');
      }, 300);
    }
  }, [isOpen]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      // Simulate sending OTP
      setStep('otp-verify');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
        // Simulate OTP verification
        setStep('address');
    }
  };

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (Object.values(address).every(field => field.trim() !== '')) {
        setStep('payment');
    }
  };
  
  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onCheckoutComplete(address);
      }, 2500);
    }, 2500);
  };
  
  if (!isOpen) return null;
  
  const renderLeftPanelContent = () => {
      switch (step) {
          case 'otp-phone':
          case 'otp-verify':
              return <OtpStep currentSubStep={step} onPhoneSubmit={handleSendOtp} onOtpSubmit={handleVerifyOtp} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} otp={otp} setOtp={setOtp} />;
          case 'address':
              return <AddressStep onSubmit={handleSaveAddress} address={address} setAddress={setAddress} />;
          case 'payment':
              return <PaymentStep selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />;
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
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in-fast"
    >
      <div 
        className="bg-gray-900/50 backdrop-blur-2xl rounded-xl shadow-2xl w-full max-w-4xl mx-4 relative transform animate-scale-in border border-white/10 flex flex-col md:grid md:grid-cols-5 max-h-[90vh] overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-30" aria-label={t('common.close')}>
          <XIcon className="w-6 h-6" />
        </button>
        
        {/* Left Side: Main Content */}
        <div className="md:col-span-3 p-8 flex flex-col relative overflow-y-auto">
            {step === 'payment' && renderStateOverlay()}
            <h2 id="checkout-modal-title" className="text-2xl font-bold text-white mb-2">{t('payment.secureCheckout')}</h2>
            
            <div className="w-full px-8 sm:px-16 mb-8">
                <ProgressIndicator currentStep={step} isProcessing={isProcessing} isSuccess={isSuccess} />
            </div>
            
            <div className="flex-grow">
                {renderLeftPanelContent()}
            </div>
            
             {step === 'payment' && (
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
            )}
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
            <div className="mt-auto pt-4 space-y-2 text-sm">
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
                        <p>{t('payment.totalPayable')}:</p>
                        <p>₹{total.toLocaleString('en-IN')}</p>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ProgressIndicator: React.FC<{ currentStep: Step, isProcessing: boolean, isSuccess: boolean }> = ({ currentStep, isProcessing, isSuccess }) => {
    const { t } = useLanguage();
    
    const stepKey: Step = useMemo(() => {
        if (isProcessing || isSuccess) return 'payment';
        if (currentStep === 'otp-phone') return 'otp-verify';
        return currentStep;
    }, [currentStep, isProcessing, isSuccess]);

    const steps: { name: string; icon: React.ReactNode; key: Step }[] = [
        { name: t('payment.step1'), icon: <PhoneIcon />, key: 'otp-verify' },
        { name: t('payment.step2'), icon: <HomeIcon />, key: 'address' },
        { name: t('payment.step3'), icon: <CardIcon />, key: 'payment' },
    ];
    const currentStepIndex = steps.findIndex(s => s.key === stepKey);
    const progressPercent = currentStepIndex / (steps.length - 1);

    return (
        <div className="relative">
            {/* Base Gray Line */}
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-600 rounded-full transform -translate-y-1/2"></div>

            {/* Green Progress Line */}
            <div
                className="absolute top-5 left-5 h-0.5 bg-brand-secondary transition-all duration-500 rounded-full transform -translate-y-1/2"
                style={{ width: `calc(${progressPercent} * (100% - 2.5rem))` }}
            ></div>

            {/* Icons and Labels */}
            <div className="relative flex justify-between items-start w-full">
                {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex || isSuccess;
                    const isActive = index === currentStepIndex && !isSuccess;

                    return (
                        <div key={step.key} className="relative z-10 flex flex-col items-center bg-gray-900">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                                ${isCompleted ? 'bg-brand-secondary border-brand-secondary' : ''}
                                ${isActive ? 'bg-gray-900 border-brand-primary ring-4 ring-brand-primary/20' : ''}
                                ${!isCompleted && !isActive ? 'bg-gray-700 border-gray-600' : ''}
                            `}>
                                {/* FIX: Explicitly cast the icon to a ReactElement with a className prop to resolve TypeScript error. */}
                                {isCompleted ? <CheckCircleIcon className="w-6 h-6 text-white"/> : React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: `w-5 h-5 ${isActive ? 'text-brand-primary' : 'text-gray-400'}`})}
                            </div>
                            <span className={`mt-2 text-xs font-semibold text-center transition-colors duration-300 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`}>
                                {step.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// --- Step Components ---

const OtpStep: React.FC<{
    currentSubStep: 'otp-phone' | 'otp-verify';
    onPhoneSubmit: (e: React.FormEvent) => void;
    onOtpSubmit: (e: React.FormEvent) => void;
    mobileNumber: string;
    setMobileNumber: (val: string) => void;
    otp: string;
    setOtp: (val: string) => void;
}> = ({ currentSubStep, onPhoneSubmit, onOtpSubmit, mobileNumber, setMobileNumber, otp, setOtp }) => {
    const { t } = useLanguage();
    if (currentSubStep === 'otp-phone') {
        return (
            <div className="animate-fade-in-fast">
                <h3 className="text-xl font-bold text-white mb-2">{t('payment.otp.title')}</h3>
                <p className="text-gray-400 mb-6">{t('payment.otp.subtitle')}</p>
                <form onSubmit={onPhoneSubmit} className="space-y-4">
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">{t('payment.otp.phoneLabel')}</label>
                        <input type="tel" id="phone" value={mobileNumber} onChange={e => setMobileNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))} placeholder={t('payment.otp.phonePlaceholder')} className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-full text-lg hover:bg-amber-400 transition-colors">
                        {t('payment.otp.sendButton')}
                    </button>
                </form>
            </div>
        )
    }
    return (
        <div className="animate-fade-in-fast">
            <h3 className="text-xl font-bold text-white mb-2">{t('payment.otp.enterOtpTitle')}</h3>
            <p className="text-gray-400 mb-6">{t('payment.otp.enterOtpSubtitle', { phoneNumber: mobileNumber })}</p>
            <form onSubmit={onOtpSubmit} className="space-y-4">
                 <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-300 mb-1">{t('payment.otp.otpLabel')}</label>
                    <input type="text" id="otp" value={otp} onChange={e => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))} placeholder={t('payment.otp.otpPlaceholder')} className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white tracking-[0.5em] text-center focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none" />
                </div>
                <button type="submit" className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-full text-lg hover:bg-amber-400 transition-colors">
                    {t('payment.otp.verifyButton')}
                </button>
            </form>
        </div>
    )
}

const AddressStep: React.FC<{
    onSubmit: (e: React.FormEvent) => void;
    address: Address;
    setAddress: (addr: Address) => void;
}> = ({ onSubmit, address, setAddress }) => {
    const { t } = useLanguage();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    return (
         <div className="animate-fade-in-fast">
            <h3 className="text-xl font-bold text-white mb-2">{t('payment.address.title')}</h3>
            <p className="text-gray-400 mb-6">{t('payment.address.subtitle')}</p>
            <form onSubmit={onSubmit} className="space-y-4">
                 <InputField name="fullName" label={t('payment.address.fullName')} value={address.fullName} onChange={handleChange} />
                 <InputField name="line1" label={t('payment.address.addressLine')} value={address.line1} onChange={handleChange} />
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <InputField name="city" label={t('payment.address.city')} value={address.city} onChange={handleChange} />
                    <InputField name="state" label={t('payment.address.state')} value={address.state} onChange={handleChange} />
                    <InputField name="pincode" label={t('payment.address.pincode')} value={address.pincode} onChange={handleChange} />
                 </div>
                 <button type="submit" className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-full text-lg hover:bg-amber-400 transition-colors !mt-6">
                    {t('payment.address.saveButton')}
                </button>
            </form>
        </div>
    )
}

const InputField: React.FC<{ name: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ name, label, value, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <input type="text" id={name} name={name} value={value} onChange={onChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none" />
    </div>
);


const PaymentStep: React.FC<{
    selectedMethod: PaymentMethod;
    setSelectedMethod: (method: PaymentMethod) => void;
}> = ({ selectedMethod, setSelectedMethod }) => {
    const { t } = useLanguage();
    return (
        <div className="animate-fade-in-fast">
             <h3 className="text-lg font-semibold text-gray-200 mb-4">{t('payment.paymentMethod')}</h3>
            <div className="space-y-3 mb-6">
                <PaymentMethodSelector value="card" selected={selectedMethod} onSelect={setSelectedMethod} icon={<CardIcon className="w-6 h-6"/>}>{t('payment.methods.card')}</PaymentMethodSelector>
                <PaymentMethodSelector value="upi" selected={selectedMethod} onSelect={setSelectedMethod} icon={<UpiIcon className="w-6 h-6"/>}>{t('payment.methods.upi')}</PaymentMethodSelector>
                <PaymentMethodSelector value="netbanking" selected={selectedMethod} onSelect={setSelectedMethod} icon={<BankIcon className="w-6 h-6"/>}>{t('payment.methods.netbanking')}</PaymentMethodSelector>
            </div>
            {selectedMethod === 'card' && <CardForm />}
            {selectedMethod === 'upi' && <UpiForm />}
            {selectedMethod === 'netbanking' && <NetbankingForm />}
        </div>
    )
}


// --- Payment Form Sub-components ---

const PaymentMethodSelector: React.FC<{value: PaymentMethod, selected: PaymentMethod, onSelect: (method: PaymentMethod) => void, children: React.ReactNode, icon: React.ReactNode}> = 
({ value, selected, onSelect, children, icon }) => (
    <div 
        onClick={() => onSelect(value)}
        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${selected === value ? 'bg-brand-primary/10 border-brand-primary' : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'}`}
    >
        <input type="radio" name="paymentMethod" value={value} checked={selected === value} readOnly className="w-4 h-4 text-brand-primary bg-gray-700 border-gray-600 focus:ring-brand-primary" />
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

export default CheckoutFlowModal;