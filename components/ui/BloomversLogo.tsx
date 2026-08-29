'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BloomversLogo: React.FC<LogoProps> = ({ 
  className = '', 
  showTagline = false,
  size = 'md' 
}) => {
  const heightClass = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-12' : 'h-9 md:h-10';
  const imgHeight = size === 'sm' ? 24 : size === 'lg' ? 40 : 32;
  const imgWidth = size === 'sm' ? 120 : size === 'lg' ? 190 : 155;

  return (
    <Link 
      href="/" 
      className={`group inline-flex items-center gap-3 transition-transform duration-200 hover:opacity-95 active:scale-[0.99] ${className}`}
      aria-label="bloomvers Home"
    >
      {/* Sleek Dark Emblem Capsule for the Official Logo */}
      <div className={`relative ${heightClass} px-3 py-1.5 bg-black rounded-xl border border-slate-800 shadow-sm flex items-center justify-center group-hover:border-lime-500/40 group-hover:shadow-md group-hover:shadow-lime-500/10 transition-all duration-300`}>
        <Image
          src="/images/logo-banner.png"
          alt="bloomvers Logo"
          width={imgWidth}
          height={imgHeight}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      {showTagline && (
        <div className="hidden sm:flex flex-col justify-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 border-l border-slate-300 pl-2.5 leading-tight">
            Enterprise IT &amp; AI
          </span>
        </div>
      )}
    </Link>
  );
};
