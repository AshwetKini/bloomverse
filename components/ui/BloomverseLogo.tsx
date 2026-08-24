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
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
        <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 opacity-80" />
          
          <svg className="w-5 h-5 text-cyan-400 relative z-10 transform group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" className="text-blue-500 fill-blue-500/20" />
            <circle cx="12" cy="12" r="3" className="text-cyan-300 fill-cyan-400" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xl">
          <span>bloom<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">verse</span></span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 -mt-1">
            Enterprise IT & AI
          </span>
        )}
      </div>
    </Link>
  );
};
