import { ReactNode } from 'react';

import { PORTFOLIO_PAGES } from './portfolio';
import { WRITING_BLOG_PAGES } from './writing';

import { Audit, HighlightedRepo } from '@/lib/types/portfolio';

import AuditCardFeature from '@/components/pages/portfolio/audit-card';
import FuzzingFVFeature from '@/components/pages/portfolio/fuzzing-fv';
import WritingCardFeature from '@/components/pages/writing/writing-card';

export const FEATURED_WORKS: ReactNode[] = [
  <WritingCardFeature key={0} {...WRITING_BLOG_PAGES[0]} />,
  <WritingCardFeature key={1} {...WRITING_BLOG_PAGES[2]} />,
  <FuzzingFVFeature
    key={2}
    {...(PORTFOLIO_PAGES[0] as HighlightedRepo)}
    className="col-span-2 w-full min-[960px]:col-span-4"
  />,
  <AuditCardFeature
    key={3}
    {...(PORTFOLIO_PAGES[1] as Audit)}
    className="col-span-2 w-full min-[960px]:col-span-4"
  />,
];
