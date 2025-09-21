import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { UserCircleIcon } from './icons/UserCircleIcon';
import { StarIcon } from './icons/StarIcon';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';

interface AccountSettingsProps {
  customerName: string;
  memberSince: number | null;
  orderCount: number;
  onBack: () => void;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ customerName, memberSince, orderCount, onBack }) => {
    const { t } = useLanguage();
    const [showComingSoon, setShowComingSoon] = useState(false);

    const handleUpgradeClick = () => {
        setShowComingSoon(true);
        setTimeout(() => setShowComingSoon(false), 2000);
    };
    
    const formattedDate = memberSince 
        ? new Date(memberSince).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        : 'N/A';

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col items-center p-4 sm:p-6 lg:p-8 animate-fade-in-fast">
             <div className="w-full max-w-4xl">
                <button 
                    onClick={onBack} 
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-primary mb-6 transition-colors duration-200 group"
                >
                    <ArrowLeftIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                    <span>{t('accountSettings.backToDashboard')}</span>
                </button>
            
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-2xl p-8">
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                        <UserCircleIcon className="w-24 h-24 text-brand-secondary" />
                        <div>
                            <h1 className="text-3xl font-bold text-white">{customerName}</h1>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 mt-2">
                                <span>{t('accountSettings.memberSince')}: {formattedDate}</span>
                                <span>{t('accountSettings.totalOrders')}: {orderCount}</span>
                            </div>
                        </div>
                    </div>

                    {/* Shilpo+ Section */}
                    <div className="relative bg-gradient-to-br from-amber-500/10 via-gray-900/10 to-emerald-500/10 rounded-xl p-8 border border-amber-400/30 overflow-hidden">
                         <div className="absolute -inset-2 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <StarIcon className="w-8 h-8 text-amber-400" />
                                <h2 className="text-3xl font-bold text-shadow bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">{t('shilpoPlus.title')}</h2>
                            </div>
                            <p className="text-lg text-gray-300 mb-6">{t('shilpoPlus.subtitle')}</p>
                            
                            <ul className="space-y-3 text-gray-300 mb-8">
                                <li className="flex items-center gap-3"><CheckBadgeIcon className="w-6 h-6 text-brand-secondary" /> {t('shilpoPlus.benefit1')}</li>
                                <li className="flex items-center gap-3"><CheckBadgeIcon className="w-6 h-6 text-brand-secondary" /> {t('shilpoPlus.benefit2')}</li>
                                <li className="flex items-center gap-3"><CheckBadgeIcon className="w-6 h-6 text-brand-secondary" /> {t('shilpoPlus.benefit3')}</li>
                            </ul>

                            <div className="text-center">
                                <button
                                    onClick={handleUpgradeClick}
                                    className="bg-gradient-to-r from-amber-500 to-yellow-500 text-brand-dark font-bold py-3 px-10 rounded-full text-lg hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20"
                                >
                                    {t('shilpoPlus.cta')}
                                </button>
                                {showComingSoon && <p className="mt-4 text-amber-400 animate-fade-in-fast">{t('shilpoPlus.comingSoon')}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;