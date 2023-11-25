import { create } from 'zustand';

interface ImmersiveBgState {
  enabled: boolean;
  toggle: () => void;
  disable: () => void;

  enabledWithConditions: boolean;
  toggleWithConditions: (isMobile: boolean, path: string) => void;
}

export const useImmersiveBg = create<ImmersiveBgState>((set, get) => ({
  enabled: true,
  toggle: () => set({ enabled: !get().enabled }),
  disable: () => set({ enabled: false }),

  enabledWithConditions: false,
  toggleWithConditions: (isMobile, path) => {
    set({
      enabledWithConditions:
        get().enabled &&
        !isMobile &&
        (path === '/' || path === '/writing' || path === '/portfolio' || path === '/hire-me'),
    });
  },
}));
