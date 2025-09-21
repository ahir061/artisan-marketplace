
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { MicIcon } from './icons/MicIcon';
import { LocationMarkerIcon } from './icons/LocationMarkerIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import IdUploadModal from './IdUploadModal';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { GoogleGenAI, Type } from "@google/genai";
import { fileToBase64 } from '../lib/imageUtils';
import { GlobeIcon } from './icons/GlobeIcon';
import SuccessDialog from './SuccessDialog';


// Fix for TypeScript error: Property 'SpeechRecognition' does not exist on type 'Window & typeof globalThis'.
// This extends the global Window interface to include properties for the Web Speech API.
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface ArtisanSignupProps {
  onBack: () => void;
  onStoreCreated: (name: string) => void;
  onNavigateToSignIn: () => void;
}

interface FormData {
    fullName: string;
    location: string;
    idType: string;
    language: string;
    categories: Set<string>;
    idFile: File | null;
}

type FormErrors = Partial<Record<keyof Omit<FormData, 'language' | 'idFile' | 'categories'> | 'categories' | 'idVerification', string>>;


const InputField: React.FC<{ 
    id: string, 
    label: string, 
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string, 
    placeholder?: string,
    endAdornment?: React.ReactNode,
    readOnly?: boolean,
    error?: string,
}> = ({ id, label, value, onChange, type = 'text', placeholder, endAdornment, readOnly = false, error }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
                className={`w-full bg-gray-700 border rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2  ${error ? 'border-red-500 ring-red-500' : 'border-gray-600 focus:ring-brand-primary focus:border-brand-primary'} ${endAdornment ? 'pr-10' : ''} ${readOnly ? 'cursor-default' : ''}`}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {endAdornment && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {endAdornment}
                </div>
            )}
        </div>
        {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
);


const SelectField: React.FC<{ 
    id: string, 
    label: string, 
    value: string, 
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    children: React.ReactNode,
    error?: string,
}> = ({ id, label, value, onChange, children, error }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
        </label>
        <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className={`w-full bg-gray-700 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 appearance-none bg-no-repeat bg-right-in-select ${error ? 'border-red-500 ring-red-500' : 'border-gray-600 focus:ring-brand-primary focus:border-brand-primary'}`}
             style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: `right 0.5rem center`,
                backgroundSize: `1.5em 1.5em`,
            }}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
        >
            {children}
        </select>
         {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
);

