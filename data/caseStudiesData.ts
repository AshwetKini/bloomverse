export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    slug: 'fintech-cloud-migration',
    client: 'Apex Global Financial',
    industry: 'FinTech & Banking',
    title: 'Migrating $12B Transaction Engine to Multi-Region Cloud with Zero Downtime',
    summary: 'Architected high-resiliency AWS & Kubernetes infrastructure with distributed caching, cutting latency by 72% and slashing cloud operating expenditure by $1.4M.',
    challenge: 'Apex Financial suffered from legacy on-premise infrastructure bottlenecks during peak trading hours, risking multimillion-dollar trade settlement delays and struggling to achieve SOC2 Type II compliance.',
    solution: 'Bloomverse engineered an automated multi-region active-active cloud architecture on AWS using Terraform IaC, Amazon EKS, and Kafka event streams, supplemented with automated failover in under 4 seconds.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    tags: ['Cloud Migration', 'Kubernetes', 'FinTech', 'Zero-Downtime'],
    metrics: [
      { value: '72%', label: 'Latency Reduction' },
      { value: '$1.4M', label: 'Annual Cost Saved' },
      { value: '99.999%', label: 'Uptime Achieved' },
      { value: '< 4s', label: 'Disaster Failover' }
    ],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Apache Kafka', 'PostgreSQL', 'Datadog'],
    testimonial: {
      quote: 'Bloomverse delivered what two previous consulting giants failed to do in 18 months. Our latency dropped immediately, and our auditors gave us top marks.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer, Apex Financial'
    }
  },
  {
    id: '2',
    slug: 'enterprise-ai-rag-automation',
    client: 'OmniHealth Intelligence',
    industry: 'Healthcare & Life Sciences',
    title: 'Autonomous Clinical Intelligence & Multi-Agent RAG Assistant',
    summary: 'Built a HIPAA-compliant AI knowledge retrieval engine processing over 2.8 million medical documents with 99.2% clinical precision.',
    challenge: 'Doctors and medical researchers spent 14+ hours weekly searching unindexed clinical trials and electronic health records, slowing critical diagnosis protocols.',
    solution: 'Bloomverse developed a private hybrid vector-search RAG engine powered by fine-tuned foundation models, military-grade field encryption, and human-in-the-loop validation dashboards.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Applied AI', 'LLMs', 'Healthcare', 'HIPAA'],
    metrics: [
      { value: '99.2%', label: 'Retrieval Precision' },
      { value: '14 hrs', label: 'Saved per Doctor/Wk' },
      { value: '2.8M+', label: 'Clinical Records' },
      { value: '100%', label: 'HIPAA Compliant' }
    ],
    technologies: ['PyTorch', 'Pinecone', 'OpenAI', 'LangChain', 'FastAPI', 'AWS Bedrock'],
    testimonial: {
      quote: 'The AI platform built by Bloomverse is nothing short of revolutionary for our research staff. It is blazing fast and flawlessly accurate.',
      author: 'Dr. Elena Rostova',
      role: 'Head of Clinical Innovation, OmniHealth'
    }
  },
  {
    id: '3',
    slug: 'ecommerce-scaling-platform',
    client: 'Velox Global Retail',
    industry: 'E-Commerce & Supply Chain',
    title: 'Modernizing Global E-Commerce Engine for 150k Concurrent Black Friday Shoppers',
    summary: 'Engineered headless Next.js frontend with distributed microservices architecture, boosting conversion rates by 38% while handling 10x traffic spikes.',
    challenge: 'Velox suffered recurring cart crashes and page load times exceeding 4.2 seconds during peak flash sales, costing estimated $3.2M in abandoned revenue.',
    solution: 'Bloomverse replaced the monolithic CMS with a distributed headless Next.js edge-rendered storefront, Redis cluster caching, and autoscaling microservices on Google Cloud Platform.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Headless Commerce', 'GCP', 'High Concurrency'],
    metrics: [
      { value: '38%', label: 'Conversion Lift' },
      { value: '0.8s', label: 'Avg Page Load' },
      { value: '150k+', label: 'Concurrent Users' },
      { value: '0 sec', label: 'Black Friday Downtime' }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Google Cloud', 'Redis', 'Tailwind CSS', 'Stripe'],
    testimonial: {
      quote: 'Our Black Friday sale generated record revenues without a single glitch or slowdown. Bloomverse is our trusted strategic tech partner.',
      author: 'Sarah Chen',
      role: 'VP of Digital Experience, Velox Retail'
    }
  },
  {
    id: '4',
    slug: 'cybersecurity-soc2-transformation',
    client: 'VaultLogic Security',
    industry: 'Enterprise SaaS',
    title: 'Zero-Trust Architecture & Rapid SOC 2 Type II Certification',
    summary: 'Implemented end-to-end DevSecOps automation, secrets management, and automated compliance auditing, securing 42 enterprise Fortune 500 contracts.',
    challenge: 'VaultLogic needed urgent SOC 2 Type II and ISO 27001 certifications to close multimillion-dollar enterprise procurement deals with banking clients.',
    solution: 'Bloomverse conducted comprehensive threat modeling, rolled out HashiCorp Vault secrets management, automated SAST/DAST container pipelines, and completed audit readiness in under 55 days.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Cybersecurity', 'SOC 2', 'DevSecOps', 'Zero Trust'],
    metrics: [
      { value: '55 Days', label: 'Audit Readiness' },
      { value: '100%', label: 'Pass Rate (Zero Deficiencies)' },
      { value: '$28M', label: 'Enterprise Deals Unlocked' },
      { value: '0', label: 'Security Vulnerabilities' }
    ],
    technologies: ['HashiCorp Vault', 'Wiz', 'Okta', 'Snyk', 'GitHub Actions', 'AWS GuardDuty'],
    testimonial: {
      quote: 'Bloomverse got us enterprise audit-ready in half the time our internal team estimated. They are masters of modern cloud security.',
      author: 'David Kim',
      role: 'Chief Information Security Officer, VaultLogic'
    }
  }
];
