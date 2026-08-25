'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, ArrowLeft, Lock, Eye, Database, Globe, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Compliance &amp; Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              This Privacy Policy explains how Bloomverse Technologies Inc. (&ldquo;Bloomverse&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) and our wholly-owned subsidiary platforms (including TeenHusstle at teenhusstle.com) collect, use, disclose, and safeguard your personal information.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10 text-sm text-slate-700 leading-relaxed">
            {/* 1. Overview */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" /> 1. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us when requesting enterprise software services, submitting contact inquiries, subscribing to research whitepapers, or interacting with our subsidiary platforms:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li><strong className="text-slate-900">Personal &amp; Contact Data:</strong> Name, work email address, phone number, company name, and job title.</li>
                <li><strong className="text-slate-900">Project Context:</strong> Scope requirements, technical objectives, and architectural details shared through our contact and estimation channels.</li>
                <li><strong className="text-slate-900">Transaction &amp; Billing Records:</strong> For clients and platform users engaging in commercial transactions, billing records are processed securely through certified payment gateways (e.g. Razorpay). We do not store raw payment card numbers.</li>
                <li><strong className="text-slate-900">Technical Logs &amp; Analytics:</strong> IP addresses, browser type, operating system, device identifiers, and page interaction timestamps.</li>
              </ul>
            </section>

            {/* 2. How We Use Data */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-600" /> 2. How We Use Your Information
              </h2>
              <p>We process your data for legitimate commercial and operational purposes, including:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li>Providing, maintaining, and fulfilling enterprise consulting and software engineering contracts.</li>
                <li>Processing client payments and issuing tax-compliant invoices and receipts.</li>
                <li>Responding to customer support tickets, project scoping inquiries, and partnership requests.</li>
                <li>Operating subsidiary platforms (e.g., safeguarding freelance transactions and digital goods escrow on TeenHusstle).</li>
                <li>Complying with statutory accounting, anti-fraud, and regulatory requirements.</li>
              </ul>
            </section>

            {/* 3. Third-Party Processors & Payment Gateways */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-600" /> 3. Third-Party Service Providers &amp; Payment Processors
              </h2>
              <p>
                We only share personal information with vetted third-party vendors who adhere to strict confidentiality and security standards:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div><strong className="text-slate-900">Payment Gateway (Razorpay):</strong> Transactions initiated on bloomverse.com or teenhusstle.com are processed through Razorpay Payments under PCI-DSS Level 1 compliant protocols. Payment data is encrypted end-to-end.</div>
                <div><strong className="text-slate-900">Cloud Infrastructure (AWS / GCP / Cloudflare):</strong> Client data and platform services are hosted in enterprise-tier, SOC2 Type II certified cloud environments with automated encryption at rest and in transit.</div>
              </div>
            </section>

            {/* 4. Data Security */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 4. Data Security &amp; Retention
              </h2>
              <p>
                We implement industry-standard administrative, technical, and physical security measures, including 256-bit TLS encryption, role-based access control (RBAC), and continuous vulnerability monitoring. Personal data is retained only for as long as necessary to fulfill contractual agreements and statutory legal obligations.
              </p>
            </section>

            {/* 5. User Rights */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" /> 5. Your Rights (GDPR / CCPA / DPDP)
              </h2>
              <p>Depending on your jurisdiction, you possess the right to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request rectification of inaccurate or outdated information.</li>
                <li>Request erasure of your personal data (&ldquo;Right to be Forgotten&rdquo;), subject to legal retention mandates.</li>
                <li>Object to or restrict specific forms of data processing.</li>
              </ul>
            </section>

            {/* 6. Contact Officer */}
            <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" /> 6. Data Protection &amp; Privacy Contact
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you have questions regarding this Privacy Policy or wish to exercise your data protection rights, please contact our Data Protection Officer:
              </p>
              <div className="text-xs space-y-1">
                <div><strong className="text-slate-900">Entity:</strong> Bloomverse Technologies Inc.</div>
                <div><strong className="text-slate-900">Privacy Desk Email:</strong> <a href="mailto:privacy@bloomverse.com" className="text-blue-600 hover:underline">privacy@bloomverse.com</a></div>
                <div><strong className="text-slate-900">Subsidiary Brand Desk:</strong> <a href="mailto:support@teenhusstle.com" className="text-blue-600 hover:underline">support@teenhusstle.com</a></div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
