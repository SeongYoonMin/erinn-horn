import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const KeywordForm = ({
  addKeyword,
}: {
  addKeyword: (keyword: string) => void;
}) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addKeyword(keyword);
    setKeyword("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex max-w-[400px] gap-2">
      <Input
        type="text"
        onChange={handleKeyword}
        className="py-1 px-2 flex-1 border rounded-md"
        placeholder="등록하고자 하는 키워드를 입력해주세요."
      />
      <Button type="submit" variant={"outline"} className="cursor-pointer">추가</Button>
    </form>
  );
};

export default KeywordForm;
