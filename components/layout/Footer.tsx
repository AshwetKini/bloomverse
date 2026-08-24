'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BloomverseLogo } from '../ui/BloomverseLogo';
import { officeLocations } from '@/data/companyData';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin,
  Terminal
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-slate-800/80 text-slate-400 text-sm overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 space-y-5">
            <BloomverseLogo showTagline={true} />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Bloomverse is the premier digital engineering and enterprise cloud partner. We architect resilient systems, fine-tune AI foundation models, and deploy dedicated engineering squads worldwide.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Subscribe to Engineering Radar
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! You will receive our monthly tech whitepapers.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm gap-2">
                  <input
                    type="email"
                    required
                    placeholder="architect@enterprise.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="flex items-center gap-4 text-slate-500 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono text-[11px]">v3.2.0-prod</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">IT Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#cloud-devops" className="hover:text-cyan-400 transition-colors">
                  Cloud & Kubernetes
                </Link>
              </li>
              <li>
                <Link href="/services#applied-ai" className="hover:text-cyan-400 transition-colors">
                  Applied AI & Agent Systems
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-cyan-400 transition-colors">
                  Custom Software Dev
                </Link>
              </li>
              <li>
                <Link href="/services#cybersecurity" className="hover:text-cyan-400 transition-colors">
                  Zero-Trust Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services#data-analytics" className="hover:text-cyan-400 transition-colors">
                  Data Stack & Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services#dedicated-pods" className="hover:text-cyan-400 transition-colors">
                  Dedicated Agile Pods
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering & Tools Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions & Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/calculator" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-400">&bull;</span> Scope & Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-cyan-400 transition-colors">
                  Enterprise Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#tech-stack" className="hover:text-cyan-400 transition-colors">
                  Technology Radar
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-cyan-400 transition-colors">
                  4-Phase Delivery Blueprint
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-cyan-400 transition-colors">
                  Engagement Models
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Offices Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Global Hubs</h4>
            <div className="space-y-3 text-xs">
              {officeLocations.slice(0, 2).map((loc) => (
                <div key={loc.city} className="border-l-2 border-slate-800 pl-3">
                  <div className="text-white font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{loc.city}, {loc.country}</span>
                    {loc.isHQ && <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1 rounded">HQ</span>}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{loc.phone}</div>
                </div>
              ))}
              <div className="pt-1">
                <Link href="/contact" className="text-xs text-cyan-400 hover:text-cyan-300 font-medium">
                  View Singapore & Bangalore Hubs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Banner */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white">Enterprise Security Guarantee:</strong> All infrastructure and codebases are SOC2 Type II, ISO 27001, HIPAA & GDPR compliant.
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">SOC2 Type II</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">ISO 27001</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">HIPAA</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Bloomverse Technologies Inc. All rights reserved. Registered domain <span className="text-slate-300 font-mono">bloomverse.com</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Security Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
