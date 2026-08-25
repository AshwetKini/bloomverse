'use client';

import React from 'react';
import { clientLogos } from '@/data/testimonialsData';
import { Shield, Activity, ShoppingBag, Coins, Cloud, Cpu, Zap, Truck } from 'lucide-react';

const iconMap: Record<string, any> = {
  Coins,
  Activity,
  ShoppingBag,
  Shield,
  Cloud,
  Cpu,
  Zap,
  Truck
};

export const ClientTicker: React.FC = () => {
  return (
    <div className="w-full py-8 border-y border-slate-200/80 bg-slate-50/70 backdrop-blur-md overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trusted by High-Growth Scaleups & Global Enterprises
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex overflow-x-auto no-scrollbar gap-5 items-center justify-start sm:justify-center px-4">
        {clientLogos.map((client, idx) => {
          const IconComponent = iconMap[client.icon] || Cloud;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow transition-all cursor-default shrink-0"
            >
              <IconComponent className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-sm tracking-tight">{client.name}</span>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-medium">
                {client.ticker}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

