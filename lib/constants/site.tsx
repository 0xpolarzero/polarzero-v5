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

/**
 * Foundational doc pages displayed on
 * [**polarzero.xyz/design**](https://polarzero.xyz/design)'s navigation
 * bar.
 */
export const DESIGN_PAGES: Page[] = [
  { name: 'Introduction', slug: '/design' },
  { name: 'Color', slug: '/design/color' },
  { name: 'Libraries', slug: '/design/libraries' },
];

/**
 * Component doc pages displayed on
 * [**polarzero.xyz/design**](https://polarzero.xyz/design)'s navigation
 * bar.
 */
export const DESIGN_COMPONENT_PAGES: Page[] = [
  { name: 'Badge', slug: '/design/component/badge' },
  { name: 'Button', slug: '/design/component/button' },
  { name: 'Code Block', slug: '/design/component/code-block' },
  { name: 'Hover Card', slug: '/design/component/hover-card' },
  { name: 'Select', slug: '/design/component/select' },
  { name: 'Toast', slug: '/design/component/toast' },
  { name: 'Tooltip', slug: '/design/component/tooltip' },
];
