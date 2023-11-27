import { Audit } from '@/lib/types/portfolio';

export const AUDIT_COMPETITIONS: Audit[] = [
  {
    rank: 1,
    protocol: 'MockProtocol',
    platform: 'Code4rena',
    date: new Date('2021-01-01'),
    duration: 7,
    shortDesc: 'Lending & Borrowing',
    categories: ['audit competition', 'lending'],
    description: 'Formal verification and fuzzing...',
    url: 'https://code4rena.com/mock',
    slug: 'mock-audit',
    findings: {
      critical: 1,
      high: 2,
      medium: 1,
      lowQa: 2,
      analysis: 1,
      low: 0,
    },
  },
];
