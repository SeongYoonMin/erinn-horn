import { useGetHornBugleInfinite } from "@/hooks";
import { useEffect, useState } from "react";
import type { MabinogiServerName } from "@/types/nexon";
import { HornList, KeywordForm, ServerForm } from "@/components/horn";

const HornContainer = () => {
  const [serverName, setServerName] = useState<MabinogiServerName>("류트");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const {
    data: hornData,
    isLoading,
    observerRef,
    loadMore,
    hasMore,
  } = useGetHornBugleInfinite(serverName);

  const handleServerName = (serverName: MabinogiServerName) => {
    setServerName(serverName);
  };

  const handleAddKeyword = (keyword: string) => {
    console.log(keywordList);
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
    <>
      <ServerForm serverName={serverName} setServerName={handleServerName} />
      <KeywordForm addKeyword={handleAddKeyword} />
      <HornList hornData={hornData} observerRef={observerRef} />
    </>
  );
};

export default HornContainer;
