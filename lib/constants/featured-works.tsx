import { PORTFOLIO_PAGES } from '@/lib/constants/portfolio';
import { ResumeItem } from '@/lib/types/resume';

export const FEATURED_WORKS: ResumeItem[] = [
  PORTFOLIO_PAGES.find((item) => item.title === 'DEX Indexer'),
  PORTFOLIO_PAGES.find((item) => item.title === 'DEX GraphQL'),
  PORTFOLIO_PAGES.find((item) => item.title === 'Reactive Tables'),
  PORTFOLIO_PAGES.find((item) => item.title === 'savvy'),
] as ResumeItem[];
