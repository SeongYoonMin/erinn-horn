import { useGetHornBugleInfinite } from "@/hooks";
import { useEffect, useState } from "react";
import type { MabinogiServerName } from "@/types/nexon";
import { HornList, ServerForm, KeywordForm } from "@/components/horn";


const HornContainer = () => {
  const [serverName, setServerName] = useState<MabinogiServerName>("류트");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const {
    data: hornData,
    isLoading,
    observerRef,
    loadMore,
    hasMore,
  } = useGetHornBugleInfinite(serverName, keywordList);

  const handleServerName = (serverName: MabinogiServerName) => {
    setServerName(serverName);
  };

  const handleAddKeyword = (keyword: string) => {
    setKeywordList((prev) => [...prev, keyword]);
  };

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [observerRef, loadMore, hasMore]);

  if (isLoading) return <div>Loading...</div>;
  if (hornData.length === 0) return null;

  return (
    <div className="py-5 px-4 xl:px-0">
      <div className="flex items-center justify-center gap-4">
        <ServerForm serverName={serverName} setServerName={handleServerName} />
        <KeywordForm addKeyword={handleAddKeyword} />
      </div>
      <div className="mt-4 text-center text-gray-500">
        {keywordList.length > 0 ? (
          <p>
            검색어:{" "}
            {keywordList.map((keyword, index) => (
              <span key={index} className="font-bold">
                {keyword}
                {index < keywordList.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        ) : <div className="flex itmes-center justify-center py-10"><p>검색어를 추가하시면 해당 검색어가 생성 될 시 알람이 나타납니다.</p></div>}
      </div>
      <HornList hornData={hornData} observerRef={observerRef} />
    </div>
  );
};

export default HornContainer;
