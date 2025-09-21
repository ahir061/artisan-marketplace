import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface ArtisanSignInProps {
  onBack: () => void;
  onLogin: (name: string) => void;
  onNavigateToSignUp: () => void;
}

const InputField: React.FC<{
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
}> = ({ id, label, value, onChange, placeholder, error }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
        </label>
        <div className="relative">
            <input
                type="text"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-gray-700 border rounded-md py-2.5 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${error ? 'border-red-500 ring-red-500' : 'border-gray-600 focus:ring-brand-primary focus:border-brand-primary'}`}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
        </div>
        {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
);

const ArtisanSignIn: React.FC<ArtisanSignInProps> = ({ onBack, onLogin, onNavigateToSignUp }) => {
    const { t } = useLanguage();
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName.trim()) {
            setError(t('artisanSignIn.errors.name'));
            return;
        }
        // Mock login: any non-empty name is considered valid.
        // In a real app, you would verify this against a database.
        setError('');
        onLogin(fullName);
    };

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in-fast">
            <div className="w-full max-w-md">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-primary mb-6 transition-colors duration-200 group"
                >
                    <ArrowLeftIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                    <span>{t('artisanSignIn.back')}</span>
                </button>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white font-serif">{t('artisanSignIn.title')}</h1>
                        <p className="text-gray-400 mt-2">{t('artisanSignIn.subtitle')}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <InputField
                            id="fullName"
                            label={t('artisanSignIn.labels.name')}
                            placeholder={t('artisanSignIn.placeholders.name')}
                            value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value);
                                if (error) setError('');
                            }}
                            error={error}
                        />
                        <div>
                            <button
                                type="submit"
                                className="w-full mt-2 bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
                            >
                                {t('artisanSignIn.button')}
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-gray-400 mt-6">
                        {t('artisanSignIn.newMember')}{' '}
                        <button onClick={onNavigateToSignUp} className="font-semibold text-brand-primary hover:text-amber-400 underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm">
                            {t('artisanSignIn.signUpHere')}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArtisanSignIn;