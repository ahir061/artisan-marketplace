import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { UploadIcon } from './icons/UploadIcon';

interface IdUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (file: File) => void;
  idType: string;
}

const IdUploadModal: React.FC<IdUploadModalProps> = ({ isOpen, onClose, onConfirm, idType }) => {
    const { t } = useLanguage();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isOpen) {
            // Reset state when modal closes
            setTimeout(() => {
                setSelectedFile(null);
                setPreviewUrl(null);
                setError(null);
                setIsDragging(false);
            }, 300); // Wait for animation to finish
        }
    }, [isOpen]);

    useEffect(() => {
        if (!selectedFile) {
            setPreviewUrl(null);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const handleFile = (file: File | null) => {
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
            if (allowedTypes.includes(file.type)) {
                setSelectedFile(file);
                setError(null);
            } else {
                setError(t('artisanSignup.idUploadModal.error'));
                setSelectedFile(null);
            }
        }
    };
    
    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    };
    
    const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    };

    const handleConfirm = () => {
        if (selectedFile) {
            onConfirm(selectedFile);
        }
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="id-upload-modal-title"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-lg w-full mx-4 relative transform animate-scale-in border border-gray-700"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 id="id-upload-modal-title" className="text-2xl font-bold text-center text-white mb-2">{t('artisanSignup.idUploadModal.title', {idType})}</h2>
                <p className="text-center text-gray-400 mb-6">{t('artisanSignup.idUploadModal.subtitle')}</p>
                
                <div 
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${isDragging ? 'border-brand-primary bg-gray-700/50' : 'border-gray-600 bg-gray-700/20'}`}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        onChange={onFileSelect}
                        className="hidden"
                    />
                    {previewUrl ? (
                         <div className="relative">
                            <img src={previewUrl} alt="Preview" className="max-h-48 mx-auto rounded-md object-contain" />
                            <div className="mt-4">
                                <p className="text-sm text-gray-300 mb-2 truncate">{t('artisanSignup.idUploadModal.fileSelected')} {selectedFile?.name}</p>
                                <button onClick={() => fileInputRef.current?.click()} className="text-sm font-semibold text-brand-primary hover:text-amber-400">
                                    {t('artisanSignup.idUploadModal.changeFile')}
                                </button>
                            </div>
                        </div>
                    ) : (
                         <div className="flex flex-col items-center">
                            <UploadIcon className="w-12 h-12 text-gray-500 mb-4" />
                            <p className="text-gray-400 mb-2">{t('artisanSignup.idUploadModal.dropzone')}</p>
                            <button onClick={() => fileInputRef.current?.click()} className="font-semibold text-brand-primary hover:text-amber-400">
                                {t('artisanSignup.idUploadModal.selectFile')}
                            </button>
                            <p className="text-xs text-gray-500 mt-2">{t('artisanSignup.idUploadModal.fileTypes')}</p>
                        </div>
                    )}
                </div>

                 {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}
                
                <div className="mt-6">
                    <button
                        onClick={handleConfirm}
                        disabled={!selectedFile}
                        className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        {t('artisanSignup.idUploadModal.confirm')}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default IdUploadModal;