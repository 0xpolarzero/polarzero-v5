import { BugBounty } from '@/lib/types/portfolio';

export const BUG_BOUNTIES: BugBounty[] = [
  {
    protocol: 'Aave',
    platform: 'Immunefi',
    date: new Date('2021-01-01'),
    shortDesc: 'Lending & Borrowing',
    categories: ['bug bounty', 'lending'],
    description: 'Formal verification and fuzzing of the core Aave V2 protocol.',
    url: 'https://code4rena.com/tasks/aave-v2',
    slug: '2021-01-01-aave-v2',
    finding: {
      severity: 'critical',
      reward: 10000,
      title: 'Borrowing can be done without collateral',
      description:
        'A vulnerability in the core protocol, due to a poorly performed boolean check, allowed users to borrow without collateral.',
    },
  },
];
