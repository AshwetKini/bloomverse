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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header Visual Bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Top Info */}
          <div className="flex items-start gap-4">
            <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-md shrink-0`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-1.5">
                {service.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {service.title}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-200">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-3 left-4 right-4 text-xs text-white bg-slate-900/80 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{service.highlight}</span>
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Core Overview</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-600 font-mono">{metric.value}</div>
                <div className="text-[11px] text-slate-500 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Feature Capabilities Grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Enterprise Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Guaranteed Deliverables</h4>
            <div className="space-y-2">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Core Technology Ecosystem</h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-medium">
            Sprint-ready deployment within 7 business days.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(service.id);
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
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

