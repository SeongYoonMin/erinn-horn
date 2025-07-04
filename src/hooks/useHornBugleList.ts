import { useGetHornBugle } from "@/hooks/api/useGetHornBugle"; // 원래의 데이터 패칭 훅
import type { MabinogiServerName } from "@/types/nexon";

export function useHornBugleList(
  serverName: MabinogiServerName,
  keywordList: string[],
) {
  const { data = [], isLoading } = useGetHornBugle({ serverName });

  const visibleData =
    keywordList.length > 0
      ? data.filter(({ message }) =>
          keywordList.some((keyword) => message.includes(keyword)),
        )
      : data;

  return {
    data: visibleData,
    isLoading,
  };
}
