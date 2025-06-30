import type { INexonHornBugleWorldHistory } from "@/types/nexon";
import { formatDate } from "@/utils/formatDate";

const HornItems = ({
  hornBugle,
}: {
  hornBugle: INexonHornBugleWorldHistory;
}) => {
  return (
    <div className="flex hornBugles-center justify-center shadow-md p-5 rounded-md gap-2">
      {!hornBugle.message.includes(hornBugle.character_name) && (
        <p>{`${hornBugle.character_name} : `}</p>
      )}
      <p>{hornBugle.message}</p>
      <p>{formatDate(hornBugle.date_send)}</p>
    </div>
  );
};

export default HornItems;
