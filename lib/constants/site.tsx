import { Home, Paintbrush2, PenTool } from 'lucide-react';

import type { Page } from '@/lib/types/site';

/**
 * Pages displayed on [**polarzero.xyz**](https://polarzero.xyz)'s
 * navigation bar.
 */
export const NAVBAR_PAGES: Page[] = [
  { name: 'Home', slug: '/', icon: <Home /> },
  { name: 'Writing', slug: '/writing', icon: <PenTool /> },
  { name: 'Portfolio', slug: '/portfolio', icon: <Paintbrush2 /> },
];
