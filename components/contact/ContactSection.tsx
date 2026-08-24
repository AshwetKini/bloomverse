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
    <section id="contact" className="py-24 bg-[#07090e] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&rsquo;s Architect Something Extraordinary
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Schedule a direct technical consultation with our Principal Architects or request a formal project proposal for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 ring-8 ring-emerald-500/10 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Inquiry Confirmed!</h3>
                <p className="text-slate-300 max-w-md text-sm mb-6 leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. A Principal Engineer from our enterprise advisory group will review your submission and contact you at <span className="text-white font-medium">{formData.email}</span> within 4 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', timeline: 'Within 30 Days', message: '' });
                  }}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Direct RFP & Architecture Inquiry</h3>
                  <p className="text-xs text-slate-400">Strict Non-Disclosure Agreement (NDA) applied by default.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
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
                            ? 'border-cyan-500 bg-cyan-500/10 text-white font-semibold shadow-sm shadow-cyan-500/10'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="block truncate">{srv.title.split('&')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
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
                            ? 'border-blue-500 bg-blue-500/15 text-white font-semibold'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="s.jenkins@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Company Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Apex Systems"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Desired Start</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Immediate / Emergency">Immediate / Emergency</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Technical Context & Objective</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your existing infrastructure, goals, or architectural challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Response guaranteed within 4 hours</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
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
            <div className="rounded-3xl bg-[#0b0f19] border border-slate-800 p-6 sm:p-7 space-y-4">
              <h3 className="text-lg font-bold text-white">Direct Enterprise Desks</h3>
              
              <div className="space-y-3 text-xs">
                <a href="mailto:solutions@bloomverse.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Executive RFP Desk</div>
                    <div className="font-semibold text-white">solutions@bloomverse.com</div>
                  </div>
                </a>

                <a href="tel:+14158903420" className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">US & Global Headquarters</div>
                    <div className="font-semibold text-white">+1 (415) 890-3420</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Timezone Coverage</div>
                    <div className="font-semibold text-white">24/7 Global Engineering Operations</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#0b0f19] border border-slate-800 p-6 sm:p-7 space-y-4">
              <h3 className="text-lg font-bold text-white">Global Innovation Hubs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {officeLocations.map((loc) => (
                  <div key={loc.city} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-white font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{loc.city}</span>
                      {loc.isHQ && <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1 py-0.2 rounded font-normal">HQ</span>}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{loc.address}</p>
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
