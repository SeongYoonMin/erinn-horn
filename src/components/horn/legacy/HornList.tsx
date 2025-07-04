import type { INexonHornBugleWorldHistory } from "@/types/nexon";
import HornItems from "./HornItems";

const HornList = ({
  hornData,
  observerRef,
}: {
  hornData: INexonHornBugleWorldHistory[];
  observerRef: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div className="flex flex-col gap-5 py-10">
      {hornData.map((item: INexonHornBugleWorldHistory, index) => (
        <HornItems key={`${item.character_name}-${index}`} hornBugle={item} />
      ))}
      <div ref={observerRef} />
    </div>
  );
};

export default HornList;
