'use client';

import React from 'react';
import Link from 'next/link';
import { subsidiaryCompanies } from '@/data/subsidiariesData';
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap 
} from 'lucide-react';

export const GroupCompaniesSection: React.FC = () => {
  return (
    <section id="group-companies" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background subtle radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/5 via-sky-400/5 to-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> Corporate Ecosystem & Subsidiaries
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Child Company & Consumer Venture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bloomverse incubates, architects, and powers high-growth digital platforms alongside our enterprise consulting division. TeenHusstle operates as our premier wholly-owned child company.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/legal"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white border border-slate-200 hover:border-slate-300 px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Corporate Structure & Legal Disclosures &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Subsidiaries Showcase Grid */}
        <div className="grid grid-cols-1 gap-8">
          {subsidiaryCompanies.map((company) => (
            <div
              key={company.id}
              className="relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 p-8 sm:p-10 transition-all duration-300 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden group"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Side: Brand & Platform Pillars (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Brand Header */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      {company.logo ? (
                        <div className="h-16 px-4 py-2 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-center shadow-xs shrink-0">
                          <img 
                            src={company.logo} 
                            alt={company.name} 
                            className="h-10 w-auto max-w-[150px] object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-sm shrink-0">
                          TH
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            {company.name}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Wholly-Owned Child Company</span>
                          </span>
                        </div>
                        <a 
                          href={company.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs font-mono text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 mt-1 hover:underline"
                        >
                          <span>{company.domain}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {company.description}
                    </p>

                    {/* 3 Core Platform Modules */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-pink-200 hover:bg-pink-50/20 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 border border-pink-100">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-slate-900">HustleHub Gigs</div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">UI/UX, Video Editing, Dev &amp; Copywriting</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-purple-200 hover:bg-purple-50/20 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5 border border-purple-100">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-slate-900">MarketSpace</div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Digital Products &amp; Creative Assets</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-emerald-200 hover:bg-emerald-50/20 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 border border-emerald-100">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-slate-900">Learn &amp; Monetize</div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Tutoring &amp; Escrow Milestone Payouts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Corporate Matrix & Actions (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-slate-200/80 lg:pl-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Corporate Governance &amp; Entity Structure
                    </span>

                    <div className="space-y-2.5">
                      {company.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs"
                        >
                          <span className="text-slate-500 font-medium">{metric.label}</span>
                          <span className="text-slate-900 font-bold">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 text-white font-semibold text-xs shadow-md shadow-pink-500/20 transition-all group/btn active:scale-[0.98]"
                    >
                      <span>Visit teenhusstle.com</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <Link
                      href="/legal"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-xs transition-colors"
                    >
                      <span>Legal Filings</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

