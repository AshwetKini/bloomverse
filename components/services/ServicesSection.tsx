'use client';

import React, { useState } from 'react';
import { servicesData, ServiceItem } from '@/data/servicesData';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ConsultationModal } from '../contact/ConsultationModal';
import { 
  Cloud, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Database, 
  Users, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Cloud,
  Cpu,
  Code2,
  ShieldCheck,
  Database,
  Users
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedServiceIdForConsult, setSelectedServiceIdForConsult] = useState<string>('cloud-devops');

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookFromDetail = (serviceId: string) => {
    setSelectedServiceIdForConsult(serviceId);
    setConsultModalOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-[#07090e] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Comprehensive IT Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            High-Performance IT Engineering for Modern Enterprises
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From zero-downtime multi-cloud migrations to proprietary AI agent workflows, Bloomverse builds the technical backbone that powers hyper-growth.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Cloud;

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative rounded-2xl bg-[#0d121f]/80 border border-slate-800/90 hover:border-slate-700/80 p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between backdrop-blur-sm overflow-hidden"
              >
                {/* Subtle top card glow line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.tagline}
                  </p>

                  {/* Highlight Feature bullets */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metric Pill */}
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between text-xs mb-6">
                    <span className="text-slate-400">{service.metrics[0].label}:</span>
                    <span className="text-cyan-400 font-bold font-mono">{service.metrics[0].value}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedServiceIdForConsult(service.id);
                      setConsultModalOpen(true);
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 rounded-xl transition-all flex items-center gap-1"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Need a specialized custom architecture or hybrid setup?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Our Principal Architects build bespoke solutions tailored to strict enterprise SLAs.</p>
          </div>
          <button
            onClick={() => setConsultModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 shrink-0 flex items-center gap-2"
          >
            <span>Request Custom Architecture Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={handleBookFromDetail}
      />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        initialService={selectedServiceIdForConsult}
      />
    </section>
  );
};
