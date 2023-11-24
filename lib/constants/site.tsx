import { Briefcase, Home, Layers, PenTool } from 'lucide-react';

import type { Page } from '@/lib/types/site';

/**
 * Pages displayed on [**polarzero.xyz**](https://polarzero.xyz)'s
 * navigation bar.
 */
export const NAVBAR_PAGES: Page[] = [
  { name: 'Home', slug: '/', icon: <Home /> },
  { name: 'Writing', slug: '/writing', icon: <PenTool /> },
  { name: 'Portfolio', slug: '/portfolio', icon: <Layers /> },
  { name: 'Hire me', slug: '/hire-me', icon: <Briefcase /> },
];

/**
 * Contact links displayed on [**polarzero.xyz/hire-me**](https://polarzero.xyz/hire-me).
 */
export const CONTACT_LINKS: Record<string, string> = {
  email: 'contact@polarzero.xyz',
  twitter: 'https://twitter.com/0xpolarzero',
};
