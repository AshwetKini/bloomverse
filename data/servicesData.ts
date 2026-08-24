export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  color: string;
  bgGlow: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'cloud-devops',
    slug: 'cloud-infrastructure-devops',
    title: 'Cloud Architecture & DevOps Automation',
    category: 'Infrastructure',
    tagline: 'Hyper-scalable, resilient cloud systems built for 99.999% uptime and lightning CI/CD velocity.',
    description: 'We design, migrate, and modernize cloud-native infrastructure across AWS, GCP, and Azure. From Kubernetes orchestrations to GitOps pipelines, we eliminate downtime, optimize cloud spend by up to 45%, and accelerate release cycles.',
    iconName: 'Cloud',
    badge: 'Enterprise Cloud',
    color: 'from-blue-500 to-cyan-400',
    bgGlow: 'rgba(59, 130, 246, 0.15)',
    features: [
      'Multi-Cloud & Hybrid Cloud Strategy (AWS, Azure, GCP)',
      'Kubernetes, EKS, GKE & Container Mesh Architecture',
      'Automated Infrastructure as Code (Terraform, Pulumi, Ansible)',
      'Zero-Downtime GitOps & CI/CD Pipelines (ArgoCD, GitHub Actions)',
      'FinOps Cloud Cost Optimization & FinGov Compliance',
      '24/7 SRE Monitoring, Observability & Incident Response'
    ],
    deliverables: [
      'Production-ready Terraform/IaC modules',
      'High-availability Kubernetes cluster configuration',
      'Continuous Delivery automated pipelines with security gating',
      'Datadog/Grafana observability dashboards & alert playbooks'
    ],
    technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Kubernetes', 'Terraform', 'Docker', 'ArgoCD', 'Prometheus', 'Datadog'],
    metrics: [
      { label: 'Avg. Cloud Cost Reduction', value: '42%' },
      { label: 'Deployment Frequency', value: '18x/day' },
      { label: 'Uptime SLA Delivered', value: '99.995%' }
    ],
    highlight: 'Saved Global FinTech $1.2M annually while reducing deployment rollback rates to under 0.1%.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'applied-ai',
    slug: 'applied-ai-engineering',
    title: 'Applied AI & Autonomous Agent Systems',
    category: 'Artificial Intelligence',
    tagline: 'Transform raw data into autonomous workflows, fine-tuned LLMs, and intelligent predictive engines.',
    description: 'We bring research-grade Artificial Intelligence to production. Our AI engineers build multi-agent LLM systems, custom fine-tuned foundation models, RAG architectures with sub-second retrieval, and computer vision pipelines.',
    iconName: 'Cpu',
    badge: 'AI & Machine Learning',
    color: 'from-purple-500 to-indigo-400',
    bgGlow: 'rgba(139, 92, 246, 0.15)',
    features: [
      'Custom LLM Fine-Tuning, LoRA & Domain Adaptation',
      'Multi-Agent Autonomous Workflows & Tool-Calling Agents',
      'Enterprise Hybrid RAG (Retrieval Augmented Generation) Pipelines',
      'Edge AI & Computer Vision for Real-Time Inference',
      'LLMOps, Prompt Engineering & Automated Eval Suites',
      'Predictive Modeling, Time-Series Forecasting & NLP'
    ],
    deliverables: [
      'End-to-end proprietary LLM agent platform',
      'Vector DB search pipeline (Milvus/Pinecone/pgvector)',
      'Automated evaluation benchmark & safety guardrails',
      'Low-latency inference API endpoints with GPU autoscaling'
    ],
    technologies: ['OpenAI', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'PyTorch', 'Hugging Face', 'Pinecone', 'vLLM', 'Ray'],
    metrics: [
      { label: 'Query Latency', value: '< 250ms' },
      { label: 'Accuracy Benchmark', value: '98.4%' },
      { label: 'Manual Hours Automated', value: '14,000+ hrs/mo' }
    ],
    highlight: 'Deployed enterprise document intelligence agent for Healthcare provider processing 50k+ records/hr.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'custom-software',
    slug: 'custom-enterprise-software',
    title: 'Custom Enterprise Software Engineering',
    category: 'Software Engineering',
    tagline: 'Bespoke web applications, high-concurrency backends, and flawless mobile experiences.',
    description: 'From high-scale SaaS architectures to mission-critical internal portals, we engineer modular, performant, and maintainable software designed to handle millions of transactions with sub-millisecond database queries.',
    iconName: 'Code2',
    badge: 'Next-Gen Engineering',
    color: 'from-emerald-500 to-teal-400',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
    features: [
      'Full-Stack Next.js, React, Node.js & Go Architectures',
      'High-Throughput Microservices & Event-Driven Systems (Kafka, RabbitMQ)',
      'Cross-Platform Mobile Apps (React Native, Flutter, Swift/Kotlin)',
      'GraphQL & High-Performance REST API Gateways',
      'Modern Database Engineering (PostgreSQL, MongoDB, DynamoDB)',
      'Legacy Modernization & Monolith-to-Microservices Migration'
    ],
    deliverables: [
      'Type-safe modular application codebase with 90%+ test coverage',
      'Scalable database schemas & caching layer (Redis)',
      'Production deployment scripts & API documentation (OpenAPI/Swagger)',
      'Interactive design system & Figma-to-code components'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Performance Score', value: '99/100' },
      { label: 'Concurrent Users Scaled', value: '2.5M+' },
      { label: 'Time to Market', value: '3x Faster' }
    ],
    highlight: 'Engineered B2B SaaS platform handling $850M+ GMV with 99.999% transaction reliability.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity-zero-trust',
    title: 'Zero-Trust Cybersecurity & Compliance',
    category: 'Security & Compliance',
    tagline: 'Impenetrable defense frameworks, continuous penetration testing, and compliance certification readiness.',
    description: 'Safeguard your enterprise perimeter against advanced persistent threats. We implement defense-in-depth security architectures, automate DevSecOps code scanning, and fast-track SOC2 Type II, ISO 27001, and HIPAA certifications.',
    iconName: 'ShieldCheck',
    badge: 'Zero-Trust Security',
    color: 'from-rose-500 to-pink-400',
    bgGlow: 'rgba(244, 63, 94, 0.15)',
    features: [
      'Zero-Trust Architecture & Identity Access Management (Okta, Auth0)',
      'Continuous Threat Modeling & Red-Team Penetration Testing',
      'Cloud Security Posture Management (CSPM) & Vulnerability Audits',
      'DevSecOps Automated SAST/DAST & Container Scanning',
      'Compliance Automation (SOC 2 Type II, ISO 27001, HIPAA, GDPR)',
      'Incident Response & 24/7 Security Operations Center (SOC)'
    ],
    deliverables: [
      'Comprehensive Vulnerability & Penetration Audit Report',
      'Remediation patch plans & security policy blueprints',
      'SOC2 / ISO27001 audit-ready evidence binder',
      'Automated security CI/CD pipeline integration'
    ],
    technologies: ['CrowdStrike', 'Wiz', 'HashiCorp Vault', 'Snyk', 'Okta', 'Splunk', 'Tenable', 'Trivy', 'SonarQube'],
    metrics: [
      { label: 'Vulnerabilities Mitigated', value: '100%' },
      { label: 'Audit Pass Rate', value: '100% 1st Try' },
      { label: 'Threat Response Time', value: '< 2 mins' }
    ],
    highlight: 'Prepared Series-C Tech Company for global banking audits with zero critical findings in under 60 days.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'data-analytics',
    slug: 'data-engineering-analytics',
    title: 'Data Engineering & Real-Time Analytics',
    category: 'Data & Insights',
    tagline: 'Modern data stack pipelines turning petabytes of disparate data into instant competitive advantage.',
    description: 'Eliminate data silos with real-time streaming architectures, modern cloud data warehouses, and reverse-ETL pipelines. We enable executive decision-making with interactive semantic BI layers and real-time anomaly alerts.',
    iconName: 'Database',
    badge: 'Modern Data Stack',
    color: 'from-amber-500 to-orange-400',
    bgGlow: 'rgba(245, 158, 11, 0.15)',
    features: [
      'Lakehouse & Modern Data Warehouse Architecture (Snowflake, Databricks, BigQuery)',
      'Real-Time Event Streaming Pipelines (Apache Kafka, Flink, Spark)',
      'Data Modeling, Transformations & Governance (dbt, Airflow, Dagster)',
      'Enterprise BI & Executive Dashboards (Looker, Tableau, PowerBI)',
      'Reverse ETL & Customer 360 Activation',
      'Data Quality Automation & Schema Validation'
    ],
    deliverables: [
      'Scalable ETL/ELT pipelines with automated data lineage',
      'Consolidated data warehouse schema and dbt documentation',
      'Interactive executive dashboards with automated alerts',
      'Data governance & cataloging framework'
    ],
    technologies: ['Snowflake', 'Databricks', 'Apache Kafka', 'dbt', 'Apache Spark', 'Google BigQuery', 'Airflow', 'Looker', 'ClickHouse'],
    metrics: [
      { label: 'Data Processing Speed', value: '10x Faster' },
      { label: 'Daily Processed Volume', value: '50TB+' },
      { label: 'Query Cost Reduction', value: '60%' }
    ],
    highlight: 'Architected streaming pipeline for E-Commerce giant handling 120,000 real-time checkout events/sec.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'dedicated-pods',
    slug: 'dedicated-engineering-pods',
    title: 'Dedicated Engineering Pods & Team Augmentation',
    category: 'Engineering Teams',
    tagline: 'Top 1% vetted software architects, senior full-stack devs, and AI researchers embedded in your sprint cycle.',
    description: 'Scale your engineering output without recruitment bottlenecks. We deploy dedicated agile squads equipped with tech leads, senior engineers, QA automation specialists, and DevOps architects tailored to your exact stack.',
    iconName: 'Users',
    badge: 'Scale On-Demand',
    color: 'from-cyan-500 to-blue-500',
    bgGlow: 'rgba(6, 182, 212, 0.15)',
    features: [
      'Full-Squad Deployment (Tech Lead, Senior Engineers, QA, Product Manager)',
      'Seamless Agile & Jira/Slack Integration in Your Time Zone',
      'Top 1% Pre-Vetted Silicon Valley Caliber Engineers',
      'Flexible Scaling: Ramp Up or Down with 2-Week Notice',
      'Direct Code Ownership & IP Protection Guaranteed',
      'Knowledge Transfer & Architectural Documentation'
    ],
    deliverables: [
      'Dedicated engineering team matching your sprint cadence',
      'Weekly velocity reports and sprint reviews',
      'Comprehensive codebase documentation and pair programming',
      'Full IP and repository transfer'
    ],
    technologies: ['Agile / Scrum', 'Jira', 'GitHub Enterprise', 'Slack', 'Linear', 'CI/CD Best Practices'],
    metrics: [
      { label: 'Time to Onboard Squad', value: '< 7 Days' },
      { label: 'Sprint Velocity Increase', value: '250%' },
      { label: 'Client Retention Rate', value: '96%' }
    ],
    highlight: 'Augmented scaleup core engineering team from 5 to 35 engineers, unlocking $40M Series B raise.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
  }
];
