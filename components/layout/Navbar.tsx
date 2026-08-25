'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BloomverseLogo } from '../ui/BloomverseLogo';
import { ConsultationModal } from '../contact/ConsultationModal';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Cloud, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Database, 
  Users, 
  ArrowRight,
  Calculator
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-sm shadow-slate-900/5'
            : 'bg-white/60 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BloomverseLogo showTagline={true} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                    pathname?.startsWith('/services')
                      ? 'text-blue-600 bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[540px] bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl p-4 shadow-2xl shadow-slate-300/40 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/services#cloud-devops"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/80 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform border border-blue-100">
                          <Cloud className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Cloud & DevOps</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">AWS/GCP, Kubernetes & CI/CD</p>
                    </Link>

                    <Link
                      href="/services#applied-ai"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/80 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600 group-hover:scale-105 transition-transform border border-purple-100">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">Applied AI & Agents</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">LLM Fine-Tuning, RAG & Models</p>
                    </Link>

                    <Link
                      href="/services#custom-software"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/80 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-105 transition-transform border border-emerald-100">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">Custom Software</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">Next.js, Microservices & Apps</p>
                    </Link>

                    <Link
                      href="/services#cybersecurity"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/80 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 group-hover:scale-105 transition-transform border border-rose-100">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-rose-600 transition-colors">Cybersecurity</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">Zero-Trust & SOC2 Compliance</p>
                    </Link>

                    <Link
                      href="/services#data-analytics"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/80 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform border border-amber-100">
                          <Database className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">Data & Analytics</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">Snowflake, Kafka & Streaming</p>
                    </Link>

                    <Link
                      href="/services#dedicated-pods"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/80 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 group-hover:scale-105 transition-transform border border-sky-100">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">Dedicated Pods</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">Top 1% Embedded Dev Squads</p>
                    </Link>

                    <div className="col-span-2 pt-2.5 border-t border-slate-100 flex justify-between items-center px-1 mt-1">
                      <Link 
                        href="/services" 
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        View Full Services Suite <ArrowRight className="w-3 h-3" />
                      </Link>
                      <span className="text-[11px] text-slate-400 font-mono">SOC2 &bull; ISO27001 &bull; HIPAA</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <Link
                href="/calculator"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === '/calculator'
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>Scope Estimator</span>
              </Link>

              <Link
                href="/case-studies"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === '/case-studies'
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === '/about'
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === '/contact'
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setConsultModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-1.5 active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-200" />
                <span>Schedule Audit</span>
              </button>
            </div>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-3 animate-in slide-in-from-top-4 shadow-xl">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Services & Capabilities
            </Link>
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-blue-600" />
              Scope & Cost Estimator
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Case Studies & Proof of Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              About Bloomverse
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Contact Us
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultModalOpen(true);
                }}
                className="w-full py-3 text-center bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-xl text-sm shadow-md shadow-blue-500/20"
              >
                Schedule Technical Audit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
};

