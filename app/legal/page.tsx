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
    <div className="min-h-screen bg-[#05070a] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb & Navigation Back */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Bloomverse Home
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-12 border-b border-slate-800 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Razorpay & Corporate Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Legal Disclosures & Merchant Identity
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Official corporate hierarchy, domain ownership declarations, and payment gateway onboarding disclosures for Bloomverse Technologies Inc. and its subsidiary digital ventures.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="space-y-10">
            {/* 1. Parent Entity & Legal Declaration */}
            <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0d16] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-cyan-400 shrink-0" />
                <h2 className="text-xl font-bold text-white">1. Corporate Legal Entity & Parent Company</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Bloomverse Technologies Inc.</strong> (along with its global registered entities and operational hubs) is the sole parent legal entity governing all associated digital platforms, custom software products, and subsidiary business units.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Registered Entity Name</span>
                  <p className="text-sm font-bold text-white">Bloomverse Technologies Inc.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Headquarters Address</span>
                  <p className="text-sm font-bold text-white">{hqOffice.address}</p>
                </div>
              </div>
            </section>

            {/* 2. Subsidiary Ownership Declaration (TeenHusstle.com) */}
            <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0d16] border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-400 shrink-0" />
                <h2 className="text-xl font-bold text-white">2. Subsidiary Brand Ownership: TeenHusstle</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                This legal notice explicitly affirms that <strong className="text-cyan-400">TeenHusstle (teenhusstle.com)</strong> is a wholly-owned subsidiary brand and digital platform operating under the corporate umbrella of <strong className="text-white">Bloomverse Technologies Inc.</strong>
              </p>

              {subsidiaryCompanies.map((sub) => (
                <div key={sub.id} className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{sub.name} ({sub.domain})</h3>
                      <span className="text-xs text-emerald-400 font-semibold">{sub.relationship}</span>
                    </div>
                    <a
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
                    >
                      <span>Visit Domain</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{sub.description}</p>
                  <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
                    <strong>Corporate Authorization Note:</strong> All business contracts, service level agreements (SLAs), platform terms, and merchant transactions conducted under the domain <span className="text-cyan-300 font-mono">teenhusstle.com</span> are legally underwritten by Bloomverse Technologies Inc.
                  </div>
                </div>
              ))}
            </section>

            {/* 3. Razorpay Payment Gateway & Billing Statement */}
            <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0d16] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-emerald-400 shrink-0" />
                <h2 className="text-xl font-bold text-white">3. Payment Gateway & Merchant Compliance (Razorpay)</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                All financial transactions, micro-subscriptions, and invoice payments initiated on <span className="text-white font-semibold">teenhusstle.com</span> or <span className="text-white font-semibold">bloomverse.com</span> are processed using PCI-DSS Level 1 compliant payment partners, primarily <strong className="text-white">Razorpay Payments</strong>.
              </p>
              
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <li><strong className="text-white">Bank Statement Identifier:</strong> Charges processed for TeenHusstle may appear as <span className="text-cyan-400 font-mono">RAZORPAY * TEENHUSSTLE</span> or <span className="text-cyan-400 font-mono">RAZORPAY * BLOOMVERSE</span> on customer card and bank statements.</li>
                <li><strong className="text-white">Domain Authorization:</strong> Razorpay Risk & Onboarding audits recognize <span className="text-slate-200">teenhusstle.com</span> as a verified merchant property of Bloomverse Technologies Inc.</li>
                <li><strong className="text-white">Security Standard:</strong> 256-bit SSL Encryption, 3D-Secure 2.0 Auth, and Automated Fraud Detection.</li>
              </ul>
            </section>

            {/* 4. Support & Compliance Contact */}
            <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0d16] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400 shrink-0" />
                <h2 className="text-xl font-bold text-white">4. Legal & Compliance Contact</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                For legal inquiries, payment gateway verification verification requests, domain licensing, or Razorpay merchant compliance verification, contact our corporate legal desk:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Parent Corporate Legal Email</span>
                  </div>
                  <a href="mailto:legal@bloomverse.com" className="text-sm font-semibold text-white hover:text-cyan-300">
                    legal@bloomverse.com
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Subsidiary Brand Desk</span>
                  </div>
                  <a href="mailto:support@teenhusstle.com" className="text-sm font-semibold text-white hover:text-cyan-300">
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
