import React from 'react';

export const VoiceAssistantIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1.5}
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 016 0v8.25a3 3 0 01-3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" opacity="0.4"/>

    </svg>
);