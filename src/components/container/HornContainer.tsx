import { useHornBugleList, useKeywordManage } from "@/hooks";
import type { MabinogiServerName } from "@/types/nexon";
import { useServerName } from "@/hooks";
import { uniqueIndex } from "@/utils/uniqueIndex";
import { ServerForm, KeywordForm, HornList } from "../horn";
import { useEffect } from "react";

const HornContainer = () => {
  const { serverName, setServerName } = useServerName();
  const { keywordList, handleAddKeyword, handleRemoveKeyword } =
    useKeywordManage();
  const { data: hornData, isLoading } = useHornBugleList(
    serverName,
    keywordList,
  );

  const handleServerName = (serverName: MabinogiServerName) => {
    setServerName(serverName);
  };
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="py-10 px-4 xl:px-0 space-y-5">
      <div className="flex flex-col items-center justify-center gap-4">
        <ServerForm serverName={serverName} setServerName={handleServerName} />
        <KeywordForm addKeyword={handleAddKeyword} />
        {keywordList.length > 0 ? (
          <ul className="mt-4 text-center flex items-center justify-center gap-2 flex-wrap">
            {keywordList.map((keyword, index) => (
              <li
                className="px-2 py-1 bg-gray-100 rounded-md flex items-center justify-center gap-2 text-[#333]"
                key={uniqueIndex(index)}
              >
                <p className="font-bold">{keyword}</p>
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleRemoveKeyword(keyword)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center text-gray-500">
            <p>
              검색어를 추가하시면 해당 검색어가 생성 될 시 알람이 나타납니다.
            </p>
          </div>
        )}
      </div>
      <HornList hornData={hornData} />
    </div>
  );
};

export default HornContainer;
