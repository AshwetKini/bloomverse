'use client';

import React, { useState } from 'react';
import { caseStudiesData, CaseStudy } from '@/data/caseStudiesData';
import { 
  ArrowRight, 
  TrendingUp, 
  Quote, 
  X
} from 'lucide-react';
import { ConsultationModal } from '../contact/ConsultationModal';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="case-studies" className="py-24 bg-[#07090e] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Enterprise Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering Transformations that Deliver Multi-Million Dollar ROI
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore how we partnered with industry leaders to overcome high-concurrency hurdles, accelerate cloud velocity, and deploy breakthrough AI systems.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="group rounded-2xl bg-[#0d121f]/90 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-52 sm:h-60 w-full rounded-xl overflow-hidden mb-6 border border-slate-800">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-black/40 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-cyan-400 backdrop-blur-md">
                    {study.industry}
                  </div>
                  
                  {/* Client Name */}
                  <div className="absolute bottom-3 left-3 text-white font-bold text-sm bg-slate-950/80 px-2.5 py-1 rounded-md backdrop-blur-md border border-slate-800">
                    {study.client}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                      <div className="text-xl font-extrabold text-cyan-400 font-mono">{m.value}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote Snippet */}
                {study.testimonial && (
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 mb-6 relative">
                    <Quote className="w-4 h-4 text-cyan-400/50 mb-1" />
                    <p className="text-xs text-slate-300 italic line-clamp-2">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <div className="text-[11px] text-slate-400 font-medium mt-1">
                      &mdash; {study.testimonial.author}, <span className="text-slate-400">{study.testimonial.role}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCase(study)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Architecture Teardown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <span>Tech:</span>
                  <span>{study.technologies.slice(0, 3).join(', ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedCase(null)}
          />

          <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500" />

            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  {selectedCase.client} &bull; {selectedCase.industry}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {selectedCase.title}
                </h2>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedCase.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xl font-bold text-cyan-400 font-mono">{m.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">The Business & Technical Challenge</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                  {selectedCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">The Bloomverse Engineered Solution</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  {selectedCase.solution}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies Deployed</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedCase.testimonial && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-xs sm:text-sm text-slate-200 italic mb-2">
                    &ldquo;{selectedCase.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs text-cyan-400 font-semibold">
                    {selectedCase.testimonial.author} &mdash; <span className="text-slate-400">{selectedCase.testimonial.role}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Ready to achieve similar velocity?</span>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  setModalOpen(true);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 flex items-center gap-1.5"
              >
                <span>Request Case-Specific Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
