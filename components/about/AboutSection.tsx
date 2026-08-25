'use client';

import React from 'react';
import { companyValues, leadershipTeam, officeLocations } from '@/data/companyData';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Eye, 
  TrendingUp, 
  Globe2 
} from 'lucide-react';

const valueIcons: Record<string, any> = {
  ShieldCheck,
  Zap,
  Eye,
  TrendingUp
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> About Bloomverse
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built by Architects. Driven by Engineering Excellence.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Bloomverse was founded to eliminate the sluggishness, bloat, and technical compromises of legacy IT consulting. We engineer mission-critical systems with Silicon Valley speed and military-grade precision.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {companyValues.map((val, idx) => {
            const Icon = valueIcons[val.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Executive Leadership</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Veteran distributed systems architects and machine learning researchers leading from the front.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center hover:border-blue-300 hover:shadow-md transition-all shadow-sm"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-blue-500/20 shadow-sm"
                />
                <h4 className="text-sm font-bold text-slate-900">{leader.name}</h4>
                <div className="text-xs text-blue-600 font-semibold mb-3">{leader.role}</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Delivery Hubs Showcase */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-blue-600" />
                Global Presence, 24/7 Follow-the-Sun Engineering
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Distributed engineering hubs across North America, Europe, and Asia-Pacific.
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
              Active Timezones: UTC-8 to UTC+8
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {officeLocations.map((loc) => (
              <div key={loc.city} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900 text-sm">{loc.city}</span>
                  {loc.isHQ && <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-mono font-semibold">Global HQ</span>}
                </div>
                <div className="text-xs text-blue-600 font-medium mb-1">{loc.country}</div>
                <div className="text-[11px] text-slate-600 line-clamp-2">{loc.address}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-2">{loc.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

