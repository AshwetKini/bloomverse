import React from 'react';
import { Metadata } from 'next';
import { AboutSection } from '@/components/about/AboutSection';
import { GroupCompaniesSection } from '@/components/subsidiaries/GroupCompaniesSection';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us & Engineering Philosophy | Bloomverse',
  description: 'Learn about Bloomverse (bloomverse.com), our engineering philosophy, principal-led software architecture, and consumer platforms like TeenHustle.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Subpage Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> About Bloomverse
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Pioneering the Next Era of Digital Engineering
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Bloomverse was architected to empower forward-thinking organizations with elite engineering squads, cutting-edge AI systems, and non-negotiable software reliability.
        </p>
      </div>

      {/* Main About Section (Mission, Difference & DNA) */}
      <AboutSection />

      {/* Group Companies & Child Company (TeenHustle) */}
      <GroupCompaniesSection />

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center reveal-scale">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Partner with Bloomverse</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Experience what it feels like to have a dedicated, elite engineering squad in your corner.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
