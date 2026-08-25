'use client';

import React, { useEffect, useState } from 'react';

export const ScrollObserver: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Scroll Progress Bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = (totalScroll / windowHeight) * 100;
        setScrollProgress(scroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Intersection Observer for Scroll Reveals
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, keep it revealed
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    });

    const elementsToReveal = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right'
    );

    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Subtle Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 z-[100] transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};
