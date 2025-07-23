import type { INexonHornBugleWorldHistory } from "@/types/nexon";
import { HornTable } from "./HornTable";
import { columns } from "./columns";

const HornList = ({
  hornData,
}: {
  hornData: INexonHornBugleWorldHistory[];
}) => {
  return <HornTable columns={columns} data={hornData} />;
};

export default HornList;
