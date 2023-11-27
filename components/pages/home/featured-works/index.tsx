import type { FC } from 'react';

import { FEATURED_WORKS } from '@/lib/constants/featured-works';

// import BitTwiddlingFeature from './works/bit-twiddling';
// import ChessFeature from './works/chess';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

// type FeaturedWorksProps = {};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeaturedWorks: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 min-[960px]:grid-cols-4">
      {/* writing blockchain but for real, decentralized systems, ens audit, challenge writeup */}
      {FEATURED_WORKS}
    </div>
  );
};

FeaturedWorks.displayName = 'FeaturedWorks';

export default FeaturedWorks;
