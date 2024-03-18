import type { FC } from 'react';

import { FEATURED_WORKS } from '@/lib/constants/featured-works';

import CardFeature from '@/components/layouts/card-feature';
import { BadgeProps } from '@/components/ui/badge/types';

const FeaturedWorks: FC = () => {
  const categories = FEATURED_WORKS.map((item) => item.categories)
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((category) => ({
      name: category,
      intent: 'none' as BadgeProps['intent'],
    }));

  return (
    <div className="grid grid-cols-2 gap-4 min-[960px]:grid-cols-4">
      {FEATURED_WORKS.map((work, index) => (
        <CardFeature key={index} categoryIntents={categories} {...work} />
      ))}
    </div>
  );
};

FeaturedWorks.displayName = 'FeaturedWorks';

export default FeaturedWorks;
