import React from 'react';
import { Metadata } from 'next';
import { CaseStudiesSection } from '@/components/case-studies/CaseStudiesSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Case Studies & Proof of Impact | bloomvers',
  description: 'Read how bloomvers helped FinTech, Healthcare, E-Commerce, and SaaS leaders achieve 99.999% uptime, \.4M+ cost reductions, and rapid SOC2 certifications.',
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Subpage Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Enterprise Case Studies & Architecture Teardowns
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Real-world outcomes: 72% latency reductions, zero-downtime multi-region migrations, and private clinical AI engines.
        </p>
      </div>

      {/* Case Studies Grid */}
      <CaseStudiesSection />

      {/* Verified Reviews */}
      <TestimonialsSection />

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Have an Upcoming Architecture Initiative?</h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Book a direct discovery session with our senior engineers to review technical requirements and budget feasibility.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
