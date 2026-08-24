'use client';

import React, { useState } from 'react';
import { techStackData, techCategories } from '@/data/techStackData';
import { 
  Search, 
  Sparkles, 
  Cloud, 
  Globe, 
  Layers, 
  Box, 
  Code, 
  GitBranch, 
  Cpu, 
  BrainCircuit, 
  Bot, 
  Database, 
  Zap, 
  Layout, 
  FileCode, 
  Palette, 
  Smartphone, 
  Server, 
  Network, 
  Radio, 
  Shield, 
  ShieldCheck, 
  CheckCircle2, 
  ShieldAlert 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Cloud,
  Globe,
  Layers,
  Box,
  Code,
  GitBranch,
  Cpu,
  BrainCircuit,
  Bot,
  Database,
  Zap,
  Layout,
  FileCode,
  Palette,
  Smartphone,
  Server,
  Network,
  Radio,
  Shield,
  ShieldCheck,
  CheckCircle2,
  ShieldAlert
};

export const TechStackGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Technologies');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTech = techStackData.filter((tech) => {
    const matchesCategory = activeCategory === 'All Technologies' || tech.category === activeCategory;
    const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tech.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tech-stack" className="py-24 bg-[#07090e] relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Modern Engineering Radar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Battle-Tested Technology Ecosystem
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We build exclusively on industry-leading, high-concurrency frameworks, cloud native platforms, and state-of-the-art AI architectures.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Categories Pill Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {techCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack (e.g. Next.js, AWS, Kafka)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Code;
            return (
              <div
                key={idx}
                className="group p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    {item.popular && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                        Tier-1 Core
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{item.category}</span>
                  <span className="text-emerald-400 font-mono text-[10px]">Production-Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTech.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No technologies found matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset category filters.
          </div>
        )}
      </div>
    </section>
  );
};
