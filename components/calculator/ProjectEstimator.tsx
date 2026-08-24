'use client';

import React, { useState } from 'react';
import { 
  serviceScopeOptions, 
  projectScaleMultipliers, 
  speedMultipliers, 
  ScopeOption 
} from '@/data/pricingData';
import { formatCurrency } from '@/lib/utils';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { ConsultationModal } from '../contact/ConsultationModal';

export const ProjectEstimator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['cloud', 'custom-web']);
  const [scaleId, setScaleId] = useState<string>('production');
  const [speedId, setSpeedId] = useState<string>('standard');
  const [include24x7Support, setInclude24x7Support] = useState<boolean>(true);
  const [includeSoc2Pack, setIncludeSoc2Pack] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculations
  const selectedServiceObjects = serviceScopeOptions.filter(s => selectedServices.includes(s.id));
  const baseCostSum = selectedServiceObjects.reduce((acc, curr) => acc + curr.baseCost, 0);
  const maxWeeksBase = Math.max(...selectedServiceObjects.map(s => s.baseWeeks), 4);

  const currentScale = projectScaleMultipliers.find(s => s.id === scaleId) || projectScaleMultipliers[1];
  const currentSpeed = speedMultipliers.find(s => s.id === speedId) || speedMultipliers[0];

  let calculatedCost = Math.round(baseCostSum * currentScale.multiplier * currentSpeed.factor);
  if (include24x7Support) calculatedCost += 3500;
  if (includeSoc2Pack) calculatedCost += 6000;

  const lowEstimate = Math.round(calculatedCost * 0.9);
  const highEstimate = Math.round(calculatedCost * 1.15);

  let calculatedWeeks = Math.round((maxWeeksBase + currentScale.weeksAdd) / (currentSpeed.factor > 1 ? 1.35 : 1));
  if (calculatedWeeks < 2) calculatedWeeks = 2;

  // Recommended Team
  const teamSize = selectedServices.length > 2 || scaleId === 'enterprise' ? '4 - 6 Dedicated Engineers' : '2 - 3 Senior Engineers';

  return (
    <div className="w-full rounded-3xl bg-[#0b0f19] border border-slate-800 shadow-2xl shadow-blue-500/5 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5" /> Interactive IT Solution & Scope Calculator
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Calculate Your Project Investment & Timeline
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          Select your required technology modules to generate an instant estimate with team allocation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Options Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Services */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>1. Choose Technology Modules ({selectedServices.length} Selected)</span>
              <span className="text-[11px] text-cyan-400 font-normal">Multi-select enabled</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {serviceScopeOptions.map((opt) => {
                const isSelected = selectedServices.includes(opt.id);
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => toggleService(opt.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-500/10 text-white shadow-md shadow-cyan-500/10'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-white">{opt.name}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${isSelected ? 'bg-cyan-500 border-cyan-400 text-black' : 'border-slate-700'}`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{opt.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Scale & Maturity */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              2. Target Scale & Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {projectScaleMultipliers.map((scale) => (
                <button
                  type="button"
                  key={scale.id}
                  onClick={() => setScaleId(scale.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    scaleId === scale.id
                      ? 'border-blue-500 bg-blue-500/15 text-white font-semibold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs text-white font-medium mb-0.5">{scale.name}</div>
                  <div className="text-[10px] text-slate-400">{scale.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Velocity & Speed */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              3. Delivery Velocity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {speedMultipliers.map((spd) => (
                <button
                  type="button"
                  key={spd.id}
                  onClick={() => setSpeedId(spd.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    speedId === spd.id
                      ? 'border-indigo-500 bg-indigo-500/15 text-white font-semibold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs text-white font-medium mb-0.5">{spd.name}</div>
                  <div className="text-[10px] text-slate-400">{spd.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Enterprise Add-ons */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              4. Enterprise Assurance Packs
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={include24x7Support}
                    onChange={(e) => setInclude24x7Support(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
                  />
                  <div>
                    <div className="text-xs font-medium text-white">24/7 SRE Monitoring & Incident Response (+ $3.5k)</div>
                    <div className="text-[11px] text-slate-400">15-minute SLA response time with Datadog/PagerDuty</div>
                  </div>
                </div>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeSoc2Pack}
                    onChange={(e) => setIncludeSoc2Pack(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
                  />
                  <div>
                    <div className="text-xs font-medium text-white">SOC 2 Type II & Security Audit Pack (+ $6k)</div>
                    <div className="text-[11px] text-slate-400">Threat modeling, SAST/DAST gating & evidence binder</div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Output Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 rounded-2xl bg-gradient-to-b from-[#111726] to-[#0d121f] border border-slate-700/80 p-6 sm:p-7 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Calculated Scope</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Instant Estimate
              </span>
            </div>

            {/* Price Output */}
            <div>
              <span className="text-xs text-slate-400">Estimated Total Investment Range</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {formatCurrency(lowEstimate)} &ndash; {formatCurrency(highEstimate)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Fixed-milestone guarantee with zero hidden consulting fees.
              </p>
            </div>

            {/* Scope Details */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Estimated Delivery Timeline:
                </span>
                <span className="text-white font-bold font-mono">{calculatedWeeks} &ndash; {calculatedWeeks + 2} Weeks</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-400" />
                  Allocated Squad:
                </span>
                <span className="text-white font-bold font-mono">{teamSize}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Warranty & SLA:
                </span>
                <span className="text-emerald-400 font-bold">30 Days Included</span>
              </div>
            </div>

            {/* What's included checklist */}
            <div className="text-xs space-y-2 text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Full Intellectual Property & Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Automated CI/CD & Infrastructure as Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Weekly sprint demos & direct Slack/Jira access</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <span>Lock In Estimate & Book Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedServices[0]}
      />
    </div>
  );
};
