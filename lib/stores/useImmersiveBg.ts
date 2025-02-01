import { ReadonlyURLSearchParams } from 'next/navigation';

import { create } from 'zustand';

interface ImmersiveBgState {
  enabled: boolean;
  toggle: () => void;
  disable: () => void;

  enabledWithConditions: boolean;
  toggleWithConditions: (isMobile: boolean, path: string, query?: ReadonlyURLSearchParams) => void;
}

export const useImmersiveBg = create<ImmersiveBgState>((set, get) => ({
  enabled: true,
  toggle: () => set({ enabled: !get().enabled }),
  disable: () => set({ enabled: false }),

  enabledWithConditions: false,
  toggleWithConditions: (isMobile, path, query) => {
    set({
      enabledWithConditions:
        get().enabled &&
        !isMobile &&
        !query?.get('pdf') &&
        (path === '/' || path === '/writing' || path === '/portfolio' || path === '/resume'),
    });
  },
}));
