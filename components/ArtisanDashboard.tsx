import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PlusIcon } from './icons/PlusIcon';
import { DollarSignIcon } from './icons/DollarSignIcon';
import { PackageIcon } from './icons/PackageIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { EditIcon } from './icons/EditIcon';
import AddProductModal, { AddProductModalHandles } from './AddProductModal';
import VoiceAssistant, { VoiceAssistantHandles } from './VoiceAssistant';
import { GlobeIcon } from './icons/GlobeIcon';
import { TrashIcon } from './icons/TrashIcon';
import ConfirmationDialog from './ConfirmationDialog';
import { EyeIcon } from './icons/EyeIcon';
import { MicIcon } from './icons/MicIcon';
import DeleteProductModal from './DeleteProductModal';
import ProductViewModal from './ProductViewModal';

interface ArtisanDashboardProps {
  artisanName: string;
  onLogout: () => void;
  products: Product[];
  onAddProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productName: string) => void;
}

export interface Product {
    id: number;
    createdAt: number;
    title: string;
    price: number;
    imageUrl: string;
    description: string;
    story: string;
    category: string;
    tags: string[];
}

const DashboardCard: React.FC<{title: string, children: React.ReactNode, className?: string, titleAddon?: React.ReactNode}> = ({ title, children, className, titleAddon }) => (
    <div className={`relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6 card-glow ${className}`}>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white text-shadow">{title}</h2>
            {titleAddon}
        </div>
        {children}
    </div>
);

const MetricCard: React.FC<{icon: React.ReactNode, label: string, value: string}> = ({ icon, label, value }) => (
    <div className="bg-black/20 p-4 rounded-lg flex items-center transform hover:-translate-y-1 transition-transform duration-300 shadow-lg relative overflow-hidden backdrop-blur-sm border border-white/5">
        <div className="absolute -inset-2 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex items-center">
            <div className="bg-brand-primary/10 text-brand-primary rounded-lg p-3 mr-4">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className="text-2xl font-bold text-white text-shadow">{value}</p>
            </div>
        </div>
    </div>
);

const ProductCard: React.FC<{product: Product, isDeletionMode: boolean, onDeleteClick: () => void, onViewClick: () => void, onEditClick: () => void, t: (key: string) => string}> = ({ product, isDeletionMode, onDeleteClick, onViewClick, onEditClick, t }) => (
     <div 
        className={`bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden group transform transition-all duration-300 relative border border-white/10
            ${isDeletionMode ? 
                'cursor-pointer ring-2 ring-red-500/80 hover:ring-red-500 shadow-lg shadow-red-500/20 animate-pulse' : 
                'hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/10'
            }`
        }
        onClick={isDeletionMode ? onDeleteClick : undefined}
        role={isDeletionMode ? 'button' : undefined}
        tabIndex={isDeletionMode ? 0 : -1}
        onKeyDown={isDeletionMode ? (e) => (e.key === 'Enter' || e.key === ' ') && onDeleteClick() : undefined}
        aria-label={isDeletionMode ? `Delete ${product.title}` : undefined}
    >
        <div className="relative aspect-[4/3]">
            <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                 <div className="flex items-center justify-end gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {!isDeletionMode && (
                        <>
                            <button onClick={onViewClick} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"><EyeIcon className="w-5 h-5"/></button>
                            <button onClick={onEditClick} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"><EditIcon className="w-5 h-5"/></button>
                        </>
                    )}
                </div>
            </div>

            {isDeletionMode && (
                <div className="absolute inset-0 bg-red-900/80 backdrop-blur-sm flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <TrashIcon className="w-10 h-10 text-red-300 mx-auto"/>
                        <p className="font-bold text-red-200 mt-2 text-shadow">{t('common.delete')}</p>
                    </div>
                </div>
            )}
        </div>
        <div className="p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold truncate">{product.title}</h3>
            <p className="text-brand-primary font-bold mt-1 text-lg">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
    </div>
);


