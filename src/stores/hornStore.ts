import { create } from "zustand";

interface HornStore {
  serverName: string;
  keywordList: string[];
  setServerName: (serverName: string) => void;
  setKeywordList: (keywordList: string[]) => void;
  resetKeywordList: () => void;
}

export const useHornStore = create<HornStore>((set) => ({
  serverName: "",
  keywordList: [],
  setServerName: (serverName) => set({ serverName }),
  setKeywordList: (keywordList) => set({ keywordList }),
  resetKeywordList: () => set({ keywordList: [] }),
}));
