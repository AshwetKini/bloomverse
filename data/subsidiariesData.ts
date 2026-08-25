export interface SubsidiaryCompany {
  id: string;
  name: string;
  domain: string;
  url: string;
  tagline: string;
  logo?: string;
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
    tagline: 'Learn, Teach, Buy & Sell Digital Services Online',
    logo: '/images/teenhustle-logo.png',
    description:
      'TeenHusstle (teenhusstle.com) is a wholly-owned consumer digital marketplace subsidiary of Bloomverse. It empowers student freelancers and teen creators to monetize skills, offer freelance gigs (UI/UX design, video editing, web development), trade digital products in the MarketSpace, and connect with global buyers and tutors through secure milestone payouts.',
    relationship: 'Wholly-Owned Child Company & Consumer Venture',
    foundedYear: '2024',
    category: 'Freelance & Digital Products Marketplace',
    status: 'Wholly-Owned Subsidiary',
    metrics: [
      { label: 'Corporate Status', value: 'Wholly-Owned Subsidiary of Bloomverse' },
      { label: 'Core Offerings', value: 'HustleHub Gigs & MarketSpace Marketplace' },
      { label: 'Platform Focus', value: 'Freelancing, Digital Goods & P2P Tutoring' },
      { label: 'Escrow & Security', value: 'Milestone-Based Payout Protection' }
    ],
    techStack: ['Next.js App Router', 'React 19', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Razorpay'],
    razorpayCompliant: true
  }
];
