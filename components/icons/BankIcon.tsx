import React from 'react';

export const BankIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.885 11h8.23a1 1 0 01.97 1.213l-2.46 6.15a1 1 0 01-.97.787H9.356a1 1 0 01-.97-.787L5.94 12.213a1 1 0 01.97-1.213z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l4 4-4 4-4-4 4-4z" />
    </svg>
);