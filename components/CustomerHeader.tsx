import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SearchIcon } from './icons/SearchIcon';
import { UserIcon } from './icons/UserIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { OrderHistoryIcon } from './icons/OrderHistoryIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { LogoutIcon } from './icons/LogoutIcon';

interface CustomerHeaderProps {
    customerName: string;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onLogout: () => void;
    cartCount: number;
    onCartClick: () => void;
    onNavigateToAccountSettings: () => void;
    onSetActiveTab: (tab: 'browse' | 'orders') => void;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ 
    customerName, 
    searchQuery, 
    onSearchChange, 
    onLogout, 
    cartCount, 
    onCartClick,
    onNavigateToAccountSettings,
    onSetActiveTab
}) => {
    const { t } = useLanguage();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOrdersClick = () => {
        onSetActiveTab('orders');
        setIsDropdownOpen(false);
    };

    const handleSettingsClick = () => {
        onNavigateToAccountSettings();
        setIsDropdownOpen(false);
    };

    const handleLogoutClick = () => {
        onLogout();
        setIsDropdownOpen(false);
    };

    return (
        <header className="sticky top-0 z-30 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 shadow-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center gap-6">
                    {/* Logo */}
                    <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} className="text-2xl font-bold font-serif text-brand-primary">
                        Shilpo AI
                    </a>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-xl">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                                <SearchIcon className="w-5 h-5" />
                            </div>
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                placeholder={t('customerDashboard.searchPlaceholder')}
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-full py-2.5 pl-11 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                            />
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-4">
                         <div className="relative" ref={dropdownRef}>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-white/10 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                                    <UserIcon className="w-5 h-5 text-brand-secondary" />
                                </div>
                                <span className="hidden lg:inline text-gray-300 font-medium">
                                    {t('customerDashboard.greeting', { name: customerName.split(' ')[0] })}
                                </span>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full right-0 mt-3 w-56 bg-gray-800/90 backdrop-blur-lg border border-gray-700 rounded-lg shadow-2xl animate-fade-in-fast z-50">
                                    <div className="p-2">
                                        <button onClick={handleOrdersClick} className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-300 rounded-md hover:bg-white/10 transition-colors">
                                            <OrderHistoryIcon className="w-5 h-5" />
                                            <span>{t('orders.title')}</span>
                                        </button>
                                        <button onClick={handleSettingsClick} className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-300 rounded-md hover:bg-white/10 transition-colors">
                                            <SettingsIcon className="w-5 h-5" />
                                            <span>{t('customerDashboard.accountSettings')}</span>
                                        </button>
                                        <div className="h-px bg-gray-700 my-1"></div>
                                        <button onClick={handleLogoutClick} className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-300 rounded-md hover:bg-white/10 transition-colors">
                                            <LogoutIcon className="w-5 h-5" />
                                            <span>{t('dashboard.logout')}</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
                        <button onClick={onCartClick} className="relative text-gray-300 hover:text-white p-2">
                            <ShoppingCartIcon className="w-6 h-6" />
                             {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-dark ring-2 ring-brand-dark">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default CustomerHeader;