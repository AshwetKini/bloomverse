import React from 'react';
import { Metadata } from 'next';
import { ProjectEstimator } from '@/components/calculator/ProjectEstimator';
import { EngagementModels } from '@/components/pricing/EngagementModels';
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Scope & Cost Estimator | Bloomverse',
  description: 'Interactive IT project cost calculator. Estimate timeline, budget, and squad allocation for cloud migrations, AI implementations, and custom web applications.',
};

export default function CalculatorPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Subpage Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Instant Investment Scope
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Interactive IT Scope & Cost Estimator
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Configure your service requirements, scale, and delivery velocity to calculate transparent budget ranges and team compositions in real time.
        </p>
      </div>

      {/* Estimator Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectEstimator />
      </div>

      {/* Engagement Models */}
      <EngagementModels />
    </div>
  );
}
