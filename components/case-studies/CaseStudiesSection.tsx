'use client';

import React, { useState } from 'react';
import { caseStudiesData, CaseStudy } from '@/data/caseStudiesData';
import { 
  ArrowRight, 
  TrendingUp, 
  Quote, 
  X,
  Sparkles
} from 'lucide-react';
import { ConsultationModal } from '../contact/ConsultationModal';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="case-studies" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Enterprise Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineering Transformations that Deliver Multi-Million Dollar ROI
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore how we partnered with industry leaders to overcome high-concurrency hurdles, accelerate cloud velocity, and deploy breakthrough AI systems.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((study, idx) => (
            <div
              key={study.id}
              className={`group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 overflow-hidden hover-lift reveal-on-scroll delay-${(idx % 2) * 150 + 100}`}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-52 sm:h-60 w-full rounded-xl overflow-hidden mb-6 border border-slate-200">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-blue-700 backdrop-blur-md shadow-sm">
                    {study.industry}
                  </div>
                  
                  {/* Client Name */}
                  <div className="absolute bottom-3 left-3 text-white font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-md border border-slate-800">
                    {study.client}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xl font-extrabold text-blue-600 font-mono">{m.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote Snippet */}
                {study.testimonial && (
                  <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 mb-6 relative">
                    <Quote className="w-4 h-4 text-blue-400 mb-1" />
                    <p className="text-xs text-slate-700 italic line-clamp-2">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      &mdash; {study.testimonial.author}, <span className="text-slate-600">{study.testimonial.role}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCase(study)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Architecture Teardown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCase(null)}
          />

          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-600" />

            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
                  {selectedCase.client} &bull; {selectedCase.industry}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                  {selectedCase.title}
                </h2>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedCase.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-xl font-bold text-blue-600 font-mono">{m.value}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider">The Business & Technical Challenge</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed p-4 rounded-xl bg-rose-50 border border-rose-200">
                  {selectedCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider">The Bloomverse Engineered Solution</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  {selectedCase.solution}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technologies Deployed</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedCase.testimonial && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs sm:text-sm text-slate-700 italic mb-2">
                    &ldquo;{selectedCase.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs text-blue-600 font-semibold">
                    {selectedCase.testimonial.author} &mdash; <span className="text-slate-500">{selectedCase.testimonial.role}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Ready to achieve similar velocity?</span>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  setModalOpen(true);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 shadow-md shadow-blue-500/20 flex items-center gap-1.5"
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

