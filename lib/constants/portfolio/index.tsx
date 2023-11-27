import { AUDIT_COMPETITIONS } from './audit-competitions';
import { AUDIT_SOLOS } from './audit-solos';
import { BUG_BOUNTIES } from './bug-bounties';
import MOCK_AUDIT from './sections/mock-audit';

import { BlogPostSection } from '@/lib/types/writing';

export const PORTFOLIO_PAGES = [AUDIT_COMPETITIONS[0], AUDIT_SOLOS[0], BUG_BOUNTIES[0]];

export const SECTIONS: Record<string, BlogPostSection[]> = {
  'mock-audit': MOCK_AUDIT,
};
