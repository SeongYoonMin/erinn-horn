import { useStore } from "zustand";
import { keywordStore } from "@/stores/keywordStore";

export const useKeywordManage = () => {
  const { keywordList, addKeyword, removeKeyword, resetKeywordList } =
    useStore(keywordStore);

  const handleAddKeyword = (keyword: string) => {
    addKeyword(keyword);
  };

  const handleRemoveKeyword = (keyword: string) => {
    removeKeyword(keyword);
  };

  const handleResetKeywordList = () => {
    resetKeywordList();
  };

  return {
    keywordList,
    handleAddKeyword,
    handleRemoveKeyword,
    handleResetKeywordList,
  };
};
