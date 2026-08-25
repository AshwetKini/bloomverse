'use client';

import React from 'react';
import { testimonialsData, securityBadges } from '@/data/testimonialsData';
import { 
  Star, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by CTOs, VPs of Engineering & Enterprise Leaders
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how engineering leaders rate their collaboration with Bloomverse across mission-critical software and cloud initiatives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Rating Stars & Project Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                    {item.metric}
                  </span>
                </div>

                {/* Content */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role}, <span className="text-slate-800 font-medium">{item.company}</span></p>
                  </div>
                </div>
                <div className="hidden sm:block text-[11px] text-slate-500 font-mono">
                  {item.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Compliance Trust Bar */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Enterprise Security & Compliance Vault</h3>
            <p className="text-xs text-slate-600 mt-1">
              Every system we deploy complies with the strictest global data governance mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityBadges.map((badge, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-900">{badge.name}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

