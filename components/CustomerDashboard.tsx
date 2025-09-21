import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from './ArtisanDashboard';
import CustomerHeader from './CustomerHeader';
import CustomerProductCard from './CustomerProductCard';
import { FilterIcon } from './icons/FilterIcon';
import { SortIcon } from './icons/SortIcon';
import { CartItem } from '../App';
import ProductPreviewModal from './ProductPreviewModal';
import CartModal from './CartModal';
import CheckoutFlowModal from './CheckoutFlowModal';
import MyOrders from './MyOrders';
import { PackageIcon } from './icons/PackageIcon';
import { OrderHistoryIcon } from './icons/OrderHistoryIcon';

export interface Address {
    fullName: string;
    line1: string;
    city: string;
    state: string;
    pincode: string;
}

export type OrderStatus = 'Ordered' | 'Packed' | 'Shipped' | 'Delivered';

export interface Order {
    id: string;
    date: number;
    items: CartItem[];
    total: number;
    shippingAddress: Address;
    status: OrderStatus;
    expectedDelivery: string;
}

interface CustomerDashboardProps {
  customerName: string;
  products: Product[];
  orders: Order[];
  onLogout: () => void;
  cart: CartItem[];
  onAddToCart: (product: Product, quantity: number) => void;
  onUpdateCartQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onPlaceOrder: (items: CartItem[], address: Address) => void;
  onNavigateToAccountSettings: () => void;
}

type SortOption = 'newest' | 'price-asc' | 'price-desc';
const CATEGORIES = ['All', 'Pottery', 'Art & Paintings', 'Clothing & Textiles', 'Jewellery'];
type ActiveTab = 'browse' | 'orders';

