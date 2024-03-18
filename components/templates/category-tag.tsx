import type { FC } from 'react';

import { useCategoriesFilters } from '@/lib/stores/useCategoriesFilters';

import { Badge } from '@/components/ui';
import type { BadgeProps } from '@/components/ui/badge/types';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

export type Category = { name: string; intent: BadgeProps['intent'] };

export type CategoryTagProps = BadgeProps & {
  category: Category;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

// Known categories
const CategoryTag: FC<CategoryTagProps> = ({ size, category, ...rest }) => {
  const filter = useCategoriesFilters((state) => state.filter);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Badge
      size={size}
      variant="secondary"
      intent={category.intent || 'none'}
      className="hover:cursor-pointer hover:underline"
      onClick={() => filter(category.name)}
      {...rest}
    >
      {category.name}
    </Badge>
  );
};

CategoryTag.displayName = 'CategoryTag';

export default CategoryTag;
