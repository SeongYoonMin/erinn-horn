import { customAxios } from "@/lib/axios";
import type {
  INexonHornBugleWorldHistory,
  MabinogiServerName,
} from "@/types/nexon";

export const getHornBugleWorld = async ({
  serverName,
}: {
  serverName: MabinogiServerName;
}) => {
  const response = await customAxios.get<{
    horn_bugle_world_history: INexonHornBugleWorldHistory[];
  }>(`/horn-bugle-world/history`, {
    params: {
      server_name: serverName,
    },
  });
  return response.data.horn_bugle_world_history;
};
