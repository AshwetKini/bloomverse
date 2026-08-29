'use client';

import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Eye, 
  TrendingUp, 
  Cpu, 
  Code2, 
  Layers, 
  Workflow, 
  CheckCircle2 
} from 'lucide-react';

const engineeringPrinciples = [
  {
    icon: ShieldCheck,
    title: 'Architectural Rigor & Type Safety',
    desc: 'We build with strict end-to-end type safety, modular microservices, and rock-solid cloud infrastructure engineered for 99.999% uptime.'
  },
  {
    icon: Zap,
    title: 'High Velocity Without Technical Debt',
    desc: 'Velocity shouldn’t mean compromised quality. We leverage battle-tested blueprints, automated CI/CD, and modern frameworks to ship in weeks.'
  },
  {
    icon: Code2,
    title: '100% Client Code & IP Ownership',
    desc: 'You own everything we build. Complete source code transfer, infrastructure-as-code scripts, and zero vendor lock-in from day one.'
  },
  {
    icon: TrendingUp,
    title: 'Quantifiable Business ROI',
    desc: 'Every architecture decision is measured against real impact: reduced cloud bills, sub-second latency, higher conversion, and scalable growth.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Story & Philosophy Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Our Mission &amp; Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering with Silicon Valley Speed &amp; Enterprise Rigor.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              bloomvers was founded to eliminate the sluggishness, bloat, and technical compromises of legacy IT consulting. We partner with forward-thinking organizations, scaleups, and digital brands to design, build, and deploy software that stands the test of scale.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether building autonomous AI agent workflows, migrating mission-critical workloads to multi-cloud Kubernetes, or engineering high-throughput SaaS platforms, our squads write clean, production-grade code designed to perform.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 reveal-on-scroll delay-200">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <Workflow className="w-5 h-5 text-blue-600" />
                The bloomvers Difference
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Architect-Led Engineering</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Every project is spearheaded by Principal Architects with real production experience scaling high-traffic systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Modern Cloud &amp; AI Native</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">We don’t rely on outdated legacy stacks. We build on Next.js, TypeScript, Go, Python, Kubernetes, and state-of-the-art AI foundation models.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dual Model: Enterprise + Consumer Incubation</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Beyond consulting, we build and operate consumer platforms like TeenHustle, giving our team firsthand mastery of product scaling and real-time marketplaces.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering DNA / Core Principles */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" /> Engineering DNA
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Principles that Drive Every Line of Code
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate on an uncompromising set of engineering tenets designed to guarantee system longevity, security, and velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-sm hover-lift reveal-on-scroll delay-${idx * 100 + 100}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{principle.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

