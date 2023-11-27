import { Audit } from '@/lib/types/portfolio';

export const AUDIT_SOLOS: Audit[] = [
  {
    protocol: 'Aave',
    date: new Date('2021-01-01'),
    duration: 7,
    shortDesc: 'Lending & Borrowing',
    categories: ['solo audit', 'lending'],
    description: 'Formal verification and fuzzing of the core Aave V2 protocol.',
    url: 'https://code4rena.com/tasks/aave-v2',
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
