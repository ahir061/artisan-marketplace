import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI, Type } from "@google/genai";
import { fileToBase64 } from '../lib/imageUtils';
import { UploadIcon } from './icons/UploadIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { TagIcon } from './icons/TagIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XIcon } from './icons/XIcon';
import { Product } from './ArtisanDashboard';


interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductAdded: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  onProductUpdated: (product: Product) => void;
  productToEdit?: Product | null;
  onImageUploaded: () => void;
  onGenerationComplete: () => void;
}

export interface AddProductModalHandles {
    triggerImageUpload: () => void;
    generateFromImages: () => void;
}

interface AIGeneratedContent {
    title: string;
    description: string;
    story: string;
    suggestedPrice: number;
    category: string;
    tags: string[];
}

type Step = 'upload' | 'generating' | 'review';

const AddProductModal = forwardRef<AddProductModalHandles, AddProductModalProps>(({ isOpen, onClose, onProductAdded, onProductUpdated, productToEdit, onImageUploaded, onGenerationComplete }, ref) => {
    const { t } = useLanguage();
    
    // State management
    const [step, setStep] = useState<Step>('upload');
    const [productImages, setProductImages] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [aiContent, setAiContent] = useState<AIGeneratedContent | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isPublished, setIsPublished] = useState(false);

    // Refs
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
        triggerImageUpload: () => {
            fileInputRef.current?.click();
        },
        generateFromImages: () => {
            handleGenerate();
        }
    }));

    // Effect to handle modal opening for add vs. edit mode
    useEffect(() => {
        if (isOpen) {
            if (productToEdit) {
                // Pre-fill form for editing
                setStep('review');
                setAiContent({
                    title: productToEdit.title,
                    description: productToEdit.description,
                    story: productToEdit.story,
                    suggestedPrice: productToEdit.price,
                    category: productToEdit.category,
                    tags: productToEdit.tags,
                });
                setProductImages([]); // Reset any staged files
            }
        } else {
            // Delay reset to allow closing animation
            setTimeout(() => {
                setStep('upload');
                setProductImages([]);
                setPreviewUrls([]);
                setAiContent(null);
                setError(null);
                setIsPublished(false);
            }, 300);
        }
    }, [isOpen, productToEdit]);


    // Handle Image Previews using persistent base64 URLs
    useEffect(() => {
        if (!isOpen) return;

        let isCancelled = false;

        const generateBase64Previews = async () => {
            if (productImages.length > 0) {
                const urls = await Promise.all(
                    productImages.map(file => {
                        return new Promise<string>((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => resolve(reader.result as string);
                            reader.onerror = error => reject(error);
                            reader.readAsDataURL(file);
                        });
                    })
                );
                if (!isCancelled) {
                    setPreviewUrls(urls);
                }
            } else if (productToEdit?.imageUrl) {
                setPreviewUrls([productToEdit.imageUrl]);
            } else {
                setPreviewUrls([]);
            }
        };

        generateBase64Previews();

        return () => {
            isCancelled = true;
        };
    }, [productImages, productToEdit, isOpen]);


    const handleFileSelect = (files: FileList | null) => {
        if (files) {
            const newFiles = Array.from(files).filter(file =>
                ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)
            );
            
            const wasEmpty = productImages.length === 0;

            const combinedFiles = [...productImages, ...newFiles].slice(0, 5);
            setProductImages(combinedFiles);
            setError(null);

            if (wasEmpty && combinedFiles.length > 0) {
                onImageUploaded(); // Notify parent for voice flow
            }
        }
    };
    
    const handleRemoveImage = (indexToRemove: number) => {
        setProductImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleGenerate = async () => {
        if (productImages.length === 0) {
            setError(t('dashboard.addProductModal.errors.noImage'));
            return;
        }

        setError(null);
        setStep('generating');

        try {
            const imageParts = await Promise.all(
                productImages.map(async (file) => {
                    const base64Data = await fileToBase64(file);
                    return { inlineData: { mimeType: file.type, data: base64Data } };
                })
            );

            const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY as string });
            
            const prompt = `You are an expert e-commerce assistant for local Indian artisans. Based on these images of a handmade product, generate product details.
            - The product is handmade.
            - Suggest one category from this list: ["Pottery", "Art & Paintings", "Clothing & Textiles", "Jewellery"].
            - Respond ONLY in JSON format according to the schema.
            - Price should be a number in INR.
            - The story should be a brief, engaging paragraph about the craft.
            - Generate 3-5 relevant tags.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: { parts: [...imageParts, { text: prompt }] },
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING, description: "A catchy product title, max 60 characters." },
                            description: { type: Type.STRING, description: "A detailed product description. Around 50-100 words." },
                            story: { type: Type.STRING, description: "A short, engaging story about the product's cultural heritage." },
                            suggestedPrice: { type: Type.NUMBER, description: "A fair market price suggestion in INR." },
                            category: { type: Type.STRING, description: "The most relevant category from the provided list." },
                            tags: { type: Type.ARRAY, items: { type: Type.STRING } }
                        },
                        required: ["title", "description", "story", "suggestedPrice", "category", "tags"]
                    },
                }
            });

            const resultJson = JSON.parse(response.text);
            setAiContent(resultJson);
            setStep('review');
            onGenerationComplete();

        } catch (error) {
            console.error("AI generation failed:", error);
            setError(t('dashboard.addProductModal.errors.generationFailed'));
            setStep('upload');
        }
    };
    
    const handlePublish = () => {
        if (aiContent && (previewUrls.length > 0 || productToEdit)) {
             const finalData = {
                title: aiContent.title,
                price: aiContent.suggestedPrice,
                description: aiContent.description,
                story: aiContent.story,
                category: aiContent.category,
                tags: aiContent.tags,
                imageUrl: previewUrls[0] || productToEdit.imageUrl,
            };
            
            if (productToEdit) {
                onProductUpdated({ ...productToEdit, ...finalData });
            } else {
                onProductAdded(finalData);
            }

            setIsPublished(true);
            setTimeout(onClose, 1500); // Close after showing success message
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 'generating':
                return (
                    <div className="text-center py-20">
                        <SpinnerIcon className="w-16 h-16 text-brand-primary animate-spin mx-auto" />
                        <h3 className="text-xl font-semibold mt-4 text-white">{t('dashboard.addProductModal.step2.title')}</h3>
                        <p className="text-gray-400 mt-2">{t('dashboard.addProductModal.step2.message')}</p>
                    </div>
                );
            case 'review':
                if (!aiContent) return null;
                return (
                    <>
                        <h3 className="text-xl font-bold text-white mb-1">{t('dashboard.addProductModal.step3.title')}</h3>
                        <p className="text-gray-400 mb-6">{t('dashboard.addProductModal.step3.subtitle')}</p>
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                           <InputField label={t('dashboard.addProductModal.step3.labels.title')} value={aiContent.title} onChange={e => setAiContent({...aiContent, title: e.target.value})} />
                           <TextareaField label={t('dashboard.addProductModal.step3.labels.description')} value={aiContent.description} onChange={e => setAiContent({...aiContent, description: e.target.value})} rows={4}/>
                           <TextareaField label={t('dashboard.addProductModal.step3.labels.story')} value={aiContent.story} onChange={e => setAiContent({...aiContent, story: e.target.value})} rows={3}/>
                           <InputField type="number" label={t('dashboard.addProductModal.step3.labels.price')} value={aiContent.suggestedPrice.toString()} onChange={e => setAiContent({...aiContent, suggestedPrice: Number(e.target.value)})} />
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">{t('dashboard.addProductModal.step3.labels.tags')}</label>
                                <div className="flex flex-wrap gap-2">
                                    {aiContent.tags.map((tag, i) => (
                                        <span key={i} className="bg-brand-primary/10 text-brand-primary text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                                           <TagIcon className="w-4 h-4" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'upload':
            default:
                return (
                    <>
                        <h3 className="text-xl font-bold text-white mb-2">{t('dashboard.addProductModal.step1.title')}</h3>
                        <p className="text-gray-400 mb-6 text-sm">{t('dashboard.addProductModal.step1.uploadLabel')}</p>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                            {previewUrls.map((url, index) => (
                                <div key={index} className="relative aspect-square group">
                                    <img src={url} alt={`Product preview ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                                    <button
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-opacity opacity-0 group-hover:opacity-100"
                                        aria-label={`Remove image ${index + 1}`}
                                    >
                                        <XIcon className="w-4 h-4" />
                                    </button>
                                    {index === 0 && (
                                        <div className="absolute bottom-0 left-0 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-br-lg rounded-tl-lg">MAIN</div>
                                    )}
                                </div>
                            ))}
                            {previewUrls.length < 5 && (
                                <div 
                                    onClick={() => fileInputRef.current?.click()} 
                                    className="cursor-pointer aspect-square bg-gray-700/50 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center text-center hover:border-brand-primary transition-colors text-gray-400"
                                >
                                    <input 
                                        ref={fileInputRef} 
                                        type="file" 
                                        accept="image/png, image/jpeg, image/webp" 
                                        multiple
                                        onChange={e => handleFileSelect(e.target.files)} 
                                        className="hidden" 
                                    />
                                    <UploadIcon className="w-8 h-8" />
                                    <p className="mt-1 text-xs font-semibold">Add Photo</p>
                                </div>
                            )}
                        </div>
                    </>
                );
        }
    };
    
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-3xl w-full mx-4 relative transform animate-scale-in border border-gray-700" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label={t('common.close')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h2 className="text-2xl font-bold text-center text-white mb-4">{productToEdit ? t('common.edit') + ' Product' : t('dashboard.addProductModal.title')}</h2>
                
                {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
                
                {renderStepContent()}

                <div className="mt-8 flex justify-end gap-4">
                    {step === 'upload' && <>
                        <button onClick={onClose} className="py-2 px-5 rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors">{t('common.cancel')}</button>
                        <button onClick={handleGenerate} disabled={productImages.length === 0} className="py-2 px-5 rounded-full text-brand-dark bg-brand-primary hover:bg-amber-400 font-semibold transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">{t('dashboard.addProductModal.step1.generate')}</button>
                    </>}
                    {step === 'review' && (isPublished ? 
                        <div className="w-full text-center text-green-400 font-semibold flex items-center justify-center gap-2">
                           <CheckCircleIcon className="w-6 h-6" />
                           {t('dashboard.addProductModal.step3.productAddedSuccess')}
                        </div>
                        :
                        <>
                           <button onClick={onClose} className="py-2 px-5 rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors">{t('common.cancel')}</button>
                           <button onClick={handlePublish} className="py-2 px-6 rounded-full text-brand-dark bg-brand-primary hover:bg-amber-400 font-semibold transition-colors">
                               {productToEdit ? t('common.save') : t('common.publish')}
                           </button>
                        </>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
});


// Helper components for input fields
const InputField = ({ label, value, onChange, type = 'text' }: { label: string, value: string | number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type?: string }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <input type={type} value={value} onChange={onChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
    </div>
);

const TextareaField = ({ label, value, onChange, rows }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, rows: number }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} rows={rows} className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-y" />
    </div>
);

export default AddProductModal;