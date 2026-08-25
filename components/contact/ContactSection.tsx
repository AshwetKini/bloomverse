'use client';

import React, { useState } from 'react';
import { servicesData } from '@/data/servicesData';
import { officeLocations } from '@/data/companyData';
import { 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('cloud-devops');
  const [budget, setBudget] = useState('$25k - $50k');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Within 30 Days',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let&rsquo;s Architect Something Extraordinary
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Schedule a direct technical consultation with our Principal Architects or request a formal project proposal for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 ring-8 ring-emerald-100 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Confirmed!</h3>
                <p className="text-slate-600 max-w-md text-sm mb-6 leading-relaxed">
                  Thank you, <span className="text-blue-600 font-semibold">{formData.name}</span>. A Principal Engineer from our enterprise advisory group will review your submission and contact you at <span className="text-slate-900 font-medium">{formData.email}</span> within 4 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', timeline: 'Within 30 Days', message: '' });
                  }}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Direct RFP & Architecture Inquiry</h3>
                  <p className="text-xs text-slate-500">Strict Non-Disclosure Agreement (NDA) applied by default.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Service Focus
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
                            : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <span className="block truncate">{srv.title.split('&')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['<$25k', '$25k - $50k', '$50k - $150k', '$150k+'].map((b) => (
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Work Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="s.jenkins@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Company Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Apex Systems"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Desired Start</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                    >
                      <option value="Immediate / Emergency">Immediate / Emergency</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Technical Context & Objective</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your existing infrastructure, goals, or architectural challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 resize-none transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Response guaranteed within 4 hours</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Architecture RFP</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Direct Enterprise Desks</h3>
              
              <div className="space-y-3 text-xs">
                <a href="mailto:solutions@bloomverse.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Executive RFP Desk</div>
                    <div className="font-semibold text-slate-900">solutions@bloomverse.com</div>
                  </div>
                </a>

                <a href="tel:+14158903420" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all">
                  <div className="p-2 rounded-lg bg-sky-50 text-sky-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">US & Global Headquarters</div>
                    <div className="font-semibold text-slate-900">+1 (415) 890-3420</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Timezone Coverage</div>
                    <div className="font-semibold text-slate-900">24/7 Global Engineering Operations</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Global Innovation Hubs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {officeLocations.map((loc) => (
                  <div key={loc.city} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-1.5 text-slate-900 font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>{loc.city}</span>
                      {loc.isHQ && <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1 py-0.2 rounded font-normal font-semibold">HQ</span>}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

