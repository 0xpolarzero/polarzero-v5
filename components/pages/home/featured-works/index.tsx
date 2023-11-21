import type { FC } from 'react';

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
    <div className="grid grid-cols-2 gap-4 min-[560px]:grid-cols-4 min-[960px]:grid-cols-6">
      {/* <ChessFeature />
      <BitTwiddlingFeature /> */}
    </div>
  );
};

FeaturedWorks.displayName = 'FeaturedWorks';

export default FeaturedWorks;
