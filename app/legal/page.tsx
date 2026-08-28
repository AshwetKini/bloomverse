'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Building2, Globe, CreditCard, Mail, MapPin, FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import { subsidiaryCompanies } from '@/data/subsidiariesData';
import { officeLocations } from '@/data/companyData';

export default function LegalPage() {
  const hqOffice = officeLocations.find((loc) => loc.isHQ) || officeLocations[0];

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/5 via-sky-400/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb & Navigation Back */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Bloomverse Home
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-8 border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Corporate Compliance &amp; Entity Hierarchy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Legal Disclosures &amp; Merchant Identity
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
              Official corporate hierarchy, domain ownership declarations, and payment gateway onboarding disclosures for Bloomverse Technologies Inc. and its subsidiary digital ventures.
            </p>

            {/* Legal Documents Navigation */}
            <div className="flex flex-wrap gap-2 pt-4">
              <Link
                href="/legal"
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-xs"
              >
                Corporate Hierarchy
              </Link>
              <Link
                href="/privacy"
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/merchant"
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Merchant &amp; Razorpay Policy
              </Link>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="space-y-10">
            {/* 1. Parent Entity & Legal Declaration */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-blue-600 shrink-0" />
                <h2 className="text-xl font-bold text-slate-900">1. Corporate Legal Entity & Parent Company</h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Bloomverse Technologies Inc.</strong> (with its registered corporate headquarters in Pune, India) is the sole parent legal entity governing all associated digital platforms, custom software products, and subsidiary business units.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Registered Entity Name</span>
                  <p className="text-sm font-bold text-slate-900">Bloomverse Technologies Inc.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Headquarters Address</span>
                  <p className="text-sm font-bold text-slate-900">{hqOffice.address}</p>
                </div>
              </div>
            </section>

            {/* 2. Subsidiary Ownership Declaration (TeenHusstle.com) */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600 shrink-0" />
                <h2 className="text-xl font-bold text-slate-900">2. Subsidiary Brand Ownership: TeenHusstle</h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                This legal notice explicitly affirms that <strong className="text-blue-600 font-semibold">TeenHusstle (teenhusstle.com)</strong> is a wholly-owned subsidiary brand and digital platform operating under the corporate umbrella of <strong className="text-slate-900 font-semibold">Bloomverse Technologies Inc.</strong>
              </p>

              {subsidiaryCompanies.map((sub) => (
                <div key={sub.id} className="p-5 rounded-xl bg-white border border-blue-200 space-y-4 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{sub.name} ({sub.domain})</h3>
                      <span className="text-xs text-emerald-700 font-semibold">{sub.relationship}</span>
                    </div>
                    <a
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-semibold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
                    >
                      <span>Visit Domain</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{sub.description}</p>
                  <div className="text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <strong className="text-slate-800">Corporate Authorization Note:</strong> All business contracts, service level agreements (SLAs), platform terms, and merchant transactions conducted under the domain <span className="text-blue-600 font-mono font-medium">teenhusstle.com</span> are legally underwritten by Bloomverse Technologies Inc.
                  </div>
                </div>
              ))}
            </section>

            {/* 3. Razorpay Payment Gateway & Billing Statement */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-emerald-600 shrink-0" />
                <h2 className="text-xl font-bold text-slate-900">3. Payment Gateway & Merchant Compliance (Razorpay)</h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                All financial transactions, micro-subscriptions, and invoice payments initiated on <span className="text-slate-900 font-semibold">teenhusstle.com</span> or <span className="text-slate-900 font-semibold">bloomverse.com</span> are processed using PCI-DSS Level 1 compliant payment partners, primarily <strong className="text-slate-900">Razorpay Payments</strong>.
              </p>
              
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <li><strong className="text-slate-900">Bank Statement Identifier:</strong> Charges processed for TeenHusstle may appear as <span className="text-blue-600 font-mono font-medium">RAZORPAY * TEENHUSSTLE</span> or <span className="text-blue-600 font-mono font-medium">RAZORPAY * BLOOMVERSE</span> on customer card and bank statements.</li>
                <li><strong className="text-slate-900">Domain Authorization:</strong> Razorpay Risk & Onboarding audits recognize <span className="text-slate-800 font-medium">teenhusstle.com</span> as a verified merchant property of Bloomverse Technologies Inc.</li>
                <li><strong className="text-slate-900">Security Standard:</strong> 256-bit SSL Encryption, 3D-Secure 2.0 Auth, and Automated Fraud Detection.</li>
              </ul>
            </section>

            {/* 4. Support & Compliance Contact */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-600 shrink-0" />
                <h2 className="text-xl font-bold text-slate-900">4. Legal & Compliance Contact</h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                For legal inquiries, payment gateway verification requests, domain licensing, or Razorpay merchant compliance verification, contact our corporate legal desk:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Parent Corporate Legal Email</span>
                  </div>
                  <a href="mailto:legal@bloomverse.com" className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                    legal@bloomverse.com
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Subsidiary Brand Desk</span>
                  </div>
                  <a href="mailto:support@teenhusstle.com" className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                    support@teenhusstle.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

