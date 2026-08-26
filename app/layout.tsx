import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollObserver } from '@/components/ui/ScrollObserver';

export const metadata: Metadata = {
  metadataBase: new URL('https://bloomverse.com'),
  title: 'Bloomverse | Enterprise IT Services, Cloud Architecture & Applied AI',
  description: 'Bloomverse (bloomverse.com) is the premier digital engineering firm providing enterprise cloud infrastructure, autonomous AI systems, custom software development, and zero-trust cybersecurity.',
  keywords: [
    'Bloomverse',
    'bloomverse.com',
    'Enterprise IT Services',
    'Cloud Migration',
    'Kubernetes DevOps',
    'Applied AI Engineering',
    'Autonomous AI Agents',
    'Next.js Software Development',
    'Cybersecurity SOC2',
    'Dedicated Engineering Pods'
  ],
  authors: [{ name: 'Bloomverse Technologies Inc.' }],
  creator: 'Bloomverse Technologies',
  icons: {
    icon: '/images/logo-icon.png',
    shortcut: '/favicon.ico',
    apple: '/images/logo-icon.png',
  },
  openGraph: {
    title: 'Bloomverse | Next-Gen Enterprise IT & Applied AI Engineering',
    description: 'Hyper-scalable cloud systems, bespoke software, fine-tuned AI models, and dedicated agile engineering squads.',
    url: 'https://bloomverse.com',
    siteName: 'Bloomverse',
    images: [
      {
        url: '/images/logo-banner.png',
        width: 1200,
        height: 250,
        alt: 'Bloomverse Enterprise IT & AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bloomverse | Enterprise IT & Applied AI Systems',
    description: 'Next-Gen IT solutions, cloud architecture, and AI systems built for 99.999% uptime.',
    images: ['/images/logo-banner.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        <ScrollObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
