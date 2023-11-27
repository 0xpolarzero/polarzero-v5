import { BugBounty } from '@/lib/types/portfolio';

export const BUG_BOUNTIES: BugBounty[] = [
  {
    protocol: 'Mock',
    platform: 'Immunefi',
    date: new Date('2021-01-01'),
    shortDesc: 'Lending & Borrowing',
    categories: ['bug bounty', 'lending'],
    description: 'Formal verification and fuzzing...',
    url: 'https://immunefi.com/bounty/mock',
    slug: 'mock-bounty',
    finding: {
      severity: 'critical',
      reward: 10000,
      title: 'Vulnerability title.',
      description: 'Vulnerability description.',
    },
  },
];
