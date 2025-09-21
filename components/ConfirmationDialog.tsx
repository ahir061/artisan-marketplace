import React from 'react';
import ReactDOM from 'react-dom';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, onClose, onConfirm, title, message, confirmText, cancelText }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      role="alertdialog" 
      aria-modal="true" 
      aria-labelledby="confirmation-dialog-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 transform animate-scale-in border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="confirmation-dialog-title" className="text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-400 mb-8">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600 font-semibold transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-5 rounded-full text-white bg-red-600 hover:bg-red-700 font-semibold transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationDialog;
