import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVER_NAME } from "@/constant/server";
import type { MabinogiServerName } from "@/types/nexon";

const ServerForm = ({
  serverName,
  setServerName,
}: {
  serverName: MabinogiServerName;
  setServerName: (serverName: MabinogiServerName) => void;
}) => {
  const serverList = SERVER_NAME;
  return (
    <Select defaultValue={serverName} onValueChange={setServerName}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {serverList.map((server) => (
          <SelectItem key={server} value={server}>
            {server}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ServerForm;
