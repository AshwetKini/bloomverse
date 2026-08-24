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
    <section className="py-24 bg-[#05070a] relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted by CTOs, VPs of Engineering & Enterprise Leaders
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how engineering leaders rate their collaboration with Bloomverse across mission-critical software and cloud initiatives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating Stars & Project Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                    {item.metric}
                  </span>
                </div>

                {/* Content */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-slate-400">{item.role}, <span className="text-slate-300">{item.company}</span></p>
                  </div>
                </div>
                <div className="hidden sm:block text-[11px] text-slate-400 font-mono">
                  {item.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Compliance Trust Bar */}
        <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white">Enterprise Security & Compliance Vault</h3>
            <p className="text-xs text-slate-400 mt-1">
              Every system we deploy complies with the strictest global data governance mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityBadges.map((badge, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-white">{badge.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
