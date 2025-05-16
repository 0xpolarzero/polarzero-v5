import { FileText, Home, Layers, LucideProps, PenTool } from 'lucide-react';

import type { Page } from '@/lib/types/site';

import LogoIcon from '@/components/common/logo-icon';

/**
 * The URL of the website.
 */
export const SITE_URL = 'https://polarzero.xyz';

/**
 * Pages displayed on [**polarzero.xyz**](https://polarzero.xyz)'s
 * navigation bar.
 */
export const NAVBAR_PAGES: Page[] = [
  { name: 'Home', slug: '/', icon: <Home /> },
  { name: 'Portfolio', slug: '/portfolio', icon: <Layers /> },
  { name: 'Writing', slug: '/writing', icon: <PenTool /> },
  { name: 'resume', slug: '/resume', icon: <FileText /> },
];

type Contact = 'email' | 'twitter' | 'telegram' | 'github';
/**
 * Contact links.
 */
export const CONTACT_LINKS = {
  email: 'contact@polarzero.xyz',
  twitter: 'https://twitter.com/0xpolarzero',
  telegram: 'https://t.me/polarzer0',
  github: 'https://github.com/0xpolarzero',
} as const satisfies Record<Contact, string>;

type OrgInfo = {
  website: string;
  twitter: string;
  github: string;
  logo: (props: LucideProps) => JSX.Element;
};
/**
 * Org links.
 */
export const ORG_INFO: OrgInfo = {
  website: 'https://polareth.org',
  twitter: 'https://twitter.com/polarethorg',
  github: 'https://github.com/polareth',
  logo: LogoIcon.polareth,
};
