export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
  metric: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Global Financial',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: 'bloomvers is hands-down the most elite engineering partner we have ever collaborated with. Their team restructured our entire multi-region Kubernetes infrastructure with zero downtime during peak market hours. Truly world-class architects.',
    projectType: 'Cloud & Kubernetes Migration',
    metric: '72% Latency Drop'
  },
  {
    id: '2',
    name: 'Dr. Elena Rostova',
    role: 'VP of AI & Digital Health',
    company: 'OmniHealth Intelligence',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: 'The custom RAG and autonomous AI agent platform developed by bloomvers transformed how our clinicians extract insights from millions of clinical research papers. Their deep knowledge in LLMs and HIPAA data privacy is unmatched.',
    projectType: 'Applied AI & RAG Engine',
    metric: '99.2% Search Precision'
  },
  {
    id: '3',
    name: 'Sarah Chen',
    role: 'Head of Global Technology',
    company: 'Velox Retail Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: 'Our peak holiday flash sale generated over \ without a single dropped cart or server stutter. bloomvers redesigned our Next.js frontend and microservices to handle over 150,000 concurrent buyers effortlessly.',
    projectType: 'Next.js & Cloud Scaling',
    metric: '38% Conversion Boost'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Chief Information Security Officer',
    company: 'VaultLogic Security',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    content: 'When we needed SOC 2 Type II compliance to unlock Tier-1 banking clients, bloomvers came in, automated our DevSecOps posture, and passed the audit on the first attempt in under 60 days. Invaluable partner.',
    projectType: 'Zero-Trust Cybersecurity',
    metric: '100% Audit Pass'
  }
];

export const clientLogos = [
  { name: 'Apex Financial', ticker: 'APX', icon: 'Coins' },
  { name: 'OmniHealth AI', ticker: 'OMNI', icon: 'Activity' },
  { name: 'Velox Global', ticker: 'VLX', icon: 'ShoppingBag' },
  { name: 'VaultLogic', ticker: 'VLT', icon: 'Shield' },
  { name: 'Starlight Cloud', ticker: 'STR', icon: 'Cloud' },
  { name: 'NeuroFlow', ticker: 'NFLW', icon: 'Cpu' },
  { name: 'HyperGrid Energy', ticker: 'HGRD', icon: 'Zap' },
  { name: 'Nexus Logistics', ticker: 'NXS', icon: 'Truck' },
];

export const securityBadges = [
  { name: 'SOC 2 Type II Certified', desc: 'Enterprise security & data privacy audited annually' },
  { name: 'ISO 27001 Certified', desc: 'Global information security management standards' },
  { name: 'HIPAA & HITECH Ready', desc: 'Secure protected healthcare information architecture' },
  { name: 'GDPR & CCPA Compliant', desc: 'Full compliance with global data protection directives' },
];
