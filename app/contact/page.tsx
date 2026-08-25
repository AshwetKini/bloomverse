import React from 'react';
import { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Bloomverse',
  description: 'Get in touch with Bloomverse. Reach our team for technical consultations, software development, cloud engineering, and general inquiries.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Subpage Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Reach Out
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Contact Bloomverse
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          We&rsquo;d love to hear from you. Send us a message or contact our offices directly.
        </p>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
