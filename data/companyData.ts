export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  isHQ?: boolean;
}

export const officeLocations: OfficeLocation[] = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '500 Howard Street, Suite 400, San Francisco, CA 94105',
    phone: '+1 (415) 890-3420',
    email: 'sf@bloomverse.com',
    isHQ: true
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '100 Bishopsgate, Level 18, London EC2N 4AG',
    phone: '+44 20 7946 0912',
    email: 'london@bloomverse.com'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: 'Marina Bay Financial Centre Tower 1, 8 Marina Blvd, Singapore 018981',
    phone: '+65 6712 3490',
    email: 'apac@bloomverse.com'
  },
  {
    city: 'Bangalore',
    country: 'India',
    address: 'Embassy GolfLinks Tech Park, Intermediate Ring Rd, Bengaluru 560071',
    phone: '+91 80 4912 8800',
    email: 'india@bloomverse.com'
  }
];

export const companyValues = [
  {
    title: 'Zero Compromise on Quality',
    desc: 'We do not take shortcuts. Every line of code, cloud blueprint, and AI pipeline is built to enterprise standards with strict type safety and high test coverage.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Speed with Architectural Rigor',
    desc: 'Velocity without technical debt. We leverage modern frameworks, reusable cloud blueprints, and automated CI/CD to ship products in weeks, not quarters.',
    icon: 'Zap'
  },
  {
    title: 'Radical Transparency',
    desc: 'Real-time visibility into sprint progress, test passes, architecture decisions, and budget allocations. No smoke, mirrors, or hidden consulting surprises.',
    icon: 'Eye'
  },
  {
    title: 'Obsession with Client ROI',
    desc: 'We measure success by quantifiable metrics: latency slashed, dollars saved in cloud compute, conversion rates gained, and revenue unlocked.',
    icon: 'TrendingUp'
  }
];

export const leadershipTeam = [
  {
    name: 'Julian Sterling',
    role: 'Co-Founder & Chief Executive Officer',
    bio: 'Former VP of Cloud Architecture at CloudScale, 15+ years scaling distributed systems for Fortune 100 enterprises.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Dr. Arthur Sterling',
    role: 'Co-Founder & Chief AI Scientist',
    bio: 'PhD in Machine Learning from Stanford, published researcher in multi-agent systems and retrieval-augmented generation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Soraya Patel',
    role: 'VP of Global Engineering',
    bio: 'Ex-Lead Systems Architect at Stripe, specialized in high-concurrency transaction engines and microservices resilience.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Damian Reed',
    role: 'Head of Cybersecurity & Compliance',
    bio: 'Certified CISSP & CISM, leading security audit readiness, zero-trust implementations, and white-hat penetration testing.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  }
];
