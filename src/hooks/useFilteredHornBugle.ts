import { useMemo } from "react";
import type { INexonHornBugleWorldHistory } from "@/types/nexon";

export const useFilteredHornBugle = ({
  hornData,
  search,
  page,
  pageSize,
}: {
  hornData: INexonHornBugleWorldHistory[];
  search: string;
  page: number;
  pageSize: number;
}) => {
  const filtered = useMemo(() => {
    let result = hornData;

    if (search.trim()) {
      result = result.filter((post) => post.message.includes(search));
    }

    return result;
  }, [hornData, search]);

  const visible = useMemo(() => {
    return filtered.slice(0, page * pageSize);
  }, [filtered, page, pageSize]);

  return { filteredHornData: filtered, visibleHornData: visible };
};
