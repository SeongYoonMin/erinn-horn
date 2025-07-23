import type { MabinogiServerName } from "@/types/nexon";
import { useState } from "react";

export const useServerName = (name: MabinogiServerName = "류트") => {
  const [serverName, setServerName] = useState<MabinogiServerName>(name);
  return { serverName, setServerName };
};
