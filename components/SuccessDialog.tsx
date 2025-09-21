import React from 'react';
import ReactDOM from 'react-dom';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface SuccessDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  buttonText: string;
  onConfirm: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ isOpen, title, message, buttonText, onConfirm }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      role="alertdialog" 
      aria-modal="true" 
      aria-labelledby="success-dialog-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 text-center transform animate-scale-in border border-gray-700"
      >
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mb-4">
            <CheckCircleIcon className="h-10 w-10 text-green-400" />
        </div>
        <h2 id="success-dialog-title" className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-8">{message}</p>
        <button
          onClick={onConfirm}
          className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
    </div>,
    document.body
  );
};

export default SuccessDialog;
