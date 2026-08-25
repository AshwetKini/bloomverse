'use client';

import React, { useState } from 'react';
import { 
  Cloud, 
  Cpu, 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

interface TechCategoryDomain {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: {
    bg: string;
    text: string;
    border: string;
    badge: string;
  };
  technologies: {
    name: string;
    tag: string;
  }[];
  standard: string;
}

const architectureDomains: TechCategoryDomain[] = [
  {
    id: 'cloud-infra',
    title: 'Cloud & Infrastructure',
    subtitle: 'Resilient multi-cloud, container orchestration & automated IaC',
    icon: Cloud,
    color: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'hover:border-blue-300',
      badge: 'bg-blue-50/80 text-blue-700 border-blue-200'
    },
    technologies: [
      { name: 'Amazon Web Services (AWS)', tag: 'EKS, Lambda, S3, RDS' },
      { name: 'Google Cloud (GCP)', tag: 'GKE, BigQuery, Vertex AI' },
      { name: 'Microsoft Azure', tag: 'AKS, Cosmos DB, Azure OpenAI' },
      { name: 'Kubernetes & Docker', tag: 'Istio Mesh, Auto-Scaling' },
      { name: 'Terraform & Pulumi', tag: 'Multi-Region GitOps IaC' },
      { name: 'ArgoCD & GitHub Actions', tag: 'Zero-Downtime Blue/Green' }
    ],
    standard: '99.999% SLA • Multi-Region Active-Active Failover'
  },
  {
    id: 'applied-ai',
    title: 'Applied AI & Autonomous Systems',
    subtitle: 'Production LLMs, agentic orchestration & low-latency RAG',
    icon: Cpu,
    color: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'hover:border-purple-300',
      badge: 'bg-purple-50/80 text-purple-700 border-purple-200'
    },
    technologies: [
      { name: 'OpenAI & Anthropic Claude', tag: 'Function Calling & Structured Outputs' },
      { name: 'PyTorch & HuggingFace', tag: 'LoRA & Domain Fine-Tuning' },
      { name: 'LangChain & LlamaIndex', tag: 'Multi-Agent Recursive Retrieval' },
      { name: 'Pinecone & pgvector', tag: 'Hybrid Semantic Search' },
      { name: 'vLLM & Ray Serve', tag: 'Distributed Low-Latency GPU Inference' }
    ],
    standard: 'Sub-50ms Retrieval • Enterprise Context Grounding'
  },
  {
    id: 'frontend-mobile',
    title: 'Modern Web & Mobile',
    subtitle: 'High-performance interactive interfaces with strict type safety',
    icon: Layout,
    color: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'hover:border-emerald-300',
      badge: 'bg-emerald-50/80 text-emerald-700 border-emerald-200'
    },
    technologies: [
      { name: 'Next.js 14 & React 19', tag: 'App Router, Server Components' },
      { name: 'TypeScript', tag: 'End-to-End Type Safety' },
      { name: 'Tailwind CSS', tag: 'Design Systems & Responsive Layouts' },
      { name: 'React Native & Expo', tag: 'Native iOS & Android Apps' },
      { name: 'Flutter', tag: 'Cross-Platform High-FPS UI' }
    ],
    standard: '100% Core Web Vitals • Accessibility Compliant'
  },
  {
    id: 'backend-apis',
    title: 'Backend & High-Concurrency APIs',
    subtitle: 'Asynchronous microservices, low-latency RPC & distributed architectures',
    icon: Server,
    color: {
      bg: 'bg-sky-50',
      text: 'text-sky-600',
      border: 'hover:border-sky-300',
      badge: 'bg-sky-50/80 text-sky-700 border-sky-200'
    },
    technologies: [
      { name: 'Node.js & NestJS', tag: 'Enterprise Modular Architecture' },
      { name: 'Go (Golang)', tag: 'Ultra-Fast High-Throughput Services' },
      { name: 'Python & FastAPI', tag: 'Asynchronous AI & REST Endpoints' },
      { name: 'GraphQL & gRPC', tag: 'Binary Protobuf & Flexible Querying' }
    ],
    standard: 'Sub-10ms Microservice Latency • Zero Blocking I/O'
  },
  {
    id: 'data-streaming',
    title: 'Data & Event Streaming',
    subtitle: 'Real-time pub/sub pipelines, warehousing & low-latency caching',
    icon: Database,
    color: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'hover:border-amber-300',
      badge: 'bg-amber-50/80 text-amber-700 border-amber-200'
    },
    technologies: [
      { name: 'PostgreSQL & pgvector', tag: 'ACID Relational & Vector Search' },
      { name: 'Snowflake & BigQuery', tag: 'Petabyte-Scale Analytics Warehousing' },
      { name: 'Apache Kafka', tag: 'Distributed Event Streaming' },
      { name: 'Redis Enterprise', tag: 'In-Memory Caching & Session State' },
      { name: 'dbt (Data Build Tool)', tag: 'Automated SQL Data Modeling' }
    ],
    standard: 'Real-Time Event Ingestion • Petabyte-Scale Ready'
  },
  {
    id: 'security-qa',
    title: 'Zero-Trust Security & QA',
    subtitle: 'Continuous compliance monitoring, secret management & test gating',
    icon: ShieldCheck,
    color: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'hover:border-rose-300',
      badge: 'bg-rose-50/80 text-rose-700 border-rose-200'
    },
    technologies: [
      { name: 'HashiCorp Vault', tag: 'Dynamic Secrets & Automated Key Rotation' },
      { name: 'Wiz & CrowdStrike', tag: 'Cloud Security Posture Management' },
      { name: 'Playwright & Jest', tag: 'Automated E2E & Regression Suites' },
      { name: 'Snyk & SonarQube', tag: 'SAST & Dependency Vulnerability Scans' }
    ],
    standard: 'SOC2 & ISO 27001 Posture • 90%+ Test Coverage'
  }
];

export const TechStackGrid: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const visibleDomains = selectedDomain === 'all' 
    ? architectureDomains 
    : architectureDomains.filter(d => d.id === selectedDomain);

  return (
    <section id="tech-stack" className="py-24 bg-slate-50/60 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Technical Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Enterprise Technology Stack
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Standardized on resilient, battle-tested platforms engineered for sub-second latency and zero downtime.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedDomain === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Complete Architecture
          </button>
          {architectureDomains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedDomain === domain.id
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {domain.title}
            </button>
          ))}
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className={`p-6 rounded-2xl bg-white border border-slate-200 ${domain.color.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${domain.color.bg} ${domain.color.text} border border-slate-100`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {domain.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {domain.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Technology List */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5">
                    {domain.technologies.map((tech, idx) => (
                      <div 
                        key={idx} 
                        className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-800">
                          {tech.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {tech.tag}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standard SLA Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{domain.standard}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

