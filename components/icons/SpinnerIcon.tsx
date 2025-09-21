import React from 'react';

export const SpinnerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path 
            d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
        />
    </svg>
);
