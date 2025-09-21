import React from 'react';

export const MastercardIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        className={className}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 15"
        fill="none"
        aria-hidden="true"
    >
       <circle cx="7.2" cy="7.2" r="7.2" fill="#EA001B"></circle>
       <circle cx="16.8" cy="7.2" r="7.2" fill="#F79E1B"></circle>
       <path d="M14.28 7.2a4.8 4.8 0 01-7.08-4.14 4.8 4.8 0 000 8.28 4.8 4.8 0 017.08-4.14z" fill="#FF5F00"></path>
    </svg>
);