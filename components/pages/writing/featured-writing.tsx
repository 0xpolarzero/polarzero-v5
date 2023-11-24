import { type FC, useEffect } from 'react';

import WritingCardFeature from './writing-card';

import { WRITING_BLOG_PAGES } from '@/lib/constants/writing';
import { useWritingFilters } from '@/lib/stores/useWritingFilters';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeaturedWriting: FC = () => {
  const { currentFilter, filter } = useWritingFilters((state) => ({
    currentFilter: state.currentFilter,
    filter: state.filter,
  }));

  useEffect(() => {
    filter(null);
  }, [filter]);

  return (
    <div
      className="grid grid-cols-1 gap-4 min-[960px]:grid-cols-2"
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
