import { useGetHornBugle } from "../../hooks/useGetHornBugle";
import { formatDate } from "../../utils/formatDate";
import { useEffect, useRef, useState } from "react";
import type { INexonHornBugleWorldHistory } from "../../types/nexon";

const PAGE_SIZE = 20;

const HornContainer = () => {
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement>(null);

  const { data = [], isLoading } = useGetHornBugle({ serverName: "류트" });
  const hornData = data.slice(0, PAGE_SIZE * page);

  useEffect(() => {
    if (!observerRef.current || hornData.length >= data.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hornData, data]);

  if (isLoading) return <div>Loading...</div>;
  if (data.length === 0) return null;
  return (
    <div className="flex flex-col gap-5 py-10">
      {hornData.map((item: INexonHornBugleWorldHistory) => (
        <div
          key={item.character_name}
          className="flex items-center justify-center shadow-md p-5 rounded-md gap-2"
        >
          {!item.message.includes(item.character_name) && (
            <p>{`${item.character_name} : `}</p>
          )}
          <p>{item.message}</p>
          <p>{formatDate(item.date_send)}</p>
        </div>
      ))}
      <div ref={observerRef} />
    </div>
  );
};

export default HornContainer;
