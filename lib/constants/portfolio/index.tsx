import { AUDIT_COMPETITIONS } from './audit-competitions';
import { AUDIT_SOLOS } from './audit-solos';
import { BUG_BOUNTIES } from './bug-bounties';
import MOCK_AUDIT from './sections/mock-audit';

import { Audit, BugBounty } from '@/lib/types/portfolio';
import { BlogPostSection } from '@/lib/types/writing';

import { Category } from '@/components/templates/category-tag';

export const PORTFOLIO_PAGES: (Audit | BugBounty)[] = [
  AUDIT_COMPETITIONS[0],
  AUDIT_COMPETITIONS[1],
];

export const SECTIONS: Record<string, BlogPostSection[]> = {
  'mock-audit': MOCK_AUDIT,
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
