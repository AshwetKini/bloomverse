import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ProjectEstimator } from '@/components/calculator/ProjectEstimator';
import { TechStackGrid } from '@/components/tech/TechStackGrid';
import { CaseStudiesSection } from '@/components/case-studies/CaseStudiesSection';
import { ProcessSection } from '@/components/process/ProcessSection';
import { EngagementModels } from '@/components/pricing/EngagementModels';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { AboutSection } from '@/components/about/AboutSection';
import { GroupCompaniesSection } from '@/components/subsidiaries/GroupCompaniesSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* 6 Core IT Services */}
      <ServicesSection />

      {/* Interactive Project Scope & Cost Estimator */}
      <section className="py-20 bg-slate-50/70 relative border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectEstimator />
        </div>
      </section>

      {/* Interactive Tech Stack Radar */}
      <TechStackGrid />

      {/* Real Enterprise Case Studies */}
      <CaseStudiesSection />

      {/* 4-Phase Delivery Process Blueprint */}
      <ProcessSection />

      {/* Transparent Pricing & Engagement Models */}
      <EngagementModels />

      {/* Testimonials & Security Trust Vault */}
      <TestimonialsSection />

      {/* About & Executive Team */}
      <AboutSection />

      {/* Group Companies & Subsidiary Portfolio */}
      <GroupCompaniesSection />

      {/* Direct RFP & Contact Form */}
      <ContactSection />
    </div>
  );
}
