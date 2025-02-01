import { RESUME_ITEMS } from '@/lib/constants/resume';
import { ResumeItem } from '@/lib/types/resume';

const portfolioFilters: ResumeItem['status'][] = [
  'work',
  'library',
  'contribution',
  'idea',
  'hackathon',
  'research-work',
];

export const PORTFOLIO_PAGES = Object.entries(RESUME_ITEMS())
  // sort by year (desc)
  .sort((a, b) => Number(b[0]) - Number(a[0]))
  .map(([, items]) => {
    items.sort((a, b) => {
      // endDate is undefined if ongoing
      // If both are ongoing, sort by start date (most recent first)
      if (a.endDate === undefined && b.endDate === undefined)
        return b.startDate.getTime() - a.startDate.getTime();
      // Otherwise, sort by end date (most recent first)
      if (a.endDate === undefined) return -1;
      if (b.endDate === undefined) return 1;
      return b.endDate.getTime() - a.endDate.getTime();
    });

    return items;
  })
  .flat()
  .filter((item) => portfolioFilters.includes(item.status));
