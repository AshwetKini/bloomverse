'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BloomversLogo } from '../ui/BloomversLogo';
import { officeLocations } from '@/data/companyData';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin
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
    <footer className="relative bg-slate-50/80 border-t border-slate-200 text-slate-600 text-sm overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-blue-500/5 via-sky-400/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 space-y-5">
            <BloomversLogo showTagline={true} />
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              bloomvers is the premier digital engineering and enterprise cloud partner. We architect resilient systems, fine-tune AI foundation models, and deploy dedicated engineering squads worldwide.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                Subscribe to Engineering Radar
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="flex items-center gap-3 text-slate-500 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">IT Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#cloud-devops" className="hover:text-blue-600 transition-colors">
                  Cloud & Kubernetes
                </Link>
              </li>
              <li>
                <Link href="/services#applied-ai" className="hover:text-blue-600 transition-colors">
                  Applied AI & Agent Systems
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-blue-600 transition-colors">
                  Custom Software Dev
                </Link>
              </li>
              <li>
                <Link href="/services#cybersecurity" className="hover:text-blue-600 transition-colors">
                  Zero-Trust Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services#data-analytics" className="hover:text-blue-600 transition-colors">
                  Data Stack & Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services#dedicated-pods" className="hover:text-blue-600 transition-colors">
                  Dedicated Agile Pods
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering & Tools Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Solutions & Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/calculator" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-600">&bull;</span> Scope & Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-600 transition-colors">
                  Enterprise Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#tech-stack" className="hover:text-blue-600 transition-colors">
                  Technology Radar
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Corporate Office</h4>
            <div className="space-y-3 text-xs">
              {officeLocations.map((loc) => (
                <div key={loc.city} className="border-l-2 border-slate-200 pl-3">
                  <div className="text-slate-900 font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                    <span>{loc.city}, {loc.country}</span>
                    {loc.isHQ && <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1 rounded font-medium">HQ</span>}
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">{loc.address}</div>
                  <div className="text-blue-600 text-[11px] mt-0.5">{loc.email}</div>
                </div>
              ))}
              <div className="pt-1">
                <Link href="/contact" className="text-xs text-blue-600 hover:text-blue-700 font-semibold">
                  Contact Office &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Subsidiary & Group Company Notice Banner */}
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} bloomvers Technologies Inc. All rights reserved. Registered domains: <span className="text-slate-800 font-mono font-medium">bloomvers.com</span> & <span className="text-blue-600 font-mono font-medium">teenhusstle.com</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="/merchant" className="hover:text-slate-900 transition-colors">Merchant Policy</Link>
            <Link href="/legal" className="hover:text-slate-900 transition-colors">Legal &amp; Entity Filings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

