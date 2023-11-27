import type { FC } from 'react';

import { FEATURED_WORKS } from '@/lib/constants/featured-works';

const FeaturedWorks: FC = () => {
  return <div className="grid grid-cols-2 gap-4 min-[960px]:grid-cols-4">{FEATURED_WORKS}</div>;
};

FeaturedWorks.displayName = 'FeaturedWorks';

export default FeaturedWorks;
