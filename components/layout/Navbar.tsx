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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BloomverseLogo showTagline={true} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname?.startsWith('/services')
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[520px] bg-[#0b0f19]/95 backdrop-blur-2xl border border-slate-800 rounded-2xl p-4 shadow-2xl shadow-blue-500/10 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/services#cloud-devops"
                      className="p-3 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-blue-500/15 text-blue-400 group-hover:scale-105 transition-transform">
                          <Cloud className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">Cloud & DevOps</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">AWS/GCP, Kubernetes & CI/CD</p>
                    </Link>

                    <Link
                      href="/services#applied-ai"
                      className="p-3 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-purple-500/15 text-purple-400 group-hover:scale-105 transition-transform">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">Applied AI & Agents</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">LLM Fine-Tuning, RAG & Models</p>
                    </Link>

                    <Link
                      href="/services#custom-software"
                      className="p-3 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 group-hover:scale-105 transition-transform">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">Custom Software</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">Next.js, Microservices & Apps</p>
                    </Link>

                    <Link
                      href="/services#cybersecurity"
                      className="p-3 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-rose-500/15 text-rose-400 group-hover:scale-105 transition-transform">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors">Cybersecurity</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">Zero-Trust & SOC2 Compliance</p>
                    </Link>

                    <Link
                      href="/services#data-analytics"
                      className="p-3 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400 group-hover:scale-105 transition-transform">
                          <Database className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">Data & Analytics</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">Snowflake, Kafka & Streaming</p>
                    </Link>

                    <Link
                      href="/services#dedicated-pods"
                      className="p-3 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-400 group-hover:scale-105 transition-transform">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">Dedicated Pods</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">Top 1% Embedded Dev Squads</p>
                    </Link>

                    <div className="col-span-2 pt-2 border-t border-slate-800 flex justify-between items-center px-1">
                      <Link 
                        href="/services" 
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
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
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/calculator'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Scope Estimator</span>
              </Link>

              <Link
                href="/case-studies"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/case-studies'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/about'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/contact'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTA & Status Indicator */}
            <div className="hidden sm:flex items-center gap-3.5">

              <button
                onClick={() => setConsultModalOpen(true)}
                className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-xl group-hover:scale-105 transition-transform duration-300" />
                <span className="relative block px-4 py-2 rounded-[11px] bg-[#07090e] text-white text-sm font-semibold transition-colors duration-300 group-hover:bg-transparent">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Schedule Audit</span>
                  </span>
                </span>
              </button>
            </div>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07090e]/98 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              Services & Capabilities
            </Link>
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-cyan-400" />
              Scope & Cost Estimator
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              Case Studies & Proof of Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              About Bloomverse
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultModalOpen(true);
                }}
                className="w-full py-3 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25"
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
