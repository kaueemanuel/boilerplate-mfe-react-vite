import { create } from "zustand"

interface CountState {
  count: number;
  add: () => void;
}

const useStore = create<CountState>((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
}))

export default useStore
