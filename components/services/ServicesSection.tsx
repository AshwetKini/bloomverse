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
    <section id="services" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Comprehensive IT Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Performance IT Engineering for Modern Enterprises
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From zero-downtime multi-cloud migrations to proprietary AI agent workflows, bloomvers builds the technical backbone that powers hyper-growth.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Cloud;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/50 p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 flex flex-col justify-between overflow-hidden hover-lift reveal-on-scroll delay-${(idx % 3) * 100 + 100}`}
              >
                {/* Subtle top card accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.tagline}
                  </p>

                  {/* Highlight Feature bullets */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metric Pill */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs mb-6">
                    <span className="text-slate-500">{service.metrics[0].label}:</span>
                    <span className="text-blue-700 font-bold font-mono">{service.metrics[0].value}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="text-xs font-semibold text-slate-600 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedServiceIdForConsult(service.id);
                      setConsultModalOpen(true);
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200 rounded-xl transition-all flex items-center gap-1"
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
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-sky-50 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">Need a specialized custom architecture or hybrid setup?</h4>
            <p className="text-xs sm:text-sm text-slate-600">Our Principal Architects build bespoke solutions tailored to strict enterprise SLAs.</p>
          </div>
          <button
            onClick={() => setConsultModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-500/20 shrink-0 flex items-center gap-2"
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

