import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { Product } from './ArtisanDashboard';
import { MicIcon } from './icons/MicIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XCircleIcon } from './icons/XCircleIcon';
import { XIcon } from './icons/XIcon';

// Extend global Window interface for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface DeleteProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onDeleteProduct: (productName: string) => void;
}

type DeletionState = 'listening_for_name' | 'confirming_deletion' | 'processing' | 'success' | 'cancelled' | 'not_found';

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ isOpen, onClose, products, onDeleteProduct }) => {
    const { t, language } = useLanguage();
    const langMap: { [key: string]: string } = { en: 'en-US', hi: 'hi-IN', bn: 'bn-IN', ta: 'ta-IN', te: 'te-IN', mr: 'mr-IN', pa: 'pa-IN', gu: 'gu-IN', kn: 'kn-IN' };
    const recognitionLang = langMap[language as keyof typeof langMap] || language;
    const { speak } = useTextToSpeech(recognitionLang);

    const [state, setState] = useState<DeletionState>('listening_for_name');
    const [statusText, setStatusText] = useState('');
    const [productToDelete, setProductToDelete] = useState<Product | null>(null);
    const recognitionRef = useRef<any>(null);
    // Fix: Initialize useRef with a null value to correct the type.
    const onResultCallbackRef = useRef<((transcript: string) => void) | null>(null);

    const handleRecognitionResult = useCallback((transcript: string) => {
        setState('processing');
        setStatusText(t('voiceAssistant.ui.processing'));

        const findBestProductMatch = (name: string): Product | null => {
            if (!name) return null;
            const lowerCaseName = name.toLowerCase().trim();
            if (!lowerCaseName) return null;
            const exactMatch = products.find(p => p.title.toLowerCase() === lowerCaseName);
            if (exactMatch) return exactMatch;
            const startsWithMatch = products.find(p => p.title.toLowerCase().startsWith(lowerCaseName));
            if (startsWithMatch) return startsWithMatch;
            return products.find(p => p.title.toLowerCase().includes(lowerCaseName)) || null;
        };

        if (state === 'listening_for_name') {
            const foundProduct = findBestProductMatch(transcript);
            if (foundProduct) {
                setProductToDelete(foundProduct);
                setState('confirming_deletion');
                const confirmText = t('deleteConfirmation.message', { productName: foundProduct.title });
                setStatusText(confirmText);
                speak(confirmText, () => {
                    if (recognitionRef.current) recognitionRef.current.start();
                });
            } else {
                setState('not_found');
                const notFoundText = t('voiceAssistant.responses.deleteProduct.productNotFound');
                setStatusText(notFoundText);
                speak(notFoundText, () => {
                    setState('listening_for_name');
                    setStatusText(t('deleteProductModal.prompt'));
                    if (recognitionRef.current) recognitionRef.current.start();
                });
            }
        } else if (state === 'confirming_deletion' && productToDelete) {
            const yesWords = t('voiceAssistant.responses.confirmation.yes').split(',');
            const noWords = t('voiceAssistant.responses.confirmation.no').split(',');

            if (yesWords.some(word => transcript.includes(word.trim()))) {
                onDeleteProduct(productToDelete.title);
                setState('success');
                setStatusText(t('deleteProductModal.deleted'));
                speak(t('voiceAssistant.responses.deleteProduct.deleted', { productName: productToDelete.title }), () => {
                    setTimeout(onClose, 2000);
                });
            } else if (noWords.some(word => transcript.includes(word.trim()))) {
                setState('cancelled');
                setStatusText(t('deleteProductModal.cancelled'));
                speak(t('voiceAssistant.responses.deleteProduct.cancelled'), () => {
                    setTimeout(onClose, 2000);
                });
            } else {
                 setState('confirming_deletion');
                 const confirmText = t('deleteConfirmation.message', { productName: productToDelete.title });
                 setStatusText(confirmText);
                 speak(confirmText, () => {
                    if (recognitionRef.current) recognitionRef.current.start();
                });
            }
        }
    }, [state, productToDelete, products, onDeleteProduct, t, speak, onClose]);

    useEffect(() => {
        // Keep the ref updated with the latest callback to avoid stale closures.
        onResultCallbackRef.current = handleRecognitionResult;
    }, [handleRecognitionResult]);

    // Initialize Speech Recognition only once.
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("Speech recognition not supported.");
            return;
        }

        if (!recognitionRef.current) {
            recognitionRef.current = new SpeechRecognition();
            const recognition = recognitionRef.current;
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onresult = (event: any) => {
                if (onResultCallbackRef.current) {
                    onResultCallbackRef.current(event.results[0][0].transcript.toLowerCase().trim());
                }
            };
            
            recognition.onerror = (event: any) => console.error("Speech recognition error:", event.error);
        }
    }, []);

    // Update recognition language when it changes.
    useEffect(() => {
        if (recognitionRef.current) {
            recognitionRef.current.lang = recognitionLang;
        }
    }, [recognitionLang]);
    
    const startConversation = useCallback(() => {
        if (products.length === 0) {
            // Fix: Changed setTimeout(onClose(), 2000) to setTimeout(onClose, 2000) to pass the function reference instead of calling it immediately.
            speak(t('voiceAssistant.responses.deleteProduct.noProducts'), () => setTimeout(onClose, 2000));
            return;
        }
        setState('listening_for_name');
        const prompt = t('voiceAssistant.responses.deleteProduct.promptForName');
        setStatusText(t('deleteProductModal.prompt'));
        speak(prompt, () => {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.start();
                } catch (e) {
                    // Ignore error if it's already started.
                }
            }
        });
    }, [products, t, speak, onClose]);

    // Main effect to control the modal's lifecycle.
    useEffect(() => {
        if (isOpen) {
            startConversation();
        } else {
            // Stop recognition and reset state on close.
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
            setTimeout(() => {
                setState('listening_for_name');
                setStatusText('');
                setProductToDelete(null);
            }, 300);
        }
    }, [isOpen, startConversation]);

    const renderStateIcon = () => {
        switch (state) {
            case 'listening_for_name':
            case 'confirming_deletion':
                return <MicIcon className="w-20 h-20 text-brand-primary animate-pulse" />;
            case 'processing':
            case 'not_found':
                return <SpinnerIcon className="w-20 h-20 text-brand-primary animate-spin" />;
            case 'success':
                return <CheckCircleIcon className="w-20 h-20 text-green-400" />;
            case 'cancelled':
                return <XCircleIcon className="w-20 h-20 text-red-500" />;
            default:
                return null;
        }
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-lg w-full mx-4 relative transform animate-scale-in border border-gray-700 text-center" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label={t('common.close')}>
                   <XIcon className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-white mb-6">{t('deleteProductModal.title')}</h2>
                
                <div className="flex flex-col items-center justify-center h-48">
                    <div className="mb-6">
                        {renderStateIcon()}
                    </div>
                    <p className="text-gray-300 text-lg h-10">{statusText}</p>
                </div>

            </div>
        </div>,
        document.body
    );
};

export default DeleteProductModal;