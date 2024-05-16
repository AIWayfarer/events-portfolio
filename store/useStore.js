import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  bgImg: null,
  setBgImg: (value) => set({ bgImg: value }),
}));
