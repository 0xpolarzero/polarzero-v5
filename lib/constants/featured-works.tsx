import { PORTFOLIO_PAGES } from '@/lib/constants/portfolio';
import { ResumeItem } from '@/lib/types/resume';

export const FEATURED_WORKS: ResumeItem[] = [
  PORTFOLIO_PAGES.find((item) => item.title === 'evmstate'),
  PORTFOLIO_PAGES.find((item) => item.title === 'nightwatch'),
  PORTFOLIO_PAGES.find((item) => item.title === 'DEX Indexer'),
  PORTFOLIO_PAGES.find((item) => item.title === 'DEX GraphQL'),
] as ResumeItem[];
