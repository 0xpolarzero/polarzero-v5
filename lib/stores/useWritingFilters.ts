import { create } from 'zustand';

import { Category } from '@/components/templates/category-tag';

interface WritingFiltersState {
  currentFilter: Category | null;
  filter: (category: Category | null) => void;
}

export const useWritingFilters = create<WritingFiltersState>((set) => ({
  currentFilter: null,
  filter: (category) => set({ currentFilter: category }),
}));
