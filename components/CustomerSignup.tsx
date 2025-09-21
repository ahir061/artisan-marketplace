import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import SuccessDialog from './SuccessDialog';
import { EmailIcon } from './icons/EmailIcon';
import { LockIcon } from './icons/LockIcon';

interface CustomerSignupProps {
  onBack: () => void;
  onAccountCreated: (name: string, signupDate: number) => void;
  onNavigateToSignIn: () => void;
}

interface FormData {
    fullName: string;
    email: string;
    password: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const InputField: React.FC<{
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    startAdornment?: React.ReactNode;
    error?: string;
}> = ({ id, label, value, onChange, type = 'text', placeholder, startAdornment, error }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
        </label>
        <div className="relative">
            {startAdornment && (
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    {startAdornment}
                </div>
            )}
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-gray-700 border rounded-md py-2.5 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${error ? 'border-red-500 ring-red-500' : 'border-gray-600 focus:ring-brand-primary focus:border-brand-primary'} ${startAdornment ? 'pl-10' : ''}`}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
        </div>
        {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
);


const CustomerSignup: React.FC<CustomerSignupProps> = ({ onBack, onAccountCreated, onNavigateToSignIn }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };
    
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = t('customerSignup.errors.name');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('customerSignup.errors.email');
        }
        if (formData.password.length < 8) {
            newErrors.password = t('customerSignup.errors.password');
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Customer account created', formData);
            setIsSuccessDialogOpen(true);
        }
    };

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in-fast">
            <div className="w-full max-w-md">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-primary mb-6 transition-colors duration-200 group"
                >
                    <ArrowLeftIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                    <span>{t('customerSignup.back')}</span>
                </button>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white font-serif">{t('customerSignup.title')}</h1>
                        <p className="text-gray-400 mt-2">{t('customerSignup.subtitle')}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <InputField
                            id="fullName"
                            label={t('customerSignup.labels.name')}
                            placeholder={t('customerSignup.placeholders.name')}
                            value={formData.fullName}
                            onChange={handleChange}
                            error={errors.fullName}
                        />
                         <InputField
                            id="email"
                            type="email"
                            label={t('customerSignup.labels.email')}
                            placeholder={t('customerSignup.placeholders.email')}
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            startAdornment={<EmailIcon className="w-5 h-5" />}
                        />
                        <InputField
                            id="password"
                            type="password"
                            label={t('customerSignup.labels.password')}
                            placeholder={t('customerSignup.placeholders.password')}
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                            startAdornment={<LockIcon className="w-5 h-5" />}
                        />
                        <div>
                            <button
                                type="submit"
                                className="w-full mt-2 bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
                            >
                                {t('customerSignup.button')}
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-400 mt-6">
                        {t('customerSignup.existingMember')}{' '}
                        <button onClick={onNavigateToSignIn} className="font-semibold text-brand-primary hover:text-amber-400 underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm">
                            {t('customerSignup.signInHere')}
                        </button>
                    </p>
                </div>
            </div>
             <SuccessDialog 
                isOpen={isSuccessDialogOpen}
                title={t('customerSignup.successDialog.title')}
                message={t('customerSignup.successDialog.message', {name: formData.fullName.split(' ')[0]})}
                buttonText={t('customerSignup.successDialog.button')}
                onConfirm={() => onAccountCreated(formData.fullName, Date.now())}
            />
        </div>
    );
};

export default CustomerSignup;