import type { FC } from 'react';

import WritingCardFeature from './writing-card';

import { WRITING_BLOG_PAGES } from '@/lib/constants/writing';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeaturedWriting: FC = () => {
  return (
    <div
      className="grid grid-cols-1 gap-4 min-[960px]:grid-cols-2"
      // className="grid grid-cols-2 gap-4 min-[560px]:grid-cols-4 min-[960px]:grid-cols-6"
    >
      {WRITING_BLOG_PAGES.map((post, i) => (
        <WritingCardFeature key={i} {...post} />
      ))}
    </div>
  );
};

FeaturedWriting.displayName = 'FeaturedWriting';

export default FeaturedWriting;
