import { createStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type KeywordState = {
  keywordList: string[];
};

type KeywordActions = {
  addKeyword: (keyword: string) => void;
  removeKeyword: (keyword: string) => void;
  resetKeywordList: () => void;
};

type KeywordStore = KeywordState & KeywordActions;

export const keywordStore = createStore<KeywordStore>()(
  persist<KeywordStore>(
    (set) => ({
      keywordList: [],
      addKeyword: (keyword) =>
        set((state) => ({
          keywordList: [...new Set([...state.keywordList, keyword])],
        })),
      removeKeyword: (keyword) =>
        set((state) => ({
          keywordList: state.keywordList.filter((k) => k !== keyword),
        })),
      resetKeywordList: () => set({ keywordList: [] }),
    }),
    { name: "keyword-store", storage: createJSONStorage(() => sessionStorage) },
  ),
);
