import { AUDIT_COMPETITIONS } from './audit-competitions';
import { REPO_HIGHLIGHTS } from './repo-highlights';
import BADGER_EBTC_2023_10 from './sections/2023-10-badger-ebtc-audit-certora-formal-verification-competition';
import ENS_2023_10 from './sections/2023-10-ens';

import { Audit, BugBounty, HighlightedRepo } from '@/lib/types/portfolio';
import { BlogPostSection } from '@/lib/types/writing';

import { Category } from '@/components/templates/category-tag';

export const PORTFOLIO_PAGES: (Audit | BugBounty | HighlightedRepo)[] = [
  REPO_HIGHLIGHTS[1],
  REPO_HIGHLIGHTS[2],
  REPO_HIGHLIGHTS[0],
  AUDIT_COMPETITIONS[0],
];

export const SECTIONS: Record<string, BlogPostSection[]> = {
  '2023-10-ens': ENS_2023_10,
  '2023-10-badger-ebtc-audit-certora-formal-verification-competition': BADGER_EBTC_2023_10,
};

/**
 * Categories for portfolio.
 */
export const CATEGORIES: Category[] = [
  'solo audit',
  'audit competition',
  'bug bounty',
  'formal verification',
  'fuzzing/invariants',
  'analysis',
];
