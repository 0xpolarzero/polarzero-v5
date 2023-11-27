import { type FC, useEffect } from 'react';

import WritingCardFeature from './writing-card';

import { WRITING_BLOG_PAGES } from '@/lib/constants/writing';
import { useCategoriesFilters } from '@/lib/stores/useCategoriesFilters';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeaturedWriting: FC = () => {
  const { currentFilter, filter } = useCategoriesFilters((state) => ({
    currentFilter: state.currentFilter,
    filter: state.filter,
  }));

  useEffect(() => {
    filter(null);
  }, [filter]);

  return (
    <div
      className="grid grid-cols-2 gap-4 min-[960px]:grid-cols-4"
      // className="grid grid-cols-2 gap-4 min-[560px]:grid-cols-4 min-[960px]:grid-cols-6"
    >
      {WRITING_BLOG_PAGES.filter((post) =>
        currentFilter ? post.tags.includes(currentFilter) : true,
      ).map((post, i) => (
        <WritingCardFeature key={i} {...post} />
      ))}
    </div>
  );
};

FeaturedWriting.displayName = 'FeaturedWriting';

export default FeaturedWriting;
