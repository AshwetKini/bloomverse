import React from 'react';
import { Metadata } from 'next';
import { ServicesSection } from '@/components/services/ServicesSection';
import { TechStackGrid } from '@/components/tech/TechStackGrid';
import { ProcessSection } from '@/components/process/ProcessSection';
import { ProjectEstimator } from '@/components/calculator/ProjectEstimator';
import { Sparkles, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & Solutions | Bloomverse',
  description: 'Explore Bloomverse full-stack IT capabilities: Cloud Architecture, Applied AI & Autonomous Agents, Custom Enterprise Software, Zero-Trust Cybersecurity, and Modern Data Stacks.',
};

export default function ServicesPage() {
  const faqs = [
    {
      q: 'How fast can a Bloomverse engineering team onboard and deploy?',
      a: 'Dedicated pods and agile squads can be provisioned and integrated into your Jira/Slack workspace within 7 business days, with full security clearances and NDA sign-off.'
    },
    {
      q: 'Do you work with our existing internal engineering team or replace them?',
      a: 'We operate both as autonomous pods delivering standalone products and as high-velocity staff augmentations pairing with your internal Tech Leads to accelerate roadmap deliverables.'
    },
    {
      q: 'Who retains the intellectual property (IP) and repository rights?',
      a: 'You retain 100% of all intellectual property, source code, CI/CD scripts, and architecture blueprints from day one.'
    },
    {
      q: 'What cloud providers and AI frameworks do you specialize in?',
      a: 'We are certified across AWS, Google Cloud, and Microsoft Azure. On the AI front, we specialize in PyTorch, OpenAI, Claude, LangChain, Pinecone, and custom fine-tuned open-source models.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#07090e]">
      {/* Subpage Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Full-Spectrum IT Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Next-Generation IT Services & Applied AI
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Architected for mission-critical enterprise resilience, sub-second latency, and measurable commercial ROI.
        </p>
      </div>

      {/* Services Grid Section */}
      <ServicesSection />

      {/* Estimator Embedded in Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectEstimator />
      </div>

      {/* Tech Stack Matrix */}
      <TechStackGrid />

      {/* Engineering Delivery Process */}
      <ProcessSection />

      {/* Enterprise Services FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Everything you need to know about our engagement & delivery process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
