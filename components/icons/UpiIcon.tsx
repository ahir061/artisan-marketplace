import React from 'react';

export const UpiIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        aria-hidden="true"
    >
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M3 6h18"></path>
       <path d="M11.5 10.5h-5.5a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h5.5v-6z"></path>
       <path d="M18 10.5h-2.5a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2.5v-6z"></path>
       <path d="M21 10.5v6"></path>
    </svg>
);