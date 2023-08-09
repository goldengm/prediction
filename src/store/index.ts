import { create } from "zustand";
import { DAppSlice, createDAppSlice } from "./slice/dapp";

type StoreState = DAppSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createDAppSlice(...a),
}));
