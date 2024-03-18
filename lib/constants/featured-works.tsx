import { PORTFOLIO_PAGES } from '@/lib/constants/portfolio';
import { WRITING_PAGES } from '@/lib/constants/writing';
import { ResumeItem } from '@/lib/types/resume';

export const FEATURED_WORKS: ResumeItem[] = [
  PORTFOLIO_PAGES.find((item) => item.title === 'savvy'),
  PORTFOLIO_PAGES.find((item) => item.title === 'airdrop gas benchmarks'),
  WRITING_PAGES.find((item) => item.slug === 'blockchain-but-for-real'),
  WRITING_PAGES.find((item) => item.slug === 'decentralized-systems-end-the-cycle-of-indifference'),
] as ResumeItem[];
