import React from 'react';

export const OsangLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div role="img" aria-label="오상테크놀로지 로고" className={`w-16 h-16 rounded-full mb-4 border-2 border-brand-slate-dark bg-white flex items-center justify-center p-1 overflow-hidden ${className}`}>
        <svg viewBox="0 0 100 40" width="100%" height="100%">
            <text 
                x="50%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="middle" 
                fontFamily="Inter, sans-serif" 
                fontSize="24" 
                fontWeight="bold" 
                fill="#0A192F"
            >
                OSANG
            </text>
        </svg>
    </div>
);
