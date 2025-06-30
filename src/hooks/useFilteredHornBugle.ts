// hooks/useGetHornBugleInfinite.ts
import { useRef, useState, useCallback } from "react";
import { useGetHornBugle } from "@/hooks"; // 원래의 데이터 패칭 훅
import type { MabinogiServerName } from "@/types/nexon";

const PAGE_SIZE = 20;

export function useGetHornBugleInfinite(serverName: MabinogiServerName, keywordList: string[]) {
  const { data = [], isLoading } = useGetHornBugle({ serverName });
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const visibleData = keywordList.length > 0 ? data.filter(({ message }) =>
    keywordList.some(keyword => message.includes(keyword))
  ).slice(0, page * PAGE_SIZE) : data.slice(0, page * PAGE_SIZE);
  const hasMore = visibleData.length < data.length;

  const loadMore = useCallback(() => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore]);

  // IntersectionObserver는 컴포넌트에서 등록
  return {
    observerRef,
    data: visibleData,
    isLoading,
    loadMore,
    hasMore,
  };
}