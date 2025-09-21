import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { AddProductModalHandles } from './AddProductModal';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { MicIcon } from './icons/MicIcon';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface VoiceAssistantProps {
    onOpenAddProductModal: () => void;
    onOpenDeleteProductModal: () => void;
    productCount: number;
    addProductModalRef: React.RefObject<AddProductModalHandles>;
}

export interface VoiceAssistantHandles {
    continueAddProductFlow: () => void;
    completeAddProductFlow: () => void;
}

type ConversationState = 'idle' | 'awaiting_command' | 'awaiting_image';

const VoiceAssistant = forwardRef<VoiceAssistantHandles, VoiceAssistantProps>(({ onOpenAddProductModal, onOpenDeleteProductModal, productCount, addProductModalRef }, ref) => {
    const { t, language } = useLanguage();
    
    const langMap: { [key: string]: string } = {
        en: 'en-US', hi: 'hi-IN', bn: 'bn-IN', ta: 'ta-IN',
        te: 'te-IN', mr: 'mr-IN', pa: 'pa-IN', gu: 'gu-IN', kn: 'kn-IN',
    };
    const recognitionLang = langMap[language as keyof typeof langMap] || language;
    
    const { speak, isSupported: isTTSSupported } = useTextToSpeech(recognitionLang);
    const [isListening, setIsListening] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [conversationState, setConversationState] = useState<ConversationState>('idle');

    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("Speech Recognition not supported.");
            return;
        }

        recognitionRef.current = new SpeechRecognition();
        const recognition = recognitionRef.current;
        recognition.continuous = false;
        recognition.lang = recognitionLang;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setIsListening(true);
            setStatusText(t('voiceAssistant.ui.listening'));
        };

        recognition.onend = () => {
            setIsListening(false);
            if(statusText === t('voiceAssistant.ui.listening')) {
                setStatusText('');
            }
        };
        
        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            setIsListening(false);
            setStatusText('');
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript.toLowerCase().trim();
            handleRecognitionResult(transcript);
        };
        
        recognition.onnomatch = () => {
             if (conversationState === 'awaiting_command') {
                speak(t('voiceAssistant.responses.commandNotFound'));
             }
        }

    }, [recognitionLang, t, speak, statusText, conversationState]);

    const handleRecognitionResult = (transcript: string) => {
        setStatusText(t('voiceAssistant.ui.processing'));
        
        if (conversationState === 'awaiting_command') {
            const addProductCommands = t('voiceAssistant.commands.addProduct').split(',').map(s => s.trim());
            const deleteProductCommands = t('voiceAssistant.commands.deleteProduct').split(',').map(s => s.trim());

            const isMatch = (commands: string[], transcript: string) => commands.some(command => {
                if (!command) return false;
                const keywords = command.split(' ').filter(kw => kw);
                if (keywords.length === 0) return false;
                
                const matchCount = keywords.reduce((acc, kw) => transcript.includes(kw) ? acc + 1 : acc, 0);
            
                if (keywords.length <= 2) {
                    return matchCount === keywords.length;
                } else {
                    const matchThreshold = Math.ceil(keywords.length * 0.60); 
                    return matchCount >= matchThreshold;
                }
            });

            if (isMatch(addProductCommands, transcript)) {
                setConversationState('awaiting_image');
                onOpenAddProductModal();
                speak(t('voiceAssistant.responses.addProduct.promptForImage'), () => {
                    setTimeout(() => addProductModalRef.current?.triggerImageUpload(), 500);
                });
            } else if (isMatch(deleteProductCommands, transcript)) {
                if (productCount > 0) {
                    // Fix: Call the correct prop to open the voice delete modal and remove the conflicting speak call.
                    onOpenDeleteProductModal();
                } else {
                    speak(t('voiceAssistant.responses.deleteProduct.noProducts'));
                }
                setConversationState('idle');
            } else {
                speak(t('voiceAssistant.responses.commandNotFound'));
                setConversationState('idle');
            }
        }

        setTimeout(() => setStatusText(''), 1000);
    };

    const startConversation = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            return;
        }
        setConversationState('awaiting_command');
        speak(t('voiceAssistant.responses.greeting'), () => {
            recognitionRef.current?.start();
        });
    };

    useImperativeHandle(ref, () => ({
        continueAddProductFlow: () => {
            if (conversationState === 'awaiting_image') {
                speak(t('voiceAssistant.responses.addProduct.generating'));
                addProductModalRef.current?.generateFromImages();
            }
        },
        completeAddProductFlow: () => {
            speak(t('voiceAssistant.responses.addProduct.promptForReview'));
            setConversationState('idle');
        }
    }));
    
    if (!recognitionRef.current || !isTTSSupported) return null;

    const renderButtonContent = () => {
        if (statusText === t('voiceAssistant.ui.listening') || isListening) {
             return (
                <>
                    <SpinnerIcon className="w-5 h-5 animate-spin" />
                    <span className="hidden sm:inline">{t('voiceAssistant.ui.listening')}</span>
                </>
             );
        }
         if (statusText === t('voiceAssistant.ui.processing')) {
             return (
                <>
                    <SpinnerIcon className="w-5 h-5 animate-spin" />
                    <span className="hidden sm:inline">{t('voiceAssistant.ui.processing')}</span>
                </>
             );
        }
        return (
            <>
                <MicIcon className="w-6 h-6" />
                <span className="hidden sm:inline">{t('voiceAssistant.ui.talkToAI')}</span>
            </>
        );
    }


    return (
        <button
            onClick={startConversation}
            title={t('voiceAssistant.ui.tooltip')}
            className="flex min-w-[150px] items-center justify-center gap-2 bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
        >
            {renderButtonContent()}
        </button>
    );
});

export default VoiceAssistant;
