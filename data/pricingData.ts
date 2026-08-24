export interface EngagementPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  description: string;
  rate: string;
  billingPeriod: string;
  deliverables: string[];
  idealFor: string;
  ctaText: string;
}

export const engagementPlans: EngagementPlan[] = [
  {
    id: 'fixed-scope',
    name: 'Milestone / Fixed-Scope',
    tagline: 'Predictable delivery for clearly defined software & cloud initiatives.',
    description: 'Perfect for building an MVP, migrating systems to the cloud, or rolling out custom AI pipelines with defined deliverables and milestones.',
    rate: 'Starting at $15,000',
    billingPeriod: 'per project milestone',
    deliverables: [
      'Comprehensive Architecture Blueprint & Scope Spec',
      'Sprint-based delivery with weekly demo reviews',
      'Dedicated Tech Lead & QA engineer included',
      'Full source code transfer & IP protection',
      '30-Day Post-Launch SLA & Bug-Fix Warranty',
      'CI/CD Pipeline & Automated Tests setup'
    ],
    idealFor: 'Startups & enterprises launching specific products, migrations, or AI implementations.',
    ctaText: 'Scope Your Project'
  },
  {
    id: 'dedicated-pod',
    name: 'Dedicated Engineering Pod',
    badge: 'Most Popular',
    popular: true,
    tagline: 'High-velocity autonomous agile pod embedded into your workflow.',
    description: 'A full cross-functional team (Tech Lead, Full-Stack Devs, AI/DevOps Specialist, QA) working exclusively on your product backlog.',
    rate: '$14,500 - $28,000',
    billingPeriod: 'per month / squad',
    deliverables: [
      'Full Agile Squad (3 to 6 dedicated senior engineers)',
      'Direct communication via Slack, Teams, Jira & GitHub',
      'Seamless timezone overlap (US / UK / APAC)',
      'Flexible sprint allocation and instant scale up/down',
      'Weekly architectural reviews & velocity reporting',
      'Continuous security scanning and code health audits'
    ],
    idealFor: 'Scaleups & enterprises scaling fast without recruitment friction.',
    ctaText: 'Deploy a Dedicated Pod'
  },
  {
    id: 'enterprise-advisory',
    name: 'Enterprise IT Advisory & CTO Office',
    tagline: 'Strategic fractional CTO, Cloud Architect & Security audit leadership.',
    description: 'Executive technology guidance for enterprise digital transformation, cloud cost optimization, SOC2 compliance audits, and AI strategy.',
    rate: 'Custom Retainer',
    billingPeriod: 'based on enterprise scope',
    deliverables: [
      'Fractional Chief Architect & Security Officer access',
      'Cloud FinOps audit and guaranteed 25%+ cost reduction',
      'SOC2 / ISO 27001 readiness review and remediation',
      'Executive AI roadmap and feasibility benchmarks',
      'Vendor evaluation & RFP technical defense',
      'Quarterly executive boardroom presentations'
    ],
    idealFor: 'Mid-market & Fortune 1000 seeking top-tier architectural oversight.',
    ctaText: 'Schedule Executive Audit'
  }
];

export interface ScopeOption {
  id: string;
  name: string;
  baseCost: number;
  baseWeeks: number;
  description: string;
}

export const serviceScopeOptions: ScopeOption[] = [
  { id: 'cloud', name: 'Cloud Infrastructure & DevOps Migration', baseCost: 12000, baseWeeks: 4, description: 'Terraform IaC, Kubernetes, Multi-region setup, CI/CD' },
  { id: 'ai', name: 'Applied AI, LLM & Agent Platform', baseCost: 16000, baseWeeks: 5, description: 'Fine-tuning, RAG vector pipeline, autonomous agents, guardrails' },
  { id: 'custom-web', name: 'Enterprise Web Application (Next.js)', baseCost: 18000, baseWeeks: 6, description: 'Modern responsive web platform, API gateways, database architecture' },
  { id: 'mobile', name: 'Cross-Platform Mobile App (iOS/Android)', baseCost: 20000, baseWeeks: 7, description: 'React Native / Flutter, offline sync, real-time push' },
  { id: 'security', name: 'Zero-Trust Cybersecurity & SOC2 Readiness', baseCost: 14000, baseWeeks: 4, description: 'Penetration testing, threat modeling, IAM, audit binder' },
  { id: 'data', name: 'Data Lakehouse & Streaming Pipeline', baseCost: 15000, baseWeeks: 5, description: 'Snowflake/BigQuery, Kafka streams, dbt modeling, BI' },
];

export const projectScaleMultipliers = [
  { id: 'mvp', name: 'MVP / Proof of Concept', multiplier: 1.0, weeksAdd: 0, desc: 'Core feature validation, rapid prototype' },
  { id: 'production', name: 'Production / Growth Stage', multiplier: 1.6, weeksAdd: 3, desc: 'High availability, full test coverage, monitoring' },
  { id: 'enterprise', name: 'Enterprise Scale / Mission-Critical', multiplier: 2.4, weeksAdd: 6, desc: 'Multi-region failover, strict compliance, 24/7 SLA' }
];

export const speedMultipliers = [
  { id: 'standard', name: 'Standard Velocity', factor: 1.0, desc: 'Regular agile 2-week sprint rhythm' },
  { id: 'accelerated', name: 'Accelerated Fast-Track', factor: 1.35, desc: 'Double squad allocation, 40% faster delivery' },
];
