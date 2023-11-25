import { create } from 'zustand';

interface ImmersiveBgState {
  enabled: boolean;
  toggle: () => void;
  disable: () => void;
}

export const useImmersiveBg = create<ImmersiveBgState>((set, get) => ({
  enabled: true,
  toggle: () => set({ enabled: !get().enabled }),
  disable: () => set({ enabled: false }),
}));
