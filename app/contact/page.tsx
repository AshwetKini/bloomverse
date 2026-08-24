import React from 'react';
import { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & RFP Submission | Bloomverse',
  description: 'Submit an RFP or book an enterprise architecture consultation with Bloomverse. Global offices in San Francisco, London, Singapore, and Bangalore.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#07090e]">
      {/* Subpage Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> 24/7 Global Access
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Connect with Bloomverse Architects
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Direct lines to senior enterprise architects. Quick responses guaranteed within 4 business hours.
        </p>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
