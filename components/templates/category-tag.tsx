import type { FC } from 'react';

import { useWritingFilters } from '@/lib/stores/useWritingFilters';

import { Badge } from '@/components/ui';
import type { BadgeProps } from '@/components/ui/badge/types';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

export type Category =
  | 'chainlink'
  | 'education'
  | 'fr'
  | 'governance'
  | 'immersive tech'
  | 'infrastructure'
  | 'NFT'
  | 'security research'
  | 'solidity';

export type CategoryTagProps = Omit<BadgeProps, 'variant' | 'intent'> & {
  category:
    | 'chainlink'
    | 'education'
    | 'fr'
    | 'governance'
    | 'immersive tech'
    | 'infrastructure'
    | 'NFT'
    | 'security research'
    | 'solidity';
};

type Intent = 'none' | 'primary' | 'success' | 'fail' | 'warning' | 'orange';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const CategoryTag: FC<CategoryTagProps> = ({ size, category, ...rest }) => {
  const CATEGORY_TO_COLORS: Record<typeof category, Intent> = {
    // none, primary, success, fail, warning, orange
    chainlink: 'primary', // 1
    education: 'success', // 2
    fr: 'none', // 3
    governance: 'warning', // 4
    'immersive tech': 'none', // 3
    infrastructure: 'fail', // 6
    NFT: 'warning', // 4
    'security research': 'orange', // 5
    solidity: 'fail', // 6
  };

  const filter = useWritingFilters((state) => state.filter);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Badge
      size={size}
      variant="secondary"
      intent={CATEGORY_TO_COLORS[category]}
      className="hover:cursor-pointer hover:underline"
      onClick={() => filter(category)}
      {...rest}
    >
      {category}
    </Badge>
  );
};

CategoryTag.displayName = 'CategoryTag';

export default CategoryTag;
