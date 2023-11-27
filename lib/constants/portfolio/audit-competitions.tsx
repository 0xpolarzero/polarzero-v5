import { AuditCompetition } from '@/lib/types/portfolio';

export const AUDIT_COMPETITIONS: AuditCompetition[] = [
  {
    rank: 1,
    protocol: 'Aave',
    platform: 'Code4rena',
    date: new Date('2021-01-01'),
    duration: 7,
    shortDesc: 'Lending & Borrowing',
    categories: ['audit competition', 'lending'],
    description: 'Formal verification and fuzzing of the core Aave V2 protocol.',
    url: 'https://code4rena.com/tasks/aave-v2',
    slug: '2021-01-01-aave-v2',
    findings: {
      critical: 1,
      high: 2,
      medium: 1,
      lowQa: 2,
      analysis: 1,
    },
  },
];
