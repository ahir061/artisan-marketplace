import React from 'react';

export const TruckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
    >
        <path d="M9 17a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M21 17a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 17H8.62a4 4 0 01-3.87-2.9L3 6H1v11h2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 17h12.5a.5.5 0 00.5-.5V7.8a.5.5 0 00-.3-.4L14 4.84a.5.5 0 00-.4 0L9 6.94a.5.5 0 00-.3.4V16.5a.5.5 0 00.5.5H8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l-4 2.5" />
    </svg>
);