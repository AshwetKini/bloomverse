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

export const caseStudiesData: CaseStudy[] = [];
