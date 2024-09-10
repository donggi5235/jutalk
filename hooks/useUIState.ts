import { create } from "zustand";

interface StoreState {
  count: number
  increase: () => void
  decrease: () => void
}

const useUIState = create<StoreState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useUIState;
