'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FileText, ArrowLeft, Shield, Scale, Code2, AlertTriangle, HelpCircle } from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = 'August 25, 2026';

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/5 via-sky-400/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <div className="text-xs text-slate-400 font-mono">
              Last Updated: {lastUpdated}
            </div>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-12 border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-4 h-4 text-blue-600" />
              <span>Legal Agreement &amp; Operating Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use of digital engineering services, consulting deliverables, and subsidiary digital properties provided by bloomvers Technologies Inc. (&ldquo;bloomvers&rdquo;).
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10 text-sm text-slate-700 leading-relaxed">
            {/* 1. Acceptance */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" /> 1. Acceptance of Terms
              </h2>
              <p>
                By accessing bloomvers.com, engaging bloomvers for software architecture or engineering services, executing a Statement of Work (SOW), or utilizing our subsidiary properties (including teenhusstle.com), you agree to be bound by these Terms. If you are entering into these Terms on behalf of an enterprise or entity, you represent that you hold the legal authority to bind that entity.
              </p>
            </section>

            {/* 2. Professional Services & Deliverables */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600" /> 2. Scope of Services &amp; Intellectual Property Transfer
              </h2>
              <p>
                bloomvers provides enterprise custom software engineering, cloud infrastructure architecture, applied AI integration, and dedicated agile engineering squads.
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li><strong className="text-slate-900">Custom Deliverables &amp; IP Ownership:</strong> Upon full payment of agreed project invoices or milestone fees, 100% of bespoke source code, documentation, and tailored architectural assets transfer exclusively to the client.</li>
                <li><strong className="text-slate-900">Pre-existing Frameworks:</strong> bloomvers retains ownership of proprietary internal tools, boilerplates, and open-source packages utilized to accelerate development, granting clients a perpetual, royalty-free, worldwide license to use them within the delivered solution.</li>
              </ul>
            </section>

            {/* 3. Payment Terms & Invoicing */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> 3. Payment Terms &amp; Invoicing
              </h2>
              <p>
                Enterprise services are billed according to executed SOWs (milestone-based or recurring sprint cycles). Invoices are payable via approved commercial wire transfer, ACH, or credit card through certified payment processors including Razorpay Payments. All fees are exclusive of applicable local and statutory taxes.
              </p>
            </section>

            {/* 4. Subsidiary Operations & TeenHusstle Marketplace */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-4 h-4 text-blue-600" /> 4. Subsidiary Operations (TeenHusstle)
              </h2>
              <p>
                bloomvers operates <strong>TeenHusstle (teenhusstle.com)</strong> as its consumer marketplace subsidiary. Users participating in freelance gigs, tutoring, or digital asset commerce on TeenHusstle agree to comply with platform community guidelines, escrow milestone release rules, and youth-protection safety policies.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> 5. Limitation of Liability &amp; Warranty
              </h2>
              <p>
                Except as expressly stated in a written Service Level Agreement (SLA), services are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. To the maximum extent permitted by law, bloomvers shall not be liable for indirect, incidental, consequential, or punitive damages arising from platform downtime, third-party cloud outages, or project delays beyond reasonable control.
              </p>
            </section>

            {/* 6. Governing Law & Contact */}
            <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" /> 6. Governing Law &amp; Legal Notices
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws governing commercial business operations of bloomvers Technologies Inc. For formal legal notices or contractual inquiries, contact:
              </p>
              <div className="text-xs space-y-1">
                <div><strong className="text-slate-900">Corporate Legal Desk:</strong> <a href="mailto:support@bloomvers.com" className="text-blue-600 hover:underline">support@bloomvers.com</a></div>
                <div><strong className="text-slate-900">Official Website:</strong> bloomvers.com</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
