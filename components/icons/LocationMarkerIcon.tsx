import React from 'react';

export const LocationMarkerIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
  </svg>
);
