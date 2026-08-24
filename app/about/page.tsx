import React from 'react';
import { Metadata } from 'next';
import { AboutSection } from '@/components/about/AboutSection';
import { ProcessSection } from '@/components/process/ProcessSection';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us & Leadership | Bloomverse',
  description: 'Learn about Bloomverse (bloomverse.com), our leadership team, engineering philosophy, and global delivery hubs across San Francisco, London, Singapore, and Bangalore.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#07090e]">
      {/* Subpage Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Our Mission & Vision
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Pioneering the Next Era of Digital Engineering
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Bloomverse was architected to empower forward-thinking organizations with elite engineering squads, cutting-edge AI systems, and non-negotiable software reliability.
        </p>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Join Forces with Bloomverse</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Experience what it feels like to have a truly elite engineering squad in your corner.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all"
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