const ArtisanDashboard: React.FC<ArtisanDashboardProps> = ({ artisanName, onLogout, products, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
    const { t, language, setLanguage, languages } = useLanguage();
    const [story, setStory] = useState('');
    const [isEditingStory, setIsEditingStory] = useState(false);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isDeletionMode, setIsDeletionMode] = useState(false);
    const [productToConfirmDelete, setProductToConfirmDelete] = useState<Product | null>(null);
    const [productToView, setProductToView] = useState<Product | null>(null);
    const [productToEdit, setProductToEdit] = useState<Product | null>(null);

    const addProductModalRef = useRef<AddProductModalHandles>(null);
    const voiceAssistantRef = useRef<VoiceAssistantHandles>(null);
    const langMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const formatNumber = (num: number) => {
        try {
            return new Intl.NumberFormat('en-IN').format(num);
        } catch (e) {
            return num.toString();
        }
    }

    const getGreeting = () => {
        const hour = new Date().getHours();
        const name = artisanName.split(' ')[0];
        if (hour >= 5 && hour < 12) {
            return t('dashboard.greeting.morning', { name });
        }
        if (hour >= 12 && hour < 17) {
            return t('dashboard.greeting.afternoon', { name });
        }
        return t('dashboard.greeting.evening', { name });
    };

    const handleAddProduct = (newProductData: Omit<Product, 'id' | 'createdAt'>) => {
        onAddProduct(newProductData);
        setIsAddProductModalOpen(false);
    }
    
    const handleUpdateProduct = (updatedProduct: Product) => {
        onUpdateProduct(updatedProduct);
        setProductToEdit(null);
    };

    const handleEnterDeletionMode = () => {
        if (products.length > 0) {
            setIsDeletionMode(true);
        }
    };
    
    const handleOpenDeleteModal = () => {
        setIsDeletionMode(false);
        if (products.length > 0) {
            setIsDeleteModalOpen(true);
        }
    };

    const handleCancelDeletionMode = () => {
        setIsDeletionMode(false);
    };

    const handleConfirmDelete = () => {
        if (productToConfirmDelete) {
            onDeleteProduct(productToConfirmDelete.title);
        }
        setProductToConfirmDelete(null);
        setIsDeletionMode(false);
    };


    return (
        <>
            <div className="min-h-screen bg-brand-dark overflow-hidden relative text-white">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '2rem 2rem' }} />
                <div className="absolute inset-0 z-0">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-900 to-transparent rounded-full filter blur-3xl animate-background-rotate" style={{ animationDuration: '60s' }}/>
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-amber-900 to-transparent rounded-full filter blur-3xl animate-background-rotate" style={{ animationDuration: '70s', animationDirection: 'reverse' }}/>
                </div>
                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-900/30 rounded-full filter blur-3xl opacity-30 animate-aurora-float" style={{ animationDelay: '-5s' }} />
                 <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/30 rounded-full filter blur-3xl opacity-30 animate-aurora-float" style={{ animationDelay: '-10s', animationDirection: 'alternate-reverse' }} />


                <div className="relative z-10 container mx-auto p-4 sm:p-6 lg:p-8">
                    {/* Header */}
                    <header className="relative z-20 flex flex-col md:flex-row justify-between md:items-start mb-10 gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold font-serif text-shadow-md text-white">
                                {getGreeting()}
                            </h1>
                            <p className="text-gray-400 mt-1">{t('dashboard.subtitle')}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <VoiceAssistant 
                                ref={voiceAssistantRef}
                                onOpenAddProductModal={() => setIsAddProductModalOpen(true)}
                                onOpenDeleteProductModal={handleOpenDeleteModal}
                                productCount={products.length}
                                addProductModalRef={addProductModalRef}
                            />
                            <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-lg">
                                <div ref={langMenuRef} className="relative">
                                    <button
                                      onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                      className="flex items-center gap-2 text-gray-300 font-bold py-2 px-4 rounded-full text-sm hover:text-white transition-colors duration-300"
                                      aria-haspopup="true"
                                      aria-expanded={isLangMenuOpen}
                                    >
                                      <GlobeIcon className="w-5 h-5" />
                                      <span>{languages[language].nativeName}</span>
                                    </button>
                                    {isLangMenuOpen && (
                                      <div className="absolute top-full right-0 mt-2 w-32 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-md shadow-lg py-1 animate-fade-in-fast z-50">
                                        {Object.keys(languages).map((langCode) => (
                                          <a
                                            key={langCode}
                                            href="#"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              setLanguage(langCode);
                                              setIsLangMenuOpen(false);
                                            }}
                                            className={`block px-4 py-2 text-sm ${language === langCode ? 'text-brand-primary' : 'text-gray-300'} hover:bg-gray-700`}
                                          >
                                            {languages[langCode].nativeName}
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                </div>
                                <button 
                                    onClick={onLogout}
                                    className="text-gray-300 font-bold py-2 px-4 rounded-full text-sm hover:text-white hover:bg-white/10 transition-colors duration-300"
                                >
                                    {t('dashboard.logout')}
                                </button>
                            </div>
                        </div>
                    </header>
                    
                     {isDeletionMode && (
                        <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-8 flex justify-between items-center animate-fade-in-fast backdrop-blur-sm">
                            <p className="font-semibold text-red-200">{t('dashboard.selectionBanner.title')}</p>
                            <button onClick={handleCancelDeletionMode} className="bg-red-700 text-white font-bold py-1 px-4 rounded-full text-sm hover:bg-red-600 transition-colors">
                                {t('dashboard.selectionBanner.cancel')}
                            </button>
                        </div>
                    )}

                    {/* Main Content Grid */}
                    <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 space-y-8">
                            <DashboardCard title={t('dashboard.sales.title')}>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <MetricCard icon={<DollarSignIcon className="w-6 h-6" />} label={t('dashboard.sales.totalSales')} value={`₹${formatNumber(0)}`} />
                                    <MetricCard icon={<ShoppingCartIcon className="w-6 h-6" />} label={t('dashboard.sales.orders')} value={formatNumber(0)} />
                                    <MetricCard icon={<PackageIcon className="w-6 h-6" />} label={t('dashboard.sales.productsSold')} value={formatNumber(0)} />
                                </div>
                            </DashboardCard>

                            <DashboardCard 
                                title={t('dashboard.products.title')}
                                titleAddon={
                                    products.length > 0 && !isDeletionMode && (
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={handleEnterDeletionMode}
                                                className="flex items-center gap-2 bg-slate-700 text-white font-bold py-1.5 px-4 rounded-full hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 text-sm"
                                            >
                                                <TrashIcon className="w-4 h-4" />
                                                <span>{t('dashboard.deleteProduct')}</span>
                                            </button>
                                            <button 
                                                onClick={() => setIsAddProductModalOpen(true)}
                                                className="flex items-center gap-2 bg-brand-primary/10 text-brand-primary font-bold py-1.5 px-4 rounded-full hover:bg-brand-primary/20 transition-all duration-300 transform hover:scale-105 text-sm"
                                            >
                                                <PlusIcon className="w-4 h-4" />
                                                <span>{t('dashboard.addNewProduct')}</span>
                                            </button>
                                        </div>
                                    )
                                }
                            >
                                {products.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {products.map(p => <ProductCard 
                                                key={p.id} 
                                                product={p}
                                                isDeletionMode={isDeletionMode}
                                                onDeleteClick={() => setProductToConfirmDelete(p)}
                                                onViewClick={() => setProductToView(p)}
                                                onEditClick={() => setProductToEdit(p)}
                                                t={t}
                                            />)}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 border-2 border-dashed border-gray-700 rounded-lg">
                                        <p className="text-gray-400">{t('dashboard.products.emptyState')}</p>
                                        <button 
                                            onClick={() => setIsAddProductModalOpen(true)}
                                            className="mt-4 bg-brand-primary/10 text-brand-primary font-semibold py-2 px-5 rounded-full hover:bg-brand-primary/20 transition-colors flex items-center gap-2 mx-auto"
                                        >
                                            <PlusIcon className="w-5 h-5" />
                                            {t('dashboard.addNewProduct')}
                                        </button>
                                    </div>
                                )}
                            </DashboardCard>
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-4">
                            <DashboardCard title={t('dashboard.story.title')} className="h-full">
                                <div className="relative h-full flex flex-col">
                                    <textarea
                                        value={story}
                                        onChange={(e) => setStory(e.target.value)}
                                        readOnly={!isEditingStory}
                                        placeholder={t('dashboard.story.placeholder')}
                                        className={`w-full flex-grow bg-transparent border-2 rounded-md p-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 resize-none transition-colors duration-300 min-h-[200px] lg:min-h-0 ${isEditingStory ? 'border-brand-primary/50 ring-brand-primary/80 bg-black/30' : 'border-transparent'}`}
                                    />
                                     <button
                                        onClick={() => setIsEditingStory(!isEditingStory)}
                                        className="absolute top-0 right-0 bg-gray-900/50 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                                        aria-label={isEditingStory ? t('common.save') : t('common.edit')}
                                    >
                                        <EditIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </DashboardCard>
                        </div>
                    </main>
                </div>
            </div>
            <ProductViewModal
                isOpen={!!productToView}
                onClose={() => setProductToView(null)}
                product={productToView}
            />
            <AddProductModal 
                ref={addProductModalRef}
                isOpen={isAddProductModalOpen || !!productToEdit}
                onClose={() => {
                    setIsAddProductModalOpen(false);
                    setProductToEdit(null);
                }}
                onProductAdded={handleAddProduct}
                onProductUpdated={handleUpdateProduct}
                productToEdit={productToEdit}
                onImageUploaded={() => voiceAssistantRef.current?.continueAddProductFlow()}
                onGenerationComplete={() => voiceAssistantRef.current?.completeAddProductFlow()}
            />
            <DeleteProductModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                products={products}
                onDeleteProduct={onDeleteProduct}
            />
             <ConfirmationDialog
                isOpen={!!productToConfirmDelete}
                onClose={() => setProductToConfirmDelete(null)}
                onConfirm={handleConfirmDelete}
                title={t('deleteConfirmation.title')}
                message={t('deleteConfirmation.message', { productName: productToConfirmDelete?.title || '' })}
                confirmText={t('deleteConfirmation.confirmButton')}
                cancelText={t('deleteConfirmation.cancelButton')}
            />
        </>
    );
}

export default ArtisanDashboard;