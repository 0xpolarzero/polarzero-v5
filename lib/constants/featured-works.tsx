import { ReactNode } from 'react';

import { PORTFOLIO_PAGES } from './portfolio';
import { WRITING_BLOG_PAGES } from './writing';

import { Audit } from '@/lib/types/portfolio';

import FeaturedRepoFeature from '@/components/pages/home/featured-works/featured-repo';
import AuditCardFeature from '@/components/pages/portfolio/audit-card';
import WritingCardFeature from '@/components/pages/writing/writing-card';

export const FEATURED_WORKS: ReactNode[] = [
  <WritingCardFeature key={0} {...WRITING_BLOG_PAGES[0]} />,
  <WritingCardFeature key={1} {...WRITING_BLOG_PAGES[2]} />,
  <FeaturedRepoFeature
    key={2}
    name="Storage collision"
    description="How some automated testing tools can fail to discover precise storage collision exploits, yet why it matters more than ever to use them."
    details="Foundry fuzzing, Halmos, Certora"
    url="https://github.com/0xpolarzero/storage-collision-formal-verification"
  />,
  <AuditCardFeature
    key={3}
    {...(PORTFOLIO_PAGES[0] as Audit)}
    className="col-span-2 w-full min-[960px]:col-span-4"
  />,
];
