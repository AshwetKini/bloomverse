'use client';

import React from 'react';
import Link from 'next/link';
import { subsidiaryCompanies } from '@/data/subsidiariesData';
import { Building2, ExternalLink, ShieldCheck, Sparkles, CheckCircle2, Layers, ArrowUpRight, Cpu } from 'lucide-react';

export const GroupCompaniesSection: React.FC = () => {
  return (
    <section id="group-companies" className="py-24 bg-[#05070c] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> Corporate Ecosystem & Subsidiaries
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Ventures & Group Companies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Bloomverse incubates and scales high-growth digital platforms and technology ecosystems. Each subsidiary operates under our unified cloud infrastructure, governance, and engineering standards.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/legal"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 bg-slate-900/80 border border-slate-800 hover:border-slate-700 px-4 py-2.5 rounded-xl transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Corporate Structure & Legal Disclosures &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Subsidiaries Showcase Grid */}
        <div className="grid grid-cols-1 gap-8">
          {subsidiaryCompanies.map((company) => (
            <div
              key={company.id}
              className="relative rounded-3xl bg-gradient-to-b from-[#0b0f19] to-[#070a12] border border-slate-800 hover:border-cyan-500/40 p-8 sm:p-10 transition-all duration-300 shadow-2xl overflow-hidden group"
            >
              {/* Subtle card decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-80" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Brand & Overview (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Brand Monogram */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-blue-500/25 shrink-0">
                      TH
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {company.name}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Active Operating Unit</span>
                        </span>
                      </div>
                      <p className="text-xs font-mono text-cyan-400 font-medium mt-0.5">
                        {company.domain} &bull; {company.relationship}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {company.description}
                  </p>

                  {/* Tech & Infrastructure Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 mr-2 font-medium">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Powered by Bloomverse Architecture:
                    </span>
                    {company.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Corporate Matrix & Direct Action (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-slate-800/80 lg:pl-8">
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                      Corporate Architecture
                    </span>

                    <div className="space-y-3">
                      {company.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs"
                        >
                          <span className="text-slate-400 font-medium">{metric.label}</span>
                          <span className="text-white font-semibold">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-blue-500/20 transition-all group/btn"
                    >
                      <span>Explore {company.name} Platform</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <Link
                      href="/legal"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-xs transition-colors"
                    >
                      <span>Corporate Filings</span>
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
