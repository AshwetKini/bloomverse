'use client';

import React from 'react';
import { ServiceItem } from '@/data/servicesData';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Database, 
  Users 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Cloud,
  Cpu,
  Code2,
  ShieldCheck,
  Database,
  Users
};

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  const IconComponent = iconMap[service.iconName] || Cloud;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header Visual Bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Top Info */}
          <div className="flex items-start gap-4">
            <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg shrink-0`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-800 text-cyan-400 border border-slate-700 mb-1.5">
                {service.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {service.title}
              </h2>
              <p className="text-slate-300 text-sm mt-1">
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-800">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-3 left-4 right-4 text-xs text-white bg-slate-900/80 backdrop-blur-md p-2.5 rounded-lg border border-slate-800/80 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{service.highlight}</span>
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Core Overview</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-lg sm:text-xl font-bold text-cyan-400">{metric.value}</div>
                <div className="text-[11px] text-slate-400 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Feature Capabilities Grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Enterprise Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Guaranteed Deliverables</h4>
            <div className="space-y-2">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Core Technology Ecosystem</h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Sprint-ready deployment within 7 business days.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(service.id);
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <span>Consult on {service.category}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
