'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calculator, 
  Activity, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';
import { ConsultationModal } from '../contact/ConsultationModal';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'cloud' | 'ai'>('metrics');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#07090e]">
      {/* Dynamic Background Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-32 left-10 w-[450px] h-[320px] bg-indigo-600/15 rounded-full blur-[110px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-slate-200 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent font-semibold">
                Enterprise Cloud, DevOps & Applied AI Systems
              </span>
              <span className="text-slate-500 hidden sm:inline">&bull;</span>
              <span className="text-slate-400 hidden sm:inline">bloomverse.com</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Architecting the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Enterprise IT
              </span>{' '}
              & Autonomous Intelligence.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Bloomverse provides end-to-end cloud infrastructure, autonomous AI agents, bespoke software engineering, and zero-trust cybersecurity for organizations demanding non-negotiable speed and 99.999% reliability.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Schedule Free Architecture Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/calculator"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Estimate Project Scope</span>
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% US & Global Tech Squads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Guaranteed 2-Week Sprint Velocity</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Tech Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0d121f]/90 border border-slate-800 shadow-2xl shadow-blue-600/10 backdrop-blur-xl overflow-hidden">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#090d17]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">bloomverse-core-engine</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400">ONLINE</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/50 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors ${
                    activeTab === 'metrics'
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-800/40 font-semibold'
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
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-slate-800/40 font-semibold'
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
                      ? 'text-purple-400 border-b-2 border-purple-400 bg-slate-800/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI Agent RAG</span>
                </button>
              </div>

              {/* Console Body */}
              <div className="p-5 font-mono text-xs space-y-4 min-h-[280px]">
                {activeTab === 'metrics' && (
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Global Cluster Latency</span>
                      <span className="text-cyan-400 font-bold text-sm">18.4ms (p99)</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Multi-Region Uptime SLA</span>
                      <span className="text-emerald-400 font-bold text-sm">99.999% Verified</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Enterprise Cloud Cost Savings</span>
                      <span className="text-indigo-400 font-bold text-sm">$42,000,000+</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
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
                      <div>&bull; aws_eks_cluster.bloomverse_mesh: Created</div>
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
                      [AGENT COMPLETED] Synthesized 2,400 medical records in 1.1s
                    </div>
                  </div>
                )}

                {/* Footer bar inside console */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Autonomous SRE Active
                  </span>
                  <span className="text-cyan-400">Ready for Migration &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">99.999%</div>
            <div className="text-xs sm:text-sm text-cyan-400 font-medium">Uptime Guarantee</div>
            <div className="text-[11px] text-slate-400 mt-1">Multi-cloud active-active failover</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">18x</div>
            <div className="text-xs sm:text-sm text-blue-400 font-medium">Deployment Velocity</div>
            <div className="text-[11px] text-slate-400 mt-1">Automated GitOps & CI/CD pipelines</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">45%+</div>
            <div className="text-xs sm:text-sm text-emerald-400 font-medium">Cloud FinOps Reduction</div>
            <div className="text-[11px] text-slate-400 mt-1">Guaranteed cloud waste elimination</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Top 1%</div>
            <div className="text-xs sm:text-sm text-indigo-400 font-medium">Senior Tech Talent</div>
            <div className="text-[11px] text-slate-400 mt-1">Silicon Valley & Global architects</div>
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
