export interface TechItem {
  name: string;
  category: 'Cloud & DevOps' | 'Frontend & Mobile' | 'Backend & APIs' | 'AI & Machine Learning' | 'Data & Storage' | 'Security & Testing';
  icon: string;
  description: string;
  popular?: boolean;
}

export const techStackData: TechItem[] = [
  // Cloud & DevOps
  { name: 'Amazon Web Services (AWS)', category: 'Cloud & DevOps', icon: 'Cloud', description: 'Enterprise cloud infrastructure, EKS, Lambda, S3, RDS, Bedrock', popular: true },
  { name: 'Google Cloud (GCP)', category: 'Cloud & DevOps', icon: 'Globe', description: 'BigQuery, Vertex AI, GKE, Cloud Run high-throughput services', popular: true },
  { name: 'Microsoft Azure', category: 'Cloud & DevOps', icon: 'Layers', description: 'Enterprise hybrid cloud, Azure OpenAI, AKS, Cosmos DB' },
  { name: 'Kubernetes & Docker', category: 'Cloud & DevOps', icon: 'Box', description: 'Container orchestration, auto-scaling, service meshes (Istio)', popular: true },
  { name: 'Terraform & Pulumi', category: 'Cloud & DevOps', icon: 'Code', description: 'Infrastructure as Code, multi-cloud automated provisioning', popular: true },
  { name: 'ArgoCD & GitHub Actions', category: 'Cloud & DevOps', icon: 'GitBranch', description: 'Automated GitOps deployments, continuous delivery pipelines' },
  
  // AI & ML
  { name: 'OpenAI / Claude APIs', category: 'AI & Machine Learning', icon: 'Cpu', description: 'Enterprise LLM integration, function calling, structured outputs', popular: true },
  { name: 'PyTorch & HuggingFace', category: 'AI & Machine Learning', icon: 'BrainCircuit', description: 'Deep learning frameworks, model fine-tuning, LoRA adapters', popular: true },
  { name: 'LangChain & LlamaIndex', category: 'AI & Machine Learning', icon: 'Bot', description: 'Agentic workflows, recursive retrieval, memory graphs', popular: true },
  { name: 'Pinecone & Milvus', category: 'AI & Machine Learning', icon: 'Database', description: 'High-dimensional vector embeddings, hybrid semantic search', popular: true },
  { name: 'vLLM & Ray', category: 'AI & Machine Learning', icon: 'Zap', description: 'Distributed GPU inference, low-latency model serving' },

  // Frontend & Mobile
  { name: 'Next.js 14 / React 19', category: 'Frontend & Mobile', icon: 'Layout', description: 'Server Components, SSR/SSG, Edge rendering, App Router', popular: true },
  { name: 'TypeScript', category: 'Frontend & Mobile', icon: 'FileCode', description: 'Strict end-to-end type safety, maintainable codebases', popular: true },
  { name: 'Tailwind CSS', category: 'Frontend & Mobile', icon: 'Palette', description: 'Utility-first modern design systems, fluid dark/light styling', popular: true },
  { name: 'React Native & Expo', category: 'Frontend & Mobile', icon: 'Smartphone', description: 'Cross-platform native iOS & Android applications', popular: true },
  { name: 'Flutter', category: 'Frontend & Mobile', icon: 'Smartphone', description: 'High performance multi-platform UI applications' },

  // Backend & APIs
  { name: 'Node.js & NestJS', category: 'Backend & APIs', icon: 'Server', description: 'Scalable asynchronous microservices, enterprise architecture', popular: true },
  { name: 'Go (Golang)', category: 'Backend & APIs', icon: 'Cpu', description: 'Ultra-fast concurrency, low-latency microservices, cloud tools', popular: true },
  { name: 'Python & FastAPI', category: 'Backend & APIs', icon: 'Code', description: 'High-speed asynchronous REST & WebSocket APIs, AI services', popular: true },
  { name: 'GraphQL & gRPC', category: 'Backend & APIs', icon: 'Network', description: 'Efficient API querying, binary RPC inter-service communication', popular: true },

  // Data & Storage
  { name: 'PostgreSQL & pgvector', category: 'Data & Storage', icon: 'Database', description: 'ACID-compliant relational database, hybrid vector search', popular: true },
  { name: 'Snowflake & BigQuery', category: 'Data & Storage', icon: 'Database', description: 'Cloud data warehousing, petabyte-scale analytics', popular: true },
  { name: 'Apache Kafka', category: 'Data & Storage', icon: 'Radio', description: 'Distributed event streaming, real-time data pipelines', popular: true },
  { name: 'Redis Enterprise', category: 'Data & Storage', icon: 'Zap', description: 'In-memory caching, real-time pub/sub, session state', popular: true },
  { name: 'dbt (data build tool)', category: 'Data & Storage', icon: 'Layers', description: 'Data transformation, modular SQL modeling, automated testing' },

  // Security & Testing
  { name: 'HashiCorp Vault', category: 'Security & Testing', icon: 'Shield', description: 'Dynamic secrets management, automated key rotation', popular: true },
  { name: 'Wiz & CrowdStrike', category: 'Security & Testing', icon: 'ShieldCheck', description: 'Cloud security posture management, endpoint protection', popular: true },
  { name: 'Playwright & Jest', category: 'Security & Testing', icon: 'CheckCircle2', description: 'End-to-end testing, automated unit and regression suites' },
  { name: 'Snyk & SonarQube', category: 'Security & Testing', icon: 'ShieldAlert', description: 'Static application security testing, dependency vulnerability checks' }
];

export const techCategories = [
  'All Technologies',
  'Cloud & DevOps',
  'AI & Machine Learning',
  'Frontend & Mobile',
  'Backend & APIs',
  'Data & Storage',
  'Security & Testing'
] as const;
