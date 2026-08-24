'use client';

import React, { useState } from 'react';
import { engagementPlans } from '@/data/pricingData';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { ConsultationModal } from '../contact/ConsultationModal';

export const EngagementModels: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('dedicated-pod');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setModalOpen(true);
  };

  return (
    <section id="pricing" className="py-24 bg-[#07090e] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Flexible Partnership Models
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Transparent Engagement Tiers Built for Scale
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose the model that fits your operational cadence—from milestone-based product development to embedded senior agile engineering pods.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {engagementPlans.map((plan) => {
            const isFeatured = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#101728] to-[#0b0f19] border-2 border-cyan-500/80 shadow-2xl shadow-cyan-500/15 scale-100 lg:-translate-y-2'
                    : 'bg-[#0b0f19] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-md shadow-blue-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" /> Most Popular for Scaleups
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6">{plan.tagline}</p>

                  {/* Rate */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{plan.rate}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{plan.billingPeriod}</div>
                  </div>

                  {/* Ideal For */}
                  <div className="text-xs text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 mb-6">
                    <strong className="text-cyan-400">Best for:</strong> {plan.idealFor}
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Included in Scope
                    </span>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Assurance Footer Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              All partnerships backed by our <strong className="text-white">Strict IP Protection Guarantee</strong> and 30-day warranty.
            </span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Have custom procurement requirements? Talk to us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
