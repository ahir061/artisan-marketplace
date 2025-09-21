import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { EmailIcon } from './icons/EmailIcon';
import { LockIcon } from './icons/LockIcon';

interface CustomerSignInProps {
  onBack: () => void;
  onLogin: (name: string, signupDate: number) => void;
  onNavigateToSignUp: () => void;
}

interface FormData {
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

const CustomerSignIn: React.FC<CustomerSignInProps> = ({ onBack, onLogin, onNavigateToSignUp }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('customerSignIn.errors.email');
        }
        if (!formData.password) {
            newErrors.password = t('customerSignIn.errors.password');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Mock login: any valid email/password combo works.
            // Extract name from email for display purposes.
            const name = formData.email.split('@')[0];
            const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            
            // Use a fixed past date for "member since"
            const mockSignupDate = new Date('2023-10-26T10:00:00Z').getTime();
            
            onLogin(capitalizedName, mockSignupDate);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
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
                    <span>{t('customerSignIn.back')}</span>
                </button>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white font-serif">{t('customerSignIn.title')}</h1>
                        <p className="text-gray-400 mt-2">{t('customerSignIn.subtitle')}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <InputField
                            id="email"
                            type="email"
                            label={t('customerSignIn.labels.email')}
                            placeholder={t('customerSignIn.placeholders.email')}
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            startAdornment={<EmailIcon className="w-5 h-5" />}
                        />
                        <InputField
                            id="password"
                            type="password"
                            label={t('customerSignIn.labels.password')}
                            placeholder={t('customerSignIn.placeholders.password')}
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
                                {t('customerSignIn.button')}
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-400 mt-6">
                        {t('customerSignIn.newMember')}{' '}
                        <button onClick={onNavigateToSignUp} className="font-semibold text-brand-primary hover:text-amber-400 underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm">
                            {t('customerSignIn.signUpHere')}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomerSignIn;