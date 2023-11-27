import { Audit } from '@/lib/types/portfolio';

export const AUDIT_COMPETITIONS: Audit[] = [
  {
    rank: 11,
    protocol: 'ENS',
    platform: 'Code4rena',
    date: new Date('2023-10'),
    duration: 6,
    shortDesc: 'Decentralized naming system for wallets, websites, and more',
    categories: ['audit competition', 'ens'],
    description: 'Stateful fuzzing (invariant testing), manual analysis.',
    url: 'https://code4rena.com/reports/2023-10-ens',
    slug: '2023-10-ens',
    findings: {
      critical: 0,
      high: 0,
      medium: 0,
      lowQa: 0,
      analysis: 1,
      low: 0,
    },
  },
  {
    rank: 0,
    protocol: 'Badger eBTC',
    platform: 'Code4rena',
    date: new Date('2023-10'),
    duration: 21,
    shortDesc: 'Smart contract based Bitcoin',
    categories: ['formal verification', 'lending/borrowing'],
    description: 'Certora Prover: Formal verification competition. Waiting for results...',
    url: 'https://code4rena.com/reports/2023-10-badger-ebtc-audit-certora-formal-verification-competition',
    slug: '2023-10-ens',
    findings: {
      critical: 0,
      high: 0,
      medium: 0,
      lowQa: 0,
      analysis: 0,
      low: 0,
    },
  },
];
