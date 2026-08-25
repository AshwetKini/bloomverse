'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedService, setSelectedService] = useState<string>(initialService || 'cloud-devops');
  const [budget, setBudget] = useState<string>('$25k - $50k');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    timeline: 'Within 30 Days',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600" />

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center my-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 ring-8 ring-emerald-100 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Consultation Request Received!</h3>
            <p className="text-slate-600 max-w-md text-sm mb-6">
              Thank you, <span className="text-blue-600 font-semibold">{formData.fullName || 'Partner'}</span>. Our Principal Cloud & AI Architect will review your requirements for <span className="text-slate-900 font-medium">{formData.company || 'your project'}</span> and reach out within 4 business hours.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full max-w-md text-left text-xs text-slate-600 space-y-2 mb-8">
              <div className="flex justify-between">
                <span>Selected Focus:</span>
                <span className="text-slate-900 font-semibold">{servicesData.find(s => s.id === selectedService)?.title || 'General Architecture'}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Budget:</span>
                <span className="text-slate-900 font-semibold">{budget}</span>
              </div>
              <div className="flex justify-between">
                <span>Target Timeline:</span>
                <span className="text-slate-900 font-semibold">{formData.timeline}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-500/20"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 overflow-y-auto">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Book Technical Discovery Call
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Architect Your Solution with Bloomverse
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Direct consultation with a Senior IT Architect. Non-disclosure protected.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Primary IT Service Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {servicesData.map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-2.5 text-left text-xs rounded-xl border transition-all ${
                        selectedService === srv.id
                          ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-semibold shadow-sm'
                          : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300 hover:text-slate-900 hover:bg-white'
                      }`}
                    >
                      <span className="block truncate">{srv.title.split('&')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  2. Approximate Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['<$25k', '$25k - $50k', '$50k - $150k', '$150k+ / Enterprise'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`py-2 px-3 text-center text-xs rounded-xl border transition-all ${
                        budget === b
                          ? 'border-blue-600 bg-blue-600 text-white font-semibold shadow-sm'
                          : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Company Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                  >
                    <option value="Immediately">Immediately (Urgent)</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="1 - 3 Months">1 - 3 Months</option>
                    <option value="Exploring Feasibility">Exploring Feasibility</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Project Brief or Core Technical Challenge (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your current infrastructure, goals, or upcoming tech bottlenecks..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict NDA Protected &bull; Direct Architect Reply</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Architecture Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

