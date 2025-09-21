import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from './ArtisanDashboard';
import { EyeIcon } from './icons/EyeIcon';

interface CustomerProductCardProps {
    product: Product;
    onViewDetails: () => void;
}

const CustomerProductCard: React.FC<CustomerProductCardProps> = ({ product, onViewDetails }) => {
    const { t } = useLanguage();

    return (
        <div 
            onClick={onViewDetails}
            className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg transition-all duration-300 group card-glow overflow-hidden cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onViewDetails()}
            aria-label={`View details for ${product.title}`}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-white truncate group-hover:text-brand-primary transition-colors">{product.title}</h3>
                
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-xl font-bold text-brand-secondary">₹{product.price.toLocaleString('en-IN')}</p>
                    <div
                        className="flex items-center gap-2 bg-brand-primary/10 text-brand-primary font-bold py-2 px-4 rounded-full transition-all duration-300 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 text-sm"
                    >
                        <EyeIcon className="w-4 h-4" />
                        <span>{t('customerDashboard.viewDetails')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerProductCard;