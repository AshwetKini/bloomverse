'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const BloomverseLogo: React.FC<LogoProps> = ({ className = '', showTagline = false }) => {
  return (
    <Link href="/" className={`group flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 ${className}`}>
      {/* Radiant Glowing Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 p-[1px] shadow-sm shadow-blue-500/20 group-hover:shadow-md group-hover:shadow-blue-500/30 transition-all">
        <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-sky-50 opacity-80" />
          
          <svg className="w-5 h-5 text-blue-600 relative z-10 transform group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" className="text-blue-600 fill-blue-600/15" />
            <circle cx="12" cy="12" r="3" className="text-sky-500 fill-sky-500" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900 text-xl">
          <span>bloom<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">verse</span></span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 -mt-0.5">
            Enterprise IT & AI
          </span>
        )}
      </div>
    </Link>
  );
};

