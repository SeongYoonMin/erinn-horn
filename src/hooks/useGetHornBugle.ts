import { useQuery } from "@tanstack/react-query";
import { getHornBugleWorld } from "../service/getHornBugleWorld";
import type { MabinogiServerName } from "../types/nexon";

export const useGetHornBugle = ({
  serverName,
}: {
  serverName: MabinogiServerName;
}) => {
  return useQuery({
    queryKey: ["getHornBugleWorld", serverName],
    queryFn: () => getHornBugleWorld({ serverName }),
    staleTime: 1000 * 60 * 1,
    enabled: !!serverName,
  });
};
