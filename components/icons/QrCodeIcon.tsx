import React from 'react';

export const QrCodeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1}
        aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4v4H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10v-2m0 8v-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h-2m8 0h-4M6 6H4m14 4h-2m-2-4h4v4h-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 10v-2m2 6v-2m-6 6h-2m-2-4v4h4v-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 16h4m-4 4h4m4-4h2v2h-2zm0 0v2m-4-2v-2m-2 4v-2" />
    </svg>
);