const CustomerDashboard: React.FC<CustomerDashboardProps> = (props) => {
    const { 
        customerName, products, orders, onLogout, cart, onAddToCart, 
        onUpdateCartQuantity, onRemoveFromCart, onPlaceOrder, onNavigateToAccountSettings
    } = props;
    
    const { t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState<SortOption>('newest');

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutFlowOpen, setIsCheckoutFlowOpen] = useState(false);
    const [checkoutItems, setCheckoutItems] = useState<CartItem[]>([]);
    
    const [activeTab, setActiveTab] = useState<ActiveTab>('browse');

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleClosePreview = () => {
        setSelectedProduct(null);
    }
    
    const handleInitiateCheckout = (items: CartItem[]) => {
        setCheckoutItems(items);
        setIsCheckoutFlowOpen(true);
        setSelectedProduct(null);
        setIsCartOpen(false);
    }

    const handleBuyNow = (product: Product, quantity: number) => {
        handleInitiateCheckout([{ ...product, quantity }]);
    };

    const handleCheckoutFromCart = () => {
        if (cart.length > 0) {
            handleInitiateCheckout(cart);
        }
    };

    const handleCheckoutComplete = (address: Address) => {
        onPlaceOrder(checkoutItems, address);
        setIsCheckoutFlowOpen(false);
    };

    const filteredAndSortedProducts = useMemo(() => {
        let processedProducts = [...products];

        // 1. Filter by search query
        const query = searchQuery.toLowerCase();
        if (query) {
             processedProducts = processedProducts.filter(product =>
                product.title.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }
        
        // 2. Filter by category
        if (activeCategory !== 'All') {
            processedProducts = processedProducts.filter(product => product.category === activeCategory);
        }

        // 3. Sort
        switch (sortBy) {
            case 'price-asc':
                processedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                processedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
            default:
                processedProducts.sort((a, b) => b.createdAt - a.createdAt);
                break;
        }

        return processedProducts;

    }, [products, searchQuery, activeCategory, sortBy]);

    const renderBrowseContent = () => {
        if (products.length === 0) {
            return (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-300">{t('customerDashboard.emptyState')}</h2>
                </div>
            )
        }
        
        if (filteredAndSortedProducts.length === 0) {
            return (
                 <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-300">{t('customerDashboard.noResults', { query: searchQuery })}</h2>
                    <button 
                        onClick={() => setSearchQuery('')}
                        className="mt-4 bg-brand-primary/10 text-brand-primary font-semibold py-2 px-5 rounded-full hover:bg-brand-primary/20 transition-colors"
                    >
                        {t('customerDashboard.browseAll')}
                    </button>
                </div>
            )
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
                {filteredAndSortedProducts.map(product => (
                    <CustomerProductCard 
                        key={product.id} 
                        product={product} 
                        onViewDetails={() => handleProductClick(product)} 
                    />
                ))}
            </div>
        )
    }

    const getCategoryTranslationKey = (category: string) => {
        const key = category.toLowerCase().replace(/ & /g, '').replace(/ /g, '');
        if(category === "Art & Paintings") return 'customerDashboard.filters.art'
        if(category === "Clothing & Textiles") return 'customerDashboard.filters.clothing'
        
        return `customerDashboard.filters.${key}`;
    }

    return (
        <>
            <div className="min-h-screen bg-brand-dark overflow-hidden relative text-white">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '2rem 2rem' }} />
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-900/80 to-transparent rounded-full filter blur-3xl animate-background-rotate" style={{ animationDuration: '60s' }}/>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-900/80 to-transparent rounded-full filter blur-3xl animate-background-rotate" style={{ animationDuration: '70s', animationDirection: 'reverse' }}/>
                </div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-900/30 rounded-full filter blur-3xl opacity-30 animate-aurora-float" style={{ animationDelay: '-5s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/30 rounded-full filter blur-3xl opacity-30 animate-aurora-float" style={{ animationDelay: '-10s', animationDirection: 'alternate-reverse' }} />

                <div className="relative z-10">
                    <CustomerHeader 
                        customerName={customerName}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        onLogout={onLogout}
                        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
                        onCartClick={() => setIsCartOpen(true)}
                        onNavigateToAccountSettings={onNavigateToAccountSettings}
                        onSetActiveTab={setActiveTab}
                    />
                    
                    <main className="container mx-auto px-6 py-8">
                        {/* Tab Navigation */}
                        <div className="mb-8 border-b border-gray-700">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                <button
                                    onClick={() => setActiveTab('browse')}
                                    className={`whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                                        ${activeTab === 'browse' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'}`
                                    }
                                >
                                   <PackageIcon className="mr-2 w-5 h-5" />
                                   {t('customerDashboard.tabs.browse')}
                                </button>
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className={`whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                                        ${activeTab === 'orders' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'}`
                                    }
                                >
                                    <OrderHistoryIcon className="mr-2 w-5 h-5"/>
                                    {t('customerDashboard.tabs.myOrders')}
                                </button>
                            </nav>
                        </div>

                        {activeTab === 'browse' && (
                            <>
                                {/* Filters and Sort Section */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <FilterIcon className="w-5 h-5 text-brand-primary" />
                                        <h3 className="text-lg font-semibold text-gray-200">{t('customerDashboard.filters.title')}</h3>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {CATEGORIES.map(category => (
                                            <button
                                                key={category}
                                                onClick={() => setActiveCategory(category)}
                                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 border-2
                                                    ${activeCategory === category 
                                                        ? 'bg-brand-primary text-brand-dark border-brand-primary' 
                                                        : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-brand-primary/50 hover:text-white'
                                                    }`
                                                }
                                            >
                                                {t(getCategoryTranslationKey(category))}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-3xl font-bold text-white text-shadow-md">
                                        {t(getCategoryTranslationKey(activeCategory))}
                                    </h1>
                                    <div className="relative">
                                        <label htmlFor="sort-by" className="sr-only">{t('customerDashboard.sort.title')}</label>
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                            <SortIcon className="w-5 h-5"/>
                                        </div>
                                        <select
                                            id="sort-by"
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                                            className="pl-10 pr-4 py-2 text-sm font-semibold bg-gray-800/50 border-2 border-gray-700 text-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary appearance-none"
                                        >
                                            <option value="newest">{t('customerDashboard.sort.newest')}</option>
                                            <option value="price-asc">{t('customerDashboard.sort.priceAsc')}</option>
                                            <option value="price-desc">{t('customerDashboard.sort.priceDesc')}</option>
                                        </select>
                                    </div>
                                </div>

                                {renderBrowseContent()}
                            </>
                        )}
                        {activeTab === 'orders' && (
                            <MyOrders orders={orders} />
                        )}
                    </main>
                </div>
            </div>
            <ProductPreviewModal 
                isOpen={!!selectedProduct}
                onClose={handleClosePreview}
                product={selectedProduct}
                onAddToCart={onAddToCart}
                onBuyNow={handleBuyNow}
            />
            <CartModal 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cart}
                onUpdateQuantity={onUpdateCartQuantity}
                onRemoveItem={onRemoveFromCart}
                onCheckout={handleCheckoutFromCart}
            />
            <CheckoutFlowModal
                isOpen={isCheckoutFlowOpen}
                onClose={() => setIsCheckoutFlowOpen(false)}
                items={checkoutItems}
                onCheckoutComplete={handleCheckoutComplete}
            />
        </>
    );
};

export default CustomerDashboard;