import { type FC, useEffect } from 'react';

import AuditCardFeature from './audit-card';
import BugBountyFeature from './bug-bounty';

import { PORTFOLIO_PAGES } from '@/lib/constants/portfolio';
import { useCategoriesFilters } from '@/lib/stores/useCategoriesFilters';
import { Audit, BugBounty } from '@/lib/types/portfolio';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeaturedPortfolio: FC = () => {
  const { currentFilter, filter } = useCategoriesFilters((state) => ({
    currentFilter: state.currentFilter,
    filter: state.filter,
  }));

  useEffect(() => {
    filter(null);
  }, [filter]);

  return (
    <div className="grid grid-cols-1 gap-4 min-[1400px]:grid-cols-2">
      {PORTFOLIO_PAGES.length > 0 ? (
        PORTFOLIO_PAGES.filter((page) =>
          currentFilter ? page.categories.includes(currentFilter) : true,
        ).map((page, i) => {
          if (
            page.categories.includes('audit competition') ||
            page.categories.includes('solo audit')
          ) {
            // We won't associate these tags to a page with the wrong type
            return <AuditCardFeature key={i} {...(page as Audit)} />;
          }

          if (page.categories.includes('bug bounty')) {
            // We won't associate these tags to a page with the wrong type
            return <BugBountyFeature key={i} {...(page as BugBounty)} />;
          }

          return null;
        })
      ) : (
        <div className="text-gray-11">Nothing to display yet...</div>
      )}
    </div>
  );
};

FeaturedPortfolio.displayName = 'FeaturedPortfolio';

export default FeaturedPortfolio;
