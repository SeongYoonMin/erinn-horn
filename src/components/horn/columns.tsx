"use client";

import type { INexonHornBugleWorldHistory } from "@/types/nexon";
import { formatDate } from "@/utils/formatDate";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<INexonHornBugleWorldHistory>[] = [
  {
    accessorKey: "character_name",
    header: "캐릭터 이름",
  },
  {
    accessorKey: "message",
    header: "메시지",
    cell: ({ row }) => {
      const { message } = row.original;
      return <p>{message.replace(`${row.original.character_name} : `, "")}</p>;
    },
  },
  {
    accessorKey: "date_send",
    header: "뿔피리 시간",
    cell: ({ row }) => {
      const { date_send } = row.original;
      return <p>{formatDate(date_send)}</p>;
    },
  },
];
