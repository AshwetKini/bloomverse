'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calculator, 
  Activity, 
  Cpu, 
  Cloud, 
  Zap
} from 'lucide-react';
import { ConsultationModal } from '../contact/ConsultationModal';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'cloud' | 'ai'>('metrics');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Dynamic Background Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-10 w-[450px] h-[320px] bg-sky-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-32 left-10 w-[500px] h-[340px] bg-indigo-500/10 rounded-full blur-[130px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-blue-700 font-semibold">
                Enterprise Cloud, DevOps & Applied AI Systems
              </span>
              <span className="text-slate-300 hidden sm:inline">&bull;</span>
              <span className="text-slate-500 font-mono hidden sm:inline">bloomvers.com</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Architecting the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                Enterprise IT
              </span>{' '}
              & Autonomous Intelligence.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              bloomvers provides end-to-end cloud infrastructure, autonomous AI agents, bespoke software engineering, and zero-trust cybersecurity for organizations demanding non-negotiable speed and 99.999% reliability.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Schedule Free Architecture Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/calculator"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>Estimate Project Scope</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Interactive Tech Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0f172a] border border-slate-800 shadow-2xl shadow-slate-400/20 overflow-hidden animate-subtle-float">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#090d16]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-400 font-mono ml-2">bloomvers-core-engine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">ONLINE</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-900/80 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors ${
                    activeTab === 'metrics'
                      ? 'text-sky-400 border-b-2 border-sky-400 bg-slate-800/60 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Metrics</span>
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors ${
                    activeTab === 'cloud'
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-slate-800/60 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Cloud CI/CD</span>
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors ${
                    activeTab === 'ai'
                      ? 'text-purple-400 border-b-2 border-purple-400 bg-slate-800/60 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI Agent RAG</span>
                </button>
              </div>

              {/* Console Body */}
              <div className="p-5 font-mono text-xs space-y-4 min-h-[270px]">
                {activeTab === 'metrics' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Global Cluster Latency</span>
                      <span className="text-sky-400 font-bold text-sm">18.4ms (p99)</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Multi-Region Uptime SLA</span>
                      <span className="text-emerald-400 font-bold text-sm">99.999% Verified</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Enterprise Cloud Cost Savings</span>
                      <span className="text-indigo-400 font-bold text-sm">$42,000,000+</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">SOC2 & ISO 27001 Posture</span>
                      <span className="text-emerald-400 font-bold text-sm">100% Compliant</span>
                    </div>
                  </div>
                )}

                {activeTab === 'cloud' && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-500">// Terraform multi-region deployment</div>
                    <div className="text-emerald-400">&gt; terraform apply -auto-approve</div>
                    <div className="text-slate-400 text-[11px] space-y-1 pl-2">
                      <div>&bull; aws_eks_cluster.bloomvers_mesh: Created</div>
                      <div>&bull; argocd_application.fintech_service: Synced</div>
                      <div>&bull; cloudflare_waf_rule.zero_trust: Applied</div>
                    </div>
                    <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]">
                      [SUCCESS] Zero-Downtime Blue/Green Switch: Completed in 3.8s
                    </div>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-500">// Autonomous Multi-Agent Pipeline</div>
                    <div className="text-purple-300">&gt; vector_query: hybrid_search(k=5, rerank=true)</div>
                    <div className="text-slate-400 text-[11px] space-y-1 pl-2">
                      <div>&bull; Pinecone index retrieved in 42ms</div>
                      <div>&bull; Claude 3.5 Sonnet context grounding: 99.4% precision</div>
                      <div>&bull; Tool execution: automated SQL synthesis &amp; execution</div>
                    </div>
                    <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px]">
                      [AGENT COMPLETED] Synthesized 2,400 enterprise records in 1.1s
                    </div>
                  </div>
                )}

                {/* Footer bar inside console */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Autonomous SRE Active
                  </span>
                  <span className="text-sky-400 font-medium">Ready for Migration &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

