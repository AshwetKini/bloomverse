'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  CreditCard, 
  ArrowLeft, 
  ShieldCheck, 
  Building2, 
  Globe, 
  RefreshCcw, 
  CheckCircle2, 
  ExternalLink,
  HelpCircle,
  Clock
} from 'lucide-react';
import { subsidiaryCompanies } from '@/data/subsidiariesData';
import { officeLocations } from '@/data/companyData';

export default function MerchantPage() {
  const hqOffice = officeLocations.find((loc) => loc.isHQ) || officeLocations[0];

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
              Merchant Compliance Status: Verified Active
            </div>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-12 border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>Razorpay &amp; Merchant Operating Disclosure</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Merchant Information &amp; Payment Policies
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Official merchant onboarding declarations, payment processor integration terms (Razorpay), billing statement identification, and consumer refund policies for bloomvers Technologies Inc. and its subsidiary brands.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10 text-sm text-slate-700 leading-relaxed">
            {/* 1. Legal Merchant Identity */}
            <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-blue-600 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900">1. Legal Merchant Entity &amp; Ownership</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All commercial payment processing accounts and merchant facilities operated across <span className="font-semibold text-slate-900">bloomvers.com</span> and <span className="font-semibold text-blue-600">teenhusstle.com</span> are legally registered under and underwritten by:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-semibold uppercase block">Registered Merchant Entity</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">bloomvers Technologies Inc.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-semibold uppercase block">Registered Headquarters</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{hqOffice.address}</p>
                </div>
              </div>
            </section>

            {/* 2. Razorpay Payment Gateway Disclosures */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900">2. Payment Gateway Integration &amp; Security Standards</h2>
              </div>
              <p>
                bloomvers utilizes <strong>Razorpay Payments</strong> as our primary authorized payment gateway partner for processing digital invoices, credit cards, debit cards, UPI, net banking, and international card payments:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1 text-xs">
                  <div className="font-bold text-slate-900">Bank Statement Identifiers</div>
                  <p className="text-slate-600">
                    Depending on the platform where your order or invoice was initiated, transactions processed by Razorpay will appear on your credit card or bank account statements as:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">RAZORPAY * bloomvers</span>
                    <span className="px-2.5 py-1 rounded bg-pink-50 text-pink-700 border border-pink-200 font-semibold">RAZORPAY * TEENHUSSTLE</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1 text-xs">
                  <div className="font-bold text-slate-900">PCI-DSS &amp; Encryption Standards</div>
                  <p className="text-slate-600">
                    All payment transactions are handled through Razorpay&rsquo;s PCI-DSS Level 1 compliant secure vault with 256-bit SSL encryption and mandatory 3D Secure 2.0 multi-factor authorization.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Pricing, Digital Fulfillment & Delivery Policy */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900">3. Pricing Transparency &amp; Digital Fulfillment</h2>
              </div>
              <p>
                All pricing across bloomvers enterprise services and TeenHusstle digital offerings is displayed transparently prior to checkout:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
                <li><strong className="text-slate-900">Enterprise Engineering Deliverables:</strong> Delivered digitally through secure version-controlled git repositories (GitHub / GitLab) and private staging cloud deployments per milestone schedules.</li>
                <li><strong className="text-slate-900">TeenHusstle Marketplace Goods &amp; Gigs:</strong> Delivered electronically through the platform&rsquo;s automated download center or verified milestone submission system.</li>
              </ul>
            </section>

            {/* 4. Refund & Cancellation Policy */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <RefreshCcw className="w-5 h-5 text-purple-600 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900">4. Refund, Cancellation &amp; Dispute Resolution Policy</h2>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-sm">Enterprise Consulting Services</span>
                  <p className="text-slate-600 leading-relaxed">
                    Custom software engineering contracts feature sprint-by-sprint acceptance reviews. If a sprint milestone fails to satisfy agreed acceptance criteria, our 30-Day Bug-Fix SLA provides immediate remediation at no additional charge. Milestone cancellations are governed by the specific Statement of Work (SOW).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-sm">TeenHusstle Marketplace Transactions</span>
                  <p className="text-slate-600 leading-relaxed">
                    TeenHusstle uses a protected milestone escrow mechanism. Buyers may request milestone revisions or raise a dispute within 7 days of delivery. Funds held in escrow for unfulfilled gigs or non-functional digital assets are refunded directly to the original payment method through Razorpay.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Merchant Helpdesk */}
            <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">5. Billing &amp; Merchant Support Desk</h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For billing inquiries, charge clarifications, payment receipts, or Razorpay merchant onboarding audits, contact our financial compliance team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-semibold block">Parent Billing Desk</span>
                  <a href="mailto:support@bloomvers.com" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    support@bloomvers.com
                  </a>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-semibold block">TeenHusstle Brand Support</span>
                  <a href="mailto:support@teenhusstle.com" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
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
