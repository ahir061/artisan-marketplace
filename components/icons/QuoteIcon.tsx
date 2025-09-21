import React from 'react';

export const QuoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        className={className}
        aria-hidden="true"
    >
        <path d="M14.017 21v-7.391c0-2.908.942-5.065 2.825-6.439l.707.707-1.761 1.761c-.579.578-.871.99-.871 1.239v10.123h-1.428zm-8.017 0v-7.391c0-2.908.942-5.065 2.825-6.439l.707.707-1.761 1.761c-.579.578-.871.99-.871 1.239v10.123h-1.428z"/>
    </svg>
);