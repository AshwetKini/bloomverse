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

export const testimonialsData: Testimonial[] = [];

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
