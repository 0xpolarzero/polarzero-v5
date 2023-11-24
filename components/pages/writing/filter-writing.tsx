import type { FC } from 'react';

import { Filter } from 'lucide-react';

import { CATEGORIES } from '@/lib/constants/writing';
import { useWritingFilters } from '@/lib/stores/useWritingFilters';

import { Category } from '@/components/templates/category-tag';
import { Button, Select } from '@/components/ui';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FilterWriting: FC = () => {
  const { currentFilter, filter } = useWritingFilters((state) => ({
    currentFilter: state.currentFilter,
    filter: state.filter,
  }));

  return (
    <div className="flex items-center space-x-4">
      <div className="text-gray-11">
        <Filter />
      </div>
      <Select
        size="md"
        variant="primary"
        intent="none"
        value={currentFilter ? currentFilter : 'All categories'}
        onChange={(e) =>
          e.target.value == 'All categories' ? filter(null) : filter(e.target.value as Category)
        }
      >
        <option>All categories</option>
        {CATEGORIES.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </Select>
      <Button size="md" variant="ghost" intent="none" onClick={() => filter(null)}>
        Clear
      </Button>
    </div>
  );
};

FilterWriting.displayName = 'FilterWriting';

export default FilterWriting;
