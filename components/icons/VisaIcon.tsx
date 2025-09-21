import React from 'react';

export const VisaIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        className={className}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 8"
        fill="none"
        aria-hidden="true"
    >
        <path fill="#1A1A1A" d="M19.833 0H17.29L14.77 7.75h2.64l.55-1.789h2.388l.298 1.79h2.46L19.833 0zm-1.12 4.612l.758-2.52.48 2.52h-1.238zM12.062 2.553c0-1.472-.822-2.553-2.388-2.553H5.68v7.75h2.55V4.6h.178l1.79 3.15h2.73L10.32 3.65c.67-.802 1.742-1.023 1.742-1.097zM5.38 0L2.86 7.75H0L2.52 0h2.86z"></path>
    </svg>
);