export interface SubsidiaryCompany {
  id: string;
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  relationship: string;
  foundedYear: string;
  category: string;
  status: 'Active Venture' | 'Wholly-Owned Subsidiary' | 'Strategic Brand';
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  razorpayCompliant: boolean;
}

export const subsidiaryCompanies: SubsidiaryCompany[] = [
  {
    id: 'teenhusstle',
    name: 'TeenHusstle',
    domain: 'teenhusstle.com',
    url: 'https://teenhusstle.com',
    tagline: 'Empowering the Next Gen Workforce & Youth Skill Economy',
    description:
      'TeenHusstle is a specialized digital ecosystem and micro-gig marketplace enabling young talent to develop digital skills, gain early workforce experience, and access structured career opportunities.',
    relationship: 'Wholly-Owned Subsidiary & Venture Brand',
    foundedYear: '2024',
    category: 'EdTech & Workforce Marketplace',
    status: 'Wholly-Owned Subsidiary',
    metrics: [
      { label: 'Market Segment', value: 'Youth Workforce & Skill Economy' },
      { label: 'Operating Model', value: 'Wholly-Owned Subsidiary' },
      { label: 'Corporate Parent', value: 'Bloomverse Technologies Inc.' }
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    razorpayCompliant: true
  }
];
