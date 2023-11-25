import { Audit } from '@/lib/types/audit';

const test: Audit = {
  rank: 1,
  protocol: 'Aave',
  platform: 'Code4rena',
  date: new Date('2021-01-01'),
  duration: 7,
  shortDesc: 'Lending & Borrowing',
  category: 'audit',
  details: {
    description: 'Formal verification and fuzzing of the core Aave V2 protocol.',
    url: 'https://code4rena.com/tasks/aave-v2',
    slug: '2021-01-01-aave-v2',
    category: 'audit',
    platform: 'Code4rena',
    protocol: 'Aave',
    findings: [
      {
        severity: 'critical',
        title: 'Borrowing can be done without collateral',
        url: 'https://code4rena.com/tasks/aave-v2#submission-1',
      },
      // just 3 more mock findings
      {
        severity: 'high',
        title: 'A user can withdraw more than their balance',
        url: 'https://code4rena.com/tasks/aave-v2#submission-2',
      },
      {
        severity: 'lowQa',
        title: 'The core protocol is not covered by tests',
        url: 'https://code4rena.com/tasks/aave-v2#submission-3',
      },
      {
        severity: 'lowQa',
        title: 'The core protocol is not covered by tests',
        url: 'https://code4rena.com/tasks/aave-v2#submission-3',
      },
      {
        severity: 'analysis',
        title: '',
        url: '',
      },
    ],
  },
};

export const AUDITS_RESULTS: Audit[] = [
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
];
