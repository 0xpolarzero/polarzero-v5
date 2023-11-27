import { AUDIT_COMPETITIONS } from './audit-competitions';
import { AUDIT_SOLOS } from './audit-solos';
import { BUG_BOUNTIES } from './bug-bounties';
import ENS_2023_10 from './sections/2023-10-ens';

import { Audit, BugBounty } from '@/lib/types/portfolio';
import { BlogPostSection } from '@/lib/types/writing';

import { Category } from '@/components/templates/category-tag';

export const PORTFOLIO_PAGES: (Audit | BugBounty)[] = [
  AUDIT_COMPETITIONS[0],
  AUDIT_COMPETITIONS[1],
];

export const SECTIONS: Record<string, BlogPostSection[]> = {
  '2023-10-ens': ENS_2023_10,
};

/**
 * Categories for portfolio.
 */
export const CATEGORIES: Category[] = [
  'solo audit',
  'audit competition',
  'bug bounty',
  'formal verification',
  'ens',
  'lending/borrowing',
];