const CheckboxField: React.FC<{ id: string, label: string, checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ id, label, checked, onChange }) => (
    <div className="relative flex items-start">
        <div className="flex items-center h-5">
            <input
                id={id}
                name={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="focus:ring-brand-primary h-4 w-4 text-brand-primary bg-gray-700 border-gray-600 rounded"
            />
        </div>
        <div className="ml-3 text-sm">
            <label htmlFor={id} className="font-medium text-gray-300">
                {label}
            </label>
        </div>
    </div>
);


const ArtisanSignup: React.FC<ArtisanSignupProps> = ({ onBack, onStoreCreated, onNavigateToSignIn }) => {
    const { t, languages, language, setLanguage } = useLanguage();
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        location: '',
        idType: '',
        language: language,
        categories: new Set(),
        idFile: null,
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isListening, setIsListening] = useState(false);
    const [isDetectingLocation, setIsDetectingLocation] = useState(false);
    const [isIdUploadModalOpen, setIsIdUploadModalOpen] = useState(false);
    const [extractedIdNumber, setExtractedIdNumber] = useState<string | null>(null);
    const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'error'>('idle');
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);


    const recognitionRef = useRef<any>(null);
    const langMenuRef = useRef<HTMLDivElement>(null);
    
    const handleDetectLocation = useCallback(async () => {
        if (!navigator.geolocation) {
            // Silently fail if not supported, user can enter manually.
            return;
        }

        setIsDetectingLocation(true);

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
                if (!response.ok) throw new Error('Failed to fetch address');
                
                const data = await response.json();
                const address = data.address;
                const city = address.city || address.town || address.village || address.county;
                const state = address.state;

                if (city && state) {
                    const newLocation = `${city}, ${state}`;
                    setFormData(prev => ({ ...prev, location: newLocation }));
                    if (errors.location) {
                        setErrors(prev => ({...prev, location: undefined}));
                    }
                }
            } catch (error) {
                console.error("Error reverse geocoding:", error);
            } finally {
                setIsDetectingLocation(false);
            }
        }, (error) => {
            console.error("Error getting location:", error.message);
            setIsDetectingLocation(false);
        });
    }, [errors.location]);


    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            const recognition = recognitionRef.current;
            recognition.continuous = false;
            recognition.lang = formData.language;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setFormData(prev => ({...prev, fullName: transcript}));
                if (errors.fullName) {
                    setErrors(prev => ({ ...prev, fullName: undefined }));
                }
                setIsListening(false);
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
            };
            
            recognition.onend = () => {
                setIsListening(false);
            };
        }
    }, [formData.language, errors.fullName]);

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

    useEffect(() => {
        handleDetectLocation();
    }, [handleDetectLocation]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        setFormData(prev => {
            const newCategories = new Set(prev.categories);
            if (checked) {
                newCategories.add(id);
            } else {
                newCategories.delete(id);
            }
            return { ...prev, categories: newCategories };
        });
        if (errors.categories) {
            setErrors(prev => ({ ...prev, categories: undefined }));
        }
    };

    const handleMicClick = () => {
        if (!recognitionRef.current) return;

        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const handleIdTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFormData(prev => ({ ...prev, idType: value, idFile: null, fullName: '' })); // Reset name on new ID type
        setExtractedIdNumber(null);
        setVerificationStatus('idle');
         if (errors.idType || errors.idVerification) {
            setErrors(prev => ({ ...prev, idType: undefined, idVerification: undefined }));
        }
        if (value) {
            setIsIdUploadModalOpen(true);
        }
    };

    const verifyIdCard = async (file: File, idType: string) => {
        setVerificationStatus('verifying');

        const verificationConfigs = {
            aadhar: {
                prompt: `Analyze this image of an Indian Aadhaar card.
                1. Confirm if this is a valid Indian Aadhaar card.
                2. Extract the full name of the person from the card.
                3. Extract the 12-digit Aadhaar number, containing only digits.
                Respond in JSON format according to the provided schema. The name and number are required.`,
                schema: {
                    type: Type.OBJECT,
                    properties: {
                        isAadharCard: { type: Type.BOOLEAN },
                        extractedName: { type: Type.STRING },
                        aadharNumber: { type: Type.STRING }
                    },
                    required: ["isAadharCard", "extractedName", "aadharNumber"]
                },
                validator: (json: any) => {
                    if (!json.isAadharCard || !json.aadharNumber || !/^\d{12}$/.test(json.aadharNumber) || !json.extractedName) {
                        return { isValid: false, errorType: 'INVALID_CARD' };
                    }
                    return { isValid: true, idNumber: json.aadharNumber, name: json.extractedName };
                }
            },
            ration: {
                prompt: `Analyze this image of an Indian Ration Card.
                1. Confirm this is a valid Indian Ration Card.
                2. Extract the full name of the Head of Family.
                3. Extract the Ration Card Number.
                Respond in JSON format according to the provided schema. The name and number are required.`,
                schema: {
                    type: Type.OBJECT,
                    properties: {
                        isRationCard: { type: Type.BOOLEAN },
                        extractedName: { type: Type.STRING },
                        rationCardNumber: { type: Type.STRING }
                    },
                    required: ["isRationCard", "extractedName", "rationCardNumber"]
                },
                validator: (json: any) => {
                     if (!json.isRationCard || !json.rationCardNumber || !json.extractedName) {
                        return { isValid: false, errorType: 'INVALID_CARD' };
                    }
                    return { isValid: true, idNumber: json.rationCardNumber, name: json.extractedName };
                }
            },
            voterid: {
                 prompt: `Analyze this image of a valid Indian Voter ID Card (EPIC).
                1. Confirm this is a valid Indian Voter ID Card.
                2. Extract the person's full name from the card.
                3. Extract the EPIC number (Voter ID number).
                Respond in JSON format according to the provided schema. The name and EPIC number are required.`,
                schema: {
                    type: Type.OBJECT,
                    properties: {
                        isVoterIdCard: { type: Type.BOOLEAN },
                        extractedName: { type: Type.STRING },
                        voterIdNumber: { type: Type.STRING }
                    },
                    required: ["isVoterIdCard", "extractedName", "voterIdNumber"]
                },
                validator: (json: any) => {
                     if (!json.isVoterIdCard || !json.voterIdNumber || !json.extractedName) {
                        return { isValid: false, errorType: 'INVALID_CARD' };
                    }
                    return { isValid: true, idNumber: json.voterIdNumber, name: json.extractedName };
                }
            }
        };

        const config = verificationConfigs[idType as keyof typeof verificationConfigs];
        if (!config) return;

        try {
            const base64Data = await fileToBase64(file);
            const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY as string });


            const imagePart = { inlineData: { mimeType: file.type, data: base64Data } };
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: { parts: [imagePart, { text: config.prompt }] },
                config: {
                    responseMimeType: "application/json",
                    responseSchema: config.schema,
                }
            });
            
            const resultJson = JSON.parse(response.text);
            const validationResult = config.validator(resultJson);

            if (!validationResult.isValid) {
                throw new Error(validationResult.errorType);
            }

            setFormData(prev => ({
                ...prev,
                fullName: validationResult.name || '',
                idFile: file
            }));
            setExtractedIdNumber(validationResult.idNumber);
            setVerificationStatus('verified');
            if (errors.fullName) {
                 setErrors(prev => ({ ...prev, fullName: undefined }));
            }


        } catch (error: any) {
            console.error(`${idType} verification failed:`, error);
            setVerificationStatus('error');
            setFormData(prev => ({ ...prev, idFile: null }));
        }
    };


    const handleFileConfirm = (file: File) => {
        setIsIdUploadModalOpen(false);
        const typesForVerification = ['aadhar', 'ration', 'voterid'];

        if (typesForVerification.includes(formData.idType)) {
            verifyIdCard(file, formData.idType);
        } else {
            setFormData(prev => ({ ...prev, idFile: file }));
        }
    };

    const handleCloseModal = () => {
        setIsIdUploadModalOpen(false);
        if (!formData.idFile) {
            setFormData(prev => ({ ...prev, idType: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (verificationStatus !== 'verified') {
            newErrors.idVerification = t('artisanSignup.errors.idVerification');
        }
        if (!formData.fullName.trim()) newErrors.fullName = t('artisanSignup.errors.name');
        if (!formData.location.trim()) newErrors.location = t('artisanSignup.errors.location');
        if (formData.categories.size === 0) newErrors.categories = t('artisanSignup.errors.categories');
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted', {...formData, extractedIdNumber});
            setIsSuccessDialogOpen(true);
        }
    };

    const isSpeechSupported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    const isVerified = verificationStatus === 'verified';
    
    const idStatusMessage = () => {
        if (errors.idVerification) {
            return <div className="mt-2 text-sm text-red-400">{errors.idVerification}</div>;
        }

        switch (verificationStatus) {
            case 'verifying':
                return (
                    <div className="mt-2 flex items-center text-sm text-amber-400">
                        <SpinnerIcon className="w-5 h-5 mr-2 animate-spin" />
                        <span>{t('artisanSignup.verification.verifying')}</span>
                    </div>
                );
            case 'error':
                 let errorMsg = '';
                 switch(formData.idType) {
                     case 'aadhar':
                         errorMsg = t('artisanSignup.verification.failedAadhaar');
                         break;
                     case 'ration':
                         errorMsg = t('artisanSignup.verification.failedRation');
                         break;
                     case 'voterid':
                         errorMsg = t('artisanSignup.verification.failedVoterId');
                         break;
                     default:
                         errorMsg = "Verification failed. Please try again with a clear image.";
                 }
                 return <div className="mt-2 text-sm text-red-400">{errorMsg}</div>;
            case 'verified':
                return (
                     <div className="mt-2 flex items-center text-sm text-green-400">
                        <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span>{t('artisanSignup.verification.verified')}</span>
                    </div>
                );
            case 'idle':
            default:
                return null;
        }
    };
    
    const getIdLabelKey = () => {
        if (!formData.idType) return '';
        const key = `artisanSignup.labels.${formData.idType}Number`;
        if (['aadhar', 'ration', 'voterid'].includes(formData.idType)) {
            return key;
        }
        return '';
    }

    return (
        <div className="relative min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in-fast">
            <div ref={langMenuRef} className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={isLangMenuOpen}
                >
                  <GlobeIcon className="w-5 h-5" />
                  <span>{languages[language].nativeName}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 animate-fade-in-fast">
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

            <div className="w-full max-w-2xl">
                 <button 
                    onClick={onBack} 
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-primary mb-6 transition-colors duration-200 group"
                >
                    <ArrowLeftIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                    <span>{t('artisanSignup.back')}</span>
                </button>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white font-serif">{t('artisanSignup.title')}</h1>
                        <p className="text-gray-400 mt-2">{t('artisanSignup.subtitle')}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <fieldset>
                            <legend className="sr-only">Step 1: Identity Verification</legend>
                             <div className="space-y-2">
                                <SelectField id="idType" label={t('artisanSignup.labels.idType')} value={formData.idType} onChange={handleIdTypeChange} error={errors.idType}>
                                    <option value="">{t('artisanSignup.idOptions.select')}</option>
                                    <option value="aadhar">{t('artisanSignup.idOptions.aadhar')}</option>
                                    <option value="ration">{t('artisanSignup.idOptions.ration')}</option>
                                    <option value="voterid">{t('artisanSignup.idOptions.voterid')}</option>
                                </SelectField>
                                {idStatusMessage()}
                            </div>
                        </fieldset>

                        <fieldset disabled={!isVerified} className={`space-y-6 transition-opacity duration-500 ${!isVerified ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>
                            <legend className="sr-only">Step 2: Profile Details</legend>
                            <InputField
                                id="fullName"
                                label={t('artisanSignup.labels.name')}
                                placeholder={t('artisanSignup.placeholders.name')}
                                value={formData.fullName}
                                onChange={handleChange}
                                error={errors.fullName}
                                endAdornment={isSpeechSupported && (
                                    <button
                                        type="button"
                                        onClick={handleMicClick}
                                        className={`text-gray-400 hover:text-brand-primary transition-colors ${isListening ? 'text-brand-primary animate-pulse' : ''}`}
                                        aria-label="Use microphone to enter name"
                                    >
                                        <MicIcon className="w-5 h-5" />
                                    </button>
                                )}
                            />
                            <InputField
                                id="location"
                                label={t('artisanSignup.labels.location')}
                                placeholder={t('artisanSignup.placeholders.location')}
                                value={formData.location}
                                onChange={handleChange}
                                error={errors.location}
                                endAdornment={(
                                    <button
                                        type="button"
                                        onClick={handleDetectLocation}
                                        disabled={isDetectingLocation}
                                        className="text-gray-400 hover:text-brand-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label={t('artisanSignup.detectLocationLabel')}
                                    >
                                        {isDetectingLocation ? (
                                            <SpinnerIcon className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <LocationMarkerIcon className="w-5 h-5" />
                                        )}
                                    </button>
                                )}
                            />

                             {isVerified && extractedIdNumber && (
                                <InputField
                                    id="extractedIdNumber"
                                    label={t(getIdLabelKey())}
                                    value={extractedIdNumber}
                                    onChange={() => {}} // No-op
                                    readOnly
                                    endAdornment={<CheckCircleIcon className="w-5 h-5 text-green-400" />}
                                />
                            )}
                            
                             <SelectField id="language" label={t('artisanSignup.labels.language')} value={formData.language} onChange={handleChange}>
                                {Object.keys(languages).map(langCode => (
                                    <option key={langCode} value={langCode}>{languages[langCode as keyof typeof languages].nativeName}</option>
                                ))}
                            </SelectField>

                             <div>
                                <label className="block text-sm font-medium text-gray-300 mb-3">{t('artisanSignup.labels.categories')}</label>
                                <div className={`grid grid-cols-2 gap-4 p-4 bg-gray-700/50 border rounded-md ${errors.categories ? 'border-red-500' : 'border-gray-600'}`}>
                                    <CheckboxField id="pottery" label={t('artisanSignup.categories.pottery')} checked={formData.categories.has('pottery')} onChange={handleCheckboxChange} />
                                    <CheckboxField id="art" label={t('artisanSignup.categories.art')} checked={formData.categories.has('art')} onChange={handleCheckboxChange} />
                                    <CheckboxField id="clothing" label={t('artisanSignup.categories.clothing')} checked={formData.categories.has('clothing')} onChange={handleCheckboxChange} />
                                    <CheckboxField id="jewellery" label={t('artisanSignup.categories.jewellery')} checked={formData.categories.has('jewellery')} onChange={handleCheckboxChange} />
                                </div>
                                {errors.categories && <p className="mt-2 text-sm text-red-400">{errors.categories}</p>}
                            </div>
                        </fieldset>

                        <div>
                            <button
                                type="submit"
                                disabled={!isVerified}
                                className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {t('artisanSignup.button')}
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-400 mt-6">
                        {t('artisanSignup.existingMember')}{' '}
                        <button onClick={onNavigateToSignIn} className="font-semibold text-brand-primary hover:text-amber-400 underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm">
                            {t('artisanSignup.signInHere')}
                        </button>
                    </p>
                </div>
            </div>
            <IdUploadModal
                isOpen={isIdUploadModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleFileConfirm}
                idType={formData.idType ? t(`artisanSignup.idOptions.${formData.idType}`) : ''}
            />
            <SuccessDialog 
                isOpen={isSuccessDialogOpen}
                title={t('artisanSignup.successDialog.title')}
                message={t('artisanSignup.successDialog.message', {name: formData.fullName.split(' ')[0]})}
                buttonText={t('artisanSignup.successDialog.button')}
                onConfirm={() => onStoreCreated(formData.fullName)}
            />
        </div>
    );
};

export default ArtisanSignup;