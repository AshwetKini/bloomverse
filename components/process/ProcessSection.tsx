'use client';

import React from 'react';
import { 
  Sparkles, 
  Search, 
  FileText, 
  Cpu, 
  Rocket, 
  CheckCircle2 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Deep Discovery & Architecture Audit',
      tagline: 'Day 1 - 7',
      icon: Search,
      color: 'from-blue-500 to-cyan-400',
      description: 'Our Principal Cloud & AI Architects conduct an exhaustive audit of your current stack, bottlenecks, cloud spend, and security posture. We formulate a comprehensive architectural roadmap with guaranteed SLAs.',
      points: ['Full Infrastructure & Cost Audit', 'Security Threat & Compliance Assessment', 'Feasibility Matrix & Scope Blueprint']
    },
    {
      stepNumber: '02',
      title: 'Architectural Blueprint & Proof of Concept',
      tagline: 'Day 8 - 14',
      icon: FileText,
      color: 'from-cyan-400 to-emerald-400',
      description: 'We design modular Infrastructure as Code (IaC) templates, microservices schemas, and test bench prototypes. We validate critical performance hypotheses before deploying full squad capacity.',
      points: ['Modular IaC Terraform/Kubernetes specs', 'Working prototype of core AI/backend logic', 'Executive milestone review & sign-off']
    },
    {
      stepNumber: '03',
      title: 'High-Velocity Agile Engineering',
      tagline: 'Sprint Cycles',
      icon: Cpu,
      color: 'from-emerald-400 to-indigo-400',
      description: 'Your dedicated agile squad executes in continuous 2-week sprint cadences with automated CI/CD test gating, SAST security scans, and weekly live demo walk-throughs in your Slack/Jira workspace.',
      points: ['Direct Slack, Linear & GitHub access', '90%+ Automated test coverage guarantee', 'Continuous GitOps blue-green delivery']
    },
    {
      stepNumber: '04',
      title: 'Zero-Downtime Rollout & 24/7 SRE',
      tagline: 'Scale & Sustain',
      icon: Rocket,
      color: 'from-indigo-400 to-purple-500',
      description: 'We execute zero-downtime production cutovers with automated rollback triggers, followed by proactive 24/7 SRE observability, FinOps cost monitoring, and full codebase knowledge transfer.',
      points: ['Instant automated failover & 99.999% SLA', 'Live Datadog/Grafana observability dashboards', '30-Day Post-Launch Warranty & Handover']
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#05070a] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The 4-Phase Delivery Blueprint
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested agile methodology engineered to eliminate scope creep, maintain strict velocity, and guarantee zero-downtime rollouts.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#0b0f19] border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Step Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-extrabold font-mono text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {s.stepNumber}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                      {s.tagline}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} p-[1px] mb-5`}>
                    <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {s.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {s.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
